/* Phần dùng chung của biểu mẫu đăng ký trên trang công cụ (cong-cu-ai.js) và hộp tải e-book (ebook-tai.js):
   đọc năm câu phân loại, kiểm tra số Zalo, đổi câu trả lời thành cột Pancake và quy tắc Rất ưu tiên.
   Năm câu và mã cột Pancake khai trong cong_cu_ai.py (PHAN_LOAI), in sẵn vào data-o và data-pk. */
window.NGF_DK = (function () {
  var CHUC_DANH = {0: 'Chủ doanh nghiệp-4421-8240-f9b1-4edf-3105-9677-c312',
                   1: 'Quản lý-0268-27d9-11a8-cdfd-599c-b34f-b1c3',
                   3: 'Kinh doanh tự do-70b4-5a43-b7ab-7da5-672e-08d7-067e'};
  var RAT_UU_TIEN = 'Rất ưu tiên-c949-4aae-d952-afdb-0e9e-c95c-a801';
  // Số Việt Nam: 0 và 9 chữ số, hoặc 84 / +84 và 9 chữ số.
  function zalo(s) { var z = (s || '').replace(/[^\d+]/g, ''); return /^(0\d{9}|\+?84\d{9})$/.test(z) ? z : ''; }
  function docPL(form) {
    var pl = {}, thieu = '';
    [].forEach.call(form.querySelectorAll('.cc-pl'), function (fs) {
      var c = fs.querySelector('input:checked');
      if (!c) { if (!thieu) thieu = 'Bạn chọn giúp Duy câu: ' + fs.querySelector('legend').textContent; return; }
      pl[fs.dataset.ten] = {i: +c.value, chu: c.nextElementSibling.textContent, pk: c.dataset.pk, o: fs.dataset.o};
    });
    return {pl: pl, thieu: thieu};
  }
  // Rất ưu tiên: chủ doanh nghiệp có đội ngũ, hoặc muốn giải quyết sớm (phiếu mục R2, bỏ vế doanh thu theo Q4).
  function canGoi(n) {
    var pl = n.pl || {};
    return (+n.vai_tro === 0 && pl.doi_ngu && pl.doi_ngu.i >= 1) || (pl.giai_quyet && pl.giai_quyet.i <= 1);
  }
  function truong(n, noiDau) {
    var d = {}, pl = n.pl || {};
    if (CHUC_DANH[n.vai_tro]) d.chuc_danh = CHUC_DANH[n.vai_tro];
    for (var k in pl) if (pl[k].o && pl[k].pk) d[pl[k].o] = pl[k].pk;
    if (noiDau) d.noi_dau_kh = noiDau;
    if (canGoi(n)) d.uu_tien = RAT_UU_TIEN;
    return d;
  }
  function ghiChu(n) {
    var pl = n.pl || {}, ra = ' · Vai trò: ' + (n.vai_tro_chu || 'chưa trả lời');
    [['nganh_nghe', 'Lĩnh vực'], ['cap_do', 'Giai đoạn'], ['tuoi_nghe', 'Kinh doanh'], ['doi_ngu', 'Đội ngũ'], ['giai_quyet', 'Muốn giải quyết sớm']]
      .forEach(function (x) { if (pl[x[0]]) ra += ' · ' + x[1] + ': ' + pl[x[0]].chu; });
    return ra + ' · Cần gọi lại: ' + (canGoi(n) ? 'CÓ' : 'không');
  }
  function gui(n, data) {
    return fetch('/api/dang-ky', {method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true,
      body: JSON.stringify({data: data, id: n.pid || null})})
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j || !j.success) throw new Error('Pancake chưa nhận');
        if (j.id) { n.pid = j.id; try { localStorage.setItem('ngf-lead', JSON.stringify(n)); } catch (e) {} }
        return j;
      });
  }
  return {zalo: zalo, docPL: docPL, truong: truong, ghiChu: ghiChu, gui: gui};
})();
