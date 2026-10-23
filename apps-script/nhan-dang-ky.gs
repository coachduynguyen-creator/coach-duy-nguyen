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
 * BỔ SUNG 16/10/2026: ĐƠN NGƯỜI DẪN ĐƯỜNG
 * Thêm nguồn `nguoi-dan-duong` với trang tính riêng, nhãn gợi ý, thư xác nhận
 * "trả lời trong 7 ngày", thư báo tiêu đề "[NGƯỜI DẪN ĐƯỜNG] Họ tên" tới email riêng
 * của Duy (không gửi đội ngũ) và tin Telegram. Mã bot và mã cuộc trò chuyện KHÔNG
 * nằm trong tệp này: Duy tự thêm hai mục `telegram_bot_token` và `telegram_chat_id`
 * vào Cài đặt dự án > Thuộc tính tập lệnh. Sau khi dán tệp: lưu, chạy `khoiTao` (tạo
 * trang tính mới), chạy `kiemTraTelegram` (cấp quyền gọi ra ngoài), rồi Triển khai
 * một PHIÊN BẢN MỚI. Địa chỉ /exec không đổi.
 *
 * BỔ SUNG 23/10/2026: PHIẾU ĐĂNG KÝ MASTER CLUB
 * Thêm nguồn `master-club` (bản chốt trong vault, [C] Bản chốt nút đăng ký và câu
 * khó trang Master Club 23-10-2026.md): trang tính riêng, thư xác nhận riêng, thư
 * báo tới đội ngũ như trang cộng đồng, kèm tin Telegram vào cùng bot và cuộc trò chuyện
 * của đơn Người Dẫn Đường. doGet trả thêm `ver` để kiểm bản đang chạy.
 * Phiếu có ô `cap` (Master Club hoặc Grand Master Club, nút cấp 3 trên trang mở cùng phiếu).
 * Pancake không đi qua tệp này: trang gửi thẳng vào trạm /api/dang-ky (thư mục tram-pancake),
 * trạm giữ khóa Pancake. Thư báo Master Club gửi cả email chung lẫn email riêng của Duy.
 * Sau khi dán: lưu, chạy `khoiTao` (tạo trang tính Master Club), rồi Triển khai một
 * PHIÊN BẢN MỚI. Địa chỉ /exec không đổi.
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
  },
  /* Phiếu đăng ký Master Club, thêm 23/10/2026. Email đứng cột 4 vì daCo() đọc cột đó. */
  'master-club': {
    tab: 'Master Club',
    ten_chuong_trinh: 'Master Club',
    bat_buoc: ['doanhnghiep', 'nhansu', 'vuong'],
    cot: ['Thời gian', 'Họ và tên', 'Số Zalo', 'Email', 'Cấp quan tâm',
          'Doanh nghiệp và lĩnh vực', 'Số nhân sự', 'Việc đang vướng nhất',
          'Trang nguồn', 'Nguồn chiến dịch', 'Tình trạng liên hệ', 'Ghi chú của đội ngũ'],
    lay: function (d) {
      return [d.ten, d.dienthoai, d.email, d.cap, d.doanhnghiep, d.nhansu, d.vuong,
              d.trang_nguon || '', d.nguon_chien_dich || '', 'Chưa liên hệ', ''];
    }
  },
  /* Đơn trở thành Người Dẫn Đường. Thêm 16/10/2026 theo bản chốt trong vault
     ([C] Bản chốt trang đăng ký Người Dẫn Đường.md). Email phải đứng cột 4 vì daCo() đọc cột đó.
     Thư báo chỉ gửi cho Duy, không gửi đội ngũ, nên khai email riêng ở EMAIL_RIENG. */
  'nguoi-dan-duong': {
    tab: 'Người Dẫn Đường',
    ten_chuong_trinh: 'Người Dẫn Đường',
    tieu_de_thu: 'Duy đã nhận đơn của bạn · Người Dẫn Đường',
    bat_buoc: ['nhom', 'linh_vuc', 'ket_qua', 'kiem_chung', 'muon_dan', 'thoi_gian', 'nhan_xet', 'dan_lai'],
    cot: ['Thời gian', 'Họ và tên', 'Điện thoại hoặc Zalo', 'Email',
          'Gợi ý của hệ thống',
          'Nhóm', 'Lĩnh vực và số năm', 'Đường dẫn công khai',
          'Kết quả lớn nhất đã làm ra', 'Ai hoặc điều gì kiểm chứng',
          'Số người hỏi mỗi tháng', 'Muốn dẫn ai và giúp đạt gì',
          'Đã từng dẫn người khác', 'Tám giờ mỗi tuần, mười hai tháng',
          'Nhận xét thẳng sau mỗi buổi', 'Dẫn lại người đi sau',
          'Mong có được sau mười hai tháng', 'Biết Duy qua đâu',
          'Điều băn khoăn nhất', 'Điều muốn Duy biết trước buổi gặp',
          'Trang nguồn', 'Nguồn chiến dịch', 'Tình trạng', 'Ghi chú của Duy'],
    lay: function (d) {
      return [d.ten, d.dienthoai, d.email, goiY(d).chuoi, d.nhom, d.linh_vuc, d.lien_ket || '',
              d.ket_qua, d.kiem_chung, d.nguoi_hoi || '', d.muon_dan,
              d.tung_dan || '', d.thoi_gian, d.nhan_xet, d.dan_lai,
              d.mong || '', d.biet_qua || '', d.bang_khoan || '', d.dieu_biet || '',
              d.trang_nguon || '', d.nguon_chien_dich || '', 'Chưa đọc', ''];
    }
  }
};

/** Email và Telegram riêng của Duy cho đơn Người Dẫn Đường (bản chốt A1). */
var EMAIL_RIENG = 'coachduynguyen@gmail.com';
var KHOA_TELEGRAM_MA = 'telegram_bot_token';
var KHOA_TELEGRAM_CHAT = 'telegram_chat_id';

/**
 * Nhãn gợi ý riêng cho Duy (bản chốt A4). Chỉ để Duy đọc đơn nhanh hơn, không tự
 * từ chối ai và không nhắn gì cho người đăng ký. Đọc từ các câu chọn sẵn, nên chuỗi
 * lựa chọn trên trang form phải khớp đầu chuỗi ở đây.
 */
function goiY(d) {
  var dau = function (v) { return chuoi(v).toLowerCase(); };
  var cung = [], mem = [];
  if (dau(d.thoi_gian).indexOf('chưa chắc') === 0) cung.push('chưa chắc có đủ thời gian');
  if (dau(d.nhan_xet).indexOf('tôi chưa chắc') === 0) cung.push('chưa chắc nhận được nhận xét thẳng');
  if (dau(d.thoi_gian).indexOf('cần sắp xếp') === 0) mem.push('cần sắp xếp lại thời gian');
  if (dau(d.nhan_xet).indexOf('tôi sẽ cần làm quen') === 0) mem.push('cần làm quen với nhận xét thẳng');
  if (dau(d.dan_lai).indexOf('cần nghe thêm') === 0) mem.push('cần nghe thêm về việc dẫn lại người đi sau');
  if (dau(d.nguoi_hoi).indexOf('chưa có') === 0) mem.push('chưa có ai hỏi cách làm');
  if (dau(d.tung_dan).indexOf('chưa') === 0) mem.push('chưa từng dẫn người khác');
  var nhan = cung.length >= 2 ? 'Chưa hợp' : (cung.length === 1 || mem.length >= 2 ? 'Cần hỏi thêm' : 'Hợp');
  var ly = cung.concat(mem);
  return { nhan: nhan, ly: ly, chuoi: nhan + (ly.length ? (nhan === 'Hợp' ? ', lưu ý: ' : ': ') + ly.join('; ') : '') };
}

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
  return tra({ ok: true, ver: 'master-club-23-10-cap', thong_diep: 'Nơi nhận đăng ký coachduynguyen.vn đang chạy.' });
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
    if (d.nguon === 'master-club') d.cap = d.cap === 'Grand Master Club' ? 'Grand Master Club' : 'Master Club';

    /* Bẫy máy gửi rác: ô này người thật không thấy nên luôn rỗng. Có chữ trong
       đó là máy điền hộ. Vẫn trả về ok để máy rác không biết mình bị chặn. */
    if (d.bay) return tra({ ok: true });

    var thieu = ['ten', 'dienthoai', 'email'].filter(function (k) { return !chuoi(d[k]); });
    if (thieu.length) return tra({ ok: false, loi: 'Còn thiếu: ' + thieu.join(', ') + '.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chuoi(d.email))) {
      return tra({ ok: false, loi: 'Địa chỉ email chưa đúng dạng.' });
    }

    var thieu_them = (c.bat_buoc || []).filter(function (k) { return !chuoi(d[k]); });
    if (thieu_them.length) return tra({ ok: false, loi: 'Còn thiếu câu trả lời bắt buộc.' });

    var t = layBang().getSheetByName(c.tab);
    if (!t) throw new Error('Không thấy trang tính ' + c.tab + ', chạy lại khoiTao.');

    /* Cùng email gửi lại trong 12 giờ thì coi là bấm hai lần, không ghi thêm dòng. */
    if (daCo(t, chuoi(d.email))) {
      return tra({ ok: true, trung: true, thong_diep: 'Đăng ký này đã được ghi nhận trước đó.' });
    }

    var dong = [new Date()].concat(c.lay(lamSach(d)));
    t.appendRow(dong);

    guiThuChoKhach(lamSach(d), c);
    if (d.nguon === 'nguoi-dan-duong') guiBaoRieng(lamSach(d), c);
    else guiThuChoDoiNgu(lamSach(d), c);
    if (d.nguon === 'master-club') {
      var m = lamSach(d);
      baoTelegram('Đăng ký ' + m.cap + ' mới\n' + chuoi(m.ten) + ' · Zalo ' + chuoi(m.dienthoai) + ' · ' + chuoi(m.email) +
        '\nDoanh nghiệp: ' + chuoi(m.doanhnghiep) + ' · Nhân sự: ' + chuoi(m.nhansu) +
        '\nĐang vướng: ' + chuoi(m.vuong).slice(0, 500) +
        '\nNguồn: ' + (chuoi(m.nguon_chien_dich) || 'không ghi') +
        '\nĐọc đủ ở trang tính Master Club trong bảng đăng ký.', m);
    }

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
  var than = d.nguon === 'founder-brand' ? thuFounderBrand(d)
    : d.nguon === 'nguoi-dan-duong' ? thuNguoiDanDuong(d)
    : d.nguon === 'master-club' ? thuMasterClub(d) : thuCongDong(d);
  try {
    MailApp.sendEmail({
      to: d.email,
      subject: c.tieu_de_thu || ('Duy đã nhận đăng ký của bạn · ' + (d.cap || c.ten_chuong_trinh)),
      htmlBody: than,
      name: 'Coach Duy Nguyễn',
      replyTo: d.nguon === 'nguoi-dan-duong' ? EMAIL_RIENG : THU_DOI_NGU
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

function thuMasterClub(d) {
  return khung(
    '<p>Chào ' + escape_(d.ten) + ',</p>' +
    '<p>Duy đã nhận phiếu đăng ký ' + escape_(d.cap) + ' của bạn. Thư này để bạn biết chắc là phiếu đã tới.</p>' +
    '<p>Bước tiếp theo: tư vấn viên của Duy sẽ liên hệ qua số Zalo bạn để lại, để nghe kỹ việc bạn đang vướng. Hai bên cùng xem ' + escape_(d.cap) + ' có hợp với bạn lúc này không. Gửi phiếu chưa phải là thanh toán, và nói chuyện xong thấy chưa phải lúc thì bạn cứ nói thật.</p>' +
    '<p>Việc bạn ghi là đang vướng nhất:</p>' +
    '<blockquote style="margin:0 0 18px;padding:12px 16px;border-left:3px solid #F2B14A;background:#FAF7F2;color:#3A3A3A">' + escape_(d.vuong) + '</blockquote>' +
    '<p>Có gì muốn nói trước thì trả lời thẳng thư này.</p>',
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

function thuNguoiDanDuong(d) {
  return khung(
    '<p>Chào ' + escape_(d.ten) + ',</p>' +
    '<p>Duy đã nhận đơn trở thành Người Dẫn Đường của bạn. Thư này để bạn biết chắc là đơn đã tới, không rơi đâu cả.</p>' +
    '<p>Duy đọc từng đơn và trả lời bạn trong 7 ngày. Có thể Duy hẹn một buổi gặp, cũng có thể Duy hỏi thêm vài điều trước khi gặp. Gửi đơn chưa có nghĩa là bạn đã được nhận, và Duy sẽ nói thẳng bước tiếp theo sau khi đọc.</p>' +
    '<p>Bạn không cần làm gì thêm lúc này. Có gì muốn nói thêm thì trả lời thẳng thư này, thư sẽ tới tay Duy.</p>',
    d
  );
}

/** Báo riêng cho Duy về đơn Người Dẫn Đường: một email tiêu đề riêng và một tin Telegram. */
function guiBaoRieng(d, c) {
  var g = goiY(d);
  var ten_cot = c.cot.slice(1), gia_tri = c.lay(d);
  var dong = ten_cot.map(function (k, i) {
    var v = chuoi(gia_tri[i]);
    return v ? '<tr><td style="padding:4px 14px 4px 0;color:#6B6B6B;vertical-align:top">' + escape_(k) + '</td><td style="padding:4px 0">' + escape_(v) + '</td></tr>' : '';
  }).join('');
  try {
    MailApp.sendEmail({
      to: EMAIL_RIENG,
      subject: '[NGƯỜI DẪN ĐƯỜNG] ' + chuoi(d.ten),
      htmlBody: '<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px">' +
        '<p><b>Gợi ý của hệ thống: ' + escape_(g.chuoi) + '</b><br><span style="color:#6B6B6B">Chỉ để đọc nhanh, quyết định là của Duy.</span></p>' +
        '<table>' + dong + '</table>' +
        '<p style="margin-top:16px"><a href="' + layBang().getUrl() + '">Mở bảng đăng ký, trang tính Người Dẫn Đường</a></p></div>',
      replyTo: chuoi(d.email) || EMAIL_RIENG
    });
  } catch (loi) {
    ghiLoi('Không gửi được thư báo riêng: ' + loi, d);
  }
  baoTelegram('Đơn Người Dẫn Đường mới\n' + chuoi(d.ten) + ' · ' + chuoi(d.dienthoai) + ' · ' + chuoi(d.email) +
    '\nGợi ý: ' + g.chuoi +
    '\nNhóm: ' + chuoi(d.nhom) + ' · ' + chuoi(d.linh_vuc) +
    '\nKết quả: ' + chuoi(d.ket_qua).slice(0, 400) +
    '\nMuốn dẫn: ' + chuoi(d.muon_dan).slice(0, 300) +
    '\nĐọc đủ ở trang tính Người Dẫn Đường trong bảng đăng ký.', d);
}

/** Không có mã bot hoặc mã cuộc trò chuyện trong Cài đặt dự án thì bỏ qua, không báo lỗi. Mã không bao giờ nằm trong tệp này. */
function baoTelegram(chu, d) {
  var kho = PropertiesService.getScriptProperties();
  var ma = kho.getProperty(KHOA_TELEGRAM_MA), chat = kho.getProperty(KHOA_TELEGRAM_CHAT);
  if (!ma || !chat) return false;
  try {
    var r = UrlFetchApp.fetch('https://api.telegram.org/bot' + ma + '/sendMessage', {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ chat_id: chat, text: chu.slice(0, 4000) }),
      muteHttpExceptions: true
    });
    if (r.getResponseCode() !== 200) ghiLoi('Telegram trả mã ' + r.getResponseCode(), d || {});
    return r.getResponseCode() === 200;
  } catch (loi) {
    ghiLoi('Không gửi được Telegram: ' + String(loi).replace(ma, '***'), d || {});
    return false;
  }
}

/** Chạy tay một lần sau khi dán mã vào Cài đặt dự án: cấp quyền gọi ra ngoài và gửi thử một tin. */
function kiemTraTelegram() {
  var ok = baoTelegram('Thử nối Telegram từ nơi nhận đăng ký coachduynguyen.vn. Thấy tin này là đã nối xong.');
  Logger.log(ok ? 'Đã gửi tin thử. Mở Telegram xem có tin chưa.' : 'Chưa gửi được. Kiểm tra hai mục telegram_bot_token và telegram_chat_id trong Cài đặt dự án, rồi xem trang tính Lỗi.');
  return ok;
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
      to: d.nguon === 'master-club' ? THU_DOI_NGU + ',' + EMAIL_RIENG : THU_DOI_NGU,
      subject: '[Đăng ký] ' + (d.cap || c.ten_chuong_trinh) + ' · ' + chuoi(d.ten) + ' · ' + chuoi(d.dienthoai),
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
