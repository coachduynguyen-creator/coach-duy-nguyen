# -*- coding: utf-8 -*-
"""landing.py: sinh trang riêng cho từng chương trình, dùng chung khung của
trang sales-team.

VÌ SAO CÓ TỆP NÀY, NGÀY 30/08/2026
Trang sales-team dựng bằng cách chép tay khung của trang founder-brand, và kéo
theo ba lỗi: chân trang còn tên chương trình cũ, mã còn mốc giá và biểu mẫu thanh
toán của trang kia, nhãn góc trái còn tên cũ. Máy kiểm ngôn ngữ không bắt được
loại lỗi đó. Nên từ đây trang mới sinh từ dữ liệu, không chép tay.

Khung lấy từ sales-team/index.html vì bản đó đã được dọn sạch phần riêng của
founder-brand. Muốn đổi thiết kế chung thì sửa ở đó rồi chạy lại.

    python3 landing.py

Trang sinh ra là BẢN MẪU. Chương trình chưa triển khai chi tiết nên trang không
có giá, không có lịch, không có lộ trình theo buổi. Mọi câu trên trang phải truy
được về NGF-17 hoặc chuong_trinh.py, không tự thêm.
"""
import io, os, re, json
import dinh_tu_ghep
from lib import BASE

GOC = os.path.dirname(os.path.abspath(__file__))
KHUNG = os.path.join(GOC, "sales-team", "index.html")


def co_anh(ten):
    """Đọc chiều ngang và chiều cao thật của tệp webp.

    Ngày 30/08/2026 tôi gõ tay 560x700 cho một ảnh ngang 1400x932. Thẻ ảnh lại
    không nằm trong khung .anh-khung, là chỗ duy nhất có object-fit, nên trình
    duyệt kéo ép ảnh cho vừa hai số tôi gõ và mặt người bị méo. Từ đây máy tự
    đọc, không ai gõ nữa.
    """
    d = io.open(os.path.join(GOC, "img", ten), "rb").read()
    i = d.find(b"VP8")
    loai = d[i:i + 4]
    if loai == b"VP8X":
        return int.from_bytes(d[i + 8:i + 11], "little") + 1, int.from_bytes(d[i + 11:i + 14], "little") + 1
    if loai == b"VP8L":
        n = int.from_bytes(d[i + 9:i + 14], "little")
        return (n & 0x3FFF) + 1, ((n >> 14) & 0x3FFF) + 1
    return (int.from_bytes(d[i + 14:i + 16], "little") & 0x3FFF,
            int.from_bytes(d[i + 16:i + 18], "little") & 0x3FFF)


def _o(tieu, muc):
    return ('<div>\n        <h3>%s</h3>\n        <ul>%s</ul>\n      </div>'
            % (tieu, "".join("<li>%s</li>" % x for x in muc)))


def than_trang(d):
    """Thân trang, dựng từ dữ liệu. Mọi câu đều lấy từ tài liệu đã ghi."""
    p = []
    d = dict(d)
    d["anh_r"], d["anh_c"] = co_anh(d["anh"])
    d["anh_vi"] = ' style="object-position:%s"' % d["anh_vi"] if d.get("anh_vi") else ""
    # mở đầu
    p.append('''<section class="hero" id="hero" aria-label="Giới thiệu chương trình">
  <div class="bao">
    <div class="hero-luoi">
      <div class="hero-chu">
        <span class="vien"><i></i>%(vien)s</span>
        <h1>%(h1a)s <span>%(h1b)s</span></h1>
        <p class="dan"><b>%(ten)s</b> %(dan)s</p>
        <ul class="hero-ket">
          <li class="tieu" style="padding-left:0">Chương trình nhắm tới</li>
          %(ket)s
        </ul>
        <div style="margin-top:30px"><a class="nut" href="#trao-doi">Trao đổi trước khi quyết</a></div>
      </div>
      <div class="hero-anh">
        <figure class="anh-khung"><img src="/img/%(anh)s" alt="%(alt)s" width="%(anh_r)s" height="%(anh_c)s"%(anh_vi)s loading="eager" decoding="async"></figure>
      </div>
    </div>
  </div>
</section>''' % dict(d, ket="\n          ".join(
        '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" '
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        '<path d="M20 6 9 17l-5-5"/></svg>%s</li>' % x for x in d["ket_hero"])))

    # vấn đề
    p.append('''<section class="phan nen" id="van-de">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Chỗ nghẽn</span>
      <h2>%s <span>%s</span></h2>
      <p class="dan">%s</p>
    </div>
    <div class="noi hien tre">%s</div>
    <div class="nhan-dang hien">
      <b>%s</b>
      <span>%s</span>
    </div>
  </div>
</section>''' % (d["vd_a"], d["vd_b"], d["vd_dan"],
                 "".join('<div><i>&ldquo;</i><p>%s</p></div>' % x for x in d["dau_hieu"]),
                 d["luan_diem"], d["luan_them"]))

    # cơ chế
    p.append('''<section class="phan" id="co-che">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Cơ chế</span>
      <h2>%s</h2>
      <p class="dan">%s</p>
    </div>
    <div class="ke sau hien tre">%s</div>
  </div>
</section>''' % (d["cc_h2"], d["cc_dan"], "\n      ".join(_o(t, m) for t, m in d["co_che"])))

    # cầm về
    p.append('''<section class="phan nen" id="cam-ve">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Kết quả</span>
      <h2>%s</h2>
      <p class="dan">Năm phần dưới đây phải được dùng trong công việc thật. Nhận đủ tài liệu mà không ai mở ra dùng thì không tính là hoàn thành.</p>
    </div>
    <div class="ke sau hien tre">%s</div>
  </div>
</section>''' % (d["kq_h2"], "\n      ".join(_o(t, [m]) for t, m in d["ket_qua"])))

    # phù hợp và không nhận
    p.append('''<section class="phan" id="ranh-gioi">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Ranh giới</span>
      <h2>Ai hợp, và chương trình không nhận việc gì</h2>
      <p class="dan">Duy ghi phần không nhận rõ ngang phần kết quả. Biết trước điều gì không có sẽ giúp bạn quyết đúng hơn.</p>
    </div>
    <div class="hop hien tre">
      <div class="co"><h3>Phù hợp nếu</h3><ul>%s</ul></div>
      <div class="chua"><h3>Chương trình không nhận</h3><ul>%s</ul></div>
    </div>
  </div>
</section>''' % ("".join("<li>%s</li>" % x for x in d["phu_hop"]),
                 "".join("<li>%s</li>" % x for x in d["khong_nhan"])))

    # trạng thái, thay cho phần giá
    p.append('''<section class="phan nen" id="trao-doi">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Tình trạng hiện tại</span>
      <h2>Chương trình đang được thiết kế, <span>chưa có lịch và chưa có giá.</span></h2>
      <p class="dan">Duy công bố phần đã chốt và không công bố phần chưa chốt. Hướng đi, đối tượng và kết quả nhắm tới đã rõ. Lộ trình theo buổi, công suất và mức đầu tư thì chưa, vì chúng chỉ chốt được sau khi chạy thử với vài doanh nghiệp thật.</p>
    </div>
    <div class="hop hien tre">
      <div class="co">
        <h3>Phần đã chốt</h3>
        <ul>%s</ul>
      </div>
      <div class="chua">
        <h3>Phần chưa chốt</h3>
        <ul>
          <li>Lộ trình chi tiết theo từng buổi, gồm học gì và làm gì giữa hai buổi.</li>
          <li>Thời lượng cuối cùng, và mỗi đợt nhận được bao nhiêu người.</li>
          <li>Mức đầu tư, cách thanh toán và những điều khoản đi kèm.</li>
          <li>Lịch mở đợt đầu tiên, chỉ chốt được sau khi chạy thử xong.</li>
        </ul>
      </div>
    </div>
    <div class="gia-ghi hien">
      <p><b>Nếu bạn đang gặp đúng chỗ nghẽn phía trên, cứ để lại vài dòng.</b> Duy sẽ trao đổi để xem có hợp không, và nếu chương trình này chưa phải thứ bạn cần lúc này thì Duy nói rõ vì sao và chỉ bạn bước hợp hơn.</p>
    </div>
    <div class="hien" style="margin-top:30px;text-align:center">
      <a class="nut" href="%s/lien-he.html">Đặt một buổi trao đổi</a>
    </div>
  </div>
</section>''' % ("".join("<li>%s</li>" % x for x in d["da_chot"]), BASE))

    # đọc thêm
    p.append('''<section class="phan" id="doc-them">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Đọc trước khi quyết</span>
      <h2>Cách Duy nghĩ về việc này, viết sẵn trên blog</h2>
      <p class="dan">Ba bài dưới đây nói đúng chỗ nghẽn mà chương trình này nhắm tới. Đọc xong bạn biết mình có cùng cách nhìn với Duy hay không, trước khi mất thời gian cho một buổi trao đổi.</p>
    </div>
    <div class="ke sau hien tre">%s</div>
  </div>
</section>''' % "\n      ".join(
        '<div>\n        <h3><a href="%s/bai-viet/%s">%s</a></h3>\n        <ul><li>%s</li></ul>\n      </div>'
        % (BASE, tep, tieu, mo) for tep, tieu, mo in d["bai"]))
    # hỏi đáp, đặt cuối vì phần lớn câu ở đây chỉ có nghĩa sau khi đã đọc phần trên
    p.append('''<section class="phan nen" id="hoi-dap">
  <div class="bao">
    <div class="dau-phan hien">
      <span class="nhan">Hỏi đáp</span>
      <h2>%s câu hay được hỏi nhất</h2>
    </div>
    <div class="faq hien" id="faq">%s</div>
  </div>
</section>''' % (d["so_hoi"], "".join(
        '\n      <div class="muc">'
        '<button type="button" aria-expanded="false"><b>%02d</b>'
        '<span>&ldquo;%s&rdquo;</span><i aria-hidden="true"></i></button>'
        '<div class="than"><div><p>%s</p></div></div></div>' % (i + 1, h, dap)
        for i, (h, dap) in enumerate(d["hoi_dap"]))))
    return "\n\n".join(p)


def dung_landing(d):
    k = io.open(KHUNG, encoding="utf-8").read()
    dau = k[:k.index("</head>")]
    head = k[k.index("<header"):k.index("</header>") + len("</header>")]
    chan = k[k.index("<footer"):]
    url = "%s/%s/" % (BASE, d["thu_muc"])

    dau = re.sub(r"<!-- BẢN NHÁP:[^>]*-->\n?", "", dau)
    dau = re.sub(r"<title>.*?</title>", "<title>%s | %s</title>" % (d["ten"], d["ten_vi"]), dau, flags=re.S)
    dau = re.sub(r'<meta name="description" content="[^"]*"',
                 '<meta name="description" content="%s"' % d["mo_ta"], dau)
    dau = re.sub(r'<link rel="canonical" href="[^"]*"', '<link rel="canonical" href="%s"' % url, dau)
    for k2, v in (("og:title", "%s | %s" % (d["ten"], d["ten_vi"])), ("og:description", d["mo_ta"]),
                  ("og:url", url), ("og:image", "%s/img/%s" % (BASE, d["anh"])),
                  ("twitter:image", "%s/img/%s" % (BASE, d["anh"]))):
        dau = re.sub(r'(<meta (?:property|name)="%s" content=")[^"]*"' % re.escape(k2), lambda m: m.group(1) + v + '"', dau)
    dau = re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>\s*', "", dau)
    ld = {"@context": "https://schema.org", "@type": "Course", "name": d["ten"],
          "alternateName": d["ten_vi"], "description": d["mo_ta"], "inLanguage": "vi", "url": url,
          "provider": {"@type": "Person", "name": "Coach Duy Nguyễn", "url": BASE + "/"},
          "author": {"@type": "Person", "name": "Coach Duy Nguyễn", "url": BASE + "/ve-toi.html"},
          "audience": {"@type": "Audience", "audienceType": d["cho_ai"]},
          "coursePrerequisites": d["phu_hop"][:4],
          "teaches": [t for t, _ in d["ket_qua"]]}
    hd = {"@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [{"@type": "Question", "name": h,
                          "acceptedAnswer": {"@type": "Answer", "text": dap}}
                         for h, dap in d["hoi_dap"]]}
    dau += ('<script type="application/ld+json">%s</script>'
            '<script type="application/ld+json">%s</script>\n</head>'
            % (json.dumps(ld, ensure_ascii=False), json.dumps(hd, ensure_ascii=False)))

    # Nhãn góc trái, thanh mục lục và nút đầu trang.
    # Ba chỗ này là nơi trang sales-team từng sót tên chương trình cũ, nên thay bằng
    # phép thế có kiểm chứng, không chép tay.
    head = re.sub(r'<span class="ten-hieu">[\s\S]*?</span>',
                  lambda m: '<span class="ten-hieu">%s<small>%s</small></span>' % (d["ten"], d["nhan_nho"]), head)
    head = re.sub(r'<nav class="nav-phan"[\s\S]*?</nav>',
                  lambda m: '<nav class="nav-phan" id="nav-phan" aria-label="Các phần của trang">'
                  '<a href="#van-de">Chỗ nghẽn</a> <a href="#co-che">Cơ chế</a> '
                  '<a href="#cam-ve">Kết quả</a> <a href="#ranh-gioi">Ranh giới</a> '
                  '<a href="#trao-doi">Tình trạng</a> <a href="#doc-them">Đọc thêm</a> '
                  '<a href="#hoi-dap">Hỏi đáp</a></nav>', head)

    chan = re.sub(r'<div class="chan-hieu">[\s\S]*?</div>',
                  lambda m: '<div class="chan-hieu"><b>%s</b><span>%s</span></div>' % (d["ten"], d["ten_vi"]), chan)
    chan = re.sub(r'<nav aria-label="Liên kết chân trang">[\s\S]*?</nav>',
                  lambda m: '<nav aria-label="Liên kết chân trang">'
                  '<a href="%s/">Trang chính</a>'
                  '<a href="%s/chuong-trinh/%s">Chương trình trên trang chính</a>'
                  '<a href="%s/chuong-trinh.html">Các chương trình khác</a>'
                  '<a href="%s/lien-he.html">Liên hệ</a></nav>'
                  % (BASE, BASE, d["trang_ct"], BASE, BASE), chan)

    ra = os.path.join(GOC, d["thu_muc"])
    os.makedirs(ra, exist_ok=True)
    tep = os.path.join(ra, "index.html")
    io.open(tep, "w", encoding="utf-8").write(
        dau + "\n" + head + "\n" + than_trang(d) + "\n" + chan)
    dinh_tu_ghep.chay(tep)
    return d["thu_muc"]
