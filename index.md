---
layout: default
lang: ko
title: "컨텍스톤 콘텐츠 — AI 시대, 생각의 맥락을 디자인하다 | 워플로지 교육 브랜드"
seo_title: "컨텍스톤 콘텐츠 (Contexton Contents) — AI 시대, 생각의 맥락을 디자인하다 | 워플로지 교육 브랜드"
description: "컨텍스톤은 주식회사 워플로지의 교육 브랜드입니다. 프랙털 온톨로지 기반의 체계역학적 사고 훈련, 문해력·토론·논술 교육, AI 협업 역량을 기르는 맞춤형 교육 솔루션을 제공합니다."
og_image: "https://contents.contextonai.com/assets/contexton_og_image.png"
---

<style>
  /* ── 시맨틱 코스모스 섹션 ── */
  .cosmos-wrap {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 24px 60px;
  }
  .cosmos-lead {
    margin-bottom: 36px;
    padding: 14px 20px;
    border-left: 2.5px solid var(--coral);
    background: rgba(232, 97, 58, 0.04);
    border-radius: 0 var(--r-sm) var(--r-sm) 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .cosmos-lead-label {
    font-family: var(--font-serif-en);
    font-style: italic;
    font-size: var(--fs-label, 12px);
    font-weight: 400;
    color: var(--coral);
    letter-spacing: 0.3px;
    line-height: 1.35;
    margin: 0;
  }
  .cosmos-lead-quote {
    font-family: var(--font-body);
    font-size: var(--fs-body-min, 13px);
    font-weight: 400;
    color: var(--text-muted);
    line-height: 1.7;
    word-break: keep-all;
    margin: 0;
  }
  .onto-diagram-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 40px;
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
  }
  /* 도트 그리드 배경 효과 추가 */
  .onto-diagram-section::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--r-lg);
    background-image: radial-gradient(circle, rgba(26, 31, 54, 0.05) 1px, transparent 1px);
    background-size: 22px 22px;
    pointer-events: none;
    z-index: 0;
  }
  .onto-diagram-title, .onto-diagram-subtitle, .cosmos-svg, .detail-panel {
    position: relative;
    z-index: 1;
  }
  .onto-diagram-title {
    font-family: var(--font-serif-ko);
    font-size: var(--fs-h4);
    font-weight: 600;
    color: var(--text);
    text-align: center;
    margin: 0 0 6px;
    letter-spacing: var(--ls-h4, -0.3px);
  }
  .onto-diagram-subtitle {
    font-family: var(--font-body);
    font-size: var(--fs-body-min);
    color: var(--text-muted);
    text-align: center;
    margin: 0 0 32px;
  }
  .cosmos-svg {
    width: 100%;
    height: auto;
    max-height: 560px;
    display: block;
    margin: 0 auto;
    cursor: default;
  }
  .node-group { cursor: pointer; }
  .node-circle { transition: fill 0.2s, stroke 0.2s, filter 0.2s; }
  .node-group:hover .node-circle {
    filter: drop-shadow(0 0 8px rgba(232, 97, 58, 0.45));
  }
  .node-group.active .node-circle {
    filter: drop-shadow(0 0 14px rgba(232, 97, 58, 0.55));
  }
  .node-text {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 600;
    fill: var(--text-muted);
    pointer-events: none;
    transition: fill 0.2s;
  }
  .node-group:hover .node-text,
  .node-group.active .node-text { fill: var(--ink); }
  .link-line {
    stroke: var(--border);
    stroke-width: 1.5;
    stroke-dasharray: 5 4;
    transition: stroke 0.2s, stroke-width 0.2s, stroke-dasharray 0.2s;
  }
  .link-line.highlight {
    stroke: var(--coral);
    stroke-width: 2.5;
    stroke-dasharray: none;
  }
  .loop-arrow {
    stroke: var(--border);
    stroke-width: 2;
    fill: none;
    transition: stroke 0.2s;
  }
  .loop-arrow.highlight { stroke: var(--coral); }
  .detail-panel {
    margin-top: 28px;
    padding: 22px 26px;
    background: var(--sand);
    border-radius: var(--r-md);
    border-left: 4px solid var(--ink);
    min-height: 110px;
    transition: opacity 0.18s, transform 0.18s;
  }
  .detail-formula {
    font-family: var(--font-serif-ko);
    font-size: var(--fs-body-sub, 17px);
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 8px;
  }
  .detail-explain {
    font-family: var(--font-body);
    font-size: var(--fs-body-min, 13px);
    line-height: var(--lh-body-min, 1.7);
    color: var(--text);
    margin: 0;
  }
  /* ── 온톨로지 패러다임 미디어 행 ── */
  .cosmos-media-row {
    display: flex;
    gap: 24px;
    margin-top: 32px;
    align-items: stretch;
  }
  .cosmos-media-item {
    flex: 1 1 0;
    min-width: 0;
    border-radius: var(--r-md);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
  }
  .cosmos-media-img,
  .cosmos-media-video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    .cosmos-wrap { padding: 0 14px 40px; }
    .onto-diagram-section { padding: 20px 16px; }
    .cosmos-lead { padding: 16px 18px; gap: 14px; }
    .cosmos-lead-quote { font-size: var(--fs-body-min, 13px); }
    .detail-panel { padding: 14px 16px; }
    .cosmos-media-row { flex-direction: column; gap: 16px; margin-top: 24px; }
  }
</style>

<!-- ── 시맨틱 코스모스 (Bottom-Up 통합) ── -->
<section class="section" id="semantic-cosmos" style="padding-top: 0; padding-bottom: 0;">
  <div class="cosmos-wrap">
    <!-- Gruber 인용구 카드 -->
    <div class="cosmos-lead">
      <p class="cosmos-lead-label">Tom Gruber, 1993</p>
      <p class="cosmos-lead-quote">&#8220;온톨로지는 공유된 개념화의 형식적이고 명시적인 명세다.&#8221;</p>
    </div>
    <!-- 행성 관계 지도 -->
    <div class="onto-diagram-section">
      <h2 class="onto-diagram-title">시맨틱 코스모스</h2>
      <p class="onto-diagram-subtitle">개념 노드를 클릭해 유기적 논리 구조를 탐색해 보세요.</p>
      <svg class="cosmos-svg" viewBox="0 0 800 540" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8 z" fill="#c0c4d0"/>
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 10 5 L 0 8 z" fill="#E8613A"/>
          </marker>
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <filter id="ember-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <radialGradient id="grad-a" cx="38%" cy="32%" r="62%">
            <stop offset="0%"   stop-color="#FFF3A0"/>
            <stop offset="35%"  stop-color="#FFCC44"/>
            <stop offset="70%"  stop-color="#E8613A"/>
            <stop offset="100%" stop-color="#8B1A00"/>
          </radialGradient>
          <radialGradient id="grad-b" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#B8DCFF"/>
            <stop offset="45%"  stop-color="#4488CC"/>
            <stop offset="100%" stop-color="#0D2860"/>
          </radialGradient>
          <radialGradient id="grad-c" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#D0AAFF"/>
            <stop offset="50%"  stop-color="#7744CC"/>
            <stop offset="100%" stop-color="#1E0850"/>
          </radialGradient>
          <radialGradient id="grad-d" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#AAD8EE"/>
            <stop offset="50%"  stop-color="#3A7AA0"/>
            <stop offset="100%" stop-color="#081C2C"/>
          </radialGradient>
          <linearGradient id="ring-d" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="rgba(90,170,210,0)"/>
            <stop offset="30%"  stop-color="rgba(90,170,210,0.45)"/>
            <stop offset="70%"  stop-color="rgba(90,170,210,0.45)"/>
            <stop offset="100%" stop-color="rgba(90,170,210,0)"/>
          </linearGradient>
          <radialGradient id="grad-e" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#F0C880"/>
            <stop offset="45%"  stop-color="#C06030"/>
            <stop offset="100%" stop-color="#401000"/>
          </radialGradient>
          <radialGradient id="grad-f" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#90F0E0"/>
            <stop offset="45%"  stop-color="#20A888"/>
            <stop offset="100%" stop-color="#044030"/>
          </radialGradient>
          <radialGradient id="grad-g" cx="36%" cy="30%" r="65%">
            <stop offset="0%"   stop-color="#D8D8E8"/>
            <stop offset="50%"  stop-color="#7070A0"/>
            <stop offset="100%" stop-color="#1A1A30"/>
          </radialGradient>
          <radialGradient id="grad-h" cx="38%" cy="32%" r="62%">
            <stop offset="0%"   stop-color="#FF9090"/>
            <stop offset="40%"  stop-color="#CC2828"/>
            <stop offset="100%" stop-color="#280404"/>
          </radialGradient>
        </defs>
        <!-- 연결선 -->
        <g id="links">
          <line class="link-line" id="link-a-b" x1="382" y1="208" x2="198" y2="102"/>
          <line class="link-line" id="link-a-c" x1="418" y1="208" x2="602" y2="102"/>
          <line class="link-line" id="link-b-c" x1="196" y1="90"  x2="604" y2="90"/>
          <line class="link-line" id="link-f-a" x1="400" y1="344" x2="400" y2="248"/>
          <line class="link-line" id="link-e-f" x1="215" y1="372" x2="382" y2="372"/>
          <line class="link-line" id="link-f-g" x1="418" y1="372" x2="585" y2="372"/>
          <line class="link-line" id="link-d-e" x1="112" y1="448" x2="188" y2="386"/>
          <path class="loop-arrow" id="link-g-h" d="M 606 386 Q 652 432 705 452" marker-end="url(#arrow)"/>
          <path class="link-line"  id="link-d-b" d="M 106 448 Q 40 270 172 102" fill="none" stroke-dasharray="3 5"/>
          <path class="loop-arrow" id="link-c-h" d="M 630 102 Q 792 272 708 448" marker-end="url(#arrow)"/>
        </g>
        <!-- B: 목성 -->
        <g class="node-group" id="node-b" onclick="showDetail('b')">
          <circle cx="180" cy="90" r="22" fill="rgba(68,136,204,0.10)"/>
          <circle class="node-circle" cx="180" cy="90" r="16" fill="url(#grad-b)"/>
          <text class="node-text" x="180" y="60" text-anchor="middle">전체론적 관점</text>
          <text class="node-text" x="180" y="49" text-anchor="middle" font-size="9" opacity="0.6">목성형</text>
        </g>
        <!-- C: 해왕성 -->
        <g class="node-group" id="node-c" onclick="showDetail('c')">
          <circle cx="620" cy="90" r="18" fill="rgba(119,68,204,0.10)"/>
          <circle class="node-circle" cx="620" cy="90" r="13" fill="url(#grad-c)"/>
          <text class="node-text" x="620" y="61" text-anchor="middle">Weak Signal</text>
          <text class="node-text" x="620" y="50" text-anchor="middle" font-size="9" opacity="0.6">해왕성형 (Ansoff)</text>
        </g>
        <!-- A: 항성 -->
        <g class="node-group active" id="node-a" onclick="showDetail('a')">
          <circle cx="400" cy="228" r="46" fill="rgba(255,180,40,0.06)"/>
          <circle cx="400" cy="228" r="38" fill="rgba(255,150,30,0.10)"/>
          <circle class="node-circle" cx="400" cy="228" r="26" fill="url(#grad-a)" filter="url(#star-glow)"/>
          <text class="node-text" x="400" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#1A1F36">시맨틱 코스모스</text>
          <text class="node-text" x="400" y="178" text-anchor="middle" font-size="10" fill="#E8613A" opacity="0.9">:= 온톨로지</text>
        </g>
        <!-- E: 화성 -->
        <g class="node-group" id="node-e" onclick="showDetail('e')">
          <circle class="node-circle" cx="200" cy="372" r="13" fill="url(#grad-e)"/>
          <text class="node-text" x="200" y="400" text-anchor="middle">시맨틱 재료</text>
          <text class="node-text" x="200" y="411" text-anchor="middle" font-size="9" opacity="0.6">화성형</text>
        </g>
        <!-- F: 지구 -->
        <g class="node-group" id="node-f" onclick="showDetail('f')">
          <circle cx="400" cy="372" r="22" fill="rgba(32,168,136,0.08)"/>
          <circle class="node-circle" cx="400" cy="372" r="16" fill="url(#grad-f)"/>
          <text class="node-text" x="400" y="404" text-anchor="middle" font-weight="700">시맨틱</text>
          <text class="node-text" x="400" y="415" text-anchor="middle" font-size="9" opacity="0.6">지구형</text>
        </g>
        <!-- G: 수성 -->
        <g class="node-group" id="node-g" onclick="showDetail('g')">
          <circle class="node-circle" cx="600" cy="372" r="12" fill="url(#grad-g)"/>
          <text class="node-text" x="600" y="400" text-anchor="middle">하향식 정적 구현체</text>
          <text class="node-text" x="600" y="411" text-anchor="middle" font-size="9" opacity="0.6">수성형</text>
        </g>
        <!-- D: 토성 -->
        <g class="node-group" id="node-d" onclick="showDetail('d')">
          <ellipse cx="100" cy="462" rx="26" ry="7"
                   fill="none" stroke="url(#ring-d)" stroke-width="5"
                   transform="rotate(-18, 100, 462)" opacity="0.6"/>
          <circle class="node-circle" cx="100" cy="462" r="15" fill="url(#grad-d)"/>
          <path d="M 74 462 Q 100 474 126 462" fill="none"
                stroke="rgba(90,170,210,0.5)" stroke-width="4"/>
          <text class="node-text" x="100" y="495" text-anchor="middle">시스템 다이나믹스</text>
          <text class="node-text" x="100" y="507" text-anchor="middle" font-size="9" opacity="0.6">토성형 (닫힌 루프)</text>
        </g>
        <!-- H: 적색왜성 -->
        <g class="node-group" id="node-h" onclick="showDetail('h')">
          <circle cx="712" cy="462" r="26" fill="rgba(204,40,40,0.10)"/>
          <circle class="node-circle" cx="712" cy="462" r="16" fill="url(#grad-h)" filter="url(#ember-glow)"/>
          <text class="node-text" x="712" y="495" text-anchor="middle" fill="#E8613A" font-weight="700" font-size="11">온톨로지 회귀</text>
          <text class="node-text" x="712" y="507" text-anchor="middle" font-size="9" opacity="0.6">적색왜성형 (상향식)</text>
        </g>
      </svg>
      <!-- 디테일 패널 -->
      <div class="detail-panel" id="detail-panel">
        <p class="detail-formula" id="detail-formula">온톨로지 := 시맨틱 코스모스</p>
        <p class="detail-explain" id="detail-explain">Gruber(1993)의 '공유된 개념화의 형식적·명시적 명세'를 워플로지가 동적으로 재해석한 개념입니다. 고정된 선언이 아닌, 전체론적 관점과 Weak Signal이 상시 작용하는 살아있는 지식 구조입니다. 노드를 클릭해 각 개념을 탐색해 보세요.</p>
      </div>
    </div>
    <!-- 온톨로지 패러다임 이미지 + 비교 영상 나란히 -->
    <div class="cosmos-media-row">
      <div class="cosmos-media-item">
        <img
          src="{{ '/assets/new ontology paradigm.png' | relative_url }}"
          alt="새로운 온톨로지 패러다임"
          class="cosmos-media-img"
        />
      </div>
      <div class="cosmos-media-item">
        <video
          class="cosmos-media-video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          controlslist="nodownload nofullscreen noremoteplayback"
          oncontextmenu="return false"
          aria-label="온톨로지 비교 영상"
        >
          <source src="{{ '/assets/ontology comparison.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</section>

<script>
  const concepts = {
    a: {
      formula: "온톨로지 := 시맨틱 코스모스",
      explain: "Gruber(1993)의 '공유된 개념화의 형식적·명시적 명세'를 워플로지가 동적으로 재해석한 정의입니다. 고정된 선언이 아닌, 전체론적 관점(B)과 Weak Signal(C)이 상시 작용하는 살아있는 지식 구조입니다. 시맨틱(F)이 상향식으로 쌓여 이 중심 노드를 완성합니다.",
      links: ["link-a-b", "link-a-c", "link-f-a"]
    },
    b: {
      formula: "전체론적 관점 = 개별 개념보다 개념들의 상호작용 구조를 먼저 보는 시각",
      explain: "부분을 분석하기 전에 전체 피드백 구조를 읽습니다. 이 시각이 없으면 Weak Signal(C)은 잡음(noise)에 불과합니다. B가 C에 해석 맥락을 제공하고, 둘이 함께 시맨틱 코스모스(A)를 구성합니다. 시스템 다이나믹스(D)는 이 전체론적 관점을 공학적으로 구현하는 도구입니다.",
      links: ["link-a-b", "link-b-c", "link-d-b"]
    },
    c: {
      formula: "Weak Signal = 아직 형태를 갖추지 않은 변화의 조짐 (Ansoff, 1975)",
      explain: "Igor Ansoff가 정의한 개념으로, 통계적으로 유의미하지는 않지만 미래 변화를 암시하는 약하고 모호한 신호입니다. 전체론적 관점(B)이 있어야 이 신호를 의미 있는 패턴으로 해석할 수 있습니다. C는 B와 함께 시맨틱 코스모스(A)를 구성하고, 상향식 동적 구현체(H)가 C를 지속적으로 흡수합니다.",
      links: ["link-a-c", "link-b-c", "link-c-h"]
    },
    d: {
      formula: "시스템 다이나믹스 = 전체론적 관점을 닫힌 루프 피드백으로 형식화하는 방법론",
      explain: "Jay Forrester가 개발한 방법론으로, 전체론적 관점(B)을 수학적·공학적으로 다룰 수 있게 만드는 도구입니다. 개념들 간의 인과 피드백 루프를 닫힌 시스템으로 모델링하여, 공유된 개념화를 시뮬레이션 가능한 구조로 표현합니다. 이 과정에서 시맨틱 재료(E)가 생성됩니다.",
      links: ["link-d-e", "link-d-b"]
    },
    e: {
      formula: "시맨틱 재료 = 시스템 다이나믹스 모델링에서 드러나는 개념 관계망",
      explain: "시스템 다이나믹스(D)의 피드백 루프 모델링 과정에서 개념들의 인과 관계가 명시적으로 드러납니다. 이 드러난 동적 관계 구조가 시맨틱(F)을 구성하는 재료가 됩니다. 정적 어휘 목록이 아닌, 동적 관계망에서 추출된다는 점이 핵심입니다.",
      links: ["link-d-e", "link-e-f"]
    },
    f: {
      formula: "시맨틱 = 명시적 명세 + 공유된 개념화의 재료 (cf. Gruber, 1993)",
      explain: "Gruber의 온톨로지 정의를 역으로 읽으면: ① 형식화된 명시적 명세 + ② 공유된 개념화의 재료(E). 둘이 결합할 때 살아있는 시맨틱이 됩니다. 시맨틱은 하향식 정적 구현(G)의 기반이 되기도 하고, 상향식으로 쌓여 시맨틱 코스모스(A)를 구성하기도 합니다.",
      links: ["link-e-f", "link-f-g", "link-f-a"]
    },
    g: {
      formula: "하향식 정적 구현체 = 시맨틱을 고정된 규칙으로 선언하는 방식",
      explain: "OWL·RDF·SWRL 등 기술 형식으로 개념과 관계를 미리 선언합니다. 홈페이지에서 보여준 '온톨로지 기반 시스템 다이내믹스(Stock→Flow→Δt)', SWRL 추론 규칙, T-Box/A-Box 스키마가 모두 이 방식의 현재 활용 사례입니다. 구조가 명확하고 기계 추론이 가능하지만, 새로운 지식이 생기면 설계자가 직접 개입해야 하는 한계가 있습니다. H는 바로 이 한계에서 출발합니다.",
      links: ["link-f-g", "link-g-h"]
    },
    h: {
      formula: "온톨로지 회귀 = 하향식 정적(G)의 한계를 넘는 자생적 동적 모델",
      explain: "새로운 Weak Signal(C)이 감지될 때마다 개념 관계망을 점진적으로 재조정합니다. 설계자의 개입 없이 스스로 진화하며, 이 과정은 새 증거로 사전 지식을 갱신하는 베이지안 업데이트와 구조적으로 유사합니다. 이것이 Bottom-Up 접근의 핵심입니다.",
      links: ["link-g-h", "link-c-h"]
    }
  };
  function showDetail(key) {
    document.querySelectorAll('.node-group').forEach(g => g.classList.remove('active'));
    const node = document.getElementById('node-' + key);
    if (node) node.classList.add('active');
    document.querySelectorAll('.link-line, .loop-arrow').forEach(l => {
      l.classList.remove('highlight');
      if (l.classList.contains('loop-arrow')) l.setAttribute('marker-end', 'url(#arrow)');
    });
    const c = concepts[key];
    if (c && c.links) {
      c.links.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add('highlight');
          if (el.classList.contains('loop-arrow')) el.setAttribute('marker-end', 'url(#arrow-active)');
        }
      });
    }
    const panel = document.getElementById('detail-panel');
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(8px)';
    setTimeout(() => {
      document.getElementById('detail-formula').textContent = c.formula;
      document.getElementById('detail-explain').textContent = c.explain;
      panel.style.opacity = '1';
      panel.style.transform = 'translateY(0)';
    }, 140);
  }
</script>

<!-- 집, 나무, 사람 SVG 일러스트 (트리플 삼각 구조) -->

<section class="section" style="text-align: center; padding: 0 20px 60px 20px; position: relative; overflow: hidden; background: linear-gradient(to bottom, rgba(245, 240, 232, 0.10) 0%, var(--bg, #FAFAF8) 100%), linear-gradient(118deg, rgba(245, 240, 232, 0.0) 0%, rgba(245, 240, 232, 0.30) 55%, rgba(232, 97, 58, 0.03) 100%); background-size: 100% 480px, 100% 480px; background-repeat: no-repeat, no-repeat; background-color: var(--bg, #FAFAF8);">
  <!-- 일러스트 배경 데코 영역 (그라데이션 및 캔버스 파티클을 이 내부로 국한하여 정상화) -->
  <div style="position: relative; overflow: hidden; padding: 24px 0; background: transparent; margin-bottom: 40px;">
    <canvas id="hero-canvas" class="hero-canvas"></canvas>
    
    <!-- 플로팅 데코 요소 (가나다, ABC, 123, 수학 연산자, 정육면체, 삼각뿔, 원뿔) -->
    <div class="hero-deco-container">
      <!-- 좌측 영역 -->
      <div class="hero-deco-item deco-item-left-1 hero-deco-text-ko">가나다</div>
      <div class="hero-deco-item deco-item-left-2 hero-deco-text-en">ABC</div>
      <div class="hero-deco-item deco-item-left-3">
        <!-- 정육면체 (Cube) SVG -->
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10 L50 20 L30 30 L10 20 Z" fill="url(#cube-top)" opacity="0.85"/>
          <path d="M10 20 L30 30 L30 50 L10 40 Z" fill="url(#cube-left)" opacity="0.85"/>
          <path d="M30 30 L50 20 L50 40 L30 50 Z" fill="url(#cube-right)" opacity="0.85"/>
          <defs>
            <linearGradient id="cube-top" x1="10" y1="20" x2="50" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#fca890"/>
              <stop offset="100%" stop-color="#e8613a"/>
            </linearGradient>
            <linearGradient id="cube-left" x1="10" y1="20" x2="30" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#e8613a"/>
              <stop offset="100%" stop-color="#b83b1a"/>
            </linearGradient>
            <linearGradient id="cube-right" x1="30" y1="30" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#fca890"/>
              <stop offset="100%" stop-color="#d64c27"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="hero-deco-item deco-item-left-4 hero-deco-math">+ &minus; =</div>

      <!-- 우측 영역 -->
      <div class="hero-deco-item deco-item-right-1 hero-deco-text-num">123</div>
      <div class="hero-deco-item deco-item-right-2">
        <!-- 삼각뿔 (Pyramid) SVG -->
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 8 L12 45 L30 52 Z" fill="url(#pyramid-left)" opacity="0.85"/>
          <path d="M30 8 L30 52 L48 45 Z" fill="url(#pyramid-right)" opacity="0.85"/>
          <defs>
            <linearGradient id="pyramid-left" x1="12" y1="45" x2="30" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#121628"/>
              <stop offset="100%" stop-color="#2a335c"/>
            </linearGradient>
            <linearGradient id="pyramid-right" x1="30" y1="52" x2="48" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#222949"/>
              <stop offset="100%" stop-color="#3b4882"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="hero-deco-item deco-item-right-3">
        <!-- 원뿔 (Cone) SVG -->
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 8 L12 42 A 18 7 0 0 0 48 42 Z" fill="url(#cone-body)" opacity="0.85"/>
          <ellipse cx="30" cy="42" rx="18" ry="7" fill="url(#cone-base)" opacity="0.7"/>
          <defs>
            <linearGradient id="cone-body" x1="12" y1="42" x2="30" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#e8613a"/>
              <stop offset="50%" stop-color="#f59173"/>
              <stop offset="100%" stop-color="#b83b1a"/>
            </linearGradient>
            <linearGradient id="cone-base" x1="12" y1="42" x2="48" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#80210a"/>
              <stop offset="100%" stop-color="#e8613a"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="hero-deco-item deco-item-right-4 hero-deco-math">&radic; &divide; %</div>
    </div>

    <img src="{{ '/assets/house_tree_person.svg' | relative_url }}" alt="집, 나무, 사람" style="width: 100%; max-width: 460px; height: auto; opacity: 0.95; display: block; margin: 0 auto; position: relative; z-index: 1;" />
  </div>

  <!-- 온톨로지 & 시스템 다이내믹스 시각화 다이어그램 (일러스트 영역 내부 병합) -->
  <!-- Card 1: System Dynamics -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <span class="diagram-badge">워플로지가 쏘아올린 작은 공의 미래 스노우볼</span>
    <p class="diagram-card-sub diagram-card-sub--coral">자생적 지식 맥락의 진화와 공급이라는 새로운 패러다임</p>
    <h3 class="diagram-title">1. 온톨로지 기반 시스템 다이내믹스 (Ontology-based System Dynamics)</h3>
    <p class="diagram-desc">정적인 지식 데이터(Stock)와 추론 규칙(Flow)을 시간 제어기(Δt)를 통해 실시간 피드백 루프로 시뮬레이션하는 인지 아키텍처의 Closed-Loop 제어 시스템입니다.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    subgraph External_Signal [외부 환경 / 미약한 신호]
        WeakSignal[Weak Signal<br>아직 형태를 갖추지 않은 변화의 조짐<br>ex. 어둠 속 체스판 끝에서 느껴지는 빛]
    end

    subgraph Integrated_SD_System [온톨로지 기반 시스템 다이내믹스 - Closed Loop]
        direction TB
        
        Ontology[정적 온톨로지 DB <br> 현재 상태: Stock <br> ex. 달의 권력 100 / 나의 분노 50]
        RuleEngine{SWRL / 룰 엔진 <br> 변화 규칙: Flow <br> IF 분노 40 THEN 저항 발동}
        TimeController((시간 및 상태 제어기 <br> 시간 진행: Δt <br> 수학적 연산 및 업데이트))
        
        Ontology -- ① 현재 상태 t 데이터 제공 --> RuleEngine
        RuleEngine -- ② 조건 충족 시 이벤트/변화량 추론 --> TimeController
        TimeController -- ③ 시간 t+1 진행 및 새로운 상태 덮어쓰기 --> Ontology
    end

    subgraph LLM_Interface [AI / 사용자 계층]
        LLM[언어 모델 / AI 에이전트 <br> 유연한 맥락 파악 및 인터페이스]
    end

    %% Weak Signal → Ontology (외부 신호 입력)
    WeakSignal -.->|⑥ 패턴 미확정 신호 입력 <br> 온톨로지 갱신 트리거| Ontology

    %% Guardrail Connection
    LLM -.->|④ 환각 방지 검증 Grounding <br> 안전한 맥락망 구성| Ontology
    TimeController -.->|⑤ 룰 위반 시 행동 차단 Risk Mitigation| LLM

    style Ontology fill:none
    style RuleEngine fill:none
    style TimeController fill:none
    style WeakSignal fill:none

      </div>
    </div>
  </div>

  <!-- Card 1과 Card 2 사이의 데칼코마니 커넥터 효과 -->
  <div class="decalcomanie-connector">
    <div class="decal-fluid-container">
      <div class="decal-drop left-drop-1"></div>
      <div class="decal-drop left-drop-2"></div>
      <div class="decal-drop left-drop-3"></div>
      <div class="decal-drop right-drop-1"></div>
      <div class="decal-drop right-drop-2"></div>
      <div class="decal-drop right-drop-3"></div>
    </div>
    <!-- 단어 방출용 컨테이너 -->
    <div class="decal-word-emitter"></div>
    <!-- 게시판 클릭 트리거 (투명 오버레이) -->
    <button id="board-trigger" class="board-trigger-overlay" aria-label="게시판 열기"></button>
    <span class="board-trigger-hint">클릭하면 게시판이 열립니다</span>
  </div>

  <!-- Card 2: Ontology Rule -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <span class="diagram-badge">온톨로지 기술 형식 주의와 LLM과 결합한 현재의 활용가치</span>
    <p class="diagram-card-sub diagram-card-sub--coral">제한된 의미론적 검색과 규칙 기반 추론으로부터 기계의 빠른 상황 인지와 데이터 오케스트레이션까지</p>
    <h3 class="diagram-title">2. 의미론적 추론 규칙 (Semantic Inference Rules)</h3>
    <p class="diagram-desc">현재 상태 데이터로부터 복잡한 사회학적 순응, 저항 발현, 그리고 이에 따른 인과적인 고립 상태를 도출하는 룰 엔진의 의미론적(Semantic) 추론 규칙망입니다.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph LR
    subgraph Rule_1 [규칙 1 : 체제 순응 및 숭배 추론]
        R1_Cond[IF <br> Moon x AND hasLocation x, Chessboard <br> AND Crowd y AND hasLocation y, Chessboard]
        R1_Engine{SWRL 추론 엔진}
        R1_Result[THEN Inferred <br> worships y, x <br> 사람들이 달을 숭배함]
        
        R1_Cond --> R1_Engine --> R1_Result
    end

    subgraph Rule_2 [규칙 2 : 저항 행위 발현 추론]
        R2_Cond[IF <br> I x AND hasEmotion x, Anger <br> AND Stone z AND hasLocation z, Cliff <br> AND Moon y]
        R2_Engine{SWRL 추론 엔진}
        R2_Result[THEN Inferred <br> throwsAt x, z, y <br> 내가 달을 향해 돌을 던짐]
        
        R2_Cond --> R2_Engine --> R2_Result
    end

    subgraph Rule_3 [규칙 3 : 고립과 시선의 교차 추론]
        R3_Cond[IF <br> throwsAt I, Stone, Moon <br> AND misses Stone, Moon <br> AND worships Crowd, Moon]
        R3_Engine{SWRL 추론 엔진}
        R3_Result[THEN Inferred <br> staresAt Crowd, I <br> hasStatus I, Isolated <br> 군중이 나를 응시 / 고립 상태 부여]
        
        R3_Cond --> R3_Engine --> R3_Result
    end
      </div>
    </div>
  </div>

  <!-- Card 3: Static Ontology -->
  <div class="diagram-card" style="position: relative; z-index: 1; margin-bottom: 0;">
    <h3 class="diagram-title">3. 도메인 온톨로지 스키마 (Domain Ontology Schema)</h3>
    <p class="diagram-desc">T-Box 개념 계층과 A-Box 개체 구조를 엮어 구성한 정적 의미망으로, 객체의 위치(Location), 사물(Object), 관계 속성(rdf:type)을 유기적으로 구조화합니다.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    %% [T-Box] 클래스 계층 정의 (Class Hierarchy)
    subgraph T_Box [개념 체계 : T-Box Classes]
        Actor[Actor : 행위자]
        Location[Location : 공간]
        Object[Object : 사물]
        Phenomenon[Phenomenon : 자연/현상]
        Emotion[Emotion : 감정]
    end

    %% [A-Box] 개체 정의 (Instances)
    subgraph A_Box [개체 체계 : A-Box Instances]
        Me((I : 나))
        Crowd((Crowd : 사람들))
        Cliff[(Cliff : 바위 낭떠러지)]
        Chessboard[(Chessboard : 흑백 체스판)]
        Moon{Moon : 달}
        Darkness[Darkness : 어둠]
        Stone>Stone : 돌]
        Anger[Anger_Sorrow : 분노와 슬픔]
    end

    %% 인스턴스화 (is-a 관계)
    Me -. "rdf:type" .-> Actor
    Crowd -. "rdf:type" .-> Actor
    Cliff -. "rdf:type" .-> Location
    Chessboard -. "rdf:type" .-> Location
    Moon -. "rdf:type" .-> Phenomenon
    Darkness -. "rdf:type" .-> Phenomenon
    Stone -. "rdf:type" .-> Object
    Anger -. "rdf:type" .-> Emotion

    %% 객체 속성 (Object Properties / Predicates)
    Me -- "hasLocation" --> Cliff
    Crowd -- "hasLocation" --> Chessboard
    Stone -- "hasLocation" --> Cliff
    Me -- "hasEmotion" --> Anger
    Anger -- "hasTarget" --> Moon
    Cliff -- "isAbove" --> Chessboard
      </div>
    </div>
  </div>
</section>

<!-- 5. 교육 문의 -->
<section class="section" id="contact" style="position: relative; overflow: hidden;">
  <!-- 헥사고날 프랙털 지식 그래프 배경 -->
  <div class="hero-bg-icon" aria-hidden="true">
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill="none">
      <!-- 2차 프랙털 분기 (최외곽) -->
      <line x1="200" y1="88" x2="200" y2="28" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="200" cy="28" r="4.5" fill="#1A1F36" opacity="0.10" />
      <line x1="297" y1="143" x2="357" y2="108" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="357" cy="108" r="4.5" fill="#1A1F36" opacity="0.10" />
      <line x1="297" y1="257" x2="357" y2="292" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="357" cy="292" r="4.5" fill="#1A1F36" opacity="0.10" />
      <line x1="200" y1="312" x2="200" y2="372" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="200" cy="372" r="4.5" fill="#1A1F36" opacity="0.10" />
      <line x1="103" y1="257" x2="43" y2="292" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="43" cy="292" r="4.5" fill="#1A1F36" opacity="0.10" />
      <line x1="103" y1="143" x2="43" y2="108" stroke="#1A1F36" stroke-width="1" opacity="0.08" />
      <circle cx="43" cy="108" r="4.5" fill="#1A1F36" opacity="0.10" />
      <!-- 외곽 헥사곤 웹 연결선 (점선) -->
      <line x1="200" y1="88" x2="297" y2="143" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <line x1="297" y1="143" x2="297" y2="257" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <line x1="297" y1="257" x2="200" y2="312" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <line x1="200" y1="312" x2="103" y2="257" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <line x1="103" y1="257" x2="103" y2="143" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <line x1="103" y1="143" x2="200" y2="88" stroke="#1A1F36" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.11" />
      <!-- 중심 → 외곽 스포크 -->
      <line x1="200" y1="200" x2="200" y2="88" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <line x1="200" y1="200" x2="297" y2="143" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <line x1="200" y1="200" x2="297" y2="257" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <line x1="200" y1="200" x2="200" y2="312" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <line x1="200" y1="200" x2="103" y2="257" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <line x1="200" y1="200" x2="103" y2="143" stroke="#1A1F36" stroke-width="1.5" opacity="0.14" />
      <!-- 외곽 6개 노드 -->
      <circle cx="200" cy="88"  r="10" fill="#1A1F36" opacity="0.18" />
      <circle cx="297" cy="143" r="10" fill="#1A1F36" opacity="0.18" />
      <circle cx="297" cy="257" r="10" fill="#1A1F36" opacity="0.18" />
      <circle cx="200" cy="312" r="10" fill="#1A1F36" opacity="0.18" />
      <circle cx="103" cy="257" r="10" fill="#1A1F36" opacity="0.18" />
      <circle cx="103" cy="143" r="10" fill="#1A1F36" opacity="0.18" />
      <!-- 스포크 중간 서브노드 -->
      <circle cx="200" cy="144" r="5" fill="#1A1F36" opacity="0.12" />
      <circle cx="249" cy="172" r="5" fill="#1A1F36" opacity="0.12" />
      <circle cx="249" cy="228" r="5" fill="#1A1F36" opacity="0.12" />
      <circle cx="200" cy="256" r="5" fill="#1A1F36" opacity="0.12" />
      <circle cx="151" cy="228" r="5" fill="#1A1F36" opacity="0.12" />
      <circle cx="151" cy="172" r="5" fill="#1A1F36" opacity="0.12" />
      <!-- 중앙 허브 노드 (더블 링) -->
      <circle cx="200" cy="200" r="20" fill="#1A1F36" opacity="0.07" />
      <circle cx="200" cy="200" r="12" fill="#1A1F36" opacity="0.20" />
      <circle cx="200" cy="200" r="6"  fill="#1A1F36" opacity="0.30" />
      <!-- 코랄 포인트 노드 -->
      <circle cx="200" cy="88"  r="4" fill="#E8613A" opacity="0.35" />
      <circle cx="297" cy="257" r="4" fill="#E8613A" opacity="0.30" />
      <circle cx="103" cy="143" r="4" fill="#E8613A" opacity="0.30" />
    </svg>
  </div>
  
  <div class="section-label">Contact</div>
  <h2 class="section-title">교육 문의</h2>
  <p class="section-desc">컨텍스톤 콘텐츠 교육 관련 협업 및 네트워킹 등 궁금하신 사항이 있다면 언제든 문의해 주세요.</p>
  
  <div class="btn-group">
    <button type="button" id="open-contact-modal" class="btn btn-primary">이메일 보내기</button>
  </div>
</section>

<script src="{{ '/js/hero-canvas.js' | relative_url }}" defer></script>

<!-- Mermaid.js 로딩 및 워플로지 테마 초기화 -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeCSS: `
      /* ─ 전체 폰트 동기화 ─ */
      svg * {
        font-family: 'Pretendard Variable', 'DM Sans', -apple-system, sans-serif !important;
      }

      /* ─ rect 노드: 순백 카드 ─ */
      .node rect {
        fill: #FFFFFF !important;
        stroke: rgba(26, 31, 54, 0.25) !important;
        stroke-width: 1.5px !important;
        rx: 10px !important;
        ry: 10px !important;
      }

      /* ─ circle 노드: 코랄 틴트 (시간 제어기 등 핵심 허브) ─ */
      .node circle {
        fill: #FDF0EC !important;
        stroke: #E8613A !important;
        stroke-width: 2px !important;
      }

      /* ─ polygon/diamond: 샌드 (룰 엔진 등 판단 노드) ─ */
      .node polygon {
        fill: #F5F0E8 !important;
        stroke: rgba(26, 31, 54, 0.30) !important;
        stroke-width: 1.5px !important;
      }

      /* ─ path (비대칭 도형) ─ */
      .node path {
        fill: #F0EDE6 !important;
        stroke: rgba(26, 31, 54, 0.25) !important;
        stroke-width: 1.5px !important;
      }

      /* ─ 노드 내부 텍스트 ─ */
      .node text, .nodeLabel, .label {
        fill: #1A1F36 !important;
        color: #1A1F36 !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        line-height: 1.55 !important;
      }

      /* ─ 연결선 ─ */
      .edgePath .path {
        stroke: rgba(26, 31, 54, 0.50) !important;
        stroke-width: 1.4px !important;
      }

      /* ─ 화살표 마커 ─ */
      .edgePath .marker, marker path {
        fill: rgba(26, 31, 54, 0.50) !important;
        stroke: none !important;
      }

      /* ─ 엣지 라벨 배경 ─ */
      .edgeLabel rect {
        fill: rgba(255, 252, 248, 0.95) !important;
        stroke: rgba(26, 31, 54, 0.10) !important;
        stroke-width: 1px !important;
        rx: 6px !important;
        ry: 6px !important;
      }

      /* ─ 엣지 라벨 텍스트 ─ */
      .edgeLabel, .edgeLabel span {
        color: rgba(26, 31, 54, 0.70) !important;
        font-size: 11px !important;
        font-weight: 500 !important;
        letter-spacing: 0.1px !important;
      }

      /* ─ 클러스터(서브그래프) 박스 ─ */
      .cluster rect {
        fill: rgba(245, 240, 232, 0.50) !important;
        stroke: rgba(26, 31, 54, 0.13) !important;
        stroke-width: 1px !important;
        stroke-dasharray: 6 4 !important;
        rx: 14px !important;
        ry: 14px !important;
      }

      /* ─ 클러스터 제목 ─ */
      .cluster-label text, .cluster-label span {
        fill: #1A1F36 !important;
        color: #1A1F36 !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        letter-spacing: 0.4px !important;
      }
    `,
    themeVariables: {
      fontFamily: "'Pretendard Variable', 'DM Sans', sans-serif",
      primaryColor:       '#FFFFFF',
      primaryTextColor:   '#1A1F36',
      primaryBorderColor: 'rgba(26, 31, 54, 0.25)',
      lineColor:          'rgba(26, 31, 54, 0.50)',
      secondaryColor:     '#F5F0E8',
      tertiaryColor:      '#FDF0EC',
      mainBkg:            '#FFFFFF',
      nodeBorder:         'rgba(26, 31, 54, 0.25)',
      clusterBkg:         'rgba(245, 240, 232, 0.50)',
      clusterBorder:      'rgba(26, 31, 54, 0.13)',
      edgeLabelBackground:'rgba(255, 252, 248, 0.95)',
      background:         '#FFFFFF'
    }
  });
</script>
<script src="/js/board.js"></script>

