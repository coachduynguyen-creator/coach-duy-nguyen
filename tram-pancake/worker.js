// Trạm nhận đăng ký từ coachduynguyen.vn (công cụ, e-book) và ghi vào phần Liên hệ của Pancake CRM
// bằng khóa API chính thức của cửa hàng. Khóa cất ở Cloudflare dạng bí mật PANCAKE_KEY, không nằm trong kho mã.
// Thử ngày 12/10/2026: POST các ô ở ngoài cùng tới /crm/Contact/records?api_key=... thì Pancake ghi đúng.
const PANCAKE = "https://pos.pages.fm/api/v1/shops/430111447/crm/Contact/records";
const NGUON = ["https://coachduynguyen.vn", "https://www.coachduynguyen.vn"];
const O_CHO_PHEP = ["Name", "Phone", "Note", "chuc_danh", "uu_tien", "utm_source", "utm_medium", "utm_campaign", "utm_content", "url_page"];

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
    if (!data.Name || !/^\+?\d{9,12}$/.test(data.Phone || "")) return tra(origin, 400, { success: false });
    const r = await fetch(PANCAKE + "?api_key=" + env.PANCAKE_KEY, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    const j = await r.json().catch(() => ({}));
    return tra(origin, j.success ? 200 : 502, { success: j.success === true });
  },
};
