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

    // 슬라이더 이미지 우클릭·드래그 저장 차단
    track.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', (e) => e.preventDefault());
      img.addEventListener('dragstart',   (e) => e.preventDefault());
    });

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

/* ── Decalcomanie Word Emitter (entropy, story, cord) ── */
document.addEventListener('DOMContentLoaded', () => {
  const emitters = document.querySelectorAll('.decal-word-emitter');
  if (!emitters.length) return;

  const WORDS = ['entropy', 'story', 'cord'];

  emitters.forEach(emitter => {
    let timeoutId = null;

    function emitWord() {
      // 1.5초 ~ 2.4초 사이의 랜덤한 타이밍에 단어 생성
      const delay = 1400 + Math.random() * 1000;
      
      timeoutId = setTimeout(() => {
        if (!document.body.contains(emitter)) return;

        const selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        const span = document.createElement('span');
        span.className = 'decal-word';
        span.textContent = selectedWord;
        
        // 정중앙(50%, 50%) 방출 지점 설정
        span.style.left = '50%';
        span.style.top = '50%';
        span.style.transform = 'translate(-50%, -50%) scale(0.4)';
        span.style.opacity = '0';
        
        emitter.appendChild(span);

        // 강제 reflow 후 애니메이션 동작
        requestAnimationFrame(() => {
          // 0 ~ 360도 임의의 방향
          const angle = Math.random() * Math.PI * 2;
          // 방출 반경 (80px ~ 180px)
          const distance = 80 + Math.random() * 100;
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;
          const rotate = -18 + Math.random() * 36; // -18도 ~ 18도 임의 회전
          const scale = 0.85 + Math.random() * 0.35; // 0.85 ~ 1.2 배율

          span.style.transition = 'transform 3.4s cubic-bezier(0.12, 0.75, 0.3, 0.98), opacity 3.4s cubic-bezier(0.12, 0.75, 0.3, 0.98)';
          span.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${scale}) rotate(${rotate}deg)`;
          span.style.opacity = '0.8';

          // 1.6초 뒤 서서히 흐려지며 사라지도록 추가 트리거
          setTimeout(() => {
            if (span.parentNode) {
              span.style.opacity = '0';
            }
          }, 1600);
        });

        // 3.4초의 전체 애니메이션이 끝나면 DOM에서 완전 제거
        setTimeout(() => {
          if (span.parentNode) {
            span.remove();
          }
        }, 3400);

        // 다음 방출 예약
        emitWord();
      }, delay);
    }

    emitWord();
  });
});
