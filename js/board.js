/**
 * WORFLOGY — board.js
 * 데칼코마니 클릭 → Google Sheets 연동 자유게시판
 * 패널: 글 목록 | 글 쓰기 | 게시글 상세
 * 사이드바: 최신 5개 게시글 링크 자동 표시
 */
(function () {
  'use strict';

  const WEB_APP_URL =
    window.WorflogyConfig?.WEB_APP_URL ||
    'https://script.google.com/macros/s/AKfycbxBsuTAuC2SE0CXE6ycda-AdzGGXeZfQ75Pz0qINdvStz6wVXay1df65IuI62-eL97Qmg/exec';

  const MAX_SIDEBAR_POSTS = 5;

  // ─── XSS 방지 ────────────────────────────────────────────
  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ─── 모달 DOM 생성 ────────────────────────────────────────
  function createModal() {
    const wrap = document.createElement('div');
    wrap.id = 'board-modal-backdrop';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'board-modal-title');
    wrap.innerHTML = `
      <div class="board-modal">
        <!-- 헤더 -->
        <header class="board-modal-header">
          <div class="board-modal-title-row">
            <h2 id="board-modal-title" class="board-modal-title">자유 게시판</h2>
            <div class="board-modal-tabs" role="tablist">
              <button class="board-tab active" data-tab="list" role="tab" aria-selected="true">글 목록</button>
              <button class="board-tab" data-tab="write" role="tab" aria-selected="false">글 쓰기</button>
            </div>
          </div>
          <button class="board-modal-close" id="board-modal-close" aria-label="닫기">✕</button>
        </header>

        <!-- ① 글 목록 패널 -->
        <div class="board-panel" id="board-panel-list" role="tabpanel">
          <div class="board-filter-bar">
            <select id="board-category-filter" class="board-select" aria-label="카테고리 필터">
              <option value="">전체 카테고리</option>
            </select>
            <button class="board-refresh-btn" id="board-refresh" aria-label="새로고침">↺</button>
          </div>
          <div class="board-post-list" id="board-post-list">
            <div class="board-loading"><span class="board-spinner"></span> 불러오는 중...</div>
          </div>
        </div>

        <!-- ② 글쓰기 패널 -->
        <div class="board-panel board-panel--hidden" id="board-panel-write" role="tabpanel">
          <form id="board-write-form" class="board-write-form" novalidate>
            <div class="board-form-row">
              <label for="board-input-title">제목 <span class="board-required" aria-hidden="true">*</span></label>
              <input type="text" id="board-input-title" name="title"
                placeholder="제목을 입력하세요" required maxlength="100" autocomplete="off">
            </div>
            <div class="board-form-row board-form-row--two">
              <div>
                <label for="board-input-author">작성자 <span class="board-required" aria-hidden="true">*</span></label>
                <input type="text" id="board-input-author" name="author"
                  placeholder="이름 또는 닉네임" required maxlength="30" autocomplete="nickname">
              </div>
              <div>
                <label for="board-input-category">카테고리</label>
                <input type="text" id="board-input-category" name="category"
                  placeholder="예: 아이디어, 질문…" maxlength="20" autocomplete="off">
              </div>
            </div>
            <div class="board-form-row">
              <label for="board-input-content">내용 <span class="board-required" aria-hidden="true">*</span></label>
              <textarea id="board-input-content" name="content"
                placeholder="내용을 입력하세요…" required maxlength="2000" rows="7"></textarea>
              <span class="board-char-count">
                <span id="board-content-count">0</span> / 2000
              </span>
            </div>
            <div class="board-form-actions">
              <button type="button" class="board-btn board-btn--secondary" id="board-write-cancel">취소</button>
              <button type="submit" class="board-btn board-btn--primary" id="board-write-submit">게시하기</button>
            </div>
          </form>
          <div class="board-success board-success--hidden" id="board-write-success">
            <div class="board-success-icon">✓</div>
            <p class="board-success-msg">게시물이 등록되었습니다!</p>
            <p class="board-success-sub">관리자 검토 후 노출될 수 있습니다.</p>
            <button class="board-btn board-btn--primary" id="board-success-ok">목록으로 돌아가기</button>
          </div>
        </div>

        <!-- ③ 게시글 상세 패널 -->
        <div class="board-panel board-panel--hidden" id="board-panel-detail" role="tabpanel">
          <div class="board-detail-nav">
            <button class="board-back-btn" id="board-back-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              목록으로
            </button>
          </div>
          <article class="board-detail-article">
            <header class="board-detail-header">
              <span class="board-post-tag board-detail-tag-hidden" id="board-detail-tag"></span>
              <h2 class="board-detail-title" id="board-detail-title"></h2>
              <div class="board-detail-meta">
                <span class="board-detail-author" id="board-detail-author"></span>
                <span class="board-detail-date"  id="board-detail-date"></span>
              </div>
            </header>
            <div class="board-detail-content" id="board-detail-content"></div>
          </article>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  }

  // ─── 게시글 목록 로드 ─────────────────────────────────────
  async function loadPosts(categoryFilter) {
    const listEl   = document.getElementById('board-post-list');
    const filterEl = document.getElementById('board-category-filter');
    listEl.innerHTML = '<div class="board-loading"><span class="board-spinner"></span> 불러오는 중...</div>';

    try {
      const res  = await fetch(WEB_APP_URL + '?action=getBoardPosts');
      const data = await res.json();

      if (!data.success || !Array.isArray(data.posts) || data.posts.length === 0) {
        listEl.innerHTML = '<div class="board-empty">아직 게시글이 없습니다.<br>첫 글을 남겨보세요! 🖊</div>';
        return;
      }

      // 카테고리 옵션 업데이트
      const cats = [...new Set(data.posts.map(p => p.category).filter(Boolean))];
      filterEl.innerHTML =
        '<option value="">전체 카테고리</option>' +
        cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

      const filtered = categoryFilter
        ? data.posts.filter(p => p.category === categoryFilter)
        : data.posts;

      if (filtered.length === 0) {
        listEl.innerHTML = '<div class="board-empty">해당 카테고리의 게시글이 없습니다.</div>';
        return;
      }

      listEl.innerHTML = filtered.map((post, idx) => {
        const dt = post.datetime
          ? new Date(post.datetime).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
          : '';
        const preview = String(post.content || '').slice(0, 90) +
          (String(post.content || '').length > 90 ? '…' : '');
        return `
          <article class="board-post-card" data-idx="${idx}" tabindex="0" role="button"
                   style="cursor:pointer" title="게시글 보기">
            ${post.category ? `<span class="board-post-tag">${esc(post.category)}</span>` : ''}
            <h3 class="board-post-title">${esc(post.title || '(제목 없음)')}</h3>
            <p class="board-post-preview">${esc(preview)}</p>
            <footer class="board-post-meta">
              <span class="board-post-author">✏ ${esc(post.author || '익명')}</span>
              <span class="board-post-date">${dt}</span>
            </footer>
          </article>`;
      }).join('');

      // 목록 카드 클릭 → 상세 보기
      listEl._posts = filtered;
      listEl.querySelectorAll('.board-post-card').forEach(card => {
        card.addEventListener('click',  () => showPostDetail(listEl._posts[+card.dataset.idx]));
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') showPostDetail(listEl._posts[+card.dataset.idx]);
        });
      });

    } catch (err) {
      console.error('[Board] 불러오기 실패:', err);
      listEl.innerHTML = '<div class="board-error">게시글을 불러오지 못했습니다.<br>잠시 후 다시 시도해 주세요.</div>';
    }
  }

  // ─── 게시글 상세 표시 ─────────────────────────────────────
  function showPostDetail(post) {
    const tag     = document.getElementById('board-detail-tag');
    const title   = document.getElementById('board-detail-title');
    const author  = document.getElementById('board-detail-author');
    const date    = document.getElementById('board-detail-date');
    const content = document.getElementById('board-detail-content');

    if (post.category) {
      tag.textContent = post.category;
      tag.classList.remove('board-detail-tag-hidden');
    } else {
      tag.textContent = '';
      tag.classList.add('board-detail-tag-hidden');
    }

    title.textContent  = post.title || '(제목 없음)';
    author.textContent = '✏ ' + (post.author || '익명');
    date.textContent   = post.datetime
      ? new Date(post.datetime).toLocaleDateString('ko-KR',
          { year: 'numeric', month: 'long', day: 'numeric' })
      : '';

    // 줄바꿈 보존 (XSS 방지 후 <br> 변환)
    content.innerHTML = esc(post.content || '').replace(/\n/g, '<br>');

    showPanel('detail');
  }

  // ─── 패널 전환 ────────────────────────────────────────────
  function showPanel(name) {
    // 탭 버튼 상태 (detail은 탭 없음)
    document.querySelectorAll('.board-tab').forEach(t => {
      const on = t.dataset.tab === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    ['list', 'write', 'detail'].forEach(p => {
      document.getElementById('board-panel-' + p)
        .classList.toggle('board-panel--hidden', p !== name);
    });
  }

  // ─── 게시글 제출 ──────────────────────────────────────────
  function handleWriteSubmit(e) {
    e.preventDefault();
    const title    = document.getElementById('board-input-title').value.trim();
    const author   = document.getElementById('board-input-author').value.trim();
    const category = document.getElementById('board-input-category').value.trim();
    const content  = document.getElementById('board-input-content').value.trim();

    if (!title || !author || !content) {
      alert('제목, 작성자, 내용은 필수 항목입니다.');
      return;
    }

    const submitBtn = document.getElementById('board-write-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '게시 중…';

    fetch(WEB_APP_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ type: 'board', title, author, category, content })
    })
    .then(() => {
      document.getElementById('board-write-form').style.display = 'none';
      document.getElementById('board-write-success').classList.remove('board-success--hidden');
    })
    .catch(() => alert('게시 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'))
    .finally(() => {
      submitBtn.disabled    = false;
      submitBtn.textContent = '게시하기';
    });
  }

  // ─── 사이드바 게시글 로드 ─────────────────────────────────
  async function loadSidebarPosts(openBoardFn) {
    const listEl = document.getElementById('sidebar-board-list');
    if (!listEl) return;

    try {
      const res  = await fetch(WEB_APP_URL + '?action=getBoardPosts');
      const data = await res.json();

      if (!data.success || !Array.isArray(data.posts) || data.posts.length === 0) {
        listEl.innerHTML = '<li class="sidebar-board-empty">등록된 게시글이 없습니다.</li>';
        return;
      }

      const latest = data.posts.slice(0, MAX_SIDEBAR_POSTS);

      listEl.innerHTML = latest.map((post, i) => {
        const shortTitle = String(post.title || '(제목 없음)');
        const display    = shortTitle.length > 20 ? shortTitle.slice(0, 20) + '…' : shortTitle;
        return `<li>
          <a href="#" class="sidebar-board-link" data-idx="${i}"
             title="${esc(shortTitle)}">${esc(display)}</a>
        </li>`;
      }).join('');

      // 클릭 시 모달 열고 상세 표시
      listEl.querySelectorAll('.sidebar-board-link').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const post = latest[+link.dataset.idx];
          openBoardFn(post); // 모달을 열며 해당 게시글 상세 표시
        });
      });

    } catch (err) {
      console.error('[Sidebar Board] 불러오기 실패:', err);
      listEl.innerHTML = '<li class="sidebar-board-empty">불러오기 실패</li>';
    }
  }

  // ─── 초기화 ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('board-trigger');
    if (!trigger) return;

    const backdrop = createModal();

    // 모달 열기 (postToShow가 있으면 상세 바로 표시)
    function openBoard(postToShow) {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (postToShow) {
        showPostDetail(postToShow);
      } else {
        showPanel('list');
        loadPosts();
      }
    }

    function closeBoard() {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    // 이벤트 바인딩
    trigger.addEventListener('click', () => openBoard());
    document.getElementById('board-modal-close').addEventListener('click', closeBoard);
    // 배경 클릭으로는 닫히지 않음 (✕ 버튼 또는 ESC로만 닫기)
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) closeBoard();
    });

    // 탭 전환
    document.querySelectorAll('.board-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        showPanel(btn.dataset.tab);
        if (btn.dataset.tab === 'list') loadPosts();
      });
    });

    // 카테고리 필터
    document.getElementById('board-category-filter').addEventListener('change', e => {
      loadPosts(e.target.value);
    });

    // 새로고침
    document.getElementById('board-refresh').addEventListener('click', () => {
      loadPosts(document.getElementById('board-category-filter').value);
    });

    // 글쓰기 취소
    document.getElementById('board-write-cancel').addEventListener('click', () => {
      showPanel('list');
      loadPosts();
    });

    // 상세 → 목록으로
    document.getElementById('board-back-btn').addEventListener('click', () => {
      showPanel('list');
      loadPosts();
    });

    // 성공 후 목록으로
    document.getElementById('board-success-ok').addEventListener('click', () => {
      document.getElementById('board-write-form').style.display = '';
      document.getElementById('board-write-success').classList.add('board-success--hidden');
      showPanel('list');
      loadPosts();
      loadSidebarPosts(openBoard); // 사이드바 갱신
    });

    // 폼 제출
    document.getElementById('board-write-form').addEventListener('submit', handleWriteSubmit);

    // 글자수 카운트
    document.getElementById('board-input-content').addEventListener('input', function () {
      document.getElementById('board-content-count').textContent = this.value.length;
    });

    // 사이드바 게시글 초기 로드
    loadSidebarPosts(openBoard);
  });
})();
