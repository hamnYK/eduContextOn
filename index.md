---
layout: default
lang: ko
title: "컨텍스톤 콘텐츠 — AI 시대, 생각의 맥락을 디자인하다 | 워플로지 교육 브랜드"
seo_title: "컨텍스톤 콘텐츠 (Contexton Contents) — AI 시대, 생각의 맥락을 디자인하다 | 워플로지 교육 브랜드"
description: "컨텍스톤은 주식회사 워플로지의 교육 브랜드입니다. 프랙털 온톨로지 기반의 체계역학적 사고 훈련, 문해력·토론·논술 교육, AI 협업 역량을 기르는 맞춤형 교육 솔루션을 제공합니다."
og_image: "https://contents.contextonai.com/assets/contexton_og_image.png"
---

<!-- 집, 나무, 사람 SVG 일러스트 (트리플 삼각 구조) -->
<section class="section" style="text-align: center; padding: 24px 0 60px 0; position: relative; overflow: hidden; background: linear-gradient(118deg, rgba(245, 240, 232, 0.0) 0%, rgba(245, 240, 232, 0.30) 55%, rgba(232, 97, 58, 0.03) 100%);">
  <canvas id="hero-canvas" class="hero-canvas"></canvas>
  <img src="{{ '/assets/house_tree_person.svg' | relative_url }}" alt="집, 나무, 사람" style="width: 100%; max-width: 460px; height: auto; opacity: 0.95; display: block; margin: 0 auto 40px auto; position: relative; z-index: 1;" />

  <!-- 온톨로지 & 시스템 다이내믹스 시각화 다이어그램 (일러스트 영역 내부 병합) -->
  <!-- Card 1: System Dynamics -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <h3 class="diagram-title">1. 온톨로지 기반 시뮬레이션 엔진 (System Dynamics)</h3>
    <p class="diagram-desc">정적인 지식 데이터(Stock)와 추론 규칙(Flow)을 시간 제어기(Δt)를 통해 실시간 피드백 루프로 시뮬레이션하는 인지 아키텍처의 Closed-Loop 제어 시스템입니다.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph TD
    subgraph Integrated_SD_System [온톨로지 기반 시뮬레이션 엔진 (Closed Loop)]
        direction TB
        
        Ontology[( "정적 온톨로지 DB <br> [현재 상태: Stock] <br> ex. 달의 권력=100, 나의 분노=50" )]
        RuleEngine{{ "SWRL / 룰 엔진 <br> [변화 규칙: Flow] <br> IF 분노>40 THEN 저항 발동" }}
        TimeController(( "시간 및 상태 제어기 <br> [시간 진행: Δt] <br> 수학적 연산 및 업데이트" ))
        
        Ontology -- "① 현재 상태(t) 데이터 제공" --> RuleEngine
        RuleEngine -- "② 조건 충족 시 이벤트/변화량 추론" --> TimeController
        TimeController -- "③ 시간(t+1) 진행 및 새로운 상태 덮어쓰기" --> Ontology
    end

    subgraph LLM_Interface [AI / 사용자 계층]
        LLM["언어 모델 / AI 에이전트 <br> 유연한 맥락 파악 및 인터페이스"]
    end

    %% Guardrail Connection
    LLM -.->| "④ 환각 방지 검증 (Grounding) <br> 안전한 맥락망 구성" | Ontology
    TimeController -.->| "⑤ 룰 위반 시 행동 차단 (Risk Mitigation)" | LLM

    style Ontology fill:#f9f2f4,stroke:#333,stroke-width:1px
    style RuleEngine fill:#e2f0d9,stroke:#333,stroke-width:1px
    style TimeController fill:#deebf7,stroke:#333,stroke-width:1px
      </div>
    </div>
  </div>

  <!-- Card 2: Ontology Rule -->
  <div class="diagram-card" style="position: relative; z-index: 1;">
    <h3 class="diagram-title">2. 인지 추론 규칙 (Ontology Rule)</h3>
    <p class="diagram-desc">현재 상태 데이터로부터 복잡한 사회학적 순응, 저항 발현, 그리고 이에 따른 인과적인 고립 상태를 도출하는 룰 엔진의 의미론적(Semantic) 추론 규칙망입니다.</p>
    <div class="diagram-wrapper">
      <div class="mermaid">
graph LR
    subgraph Rule_1 [규칙 1 : 체제의 순응과 숭배 추론]
        R1_Cond["IF <br> Moon(x) AND hasLocation(x, Chessboard) <br> AND Crowd(y) AND hasLocation(y, Chessboard)"]
        R1_Engine{{SWRL 추론 엔진}}
        R1_Result["THEN (Inferred) <br> <b>worships(y, x)</b> <br> (사람들이 달을 숭배함)"]
        
        R1_Cond --> R1_Engine --> R1_Result
    end

    subgraph Rule_2 [규칙 2 : 저항 행위 발현 추론]
        R2_Cond["IF <br> I(x) AND hasEmotion(x, Anger) <br> AND Stone(z) AND hasLocation(z, Cliff) <br> AND Moon(y)"]
        R2_Engine{{SWRL 추론 엔진}}
        R2_Result["THEN (Inferred) <br> <b>throwsAt(x, z, y)</b> <br> (내가 달을 향해 돌을 던짐)"]
        
        R2_Cond --> R2_Engine --> R2_Result
    end

    subgraph Rule_3 [규칙 3 : 고립과 시선의 교차 추론]
        R3_Cond["IF <br> throwsAt(I, Stone, Moon) <br> AND misses(Stone, Moon) <br> AND worships(Crowd, Moon)"]
        R3_Engine{{SWRL 추론 엔진}}
        R3_Result["THEN (Inferred) <br> <b>staresAt(Crowd, I)</b> <br> <b>hasStatus(I, Isolated)</b> <br> (군중이 나를 응시 / 고립 상태 부여)"]
        
        R3_Cond --> R3_Engine --> R3_Result
    end
      </div>
    </div>
  </div>

  <!-- Card 3: Static Ontology -->
  <div class="diagram-card" style="position: relative; z-index: 1; margin-bottom: 0;">
    <h3 class="diagram-title">3. 개념 및 개체 스키마 (Static Ontology)</h3>
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
  <p class="section-desc">컨텍스톤 콘텐츠 교육 관련하여 협업, 네트워킹 등 궁금하신 사항이 있다면 언제든 문의해 주세요.</p>
  
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
