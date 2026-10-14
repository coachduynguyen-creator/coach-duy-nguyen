/**
 * NƠI NHẬN BÀI NỘP THỬ THÁCH 7 NGÀY NÂNG CẤP QUY TRÌNH TƯ VẤN BÁN HÀNG,
 * TRANG coachduynguyen.vn/thu-thach/tu-van-ban-hang/
 * Dựng ngày 14/10/2026. Chạy bằng Google Apps Script, triển khai dạng Web app.
 *
 * VÌ SAO TÁCH RIÊNG
 * Nơi nhận đăng ký (nhan-dang-ky.gs) đang chạy thật. Để bài nộp ở một dự án
 * Apps Script riêng thì sửa bên này không phải triển khai lại bên kia.
 *
 * CÁCH DÙNG, LÀM MỘT LẦN, KHOẢNG NĂM PHÚT
 * 1. Mở script.google.com bằng tài khoản nextstepacademyvietnam@gmail.com.
 * 2. Bấm Dự án mới, xoá chữ có sẵn, dán toàn bộ tệp này vào, bấm Lưu.
 * 3. Ghi email người được giao xem bài vào NGUOI_DUOC_GIAO bên dưới (để trống
 *    cũng được, chỉ tài khoản chủ xem được).
 * 4. Chọn hàm `khoiTao` trên thanh công cụ, bấm Chạy, cho phép quyền truy cập
 *    Drive, Sheets, Docs. Hàm tạo bảng tính "NGF - Bài nộp thử thách 7 ngày Tư vấn bán hàng"
 *    với trang tính Cam kết, bảy trang tính Ngày 1 tới 7 và trang tính Tổng kết, một thư mục Drive cho bản Quy trình, rồi ghi hai địa
 *    chỉ vào Nhật ký thực thi.
 * 5. Triển khai > Triển khai mới > Loại: Ứng dụng web.
 *    Thực thi với tư cách: Tôi. Người có quyền truy cập: Bất kỳ ai.
 * 6. Chép địa chỉ kết thúc bằng /exec gửi cho thợ, thợ dán vào NOI_NHAN của
 *    thu-thach/tu-van-ban-hang/index.html.
 *
 * CẬP NHẬT 14/10/2026 CHO BẢN ĐANG CHẠY (đã có địa chỉ /exec, không đổi địa chỉ)
 * 1. Mở dự án Apps Script cũ, xoá hết chữ, dán toàn bộ tệp này, bấm Lưu.
 * 2. Chọn hàm `khoiTao`, bấm Chạy một lần. Hàm thêm trang tính Tổng kết, các
 *    trang tính cũ giữ nguyên. Google hỏi lại quyền thì bấm cho phép.
 * 3. Triển khai > Quản lý triển khai > bấm cây bút > Phiên bản: Phiên bản mới >
 *    Triển khai. Địa chỉ /exec giữ nguyên, trang không phải sửa gì.
 * Bản này thêm ba việc:
 * - Hỏi tiến độ (hoi = 'tien_do'): khớp cả email lẫn số điện thoại, trả về ngày
 *   nào đã nộp, ngày nào đã mở. Lịch tính từ ngày nộp cam kết, không sớm hơn
 *   NGAY_KHAI_MAC. Trang chỉ nhắc, không chặn nộp.
 * - Nộp sau hạn: hạn cuối là ngày bắt đầu + 9. Nộp sau hạn vẫn nhận, cột
 *   "Nộp sau hạn" ghi Có.
 * - Đồng ý thỏa thuận (hoi = 'dong_y'): lưu bản PDF khổ A4 gồm họ tên, email, số
 *   điện thoại, giờ bấm và nguyên văn thỏa thuận vào thư mục
 *   TEN_THU_MUC_DONG_Y, kèm một dòng ở trang tính Thỏa thuận.
 *
 * CỘT TỰ MỌC
 * Trang gửi lên danh sách [tên câu hỏi, chữ đã điền]. Câu hỏi nào chưa có cột
 * thì mã tự thêm cột ở cuối. Nhờ vậy thêm Ngày 2 tới 7 hay sửa câu hỏi trên
 * trang không phải sửa hay triển khai lại tệp này. Đổi tên một câu hỏi thì
 * cột cũ vẫn nằm đó, cột mới mọc thêm.
 *
 * TRANG TÍNH CAM KẾT
 * Trang gửi ngay = 0 cho video cam kết. Trang tính nào chưa có thì doPost tự tạo,
 * nên thêm trang tính mới không phải chạy lại khoiTao.
 *
 * SỬA MÃ SAU NÀY
 * Sửa xong thì dán lại, lưu, RỒI Triển khai > Quản lý triển khai > sửa > Phiên
 * bản mới. Chỉ lưu thôi thì /exec vẫn chạy mã cũ.
 *
 * Trang gửi bằng Content-Type: text/plain, không phải application/json, cùng lý
 * do ghi ở đầu nhan-dang-ky.gs: Apps Script không trả header cho gọi chéo miền
 * với yêu cầu phức tạp. Dữ liệu bên trong vẫn là JSON.
 */

var TEN_BANG = 'NGF - Bài nộp thử thách 7 ngày Tư vấn bán hàng';   // chỉ dùng lúc tạo, đổi tên tay trong Drive không hỏng gì
var TEN_THU_MUC = 'NGF - Quy trình của thành viên thử thách 7 ngày Tư vấn bán hàng';
var NGUOI_DUOC_GIAO = [];   // ví dụ ['ten@gmail.com'], chạy lại khoiTao sau khi sửa
var COT_GOC = ['Thời gian', 'Họ và tên', 'Email', 'Số điện thoại', 'Đồng ý dùng bài', 'Google Doc'];
var DAI_TOI_DA = 20000;     // ô Google Sheet nhận tối đa 50.000 ký tự
var NGAY_KHAI_MAC = '2026-10-17';   // đợt đầu làm Ngày 1 hôm này, ai nộp cam kết sớm hơn cũng tính từ đây
var SO_NGAY_HAN = 9;        // hạn cuối = ngày bắt đầu + 9, tức ba ngày sau Ngày 7
var TEN_THU_MUC_DONG_Y = 'NGF - Bản đồng ý thỏa thuận thử thách 7 ngày';
var GIO = 'Asia/Ho_Chi_Minh';

function khoiTao() {
  var kho = PropertiesService.getScriptProperties();
  var maBang = kho.getProperty('ma_bang');
  var bang = maBang ? SpreadsheetApp.openById(maBang) : SpreadsheetApp.create(TEN_BANG);
  kho.setProperty('ma_bang', bang.getId());

  for (var n = 0; n <= 8; n++) layTrang(bang, n);
  var loi = bang.getSheetByName('Lỗi') || bang.insertSheet('Lỗi');
  if (loi.getLastRow() === 0) loi.appendRow(['Thời gian', 'Lỗi', 'Dữ liệu nhận được']);
  var macDinh = bang.getSheetByName('Sheet1') || bang.getSheetByName('Trang tính1');
  if (macDinh && macDinh.getLastRow() === 0) bang.deleteSheet(macDinh);

  var maThuMuc = kho.getProperty('ma_thu_muc');
  var thuMuc = maThuMuc ? DriveApp.getFolderById(maThuMuc) : DriveApp.createFolder(TEN_THU_MUC);
  kho.setProperty('ma_thu_muc', thuMuc.getId());

  NGUOI_DUOC_GIAO.forEach(function (e) { bang.addEditor(e); thuMuc.addEditor(e); });

  Logger.log('Bảng bài nộp: ' + bang.getUrl());
  Logger.log('Thư mục bản Quy trình: ' + thuMuc.getUrl());
}

/** Dọn bài thử, chạy tay. Xoá mọi dòng có chữ KIỂM THỬ trong cột Họ và tên. */
function xoaDongKiemThu() {
  var bang = layBang(), da = 0;
  for (var n = 0; n <= 8; n++) {
    var t = bang.getSheetByName(tenTrang(n));
    if (!t || t.getLastRow() < 2) continue;
    var o = t.getRange(2, 2, t.getLastRow() - 1, 1).getValues();
    for (var i = o.length - 1; i >= 0; i--) {
      if (String(o[i][0]).toUpperCase().indexOf('KIỂM THỬ') > -1) { t.deleteRow(i + 2); da++; }
    }
  }
  Logger.log('Đã xoá ' + da + ' dòng kiểm thử.');
}

function tenTrang(n) { return n === 0 ? 'Cam kết' : n === 8 ? 'Tổng kết' : 'Ngày ' + n; }

/** Lấy trang tính của một ngày, chưa có thì tạo kèm dòng tiêu đề. */
function layTrang(bang, n) {
  var t = bang.getSheetByName(tenTrang(n));
  if (!t) t = bang.insertSheet(tenTrang(n), Math.min(n, bang.getNumSheets()));
  if (t.getLastRow() === 0) {
    t.appendRow(COT_GOC);
    t.getRange(1, 1, 1, COT_GOC.length).setFontWeight('bold');
    t.setFrozenRows(1);
  }
  return t;
}

function layBang() {
  var ma = PropertiesService.getScriptProperties().getProperty('ma_bang');
  if (!ma) throw new Error('Chưa chạy khoiTao.');
  return SpreadsheetApp.openById(ma);
}

function doGet() {
  return tra({ ok: true, thong_diep: 'Nơi nhận bài thử thách 7 ngày đang chạy.' });
}

function doPost(e) {
  var d = {};
  try { d = JSON.parse(e.postData.contents); }
  catch (bo) { return tra({ ok: false, loi: 'Dữ liệu gửi lên không đọc được.' }); }

  if (d.bay) return tra({ ok: true });   // ô bẫy máy rác, người thật để trống
  if (d.hoi === 'tien_do') return hoiTienDo(d);
  if (d.hoi === 'dong_y') return dongY(d);

  var ngay = parseInt(d.ngay, 10);
  if (!(ngay >= 0 && ngay <= 8)) return tra({ ok: false, loi: 'Không rõ bài của ngày nào.' });
  if (!chuoi(d.ten)) return tra({ ok: false, loi: 'Còn thiếu họ tên.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email))) return tra({ ok: false, loi: 'Email chưa đúng dạng.' });
  var sdt = chuoi(d.dien_thoai).replace(/[\s.\-()]/g, '');
  if (!/^\+?\d{9,12}$/.test(sdt)) return tra({ ok: false, loi: 'Số điện thoại chưa đúng.' });
  if (d.dongy !== true) return tra({ ok: false, loi: 'Bạn cần tích ô đồng ý trước khi nộp.' });
  if (!Array.isArray(d.cot) || !d.cot.length || d.cot.length > 300) return tra({ ok: false, loi: 'Bài nộp chưa có chữ nào.' });

  var khoa = LockService.getScriptLock();
  try {
    khoa.waitLock(20000);
    var t = layTrang(layBang(), ngay);

    var docUrl = '';
    if (ngay === 7 && chuoi(d.ban_quy_trinh)) docUrl = taoDoc(chuoi(d.ten), String(d.ban_quy_trinh));

    var giaTri = {};
    giaTri['Họ và tên'] = chuoi(d.ten);
    giaTri['Email'] = chuoi(d.email);
    giaTri['Số điện thoại'] = "'" + sdt;   // dấu ' giữ số 0 ở đầu
    giaTri['Đồng ý dùng bài'] = 'Có';
    giaTri['Google Doc'] = docUrl;
    var tre = false;
    if (ngay >= 1) {
      var td0 = tinhTienDo(chuoi(d.email), sdt);
      tre = !!td0.han && homNay() > td0.han;
      if (tre) giaTri['Nộp sau hạn'] = 'Có';
    }
    d.cot.forEach(function (c) {
      if (Array.isArray(c) && chuoi(c[0])) giaTri[chuoi(c[0]).slice(0, 200)] = chuoi(c[1]);
    });

    var tieuDe = t.getRange(1, 1, 1, t.getLastColumn()).getValues()[0].map(String);
    Object.keys(giaTri).forEach(function (k) {
      if (tieuDe.indexOf(k) < 0) {
        tieuDe.push(k);
        t.getRange(1, tieuDe.length).setValue(k).setFontWeight('bold');
      }
    });
    var dong = tieuDe.map(function (k) { return k === 'Thời gian' ? new Date() : antoan(giaTri[k]); });
    t.appendRow(dong);   // nộp lại thì thêm dòng mới, không đè dòng cũ
    SpreadsheetApp.flush();

    return tra({ ok: true, doc: docUrl, tre: tre, tien_do: tinhTienDo(chuoi(d.email), sdt) });
  } catch (loi) {
    ghiLoi(loi, d);
    return tra({ ok: false, loi: 'Nơi nhận bài đang gặp sự cố. Bạn thử lại sau ít phút, chữ vẫn còn trên trang.' });
  } finally {
    try { khoa.releaseLock(); } catch (bo) { }
  }
}

/* ---------- tiến độ: ngày nào đã nộp, ngày nào đã mở ---------- */

function homNay() { return Utilities.formatDate(new Date(), GIO, 'yyyy-MM-dd'); }
function congNgay(s, k) {
  var p = s.split('-'), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2] + k));
  return Utilities.formatDate(d, 'UTC', 'yyyy-MM-dd');
}
/** Chín số cuối: Google Sheet hay bỏ số 0 đầu, người nhập lúc có +84 lúc không. */
function soCuoi(v) { return String(v).replace(/\D/g, '').slice(-9); }

function hoiTienDo(d) {
  var sdt = chuoi(d.dien_thoai).replace(/[\s.\-()]/g, '');
  if (!chuoi(d.email) || !/^\+?\d{9,12}$/.test(sdt)) return tra({ ok: false, loi: 'Thiếu email hoặc số điện thoại.' });
  try { return tra({ ok: true, tien_do: tinhTienDo(chuoi(d.email), sdt) }); }
  catch (loi) { ghiLoi(loi, d); return tra({ ok: false, loi: 'Chưa xem được tiến độ.' }); }
}

/**
 * Khớp cả email lẫn số điện thoại, chỉ đọc bảng, không ghi gì.
 * Ngày bắt đầu = ngày nộp cam kết, nhưng không sớm hơn NGAY_KHAI_MAC.
 * Ngày N (1 tới 7) mở khi đã nộp Ngày N-1 và đã tới 0h ngày bắt đầu + N-1.
 * Người chậm lịch nộp bù thì ngày sau mở ngay, vì ngày mở theo lịch đã qua.
 * Tổng kết mở khi đã nộp Ngày 7.
 */
function tinhTienDo(email, sdt) {
  var bang = layBang(), em = email.toLowerCase(), so = soCuoi(sdt), daNop = {};
  for (var n = 0; n <= 8; n++) {
    var t = bang.getSheetByName(tenTrang(n));
    if (!t || t.getLastRow() < 2) continue;
    var v = t.getDataRange().getValues(), td = v[0].map(String);
    var cGio = td.indexOf('Thời gian'), cEm = td.indexOf('Email'), cSo = td.indexOf('Số điện thoại');
    for (var i = 1; i < v.length; i++) {
      if (String(v[i][cEm]).trim().toLowerCase() !== em || soCuoi(v[i][cSo]) !== so) continue;
      var ngay = v[i][cGio] instanceof Date ? Utilities.formatDate(v[i][cGio], GIO, 'yyyy-MM-dd') : '';
      if (ngay && (!daNop[n] || ngay < daNop[n])) daNop[n] = ngay;
    }
  }
  var hom = homNay(), kq = { hom_nay: hom, da_nop: daNop, mo: [0], lich: {}, bat_dau: null, han: null };
  if (!daNop[0]) return kq;
  var bd = daNop[0] > NGAY_KHAI_MAC ? daNop[0] : NGAY_KHAI_MAC;
  kq.bat_dau = bd;
  kq.han = congNgay(bd, SO_NGAY_HAN);
  for (n = 1; n <= 7; n++) {
    kq.lich[n] = congNgay(bd, n - 1);
    if (daNop[n - 1] && hom >= kq.lich[n]) kq.mo.push(n);
  }
  if (daNop[7]) kq.mo.push(8);
  return kq;
}

/* ---------- thỏa thuận: lưu bản PDF người đã bấm Tôi đồng ý ---------- */

function dongY(d) {
  var sdt = chuoi(d.dien_thoai).replace(/[\s.\-()]/g, '');
  if (!chuoi(d.ten)) return tra({ ok: false, loi: 'Còn thiếu họ tên.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email))) return tra({ ok: false, loi: 'Email chưa đúng dạng.' });
  if (!/^\+?\d{9,12}$/.test(sdt)) return tra({ ok: false, loi: 'Số điện thoại chưa đúng.' });
  if (chuoi(d.ban).length < 200) return tra({ ok: false, loi: 'Thiếu nội dung thỏa thuận.' });
  try {
    var kho = PropertiesService.getScriptProperties(), ma = kho.getProperty('ma_thu_muc_dong_y');
    var thuMuc = ma ? DriveApp.getFolderById(ma) : DriveApp.createFolder(TEN_THU_MUC_DONG_Y);
    kho.setProperty('ma_thu_muc_dong_y', thuMuc.getId());

    var luc = new Date(), gio = Utilities.formatDate(luc, GIO, 'HH:mm:ss dd-MM-yyyy');
    var ten = chuoi(d.ten).slice(0, 120);
    var doc = DocumentApp.create('Đồng ý thỏa thuận - ' + ten + ' - ' + gio);
    var than = doc.getBody();
    than.setPageWidth(595.28).setPageHeight(841.89);   // khổ A4, đơn vị điểm
    than.appendParagraph('Người đồng ý: ' + ten);
    than.appendParagraph('Email: ' + chuoi(d.email));
    than.appendParagraph('Số điện thoại: ' + sdt);
    than.appendParagraph('Thời điểm bấm Tôi đồng ý: ' + gio + ' (giờ Việt Nam)');
    than.appendHorizontalRule();
    chuoi(d.ban).slice(0, 100000).split('\n').forEach(function (dong) {
      if (dong.indexOf('## ') === 0) than.appendParagraph(dong.slice(3)).setHeading(DocumentApp.ParagraphHeading.HEADING2);
      else if (dong.indexOf('# ') === 0) than.appendParagraph(dong.slice(2)).setHeading(DocumentApp.ParagraphHeading.HEADING1);
      else than.appendParagraph(dong);
    });
    doc.saveAndClose();
    var tep = DriveApp.getFileById(doc.getId());
    var pdf = thuMuc.createFile(tep.getAs('application/pdf').setName(doc.getName() + '.pdf'));
    tep.setTrashed(true);

    var t = layBang().getSheetByName('Thỏa thuận') || layBang().insertSheet('Thỏa thuận');
    if (t.getLastRow() === 0) t.appendRow(['Thời gian', 'Họ và tên', 'Email', 'Số điện thoại', 'Bản PDF']);
    t.appendRow([luc, antoan(ten), antoan(d.email), "'" + sdt, pdf.getUrl()]);
    return tra({ ok: true });
  } catch (loi) {
    ghiLoi(loi, { hoi: 'dong_y', ten: d.ten, email: d.email });
    return tra({ ok: false, loi: 'Chưa lưu được bản đồng ý. Bạn thử lại sau ít phút.' });
  }
}

/** Bản Quy trình Ngày 7: dòng bắt đầu bằng "# " hoặc "## " thành tiêu đề. */
function taoDoc(ten, chu) {
  var ma = PropertiesService.getScriptProperties().getProperty('ma_thu_muc');
  var gio = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd-MM-yyyy HH:mm');
  var doc = DocumentApp.create('Quy trình của ' + ten + ' (' + gio + ')');
  var than = doc.getBody();
  chu.slice(0, 200000).split('\n').forEach(function (dong) {
    if (dong.indexOf('## ') === 0) than.appendParagraph(dong.slice(3)).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    else if (dong.indexOf('# ') === 0) than.appendParagraph(dong.slice(2)).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    else than.appendParagraph(dong);
  });
  doc.saveAndClose();
  var tep = DriveApp.getFileById(doc.getId());
  if (ma) tep.moveTo(DriveApp.getFolderById(ma));
  return doc.getUrl();
}

function chuoi(v) { return v === undefined || v === null ? '' : String(v).trim(); }

/** Chữ mở đầu bằng = + - @ bị Google Sheet hiểu là công thức, thêm dấu ' để giữ là chữ. */
function antoan(v) {
  var s = chuoi(v).slice(0, DAI_TOI_DA);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function tra(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function ghiLoi(loi, d) {
  try {
    layBang().getSheetByName('Lỗi').appendRow([new Date(), String(loi), JSON.stringify(d).slice(0, 40000)]);
  } catch (bo) { }
}
