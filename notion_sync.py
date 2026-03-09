#!/usr/bin/env python3
"""
Notion to GitHub Blog Sync Script
==================================

這個腳本用於自動將 Notion 頁面同步到 GitHub 部落格。
使用方法：
    python notion_sync.py

設置步驟：
1. 在 Notion 中創建 Integration：https://www.notion.so/my-integrations
2. 獲取 NOTION_API_KEY
3. 創建 Notion 資料庫並獲取 DATABASE_ID
4. 設置 GitHub Token
5. 設置環境變量或修改下方配置

環境變量：
    NOTION_API_KEY: Notion API Key
    NOTION_DATABASE_ID: Notion 資料庫 ID
    GITHUB_TOKEN: GitHub Personal Access Token
    REPO_OWNER: GitHub 用戶名
    REPO_NAME: 倉庫名稱
"""

import os
import json
import requests
from datetime import datetime
from pathlib import Path

# ====================
# 配置 - 請修改這些值
# ====================

# Notion 配置
NOTION_API_KEY = os.environ.get('NOTION_API_KEY', 'your-notion-api-key')
NOTION_DATABASE_ID = os.environ.get('NOTION_DATABASE_ID', 'your-database-id')

# GitHub 配置
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN', 'your-github-token')
REPO_OWNER = 'Demianyuen'  # 你的 GitHub 用戶名
REPO_NAME = 'demianyuen.github.io'  # 你的部落格倉庫

# 本地路徑配置
LOCAL_BLOG_PATH = Path('./blog-demian')
ARTICLES_PATH = LOCAL_BLOG_PATH / 'articles'

# ====================
# GitHub API 函數
# ====================

def get_github_headers():
    return {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    }

def get_existing_files():
    """獲取倉庫中現有的文章文件"""
    url = f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{ARTICLES_PATH.name}'
    response = requests.get(url, headers=get_github_headers())
    
    if response.status_code == 200:
        return {f['name']: f['sha'] for f in response.json() if f['name'].endswith('.md')}
    return {}

def upload_file(file_path, content, message, sha=None):
    """上傳文件到 GitHub"""
    url = f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{file_path}'
    
    data = {
        'message': message,
        'content': content,
        'branch': 'main'
    }
    
    if sha:
        data['sha'] = sha
    
    response = requests.put(url, headers=get_github_headers(), json=data)
    return response.status_code in [200, 201]

# ====================
# Notion API 函數
# ====================

def get_notion_headers():
    return {
        'Authorization': f'Bearer {NOTION_API_KEY}',
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
    }

def query_notion_database():
    """查詢 Notion 資料庫中的所有文章"""
    url = f'https://api.notion.com/v1/databases/{NOTION_DATABASE_ID}/query'
    
    response = requests.post(url, headers=get_notion_headers(), json={
        'filter': {
            'property': 'Status',
            'status': {
                'equals': 'Published'
            }
        },
        'sorts': [{
            'property': 'Date',
            'direction': 'descending'
        }]
    })
    
    if response.status_code == 200:
        return response.json().get('results', [])
    return []

def get_page_content(page_id):
    """獲取 Notion 頁面的完整內容"""
    url = f'https://api.notion.com/v1/blocks/{page_id}/children'
    
    response = requests.get(url, headers=get_notion_headers())
    
    if response.status_code == 200:
        return response.json().get('results', [])
    return []

def notion_to_markdown(blocks, title, date, category):
    """將 Notion 區塊轉換為 Markdown 格式"""
    
    markdown = f"""---
title: "{title}"
date: {date}
category: "{category}"
layout: article
---

# {title}

"""
    
    for block in blocks:
        block_type = block.get('type')
        
        if block_type == 'paragraph':
            text = block['paragraph'].get('rich_text', [])
            if text:
                markdown += convert_rich_text(text) + '\n\n'
        
        elif block_type == 'heading_1':
            text = block['heading_1'].get('rich_text', [])
            if text:
                markdown += f'## {convert_rich_text(text)}\n\n'
        
        elif block_type == 'heading_2':
            text = block['heading_2'].get('rich_text', [])
            if text:
                markdown += f'### {convert_rich_text(text)}\n\n'
        
        elif block_type == 'heading_3':
            text = block['heading_3'].get('rich_text', [])
            if text:
                markdown += f'#### {convert_rich_text(text)}\n\n'
        
        elif block_type == 'bulleted_list_item':
            text = block['bulleted_list_item'].get('rich_text', [])
            if text:
                markdown += f'- {convert_rich_text(text)}\n'
        
        elif block_type == 'numbered_list_item':
            text = block['numbered_list_item'].get('rich_text', [])
            if text:
                markdown += f'1. {convert_rich_text(text)}\n'
        
        elif block_type == 'quote':
            text = block['quote'].get('rich_text', [])
            if text:
                markdown += f'> {convert_rich_text(text)}\n\n'
        
        elif block_type == 'code':
            code_info = block['code']
            language = code_info.get('language', '')
            text = code_info.get('rich_text', [])
            if text:
                code_content = convert_rich_text(text)
                markdown += f'```{language}\n{code_content}\n```\n\n'
        
        elif block_type == 'image':
            image_info = block['image']
            if image_info.get('type') == 'external':
                image_url = image_info['external']['url']
            else:
                image_url = image_info['file']['url']
            markdown += f'![Image]({image_url})\n\n'
    
    return markdown

def convert_rich_text(rich_text_list):
    """將 Notion rich text 轉換為普通文字"""
    result = ''
    for text in rich_text_list:
        content = text.get('plain_text', '')
        
        if text.get('annotations', {}).get('bold'):
            content = f'**{content}**'
        if text.get('annotations', {}).get('italic'):
            content = f'*{content}*'
        if text.get('annotations', {}).get('strikethrough'):
            content = f'~~{content}~~'
        if text.get('annotations', {}).get('code'):
            content = f'`{content}`'
        
        # Handle links
        if text.get('href'):
            content = f'[{content}]({text["href"]})'
        
        result += content
    
    return result

# ====================
# 主程式
# ====================

def main():
    print('🚀 開始同步 Notion 文章到 GitHub...')
    
    # 確保目錄存在
    ARTICLES_PATH.mkdir(parents=True, exist_ok=True)
    
    # 獲取現有文件
    existing_files = get_existing_files()
    print(f'📁 現有文章數量: {len(existing_files)}')
    
    # 獲取 Notion 文章
    print('📝 正在從 Notion 獲取文章...')
    pages = query_notion_database()
    print(f'   找到 {len(pages)} 篇已發布的文章')
    
    synced_count = 0
    
    for page in pages:
        # 獲取頁面屬性
        props = page.get('properties', {})
        
        # 根據你的 Notion 資料庫結構調整
        title = props.get('Name', {}).get('title', [{}])[0].get('plain_text', 'Untitled')
        date = props.get('Date', {}).get('date', {}).get('start', datetime.now().strftime('%Y-%m-%d'))
        category = props.get('Category', {}).get('select', {}).get('name', '未分類')
        slug = props.get('Slug', {}).get('rich_text', [{}])[0].get('plain_text', title.lower().replace(' ', '-'))
        
        # 獲取文章內容
        content_blocks = get_page_content(page['id'])
        
        # 轉換為 Markdown
        markdown_content = notion_to_markdown(content_blocks, title, date, category)
        
        # 準備文件名
        filename = f"{date}-{slug}.md"
        file_path = f"articles/{filename}"
        
        # 檢查是否需要更新
        existing_sha = existing_files.get(filename)
        
        # 上傳到 GitHub
        import base64
        content_encoded = base64.b64encode(markdown_content.encode('utf-8')).decode('utf-8')
        
        message = f'Sync: {title}'
        
        if upload_file(file_path, content_encoded, message, existing_sha):
            synced_count += 1
            print(f'   ✅ 已同步: {title}')
        else:
            print(f'   ❌ 同步失敗: {title}')
    
    print(f'\n✨ 同步完成！共同步 {synced_count} 篇文章。')

if __name__ == '__main__':
    main()
