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

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    if (req.method === "OPTIONS") return tra(origin, 204, null);
    if (req.method !== "POST" || !NGUON.includes(origin)) return tra(origin, 403, { success: false });
    let vao;
    try { vao = JSON.parse((await req.text()).slice(0, 8000)); } catch (e) { return tra(origin, 400, { success: false }); }
    const d = (vao && vao.data) || vao || {};
    const data = {};
    for (const k of O_CHO_PHEP) if (typeof d[k] === "string" && d[k].length <= 2000) data[k] = d[k];
    if (!data.Name || !/^(0\d{9}|\+?84\d{9})$/.test(data.Phone || "")) return tra(origin, 400, { success: false });
    if (data.noi_dau_kh) data.noi_dau_kh = [data.noi_dau_kh];   // cột chọn nhiều của Pancake nhận danh sách
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
