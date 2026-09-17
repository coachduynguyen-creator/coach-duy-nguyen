/**
 * NƠI NHẬN ĐĂNG KÝ CHO coachduynguyen.vn
 * Dựng ngày 17/09/2026. Chạy bằng Google Apps Script, triển khai dạng Web app.
 *
 * VÌ SAO CÓ TỆP NÀY
 * Trước đây hai trang đăng ký đều dùng `mailto:`, tức mở ứng dụng thư trên máy
 * khách rồi mong khách tự bấm Gửi. Khách dùng điện thoại chưa cài app thư, hoặc
 * dùng Gmail trên trình duyệt, thì không có gì mở ra mà trang vẫn báo đã xong.
 * Riêng trang founder-brand còn nặng hơn: mã đọc bốn ô đã bị xoá khỏi biểu mẫu
 * nên nút Gửi lỗi ngay dòng đầu, không làm gì cả. Cả hai lỗi này đều im lặng.
 *
 * CÁCH DÙNG, LÀM MỘT LẦN
 * 1. Mở script.google.com bằng tài khoản nextstepacademyvietnam@gmail.com.
 * 2. Tạo dự án mới, dán toàn bộ tệp này vào, lưu.
 * 3. Chạy hàm `khoiTao` một lần. Nó tạo bảng tính, dựng hai trang tính kèm tiêu
 *    đề cột, rồi ghi địa chỉ bảng vào Nhật ký thực thi.
 * 4. Triển khai dạng Web app: Execute as = Me, Who has access = Anyone.
 * 5. Chép địa chỉ /exec vào `DANG_KY.form` của hai trang HTML.
 *
 * SỬA MÃ SAU NÀY
 * Tệp này là bản chuẩn. Sửa xong thì dán lại vào trình biên tập, lưu, RỒI phải
 * Triển khai một phiên bản mới. Chỉ lưu thôi là địa chỉ /exec vẫn chạy mã của
 * phiên bản cũ, nên trang không nhận được thay đổi mà không ai biết. Bản đang
 * chạy ngoài mạng là Phiên bản 1 lúc 23:36 ngày 17/09/2026, chưa có hàm
 * `xoaDongKiemThu` vì hàm đó thêm sau. Không sao, đó là hàm chạy tay.
 *
 * LƯU Ý CHO THỢ SAU
 * Trang gửi bằng Content-Type: text/plain, KHÔNG phải application/json. Đây là
 * cố ý. Apps Script không trả về header cho phép gọi chéo miền đối với yêu cầu
 * phức tạp, nên đổi sang application/json là trình duyệt chặn và trang mất khả
 * năng biết gửi thành công hay không. Dữ liệu bên trong vẫn là JSON.
 */

var KHOA_BANG = 'ma_bang_tinh';
var THU_DOI_NGU = 'nextstepacademyvietnam@gmail.com';
var TEN_BANG = 'CDN - Đăng ký từ website coachduynguyen.vn';

/** Mỗi trang một trang tính riêng, cột khai ở đây và phải khớp thứ tự khi ghi. */
var NGUON = {
  'cong-dong': {
    tab: 'Cộng đồng Next Gen Founder',
    ten_chuong_trinh: 'Cộng đồng Next Gen Founder',
    cot: ['Thời gian', 'Họ và tên', 'Điện thoại hoặc Zalo', 'Email',
          'Doanh nghiệp và ngành', 'Giai đoạn', 'Điều đang kẹt nhất',
          'Trang nguồn', 'Nguồn chiến dịch', 'Tình trạng liên hệ', 'Ghi chú của đội ngũ'],
    lay: function (d) {
      return [d.ten, d.dienthoai, d.email, d.nganh, d.giaidoan, d.ket,
              d.trang_nguon || '', d.nguon_chien_dich || '', 'Chưa liên hệ', ''];
    }
  },
  'founder-brand': {
    tab: 'Trusted Founder Brand',
    ten_chuong_trinh: 'Trusted Founder Brand Challenge',
    cot: ['Thời gian', 'Họ và tên', 'Điện thoại hoặc Zalo', 'Email',
          'Đồng ý được liên hệ', 'Mức giá áp dụng',
          'Trang nguồn', 'Phiên bản trang', 'Nguồn chiến dịch',
          'Tình trạng liên hệ', 'Ghi chú của đội ngũ'],
    lay: function (d) {
      return [d.ten, d.dienthoai, d.email, d.dongy || '', d.muc_gia || '',
              d.trang_nguon || '', d.phien_ban_trang || '', d.nguon_chien_dich || '',
              'Chưa liên hệ', ''];
    }
  }
};

/* ------------------------------------------------------------------ */
/* Dựng bảng, chạy tay một lần                                         */
/* ------------------------------------------------------------------ */

function khoiTao() {
  var kho = PropertiesService.getScriptProperties();
  var ma = kho.getProperty(KHOA_BANG);
  var bang = ma ? SpreadsheetApp.openById(ma) : SpreadsheetApp.create(TEN_BANG);
  kho.setProperty(KHOA_BANG, bang.getId());

  Object.keys(NGUON).forEach(function (k) {
    var c = NGUON[k];
    var t = bang.getSheetByName(c.tab) || bang.insertSheet(c.tab);
    if (t.getLastRow() === 0) {
      t.appendRow(c.cot);
      t.getRange(1, 1, 1, c.cot.length).setFontWeight('bold');
      t.setFrozenRows(1);
    }
  });
  var loi = bang.getSheetByName('Lỗi') || bang.insertSheet('Lỗi');
  if (loi.getLastRow() === 0) loi.appendRow(['Thời gian', 'Lỗi', 'Dữ liệu nhận được']);

  var mac_dinh = bang.getSheetByName('Sheet1');
  if (mac_dinh && mac_dinh.getLastRow() === 0 && bang.getSheets().length > 1) bang.deleteSheet(mac_dinh);

  Logger.log('Bảng đăng ký: ' + bang.getUrl());
  return bang.getUrl();
}

/** Dọn dòng kiểm thử, chạy tay. Xoá mọi dòng có chữ KIỂM THỬ trong cột Họ và tên. */
function xoaDongKiemThu() {
  var bang = layBang(), da = 0;
  Object.keys(NGUON).forEach(function (k) {
    var t = bang.getSheetByName(NGUON[k].tab);
    if (!t || t.getLastRow() < 2) return;
    var o = t.getRange(2, 2, t.getLastRow() - 1, 1).getValues();
    for (var i = o.length - 1; i >= 0; i--) {
      if (String(o[i][0]).toUpperCase().indexOf('KIỂM THỬ') > -1) { t.deleteRow(i + 2); da++; }
    }
  });
  Logger.log('Đã xoá ' + da + ' dòng kiểm thử.');
  return da;
}

function layBang() {
  var ma = PropertiesService.getScriptProperties().getProperty(KHOA_BANG);
  if (!ma) throw new Error('Chưa chạy khoiTao, chưa có bảng tính.');
  return SpreadsheetApp.openById(ma);
}

/* ------------------------------------------------------------------ */
/* Nhận đăng ký                                                        */
/* ------------------------------------------------------------------ */

function doGet() {
  return tra({ ok: true, thong_diep: 'Nơi nhận đăng ký coachduynguyen.vn đang chạy.' });
}

function doPost(e) {
  var d = {};
  try {
    d = JSON.parse(e.postData.contents);
  } catch (loi) {
    return tra({ ok: false, loi: 'Dữ liệu gửi lên không đọc được.' });
  }

  var khoa = LockService.getScriptLock();
  try {
    khoa.waitLock(20000);

    var c = NGUON[d.nguon];
    if (!c) return tra({ ok: false, loi: 'Không rõ đăng ký từ trang nào.' });

    /* Bẫy máy gửi rác: ô này người thật không thấy nên luôn rỗng. Có chữ trong
       đó là máy điền hộ. Vẫn trả về ok để máy rác không biết mình bị chặn. */
    if (d.bay) return tra({ ok: true });

    var thieu = ['ten', 'dienthoai', 'email'].filter(function (k) { return !chuoi(d[k]); });
    if (thieu.length) return tra({ ok: false, loi: 'Còn thiếu: ' + thieu.join(', ') + '.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email))) {
      return tra({ ok: false, loi: 'Địa chỉ email chưa đúng dạng.' });
    }

    var t = layBang().getSheetByName(c.tab);
    if (!t) throw new Error('Không thấy trang tính ' + c.tab + ', chạy lại khoiTao.');

    /* Cùng email gửi lại trong 12 giờ thì coi là bấm hai lần, không ghi thêm dòng. */
    if (daCo(t, chuoi(d.email))) {
      return tra({ ok: true, trung: true, thong_diep: 'Đăng ký này đã được ghi nhận trước đó.' });
    }

    var dong = [new Date()].concat(c.lay(lamSach(d)));
    t.appendRow(dong);

    guiThuChoKhach(lamSach(d), c);
    guiThuChoDoiNgu(lamSach(d), c);

    return tra({ ok: true });
  } catch (loi) {
    ghiLoi(loi, d);
    return tra({ ok: false, loi: 'Nơi nhận đang gặp sự cố. Bạn thử lại sau ít phút.' });
  } finally {
    try { khoa.releaseLock(); } catch (bo) { }
  }
}

function daCo(t, email) {
  var n = t.getLastRow();
  if (n < 2) return false;
  var tu = Math.max(2, n - 199);
  var o = t.getRange(tu, 1, n - tu + 1, 4).getValues();
  var moc = new Date().getTime() - 12 * 60 * 60 * 1000;
  for (var i = 0; i < o.length; i++) {
    var luc = o[i][0] instanceof Date ? o[i][0].getTime() : 0;
    if (String(o[i][3]).toLowerCase() === email.toLowerCase() && luc > moc) return true;
  }
  return false;
}

function lamSach(d) {
  var r = {};
  Object.keys(d).forEach(function (k) { r[k] = chuoi(d[k]).slice(0, 2000); });
  return r;
}

function chuoi(v) { return v === undefined || v === null ? '' : String(v).trim(); }

function tra(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

function ghiLoi(loi, d) {
  try {
    layBang().getSheetByName('Lỗi')
      .appendRow([new Date(), String(loi && loi.message ? loi.message : loi), JSON.stringify(d).slice(0, 5000)]);
  } catch (bo) { }
}

/* ------------------------------------------------------------------ */
/* Thư                                                                 */
/* ------------------------------------------------------------------ */

function guiThuChoKhach(d, c) {
  var than = d.nguon === 'founder-brand' ? thuFounderBrand(d) : thuCongDong(d);
  try {
    MailApp.sendEmail({
      to: d.email,
      subject: 'Duy đã nhận đăng ký của bạn · ' + c.ten_chuong_trinh,
      htmlBody: than,
      name: 'Coach Duy Nguyễn',
      replyTo: THU_DOI_NGU
    });
  } catch (loi) {
    ghiLoi('Không gửi được thư cho khách: ' + loi, d);
  }
}

function thuCongDong(d) {
  return khung(
    '<p>Chào ' + escape_(d.ten) + ',</p>' +
    '<p>Duy đã nhận đăng ký danh sách chờ Cộng đồng Next Gen Founder của bạn. Thư này để bạn biết chắc là nó đã tới, không rơi đâu cả.</p>' +
    '<p>Bước tiếp theo: đội ngũ của Duy sẽ liên hệ theo số bạn để lại, thường trong một hai ngày làm việc, để hẹn một buổi trao đổi ngắn. Buổi đó để xem cộng đồng có giải được đúng điều bạn đang kẹt hay không, và hợp cấp nào. Nếu chưa phải lúc, Duy sẽ nói thẳng và chỉ bạn bước hợp hơn.</p>' +
    '<p>Điều bạn ghi là đang kẹt nhất:</p>' +
    '<blockquote style="margin:0 0 18px;padding:12px 16px;border-left:3px solid #F2B14A;background:#FAF7F2;color:#3A3A3A">' + escape_(d.ket) + '</blockquote>' +
    '<p>Bạn không cần làm gì thêm lúc này. Có gì muốn nói trước thì trả lời thẳng thư này.</p>',
    d
  );
}

function thuFounderBrand(d) {
  return khung(
    '<p>Chào ' + escape_(d.ten) + ',</p>' +
    '<p>Duy đã nhận phiếu đăng ký Trusted Founder Brand Challenge của bạn. Thư này để bạn biết chắc là nó đã tới.</p>' +
    '<p>Gửi phiếu chưa phải là hoàn tất đăng ký. Đội ngũ sẽ gọi lại để trao đổi kỹ hơn và gửi bạn điều khoản đầy đủ trước khi bạn chuyển khoản.</p>' +
    (d.muc_gia ? '<p>Mức đang áp dụng theo lúc bạn gửi phiếu: ' + escape_(d.muc_gia) + '.</p>' : '') +
    '<p>Có gì cần hỏi trước thì trả lời thẳng thư này.</p>',
    d
  );
}

function khung(ruot, d) {
  return '<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#1E1E1E;max-width:560px">' +
    ruot +
    '<p style="margin-top:22px">Duy<br><span style="color:#6B6B6B">Coach Duy Nguyễn · Next Gen Founder</span></p>' +
    '<hr style="border:0;border-top:1px solid #E6E1D8;margin:22px 0">' +
    '<p style="font-size:12px;color:#8A8A8A">Bạn nhận thư này vì vừa đăng ký trên coachduynguyen.vn bằng địa chỉ ' + escape_(d.email) +
    '. Thư này chỉ xác nhận đăng ký, không phải thư quảng cáo. Không phải bạn đăng ký thì trả lời thư này để đội ngũ xoá thông tin.</p>' +
    '</div>';
}

function guiThuChoDoiNgu(d, c) {
  var dong = Object.keys(d).filter(function (k) { return k !== 'bay' && chuoi(d[k]); })
    .map(function (k) { return '<tr><td style="padding:3px 12px 3px 0;color:#6B6B6B;vertical-align:top">' + escape_(k) + '</td><td style="padding:3px 0">' + escape_(d[k]) + '</td></tr>'; })
    .join('');
  try {
    MailApp.sendEmail({
      to: THU_DOI_NGU,
      subject: '[Đăng ký] ' + c.ten_chuong_trinh + ' · ' + chuoi(d.ten) + ' · ' + chuoi(d.dienthoai),
      htmlBody: '<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px">' +
        '<p><b>Đăng ký mới từ trang ' + escape_(d.nguon) + '</b></p><table>' + dong + '</table>' +
        '<p style="margin-top:16px"><a href="' + layBang().getUrl() + '">Mở bảng đăng ký</a></p></div>',
      replyTo: chuoi(d.email) || THU_DOI_NGU
    });
  } catch (loi) {
    ghiLoi('Không gửi được thư báo đội ngũ: ' + loi, d);
  }
}

function escape_(s) {
  return chuoi(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
