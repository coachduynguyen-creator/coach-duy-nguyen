/* Trang giới thiệu e-book (e-book/*.html): điền tên, Zalo, vai trò và năm câu phân loại thì hiện nút tải.
   Thông tin đi qua trạm /api/dang-ky vào Pancake (dang-ky.js). Người đã điền đủ ở công cụ hay e-book khác
   thì thấy nút tải ngay, Pancake vẫn ghi thêm là đã nhận cuốn này. Dùng chung khóa ngf-lead với cong-cu-ai.js. */
(function () {
  var d = document, f = d.getElementById('eb-form'), loi = d.getElementById('eb-loi'), xong = d.getElementById('eb-xong'), DK = window.NGF_DK;
  if (!f || !DK) return;
  var MA = f.dataset.ma, TEN = f.dataset.ten, NOI_DAU = f.dataset.noidau;
  function doc(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function ghi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var q = new URLSearchParams(location.search), nguon = (q.get('nguon') || '').toLowerCase();
  if (['facebook', 'youtube', 'tiktok', 'zalo', 'instagram', 'gioi-thieu'].indexOf(nguon) > -1) ghi('ngf-nguon', nguon); else nguon = doc('ngf-nguon') || 'khong-ro';
  var THU = q.get('thu') === '1';

  function gui(n) {
    n.eb = n.eb || []; if (n.eb.indexOf(MA) < 0) n.eb.push(MA); ghi('ngf-lead', n);
    var data = {Name: (THU ? 'BẢN THỬ, XÓA - ' : '') + n.ten, Phone: n.zalo,
      Note: ((n.da || []).length ? 'Công cụ đã mở: ' + n.da.join(', ') + ' · ' : '') + 'E-book đã nhận: ' + n.eb.join(', ') + ' · Nguồn: ' + nguon + DK.ghiChu(n),
      utm_source: nguon, utm_medium: 'ebook', utm_campaign: 'ngf-thu-lead', utm_content: MA, url_page: location.href};
    var t = DK.truong(n, NOI_DAU); for (var k in t) data[k] = t[k];
    return DK.gui(n, data).catch(function () {});
  }
  function moNut() { f.hidden = true; d.querySelector('#eb-cua > .cc-cua-dan').hidden = true; d.querySelector('#eb-cua > h2').hidden = true; xong.hidden = false; }

  var n0 = doc('ngf-lead');
  if (n0 && n0.ten && n0.zalo && n0.pl) {
    moNut();
    if ((n0.eb || []).indexOf(MA) < 0) gui(n0);
  } else if (n0) { f.ten.value = n0.ten || ''; f.zalo.value = n0.zalo || ''; f.vai_tro.value = n0.vai_tro || ''; }

  f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var cu = doc('ngf-lead') || {}, pl = DK.docPL(f);
    var n = {ten: f.ten.value.trim(), zalo: DK.zalo(f.zalo.value), vai_tro: f.vai_tro.value, pl: pl.pl, pid: cu.pid, da: cu.da, eb: cu.eb};
    var thieu = !n.ten ? 'Bạn điền tên giúp Duy.' : !n.zalo ? 'Số Zalo chưa đúng, bạn kiểm tra lại giúp Duy. Số bắt đầu bằng 0 và có 10 chữ số.' :
      n.vai_tro === '' ? 'Bạn chọn vai trò giúp Duy.' : pl.thieu;
    if (thieu) { loi.textContent = thieu; loi.hidden = false; return; }
    loi.hidden = true;
    n.vai_tro_chu = f.vai_tro.options[f.vai_tro.selectedIndex].textContent;
    ghi('ngf-lead', n);
    gui(n);
    moNut();
    d.getElementById('eb-cua').scrollIntoView({behavior: 'smooth', block: 'center'});
  });
})();
