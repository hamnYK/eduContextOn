/**
 * WORFLOGY — board.js
 * 데칼코마니 클릭 → Google Sheets 연동 자유게시판
 * 탭: 글 목록 | 글 쓰기
 */
(function () {
  'use strict';

  const WEB_APP_URL =
    window.WorflogyConfig?.WEB_APP_URL ||
    'https://script.google.com/macros/s/AKfycbxBsuTAuC2SE0CXE6ycda-AdzGGXeZfQ75Pz0qINdvStz6wVXay1df65IuI62-eL97Qmg/exec';

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

      listEl.innerHTML = filtered.map(post => {
        const dt = post.datetime
          ? new Date(post.datetime).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
          : '';
        const preview = String(post.content || '').slice(0, 90) +
          (String(post.content || '').length > 90 ? '…' : '');
        return `
          <article class="board-post-card">
            ${post.category ? `<span class="board-post-tag">${esc(post.category)}</span>` : ''}
            <h3 class="board-post-title">${esc(post.title || '(제목 없음)')}</h3>
            <p class="board-post-preview">${esc(preview)}</p>
            <footer class="board-post-meta">
              <span class="board-post-author">✏ ${esc(post.author || '익명')}</span>
              <span class="board-post-date">${dt}</span>
            </footer>
          </article>`;
      }).join('');

    } catch (err) {
      console.error('[Board] 불러오기 실패:', err);
      listEl.innerHTML = '<div class="board-error">게시글을 불러오지 못했습니다.<br>잠시 후 다시 시도해 주세요.</div>';
    }
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

  // ─── 탭 전환 ──────────────────────────────────────────────
  function switchTab(name) {
    document.querySelectorAll('.board-tab').forEach(t => {
      const on = t.dataset.tab === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    document.getElementById('board-panel-list').classList.toggle('board-panel--hidden', name !== 'list');
    document.getElementById('board-panel-write').classList.toggle('board-panel--hidden', name !== 'write');
  }

  // ─── 초기화 ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('board-trigger');
    if (!trigger) return;

    const backdrop = createModal();

    function openBoard() {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      switchTab('list');
      loadPosts();
    }
    function closeBoard() {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    trigger.addEventListener('click', openBoard);
    document.getElementById('board-modal-close').addEventListener('click', closeBoard);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeBoard(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) closeBoard();
    });
    document.querySelectorAll('.board-tab').forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    document.getElementById('board-category-filter').addEventListener('change', e => {
      loadPosts(e.target.value);
    });
    document.getElementById('board-refresh').addEventListener('click', () => {
      loadPosts(document.getElementById('board-category-filter').value);
    });
    document.getElementById('board-write-cancel').addEventListener('click', () => switchTab('list'));
    document.getElementById('board-success-ok').addEventListener('click', () => {
      document.getElementById('board-write-form').style.display = '';
      document.getElementById('board-write-success').classList.add('board-success--hidden');
      switchTab('list');
      loadPosts();
    });
    document.getElementById('board-write-form').addEventListener('submit', handleWriteSubmit);
    document.getElementById('board-input-content').addEventListener('input', function () {
      document.getElementById('board-content-count').textContent = this.value.length;
    });
  });
})();
