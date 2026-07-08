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

<!-- House, Tree, Person SVG Illustration (Triple Structure) -->
<section class="section" style="text-align: center; padding: 24px 0 60px 0; position: relative; overflow: hidden; background: linear-gradient(118deg, rgba(245, 240, 232, 0.0) 0%, rgba(245, 240, 232, 0.30) 55%, rgba(232, 97, 58, 0.03) 100%);">
  <canvas id="hero-canvas" class="hero-canvas"></canvas>
  <img src="{{ '/assets/house_tree_person.svg' | relative_url }}" alt="House, Tree, Person" style="width: 100%; max-width: 460px; height: auto; opacity: 0.95; display: block; margin: 0 auto 40px auto; position: relative; z-index: 1;" />

  <!-- Ontology & System Dynamics Visualization Diagram (Merged Inside Illustration Section) -->
  <!-- Card 1: System Dynamics -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <h3 class="diagram-title">1. Ontology-Based Simulation Engine (System Dynamics)</h3>
    <p class="diagram-desc">A closed-loop control system of cognitive architecture that simulates static knowledge data (Stock) and inference rules (Flow) in a real-time feedback loop via a time controller (Δt).</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    subgraph Integrated_SD_System [Ontology-Based Simulation Engine (Closed Loop)]
        direction TB
        
        Ontology[( "Static Ontology DB <br> [Current State: Stock] <br> ex. Moon's Power=100, My Anger=50" )]
        RuleEngine{{ "SWRL / Rule Engine <br> [Change Rule: Flow] <br> IF Anger>40 THEN Trigger Resistance" }}
        TimeController(( "Time & State Controller <br> [Time Progress: Δt] <br> Mathematical Operation & Update" ))
        
        Ontology -- "① Provide Current State(t) Data" --> RuleEngine
        RuleEngine -- "② Infer Event/Change on Condition Met" --> TimeController
        TimeController -- "③ Progress Time(t+1) & Overwrite New State" --> Ontology
    end

    subgraph LLM_Interface [AI / User Layer]
        LLM["Language Model / AI Agent <br> Flexible Context Understanding & Interface"]
    end

    %% Guardrail Connection
    LLM -.->| "④ Hallucination Prevention Verification (Grounding) <br> Establish Secure Context Network" | Ontology
    TimeController -.->| "⑤ Block Action on Rule Violation (Risk Mitigation)" | LLM

    style Ontology fill:#f9f2f4,stroke:#333,stroke-width:1px
    style RuleEngine fill:#e2f0d9,stroke:#333,stroke-width:1px
    style TimeController fill:#deebf7,stroke:#333,stroke-width:1px
      </div>
    </div>
  </div>

  <!-- Card 2: Ontology Rule -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <h3 class="diagram-title">2. Cognitive Inference Rules (Ontology Rule)</h3>
    <p class="diagram-desc">A semantic inference rule network of the rule engine that derives complex sociological conformity, resistance behaviors, and the resulting causal isolation status from current state data.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph LR
    subgraph Rule_1 [Rule 1 : Inferred System Conformity & Worship]
        R1_Cond["IF <br> Moon(x) AND hasLocation(x, Chessboard) <br> AND Crowd(y) AND hasLocation(y, Chessboard)"]
        R1_Engine{{SWRL Inference Engine}}
        R1_Result["THEN (Inferred) <br> <b>worships(y, x)</b> <br> (Crowd worships Moon)"]
        
        R1_Cond --> R1_Engine --> R1_Result
    end

    subgraph Rule_2 [Rule 2 : Inferred Emergence of Resistance]
        R2_Cond["IF <br> I(x) AND hasEmotion(x, Anger) <br> AND Stone(z) AND hasLocation(z, Cliff) <br> AND Moon(y)"]
        R2_Engine{{SWRL Inference Engine}}
        R2_Result["THEN (Inferred) <br> <b>throwsAt(x, z, y)</b> <br> (I throw a stone at Moon)"]
        
        R2_Cond --> R2_Engine --> R2_Result
    end

    subgraph Rule_3 [Rule 3 : Inferred Isolation & Intersection of Gazes]
        R3_Cond["IF <br> throwsAt(I, Stone, Moon) <br> AND misses(Stone, Moon) <br> AND worships(Crowd, Moon)"]
        R3_Engine{{SWRL Inference Engine}}
        R3_Result["THEN (Inferred) <br> <b>staresAt(Crowd, I)</b> <br> <b>hasStatus(I, Isolated)</b> <br> (Crowd stares at I / Isolated status assigned)"]
        
        R3_Cond --> R3_Engine --> R3_Result
    end
      </div>
    </div>
  </div>

  <!-- Card 3: Static Ontology -->
  <div class="diagram-card" style="position: relative; z-index: 1; margin-bottom: 0;">
    <h3 class="diagram-title">3. Conceptual & Instance Schema (Static Ontology)</h3>
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
    themeVariables: {
      primaryColor: '#F5F0E8',         /* Warm Sand 바탕 */
      primaryTextColor: '#1A1F36',     /* Ink Navy 텍스트 */
      primaryBorderColor: 'rgba(26, 31, 54, 0.15)',
      lineColor: '#1A1F36',            /* 연결선 Navy */
      secondaryColor: '#FDF0EC',       /* Living Coral 틴트 */
      tertiaryColor: '#FAFAF8',
      mainBkg: '#F5F0E8',
      nodeBorder: 'rgba(26, 31, 54, 0.2)'
    }
  });
</script>
