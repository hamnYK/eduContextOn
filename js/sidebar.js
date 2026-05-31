/* ================================================
   WORFLOGY — sidebar.js (eduContextOn)
   Sidebar Active Link Highlighter & Mobile Menu Controller
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const isEnglish = window.location.pathname.includes('/en/') || window.location.href.includes('/en/');

  // 1. Active Nav Item Highlighting
  const path = location.pathname.split('/').pop() || 'index.html';
  sidebar.querySelectorAll('.nav-item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
    if (href === 'projects.html' && path.startsWith('project-')) {
      a.classList.add('active');
    }
  });

  // 2. Dynamic Mobile Hamburger & Overlay Injection
  let hamburger = document.querySelector('.hamburger');
  let overlay = document.querySelector('.sidebar-overlay');

  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', isEnglish ? 'Open Menu' : '메뉴 열기');
    hamburger.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    document.body.prepend(hamburger);
  }

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.prepend(overlay);
  }

  // 3. Mobile Hamburger & Overlay Controller
  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
});
