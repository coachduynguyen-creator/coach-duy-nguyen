/**
 * NƠI NHẬN BÀI NỘP THỬ THÁCH 7 NGÀY, TRANG coachduynguyen.vn/thu-thach-7-ngay/
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
 *    Drive, Sheets, Docs. Hàm tạo bảng tính "NGF - Bài nộp thử thách 7 ngày"
 *    với bảy trang tính, một thư mục Drive cho bản Quy trình, rồi ghi hai địa
 *    chỉ vào Nhật ký thực thi.
 * 5. Triển khai > Triển khai mới > Loại: Ứng dụng web.
 *    Thực thi với tư cách: Tôi. Người có quyền truy cập: Bất kỳ ai.
 * 6. Chép địa chỉ kết thúc bằng /exec gửi cho thợ, thợ dán vào NOI_NHAN của
 *    thu-thach-7-ngay/index.html.
 *
 * CỘT TỰ MỌC
 * Trang gửi lên danh sách [tên câu hỏi, chữ đã điền]. Câu hỏi nào chưa có cột
 * thì mã tự thêm cột ở cuối. Nhờ vậy thêm Ngày 2 tới 7 hay sửa câu hỏi trên
 * trang không phải sửa hay triển khai lại tệp này. Đổi tên một câu hỏi thì
 * cột cũ vẫn nằm đó, cột mới mọc thêm.
 *
 * SỬA MÃ SAU NÀY
 * Sửa xong thì dán lại, lưu, RỒI Triển khai > Quản lý triển khai > sửa > Phiên
 * bản mới. Chỉ lưu thôi thì /exec vẫn chạy mã cũ.
 *
 * Trang gửi bằng Content-Type: text/plain, không phải application/json, cùng lý
 * do ghi ở đầu nhan-dang-ky.gs: Apps Script không trả header cho gọi chéo miền
 * với yêu cầu phức tạp. Dữ liệu bên trong vẫn là JSON.
 */

var TEN_BANG = 'NGF - Bài nộp thử thách 7 ngày';
var TEN_THU_MUC = 'NGF - Quy trình của thành viên thử thách 7 ngày';
var NGUOI_DUOC_GIAO = [];   // ví dụ ['ten@gmail.com'], chạy lại khoiTao sau khi sửa
var COT_GOC = ['Thời gian', 'Họ và tên', 'Email', 'Đồng ý dùng bài', 'Google Doc'];
var DAI_TOI_DA = 20000;     // ô Google Sheet nhận tối đa 50.000 ký tự

function khoiTao() {
  var kho = PropertiesService.getScriptProperties();
  var maBang = kho.getProperty('ma_bang');
  var bang = maBang ? SpreadsheetApp.openById(maBang) : SpreadsheetApp.create(TEN_BANG);
  kho.setProperty('ma_bang', bang.getId());

  for (var n = 1; n <= 7; n++) {
    var t = bang.getSheetByName('Ngày ' + n) || bang.insertSheet('Ngày ' + n);
    if (t.getLastRow() === 0) {
      t.appendRow(COT_GOC);
      t.getRange(1, 1, 1, COT_GOC.length).setFontWeight('bold');
      t.setFrozenRows(1);
    }
  }
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
  for (var n = 1; n <= 7; n++) {
    var t = bang.getSheetByName('Ngày ' + n);
    if (!t || t.getLastRow() < 2) continue;
    var o = t.getRange(2, 2, t.getLastRow() - 1, 1).getValues();
    for (var i = o.length - 1; i >= 0; i--) {
      if (String(o[i][0]).toUpperCase().indexOf('KIỂM THỬ') > -1) { t.deleteRow(i + 2); da++; }
    }
  }
  Logger.log('Đã xoá ' + da + ' dòng kiểm thử.');
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

  var ngay = parseInt(d.ngay, 10);
  if (!(ngay >= 1 && ngay <= 7)) return tra({ ok: false, loi: 'Không rõ bài của ngày nào.' });
  if (!chuoi(d.ten)) return tra({ ok: false, loi: 'Còn thiếu họ tên.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email))) return tra({ ok: false, loi: 'Email chưa đúng dạng.' });
  if (d.dongy !== true) return tra({ ok: false, loi: 'Bạn cần tích ô đồng ý trước khi nộp.' });
  if (!Array.isArray(d.cot) || !d.cot.length || d.cot.length > 300) return tra({ ok: false, loi: 'Bài nộp chưa có chữ nào.' });

  var khoa = LockService.getScriptLock();
  try {
    khoa.waitLock(20000);
    var t = layBang().getSheetByName('Ngày ' + ngay);
    if (!t) throw new Error('Không thấy trang tính Ngày ' + ngay + ', chạy lại khoiTao.');

    var docUrl = '';
    if (ngay === 7 && chuoi(d.ban_quy_trinh)) docUrl = taoDoc(chuoi(d.ten), String(d.ban_quy_trinh));

    var giaTri = {};
    giaTri['Họ và tên'] = chuoi(d.ten);
    giaTri['Email'] = chuoi(d.email);
    giaTri['Đồng ý dùng bài'] = 'Có';
    giaTri['Google Doc'] = docUrl;
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

    return tra({ ok: true, doc: docUrl });
  } catch (loi) {
    ghiLoi(loi, d);
    return tra({ ok: false, loi: 'Nơi nhận bài đang gặp sự cố. Bạn thử lại sau ít phút, chữ vẫn còn trên trang.' });
  } finally {
    try { khoa.releaseLock(); } catch (bo) { }
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
