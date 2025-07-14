// Yang Hansen Official Website - Main JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的订阅！我们会及时向您发送最新动态。');
            this.reset();
        });
    }
    
    // Season selector for stats
    const seasonBtns = document.querySelectorAll('.season-btn');
    const statsGrid = document.getElementById('statsGrid');
    
    seasonBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            seasonBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const season = this.dataset.season;
            updateStats(season);
        });
    });
    
    function updateStats(season) {
        const stats = {
            cba2024: {
                points: '15.8',
                rebounds: '9.2',
                blocks: '2.3',
                fg: '64.5%'
            },
            nba2025: {
                points: '12.5',
                rebounds: '7.8',
                blocks: '1.9',
                fg: '58.2%'
            }
        };
        
        const currentStats = stats[season] || stats.cba2024;
        
        statsGrid.innerHTML = `
            <div class="stat-card">
                <h3>场均得分</h3>
                <p class="stat-number">${currentStats.points}</p>
            </div>
            <div class="stat-card">
                <h3>场均篮板</h3>
                <p class="stat-number">${currentStats.rebounds}</p>
            </div>
            <div class="stat-card">
                <h3>场均盖帽</h3>
                <p class="stat-number">${currentStats.blocks}</p>
            </div>
            <div class="stat-card">
                <h3>投篮命中率</h3>
                <p class="stat-number">${currentStats.fg}</p>
            </div>
        `;
    }
    
    // Remove skeleton loaders for video section (temporary)
    setTimeout(() => {
        const videoGrid = document.getElementById('videoGrid');
        if (videoGrid) {
            videoGrid.innerHTML = '<p style="text-align: center; color: #666;">视频内容即将上线...</p>';
        }
    }, 1000);
});