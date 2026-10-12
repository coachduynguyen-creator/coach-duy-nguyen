/* Tải e-book trên trang Công cụ: lần đầu điền tên, Zalo, vai trò rồi tải ngay, thông tin đi qua
   trạm /api/dang-ky vào phần Liên hệ của Pancake. Người đã điền ở một công cụ hay e-book khác thì
   tải luôn, trạm vẫn ghi thêm một dòng là đã tải cuốn này. Dùng chung khóa ngf-lead với cong-cu-ai.js. */
(function () {
  var d = document, hop = d.getElementById('eb-hop'), f = d.getElementById('eb-form'), loi = d.getElementById('eb-loi');
  if (!hop || !f) return;
  var CHUC_DANH = {0: 'Chủ doanh nghiệp-4421-8240-f9b1-4edf-3105-9677-c312',
                   1: 'Quản lý-0268-27d9-11a8-cdfd-599c-b34f-b1c3',
                   3: 'Kinh doanh tự do-70b4-5a43-b7ab-7da5-672e-08d7-067e'};
  function doc(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function ghi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var nguon = doc('ngf-nguon') || 'khong-ro', dang = null;

  function gui(n, a) {
    n.eb = n.eb || []; if (n.eb.indexOf(a.dataset.ma) < 0) n.eb.push(a.dataset.ma); ghi('ngf-lead', n);
    var note = ((n.da || []).length ? 'Công cụ đã mở: ' + n.da.join(', ') + ' · ' : '') + 'E-book đã tải: ' + n.eb.join(', ') +
      ' · Nguồn: ' + nguon + ' · Vai trò: ' + (n.vai_tro_chu || '') +
      (n.doanh_thu_chu ? ' · Doanh thu mỗi tháng: ' + n.doanh_thu_chu : '') + (n.doi_ngu_chu ? ' · Đội ngũ: ' + n.doi_ngu_chu : '');
    var data = {Name: n.ten, Phone: n.zalo, Note: note,
      utm_source: nguon, utm_medium: 'ebook', utm_campaign: 'ngf-thu-lead', utm_content: a.dataset.ma, url_page: location.href};
    if (CHUC_DANH[n.vai_tro]) data.chuc_danh = CHUC_DANH[n.vai_tro];
    return fetch('/api/dang-ky', {method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true,
      body: JSON.stringify({data: data, id: n.pid || null})})
      .then(function (r) { return r.json(); })
      .then(function (j) { if (j && j.id) { n.pid = j.id; ghi('ngf-lead', n); } })
      .catch(function () {});
  }
  function tai(a) { var l = d.createElement('a'); l.href = a.href; l.download = ''; d.body.appendChild(l); l.click(); l.remove(); }

  [].forEach.call(d.querySelectorAll('.eb-tai'), function (a) {
    a.addEventListener('click', function (ev) {
      var n = doc('ngf-lead');
      if (n && n.ten && n.zalo) { gui(n, a); return; }   // đã điền: để trình duyệt tải như thường
      ev.preventDefault(); dang = a;
      d.getElementById('eb-ten-sach').textContent = a.dataset.ten;
      loi.hidden = true; hop.showModal ? hop.showModal() : hop.setAttribute('open', '');
      f.ten.focus();
    });
  });
  d.getElementById('eb-dong').addEventListener('click', function () { hop.close ? hop.close() : hop.removeAttribute('open'); });
  f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var n = {ten: f.ten.value.trim(), zalo: f.zalo.value.replace(/[^\d+]/g, ''), vai_tro: f.vai_tro.value, doanh_thu: '', doi_ngu: ''};
    var thieu = !n.ten ? 'Bạn điền tên giúp Duy.' : !/^\+?\d{9,12}$/.test(n.zalo) ? 'Số Zalo chưa đúng, bạn kiểm tra lại giúp Duy.' :
      n.vai_tro === '' ? 'Bạn chọn vai trò giúp Duy.' : '';
    if (thieu) { loi.textContent = thieu; loi.hidden = false; return; }
    n.vai_tro_chu = f.vai_tro.options[f.vai_tro.selectedIndex].textContent;
    ghi('ngf-lead', n);
    gui(n, dang); tai(dang);
    hop.close ? hop.close() : hop.removeAttribute('open');
  });
})();
