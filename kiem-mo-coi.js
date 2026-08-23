/* kiem-mo-coi.js: bắt lỗi chữ mồ côi (một từ rớt xuống dòng riêng) trên trang đã dựng.
   Dán vào bảng điều khiển trình duyệt ở các khổ 1400, 1100, 900, 768, 480, 375.
   Trả về JSON: số khối chữ đã đo, số lỗi, và danh sách chỗ lỗi kèm dòng cuối.
   Quy ước: tiêu đề (h1 tới h4, .cap-the h3, .quyet b, .nl h4) mà dòng cuối chỉ có 1 từ là lỗi.
   Đoạn văn nhiều dòng mà dòng cuối chỉ có 1 từ ngắn dưới 5 ký tự cũng bị nêu ra để cân nhắc.
   Chỉ giao trang khi loi === 0. */
(() => {
  const dongCua = el => {
    // gom các hình chữ nhật của từng từ thành dòng theo toạ độ trên
    const r = document.createRange(); const dong = [];
    const duyet = n => {
      if (n.nodeType === 3) {
        const t = n.textContent; const re = /\S+/g; let m;
        while ((m = re.exec(t))) {
          r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
          const box = r.getBoundingClientRect(); if (!box.width) continue;
          const top = Math.round(box.top);
          let d = dong.find(x => Math.abs(x.top - top) <= 4);
          if (!d) { d = { top, tu: [] }; dong.push(d); }
          d.tu.push(m[0]);
        }
      } else if (n.nodeType === 1 && getComputedStyle(n).display !== 'none') {
        for (const c of n.childNodes) duyet(c);
      }
    };
    duyet(el); dong.sort((a, b) => a.top - b.top); return dong;
  };
  const TIEU = 'h1,h2,h3,h4,.quyet b,.nl h4,.moc b,.dong b,.nam5 b,.dk b,.sb-chu h3,.o h3,.bang h3,.nganh3 h3';
  const out = { do: 0, loi: 0, canhBao: 0, danhSach: [], canhBaoDs: [], vw: innerWidth };
  document.querySelectorAll(TIEU).forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const box = el.getBoundingClientRect(); if (!box.width || !box.height) return;
    out.do++;
    const dong = dongCua(el); if (dong.length < 2) return;
    const cuoi = dong[dong.length - 1];
    if (cuoi.tu.length === 1) {
      out.loi++;
      out.danhSach.push((el.className || el.tagName) + ' | ' + dong.length + ' dòng | dòng cuối: "' + cuoi.tu[0] + '" | ' + el.textContent.trim().slice(0, 46));
    }
  });
  document.querySelectorAll('p').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || parseFloat(cs.fontSize) < 15) return;
    const box = el.getBoundingClientRect(); if (!box.width) return;
    const dong = dongCua(el); if (dong.length < 2) return;
    const cuoi = dong[dong.length - 1];
    if (cuoi.tu.length === 1 && cuoi.tu[0].replace(/[.,;:!?"')\]]+$/, '').length < 5) {
      out.canhBao++;
      out.canhBaoDs.push('p | dòng cuối: "' + cuoi.tu[0] + '" | ' + el.textContent.trim().slice(0, 46));
    }
  });
  return JSON.stringify(out, null, 0);
})();
