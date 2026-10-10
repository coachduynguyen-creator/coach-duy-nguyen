/* Bốn trang công cụ AI (cong-cu/*.html, dựng từ cong_cu_ai.py).
   Biểu mẫu năm ô gửi vào đúng biểu mẫu Pancake của trang /tham-gia, kèm mã
   công cụ và mã nguồn. Phiếu điền số chỉ lưu trên máy người dùng, không gửi
   số liệu doanh nghiệp đi đâu. */
(function () {
  var d = document, dl = d.getElementById('cc-du-lieu');
  if (!dl) return;
  var DL = JSON.parse(dl.textContent), MA = DL.ma;

  // Biểu mẫu Pancake "NGF Free", chính là biểu mẫu nút đăng ký của /tham-gia mở ra.
  var PANCAKE = 'https://pos.pancake.vn/api/v1/shops/430111447/crm/Contact/form_record';
  var FORM_ID = '5ab7145a-0632-4575-837b-966204ccf51b';
  // Mã lựa chọn trong ô "Chức danh" và "Ưu tiên" của Pancake.
  var CHUC_DANH = {0: 'Chủ doanh nghiệp-4421-8240-f9b1-4edf-3105-9677-c312',
                   1: 'Quản lý-0268-27d9-11a8-cdfd-599c-b34f-b1c3',
                   3: 'Kinh doanh tự do-70b4-5a43-b7ab-7da5-672e-08d7-067e'};
  var RAT_UU_TIEN = 'Rất ưu tiên-c949-4aae-d952-afdb-0e9e-c95c-a801';
  var NGUON_HOP_LE = ['facebook', 'youtube', 'tiktok', 'zalo', 'gioi-thieu'];

  function doc(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function ghi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  // Mã nguồn: lấy từ đường link (?nguon=youtube), nhớ lại cho lần sau.
  var q = new URLSearchParams(location.search);
  var nguon = (q.get('nguon') || q.get('utm_source') || '').toLowerCase();
  if (NGUON_HOP_LE.indexOf(nguon) > -1) ghi('ngf-nguon', nguon);
  else nguon = doc('ngf-nguon') || 'khong-ro';
  var THU = q.get('thu') === '1';

  var dk = d.getElementById('cc-dang-ky');
  if (dk) dk.href = '../tham-gia/?cong-cu=' + MA + '&nguon=' + nguon;

  /* Hai thẻ bài mẫu: bấm thẻ đang mở thì thu gọn. */
  var tabs = [].slice.call(d.querySelectorAll('.cc-tab')), pan = [].slice.call(d.querySelectorAll('.cc-mau'));
  function moThe(i) {
    tabs.forEach(function (t, j) { t.classList.toggle('chon', j === i); t.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    pan.forEach(function (p, j) { p.hidden = j !== i; });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { moThe(t.classList.contains('chon') ? -1 : i); });
  });
  moThe(0);

  /* Gửi một bản ghi vào Pancake. */
  function canGoi(n) { return +n.vai_tro === 0 && +n.doanh_thu >= 2 && +n.doi_ngu >= 1; }
  function gui(n, moThem) {
    var f = d.getElementById('cc-form');
    function chu(ten, i) { var o = f ? f.querySelector('[name="' + ten + '"] option[value="' + i + '"]') : null; return o ? o.textContent : n[ten + '_chu']; }
    var goi = canGoi(n);
    var ghiChu = (moThem ? 'Mở thêm công cụ AI: ' : 'Công cụ AI: ') + MA + ' · Nguồn: ' + nguon +
      ' · Vai trò: ' + chu('vai_tro', n.vai_tro) + ' · Doanh thu mỗi tháng: ' + chu('doanh_thu', n.doanh_thu) +
      ' · Đội ngũ: ' + chu('doi_ngu', n.doi_ngu) + ' · Cần gọi lại: ' + (goi ? 'CÓ' : 'không');
    var data = {Name: (THU ? 'BẢN THỬ, XÓA - ' : '') + n.ten, Phone: n.zalo, Note: ghiChu,
      utm_source: nguon, utm_medium: 'cong-cu-ai', utm_campaign: 'ngf-thu-lead', utm_content: MA, url_page: location.href,
      // ba ô kỹ thuật biểu mẫu Pancake luôn gửi kèm, thiếu là Pancake báo lỗi
      for_import: false, extra_infor: {}, FullAddress: {country_name: null}};
    if (CHUC_DANH[n.vai_tro]) data.chuc_danh = CHUC_DANH[n.vai_tro];
    if (goi) data.uu_tien = RAT_UU_TIEN;
    return fetch(PANCAKE, {method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true,
      body: JSON.stringify({data: data, form_id: FORM_ID})})
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j || !j.success) throw new Error((j && j.message) || 'Pancake chưa nhận'); return j; });
  }
  function daGhi(n) { n.da = n.da || []; if (n.da.indexOf(MA) < 0) n.da.push(MA); ghi('ngf-lead', n); }

  /* Phiếu điền số và bộ câu lệnh. */
  function ghep(gt) {
    var phan = DL.mau2.split(/\[[^\]]+\]/), ra = phan[0];
    for (var i = 1; i < phan.length; i++) ra += ((gt[i] || '').trim() || DL.trong[i - 1]) + phan[i];
    return ra;
  }
  function chep(chu, nut) {
    function xong() { var c = nut.textContent; nut.textContent = 'Đã chép'; setTimeout(function () { nut.textContent = c; }, 1600); }
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(chu).then(xong, du); } else du();
    function du() {
      var t = d.createElement('textarea'); t.value = chu; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      d.body.appendChild(t); t.select(); try { d.execCommand('copy'); xong(); } catch (e) {} d.body.removeChild(t);
    }
  }
  function moKhoa() {
    var kin = d.getElementById('cc-kin');
    if (kin.childElementCount) return;
    var cua = d.getElementById('cc-cua'); if (cua) cua.hidden = true;
    kin.appendChild(d.getElementById('cc-mau-kin').content.cloneNode(true));
    var KEY = 'ngf-phieu-' + MA, gt = doc(KEY) || {};
    var l2 = kin.querySelector('.cc-lenh[data-so="2"] .cc-chu');
    function capNhat() { l2.textContent = ghep(gt); }
    [].forEach.call(kin.querySelectorAll('[data-o]'), function (o) {
      o.value = gt[o.dataset.o] || '';
      o.addEventListener('input', function () { gt[o.dataset.o] = o.value; ghi(KEY, gt); capNhat(); });
    });
    capNhat();
    // Câu lệnh dài thì thu gọn, bấm "Xem đầy đủ" để mở. Nút Chép luôn chép đủ.
    [].forEach.call(kin.querySelectorAll('.cc-chu'), function (c) {
      if (c.textContent.length < 600) return;
      c.classList.add('gon');
      var b = d.createElement('button'); b.type = 'button'; b.className = 'cc-mo-het'; b.textContent = 'Xem đầy đủ';
      b.addEventListener('click', function () { var g = c.classList.toggle('gon'); b.textContent = g ? 'Xem đầy đủ' : 'Thu gọn'; });
      c.parentNode.appendChild(b);
    });
    [].forEach.call(kin.querySelectorAll('.cc-chep'), function (nut) {
      nut.addEventListener('click', function () { chep(nut.closest('.cc-lenh').querySelector('.cc-chu').textContent, nut); });
    });
  }

  // Ghi tên công cụ này để trang da-dang-ky.html (Pancake chuyển tới sau khi gửi) đưa về đúng chỗ.
  try { localStorage.setItem('ngf-cho', MA); } catch (e) {}
  var nguoi = doc('ngf-lead');
  if (nguoi && ((nguoi.ten && nguoi.zalo) || nguoi.qua_pancake)) {
    // Đã điền ở một công cụ khác: mở luôn, vẫn ghi vào Pancake là đã mở thêm công cụ này.
    moKhoa();
    if (nguoi.ten && (nguoi.da || []).indexOf(MA) < 0) gui(nguoi, true).then(function () { daGhi(nguoi); }, function () {});
  }

  var f = d.getElementById('cc-form'), loi = d.getElementById('cc-loi');
  if (f) f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var n = {ten: f.ten.value.trim(), zalo: f.zalo.value.replace(/[^\d+]/g, ''),
             vai_tro: f.vai_tro.value, doanh_thu: f.doanh_thu.value, doi_ngu: f.doi_ngu.value};
    var thieu = !n.ten ? 'Bạn điền tên giúp Duy.' : !/^\+?\d{9,12}$/.test(n.zalo) ? 'Số Zalo chưa đúng, bạn kiểm lại giúp Duy.' :
      (n.vai_tro === '' || n.doanh_thu === '' || n.doi_ngu === '') ? 'Bạn chọn đủ ba ô vai trò, doanh thu và đội ngũ giúp Duy.' : '';
    if (thieu) { loi.textContent = thieu; loi.hidden = false; return; }
    loi.hidden = true;
    ['vai_tro', 'doanh_thu', 'doi_ngu'].forEach(function (k) { n[k + '_chu'] = f[k].options[f[k].selectedIndex].textContent; });
    ghi('ngf-lead', n);
    // Mở ngay, không chờ Pancake trả lời. Gửi chưa được thì lần sau mở trang sẽ gửi lại.
    gui(n, false).then(function () { daGhi(n); }, function () {});
    moKhoa();
    d.getElementById('cc-kin').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
})();
