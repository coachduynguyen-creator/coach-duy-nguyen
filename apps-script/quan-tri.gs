/**
 * Trang quản trị thử thách 7 ngày, giai đoạn 1. Dán chung dự án Apps Script với nhan-bai-thu-thach.gs.
 *
 * Mở bằng bản triển khai thứ hai của cùng dự án (Chạy với tư cách: người dùng truy cập ứng dụng web;
 * Ai có quyền truy cập: Bất kỳ ai có tài khoản Google), địa chỉ .../exec?trang=quan-tri
 *
 * Chỉ email có trong trang tính "Quản trị" mới xem được. Trang tính này do khoiTaoQuanTri() tạo
 * lúc chủ dự án chạy tay, nên người vào trước không bao giờ thành quản trị.
 * Cửa khóa thật là quyền xem Sheet: ai chưa được chia sẻ Sheet thì máy không đọc được gì cho họ.
 *
 * Trang này không ghi gì vào bảng bài nộp, chỉ ghi vào trang tính Quản trị khi Quản trị thêm hoặc gỡ người. Dữ liệu Pancake (kết quả gọi) chưa nối, nên các
 * trường đó trả về null và trang hiện "chưa nối".
 */

var TEN_TRANG_QUAN_TRI = 'Quản trị';
var CAN_XEM_VIDEO = 90;       // giống CAN_XEM trong trang làm bài
var NGUONG_DIEN = 0.8;        // tỷ lệ ô đã điền để tiêu chí C8 đạt
var NGUONG_TRUC = 0.6;        // tỷ lệ tiêu chí đạt trên số tiêu chí máy xác định được, để trục tính là cao
var TOI_THIEU_XET = 2;        // dưới số này thì trục chưa đủ dữ liệu, chưa xếp ô
var COT_KHONG_DEM = ['Thời gian', 'Họ và tên', 'Email', 'Số điện thoại', 'Đồng ý dùng bài', 'Google Doc',
  'Đồng ý đăng công khai', 'Vai trò', 'Số người', 'Số năm hoạt động', 'Doanh thu một năm', 'Bản đồng ý',
  'Bước nộp', 'Nộp sau hạn', 'Đã xem video (%)', 'Việc sửa trong tuần này'];

/** Chạy tay một lần, bằng tài khoản chủ dự án. Tạo trang tính Quản trị và ghi chủ dự án làm Quản trị đầu tiên. */
function khoiTaoQuanTri() {
  var bang = layBang(), t = bang.getSheetByName(TEN_TRANG_QUAN_TRI);
  if (!t) {
    t = bang.insertSheet(TEN_TRANG_QUAN_TRI);
    t.appendRow(['Email', 'Vai trò']);
    t.getRange(1, 1, 1, 2).setFontWeight('bold');
    t.setFrozenRows(1);
    var chu = Session.getEffectiveUser().getEmail();
    if (chu) t.appendRow([chu, 'Quản trị']);
    t.getRange('D1').setValue('Vai trò chỉ nhận hai giá trị: Quản trị (xem tất cả, thêm và gỡ người) hoặc Sales (xem khách). Thêm hoặc gỡ người ở mục Cài đặt của trang quản trị, máy tự chia sẻ Sheet. Sửa tay ở đây thì phải tự chia sẻ Sheet.');
  }
  return 'Đã có trang tính ' + TEN_TRANG_QUAN_TRI + '. Mở nó, thêm email của sales và người hỗ trợ.';
}

function danhSachQuanTri() {
  var t = layBang().getSheetByName(TEN_TRANG_QUAN_TRI);
  if (!t || t.getLastRow() < 2) return [];
  return t.getRange(2, 1, t.getLastRow() - 1, 2).getValues().map(function (r) {
    var vt = chuoi(r[1]).toLowerCase();
    return { email: chuoi(r[0]).toLowerCase(), vai_tro: vt === 'sales' ? 'Sales' : vt === 'quản trị' || vt === 'quan tri' ? 'Quản trị' : '' };
  }).filter(function (x) { return x.email && x.vai_tro; });
}

/** Trả vai trò của người đang mở trang, hoặc '' nếu không có tên trong danh sách. */
function vaiTroNguoiXem() {
  var em = chuoi(Session.getActiveUser().getEmail()).toLowerCase();
  if (!em) return { email: '', vai_tro: '' };
  var ds = danhSachQuanTri();
  for (var i = 0; i < ds.length; i++) if (ds[i].email === em) return ds[i];
  return { email: em, vai_tro: '' };
}

/**
 * Quản trị thêm người, đổi vai trò hoặc gỡ người (vaiTro rỗng) ngay trên trang.
 * Máy chia sẻ Sheet theo vai trò: Sales ở quyền Người xem, Quản trị ở quyền Người sửa (cần quyền sửa
 * để ghi vào trang tính Quản trị khi thêm người). Gỡ người thì thu cả hai quyền, trừ chủ Sheet.
 * Trang chạy bằng tài khoản người đang mở, nên Google chỉ cho làm khi người đó có quyền sửa Sheet.
 */
function luuThanhVien(email, vaiTro) {
  var ai = vaiTroNguoiXem();
  if (ai.vai_tro !== 'Quản trị') throw new Error('Chỉ Quản trị mới thêm, đổi hoặc gỡ người được.');
  email = chuoi(email).toLowerCase();
  vaiTro = chuoi(vaiTro);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Email chưa đúng.');
  if (['Quản trị', 'Sales', ''].indexOf(vaiTro) < 0) throw new Error('Vai trò chỉ là Quản trị hoặc Sales.');
  if (email === ai.email && vaiTro !== 'Quản trị') throw new Error('Bạn không tự gỡ hoặc tự hạ vai trò của mình được. Nhờ một Quản trị khác làm.');
  var khoa = LockService.getScriptLock();
  khoa.waitLock(10000);
  try {
    var bang = layBang(), t = bang.getSheetByName(TEN_TRANG_QUAN_TRI);
    if (!t) throw new Error('Chưa có trang tính Quản trị. Chủ dự án chạy khoiTaoQuanTri trước.');
    var n = t.getLastRow(), v = n > 1 ? t.getRange(2, 1, n - 1, 1).getValues() : [], dong = -1;
    for (var i = 0; i < v.length; i++) if (chuoi(v[i][0]).toLowerCase() === email) dong = i + 2;
    var chu = bang.getOwner() ? bang.getOwner().getEmail().toLowerCase() : '';
    if (email !== chu) {   // chia sẻ trước, lỗi thì dừng, chưa ghi dòng nào
      var thu = function (f) { try { f(); } catch (bo) { } };   // gỡ quyền người không có quyền đó thì bỏ qua
      if (vaiTro === 'Quản trị') bang.addEditor(email);
      else { thu(function () { bang.removeEditor(email); }); if (vaiTro === 'Sales') bang.addViewer(email); else thu(function () { bang.removeViewer(email); }); }
    }
    if (!vaiTro) { if (dong > 0) t.deleteRow(dong); }
    else if (dong > 0) t.getRange(dong, 2).setValue(vaiTro);
    else t.appendRow([email, vaiTro]);
  } finally { khoa.releaseLock(); }
  return danhSachQuanTri();
}

/* ---------- đọc dữ liệu ---------- */

/** Đọc từng trang tính theo tên cột, gom mỗi người (email + chín số cuối điện thoại) thành một hồ sơ. */
function docChiTiet(bang) {
  var ds = {};
  for (var n = 0; n <= 8; n++) {
    var t = bang.getSheetByName(tenTrang(n));
    if (!t || t.getLastRow() < 2) continue;
    var v = t.getDataRange().getValues(), td = v[0].map(String);
    var c = function (ten) { return td.indexOf(ten); };
    var cGio = c('Thời gian'), cTen = c('Họ và tên'), cEm = c('Email'), cSo = c('Số điện thoại'), cBuoc = c('Bước nộp');
    for (var i = 1; i < v.length; i++) {
      var em = chuoi(v[i][cEm]).toLowerCase(), so = soCuoi(v[i][cSo]);
      if (!em || !so) continue;
      var k = em + '|' + so;
      var p = ds[k] || (ds[k] = { ten: '', email: em, sdt: '', vai_tro: '', so_nguoi: '', so_nam: '', doanh_thu: '', dang: '', camket: '', ngay: {}, cot1: {} });
      if (chuoi(v[i][cTen])) p.ten = chuoi(v[i][cTen]);
      if (chuoi(v[i][cSo])) p.sdt = chuoi(v[i][cSo]).replace(/^'/, '');
      ['vai_tro:Vai trò', 'so_nguoi:Số người', 'so_nam:Số năm hoạt động', 'doanh_thu:Doanh thu một năm', 'dang:Đồng ý đăng công khai'].forEach(function (kv) {
        var a = kv.split(':'), j = c(a[1]);
        if (j > -1 && chuoi(v[i][j])) p[a[0]] = chuoi(v[i][j]);   // dòng sau ghi đè dòng trước, giữ câu trả lời mới nhất
      });
      var mot = cBuoc > -1 ? parseInt(v[i][cBuoc], 10) : 0;
      if (n === 1) {   // Ngày 1 giữ cả dòng một phần để có số đo bảng bản 1 sớm nhất
        for (var j = 0; j < td.length; j++) if (td[j].indexOf('Bảng bản 1 · ') === 0 && chuoi(v[i][j])) p.cot1[td[j]] = chuoi(v[i][j]);
      }
      if (mot === 1 || mot === 2) continue;   // dòng một phần không tính là đã nộp ngày
      var ngay = v[i][cGio] instanceof Date ? Utilities.formatDate(v[i][cGio], GIO, 'yyyy-MM-dd') : '';
      if (n === 0) { if (ngay && (!p.camket || ngay < p.camket)) p.camket = ngay; continue; }
      if (n < 1 || n > 7) continue;
      if (p.ngay[n] && ngay >= p.ngay[n].nop) continue;   // giữ lần nộp sớm nhất
      var dem = 0, co = 0, video = null;
      for (var j2 = 0; j2 < td.length; j2++) {
        if (COT_KHONG_DEM.indexOf(td[j2]) > -1) continue;
        dem++; if (chuoi(v[i][j2])) co++;
      }
      var cv = c('Đã xem video (%)');
      if (cv > -1) { var m = chuoi(v[i][cv]).match(/^\d+/); if (m) video = parseInt(m[0], 10); }
      p.ngay[n] = { nop: ngay, dien: dem ? co / dem : null, video: video };
    }
  }
  return ds;
}

/** Điểm yếu = bước có số khách qua giảm nhiều nhất so với bước ngay trước, đọc từ ô "Số đo" của bảng bản 1. */
function diemYeu(cot1) {
  var so = {}, ten = {}, roi = {};
  Object.keys(cot1).forEach(function (k) {
    var m = k.match(/^Bảng bản 1 · (\d)\. (.+?) · (Số đo|Khách rơi ở đâu)/);
    if (!m) return;
    var b = +m[1];
    if (m[3] === 'Số đo') { ten[b] = m[2]; var s = cot1[k].match(/\d+/); if (s) so[b] = parseInt(s[0], 10); }
    else roi[b] = cot1[k];
  });
  var tot = null;
  for (var b = 2; b <= 6; b++) {
    if (so[b - 1] === undefined || so[b] === undefined) continue;
    var mat = so[b - 1] - so[b];
    if (mat > 0 && (!tot || mat > tot.mat)) tot = { buoc: b, ten: ten[b] || '', mat: mat, tu: so[b - 1], den: so[b], trich: roi[b] || '' };
  }
  return tot;
}

function capQuyMo(n, y) {
  // n: 0 dưới 5, 1 từ 5 tới 9, 2 từ 10 tới 50, 3 trên 50; y: 0 dưới 3, 1 từ 3 tới 5, 2 trên 5
  if (n < 0 || y < 0) return 0;
  if (n === 3) return 4;
  if (n === 2 && y === 2) return 3;
  if (n >= 1 && y >= 1) return 2;
  return 1;
}
var GOI_Y = { 1: 'Cộng đồng Thành viên', 2: 'Chương trình trả phí (tệp lõi)', 3: 'Diamond Founder Club hoặc cố vấn riêng', 4: 'Cố vấn riêng hoặc hợp đồng doanh nghiệp' };

function bacSoNguoi(s) { s = chuoi(s); return s.indexOf('Dưới 5') === 0 ? 0 : s.indexOf('5 tới 9') === 0 ? 1 : s.indexOf('10 tới 50') === 0 ? 2 : s.indexOf('Trên 50') === 0 ? 3 : -1; }
function bacSoNam(s) { s = chuoi(s); return s.indexOf('Dưới 3') === 0 ? 0 : s.indexOf('3 tới 5') === 0 ? 1 : s.indexOf('Trên 5') === 0 ? 2 : -1; }
function bacDoanhThu(s) { s = chuoi(s); return s.indexOf('Dưới 1 tỷ') === 0 ? 0 : (s.indexOf('1 tới 5') === 0 || s.indexOf('5 tới 20') === 0 || s.indexOf('Trên 20') === 0) ? 1 : -1; }

/** Chấm các tiêu chí máy đếm được. true / false / null (chưa xác định được). AI đọc và sales ghi để null. */
function chamTieuChi(p, ls) {
  var hom = homNay(), nop = {}, dung = 0, den = 0, tre = false, quayLai = null;
  for (var n = 1; n <= 7; n++) if (p.ngay[n]) nop[n] = p.ngay[n].nop;
  var bd = ls.bat_dau;
  if (bd) {
    for (var n2 = 1; n2 <= 7; n2++) {
      var dh = congNgay(bd, n2 - 1);
      if (dh <= hom) { den++; if (nop[n2]) dung++; }
      if (nop[n2] && nop[n2] > dh) { tre = true; }
    }
  }
  var C = {};
  C.C1 = den ? dung >= den : null;
  var vs = [];
  for (var n3 = 1; n3 <= 7; n3++) if (p.ngay[n3] && p.ngay[n3].video !== null) vs.push(p.ngay[n3].video);
  C.C2 = vs.length ? vs.reduce(function (a, b) { return a + b; }, 0) / vs.length >= CAN_XEM_VIDEO : null;
  if (tre) {   // đã từng nộp muộn hơn lịch gốc: có quay lại không = còn nộp được ngày sau đó
    var muon = 0; for (var n4 = 1; n4 <= 7; n4++) if (nop[n4] && bd && nop[n4] > congNgay(bd, n4 - 1)) muon = n4;
    quayLai = muon === 7 || !!nop[muon + 1] ? true : false;
  }
  C.C3 = quayLai;
  var di = [], nd = Object.keys(p.ngay);
  nd.forEach(function (k) { if (p.ngay[k].dien !== null) di.push(p.ngay[k].dien); });
  C.C8 = di.length ? di.reduce(function (a, b) { return a + b; }, 0) / di.length >= NGUONG_DIEN : null;
  var D = {};
  D.D1 = p.vai_tro ? p.vai_tro === 'Chủ doanh nghiệp' : null;
  var n5 = bacSoNguoi(p.so_nguoi), y5 = bacSoNam(p.so_nam), cap = capQuyMo(n5, y5);
  D.D2 = cap ? cap >= 2 : null;
  var dt = bacDoanhThu(p.doanh_thu);
  D.D3 = dt < 0 ? null : dt === 1;
  D.D5 = p.dang === 'Có' ? true : p.dang === 'Không' ? false : null;
  return { C: C, D: D, cap: cap, dat_nop: nop };
}

var CAM_KET = [['C1', 'Nộp đủ và đúng hạn', 'may'], ['C2', 'Xem video', 'may'], ['C3', 'Quay lại sau khi chậm', 'may'],
  ['C4', 'Nói được nỗi đau cụ thể', 'ai'], ['C5', 'Mong muốn có con số và mốc thời gian', 'ai'], ['C6', 'Mức gấp của vấn đề', 'ai'],
  ['C7', 'Hành động thật ở Bước 3', 'ai'], ['C8', 'Độ chi tiết của bài', 'may'], ['C9', 'Bài có tình huống và số liệu thật', 'ai']];
var PHU_HOP = [['D1', 'Là chủ doanh nghiệp', 'may'], ['D2', 'Quy mô từ 5 người và 3 năm', 'may'], ['D3', 'Doanh thu từ 1 tỷ', 'may'],
  ['D4', 'Điểm nghẽn lớn hơn bảy ngày giải được', 'ai'], ['D5', 'Đồng ý đăng công khai', 'may'], ['D6', 'Tín hiệu ngoài trang', 'sales']];

function truc(ds, kq) {
  var dat = 0, xet = 0;
  ds.forEach(function (x) { var v = kq[x[0]]; if (v === true) { dat++; xet++; } else if (v === false) xet++; });
  return { dat: dat, xet: xet, cao: xet >= TOI_THIEU_XET ? dat / xet >= NGUONG_TRUC : null };
}

function xepO(ck, ph) {
  if (ck.cao === null || ph.cao === null) return null;
  return ck.cao ? (ph.cao ? 'cc' : 'ch') : (ph.cao ? 'hc' : 'th');
}

/** Hàm trang gọi khi mở. Sales chỉ nhận khách chưa ai nhận (chưa nối Pancake nên hiện tạm tất cả khách đã xếp ô). */
function layDuLieuQuanTri() {
  var ai = vaiTroNguoiXem();
  if (!ai.vai_tro) return { quyen: false, email: ai.email };
  var bang = layBang(), ds = docChiTiet(bang), hom = homNay();
  var dem = {}, ra = [];
  Object.keys(ds).forEach(function (k) { var s = soCuoi(ds[k].sdt); dem[s] = (dem[s] || 0) + 1; });
  Object.keys(ds).forEach(function (k) {
    var p = ds[k], dn = {};
    Object.keys(p.ngay).forEach(function (n) { dn[n] = p.ngay[n].nop; });
    var ls = lichTuNop(p.camket ? Object.assign({ 0: p.camket }, dn) : dn);
    var kq = chamTieuChi(p, ls);
    var ck = truc(CAM_KET, kq.C), ph = truc(PHU_HOP, kq.D), o = xepO(ck, ph);
    var yeu = diemYeu(p.cot1);
    var videoTb = null, vs = [];
    Object.keys(p.ngay).forEach(function (n) { if (p.ngay[n].video !== null) vs.push(p.ngay[n].video); });
    if (vs.length) videoTb = Math.round(vs.reduce(function (a, b) { return a + b; }, 0) / vs.length);
    ra.push({
      id: k, ten: p.ten, email: p.email, sdt: p.sdt, vai_tro: p.vai_tro, so_nguoi: p.so_nguoi, so_nam: p.so_nam, doanh_thu: p.doanh_thu,
      cap: kq.cap, goi_y: kq.cap ? GOI_Y[kq.cap] : '', dang: p.dang,
      bat_dau: ls.bat_dau, han: ls.han,
      ngay: [1, 2, 3, 4, 5, 6, 7].map(function (n) { return { n: n, nop: p.ngay[n] ? p.ngay[n].nop : '', lich: ls.lich[n] || '', video: p.ngay[n] ? p.ngay[n].video : null }; }),
      da_nop: Object.keys(p.ngay).length, video_tb: videoTb,
      c: kq.C, d: kq.D, ck: ck, ph: ph, o: o, yeu: yeu,
      trung: dem[soCuoi(p.sdt)] > 1,
      pancake: null   // chưa nối: đã gọi, ngày hẹn, kết quả, đã mua, D6, người phụ trách
    });
  });
  return {
    quyen: true, email: ai.email, vai_tro: ai.vai_tro, hom_nay: hom,
    nguoi: ra,
    tieu_chi: { c: CAM_KET, d: PHU_HOP },
    cai_dat: { can_xem_video: CAN_XEM_VIDEO, nguong_dien: NGUONG_DIEN, nguong_truc: NGUONG_TRUC, toi_thieu_xet: TOI_THIEU_XET },
    danh_sach: ai.vai_tro === 'Quản trị' ? danhSachQuanTri() : []
  };
}
