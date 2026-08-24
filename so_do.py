# -*- coding: utf-8 -*-
"""Các sơ đồ trực quan. Bánh xe vẽ bằng SVG, các sơ đồ còn lại vẽ bằng HTML và CSS
để cỡ chữ luôn là cỡ thật, không bị thu nhỏ theo khung."""
import math

NANG_LUC_4 = [
    ("01", "Thương hiệu", "được tin cậy", "Đúng khách hiểu bạn làm gì, tin bạn làm được, và chủ động tìm tới."),
    ("02", "Tư vấn", "có trách nhiệm", "Bán bằng chẩn đoán và sự thật, kể cả khi sự thật là bạn nên nói không."),
    ("03", "Hệ thống", "cùng đội ngũ", "Kinh nghiệm trong đầu bạn thành kết quả rõ, người chịu trách nhiệm và một nhịp cải tiến."),
    ("04", "Kiến tạo", "cộng đồng", "Thành viên tạo giá trị cho nhau với nhau, không chỉ chảy một chiều từ bạn xuống."),
]

def _cung(cx, cy, ri, ro, a1, a2):
    """Đường viền một miếng bánh, góc tính bằng độ."""
    r1, r2 = math.radians(a1), math.radians(a2)
    x1o, y1o = cx + ro*math.cos(r1), cy + ro*math.sin(r1)
    x2o, y2o = cx + ro*math.cos(r2), cy + ro*math.sin(r2)
    x2i, y2i = cx + ri*math.cos(r2), cy + ri*math.sin(r2)
    x1i, y1i = cx + ri*math.cos(r1), cy + ri*math.sin(r1)
    lon = 1 if (a2 - a1) > 180 else 0
    return ("M%.1f %.1f A%.1f %.1f 0 %d 1 %.1f %.1f L%.1f %.1f A%.1f %.1f 0 %d 0 %.1f %.1f Z"
            % (x1o, y1o, ro, ro, lon, x2o, y2o, x2i, y2i, ri, ri, lon, x1i, y1i))

def banh_xe():
    cx = cy = 240; ri, ro = 132, 202; gap = 2.4
    mieng = []
    for i, (so, d1, d2, _mo) in enumerate(NANG_LUC_4):
        a1 = -90 + i*90 + gap/2
        a2 = -90 + (i+1)*90 - gap/2
        mieng.append('<path class="mieng" d="%s"></path>' % _cung(cx, cy, ri, ro, a1, a2))
        am = math.radians((a1 + a2) / 2); rm = (ri + ro) / 2
        tx, ty = cx + rm*math.cos(am), cy + rm*math.sin(am)
        mieng.append('<text class="so-mieng" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (tx, ty - 16, so))
        mieng.append('<text class="chu-mieng" x="%.1f" y="%.1f" text-anchor="middle">%s'
                     '<tspan x="%.1f" dy="1.25em">%s</tspan></text>' % (tx, ty + 8, d1, tx, d2))
    return """<div class="banh">
  <svg viewBox="0 0 480 480" role="img" aria-label="Bánh xe bốn năng lực của nhà sáng lập thế hệ mới">
    %s
    <circle class="loi-banh" cx="240" cy="240" r="118"></circle>
    <text class="chu-loi" x="240" y="222" text-anchor="middle">Next Gen</text>
    <text class="chu-loi" x="240" y="264" text-anchor="middle">Founder</text>
    <text class="chu-nen" x="240" y="298" text-anchor="middle">AI LÀ NĂNG LỰC NỀN</text>
  </svg>
  <p class="banh-ghi">AI là năng lực nền của cả bốn năng lực trên</p>
</div>""" % ("\n    ".join(mieng))

def bang_nang_luc():
    return '<div class="nl">%s</div>' % "".join(
        '<div class="hang"><div class="stt">%s</div><div><h4>%s %s</h4><p>%s</p></div></div>' % (so, d1, d2, mo)
        for so, d1, d2, mo in NANG_LUC_4)

def he_sinh_thai(p=""):
    """Khối chọn theo điều đang kẹt.

    Người xem chọn câu mô tả đúng chỗ mình đang kẹt, bảng bên cạnh hiện chương
    trình dành cho chỗ đó. Dữ liệu lấy thẳng từ chuong_trinh.py, không gõ lại,
    nên sửa một chỗ là cả trang đổi theo.
    """
    import chuong_trinh, html as H

    nut, bang = [], []
    for ten_nhom, phu in NHOM_HST:
        nut.append('<p class="hst-lan"><b>%s</b><span>%s</span></p>' % (ten_nhom, phu))
        for d in [x for x in chuong_trinh.CT if x["nhom"] == ten_nhom]:
            i = d["tep"].replace(".html", "")
            nut.append(
                '<button class="hst-ket" type="button" data-ct="%s" aria-controls="hst-%s">'
                '<span class="hst-cau">%s</span>'
                '<span class="hst-ten">%s%s</span></button>'
                % (i, i, H.escape(KET_HST[d["tep"]]), _sach(d["ten"]),
                   ' <i class="hst-cham" aria-hidden="true"></i>' if d.get("mo_ban") else ""))
            bang.append("""<article class="hst-bg" id="hst-%s"%s>
  <div class="hst-anh"><img src="%s%s" alt="%s" width="720" height="315" loading="lazy" decoding="async" style="%s"></div>
  <div class="hst-chu">
    <p class="hst-nl">%s</p>
    <h3>%s</h3>
    <p class="hst-en">%s</p>
    <p class="hst-tom">%s</p>
    <dl class="hst-so">
      <div><dt>Thời lượng</dt><dd>%s</dd></div>
      <div><dt>Hình thức</dt><dd>%s</dd></div>
      <div><dt>Trạng thái</dt><dd>%s</dd></div>
    </dl>
    <p class="hst-ai"><b>Dành cho</b> %s</p>
    <a class="nut nut-v" href="%schuong-trinh/%s">Xem chương trình <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</article>""" % (i, "" if d is chuong_trinh.CT[0] else " hidden",
                 p, d.get("anh", ""), H.escape(d.get("alt", "")), _neo(d.get("anh", "")),
                 d.get("nang_luc", ""), _sach(d.get("ten_vi", "")), _sach(d["ten"]),
                 d.get("tom", ""), _thoi_luong(d), _hinh_thuc(d),
                 "Đang mở bán" if d.get("mo_ban") else "Đang xây",
                 d.get("cho_ai", ""), p, d["tep"]))

    return ('<div class="hst2">'
            '<div class="hst-cot-ket">%s</div>'
            '<div class="hst-cot-bg">%s</div></div>'
            % ("".join(nut), "".join(bang)))


# Câu mô tả chỗ đang kẹt, viết từ phía người đọc, bằng lời họ nói ra miệng.
KET_HST = {
 "the-trusted-creator.html":
   "Tôi làm nghề giỏi, nhưng đăng bài mãi mà người ta vẫn không biết tôi giỏi cái gì.",
 "the-trusted-advisor.html":
   "Khách nghe tôi tư vấn xong vẫn do dự, và tôi không biết mình bỏ sót chỗ nào.",
 "founder-growth-system.html":
   "Việc quan trọng nào cũng phải qua tay tôi thì mới chạy.",
 "community-growth-system.html":
   "Khách mua xong là quan hệ dừng lại. Mỗi lần bán là mỗi lần bắt đầu từ đầu.",
 "cong-dong-thanh-vien.html":
   "Tôi học nhiều khoá rời rạc mà chưa cái nào thành thói quen trong công việc thật.",
 "diamond-founder-club.html":
   "Tôi cần ngồi cùng những người đã đi xa hơn, không cần thêm một lớp học nữa.",
 "co-van-rieng.html":
   "Tôi đang có một quyết định lớn, cần đưa ra bàn với một người ngoài cuộc.",
 "giai-phap-doanh-nghiep.html":
   "Cả đội ngũ tôi cần cùng xây một hệ thống, không phải mình tôi đi học rồi về kể lại.",
 "cong-dong-mo.html":
   "Tôi mới nghe tới Next Gen Founder, muốn xem thử xem có hợp mình không đã.",
 "founder-growth-system-lab.html":
   "Tôi học xong hệ thống rồi, mà về công ty vẫn chưa chạy thật được lần nào.",
}

# Điểm neo riêng cho từng ảnh, đọc từ vị trí mặt trên ảnh gốc.
# Số thứ hai là phần trăm chiều cao chỗ đặt mặt người. Số thứ ba là mức phóng to,
# chỉ dùng cho ảnh có chữ trên màn chiếu cần đẩy ra khỏi khung.
ANH_NEO = {
    "img/cd-giang-slide.webp": ("34% 40%", 1.22),   # có chữ slide, phóng để đẩy chữ ra
    "img/cd-workshop.webp":    ("62% 42%", 1.0),
    "img/cd-dung-lop.webp":    ("50% 32%", 1.0),
    "img/founder-nu-1.webp":   ("50% 11%", 1.0),    # ảnh đứng, mặt rất cao
    "img/cd-san-khau.webp":    ("50% 22%", 1.0),
    "img/founder-nam-1.webp":  ("50% 21%", 1.0),
    "img/cd-chan-dung.webp":   ("50% 17%", 1.0),
    "img/founder-nam-2.webp":  ("50% 40%", 1.0),
}

NHOM_HST = [
    ("Bốn năng lực", "Luyện đúng năng lực đang thiếu"),
    ("Đồng hành",    "Ở lại đủ lâu để thành thói quen"),
    ("Riêng",        "Khi việc đủ lớn để cần phạm vi riêng"),
]

def _neo(anh):
    """Điểm neo và mức phóng cho một ảnh cụ thể."""
    vi, ph = ANH_NEO.get(anh, ("50% 30%", 1.0))
    r = "object-position:%s;transform-origin:%s" % (vi, vi)
    return r + (";transform:scale(%s)" % ph if ph != 1.0 else ";transform:none")

def _sach(s):
    """Bỏ dấu cách không ngắt, dùng khi cần chuỗi thuần."""
    return s.replace("&nbsp;", " ")

def _thoi_luong(d):
    h = _sach(d.get("hinh_thuc", ""))
    for m in ("30 ngày", "90 ngày", "bốn tháng", "theo năm", "4 đến 6 buổi"):
        if m in h:
            return {"4 đến 6 buổi": "4 tới 6 buổi", "theo năm": "Theo năm"}.get(m, m.capitalize())
    return "Xét mời"

def _hinh_thuc(d):
    """Câu đầu của mô tả hình thức, bỏ phần thời lượng vì ô bên cạnh đã nói rồi."""
    h = _sach(d.get("hinh_thuc", "")).split(".")[0].strip()
    for m in ("30 ngày, ", "90 ngày. ", "90 ngày, "):
        if h.startswith(m):
            h = h[len(m):]
    return h[0].upper() + h[1:] if h else h



CHANG_TTC = [
    ("Chặng 1", "Định vị", "Làm rõ lãnh địa chuyên môn và luận điểm, để thị trường nhớ đúng bạn vì một giá trị."),
    ("Chặng 2", "Chất liệu", "Biến công việc thật thành kho câu chuyện dùng được lâu dài, thay vì chờ cảm hứng."),
    ("Chặng 3", "Hiện diện", "Luyện cách diễn đạt qua video và các định dạng hợp với con người bạn."),
    ("Chặng 4", "Nhịp", "Thiết lập nhịp sản xuất một người vận hành được, có AI làm phần lặp lại."),
    ("Chặng 5", "Đường về khách", "Tạo tài sản thu thông tin và đo tín hiệu dẫn tới cuộc trao đổi với đúng người."),
]

def chang_5():
    o = "".join('<div class="chang"><span class="ch-so">%s</span><b>%s</b><p>%s</p></div>' % c for c in CHANG_TTC)
    return '<div class="duong-chang">%s</div>' % o

QUY_DAO_SVG = """<svg viewBox="0 0 480 480" role="img" aria-label="Sơ đồ năm vòng quỹ đạo niềm tin quanh khách đúng">
  <circle class="vong" data-i="1" cx="240" cy="240" r="212" tabindex="0" role="button" aria-label="Vòng 1, lan toả"></circle>
  <circle class="vong" data-i="2" cx="240" cy="240" r="178" tabindex="0" role="button" aria-label="Vòng 2, đúng người"></circle>
  <circle class="vong" data-i="3" cx="240" cy="240" r="144" tabindex="0" role="button" aria-label="Vòng 3, giữ liên lạc"></circle>
  <circle class="vong" data-i="4" cx="240" cy="240" r="110" tabindex="0" role="button" aria-label="Vòng 4, nuôi dưỡng"></circle>
  <circle class="vong" data-i="5" cx="240" cy="240" r="76" tabindex="0" role="button" aria-label="Vòng 5, chọn bước"></circle>
  <circle class="tam" cx="240" cy="240" r="56"></circle>
  <text class="nhan-v" data-i="1" x="240" y="35" text-anchor="middle">1 · Lan toả</text>
  <text class="nhan-v" data-i="2" x="240" y="69" text-anchor="middle">2 · Đúng người</text>
  <text class="nhan-v" data-i="3" x="240" y="103" text-anchor="middle">3 · Giữ liên lạc</text>
  <text class="nhan-v" data-i="4" x="240" y="137" text-anchor="middle">4 · Nuôi dưỡng</text>
  <text class="nhan-v" data-i="5" x="240" y="171" text-anchor="middle">5 · Chọn bước</text>
  <text class="nhan-t" x="240" y="230" text-anchor="middle">Khách</text>
  <text class="nhan-t" x="240" y="262" text-anchor="middle">đúng</text>
</svg>
<div class="qd-chip" role="group" aria-label="Chọn vòng">
  <button type="button" data-i="1" aria-pressed="false">1 Lan toả</button>
  <button type="button" data-i="2" aria-pressed="false">2 Đúng người</button>
  <button type="button" data-i="3" aria-pressed="false">3 Giữ liên lạc</button>
  <button type="button" data-i="4" aria-pressed="false">4 Nuôi dưỡng</button>
  <button type="button" data-i="5" aria-pressed="false">5 Chọn bước</button>
</div>"""

QUY_DAO_BANG = """<div class="qd-bang" aria-live="polite">
  <span class="nhan-vong" id="qd-nhan">Vòng 1 · Lan toả</span>
  <h3 id="qd-tit">Người ta gặp bạn lần đầu</h3>
  <p id="qd-mo">Đưa cách nghĩ của mình tới một nhóm rộng, chưa cần ai để lại thông tin và chưa mời ai làm gì.</p>
  <div class="qd-hang">
    <div><b>Duy làm gì</b><span id="qd-lam">Nội dung dễ chia sẻ, nhận lời mời nói chuyện, hợp tác với người cùng nhóm khách.</span></div>
    <div><b>Dấu hiệu đi tiếp</b><span id="qd-dau">Đúng nhóm người bắt đầu xuất hiện trong danh sách người xem mới.</span></div>
    <div><b>Chưa làm lúc này</b><span id="qd-chua">Chưa mời mua, chưa xin thông tin, chưa nói về chương trình.</span></div>
  </div>
</div>"""

def quy_dao():
    return """<div class="qd hien">
  <div class="qd-ve">
    <div class="qd-thanh"><span class="cham" aria-hidden="true"></span><span class="cham" aria-hidden="true"></span><span class="cham" aria-hidden="true"></span><span class="ten-ve">Quỹ đạo niềm tin · bấm vào từng vòng</span></div>
    %s
  </div>
  %s
</div>""" % (QUY_DAO_SVG, QUY_DAO_BANG)
