# -*- coding: utf-8 -*-
"""Các sơ đồ trực quan. Bánh xe vẽ bằng SVG, các sơ đồ còn lại vẽ bằng HTML và CSS
để cỡ chữ luôn là cỡ thật, không bị thu nhỏ theo khung."""
import math

NANG_LUC_4 = [
    ("01", "Thương hiệu", "được tin cậy", "Đúng khách hiểu bạn làm gì, tin bạn làm được, và chủ động tìm tới."),
    ("02", "Tư vấn", "có trách nhiệm", "Bán bằng chẩn đoán và sự thật, kể cả khi sự thật là bạn nên nói không."),
    ("03", "Hệ thống", "cùng đội ngũ", "Kinh nghiệm trong đầu bạn thành kết quả rõ, người chịu trách nhiệm và một nhịp cải tiến."),
    ("04", "Kiến tạo", "cộng đồng", "Giá trị được tạo ra giữa các thành viên với nhau, không chỉ chảy một chiều từ bạn xuống."),
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
    """Một nguồn, ba nhánh. Vẽ bằng HTML và CSS, không dùng SVG."""
    nhom = [
        ("Bốn năng lực", "Luyện từng năng lực khi bạn biết mình thiếu gì",
         [("The Trusted Creator", "chuong-trinh/the-trusted-creator.html"),
          ("The Trusted Advisor", "chuong-trinh/the-trusted-advisor.html"),
          ("Founder Growth System", "chuong-trinh/founder-growth-system.html"),
          ("Community Growth System", "chuong-trinh/community-growth-system.html")]),
        ("Đồng hành", "Ở lại đủ lâu để thay đổi thành thói quen",
         [("Cộng đồng Thành viên", "chuong-trinh/cong-dong-thanh-vien.html"),
          ("Diamond Founder Club", "chuong-trinh/diamond-founder-club.html")]),
        ("Riêng", "Khi quyết định đủ lớn để cần một phạm vi riêng",
         [("Cố vấn riêng", "chuong-trinh/co-van-rieng.html"),
          ("Giải pháp doanh nghiệp", "chuong-trinh/giai-phap-doanh-nghiep.html")]),
    ]
    cot = []
    for ten, phu, muc in nhom:
        li = "".join('<a href="%s%s">%s</a>' % (p, h, t) for t, h in muc)
        cot.append('<div class="hst-nhom"><b>%s</b><p>%s</p><div class="hst-muc">%s</div></div>' % (ten, phu, li))
    return """<div class="hst">
  <div class="hst-nguon"><span>Bạn và điều bạn đang kẹt</span></div>
  <div class="hst-than" aria-hidden="true"></div>
  <div class="hst-thanh" aria-hidden="true"></div>
  <div class="hst-cot">%s</div>
</div>""" % "".join(cot)

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
    <div><b>Tôi làm gì</b><span id="qd-lam">Nội dung dễ chia sẻ, nhận lời mời nói chuyện, hợp tác với người cùng tệp khách.</span></div>
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
