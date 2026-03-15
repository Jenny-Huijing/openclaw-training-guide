/**
 * OpenClaw Training Guide - Main JavaScript
 * Enhanced interactivity and UX
 */

(function() {
    'use strict';

    // DOM Elements
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Mobile menu toggle
    function createMobileMenuToggle() {
        if (window.innerWidth <= 768) {
            let toggle = document.querySelector('.mobile-menu-toggle');
            if (!toggle) {
                toggle = document.createElement('button');
                toggle.className = 'mobile-menu-toggle';
                toggle.setAttribute('aria-label', '切换导航菜单');
                toggle.innerHTML = '☰';
                toggle.addEventListener('click', () => {
                    sidebar.classList.toggle('open');
                    toggle.setAttribute('aria-expanded', 
                        sidebar.classList.contains('open'));
                });
                document.body.appendChild(toggle);
            }
        }
    }
    
    // Active navigation highlighting
    function highlightActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu after click
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('open');
                    }
                }
            });
        });
    }
    
    // Lazy loading images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    // Code block copy functionality
    function initCodeCopy() {
        document.querySelectorAll('.code-block').forEach(block => {
            const button = document.createElement('button');
            button.className = 'code-copy-btn';
            button.textContent = '复制';
            button.setAttribute('aria-label', '复制代码');
            
            button.addEventListener('click', () => {
                const code = block.querySelector('code').textContent;
                navigator.clipboard.writeText(code).then(() => {
                    button.textContent = '已复制!';
                    setTimeout(() => {
                        button.textContent = '复制';
                    }, 2000);
                });
            });
            
            block.style.position = 'relative';
            block.appendChild(button);
        });
    }
    
    // Scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--primary-light));
            z-index: 1000;
            transition: width 0.1s;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Keyboard navigation
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // ESC to close mobile menu
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
    
    // Initialize all features
    function init() {
        createMobileMenuToggle();
        initSmoothScroll();
        initLazyLoading();
        initCodeCopy();
        initScrollProgress();
        initKeyboardNav();
        
        // Event listeners
        window.addEventListener('scroll', highlightActiveNav, { passive: true });
        window.addEventListener('resize', () => {
            createMobileMenuToggle();
            if (window.innerWidth > 768) {
                sidebar.classList.remove('open');
            }
        });
        
        // Initial highlight
        highlightActiveNav();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();