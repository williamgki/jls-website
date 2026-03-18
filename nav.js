// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');
if (toggle && navList) {
    toggle.addEventListener('click', () => {
        const open = navList.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
    // Close nav on outside click
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Active nav item
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a, .footer-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('nav-active');
    }
});
