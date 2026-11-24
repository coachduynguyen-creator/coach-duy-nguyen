// Trạm nhận đăng ký từ coachduynguyen.vn (công cụ, e-book) và ghi vào phần Liên hệ của Pancake CRM
// bằng khóa API chính thức của cửa hàng. Khóa cất ở Cloudflare dạng bí mật PANCAKE_KEY, không nằm trong kho mã.
// Thử ngày 12/10/2026: POST các ô ở ngoài cùng tới /crm/Contact/records?api_key=... thì Pancake ghi đúng.
const PANCAKE = "https://pos.pages.fm/api/v1/shops/430111447/crm/Contact/records";
const NGUON = ["https://coachduynguyen.vn", "https://www.coachduynguyen.vn"];
const O_CHO_PHEP = ["Name", "Phone", "Note", "chuc_danh", "uu_tien", "utm_source", "utm_medium", "utm_campaign", "utm_content", "url_page",
  // năm câu phân loại (cong_cu_ai.py PHAN_LOAI) và cột KH quan tâm ghi theo chủ đề
  "nganh_nghe", "cap_do", "tuoi_nghe", "day_co_phai_van_de_anh_chi_muon_uu_tien_giai_quyet_khong", "noi_dau_kh"];

function tra(origin, status, body) {
  return new Response(JSON.stringify(body), { status, headers: {
    "Access-Control-Allow-Origin": NGUON.includes(origin) ? origin : NGUON[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  } });
}

// ---- Phiếu tự đánh giá 7M (/api/danh-gia-7m), thêm 20/11/2026 ----
// Bí mật cần cất: RESEND_KEY (PANCAKE_KEY đã có). Biến thường: MAIL_FROM, MAIL_REPLY.
const TRANG = "https://coachduynguyen.vn";
const gioVN = () => new Date(Date.now() + 7 * 3600 * 1000);   // ngày theo giờ Việt Nam
const cat = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const thoat = t => t.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const b64url = t => { let b = ""; for (const x of new TextEncoder().encode(t)) b += String.fromCharCode(x); return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
function b64(buf) { let b = ""; const u = new Uint8Array(buf); for (let i = 0; i < u.length; i += 8192) b += String.fromCharCode(...u.subarray(i, i + 8192)); return btoa(b); }

async function danhGia7M(req, env, origin) {
  let d;
  try { d = JSON.parse((await req.text()).slice(0, 8000)); } catch (e) { return tra(origin, 400, { success: false }); }
  if (d.bay) return tra(origin, 200, { success: true });   // bẫy máy: trả ok mà không làm gì
  const ten = cat(d.ten, 100), sdt = cat(d.sdt, 20), email = cat(d.email, 120), a = cat(d.a, 28);
  if (ten.length < 2 || !/^(0\d{9}|\+?84\d{9})$/.test(sdt) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[012]{28}$/.test(a))
    return tra(origin, 400, { success: false });
  const NHAN_CT = { nguon: "Nguồn khách nhiều nhất", daiLy: "Bán qua đại lý", baoGia: "Từ hỏi tới báo giá", thuTien: "Từ đồng ý tới thu đủ tiền", nghiViec: "Số người nghỉ 12 tháng", luongCung: "Lương cứng", congCu: "Công cụ lưu khách", chiTieu: "Doanh số so với chỉ tiêu", chuChot: "Người chủ tự chốt" };
  const ct = {}; for (const x in NHAN_CT) { const v = cat(d.ct && d.ct[x], 80); if (v) ct[x] = v; }
  const congTy = cat(d.congTy, 120), nganh = cat(d.nganh, 120), soNguoiBan = cat(d.soNguoiBan, 60), doanhThu = cat(d.doanhThu, 40), nguoiCham = cat(d.nguoiCham, 80), kenh = cat(d.kenh, 80);
  const g = gioVN(), p2 = n => String(n).padStart(2, "0");
  const ngay = p2(g.getUTCDate()) + "/" + p2(g.getUTCMonth() + 1) + "/" + g.getUTCFullYear();
  const ma = "7M-" + p2(g.getUTCDate()) + p2(g.getUTCMonth() + 1) + String(g.getUTCFullYear()).slice(2) + "-" +
    Array.from(crypto.getRandomValues(new Uint8Array(4)), x => "abcdefghjkmnpqrstuvwxyz23456789"[x % 31]).join("");
  const tong = [...a].reduce((s, x) => s + +x, 0);
  const k = b64url(JSON.stringify({ hoTen: ten, congTy, nganh, soNguoiBan, doanhThu, nguoiCham, kenh, ngay, ma, a, ct }));
  const linkBaoCao = TRANG + "/danh-gia-phong-kinh-doanh/ket-qua/#k=" + k;
  const linkHoSo = TRANG + "/danh-gia-phong-kinh-doanh/ho-so-goi/#k=" + k;

  const pancake = async () => {
    const q = {
      Name: ten, Phone: sdt, url_page: cat(d.url_page, 500), nguon_khach_hang: ["Web Lead Magnet"],
      Note: ["Phiếu tự đánh giá 7M · Mã " + ma, "Email: " + email, "Công ty: " + (congTy || "không ghi"), "Ngành: " + nganh,
        "Số nhân viên kinh doanh: " + soNguoiBan, "Doanh thu tháng: " + (doanhThu || "không ghi"), "Kênh bán chính: " + (kenh || "không ghi"), "Người đánh giá: " + nguoiCham, ...Object.keys(ct).map(x => NHAN_CT[x] + ": " + ct[x]), "Tổng " + tong + "/56", "Hồ sơ gọi: " + linkHoSo].join("\n"),
    };
    for (const u of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) if (cat(d[u], 200)) q[u] = cat(d[u], 200);
    const r = await fetch(PANCAKE + "?api_key=" + env.PANCAKE_KEY, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(q) });
    const j = await r.json().catch(() => ({}));
    if (!j.success) throw new Error("pancake " + r.status);
  };
  const thu = async () => {
    const pdf = await fetch(TRANG + "/tai-lieu/gioi-thieu-mo-hinh-7m.pdf");
    const html = `<div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#222;max-width:560px">
<p>Chào anh/chị ${thoat(ten)},</p>
<p>Kết quả đánh giá phòng kinh doanh của anh chị đã sẵn sàng. Tổng điểm là ${tong}/56. Anh chị mở báo cáo ở đường dẫn dưới đây, trong báo cáo có nút tải bản PDF:</p>
<p><a href="${linkBaoCao}" style="display:inline-block;background:#111;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px">Mở báo cáo của anh chị</a></p>
<p>Thư này có đính kèm tài liệu giới thiệu mô hình 7M để anh chị đọc cùng lúc.</p>
<p>Đội ngũ sẽ gọi cho anh chị để cùng xem kết quả. Anh chị cần hỏi gì trước thì trả lời thư này.</p>
<p>Coach Duy Nguyễn</p></div>`;
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { "Authorization": "Bearer " + env.RESEND_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.MAIL_FROM, to: [email], reply_to: env.MAIL_REPLY, subject: "Kết quả đánh giá phòng kinh doanh của anh chị", html,
        attachments: pdf.ok ? [{ filename: "Giới thiệu mô hình 7M.pdf", content: b64(await pdf.arrayBuffer()) }] : [] }),
    });
    if (!r.ok) throw new Error("resend " + r.status);
  };
  const kq = await Promise.allSettled([pancake(), thu()]);
  kq.forEach((x, i) => { if (x.status === "rejected") console.error(["pancake", "thu"][i], String(x.reason)); });
  // Cả 2 lỗi thì khách chưa để lại được gì: báo lỗi để trang cho bấm lại. Một việc chạy được là đủ: Pancake có thì sales thấy, thư đi thì khách có báo cáo.
  if (kq.every(x => x.status === "rejected")) return tra(origin, 502, { success: false });
  return tra(origin, 200, { success: true, ma, k });
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    if (req.method === "OPTIONS") return tra(origin, 204, null);
    if (req.method !== "POST" || !NGUON.includes(origin)) return tra(origin, 403, { success: false });
    if (new URL(req.url).pathname === "/api/danh-gia-7m") return danhGia7M(req, env, origin);
    let vao;
    try { vao = JSON.parse((await req.text()).slice(0, 8000)); } catch (e) { return tra(origin, 400, { success: false }); }
    const d = (vao && vao.data) || vao || {};
    const data = {};
    for (const k of O_CHO_PHEP) if (typeof d[k] === "string" && d[k].length <= 2000) data[k] = d[k];
    if (!data.Name || !/^(0\d{9}|\+?84\d{9})$/.test(data.Phone || "")) return tra(origin, 400, { success: false });
    if (data.noi_dau_kh) data.noi_dau_kh = [data.noi_dau_kh];   // cột chọn nhiều của Pancake nhận danh sách
    // Khách từ công cụ và e-book: cột Nguồn khách hàng nhận danh sách, gửi chữ trơn thì Pancake báo lỗi 500 (thử ngày 26/10/2026). Master Club và Người dẫn đường không ghi.
    if (data.utm_medium === "cong-cu-ai" || data.utm_medium === "ebook") data.nguon_khach_hang = ["Web Lead Magnet"];
    // Phiếu 84, D3. Chưa triển khai: chờ Coach Duy tạo lựa chọn "Cổng thành viên" trong Pancake và duyệt lần gửi đầu
    if (data.utm_medium === "cong-thanh-vien") data.nguon_khach_hang = ["Cổng thành viên"];
    const url = PANCAKE + "?api_key=" + env.PANCAKE_KEY, dau = { "Content-Type": "application/json" };
    // Người đã đăng ký (trình duyệt giữ mã khách) thì cập nhật đúng khách cũ, không tạo khách trùng.
    // Mã không còn (Sales đã xoá) thì tạo mới như lần đầu.
    if (typeof vao.id === "string" && /^[0-9a-f-]{36}$/.test(vao.id)) {
      const r = await fetch(url, { method: "PUT", headers: dau, body: JSON.stringify({ record: { id: vao.id, ...data } }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.record && j.record.id === vao.id) return tra(origin, 200, { success: true, id: vao.id });
    }
    const r = await fetch(url, { method: "POST", headers: dau, body: JSON.stringify(data) });
    const j = await r.json().catch(() => ({}));
    const id = (j.record && j.record.id) || (j.data && j.data.record && j.data.record.id);
    return tra(origin, j.success ? 200 : 502, { success: j.success === true, id: id || null });
  },
};
