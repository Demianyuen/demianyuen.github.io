/* ===================================
   AI搞錢實驗室 - JavaScript
   =================================== */

// Article Data - All Articles for the Blog
const articles = [
    // Article 1: OpenClaw Introduction
    {
        id: 1,
        title: "OpenClaw 是什麼？為何它能讓你賺錢？",
        slug: "openclaw-intro",
        excerpt: "2026年爆紅的開源AI框架「小龍蝦」席捲全球！它如何讓普通人實現自動化賺錢？",
        content: "完整文章內容...",
        category: "OpenClaw 教學",
        date: "2026-03-10",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        readTime: "5 分鐘",
        tags: ["OpenClaw", "AI賺錢", "自動化"]
    },
    // Article 2: OpenClaw 變現模式
    {
        id: 2,
        title: "OpenClaw 5 大變現模式：從月薪 3 千到年入百萬",
        slug: "openclaw-monetization",
        excerpt: "代部署、模板銷售、培訓、諮詢、自動化系統——5 種經過驗證的賺錢方法詳細拆解",
        content: "完整文章內容...",
        category: "變現攻略",
        date: "2026-03-09",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop",
        readTime: "8 分鐘",
        tags: ["OpenClaw", "變現", "賺錢"]
    },
    // Article 3: OpenClaw 賺錢經驗
    {
        id: 3,
        title: "從 0 到月入 3000：我的 OpenClaw 賺錢之旅",
        slug: "openclaw-income-story",
        excerpt: "真實案例分享：如何用 OpenClaw 搭建自動化系統，每月穩定收入 3000+",
        content: "完整文章內容...",
        category: "賺錢經驗",
        date: "2026-03-08",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        readTime: "6 分鐘",
        tags: ["OpenClaw", "被動收入", "案例"]
    },
    // Article 4: OpenClaw 安全問題
    {
        id: 4,
        title: "OpenClaw 安全嗎？3 個你必須注意的風險",
        slug: "openclaw-safety",
        excerpt: "資金安全、隱私保護、合規性——使用 OpenClaw 前必須知道的關鍵事項",
        content: "完整文章內容...",
        category: "安全須知",
        date: "2026-03-07",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        readTime: "5 分鐘",
        tags: ["OpenClaw", "安全", "風險"]
    },
    // Article 5: OpenClaw vs 傳統 AI
    {
        id: 5,
        title: "OpenClaw vs 傳統 AI工具：為何它是未來趨勢",
        slug: "openclaw-vs-traditional",
        excerpt: "執行型 AI 席捲全球！OpenClaw 如何顛覆傳統 AI 應用，成為 2026 年最大風口？",
        content: "完整文章內容...",
        category: "趨勢分析",
        date: "2026-03-06",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
        readTime: "7 分鐘",
        tags: ["OpenClaw", "趨勢", "AI"]
    },
    // Article 6: OpenClaw 一鍵安裝
    {
        id: 6,
        title: "OpenClaw 一鍵安裝教學：5 分鐘搞定你的私人 AI 助理",
        slug: "openclaw-install",
        excerpt: "超詳細圖文教學！從環境準備到連接 Telegram/Discord，5 分鐘快速上手",
        content: "完整文章內容...",
        category: "安裝教學",
        date: "2026-03-05",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&fit=crop",
        readTime: "10 分鐘",
        tags: ["OpenClaw", "安裝", "教學"]
    },
    // Article 7: AI 模型比較
    {
        id: 7,
        title: "2026 年最強 AI 模型對比：GPT-5.2 vs Claude Opus 4.6 vs Gemini 3 Pro",
        slug: "ai-models-2026",
        excerpt: "深度評測 2026 三大旗艦 AI 模型：編碼、推理、寫作、多模態能力全面對比",
        content: "完整文章內容...",
        category: "AI 評測",
        date: "2026-03-04",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=500&fit=crop",
        readTime: "12 分鐘",
        tags: ["AI", "GPT-5", "Claude", "Gemini", "2026"]
    },
    // Article 8: 個人 AI 助手推薦
    {
        id: 8,
        title: "個人 AI 助手哪個好？2026 適合普通人的 AI 工具推薦",
        slug: "ai-assistant-recommend",
        excerpt: "從免費到付費，從寫作到編碼——最適合普通人的 AI 助手完整推薦指南",
        content: "完整文章內容...",
        category: "AI 推薦",
        date: "2026-03-03",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=500&fit=crop",
        readTime: "8 分鐘",
        tags: ["AI助手", "推薦", "工具"]
    },
    // Original Article: Why Humans Don't Like Work
    {
        id: 9,
        title: "為何人類天生不愛上班：從普魯士教育到現代勞動的困境與突圍",
        slug: "why-humans-dont-like-work",
        excerpt: "深度分析現代人工作痛苦的根源：狗屁工作、職業倦怠、內卷，以及突圍的可能性",
        content: "完整文章內容...",
        category: "社會觀察",
        date: "2026-03-02",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=500&fit=crop",
        readTime: "8 分鐘",
        tags: ["工作", "職業倦怠", "FIRE"]
    }
];

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedArticle();
    loadArticles();
    updateSubscriberCount();
    updatePageTitle();
});

// Load featured article (most recent)
function loadFeaturedArticle() {
    const featuredContainer = document.getElementById('featuredArticle');
    if (!featuredContainer) return;
    
    const featured = articles[0];
    
    featuredContainer.innerHTML = `
        <div class="featured-image" style="background-image: url('${featured.image}')"></div>
        <div class="featured-content">
            <span class="featured-tag">${featured.category}</span>
            <h3 class="featured-title">
                <a href="/article.html?slug=${featured.slug}">${featured.title}</a>
            </h3>
            <p class="featured-excerpt">${featured.excerpt}</p>
            <div class="featured-meta">
                <span>📅 ${featured.date}</span>
                <span>⏱️ ${featured.readTime}</span>
                <span>✍️ ${featured.author}</span>
            </div>
            <div class="article-tags" style="margin-top: 15px;">
                ${featured.tags.map(tag => `<span class="tag" style="background: #f0f0f0; padding: 3px 10px; font-size: 12px; border-radius: 15px; margin-right: 8px;">#${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// Load all articles
function loadArticles() {
    const articlesContainer = document.getElementById('articlesGrid');
    if (!articlesContainer) return;
    
    if (articles.length === 0) {
        articlesContainer.innerHTML = '<div class="no-results">暫無文章</div>';
        return;
    }
    
    articlesContainer.innerHTML = articles.map(article => `
        <article class="article-card">
            <div class="article-image" style="background-image: url('${article.image}')"></div>
            <div class="article-content">
                <span class="article-tag">${article.category}</span>
                <h3 class="article-title">
                    <a href="/article.html?slug=${article.slug}">${article.title}</a>
                </h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Search functionality
function searchArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const articlesContainer = document.getElementById('articlesGrid');
    
    if (!articlesContainer) return;
    
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.category.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    if (filteredArticles.length === 0) {
        articlesContainer.innerHTML = '<div class="no-results">沒有找到相關文章，試試其他關鍵詞？</div>';
        return;
    }
    
    articlesContainer.innerHTML = filteredArticles.map(article => `
        <article class="article-card">
            <div class="article-image" style="background-image: url('${article.image}')"></div>
            <div class="article-content">
                <span class="article-tag">${article.category}</span>
                <h3 class="article-title">
                    <a href="/article.html?slug=${article.slug}">${article.title}</a>
                </h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Update page title based on URL
function updatePageTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    const tag = urlParams.get('tag');
    
    if (tag) {
        document.title = `#${tag} - AI搞錢實驗室`;
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    
    // Here you would integrate with a service like Mailchimp, Substack, ConvertKit, etc.
    alert(`感謝訂閱！${email} 已加入 AI搞錢實驗室 的 mailing list。\n\n你將每週收到最新的 AI 變現攻略！`);
    event.target.reset();
}

// Update subscriber count (simulated)
function updateSubscriberCount() {
    const countElement = document.getElementById('subscriberCount');
    if (countElement) {
        // In a real app, this would fetch from a backend
        const count = Math.floor(Math.random() * 500) + 1000;
        countElement.textContent = count.toLocaleString();
    }
}

// Load article page
function loadArticlePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        window.location.href = '/';
        return;
    }
    
    const article = articles.find(a => a.slug === slug);
    
    if (!article) {
        document.querySelector('.article-page').innerHTML = '<div class="no-results">文章不存在</div>';
        return;
    }
    
    // Update page content
    document.title = `${article.title} - AI搞錢實驗室`;
    document.querySelector('.featured-title').textContent = article.title;
    document.querySelector('.featured-image').style.backgroundImage = `url('${article.image}')`;
    document.querySelector('.featured-meta').innerHTML = `
        <span>📅 ${article.date}</span>
        <span>⏱️ ${article.readTime}</span>
        <span>✍️ ${article.author}</span>
    `;
    
    // Add tags
    const tagsHtml = article.tags.map(tag => `<span class="tag" style="background: #f0f0f0; padding: 5px 12px; font-size: 13px; border-radius: 15px; margin-right: 8px;">#${tag}</span>`).join('');
    
    // In a real app, you would load the full content from a markdown file or API
    document.querySelector('.featured-content').innerHTML = `
        <span class="featured-tag">${article.category}</span>
        <p style="font-size: 18px; line-height: 1.8; margin: 20px 0;">${article.excerpt}</p>
        <p style="line-height: 2;">${article.content}</p>
        <div style="margin-top: 30px;">
            <strong>🏷️ 標籤：</strong>${tagsHtml}
        </div>
    `;
}

// Share functionality
function shareArticle(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'line':
            shareUrl = `https://line.me/R/msg/text/?${title}%20${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Copy link functionality
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('連結已複製到剪貼簿！');
    });
}

// Initialize article page if on article.html
if (window.location.pathname.includes('article.html')) {
    document.addEventListener('DOMContentLoaded', loadArticlePage);
}

// Export articles for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articles };
}
