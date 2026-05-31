/* ================================================
   WORFLOGY — main.js
   Sidebar active state, mobile menu, project graph
   ================================================ */

window.name = "worflogy_edu";

/* ── Active nav item & Mobile sidebar (sidebar.js로 이관됨) ── */

/* ── Platform Node Entrance Animation ── */
document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('.pm-anim');
  if (!nodes.length) return;
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(n => n.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || 0, 10);
        setTimeout(() => e.target.classList.add('visible'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  nodes.forEach(n => obs.observe(n));
});


/* ── Image Slider ── */
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider-container');
  sliders.forEach(container => {
    const track = container.querySelector('.slider-track');
    const items = track.querySelectorAll('.slider-item');
    const prevBtn = container.querySelector('.slider-btn.prev');
    const nextBtn = container.querySelector('.slider-btn.next');
    const dotsContainer = container.nextElementSibling;
    
    if (items.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      return;
    }

    let currentIndex = 0;

    if (dotsContainer && dotsContainer.classList.contains('slider-dots')) {
      items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });
    }

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateSlider();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
      });
    }
  });
});
