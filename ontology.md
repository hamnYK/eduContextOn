---
layout: default
lang: ko
page_type: ontology
title: "Bottom-Up — 시맨틱 코스모스 관계 지도 | 워플로지 컨텍스톤"
description: "고정된 명세를 넘어 피드백 루프로 자생하는 상향식 동적 온톨로지. 전체론적 관점, 시스템 다이나믹스, Ansoff의 Weak Signal이 엮어내는 관계 지도."
og_image: "https://contents.contextonai.com/assets/contexton_og_image.png"
---

<style>
  .onto-container {
    max-width: 1040px;
    margin: 0 auto;
    padding: 48px 24px 100px;
    font-family: var(--font-body);
    color: var(--text);
  }

  /* 다이어그램 카드 */
  .onto-diagram-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 40px;
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
  }
  .onto-diagram-title {
    font-family: var(--font-serif-ko);
    font-size: 22px;
    color: var(--ink);
    text-align: center;
    margin: 0 0 6px;
  }
  .onto-diagram-subtitle {
    font-size: 14px;
    color: var(--text-muted);
    text-align: center;
    margin: 0 0 32px;
  }

  /* SVG */
  .cosmos-svg {
    width: 100%;
    height: auto;
    max-height: 520px;
    display: block;
    margin: 0 auto;
    cursor: default;
  }
  .node-group { cursor: pointer; }
  .node-circle {
    transition: fill 0.2s, stroke 0.2s, filter 0.2s;
  }
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

  /* 디테일 패널 */
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
    font-size: 17px;
    font-weight: 700;
    color: var(--ink);
    margin: 0 0 8px;
  }
  .detail-explain {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text);
    margin: 0;
  }

  @media (max-width: 600px) {
    .onto-container { padding: 28px 14px 60px; }
    .onto-diagram-section { padding: 20px 16px; }
    .detail-panel { padding: 14px 16px; }
  }
</style>

<div class="onto-container">
  <div class="onto-diagram-section">
    <h2 class="onto-diagram-title">시맨틱 코스모스 관계 지도</h2>
    <p class="onto-diagram-subtitle">개념 노드를 클릭해 유기적 논리 구조를 탐색해 보세요.</p>

    <svg class="cosmos-svg" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 10 5 L 0 8 z" fill="#c0c4d0" />
        </marker>
        <marker id="arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 10 5 L 0 8 z" fill="#E8613A" />
        </marker>
      </defs>

      <!-- ── 연결선 (노드보다 먼저 렌더) ── -->
      <g id="links">
        <!-- 레벨 1 ↔ 레벨 2 -->
        <line class="link-line" id="link-a-b" x1="382" y1="208" x2="198" y2="102" />
        <line class="link-line" id="link-a-c" x1="418" y1="208" x2="602" y2="102" />
        <line class="link-line" id="link-b-c" x1="196"  y1="90"  x2="604"  y2="90" />

        <!-- 레벨 2 ↔ 레벨 3: 시맨틱(F) → 시맨틱 코스모스(A) 상향식 -->
        <line class="link-line" id="link-f-a" x1="400" y1="344" x2="400" y2="242" />

        <!-- 레벨 3 수평 체인: E ─ F ─ G -->
        <line class="link-line" id="link-e-f" x1="215" y1="372" x2="385" y2="372" />
        <line class="link-line" id="link-f-g" x1="415" y1="372" x2="585" y2="372" />

        <!-- 레벨 4 ↔ 레벨 3 -->
        <line class="link-line" id="link-d-e" x1="110" y1="452" x2="188" y2="386" />
        <!-- G → H: 구현 분기 (화살표) -->
        <path class="loop-arrow" id="link-g-h"
              d="M 605 386 Q 650 430 705 452"
              marker-end="url(#arrow)" />
      </g>

      <!-- ── 레벨 1: B 전체론적 관점 / C Weak Signal ── -->
      <g class="node-group" id="node-b" onclick="showDetail('b')">
        <circle class="node-circle" cx="180" cy="90" r="13" fill="#F5F0E8" stroke="#1A1F36" stroke-width="1.8"/>
        <text class="node-text" x="180" y="64" text-anchor="middle">전체론적 관점</text>
      </g>

      <g class="node-group" id="node-c" onclick="showDetail('c')">
        <circle class="node-circle" cx="620" cy="90" r="13" fill="#F5F0E8" stroke="#1A1F36" stroke-width="1.8"/>
        <text class="node-text" x="620" y="64" text-anchor="middle">Weak Signal</text>
        <text class="node-text" x="620" y="53" text-anchor="middle" font-size="9.5" opacity="0.65">(Ansoff)</text>
      </g>

      <!-- ── 레벨 2: A 시맨틱 코스모스 (중심) ── -->
      <g class="node-group active" id="node-a" onclick="showDetail('a')">
        <circle cx="400" cy="225" r="32" fill="none" stroke="#1A1F36" stroke-width="1" opacity="0.10"/>
        <circle class="node-circle" cx="400" cy="225" r="20" fill="#1A1F36" stroke="#E8613A" stroke-width="2.5"/>
        <text class="node-text" x="400" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#1A1F36">시맨틱 코스모스</text>
        <text class="node-text" x="400" y="184" text-anchor="middle" font-size="10" fill="#E8613A" opacity="0.85">= 온톨로지</text>
      </g>

      <!-- ── 레벨 3: E 시맨틱재료 / F 시맨틱 / G 하향식 ── -->
      <g class="node-group" id="node-e" onclick="showDetail('e')">
        <circle class="node-circle" cx="200" cy="372" r="13" fill="#F5F0E8" stroke="#1A1F36" stroke-width="1.8"/>
        <text class="node-text" x="200" y="400" text-anchor="middle">시맨틱 재료</text>
      </g>

      <g class="node-group" id="node-f" onclick="showDetail('f')">
        <circle class="node-circle" cx="400" cy="372" r="15" fill="#F5F0E8" stroke="#E8613A" stroke-width="2.2"/>
        <text class="node-text" x="400" y="402" text-anchor="middle" font-weight="700">시맨틱</text>
      </g>

      <g class="node-group" id="node-g" onclick="showDetail('g')">
        <circle class="node-circle" cx="600" cy="372" r="13" fill="#F5F0E8" stroke="#1A1F36" stroke-width="1.8"/>
        <text class="node-text" x="600" y="400" text-anchor="middle">하향식 정적 구현체</text>
      </g>

      <!-- ── 레벨 4: D 시스템다이나믹스 / H 상향식 동적 ── -->
      <g class="node-group" id="node-d" onclick="showDetail('d')">
        <circle class="node-circle" cx="100" cy="460" r="13" fill="#F5F0E8" stroke="#1A1F36" stroke-width="1.8"/>
        <text class="node-text" x="100" y="490" text-anchor="middle">시스템 다이나믹스</text>
        <text class="node-text" x="100" y="502" text-anchor="middle" font-size="9.5" opacity="0.65">(닫힌 루프)</text>
      </g>

      <g class="node-group" id="node-h" onclick="showDetail('h')">
        <circle class="node-circle" cx="710" cy="460" r="15" fill="#1A1F36" stroke="#E8613A" stroke-width="2.2" opacity="0.88"/>
        <text class="node-text" x="710" y="490" text-anchor="middle" fill="#E8613A" font-weight="700" font-size="11">상향식 동적 구현체</text>
        <text class="node-text" x="710" y="502" text-anchor="middle" font-size="9.5" opacity="0.65">(온톨로지 회귀)</text>
      </g>
    </svg>

    <!-- 디테일 패널 -->
    <div class="detail-panel" id="detail-panel">
      <p class="detail-formula" id="detail-formula">온톨로지 = 시맨틱 코스모스</p>
      <p class="detail-explain" id="detail-explain">인간의 사유가 구조화되어 상호 합의된 개념으로 정합성을 갖출 때 성립하는 온톨로지의 궁극적 상태입니다. 전체론적 관점과 약한 신호가 만나 유기적으로 연결된 우주와 같습니다.</p>
    </div>
  </div>
</div>

<script>
  const concepts = {
    a: {
      formula: "온톨로지 = 시맨틱 코스모스",
      explain: "인간의 사유가 구조화되어 상호 합의된 개념으로 정합성을 갖출 때 성립하는 온톨로지의 궁극적 상태입니다. 전체론적 관점과 약한 신호가 만나 유기적으로 연결된 우주와 같습니다.",
      links: ["link-a-b", "link-a-c"]
    },
    b: {
      formula: "시맨틱 코스모스 = 전체론적 관점 + Weak Signal (Ansoff)",
      explain: "전체를 파악하는 전체론적 눈(Holistic)과, 미래의 변화를 미리 알아채는 약한 신호(Weak Signal, Ansoff)가 함께 작용하여 시맨틱 코스모스를 이룹니다. 두 요소는 독립적이지 않으며, 전체론적 관점이 Weak Signal을 의미 있게 해석할 수 있는 맥락을 제공합니다.",
      links: ["link-a-b", "link-b-c"]
    },
    c: {
      formula: "시맨틱 코스모스 확장 = 시스템 다이나믹스(닫힌 루프) + Weak Signal",
      explain: "전체론적 관점(B)을 구체적인 공학 도구인 시스템 다이나믹스(닫힌 루프 피드백)로 정밀화하고, 여기에 Weak Signal을 더하면 실시간 예측과 자생적 진화가 가능한 확장 모델이 됩니다. Weak Signal은 B와 C 모두에서 공유되는 핵심 재료입니다.",
      links: ["link-a-c", "link-b-c"]
    },
    d: {
      formula: "공유된 개념화의 형식 = 시스템 다이나믹스 (닫힌 루프)",
      explain: "개개인의 파편화된 개념화가 시스템으로 정합성을 지니기 위해서는, 피드백을 통해 스스로 순환하는 동적 시뮬레이션 형식을 띠어야 합니다.",
      links: ["link-d-e"]
    },
    e: {
      formula: "시맨틱 재료 = 공유된 개념화의 형식",
      explain: "시맨틱을 구축하기 위한 기초 재료는 정적인 어휘 사전이 아닌, 상호 피드백을 주고받는 닫힌 루프 형태의 역학 관계망에서 추출됩니다.",
      links: ["link-d-e", "link-e-f"]
    },
    f: {
      formula: "시맨틱 = 명시적인 명세 + 시맨틱 재료",
      explain: "시맨틱이란 명시적으로 표현된 정의(명세)에, 시스템 다이나믹스에서 흘러온 공유된 개념화의 재료가 합쳐져서 비로소 완성됩니다. 이렇게 완성된 시맨틱은 다시 위로 올라가 시맨틱 코스모스를 구성하는 상향식 연결(↑)을 형성합니다.",
      links: ["link-e-f", "link-f-g", "link-f-a"]
    },
    g: {
      formula: "온톨로지 기술 형식 = 시맨틱의 컴퓨터블 구현 프로토콜 (하향식 정적)",
      explain: "기존 시맨틱 웹과 탑다운 방식의 온톨로지가 보여준 구조화 설계입니다. 컴퓨터가 읽을 수 있도록(Computable) 설계했으나, 고정된 규칙에 갇히기 쉬워 유연한 조율을 필요로 합니다.",
      links: ["link-f-g", "link-g-h"]
    },
    h: {
      formula: "온톨로지 상향식 동적 구현체 ≈ 온톨로지 회귀 (베이지안 구조 유사)",
      explain: "단 한 번의 선언으로 끝나지 않고, 새로운 Weak Signal이 감지될 때마다 개념 관계망 전체를 조금씩 다시 정합시켜 나가는 자생적 모델입니다. 베이지안 업데이트(새 증거로 사전 확률을 갱신하는 방식)와 구조적으로 유사한 흐름을 갖습니다. 단, 수학적 등치가 아닌 철학적 유사성입니다.",
      links: ["link-g-h"]
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
