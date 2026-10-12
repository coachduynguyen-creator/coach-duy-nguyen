/* Bốn trang công cụ AI (cong-cu/*.html, dựng từ cong_cu_ai.py).
   Biểu mẫu gửi qua trạm /api/dang-ky vào phần Liên hệ của Pancake, kèm mã
   công cụ và mã nguồn. Phiếu điền số chỉ lưu trên máy người dùng, không gửi
   số liệu doanh nghiệp đi đâu. */
(function () {
  var d = document, dl = d.getElementById('cc-du-lieu');
  if (!dl) return;
  var DL = JSON.parse(dl.textContent), MA = DL.ma;

  // Gửi qua trạm Cloudflare /api/dang-ky vào Pancake; câu phân loại, cột Pancake, Rất ưu tiên ở dang-ky.js.
  var DK = window.NGF_DK;
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
  // Bài mẫu thu gọn còn tên các chỗ hở, bấm mới mở số liệu và cách AI tính.
  pan.forEach(function (p) {
    p.classList.add('gon');
    var b = d.createElement('button'); b.type = 'button'; b.className = 'cc-mau-mo'; b.textContent = 'Xem số liệu và cách AI tính';
    b.addEventListener('click', function () { var g = p.classList.toggle('gon'); b.textContent = g ? 'Xem số liệu và cách AI tính' : 'Thu gọn'; });
    p.appendChild(b);
  });

  /* Tiến độ: câu lệnh nào người dùng đã chạy, lưu trên máy để lần sau mở lại chạy tiếp. */
  var KEY_XONG = 'ngf-xong-' + MA, xong = doc(KEY_XONG) || [];
  function tienDo() {
    var n = xong.length, tiep = 0;
    for (var i = 1; i <= DL.n; i++) if (xong.indexOf(i) < 0) { tiep = i; break; }
    [].forEach.call(d.querySelectorAll('.cc-tien'), function (el) {
      el.hidden = n === 0;
      el.innerHTML = !tiep ? 'Bạn đã chạy đủ ' + DL.n + ' câu lệnh.' :
        'Bạn đã chạy ' + n + ' trên ' + DL.n + ' câu lệnh. <a href="#' + (d.getElementById('lenh-' + tiep) ? 'lenh-' + tiep : 'cc-cua') + '">Chạy tiếp câu lệnh ' + tiep + ' &rarr;</a>';
    });
  }

  /* Gửi một bản ghi vào Pancake: lần đầu tạo khách, lần sau cập nhật đúng khách đó (mã khách nhớ trong ngf-lead). */
  function gui(n) {
    var da = (n.da || []).slice(); if (da.indexOf(MA) < 0) da.push(MA);
    var data = {Name: (THU ? 'BẢN THỬ, XÓA - ' : '') + n.ten, Phone: n.zalo,
      Note: 'Công cụ đã mở: ' + da.join(', ') + ((n.eb || []).length ? ' · E-book đã tải: ' + n.eb.join(', ') : '') + ' · Nguồn: ' + nguon + DK.ghiChu(n),
      utm_source: nguon, utm_medium: 'cong-cu-ai', utm_campaign: 'ngf-thu-lead', utm_content: MA, url_page: location.href};
    var t = DK.truong(n, DL.noi_dau); for (var k in t) data[k] = t[k];
    return DK.gui(n, data);
  }
  function daGhi(n) { n.da = n.da || []; if (n.da.indexOf(MA) < 0) n.da.push(MA); ghi('ngf-lead', n); }

  /* Phiếu điền số và bộ câu lệnh. */
  function ghep(gt, html) {
    var phan = DL.mau2.split(/\[[^\]]+\]/), ra = esc(phan[0], html);
    for (var i = 1; i < phan.length; i++) {
      var v = (gt[i] || '').trim();
      ra += (v ? (html ? '<mark class="cc-da">' + esc(v, 1) + '</mark>' : v)
               : (html ? '<span class="cc-chua">' + esc(DL.trong[i - 1], 1) + '</span>' : DL.trong[i - 1])) + esc(phan[i], html);
    }
    return ra;
  }
  function esc(t, html) { return html ? t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : t; }
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
    function capNhat() { l2.innerHTML = ghep(gt, true); }
    [].forEach.call(kin.querySelectorAll('[data-o]'), function (o) {
      o.value = gt[o.dataset.o] || '';
      o.addEventListener('input', function () { gt[o.dataset.o] = o.value; ghi(KEY, gt); capNhat(); });
    });
    capNhat();
    ganNut(kin);
    tienDo();
  }
  // Câu lệnh dài thì thu gọn, bấm "Xem đầy đủ" để mở. Nút Chép luôn chép đủ.
  function ganNut(goc) {
    [].forEach.call(goc.classList.contains('cc-lenh') ? [goc] : goc.querySelectorAll('.cc-lenh'), function (l) {
      var so = +l.dataset.so, nut = l.querySelector('.cc-lenh-dau .cc-chep');
      var nhan = d.createElement('label'); nhan.className = 'cc-xong';
      nhan.innerHTML = '<input type="checkbox"> Đã chạy';
      var o = nhan.firstChild; o.checked = xong.indexOf(so) > -1; l.classList.toggle('da-chay', o.checked);
      o.addEventListener('change', function () {
        xong = xong.filter(function (x) { return x !== so; }); if (o.checked) xong.push(so);
        ghi(KEY_XONG, xong); l.classList.toggle('da-chay', o.checked); tienDo();
      });
      var cum = d.createElement('div'); cum.className = 'cc-lenh-nut';
      nut.parentNode.insertBefore(cum, nut); cum.appendChild(nhan); cum.appendChild(nut);
    });
    [].forEach.call(goc.querySelectorAll('.cc-mo-gpt'), function (a) {
      a.addEventListener('click', function () {
        var chu = a.closest('.cc-lenh').querySelector('.cc-chu').textContent;
        chep(chu, {textContent: ''});
        var u = 'https://chatgpt.com/?q=' + encodeURIComponent(chu);
        a.href = u.length < 7500 ? u : 'https://chatgpt.com/';
      });
    });
    [].forEach.call(goc.querySelectorAll('.cc-chu'), function (c) {
      if (c.textContent.length < 600 || c.closest('[data-so="2"]')) return;
      c.classList.add('gon');
      var b = d.createElement('button'); b.type = 'button'; b.className = 'cc-mo-het'; b.textContent = 'Xem đầy đủ';
      b.addEventListener('click', function () { var g = c.classList.toggle('gon'); b.textContent = g ? 'Xem đầy đủ' : 'Thu gọn'; });
      c.insertAdjacentElement('afterend', b);
    });
    [].forEach.call(goc.querySelectorAll('.cc-chep'), function (nut) {
      nut.addEventListener('click', function () { chep(nut.closest('.cc-lenh').querySelector('.cc-chu').textContent, nut); });
    });
  }
  var mo = d.getElementById('mo-cong-cu');
  if (mo) [].forEach.call(mo.querySelectorAll('.cc-doc > .cc-lenh'), function (l) { ganNut(l); });
  tienDo();

  // Ghi tên công cụ này để trang da-dang-ky.html (Pancake chuyển tới sau khi gửi) đưa về đúng chỗ.
  try { localStorage.setItem('ngf-cho', MA); } catch (e) {}
  var nguoi = doc('ngf-lead');
  var f = d.getElementById('cc-form'), loi = d.getElementById('cc-loi');
  if (nguoi && nguoi.ten && nguoi.zalo && nguoi.pl) {
    // Đã điền đủ ở một công cụ hay e-book khác: mở luôn, vẫn ghi vào Pancake là đã mở thêm công cụ này.
    moKhoa();
    if ((nguoi.da || []).indexOf(MA) < 0) gui(nguoi).then(function () { daGhi(nguoi); }, function () {});
  } else if (nguoi && f) {
    // Từng điền ba ô trước khi có câu phân loại: điền sẵn phần đã có, chỉ cần chọn thêm.
    f.ten.value = nguoi.ten || ''; f.zalo.value = nguoi.zalo || ''; f.vai_tro.value = nguoi.vai_tro || '';
  }

  if (f) f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var cu = doc('ngf-lead') || {}, pl = DK.docPL(f);
    var n = {ten: f.ten.value.trim(), zalo: DK.zalo(f.zalo.value), vai_tro: f.vai_tro.value, pl: pl.pl,
             pid: cu.pid, da: cu.da, eb: cu.eb};
    var thieu = !n.ten ? 'Bạn điền tên giúp Duy.' : !n.zalo ? 'Số Zalo chưa đúng, bạn kiểm tra lại giúp Duy. Số bắt đầu bằng 0 và có 10 chữ số.' :
      n.vai_tro === '' ? 'Bạn chọn vai trò giúp Duy.' : pl.thieu;
    if (thieu) { loi.textContent = thieu; loi.hidden = false; return; }
    loi.hidden = true;
    n.vai_tro_chu = f.vai_tro.options[f.vai_tro.selectedIndex].textContent;
    ghi('ngf-lead', n);
    // Mở ngay, không chờ Pancake trả lời. Gửi chưa được thì lần sau mở trang sẽ gửi lại.
    gui(n).then(function () { daGhi(n); }, function () {});
    moKhoa();
    d.getElementById('cc-kin').scrollIntoView({behavior: 'smooth', block: 'start'});
  });
})();
