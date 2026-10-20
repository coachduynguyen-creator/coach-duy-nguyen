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
 * CẬP NHẬT 17/10/2026: LẤY LẠI BÀI KHI ĐỔI MÁY HOẶC TRÌNH DUYỆT
 * Dán toàn bộ tệp này, bấm Lưu, rồi Triển khai > Quản lý triển khai > cây bút >
 * Phiên bản mới > Triển khai. Không cần chạy khoiTao. Thêm hoi = 'lay_bai': người
 * học nhập email và số điện thoại, trang lấy lại bài đã nộp và thông tin người làm.
 * Chưa dán thì nút Lấy lại bài báo chưa dùng được, phần còn lại chạy như cũ.
 *
 * CẬP NHẬT 20/10/2026: GỬI ẢNH VÀ PDF Ở BƯỚC 3
 * Dán toàn bộ tệp này, bấm Lưu, rồi Triển khai > Quản lý triển khai > cây bút > Phiên bản mới > Triển khai.
 * Tiến độ trả ver 3, trang thấy ver 3 mới hiện ô gửi tệp. Tệp lưu ở thư mục con
 * "Ảnh và PDF nộp ở Bước 3" trong thư mục bản Quy trình. Dán cả quan-tri.gs.
 *
 * CẬP NHẬT 16/10/2026: NỘP TỪNG BƯỚC VÀ BA CÂU HỎI LÚC ĐĂNG KÝ (dán trước 17/10)
 * Làm đúng ba việc: mở dự án Apps Script cũ, xoá hết chữ, dán toàn bộ tệp này,
 * bấm Lưu; rồi Triển khai > Quản lý triển khai > bấm cây bút > Phiên bản: Phiên
 * bản mới > Triển khai. Địa chỉ /exec giữ nguyên, không cần chạy khoiTao lại.
 * Chưa dán thì trang vẫn chạy: nút Nộp Bước 1 và Lưu và nộp Bước 2 chỉ mở bước ở
 * máy người học, bài vẫn gửi ở bước Nộp bài cuối ngày. Dán rồi thì hai nút gửi lên đây.
 * - Mỗi bài có thêm cột Vai trò, Số người, Số năm hoạt động, Doanh thu một năm, Bản đồng ý.
 * - Cột "Bước nộp": 1 hoặc 2 là dòng nộp một phần (không tính là đã nộp ngày, không
 *   mở ngày sau), để trống là nộp bài cuối ngày. Tiến độ trả thêm ver 2 và buoc.
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
 *   NGAY_KHAI_MAC. Trang khóa hẳn ngày chưa mở; nộp xong thì chờ 0h hôm sau.
 * - Nộp sau hạn: hạn cuối là ngày bắt đầu + 9. Nộp sau hạn vẫn nhận, cột
 *   "Nộp sau hạn" ghi Có.
 * - Đồng ý thỏa thuận (hoi = 'dong_y'): lưu bản PDF khổ A4 gồm họ tên, email, số
 *   điện thoại, giờ bấm và nguyên văn thỏa thuận vào thư mục
 *   TEN_THU_MUC_DONG_Y, kèm một dòng ở trang tính Thỏa thuận.
 *
 * CẬP NHẬT LẦN HAI 14/10/2026: TRANG TÍNH TIẾN ĐỘ
 * Làm y ba bước ở trên (dán, chạy khoiTao, triển khai phiên bản mới). Lần này
 * Google hỏi thêm quyền "chạy khi bạn vắng mặt", bấm cho phép. khoiTao tạo
 * trang tính Tiến độ đứng đầu bảng và cài giờ dựng lại trang đó mỗi tiếng:
 * mỗi người một dòng, ngày nộp từng bài, đang ở ngày nào, chậm lịch mấy ngày,
 * và hai dòng đếm số người nộp, tỷ lệ so với số người cam kết. Muốn xem số mới
 * ngay thì chọn hàm dungTienDo, bấm Chạy. Đừng gõ tay vào trang Tiến độ, mỗi
 * tiếng trang đó bị xoá trắng và ghi lại. Sửa riêng phần Tiến độ thì chỉ cần dán
 * và Lưu, giờ chạy mỗi tiếng tự dùng mã mới, không phải triển khai lại.
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
  caiGioTienDo();
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

function doGet(e) {
  if (e && e.parameter && e.parameter.trang === 'quan-tri') {
    return HtmlService.createHtmlOutputFromFile('quan-tri').setTitle('Quản trị thử thách 7 ngày')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
  return tra({ ok: true, thong_diep: 'Nơi nhận bài thử thách 7 ngày đang chạy.' });
}

function doPost(e) {
  var d = {};
  try { d = JSON.parse(e.postData.contents); }
  catch (bo) { return tra({ ok: false, loi: 'Dữ liệu gửi lên không đọc được.' }); }

  if (d.bay) return tra({ ok: true });   // ô bẫy máy rác, người thật để trống
  if (d.hoi === 'tien_do') return hoiTienDo(d);
  if (d.hoi === 'lay_bai') return layBai(d);
  if (d.hoi === 'dong_y') return dongY(d);
  if (d.hoi === 'tep') return nhanTep(d);

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
    giaTri['Đồng ý đăng công khai'] = d.dang === true ? 'Có' : 'Không';   // ô không bắt buộc, chỉ đăng bài của người ghi Có
    giaTri['Google Doc'] = docUrl;
    giaTri['Vai trò'] = chuoi(d.vai_tro);
    giaTri['Số người'] = chuoi(d.so_nguoi);
    giaTri['Số năm hoạt động'] = chuoi(d.so_nam);
    giaTri['Doanh thu một năm'] = chuoi(d.doanh_thu);
    giaTri['Bản đồng ý'] = chuoi(d.dk);
    // Nộp Bước 1 hoặc Lưu và nộp Bước 2: dòng một phần, để trống ở nộp bài cuối ngày. docBaiNop không tính dòng một phần là đã nộp ngày.
    var buoc = parseInt(d.buoc, 10);
    if (buoc !== 1 && buoc !== 2) buoc = 0;
    if (buoc) giaTri['Bước nộp'] = String(buoc);
    var tre = false;
    if (ngay >= 1) {
      var td0 = tinhTienDo(chuoi(d.email), sdt);
      tre = !buoc && !!td0.han && homNay() > td0.han;
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
 * Lấy lại bài (hoi = 'lay_bai'): người học mở trang ở máy hoặc trình duyệt khác,
 * nhập email và số điện thoại đã dùng. Khớp cả hai, trả về thông tin người làm và
 * dòng nộp mới nhất của từng ngày (cả dòng Bước 1, Bước 2). Chỉ đọc bảng, không ghi.
 * Chữ gõ mà chưa bấm nộp thì máy chủ không có, không lấy lại được.
 */
var COT_NGUOI = { 'Họ và tên': 'ten', 'Vai trò': 'vt', 'Số người': 'so', 'Số năm hoạt động': 'nam', 'Doanh thu một năm': 'dt', 'Đồng ý đăng công khai': 'dang', 'Bản đồng ý': 'dk' };
var COT_BO = ['Thời gian', 'Họ và tên', 'Email', 'Số điện thoại', 'Đồng ý dùng bài', 'Google Doc', 'Bước nộp', 'Nộp sau hạn', 'Đã xem video (%)'];
function layBai(d) {
  var sdt = chuoi(d.dien_thoai).replace(/[\s.\-()]/g, '');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email)) || !/^\+?\d{9,12}$/.test(sdt)) return tra({ ok: false, loi: 'Thiếu email hoặc số điện thoại.' });
  var em = chuoi(d.email).toLowerCase(), so = soCuoi(sdt);
  try {
    var bang = layBang(), bai = {}, nguoi = null, gioNguoi = 0;
    for (var n = 0; n <= 8; n++) {
      var t = bang.getSheetByName(tenTrang(n));
      if (!t || t.getLastRow() < 2) continue;
      var v = t.getDataRange().getValues(), td = v[0].map(String);
      var cEm = td.indexOf('Email'), cSo = td.indexOf('Số điện thoại'), cGio = td.indexOf('Thời gian');
      for (var i = v.length - 1; i >= 1; i--) {   // dòng dưới cùng là lần nộp mới nhất
        if (String(v[i][cEm]).trim().toLowerCase() !== em || soCuoi(v[i][cSo]) !== so) continue;
        var dong = {}, gio = v[i][cGio] instanceof Date ? v[i][cGio].getTime() : 0;
        td.forEach(function (k, c) {
          var x = v[i][c];
          if (x === '' || x === null) return;
          x = x instanceof Date ? Utilities.formatDate(x, GIO, 'dd/MM/yyyy') : String(x);
          if (COT_BO.indexOf(k) < 0 && !COT_NGUOI[k]) dong[k] = x;
        });
        bai[n] = dong;
        if (gio >= gioNguoi) {
          gioNguoi = gio; nguoi = {};
          Object.keys(COT_NGUOI).forEach(function (k) { var c = td.indexOf(k); if (c > -1) nguoi[COT_NGUOI[k]] = chuoi(v[i][c]); });
        }
        break;
      }
    }
    if (!nguoi) return tra({ ok: false, loi: 'Chưa thấy bài nào nộp bằng email và số điện thoại này.' });
    return tra({ ok: true, nguoi: nguoi, bai: bai, tien_do: tinhTienDo(em, sdt) });
  } catch (loi) { ghiLoi(loi, { hoi: 'lay_bai', email: d.email }); return tra({ ok: false, loi: 'Chưa lấy được bài, bạn thử lại sau ít phút.' }); }
}

/**
 * Khớp cả email lẫn số điện thoại, chỉ đọc bảng, không ghi gì.
 * Ngày bắt đầu = ngày nộp cam kết, nhưng không sớm hơn NGAY_KHAI_MAC.
 * Ngày 1 mở lúc 0h ngày bắt đầu, nên ai nộp cam kết từ ngày khai mạc trở đi làm được ngay.
 * Ngày N (2 tới 7) mở khi đã nộp Ngày N-1, lúc 0h của ngày muộn hơn trong hai ngày:
 * ngày bắt đầu + N-1, và ngày sau hôm nộp Ngày N-1. Nộp trễ thì vẫn chờ 0h hôm sau,
 * mỗi ngày chỉ làm một bài (Coach Duy chốt 14/10/2026).
 * Tổng kết mở khi đã nộp Ngày 7.
 */
function tinhTienDo(email, sdt) {
  var p = docBaiNop(layBang())[email.toLowerCase() + '|' + soCuoi(sdt)];
  var kq = lichTuNop(p ? p.da_nop : {});
  kq.ver = 3;                       // ver 2: trang gửi Nộp Bước 1, Bước 2 lên đây. ver 3: trang hiện ô gửi ảnh, PDF ở Bước 3
  kq.buoc = p ? p.buoc : {};        // bước một phần xa nhất đã nộp của từng ngày: {"1": 2, "2": 1}
  return kq;
}

/** Đọc chín trang tính một lượt. Mỗi người là một cặp email + chín số cuối điện thoại, giữ ngày nộp sớm nhất của từng bài. */
function docBaiNop(bang) {
  var ds = {};
  for (var n = 0; n <= 8; n++) {
    var t = bang.getSheetByName(tenTrang(n));
    if (!t || t.getLastRow() < 2) continue;
    var v = t.getDataRange().getValues(), td = v[0].map(String);
    var cBuoc = td.indexOf('Bước nộp'), cGio = td.indexOf('Thời gian'), cTen = td.indexOf('Họ và tên'), cEm = td.indexOf('Email'), cSo = td.indexOf('Số điện thoại');
    for (var i = 1; i < v.length; i++) {
      var em = String(v[i][cEm]).trim().toLowerCase(), so = soCuoi(v[i][cSo]);
      if (!em || !so) continue;
      var p = ds[em + '|' + so] || (ds[em + '|' + so] = { ten: '', email: em, sdt: String(v[i][cSo]), da_nop: {}, buoc: {} });
      if (chuoi(v[i][cTen])) p.ten = chuoi(v[i][cTen]);
      var ngay = v[i][cGio] instanceof Date ? Utilities.formatDate(v[i][cGio], GIO, 'yyyy-MM-dd') : '';
      var mot = cBuoc > -1 ? parseInt(v[i][cBuoc], 10) : 0;   // 1 hoặc 2: dòng một phần
      if (mot === 1 || mot === 2) { p.buoc[n] = Math.max(p.buoc[n] || 0, mot); continue; }
      if (ngay && (!p.da_nop[n] || ngay < p.da_nop[n])) p.da_nop[n] = ngay;
    }
  }
  return ds;
}

function lichTuNop(daNop) {
  var hom = homNay(), kq = { hom_nay: hom, da_nop: daNop, mo: [0], lich: {}, bat_dau: null, han: null };
  if (!daNop[0]) return kq;
  var bd = daNop[0] > NGAY_KHAI_MAC ? daNop[0] : NGAY_KHAI_MAC;
  kq.bat_dau = bd;
  kq.han = congNgay(bd, SO_NGAY_HAN);
  for (var n = 1; n <= 7; n++) {
    kq.lich[n] = congNgay(bd, n - 1);
    if (n > 1 && daNop[n - 1] && congNgay(daNop[n - 1], 1) > kq.lich[n]) kq.lich[n] = congNgay(daNop[n - 1], 1);
    if (daNop[n - 1] && hom >= kq.lich[n]) kq.mo.push(n);
  }
  if (daNop[7]) kq.mo.push(8);
  return kq;
}

/* ---------- trang tính Tiến độ: mỗi người một dòng, tự dựng lại mỗi giờ ---------- */

/**
 * Xoá trắng rồi ghi lại trang tính Tiến độ, nên đừng gõ tay vào trang này.
 * Dòng 2 và 3 đếm số người đã nộp từng bài và tỷ lệ so với số người nộp cam kết.
 * "Chậm lịch" là số ngày bài kế tiếp đã quá ngày theo lịch mà chưa nộp.
 */
function dungTienDo() {
  var bang = layBang(), ds = docBaiNop(bang), hom = homNay(), N = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var hien = function (s) { return s ? "'" + s.slice(8, 10) + '/' + s.slice(5, 7) : ''; };
  var tieuDe = ['Họ và tên', 'Email', 'Số điện thoại', 'Ngày bắt đầu', 'Hạn cuối', 'Đang ở', 'Chậm lịch (ngày)', 'Số bài đã nộp']
    .concat(N.map(tenTrang));
  var dem = N.map(function () { return 0; });
  var nguoi = Object.keys(ds).map(function (k) {
    var p = ds[k], kq = lichTuNop(p.da_nop), ke = -1;
    N.forEach(function (n) { if (p.da_nop[n]) dem[n]++; else if (ke < 0) ke = n; });
    var cham = ke >= 1 && ke <= 7 && hom > kq.lich[ke] ? (Date.parse(hom) - Date.parse(kq.lich[ke])) / 864e5 : '';
    return [p.ten, p.email, "'0" + soCuoi(p.sdt), hien(kq.bat_dau), hien(kq.han), ke < 0 ? 'Xong' : tenTrang(ke), cham,
      Object.keys(p.da_nop).length].concat(N.map(function (n) { return hien(p.da_nop[n]); }))
      .concat([kq.bat_dau || '9999']);
  });
  nguoi.sort(function (a, b) { return a[a.length - 1] < b[b.length - 1] ? -1 : a[a.length - 1] > b[b.length - 1] ? 1 : a[0] < b[0] ? -1 : 1; });
  nguoi = nguoi.map(function (r) { return r.slice(0, -1); });

  var rong = function (chu) { return [chu, '', '', '', '', '', '', '']; };
  var bangGhi = [tieuDe,
    rong('Số người đã nộp').concat(dem),
    rong('Tỷ lệ so với số người cam kết').concat(dem.map(function (c) { return dem[0] ? c / dem[0] : ''; })),
    rong('Cập nhật lúc ' + Utilities.formatDate(new Date(), GIO, 'HH:mm dd/MM/yyyy')).concat(N.map(function () { return ''; }))
  ].concat(nguoi);

  var t = bang.getSheetByName('Tiến độ') || bang.insertSheet('Tiến độ', 0);
  t.clear();
  t.getRange(1, 1, bangGhi.length, tieuDe.length).setValues(bangGhi);
  t.getRange(1, 1, 1, tieuDe.length).setFontWeight('bold').setWrap(true).setVerticalAlignment('top');
  t.getRange(2, 1, 2, tieuDe.length).setFontWeight('bold');
  t.getRange(3, 9, 1, N.length).setNumberFormat('0%');
  t.getRange(4, 1).setFontStyle('italic');
  t.autoResizeColumns(2, tieuDe.length - 1);
  t.setColumnWidth(1, 230);
  t.setFrozenRows(4);
  t.setFrozenColumns(1);
}

/** Cài giờ chạy dungTienDo mỗi tiếng. Chạy lại không sinh giờ trùng. */
function caiGioTienDo() {
  ScriptApp.getProjectTriggers().forEach(function (g) {
    if (g.getHandlerFunction() === 'dungTienDo') ScriptApp.deleteTrigger(g);
  });
  ScriptApp.newTrigger('dungTienDo').timeBased().everyHours(1).create();
  dungTienDo();
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

/** Bảng quy trình bán hàng bảy bước, bản 1 và bản 2, gửi kèm bài Ngày 7: dòng bắt đầu bằng "# ", "## ", "### " thành tiêu đề. */
function taoDoc(ten, chu) {
  var ma = PropertiesService.getScriptProperties().getProperty('ma_thu_muc');
  var gio = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd-MM-yyyy HH:mm');
  var doc = DocumentApp.create('Bảng quy trình bán hàng bảy bước của ' + ten + ' (' + gio + ')');
  var than = doc.getBody();
  chu.slice(0, 200000).split('\n').forEach(function (dong) {
    if (dong.indexOf('### ') === 0) than.appendParagraph(dong.slice(4)).setHeading(DocumentApp.ParagraphHeading.HEADING3);
    else if (dong.indexOf('## ') === 0) than.appendParagraph(dong.slice(3)).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    else if (dong.indexOf('# ') === 0) than.appendParagraph(dong.slice(2)).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    else than.appendParagraph(dong);
  });
  doc.saveAndClose();
  var tep = DriveApp.getFileById(doc.getId());
  if (ma) tep.moveTo(DriveApp.getFolderById(ma));
  return doc.getUrl();
}

/* ---------- ảnh, PDF ở Bước 3 (A5, Coach Duy chốt 16/10/2026) ----------
 * Trang gửi từng tệp một ngay khi người học chọn (hoi = 'tep'), nhận lại đường dẫn Drive,
 * rồi gửi các đường dẫn trong cột "Tệp đính kèm" lúc nộp bài cuối ngày.
 * Chỉ nhận của người đã nộp bài cam kết, tệp để riêng tư trong thư mục của chủ dự án. */
var TEP_TOI_DA = 10 * 1024 * 1024;   // 10 MB, trang cũng chặn trước khi gửi
var LOAI_TEP = /^(image\/[a-z0-9.+-]+|application\/pdf)$/;
function nhanTep(d) {
  var sdt = chuoi(d.dien_thoai).replace(/[\s.\-()]/g, ''), ngay = parseInt(d.ngay, 10), loai = chuoi(d.loai);
  if (!(ngay >= 1 && ngay <= 7)) return tra({ ok: false, loi: 'Không rõ tệp của ngày nào.' });
  if (!chuoi(d.email) || !/^\+?\d{9,12}$/.test(sdt)) return tra({ ok: false, loi: 'Thiếu email hoặc số điện thoại.' });
  if (!LOAI_TEP.test(loai)) return tra({ ok: false, loi: 'Chỉ nhận ảnh và PDF.' });
  try {
    var byte = Utilities.base64Decode(chuoi(d.du_lieu));
    if (!byte.length || byte.length > TEP_TOI_DA) return tra({ ok: false, loi: 'Tệp trống hoặc lớn hơn 10 MB.' });
    if (!tinhTienDo(chuoi(d.email), sdt).da_nop[0]) return tra({ ok: false, loi: 'Bạn nộp bài cam kết trước rồi mới gửi tệp.' });
    var ten = 'Ngày ' + ngay + ' - ' + chuoi(d.ten).slice(0, 80) + ' - ' + chuoi(d.ten_tep).slice(0, 120);
    var tep = layThuMucTep().createFile(Utilities.newBlob(byte, loai, ten));
    return tra({ ok: true, url: tep.getUrl() });
  } catch (loi) {
    ghiLoi(loi, { hoi: 'tep', email: d.email, ten_tep: d.ten_tep, loai: loai });   // không ghi dữ liệu tệp vào bảng Lỗi
    return tra({ ok: false, loi: 'Chưa lưu được tệp, bạn thử lại sau ít phút.' });
  }
}
function layThuMucTep() {
  var kho = PropertiesService.getScriptProperties(), ma = kho.getProperty('ma_thu_muc_tep');
  if (ma) return DriveApp.getFolderById(ma);
  var khoa = LockService.getScriptLock();
  khoa.waitLock(20000);
  try {
    ma = kho.getProperty('ma_thu_muc_tep');   // hai người gửi cùng lúc lần đầu thì chỉ tạo một thư mục
    if (ma) return DriveApp.getFolderById(ma);
    var thuMuc = DriveApp.getFolderById(kho.getProperty('ma_thu_muc')).createFolder('Ảnh và PDF nộp ở Bước 3');
    kho.setProperty('ma_thu_muc_tep', thuMuc.getId());
    return thuMuc;
  } finally { khoa.releaseLock(); }
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
