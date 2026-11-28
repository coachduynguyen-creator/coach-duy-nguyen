/* Đồ họa lấy nhãn và nội dung từ HTML đã chốt. Không thêm số liệu hoặc lời hứa. */
(() => {
  if (!document.body.classList.contains('subpage')) return;
  const route = location.pathname.replace(/^\/sevenm\//, '').replace(/\/$/, '');
  const NS = 'http://www.w3.org/2000/svg';
  const photos = {
    plan: '/img/bl-viet-tay.webp',
    meeting: '/img/mc/mc-banlamviec.webp',
    team: '/img/mentor/nhom-nho.webp',
    training: '/sevenm/assets/huan-luyen.webp',
    speaking: '/img/cd-san-khau.webp'
  };
  let serial = 0;
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  function picture(src, cls = '', alt = '') {
    const img = el('img', cls);
    img.src = src; img.alt = alt; img.loading = 'lazy';
    img.width = 1200; img.height = 800; img.decoding = 'async';
    return img;
  }
  function brand(cls = 'vx-hub') {
    const n = el('div', cls); const img = picture('/sevenm/assets/logo.svg'); img.width=226; img.height=33; n.append(img);
    n.setAttribute('aria-hidden', 'true'); return n;
  }
  function hideSource(n) { n.hidden = true; n.style.display = 'none'; }
  // Đường nối đo theo vị trí thật, tự tính lại khi chữ hoặc kích thước thay đổi.
  function connect(stage, pairs) {
    const svg = document.createElementNS(NS, 'svg');
    svg.classList.add('vx-wires'); svg.setAttribute('aria-hidden', 'true');
    stage.prepend(svg);
    function draw() {
      const box = stage.getBoundingClientRect();
      if (!box.width) return;
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      svg.replaceChildren();
      for (const [from, to] of pairs) {
        if (!from.isConnected || !to.isConnected) continue;
        const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - box.left, y1 = a.top + a.height / 2 - box.top;
        const x2 = b.left + b.width / 2 - box.left, y2 = b.top + b.height / 2 - box.top;
        const p = document.createElementNS(NS, 'path');
        const across = Math.abs(x2 - x1) > Math.abs(y2 - y1);
        p.setAttribute('d', across ? `M${x1} ${y1} C${(x1+x2)/2} ${y1} ${(x1+x2)/2} ${y2} ${x2} ${y2}` : `M${x1} ${y1} C${x1} ${(y1+y2)/2} ${x2} ${(y1+y2)/2} ${x2} ${y2}`);
        if (from.getAttribute('aria-pressed') === 'true' || to.getAttribute('aria-pressed') === 'true') p.classList.add('is-active');
        svg.append(p);
      }
    }
    const observer = new ResizeObserver(draw); observer.observe(stage);
    pairs.flat().forEach(n => observer.observe(n));
    document.fonts?.ready.then(draw);
    draw(); return draw;
  }
  function info(source, target) {
    target.replaceChildren();
    const code = source.querySelector('.code');
    if (code) { const c = code.cloneNode(true); c.className = 'eyebrow'; target.append(c); }
    const heading = source.querySelector('h3');
    if (heading) target.append(heading.cloneNode(true));
    [...source.querySelectorAll('p')].filter(p => !p.classList.contains('code')).forEach(p => target.append(p.cloneNode(true)));
    source.querySelectorAll('a').forEach(a => { if (!a.closest('p')) target.append(a.cloneNode(true)); });
  }
  function explorer(group, mode, images = []) {
    if (!group) return;
    const sources = [...group.children].filter(n => n.classList.contains('feature'));
    if (!sources.length) return;
    const stage = el('div', `vx-explorer vx-${mode}`);
    stage.dataset.count = sources.length;
    const map = el('div', 'vx-map');
    const hub = brand();
    const nav = el('div', 'vx-nodes');
    nav.setAttribute('aria-label', group.closest('section')?.querySelector('h2')?.textContent || 'SevenM');
    const detail = el('div', 'vx-detail');
    detail.id = 'vx-detail-' + (++serial);
    const copy = el('div', 'vx-detail-copy'); copy.setAttribute('aria-live', 'polite');
    const photo = images.length ? picture(images[0], 'vx-context-photo') : null;
    if (photo) detail.append(photo);
    let questions;
    if (mode === 'routes') {
      const amount = Number(sources[sources.length-1].textContent.match(/(\d+) câu/)?.[1]);
      if (amount > 0 && amount < 100) {
        questions=el('div','vx-question-art'); questions.hidden=true; questions.setAttribute('aria-hidden','true');
        for(let i=0;i<amount;i++) questions.append(el('span'));
        detail.append(questions);
      }
    }
    detail.append(copy); map.append(hub, nav); stage.append(map, detail);
    const buttons = sources.map((source, i) => {
      const b = el('button', 'vx-node'); b.type = 'button';
      b.setAttribute('aria-controls', detail.id); b.setAttribute('aria-pressed', 'false');
      b.style.setProperty('--i', i);
      const icon = source.querySelector('.feature-symbol');
      if (icon) b.append(icon.cloneNode(true));
      const label = el('span', 'vx-node-label');
      const code = source.querySelector('.code');
      if (code) label.append(el('small', '', code.textContent));
      label.append(el('strong', '', source.querySelector('h3').textContent));
      b.append(label); nav.append(b);
      b.addEventListener('click', event => select(i, event.detail > 0)); return b;
    });
    group.after(stage); hideSource(group);
    let redraw;
    function select(index, reveal = false) {
      buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
      info(sources[index], copy);
      if (photo) { photo.src = images[index % images.length]; photo.hidden=!!questions && index===sources.length-1; }
      if (questions) questions.hidden=index!==sources.length-1;
      redraw?.();
      if (reveal && matchMedia('(max-width:1000px)').matches) detail.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
    }
    if (mode !== 'practice') redraw = connect(map, buttons.map(b => [hub, b]));
    select(0);
    return stage;
  }
  function blueprint(panel) {
    if (!panel) return;
    const drawing = el('div', 'vx-blueprint');
    const hub = brand('vx-blueprint-hub');
    const titles = ['Thị trường', 'Quy trình', 'Nhân sự', 'Ngân sách', 'Công cụ', 'Đo lường', 'Điều hành'];
    // Các tên này đã có nguyên văn trong đoạn giới thiệu bản thiết kế 7 phần.
    const nodes = titles.map((title, i) => {
      const n = el('a', 'vx-blueprint-part');
      n.href = '/sevenm/phuong-phap/#m' + (i+1);
      n.append(el('small', '', 'M' + (i+1)), el('strong', '', title));
      drawing.append(n); return n;
    });
    drawing.prepend(hub); panel.prepend(drawing); panel.classList.add('vx-blueprint-panel');
    connect(drawing, nodes.map(n => [hub, n]));
  }
  function statementFlow(container) {
    if (!container) return;
    const statement = container.querySelector('.big-statement');
    if (statement) {
      const phrases = statement.innerHTML.split(/<br\s*\/?\s*>/i).map(text => { const n = el('span'); n.innerHTML = text; return n.textContent.trim(); }).filter(Boolean);
      if (phrases.length > 1) {
        const drawing = el('div', 'vx-statement-path');
        const nodes = phrases.map((text, i) => { const n = el('div', 'vx-statement-node'); n.append(el('small', '', String(i+1).padStart(2, '0')), el('strong', '', text)); drawing.append(n); return n; });
        statement.after(drawing); hideSource(statement);
        connect(drawing, nodes.slice(1).map((n, i) => [nodes[i], n]));
      }
    }
    container.classList.add('vx-editorial');
    const steps = [...container.querySelectorAll('.clean-list > li')];
    if (steps.length) {
      container.querySelector('.clean-list').classList.add('vx-work-steps');
      steps.forEach((step, i) => step.style.setProperty('--step', '"' + String(i+1).padStart(2,'0') + '"'));
    }
  }
  function roleBridge(group) {
    if (!group) return;
    group.classList.add('vx-role-bridge');
    const nodes = [...group.querySelectorAll('article > .code')];
    nodes.forEach((node, i) => { const icon=picture('/sevenm/assets/ui/'+(i?'users-three':'handshake')+'.svg'); icon.width=40; icon.height=40; node.prepend(icon); });
    if (nodes.length === 2) connect(group, [[nodes[0], nodes[1]]]);
  }
  function experience(group) {
    if (!group) return;
    group.classList.add('vx-experience');
    const images = [photos.speaking, photos.training, photos.meeting];
    [...group.children].filter(n => n.classList.contains('feature')).forEach((feature, i) => {
      feature.prepend(picture(images[i], 'vx-experience-photo', 'Coach Duy Nguyễn trong công việc tư vấn và đào tạo'));
    });
  }
  function toolDrawings(group) {
    if (!group) return;
    group.classList.add('vx-tools');
    [...group.querySelectorAll(':scope > .feature')].forEach((feature, i) => {
      const drawing = el('div', 'vx-tool-drawing'); drawing.setAttribute('aria-hidden', 'true');
      const hub = el('span', 'vx-tool-main');
      const icon = feature.querySelector('.feature-symbol'); if (icon) hub.append(icon.cloneNode(true));
      const a = el('span', 'vx-tool-paper'), b = el('span', 'vx-tool-paper');
      a.style.setProperty('--paper', i % 2 ? '#7daab1' : '#e88e80');
      drawing.append(a, hub, b); feature.prepend(drawing);
      connect(drawing, [[a, hub], [hub, b]]);
    });
  }
  function readingMap() {
    const toc = document.querySelector('.reading-body .muc-luc');
    if (!toc) return;
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    if (!links.length) return;
    const map = el('nav', 'vx-reading-map');
    const heading = el('div', 'vx-reading-root');
    heading.append(el('span', 'eyebrow', toc.querySelector('summary')?.textContent || 'Bài viết'), el('strong', '', document.querySelector('h1').textContent));
    const branches = el('div', 'vx-reading-branches');
    const nodes = links.map((link, i) => {
      const a = link.cloneNode(true); a.className = 'vx-reading-node';
      a.prepend(el('small', '', String(i+1).padStart(2,'0')));
      branches.append(a); return a;
    });
    map.setAttribute('aria-label', toc.querySelector('summary')?.textContent || 'Bài viết');
    map.append(heading, branches);
    document.querySelector('.reading-body').before(map); hideSource(toc);
    connect(map, nodes.map(n => [heading, n]));
  }
  if (route === 'dich-vu/thiet-ke') {
    explorer(document.querySelector('.grid-3'), 'needs', [photos.plan]);
    blueprint(document.querySelector('.deliverable-panel'));
  }
  if (route === 'dich-vu/trien-khai') {
    explorer(document.querySelector('.grid-2'), 'system');
    roleBridge(document.querySelector('.responsibility'));
  }
  if (route === 'dich-vu/huan-luyen') {
    explorer(document.querySelector('.grid-3'), 'practice', [photos.training, photos.meeting, photos.team]);
    statementFlow(document.querySelector('.editorial-split'));
  }
  if (route === 'dich-vu') statementFlow(document.querySelector('.editorial-split'));
  if (route === 'co-van-1-1') {
    const hero = document.querySelector('.page-hero');
    hero.classList.add('vx-consult-hero');
    hero.append(picture(photos.meeting, 'vx-consult-photo'));
    explorer(document.querySelector('.grid-3'), 'intake');
    statementFlow(document.querySelector('.deliverable-panel'));
  }
  if (route === 'lien-he') explorer(document.querySelector('.contact-options'), 'routes', [photos.meeting, photos.training, photos.speaking, '/sevenm/assets/library/gioi-thieu-mo-hinh-7m.jpg']);
  if (route === 'coach-duy') {
    experience(document.querySelector('.grid-3'));
    statementFlow(document.querySelector('.editorial-split'));
  }
  if (route === 'tai-lieu') toolDrawings(document.querySelector('.feature-network'));
  if (document.querySelector('.reading-article')) readingMap();
})();
