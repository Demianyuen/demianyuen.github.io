/* ===================================
   Demian's Blog - JavaScript
   =================================== */

// Article Data - This will be synced from Notion
const articles = [
    {
        id: 1,
        title: "為何人類天生不愛上班：從普魯士教育到現代勞動的困境與突圍",
        slug: "why-humans-dont-like-work",
        excerpt: "全球數十億人每天都在上演同樣的劇情——我們把生命中最精華的時間奉獻給那些讓我們感到空虛的工作。這個問題的答案，或許比你想的還要更深、更黑暗。",
        content: "完整文章內容...",
        category: "社會觀察",
        date: "2026-03-10",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=500&fit=crop",
        readTime: "8 分鐘"
    },
    {
        id: 2,
        title: "躺平背後的真相：年輕人為何選擇退出競爭",
        slug: "why-young-people-choose-to-lie-flat",
        excerpt: "當努力不再有意義，覺醒便成了唯一的出路。躺平不是逃避，而是對現有社會規則的無聲抗爭。",
        content: "完整文章內容...",
        category: "社會觀察",
        date: "2026-03-09",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
        readTime: "6 分鐘"
    },
    {
        id: 3,
        title: "FIRE運動：如何實現財務自由並提前退休",
        slug: "fire-movement-financial-independence",
        excerpt: "FIRE代表財務獨立、提早退休。透過極簡生活與高效投資，越來越多人在三四十歲時實現了真正的自由。",
        content: "完整文章內容...",
        category: "理財觀念",
        date: "2026-03-08",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop",
        readTime: "10 分鐘"
    },
    {
        id: 4,
        title: "數字遊牧：在大海中工作，在世界角落生活",
        slug: "digital-nomad-lifestyle",
        excerpt: "他們在巴厘島的海灘上寫代碼，在布宜諾斯艾利斯的咖啡廳裡做設計。數字遊牧正在重新定義工作的意義。",
        content: "完整文章內容...",
        category: "生活方式",
        date: "2026-03-07",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
        readTime: "7 分鐘"
    },
    {
        id: 5,
        title: "零工經濟：自由與焦慮的雙面刃",
        slug: "gig-economy-freedom-anxiety",
        excerpt: "擺脫了傳統的勞資僱傭關係，卻迎來了收入的不穩定。零工經濟到底是解放還是另一種束縛？",
        content: "完整文章內容...",
        category: "職場觀察",
        date: "2026-03-06",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
        readTime: "8 分鐘"
    },
    {
        id: 6,
        title: "內卷：當每個人都拼命向前，卻沒有人真正前進",
        slug: "involution-never-end-race",
        excerpt: "內卷描述的是一種集體困境：每個人都加倍努力，但回報卻沒有相應增加。這是系統性問題還是個人選擇？",
        content: "完整文章內容...",
        category: "社會觀察",
        date: "2026-03-05",
        author: "Demian",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
        readTime: "9 分鐘"
    }
];

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedArticle();
    loadArticles();
    updateSubscriberCount();
});

// Load featured article
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
                <span>${featured.date}</span>
                <span>${featured.readTime}</span>
                <span>${featured.author}</span>
            </div>
        </div>
    `;
}

// Load all articles
function loadArticles() {
    const articlesContainer = document.getElementById('articlesGrid');
    if (!articlesContainer) return;
    
    // Skip the first article (it's the featured one)
    const articlesList = articles.slice(1);
    
    if (articlesList.length === 0) {
        articlesContainer.innerHTML = '<div class="no-results">暫無文章</div>';
        return;
    }
    
    articlesContainer.innerHTML = articlesList.map(article => `
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
        article.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredArticles.length === 0) {
        articlesContainer.innerHTML = '<divclass="no-results">沒有找到相關文章</div>';
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

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    
    // Here you would integrate with a service like Mailchimp, Substack, etc.
    alert(`感謝訂閱！${email} 已加入我們的 mailing list。`);
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
    document.title = `${article.title} - Demian's Blog`;
    document.querySelector('.featured-title').textContent = article.title;
    document.querySelector('.featured-image').style.backgroundImage = `url('${article.image}')`;
    document.querySelector('.featured-meta').innerHTML = `
        <span>${article.date}</span>
        <span>${article.readTime}</span>
        <span>${article.author}</span>
    `;
    
    // In a real app, you would load the full content from a markdown file or API
    document.querySelector('.featured-content').innerHTML = `
        <p>${article.excerpt}</p>
        <p>（完整文章內容加載中...）</p>
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
