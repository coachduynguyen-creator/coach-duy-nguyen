/* kiem-anh.js: dò ảnh bị cắt nhiều do tỉ lệ khung khác tỉ lệ ảnh gốc.
   Trả về danh sách ảnh mà object-fit cover cắt mất hơn 22% một chiều. */
(() => {
  const ra = [];
  document.querySelectorAll('img').forEach(im => {
    if (!im.complete || !im.naturalWidth) return;
    const r = im.getBoundingClientRect();
    if (r.width < 20 || r.height < 20) return;
    const cs = getComputedStyle(im);
    if (cs.objectFit !== 'cover') return;
    const tlAnh = im.naturalWidth / im.naturalHeight;
    const tlKhung = r.width / r.height;
    // phần bị cắt theo chiều bị thừa
    const cat = tlAnh > tlKhung ? 1 - (tlKhung / tlAnh) : 1 - (tlAnh / tlKhung);
    // neo theo chiều dọc: 50% là cắt đều hai đầu, dễ mất đầu người
    const y = parseFloat((cs.objectPosition.split(' ')[1] || '50%'));
    const neoGiua = y >= 35 && y <= 65;
    const nen = im.closest('.tran-nen, .hero-nen');   // ảnh nền đã làm mờ, cắt sâu không sao
    if (cat > 0.22 && neoGiua && !nen) {
      ra.push({
        anh: (im.getAttribute('src') || '').split('/').pop(),
        lop: (im.parentElement.className || '').split(' ')[0],
        goc: im.naturalWidth + 'x' + im.naturalHeight + ' (' + tlAnh.toFixed(2) + ')',
        khung: Math.round(r.width) + 'x' + Math.round(r.height) + ' (' + tlKhung.toFixed(2) + ')',
        cat: Math.round(cat * 100) + '%',
        viTri: cs.objectPosition
      });
    }
  });
  return JSON.stringify(ra);
})();
