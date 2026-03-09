# Demian's Blog

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-Linear-gradient(to right,#24292e,#0366d6)](https://demianyuen.github.io)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Demianyuen/demianyuen.github.io)](https://github.com/Demianyuen/demianyuen.github.io/stargazers)

> 獨立觀察 · 深度思考 - 一個使用 Notion 作為 CMS 的靜態部落格

![Blog Preview](images/preview.png)

## 📖 關於這個部落格

這是一個使用 **Notion** 作為內容管理系統，通過 **GitHub Pages** 托管的靜態部落格。

### 特點

- 📝 **Notion CMS** - 在 Notion 中撰寫文章，自動同步到部落格
- 🚀 **GitHub Pages** - 免費托管，自動部署
- 📱 **響應式設計** - 完美適配手機、平板、電腦
- 🔍 **SEO 優化** - 搜索引擎友好
- 📊 **變現功能** - 內建廣告位、訂閱功能
- ⚡ **靜態網站** - 加載快速，安全性高

## 🚀 快速開始

### 方法一：手動部署

1. **克隆倉庫**
   ```bash
   git clone https://github.com/Demianyuen/demianyuen.github.io.git
   cd demianyuen.github.io
   ```

2. **修改配置**
   - 編輯 `script.js` 中的文章數據
   - 更新 `index.html` 中的個人資訊

3. **推送發布**
   ```bash
   git add .
   git commit -m "Update blog"
   git push origin main
   ```

### 方法二：使用 Notion 同步

詳見 [Notion 同步教學](#notion-同步)

## 📝 Notion 同步

### 第一步：創建 Notion Integration

1. 前往 [Notion My Integrations](https://www.notion.so/my-integrations)
2. 點擊 "New integration"
3. 填寫名稱，選擇 "Internal integration"
4. 複製產生的 **Internal Integration Token**

### 第二步：創建 Notion 資料庫

1. 在 Notion 中創建一個資料庫（Database）
2. 添加以下屬性：
   - **Name** (Title) - 文章標題
   - **Slug** (Text) - 文章別名
   - **Date** (Date) - 發布日期
   - **Category** (Select) - 分類
   - **Status** (Status) - 狀態（Draft/Published）
   - **Excerpt** (Text) - 摘要
   - **Image** (URL) - 封面圖片

3. 點擊資料庫右上角的 `...` → `Connections` → 添加你的 Integration

### 第三步：設置環境變量

```bash
export NOTION_API_KEY="your-notion-api-key"
export NOTION_DATABASE_ID="your-database-id"
export GITHUB_TOKEN="your-github-token"
export REPO_OWNER="Demianyuen"
export REPO_NAME="demianyuen.github.io"
```

### 第四步：運行同步腳本

```bash
python notion_sync.py
```

### 自動化同步（可選）

可以使用 GitHub Actions 每天自動同步：

1. 創建 `.github/workflows/notion-sync.yml`
2. 設置 Secrets：`NOTION_API_KEY`, `NOTION_DATABASE_ID`, `GITHUB_TOKEN`
3. 設置定時觸發

## 💰 變現功能

### Google AdSense

1. 申請 [Google AdSense](https://www.google.com/adsense)
2. 獲得廣告客戶 ID
3. 在 `index.html` 中更換：
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" ...>
   ```

### 聯盟行銷

在文章中添加聯盟連結：
```html
<div class="affiliate-box">
    <h4>推薦閱讀</h4>
    <a href="your-affiliate-link" target="_blank">
        <img src="product-image.jpg" alt="Product">
        <p>Product Description</p>
    </a>
</div>
```

### 訂閱會員

1. 集成郵件服務（Mailchimp, Substack, ConvertKit）
2. 在 `script.js` 中配置 API
3. 啟用訂閱功能

## 📁 目錄結構

```
demianyuen.github.io/
├── index.html              # 首頁
├── article.html            # 文章頁面
├── styles.css             # 樣式表
├── script.js              # JavaScript
├── notion_sync.py         # Notion 同步腳本
├── _config.yml            # Jekyll 配置（如使用）
├── articles/              # 文章 Markdown 文件
│   └── 2026-03-10-*.md
├── images/                # 圖片資源
│   ├── og-default.jpg
│   └── preview.png
└── README.md              # 說明文檔
```

## 🎨 自定義

### 修改主題顏色

在 `styles.css` 中修改：
```css
:root {
    --accent-color: #dc2626;  /* 改為你喜歡的顏色 */
    --primary-color: #1a1a1a;
}
```

### 添加新頁面

1. 創建新的 HTML 文件
2. 在導航中添加連結
3. 推送更新

## 🔧 常見問題

### Q: 如何更新文章？
A: 在 `script.js` 的 `articles` 數組中添加或修改文章對象。

### Q: 如何添加評論功能？
A: 可以使用 Disqus、Gitalk 或 utterances。

### Q: 圖片在哪裡托管？
A: 可以使用 GitHub 倉庫的 `images` 文件夾，或 imgur、Cloudinary 等服務。

## 📄 License

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 🤝 貢獻

歡迎提交 Pull Request！

---

**Demian's Blog** - 用心書寫，與你分享
