/* kiem-chu.js: kiểm cỡ chữ và tương phản trên trang đã dựng.
   Dán vào bảng điều khiển trình duyệt, hoặc chạy bằng công cụ javascript của trình duyệt, ở khổ 1400 và 375.
   Trả về JSON: tổng số khối chữ, số lỗi, danh sách lỗi gộp theo lớp, và cặp chữ chồng nhau trong SVG.
   Sàn: chữ thường 13px; nhãn viết hoa đậm 11.5px; chữ trong SVG 12px sau khi thu; tương phản 4.5:1, chữ lớn 3:1.
   Nền để tính tương phản là nền thật nằm dưới chữ (kể cả lớp phủ và ô sáng trượt), không phải nền trang.
   Chỉ giao trang khi loi === 0, overlap rỗng và banVeQuaRong rỗng.
   Chạy ở ba khổ: 1400, 1000 (máy tính bảng) và 375. Khổ 1000 là chỗ bố cục rơi về một cột, hai lỗi gần nhất lọt lưới ở đây. */
(() => {
  const FLOOR = 13, LABEL_FLOOR = 11.5, SVG_FLOOR = 12, AA = 4.5, AA_LARGE = 3;
  const parse = c => { const m = c && c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = c => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b); };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05); };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const layerOf = e => {  /* màu nền một phần tử tự vẽ, kể cả lớp phủ linear-gradient(màu, màu) */
    const cs = getComputedStyle(e); const out = [];
    const g = (cs.backgroundImage || '').match(/linear-gradient\((rgba?\([^)]+\)),\s*(rgba?\([^)]+\))\)/);
    if (g && g[1] === g[2]) out.push(parse(g[1]));
    out.push(parse(cs.backgroundColor));
    return out.filter(c => c && c.a > 0);
  };
  const body = () => parse(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
  const compose = layers => { let acc = null; for (const c of layers) { acc = acc ? blend(acc, c) : c; if (c.a >= .99) return acc; } return acc ? blend(acc, body()) : body(); };
  /* nền thật: thứ nằm dưới điểm giữa của chữ (có cả ô sáng trượt, lớp phủ); nếu ngoài khung nhìn thì đi ngược lên cha */
  const bgOf = el => {
    const r = el.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    let stack = [];
    if (cx >= 0 && cy >= 0 && cx <= innerWidth && cy <= innerHeight) {
      const els = document.elementsFromPoint(cx, cy); const i = els.indexOf(el);
      if (i >= 0) stack = els.slice(i);
    }
    if (!stack.length) { let e = el; while (e && e !== document.documentElement) { stack.push(e); e = e.parentElement; } }
    const layers = []; for (const e of stack) { for (const c of layerOf(e)) { layers.push(c); if (c.a >= .99) return compose(layers); } }
    return compose(layers);
  };
  const out = { khô: innerWidth, tong: 0, loi: 0, nho: 0, mo: 0, svgNho: 0, danhSach: {}, overlap: [], banVeQuaRong: [] };
  const add = (k, why) => { const key = k + ' | ' + why; out.danhSach[key] = (out.danhSach[key] || 0) + 1; out.loi++; };
  document.querySelectorAll('body *:not(script):not(style):not(svg):not(svg *)').forEach(el => {
    const hasText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!hasText) return;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return;
    const r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) return;
    out.tong++;
    const fs = parseFloat(cs.fontSize), w = parseInt(cs.fontWeight, 10) || 400;
    const upper = cs.textTransform === 'uppercase';
    const col = parse(cs.color), bg = bgOf(el);
    const cr = col ? ratio(blend(col, bg), bg) : 9;
    const large = fs >= 24 || (fs >= 18.66 && w >= 700);
    const need = large ? AA_LARGE : AA;
    const name = (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : el.tagName.toLowerCase());
    const tag = name + ' ' + fs.toFixed(1) + 'px';
    const okSize = fs >= FLOOR || (upper && w >= 600 && fs >= LABEL_FLOOR);
    if (!okSize) { out.nho++; add(tag, 'chữ nhỏ dưới sàn'); }
    if (cr < need) { out.mo++; add(tag + ' ' + cr.toFixed(2) + ':1', 'tương phản dưới ' + need); }
  });
  document.querySelectorAll('svg text').forEach(t => {
    const cs = getComputedStyle(t); if (cs.display === 'none') return;
    const fs = parseFloat(cs.fontSize);
    let scale = 1; try { const bb = t.getBBox(), rc = t.getBoundingClientRect(); if (bb.height > 0) scale = rc.height / bb.height; } catch (e) {}
    const rendered = fs * scale;
    if (rendered < SVG_FLOOR - .05) { out.svgNho++; add('svg ' + (t.getAttribute('class') || 'text') + ' ' + fs + 'px in ra ' + rendered.toFixed(1) + 'px', 'chữ SVG dưới sàn'); }
  });
  /* chữ chồng nhau và chữ tràn khỏi nút trong mọi SVG đang hiện */
  document.querySelectorAll('svg').forEach(svg => {
    if (svg.getBoundingClientRect().width === 0) return;
    const ts = [...svg.querySelectorAll('text')].map(t => { const b = t.getBBox(); return { t: t.textContent.slice(0, 18), x: b.x, r: b.x + b.width, y: b.y, b: b.y + b.height }; });
    for (let i = 0; i < ts.length; i++) for (let j = i + 1; j < ts.length; j++) { const a = ts[i], c = ts[j]; if (a.x < c.r && c.x < a.r && a.y < c.b && c.y < a.b) out.overlap.push(a.t + ' | ' + c.t); }
    const rects = [...svg.querySelectorAll('rect.sv-node,rect.sv-chip')].map(r => ({ x: r.x.baseVal.value, y: r.y.baseVal.value, w: r.width.baseVal.value, h: r.height.baseVal.value }));
    ts.forEach(t => rects.forEach(n => { const inside = t.x >= n.x && t.x < n.x + n.w && t.y >= n.y && t.y < n.y + n.h; if (inside && t.r > n.x + n.w + 1) out.overlap.push('tràn nút: ' + t.t + ' +' + Math.round(t.r - (n.x + n.w))); }));
    /* chữ bị hình tròn che: nhãn dài hơn khoảng trống giữa hai nút tròn */
    const circles = [...svg.querySelectorAll('circle')].filter(c => c.r.baseVal.value >= 12).map(c => ({ cx: c.cx.baseVal.value, cy: c.cy.baseVal.value, r: c.r.baseVal.value }));
    ts.forEach(t => circles.forEach(c => {
      const tx = (t.x + t.r) / 2, ty = (t.y + t.b) / 2;
      /* chữ đặt cố ý trong lòng hình tròn (nhãn lõi, nhãn vòng) không phải lỗi: bỏ qua khi tâm chữ nằm trong */
      if (Math.hypot(tx - c.cx, ty - c.cy) <= c.r) return;
      if (ty < c.cy - c.r || ty > c.cy + c.r) return;
      const dy = Math.abs(ty - c.cy), half = Math.sqrt(Math.max(0, c.r * c.r - dy * dy));
      if (t.r > c.cx - half + 1 && t.x < c.cx + half - 1) out.overlap.push('chữ bị nút tròn che: ' + t.t);
    }));
  });
  /* bản vẽ phóng quá khổ khi trang xếp một cột: chữ 13.5px trong viewBox 600 mà khung rộng 1000 sẽ in ra 22px */
  document.querySelectorAll('svg[viewBox]').forEach(svg => {
    const r = svg.getBoundingClientRect(); if (r.width === 0) return;
    const vb = svg.viewBox.baseVal; if (!vb || !vb.width) return;
    const ti = r.width / vb.width;
    if (ti > 1.2) out.banVeQuaRong.push((svg.getAttribute('aria-label') || svg.className.baseVal || 'svg').slice(0, 40) + ' phóng ' + ti.toFixed(2) + ' lần');
  });
  out.loi += out.overlap.length + out.banVeQuaRong.length;
  return JSON.stringify(out, null, 0);
})();
