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

  const WORDS = ['ENTROPY', 'STORY', 'CORD'];

  emitters.forEach(emitter => {
    let timeoutId = null;

    function emitWord() {
      // 1.5초 ~ 2.4초 사이의 랜덤한 타이밍에 단어 생성
      const delay = 1400 + Math.random() * 1000;
      
      timeoutId = setTimeout(() => {
        if (!document.body.contains(emitter)) return;

        const selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        
        // 1. 외각 비행/블러 핸들링 래퍼 생성
        const wrapper = document.createElement('span');
        wrapper.className = 'decal-word-wrapper';
        wrapper.style.left = '50%';
        wrapper.style.top = '50%';
        wrapper.style.transform = 'translate(-50%, -50%) scale(0.4)';
        wrapper.style.opacity = '0';
        wrapper.style.filter = 'blur(12px)'; // 최초 파동 상태
        
        // 2. 내부 양자 요동 텍스트 생성
        const span = document.createElement('span');
        span.className = 'decal-word';
        span.textContent = selectedWord;
        
        wrapper.appendChild(span);
        emitter.appendChild(wrapper);

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

          // 1단계 트랜지션: 파동에서 선명한 입자로 변화 (0.8초 동안 빠르게 관측)
          wrapper.style.transition = 'transform 3.4s cubic-bezier(0.12, 0.75, 0.3, 0.98), opacity 0.8s ease-out, filter 0.8s ease-out';
          wrapper.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${scale}) rotate(${rotate}deg)`;
          wrapper.style.opacity = '0.85';
          wrapper.style.filter = 'blur(0px)'; // 선명한 관측 상태

          // 2단계 트랜지션: 1.4초 후 다시 파동으로 산란되며 기화 (2.0초 동안 느리게 소멸)
          setTimeout(() => {
            if (wrapper.parentNode) {
              wrapper.style.transition = 'transform 3.4s cubic-bezier(0.12, 0.75, 0.3, 0.98), opacity 2.0s ease-in, filter 2.0s ease-in';
              wrapper.style.opacity = '0';
              wrapper.style.filter = 'blur(16px)'; // 파동으로 흩어짐
            }
          }, 1400);
        });

        // 3.4초의 전체 애니메이션이 끝나면 DOM에서 완전 제거
        setTimeout(() => {
          if (wrapper.parentNode) {
            wrapper.remove();
          }
        }, 3400);

        // 다음 방출 예약
        emitWord();
      }, delay);
    }

    emitWord();
  });
});

/* ── Decalcomanie Fluid Physics Simulation (Random Morphing & Drift) ── */
document.addEventListener('DOMContentLoaded', () => {
  const connectors = document.querySelectorAll('.decalcomanie-connector');
  if (!connectors.length) return;

  connectors.forEach(connector => {
    const drops = [
      {
        leftEl: connector.querySelector('.left-drop-1'),
        rightEl: connector.querySelector('.right-drop-1'),
        baseLeft: 24, baseTop: 18,
        x: 0, y: 0, vx: 0, vy: 0,
        hueBase: 35, hueRange: 35,    // Warm Editorial (Hue: 0 ~ 70, Terracotta to Lemon Yellow)
        satBase: 82, satRange: 6,
        lightBase: 54, lightRange: 6,
        timeOffset: 0
      },
      {
        leftEl: connector.querySelector('.left-drop-2'),
        rightEl: connector.querySelector('.right-drop-2'),
        baseLeft: 36, baseTop: 32,
        x: 0, y: 0, vx: 0, vy: 0,
        hueBase: 220, hueRange: 40,   // Deep Intellectual (Hue: 180 ~ 260, Teal to Midnight Indigo/Violet)
        satBase: 80, satRange: 10,
        lightBase: 48, lightRange: 6,
        timeOffset: Math.PI / 3
      },
      {
        leftEl: connector.querySelector('.left-drop-3'),
        rightEl: connector.querySelector('.right-drop-3'),
        baseLeft: 42, baseTop: 48,
        x: 0, y: 0, vx: 0, vy: 0,
        hueBase: 95, hueRange: 50,    // Ethereal Catalyst (Hue: 45 ~ 145, Gold to Emerald Sage/Mint)
        satBase: 82, satRange: 10,
        lightBase: 52, lightRange: 6,
        timeOffset: Math.PI * 2 / 3
      }
    ];

    if (!drops[0].leftEl || !drops[0].rightEl) return;

    let animTime = 0;

    function update() {
      animTime += 0.015; // 프레임 진행도

      drops.forEach((d, idx) => {
        if (!d.leftEl || !d.rightEl) return;

        // 1. 무작위 노이즈 가속도 연산
        const forceX = (Math.random() - 0.5) * 0.22;
        const forceY = (Math.random() - 0.5) * 0.22;

        d.vx += forceX;
        d.vy += forceY;

        // 중심 복원력 (기준 반경 약 70px 제어)
        const dist = Math.sqrt(d.x * d.x + d.y * d.y);
        if (dist > 70) {
          d.vx -= (d.x / dist) * 0.15;
          d.vy -= (d.y / dist) * 0.15;
        }

        // 제동 댐핑
        d.vx *= 0.96;
        d.vy *= 0.96;

        d.x += d.vx;
        d.y += d.vy;

        // 2. border-radius 찌그러짐 연산 (아메바 모션)
        const t = animTime * 2.2 + d.timeOffset;
        const r1 = Math.round(42 + Math.sin(t) * 16);
        const r2 = Math.round(58 + Math.cos(t * 1.3) * 14);
        const r3 = Math.round(50 + Math.sin(t * 0.8) * 18);
        const r4 = Math.round(50 + Math.cos(t * 1.5) * 15);
        
        const borderRadiusVal = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;

        // 3. 실시간 Color Morphing (다중 파동 중첩 및 색 회전 속도 약 2.5배 가속)
        const tColor = animTime * 2.4 + d.timeOffset;
        const beatWave = Math.sin(tColor) * 0.65 + Math.sin(tColor * 1.7) * 0.35;
        
        // 전체 색상환을 느리게 도는 드리프트 성분 (약 24초에 한 바퀴 회전)
        const driftHue = (animTime * 15) % 360;
        const currentHue = (d.hueBase + beatWave * d.hueRange + driftHue) % 360;
        
        const currentSat = d.satBase + Math.cos(animTime * 1.2 + d.timeOffset) * d.satRange;
        const currentLight = d.lightBase + Math.sin(animTime * 1.5 + d.timeOffset) * d.lightRange;
        
        const colorVal = `hsl(${Math.round(currentHue)}, ${Math.round(currentSat)}%, ${Math.round(currentLight)}%)`;

        // 4. 스타일 할당 (대칭)
        d.leftEl.style.left = `calc(${d.baseLeft}% + ${d.x}px)`;
        d.leftEl.style.top = `calc(${d.baseTop}% + ${d.y}px)`;
        d.leftEl.style.borderRadius = borderRadiusVal;
        d.leftEl.style.backgroundColor = colorVal;

        d.rightEl.style.right = `calc(${d.baseLeft}% + ${d.x}px)`;
        d.rightEl.style.top = `calc(${d.baseTop}% + ${d.y}px)`;
        d.rightEl.style.borderRadius = borderRadiusVal;
        d.rightEl.style.backgroundColor = colorVal;
      });

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
});
