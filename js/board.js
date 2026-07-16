/**
 * WORFLOGY — board.js
 * 데칼코마니 클릭 → Google Sheets 연동 자유게시판
 * 패널: 글 목록 | 글 쓰기 | 게시글 상세
 * 사이드바: 최신 5개 게시글 링크 자동 표시
 * i18n: 페이지 lang 속성 기반 한국어/영문 자동 전환
 */
(function () {
  'use strict';

  const WEB_APP_URL =
    window.WorflogyConfig?.WEB_APP_URL ||
    'https://script.google.com/macros/s/AKfycbxBsuTAuC2SE0CXE6ycda-AdzGGXeZfQ75Pz0qINdvStz6wVXay1df65IuI62-eL97Qmg/exec';

  const MAX_SIDEBAR_POSTS = 5;

  // ─── 언어 감지 ────────────────────────────────────────────
  const isEn = document.documentElement.lang === 'en' ||
               window.location.pathname.startsWith('/en');

  // ─── 번역 테이블 ──────────────────────────────────────────
  const T = {
    modalTitle:        isEn ? 'Community Board'          : '자유 게시판',
    tabList:           isEn ? 'Posts'                    : '글 목록',
    tabWrite:          isEn ? 'Write'                    : '글 쓰기',
    close:             isEn ? 'Close'                    : '닫기',
    allCategories:     isEn ? 'All Categories'           : '전체 카테고리',
    refresh:           isEn ? 'Refresh'                  : '새로고침',
    loading:           isEn ? 'Loading...'               : '불러오는 중...',
    noPostsYet:        isEn ? 'No posts yet. Be the first to write.' : '아직 게시글이 없습니다. 첫 글을 남겨보세요.',
    noCategoryPosts:   isEn ? 'No posts in this category.' : '해당 카테고리의 게시글이 없습니다.',
    loadError:         isEn ? 'Failed to load posts. Please try again.'
                             : '게시글을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
    noTitle:           isEn ? '(No Title)'               : '(제목 없음)',
    anonymous:         isEn ? 'Anonymous'                : '익명',
    viewPost:          isEn ? 'View post'                : '게시글 보기',
    labelTitle:        isEn ? 'Title'                    : '제목',
    labelAuthor:       isEn ? 'Author'                   : '작성자',
    labelCategory:     isEn ? 'Category'                 : '카테고리',
    labelContent:      isEn ? 'Content'                  : '내용',
    phTitle:           isEn ? 'Enter a title'            : '제목을 입력하세요',
    phAuthor:          isEn ? 'Name or nickname'         : '이름 또는 닉네임',
    phCategory:        isEn ? 'e.g. Idea, Question...'  : '예: 아이디어, 질문...',
    phContent:         isEn ? 'Enter content...'         : '내용을 입력하세요...',
    cancel:            isEn ? 'Cancel'                   : '취소',
    submit:            isEn ? 'Post'                     : '게시하기',
    submitting:        isEn ? 'Posting...'               : '게시 중...',
    successMsg:        isEn ? 'Your post has been submitted!' : '게시물이 등록되었습니다!',
    successSub:        isEn ? 'It may appear after admin review.' : '관리자 검토 후 노출될 수 있습니다.',
    successBack:       isEn ? 'Back to List'             : '목록으로 돌아가기',
    backToList:        isEn ? 'Back to List'             : '목록으로',
    validateRequired:  isEn ? 'Title, author, and content are required.'
                             : '제목, 작성자, 내용은 필수 항목입니다.',
    submitError:       isEn ? 'An error occurred. Please try again.'
                             : '게시 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    sidebarLoading:    isEn ? 'Loading...'               : '불러오는 중...',
    sidebarEmpty:      isEn ? 'No posts yet.'            : '등록된 게시글이 없습니다.',
    sidebarLoadError:  isEn ? 'Failed to load.'          : '불러오기 실패',
  };

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
            <h2 id="board-modal-title" class="board-modal-title">${T.modalTitle}</h2>
            <div class="board-modal-tabs" role="tablist">
              <button class="board-tab active" data-tab="list" role="tab" aria-selected="true">${T.tabList}</button>
              <button class="board-tab" data-tab="write" role="tab" aria-selected="false">${T.tabWrite}</button>
            </div>
          </div>
          <button class="board-modal-close" id="board-modal-close" aria-label="${T.close}">✕</button>
        </header>

        <!-- 글 목록 패널 -->
        <div class="board-panel" id="board-panel-list" role="tabpanel">
          <div class="board-filter-bar">
            <select id="board-category-filter" class="board-select" aria-label="${T.allCategories}">
              <option value="">${T.allCategories}</option>
            </select>
            <button class="board-refresh-btn" id="board-refresh" aria-label="${T.refresh}">↺</button>
          </div>
          <div class="board-post-list" id="board-post-list">
            <div class="board-loading"><span class="board-spinner"></span> ${T.loading}</div>
          </div>
        </div>

        <!-- 글쓰기 패널 -->
        <div class="board-panel board-panel--hidden" id="board-panel-write" role="tabpanel">
          <form id="board-write-form" class="board-write-form" novalidate>
            <div class="board-form-row">
              <label for="board-input-title">${T.labelTitle} <span class="board-required" aria-hidden="true">*</span></label>
              <input type="text" id="board-input-title" name="title"
                placeholder="${T.phTitle}" required maxlength="100" autocomplete="off">
            </div>
            <div class="board-form-row board-form-row--two">
              <div>
                <label for="board-input-author">${T.labelAuthor} <span class="board-required" aria-hidden="true">*</span></label>
                <input type="text" id="board-input-author" name="author"
                  placeholder="${T.phAuthor}" required maxlength="30" autocomplete="nickname">
              </div>
              <div>
                <label for="board-input-category">${T.labelCategory}</label>
                <input type="text" id="board-input-category" name="category"
                  placeholder="${T.phCategory}" maxlength="20" autocomplete="off">
              </div>
            </div>
            <div class="board-form-row">
              <label for="board-input-content">${T.labelContent} <span class="board-required" aria-hidden="true">*</span></label>
              <textarea id="board-input-content" name="content"
                placeholder="${T.phContent}" required maxlength="2000" rows="7"></textarea>
              <span class="board-char-count">
                <span id="board-content-count">0</span> / 2000
              </span>
            </div>
            <div class="board-form-actions">
              <button type="button" class="board-btn board-btn--secondary" id="board-write-cancel">${T.cancel}</button>
              <button type="submit" class="board-btn board-btn--primary" id="board-write-submit">${T.submit}</button>
            </div>
          </form>
          <div class="board-success board-success--hidden" id="board-write-success">
            <div class="board-success-icon">✓</div>
            <p class="board-success-msg">${T.successMsg}</p>
            <p class="board-success-sub">${T.successSub}</p>
            <button class="board-btn board-btn--primary" id="board-success-ok">${T.successBack}</button>
          </div>
        </div>

        <!-- 게시글 상세 패널 -->
        <div class="board-panel board-panel--hidden" id="board-panel-detail" role="tabpanel">
          <div class="board-detail-nav">
            <button class="board-back-btn" id="board-back-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              ${T.backToList}
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
    listEl.innerHTML = `<div class="board-loading"><span class="board-spinner"></span> ${T.loading}</div>`;

    try {
      const res  = await fetch(WEB_APP_URL + '?action=getBoardPosts');
      const data = await res.json();

      if (!data.success || !Array.isArray(data.posts) || data.posts.length === 0) {
        listEl.innerHTML = `<div class="board-empty">${T.noPostsYet}</div>`;
        return;
      }

      const cats = [...new Set(data.posts.map(p => p.category).filter(Boolean))];
      filterEl.innerHTML =
        `<option value="">${T.allCategories}</option>` +
        cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

      const filtered = categoryFilter
        ? data.posts.filter(p => p.category === categoryFilter)
        : data.posts;

      if (filtered.length === 0) {
        listEl.innerHTML = `<div class="board-empty">${T.noCategoryPosts}</div>`;
        return;
      }

      const locale = isEn ? 'en-US' : 'ko-KR';
      listEl.innerHTML = filtered.map((post, idx) => {
        const dt = post.datetime
          ? new Date(post.datetime).toLocaleDateString(locale, { month: 'short', day: 'numeric' })
          : '';
        const preview = String(post.content || '').slice(0, 90) +
          (String(post.content || '').length > 90 ? '…' : '');
        return `
          <article class="board-post-card" data-idx="${idx}" tabindex="0" role="button"
                   style="cursor:pointer" title="${T.viewPost}">
            ${post.category ? `<span class="board-post-tag">${esc(post.category)}</span>` : ''}
            <h3 class="board-post-title">${esc(post.title || T.noTitle)}</h3>
            <p class="board-post-preview">${esc(preview)}</p>
            <footer class="board-post-meta">
              <span class="board-post-author">${esc(post.author || T.anonymous)}</span>
              <span class="board-post-date">${dt}</span>
            </footer>
          </article>`;
      }).join('');

      listEl._posts = filtered;
      listEl.querySelectorAll('.board-post-card').forEach(card => {
        card.addEventListener('click',  () => showPostDetail(listEl._posts[+card.dataset.idx]));
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') showPostDetail(listEl._posts[+card.dataset.idx]);
        });
      });

    } catch (err) {
      console.error('[Board] load error:', err);
      listEl.innerHTML = `<div class="board-error">${T.loadError}</div>`;
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

    const locale = isEn ? 'en-US' : 'ko-KR';
    title.textContent  = post.title || T.noTitle;
    author.textContent = post.author || T.anonymous;
    date.textContent   = post.datetime
      ? new Date(post.datetime).toLocaleDateString(locale,
          { year: 'numeric', month: 'long', day: 'numeric' })
      : '';

    content.innerHTML = esc(post.content || '').replace(/\n/g, '<br>');
    showPanel('detail');
  }

  // ─── 패널 전환 ────────────────────────────────────────────
  function showPanel(name) {
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
      alert(T.validateRequired);
      return;
    }

    const submitBtn = document.getElementById('board-write-submit');
    submitBtn.disabled    = true;
    submitBtn.textContent = T.submitting;

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
    .catch(() => alert(T.submitError))
    .finally(() => {
      submitBtn.disabled    = false;
      submitBtn.textContent = T.submit;
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
        listEl.innerHTML = `<li class="sidebar-board-empty">${T.sidebarEmpty}</li>`;
        return;
      }

      const latest = data.posts.slice(0, MAX_SIDEBAR_POSTS);
      listEl.innerHTML = latest.map((post, i) => {
        const shortTitle = String(post.title || T.noTitle);
        const display    = shortTitle.length > 20 ? shortTitle.slice(0, 20) + '…' : shortTitle;
        return `<li>
          <a href="#" class="sidebar-board-link" data-idx="${i}"
             title="${esc(shortTitle)}">${esc(display)}</a>
        </li>`;
      }).join('');

      listEl.querySelectorAll('.sidebar-board-link').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          openBoardFn(latest[+link.dataset.idx]);
        });
      });

    } catch (err) {
      console.error('[Sidebar Board] load error:', err);
      listEl.innerHTML = `<li class="sidebar-board-empty">${T.sidebarLoadError}</li>`;
    }
  }

  // ─── 초기화 ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('board-trigger');
    if (!trigger) return;

    const backdrop = createModal();

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

    trigger.addEventListener('click', () => openBoard());
    document.getElementById('board-modal-close').addEventListener('click', closeBoard);
    // 배경 클릭으로는 닫히지 않음 (✕ 버튼 또는 ESC 키로만 닫기)
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) closeBoard();
    });

    document.querySelectorAll('.board-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        showPanel(btn.dataset.tab);
        if (btn.dataset.tab === 'list') loadPosts();
      });
    });

    document.getElementById('board-category-filter').addEventListener('change', e => {
      loadPosts(e.target.value);
    });

    document.getElementById('board-refresh').addEventListener('click', () => {
      loadPosts(document.getElementById('board-category-filter').value);
    });

    document.getElementById('board-write-cancel').addEventListener('click', () => {
      showPanel('list');
      loadPosts();
    });

    document.getElementById('board-back-btn').addEventListener('click', () => {
      showPanel('list');
      loadPosts();
    });

    document.getElementById('board-success-ok').addEventListener('click', () => {
      document.getElementById('board-write-form').style.display = '';
      document.getElementById('board-write-success').classList.add('board-success--hidden');
      showPanel('list');
      loadPosts();
      loadSidebarPosts(openBoard);
    });

    document.getElementById('board-write-form').addEventListener('submit', handleWriteSubmit);

    document.getElementById('board-input-content').addEventListener('input', function () {
      document.getElementById('board-content-count').textContent = this.value.length;
    });

    loadSidebarPosts(openBoard);
  });
})();
