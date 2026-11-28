/* Cải tiến cách đọc nội dung sẵn có. Không sửa nguồn chuẩn hoặc nhận dữ liệu khách. */
(() => {
  document.querySelectorAll('.subpage .grid-2, .subpage .grid-3').forEach(group => {
    const features = [...group.querySelectorAll(':scope > .feature')];
    if (!features.length) return;
    group.classList.add('feature-network');
    group.dataset.count = String(features.length);
    features.forEach(feature => {
      const title = feature.querySelector('h3')?.textContent || '';
      const label = feature.querySelector('.code')?.textContent || '';
      const content = (label + ' ' + title).toLowerCase();
      const match = [
        [/công nghệ|công cụ|giải pháp/, 'circuitry'],
        [/nhân viên|huấn luyện|con người|đào tạo/, 'users-three'],
        [/đo lường|quản lý|kết quả/, 'chart-line-up'],
        [/quy trình|thực hiện|triển khai/, 'git-branch'],
        [/tài liệu|biểu mẫu|báo cáo/, 'files'],
        [/ngân sách|thu nhập|chi phí/, 'wallet'],
        [/hiện trạng|đánh giá|chọn/, 'magnifying-glass'],
        [/đồng hành|làm cùng|người chủ/, 'handshake']
      ].find(([pattern]) => pattern.test(content));
      const icon = document.createElement('img');
      icon.className = 'feature-symbol';
      icon.src = '/sevenm/assets/ui/' + (match?.[1] || 'squares-four') + '.svg';
      icon.width = 36; icon.height = 36; icon.alt = '';
      icon.setAttribute('aria-hidden', 'true');
      feature.prepend(icon);
    });
  });
  const chapters = [...document.querySelectorAll('.standards .standard-chapter')];
  if (chapters.length) {
    const container = chapters[0].parentElement;
    const nav = document.createElement('nav');
    nav.className = 'standards-nav';
    nav.setAttribute('aria-label', 'Chọn trụ cột để đọc các chuẩn');
    const buttons = chapters.map(chapter => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-controls', chapter.id);
      const code = chapter.querySelector('.standard-number').cloneNode(true);
      code.removeAttribute('class');
      b.append(code, chapter.querySelector('summary strong').cloneNode(true));
      b.addEventListener('click', () => {
        select(chapter.id);
        history.replaceState(null, '', '#' + chapter.id);
      });
      nav.append(b);
      chapter.querySelector('summary').addEventListener('click', e => e.preventDefault());
      chapter.querySelector('summary').setAttribute('tabindex', '-1');
      return b;
    });
    function select(id) {
      const index = Math.max(0, chapters.findIndex(c => c.id === id));
      chapters.forEach((chapter, i) => {
        chapter.hidden = i !== index;
        chapter.open = i === index;
        buttons[i].setAttribute('aria-pressed', String(i === index));
      });
      dispatchEvent(new CustomEvent('sevenm:chapter', { detail: { index } }));
    }
    container.prepend(nav);
    container.classList.add('is-explorer');
    select(location.hash.slice(1));
    addEventListener('hashchange', () => {
      if (chapters.some(c => c.id === location.hash.slice(1))) select(location.hash.slice(1));
    });
    // Liên kết trên vòng tròn vẫn mở đúng chương khi nhấn lại cùng một mã.
    document.querySelectorAll('a[href^="#m"]').forEach(a => a.addEventListener('click', () => select(a.hash.slice(1))));
  }
  const isAssessment = location.pathname.replace(/\/$/, '').endsWith('/sevenm/danh-gia');
  if (!isAssessment) {
    const steps = [...document.querySelectorAll('.subpage .journey li')];
    const resize = new ResizeObserver(entries => entries.forEach(({ target }) => {
      const small = matchMedia('(max-width:760px)').matches;
      const layout = getComputedStyle(target.parentElement);
      const gap = parseFloat(small ? layout.rowGap : layout.columnGap) || 30;
      target.style.setProperty('--journey-distance', Math.max(0, (small ? target.offsetHeight - 57 : target.offsetWidth - 64) + gap) + 'px');
    }));
    steps.forEach(step => {
      const packet = document.createElement('span');
      packet.className = 'journey-packet';
      packet.setAttribute('aria-hidden', 'true');
      step.append(packet);
      resize.observe(step);
    });
    return;
  }
  const journey = document.querySelector('.journey');
  if (!journey) return;
  const items = [...journey.children];
  const titles = items.map(item => item.querySelector('h3').textContent);
  const descriptions = items.map(item => item.querySelector('p').textContent);
  const preview = document.createElement('div');
  preview.className = 'assessment-preview';
  preview.innerHTML = `<div class="assessment-controls" aria-label="Khám phá cách tự chấm"></div><div class="assessment-stage"><div class="assessment-scene"><div class="assessment-clock"><strong>10</strong><small>PHÚT, KHOẢNG</small></div><small>Người chủ · Quản lý</small></div><div class="assessment-scene" hidden><div class="assessment-questions" aria-label="Minh họa 28 câu hỏi"></div><small>28 câu · Theo mô hình 7M</small></div><div class="assessment-scene" hidden><div class="assessment-pillars"></div><small>7 phần của phòng kinh doanh</small></div><div class="assessment-scene" hidden><div class="assessment-priority"><span>Hiện trạng</span><span>Trao đổi</span><span>Việc cần làm trước</span></div></div><div class="assessment-description" id="assessment-description" aria-live="polite" aria-atomic="true"></div><p class="assessment-source">Mô phỏng cách thực hiện, chưa phải kết quả đánh giá doanh nghiệp.</p></div>`;
  const matrix = preview.querySelector('.assessment-questions');
  for (let i = 1; i <= 28; i++) {
    const cell = document.createElement('span');
    cell.textContent = String(i).padStart(2, '0');
    cell.style.setProperty('--i', i);
    matrix.append(cell);
  }
  ['Thị trường', 'Quy trình', 'Nhân sự', 'Ngân sách', 'Công cụ', 'Đo lường', 'Điều hành'].forEach((title, i) => {
    const label = document.createElement('span');
    label.textContent = `M${i + 1} · ${title}`;
    preview.querySelector('.assessment-pillars').append(label);
  });
  const controls = preview.querySelector('.assessment-controls');
  const scenes = [...preview.querySelectorAll('.assessment-scene')];
  const buttons = titles.map((title, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    const code = document.createElement('span');
    code.textContent = String(index + 1).padStart(2, '0');
    const text = document.createElement('strong');
    text.textContent = title;
    button.append(code, text);
    button.setAttribute('aria-controls', 'assessment-description');
    button.addEventListener('click', () => selectStep(index));
    controls.append(button);
    return button;
  });
  function selectStep(index) {
    buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    scenes.forEach((scene, i) => scene.hidden = i !== index);
    preview.querySelector('.assessment-description').textContent = descriptions[index];
  }
  journey.after(preview);
  journey.hidden = true;
  // hidden phải thắng các quy tắc display của danh sách cũ.
  journey.style.display = 'none';
  selectStep(0);
})();
