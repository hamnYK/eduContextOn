---
layout: default
lang: en
permalink: /en/
title: "Contexton Contents — Designing the Context of Thinking in the AI Era | Worflogy Education"
seo_title: "Contexton Contents — Designing the Context of Thinking in the AI Era | Worflogy Education"
description: "Contexton is the educational brand of Worflogy Inc. We offer customized thinking education solutions — system dynamics-based cognitive training, literacy, debate, essay writing, and AI collaboration skills."
og_image: "https://contents.contextonai.com/assets/contexton_og_image.png"
og_locale: "en_US"
---

<style>
  /* ── Semantic Cosmos Section ── */
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
  /* Dot Grid Background */
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
  @media (max-width: 600px) {
    .cosmos-wrap { padding: 0 14px 40px; }
    .onto-diagram-section { padding: 20px 16px; }
    .cosmos-lead { padding: 16px 18px; gap: 14px; }
    .cosmos-lead-quote { font-size: var(--fs-body-min, 13px); }
    .detail-panel { padding: 14px 16px; }
  }
</style>

<!-- ── Semantic Cosmos (Bottom-Up Integration) ── -->
<section class="section" id="semantic-cosmos" style="padding-top: 0; padding-bottom: 0;">
  <div class="cosmos-wrap">
    <!-- Gruber Quote Card -->
    <div class="cosmos-lead">
      <p class="cosmos-lead-label">Tom Gruber, 1993</p>
      <p class="cosmos-lead-quote">&#8220;An ontology is a formal, explicit specification of a shared conceptualization.&#8221;</p>
    </div>
    <!-- Relationship Map -->
    <div class="onto-diagram-section">
      <h2 class="onto-diagram-title">Semantic Cosmos</h2>
      <p class="onto-diagram-subtitle">Click on concept nodes to explore the organic logical structure.</p>
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
        <!-- Links -->
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
        <!-- B: Jupiter -->
        <g class="node-group" id="node-b" onclick="showDetail('b')">
          <circle cx="180" cy="90" r="22" fill="rgba(68,136,204,0.10)"/>
          <circle class="node-circle" cx="180" cy="90" r="16" fill="url(#grad-b)"/>
          <text class="node-text" x="180" y="60" text-anchor="middle">Holistic View</text>
          <text class="node-text" x="180" y="49" text-anchor="middle" font-size="9" opacity="0.6">Jupiter-class</text>
        </g>
        <!-- C: Neptune -->
        <g class="node-group" id="node-c" onclick="showDetail('c')">
          <circle cx="620" cy="90" r="18" fill="rgba(119,68,204,0.10)"/>
          <circle class="node-circle" cx="620" cy="90" r="13" fill="url(#grad-c)"/>
          <text class="node-text" x="620" y="61" text-anchor="middle">Weak Signal</text>
          <text class="node-text" x="620" y="50" text-anchor="middle" font-size="9" opacity="0.6">Neptune-class (Ansoff)</text>
        </g>
        <!-- A: Sun (Semantic Cosmos) -->
        <g class="node-group active" id="node-a" onclick="showDetail('a')">
          <circle cx="400" cy="228" r="46" fill="rgba(255,180,40,0.06)"/>
          <circle cx="400" cy="228" r="38" fill="rgba(255,150,30,0.10)"/>
          <circle class="node-circle" cx="400" cy="228" r="26" fill="url(#grad-a)" filter="url(#star-glow)"/>
          <text class="node-text" x="400" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#1A1F36">Semantic Cosmos</text>
          <text class="node-text" x="400" y="178" text-anchor="middle" font-size="10" fill="#E8613A" opacity="0.9">:= Ontology</text>
        </g>
        <!-- E: Mars -->
        <g class="node-group" id="node-e" onclick="showDetail('e')">
          <circle class="node-circle" cx="200" cy="372" r="13" fill="url(#grad-e)"/>
          <text class="node-text" x="200" y="400" text-anchor="middle">Semantic Materials</text>
          <text class="node-text" x="200" y="411" text-anchor="middle" font-size="9" opacity="0.6">Mars-class</text>
        </g>
        <!-- F: Earth -->
        <g class="node-group" id="node-f" onclick="showDetail('f')">
          <circle cx="400" cy="372" r="22" fill="rgba(32,168,136,0.08)"/>
          <circle class="node-circle" cx="400" cy="372" r="16" fill="url(#grad-f)"/>
          <text class="node-text" x="400" y="404" text-anchor="middle" font-weight="700">Semantics</text>
          <text class="node-text" x="400" y="415" text-anchor="middle" font-size="9" opacity="0.6">Earth-class</text>
        </g>
        <!-- G: Mercury -->
        <g class="node-group" id="node-g" onclick="showDetail('g')">
          <circle class="node-circle" cx="600" cy="372" r="12" fill="url(#grad-g)"/>
          <text class="node-text" x="600" y="400" text-anchor="middle">Top-Down Static</text>
          <text class="node-text" x="600" y="411" text-anchor="middle" font-size="9" opacity="0.6">Mercury-class</text>
        </g>
        <!-- D: Saturn -->
        <g class="node-group" id="node-d" onclick="showDetail('d')">
          <ellipse cx="100" cy="462" rx="26" ry="7"
                   fill="none" stroke="url(#ring-d)" stroke-width="5"
                   transform="rotate(-18, 100, 462)" opacity="0.6"/>
          <circle class="node-circle" cx="100" cy="462" r="15" fill="url(#grad-d)"/>
          <path d="M 74 462 Q 100 474 126 462" fill="none"
                stroke="rgba(90,170,210,0.5)" stroke-width="4"/>
          <text class="node-text" x="100" y="495" text-anchor="middle">System Dynamics</text>
          <text class="node-text" x="100" y="507" text-anchor="middle" font-size="9" opacity="0.6">Saturn-class (Closed-Loop)</text>
        </g>
        <!-- H: Red Dwarf -->
        <g class="node-group" id="node-h" onclick="showDetail('h')">
          <circle cx="712" cy="462" r="26" fill="rgba(204,40,40,0.10)"/>
          <circle class="node-circle" cx="712" cy="462" r="16" fill="url(#grad-h)" filter="url(#ember-glow)"/>
          <text class="node-text" x="712" y="495" text-anchor="middle" fill="#E8613A" font-weight="700" font-size="11">Ontological Regression</text>
          <text class="node-text" x="712" y="507" text-anchor="middle" font-size="9" opacity="0.6">Red Dwarf (Bottom-Up)</text>
        </g>
      </svg>
      <!-- Detail Panel -->
      <div class="detail-panel" id="detail-panel">
        <p class="detail-formula" id="detail-formula">Ontology := Semantic Cosmos</p>
        <p class="detail-explain" id="detail-explain">Worflogy's dynamic reinterpretation of Tom Gruber's (1993) definition: "a formal, explicit specification of a shared conceptualization." Rather than a static declaration, it is a living knowledge structure where a Holistic View and Weak Signals constantly interact. Click on the nodes to explore.</p>
      </div>
    </div>
  </div>
</section>

<script>
  const concepts = {
    a: {
      formula: "Ontology := Semantic Cosmos",
      explain: "Worflogy's dynamic reinterpretation of Tom Gruber's (1993) definition. Rather than a static declaration, it is a living knowledge structure shaped by the constant feedback of the Holistic View (B) and Weak Signals (C). Semantics (F) pile up in a bottom-up manner to complete this central node.",
      links: ["link-a-b", "link-a-c", "link-f-a"]
    },
    b: {
      formula: "Holistic View = Observing the interaction structure before individual concepts",
      explain: "An approach that reads the feedback loop structure of the whole before analyzing parts. Without this perspective, a Weak Signal (C) remains mere noise. B provides the interpretive context for C, and together they construct the Semantic Cosmos (A). System Dynamics (D) is the engineering tool to realize this holistic view.",
      links: ["link-a-b", "link-b-c", "link-d-b"]
    },
    c: {
      formula: "Weak Signal = Faint, ambiguous signs of future change (Ansoff, 1975)",
      explain: "Coined by Igor Ansoff, this refers to weak and ambiguous signals that indicate future changes despite lacking statistical significance. A Holistic View (B) is required to interpret these signals into meaningful patterns. C constitutes the Semantic Cosmos (A) along with B, and the Ontological Regression (H) continuously absorbs C.",
      links: ["link-a-c", "link-b-c", "link-c-h"]
    },
    d: {
      formula: "System Dynamics = Formalizing the holistic view into closed-loop feedback",
      explain: "Developed by Jay Forrester, this methodology makes the Holistic View (B) mathematically and computationally actionable. By modeling causal feedback loops as closed systems, shared conceptualization is simulated, which in turn generates Semantic Materials (E).",
      links: ["link-d-e", "link-d-b"]
    },
    e: {
      formula: "Semantic Materials = Causal relationship networks emerging from System Dynamics",
      explain: "Causal relationships between concepts are explicitly revealed during the modeling of feedback loops in System Dynamics (D). This dynamic relational structure forms the raw materials for Semantics (F). Crucially, these are extracted from dynamic feedback rather than static vocabulary lists.",
      links: ["link-d-e", "link-e-f"]
    },
    f: {
      formula: "Semantics = Explicit specification + Materials of shared conceptualization",
      explain: "Reading Gruber's definition in reverse: ① formalized explicit specification + ② materials of shared conceptualization (E). When combined, they become living semantics. Semantics serve as the foundation for Top-Down Static Implementation (G) and also stack up bottom-up to build the Semantic Cosmos (A).",
      links: ["link-e-f", "link-f-g", "link-f-a"]
    },
    g: {
      formula: "Top-Down Static = Declarative definition of semantics into fixed rules",
      explain: "Declaring concepts and relationships in advance using technical standards like OWL, RDF, and SWRL. The current use cases on this landing page—Ontology-based System Dynamics, Semantic Inference Rules, and Domain Ontology Schema—are all based on this approach. It features precise reasoning but requires designer intervention for any updates. H emerges from this limitation.",
      links: ["link-f-g", "link-g-h"]
    },
    h: {
      formula: "Ontological Regression = Self-evolving model overcoming Top-Down Static limitations",
      explain: "Incrementally reorganizing the relationship network whenever a new Weak Signal (C) is detected. It evolves autonomously without designer intervention, dynamically updating prior knowledge with new evidence, similar to Bayesian updating. This is the core of the Bottom-Up approach.",
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

<!-- House, Tree, Person SVG Illustration (Triple Structure) -->

<section class="section" style="text-align: center; padding: 0 0 60px 0; position: relative; overflow: hidden; background: linear-gradient(to bottom, rgba(245, 240, 232, 0.10) 0%, var(--bg, #FAFAF8) 100%), linear-gradient(118deg, rgba(245, 240, 232, 0.0) 0%, rgba(245, 240, 232, 0.30) 55%, rgba(232, 97, 58, 0.03) 100%); background-size: 100% 480px, 100% 480px; background-repeat: no-repeat, no-repeat; background-color: var(--bg, #FAFAF8);">
  <!-- Illustration Background Deco Area (Confining gradient & canvas particle inside for normalization) -->
  <div style="position: relative; overflow: hidden; padding: 24px 0; background: transparent; margin-bottom: 40px;">
    <canvas id="hero-canvas" class="hero-canvas"></canvas>
    
    <!-- Floating Deco Elements (가나다, ABC, 123, Math Operators, Cube, Pyramid, Cone) -->
    <div class="hero-deco-container">
      <!-- Left Side -->
      <div class="hero-deco-item deco-item-left-1 hero-deco-text-ko">가나다</div>
      <div class="hero-deco-item deco-item-left-2 hero-deco-text-en">ABC</div>
      <div class="hero-deco-item deco-item-left-3">
        <!-- Cube SVG -->
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

      <!-- Right Side -->
      <div class="hero-deco-item deco-item-right-1 hero-deco-text-num">123</div>
      <div class="hero-deco-item deco-item-right-2">
        <!-- Pyramid SVG -->
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
        <!-- Cone SVG -->
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

    <img src="{{ '/assets/house_tree_person.svg' | relative_url }}" alt="House, Tree, Person" style="width: 100%; max-width: 460px; height: auto; opacity: 0.95; display: block; margin: 0 auto; position: relative; z-index: 1;" />
  </div>

  <!-- Ontology & System Dynamics Visualization Diagram (Merged Inside Illustration Section) -->
  <!-- Card 1: System Dynamics -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <span class="diagram-badge">The Future Snowball of the Small Ball Worflogy Has Launched</span>
    <p class="diagram-card-sub">A New Paradigm of the Evolution and Supply of Self-Sustaining Knowledge Context</p>
    <h3 class="diagram-title">1. Ontology-based System Dynamics</h3>
    <p class="diagram-desc">A closed-loop control system of cognitive architecture that simulates static knowledge data (Stock) and inference rules (Flow) in a real-time feedback loop via a time controller (Δt).</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    subgraph External_Signal [External Environment / Faint Signal]
        WeakSignal[Weak Signal<br>An early sign of change yet to take form<br>ex. A glimmer of light at the edge of the chessboard in darkness]
    end

    subgraph Integrated_SD_System [Ontology-based System Dynamics - Closed Loop]
        direction TB
        
        Ontology[Static Ontology DB <br> Current State: Stock <br> ex. Moons Power 100 / My Anger 50]
        RuleEngine{SWRL / Rule Engine <br> Change Rule: Flow <br> IF Anger 40 THEN Trigger Resistance}
        TimeController((Time & State Controller <br> Time Progress: Δt <br> Mathematical Operation & Update))
        
        Ontology -- ① Provide Current State t Data --> RuleEngine
        RuleEngine -- ② Infer Event/Change on Condition Met --> TimeController
        TimeController -- ③ Progress Time t+1 & Overwrite New State --> Ontology
    end

    subgraph LLM_Interface [AI / User Layer]
        LLM[Language Model / AI Agent <br> Flexible Context Understanding & Interface]
    end

    %% Weak Signal → Ontology (External signal input)
    WeakSignal -.->|⑥ Unclassified Pattern Signal Input <br> Ontology Update Trigger| Ontology

    %% Guardrail Connection
    LLM -.->|④ Hallucination Prevention Verification Grounding <br> Establish Secure Context Network| Ontology
    TimeController -.->|⑤ Block Action on Rule Violation Risk Mitigation| LLM

    style Ontology fill:none
    style RuleEngine fill:none
    style TimeController fill:none
    style WeakSignal fill:none

      </div>
    </div>
  </div>

  <!-- Decalcomanie connector effect between Card 1 and Card 2 -->
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
  </div>

  <!-- Card 2: Ontology Rule -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <span class="diagram-badge">Traditional Top-Down Ontology Design & Its Present Value Combined with LLMs</span>
    <p class="diagram-card-sub">From Limited Semantic Search and Rule-Based Reasoning to Rapid Machine Situational Awareness and Data Orchestration</p>
    <h3 class="diagram-title">2. Semantic Inference Rules</h3>
    <p class="diagram-desc">A semantic inference rule network of the rule engine that derives complex sociological conformity, resistance behaviors, and the resulting causal isolation status from current state data.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph LR
    subgraph Rule_1 [Rule 1 : Inferred System Conformity & Worship]
        R1_Cond[IF <br> Moon x AND hasLocation x, Chessboard <br> AND Crowd y AND hasLocation y, Chessboard]
        R1_Engine{SWRL Inference Engine}
        R1_Result[THEN Inferred <br> worships y, x <br> Crowd worships Moon]
        
        R1_Cond --> R1_Engine --> R1_Result
    end

    subgraph Rule_2 [Rule 2 : Inferred Emergence of Resistance]
        R2_Cond[IF <br> I x AND hasEmotion x, Anger <br> AND Stone z AND hasLocation z, Cliff <br> AND Moon y]
        R2_Engine{SWRL Inference Engine}
        R2_Result[THEN Inferred <br> throwsAt x, z, y <br> I throw a stone at Moon]
        
        R2_Cond --> R2_Engine --> R2_Result
    end

    subgraph Rule_3 [Rule 3 : Inferred Isolation & Intersection of Gazes]
        R3_Cond[IF <br> throwsAt I, Stone, Moon <br> AND misses Stone, Moon <br> AND worships Crowd, Moon]
        R3_Engine{SWRL Inference Engine}
        R3_Result[THEN Inferred <br> staresAt Crowd, I <br> hasStatus I, Isolated <br> Crowd stares at I / Isolated status assigned]
        
        R3_Cond --> R3_Engine --> R3_Result
    end
      </div>
    </div>
  </div>

  <!-- Card 3: Static Ontology -->
  <div class="diagram-card" style="position: relative; z-index: 1; margin-bottom: 0;">
    <h3 class="diagram-title">3. Domain Ontology Schema</h3>
    <p class="diagram-desc">A static semantic network consisting of a T-Box class hierarchy and an A-Box instance structure, organically structuring objects' locations, entities, and relationship attributes (rdf:type).</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    %% [T-Box] Class Hierarchy
    subgraph T_Box [Conceptual Framework: T-Box Classes]
        Actor[Actor]
        Location[Location]
        Object[Object]
        Phenomenon[Phenomenon]
        Emotion[Emotion]
    end

    %% [A-Box] Instances
    subgraph A_Box [Instance System: A-Box Instances]
        Me((I))
        Crowd((Crowd))
        Cliff[(Cliff)]
        Chessboard[(Chessboard)]
        Moon{Moon}
        Darkness[Darkness]
        Stone>Stone]
        Anger[Anger_Sorrow]
    end

    %% Instantiation (is-a relations)
    Me -. "rdf:type" .-> Actor
    Crowd -. "rdf:type" .-> Actor
    Cliff -. "rdf:type" .-> Location
    Chessboard -. "rdf:type" .-> Location
    Moon -. "rdf:type" .-> Phenomenon
    Darkness -. "rdf:type" .-> Phenomenon
    Stone -. "rdf:type" .-> Object
    Anger -. "rdf:type" .-> Emotion

    %% Object Properties / Predicates
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

<!-- 5. Inquiries -->
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
  <h2 class="section-title">Inquiries</h2>
  <p class="section-desc">Please feel free to contact us if you have any questions regarding collaborations, networking, or educational content for Contexton.</p>
  
  <div class="btn-group">
    <button type="button" id="open-contact-modal" class="btn btn-primary">Send Email</button>
  </div>
</section>

<script src="{{ '/js/hero-canvas.js' | relative_url }}" defer></script>

<!-- Mermaid.js Loading & Worflogy Theme Initialization -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeCSS: `
      /* ─ Global Font Sync ─ */
      svg * {
        font-family: 'Pretendard Variable', 'DM Sans', -apple-system, sans-serif !important;
      }

      /* ─ rect node: pure white card ─ */
      .node rect {
        fill: #FFFFFF !important;
        stroke: rgba(26, 31, 54, 0.25) !important;
        stroke-width: 1.5px !important;
        rx: 10px !important;
        ry: 10px !important;
      }

      /* ─ circle node: coral tint (key hub) ─ */
      .node circle {
        fill: #FDF0EC !important;
        stroke: #E8613A !important;
        stroke-width: 2px !important;
      }

      /* ─ polygon/diamond: sand (rule engine, decision) ─ */
      .node polygon {
        fill: #F5F0E8 !important;
        stroke: rgba(26, 31, 54, 0.30) !important;
        stroke-width: 1.5px !important;
      }

      /* ─ path (asymmetric shapes) ─ */
      .node path {
        fill: #F0EDE6 !important;
        stroke: rgba(26, 31, 54, 0.25) !important;
        stroke-width: 1.5px !important;
      }

      /* ─ Node inner text ─ */
      .node text, .nodeLabel, .label {
        fill: #1A1F36 !important;
        color: #1A1F36 !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        line-height: 1.55 !important;
      }

      /* ─ Edges ─ */
      .edgePath .path {
        stroke: rgba(26, 31, 54, 0.50) !important;
        stroke-width: 1.4px !important;
      }

      /* ─ Arrow markers ─ */
      .edgePath .marker, marker path {
        fill: rgba(26, 31, 54, 0.50) !important;
        stroke: none !important;
      }

      /* ─ Edge label background ─ */
      .edgeLabel rect {
        fill: rgba(255, 252, 248, 0.95) !important;
        stroke: rgba(26, 31, 54, 0.10) !important;
        stroke-width: 1px !important;
        rx: 6px !important;
        ry: 6px !important;
      }

      /* ─ Edge label text ─ */
      .edgeLabel, .edgeLabel span {
        color: rgba(26, 31, 54, 0.70) !important;
        font-size: 11px !important;
        font-weight: 500 !important;
        letter-spacing: 0.1px !important;
      }

      /* ─ Cluster (subgraph) box ─ */
      .cluster rect {
        fill: rgba(245, 240, 232, 0.50) !important;
        stroke: rgba(26, 31, 54, 0.13) !important;
        stroke-width: 1px !important;
        stroke-dasharray: 6 4 !important;
        rx: 14px !important;
        ry: 14px !important;
      }

      /* ─ Cluster label ─ */
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
