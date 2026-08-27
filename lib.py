# -*- coding: utf-8 -*-
"""Khung dựng website Coach Duy Nguyễn. Sửa BASE khi đổi sang tên miền riêng."""
import os, html, json, re

BASE = "https://coachduynguyen.vn"
# Trang Cộng đồng nay là trang con của chính tên miền này, không còn kho riêng.
CONG_DONG = BASE + "/cong-dong/"
CO_MAY = "https://coachduynguyen-creator.github.io/co-may-noi-dung/"
PHIEU = "https://coachduynguyen-creator.github.io/co-may-noi-dung/phieu.html"
EMAIL = "nextstepacademyvietnam@gmail.com"
# Trang bán The Trusted Creator đang dựng ở ~/Codex_Projects/trusted-creator, chưa đăng.
# Khi đăng xong, điền địa chỉ vào đây, chạy lại dung.py là mọi nút tự trỏ đúng chỗ.
TTC_LANDING = ""
YOUTUBE = "https://www.youtube.com/@coachduynguyen"
TIKTOK = "https://www.tiktok.com/@coachduynguyenofficial"
VER = "20260829h"   # tăng số này mỗi lần sửa style.css hoặc site.js

# Ảnh hiện khi ai đó dán đường dẫn trang lên Facebook, Zalo, LinkedIn hoặc gửi
# trong tin nhắn. Trang nào có ảnh lớn riêng thì lấy đúng ảnh đó, trang nào
# không có thì rơi về ảnh này. Thiếu thẻ og:image thì mọi liên kết chia sẻ đều
# hiện một ô trắng, đó là lỗi tốn người xem nhất trong nhóm thẻ chia sẻ.
ANH_CHIA_SE = "img/cd-workshop.webp"

# Ngày sửa gần nhất của phần nội dung tĩnh. Dùng cho thẻ lastmod trong sitemap.
# Máy tìm kiếm và bộ trích của AI đều ưu tiên nội dung mới, nên phải khai thật.
# Tăng ngày này khi sửa nội dung đáng kể, đừng để nó tự nhảy theo ngày dựng,
# vì lastmod nhảy mỗi lần dựng lại là tín hiệu giả và bị bỏ qua.
NGAY_SUA = "2026-08-27"

# (tệp, tên hiện trên menu, mô tả ngắn trong menu con)
CT_MENU = [
    ("chuong-trinh/the-trusted-creator.html", "The Trusted Creator 30 Days", "Xây thương hiệu cá nhân được tin trong 30 ngày"),
    ("chuong-trinh/the-trusted-advisor.html", "The Trusted Advisor", "Nâng chất lượng cuộc tư vấn, bán bằng chẩn đoán"),
    ("chuong-trinh/founder-growth-system.html", "Founder Growth System", "Hệ thống tăng trưởng cùng đội ngũ"),
    ("chuong-trinh/community-growth-system.html", "Community Growth System", "Hệ thống tăng trưởng từ cộng đồng"),
    ("SEP", "", ""),
    ("chuong-trinh/cong-dong-mo.html", "Cộng đồng Mở", "Cửa vào, không mất phí nhưng có sàng lọc"),
    ("chuong-trinh/cong-dong-thanh-vien.html", "Cộng đồng Thành viên", "Luyện đủ bốn năng lực suốt một năm"),
    ("chuong-trinh/diamond-founder-club.html", "Diamond Founder Club", "Cộng đồng cao cấp, theo lời mời"),
    ("chuong-trinh/founder-growth-system-lab.html", "Founder Growth System Lab", "Chạy thử một luồng thật, 8 tới 12 tuần"),
    ("chuong-trinh/co-van-rieng.html", "Cố vấn riêng", "Bốn tháng một kèm một, nhận rất giới hạn"),
    ("chuong-trinh/giai-phap-doanh-nghiep.html", "Giải pháp doanh nghiệp", "90 ngày xây hệ thống tăng trưởng"),
    ("SEP", "", ""),
    ("chuong-trinh.html", "Xem tất cả chương trình", ""),
]

MENU = [
    ("ve-toi.html", "Về Duy", None),
    ("chuong-trinh.html", "Chương trình", CT_MENU),
    ("phuong-phap.html", "Phương pháp", None),
    ("blog.html", "Blog", None),
    ("sach.html", "Sách và tài liệu", None),
    ("podcast.html", "Podcast", None),
    ("lien-he.html", "Liên hệ", None),
]

# Logo chính thức của Coach Duy Nguyễn: khiên chia bốn ô, chữ D và chữ N.
# Là hàm chứ không phải hằng số vì trang trong thư mục con cần tiền tố ../.
def dau_hieu(p=""):
    return ('<img class="dn" src="%simg/logo-dn.webp" alt="" width="260" height="301" '
            'decoding="async">' % p)

IC_THU = ('<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"></rect>'
          '<path d="M3 7l9 6.5L21 7"></path></svg>')

def dd(h, p=""):
    """Đường dẫn tương đối. p là tiền tố ../ nếu trang nằm trong thư mục con."""
    if h.startswith("http"): return h
    return p + h

def nav(active, p=""):
    ra = []
    for h, t, con in MENU:
        on = ' class="on"' if (h == active or (con and active.startswith("chuong-trinh"))) else ''
        if con:
            muc = []
            for ch, ct, cm in con:
                if ch == "SEP":
                    muc.append('<div class="vach-con"></div>')
                else:
                    mo = ('<em>%s</em>' % cm) if cm else ''
                    muc.append('<a href="%s">%s%s</a>' % (dd(ch, p), ct, mo))
            ra.append('<span class="co-con"><a href="%s"%s>%s<i class="mui" aria-hidden="true"></i></a>'
                      '<div class="menu-con"><div>%s</div></div></span>'
                      % (dd(h, p), on, t, "".join(muc)))
        else:
            ra.append('<a href="%s"%s>%s</a>' % (dd(h, p), on, t))
    links = "".join(ra)

    # Menu trên máy nhỏ. Trước đây mười mục chương trình mở sẵn, cộng các mục
    # còn lại thành hai mươi hai dòng, dài hơn màn hình điện thoại nên không
    # cuộn tới cuối được. Nay gấp phần chương trình lại bằng thẻ details, ai
    # cần mới bấm mở. Không cần thêm mã chạy nào.
    nho = []
    for h, t, con in MENU:
        on = ' class="on"' if h == active else ''
        if not con:
            nho.append('<a href="%s"%s>%s</a>' % (dd(h, p), on, t))
            continue
        muc = ['<a class="con" href="%s">Tất cả chương trình</a>' % dd(h, p)]
        for ch, ct, cm in con:
            if ch == "SEP" or ch == h: continue
            muc.append('<a class="con" href="%s">%s</a>' % (dd(ch, p), ct))
        nho.append('<details class="gap"%s><summary>%s</summary>%s</details>'
                   % (" open" if h == active else "", t, "".join(muc)))
    menu_nho = "".join(nho)

    cta = ('<a class="nut nut-v nut-nho nav-cta" href="%s">'
           'Cộng đồng NGF <span class="mt" aria-hidden="true">&rarr;</span></a>' % CONG_DONG)
    return """<nav id="nav">
  <div class="nav-in">
    <a class="logo" href="%s" aria-label="Coach Duy Nguyễn, trang chủ">%s<span><b>Coach Duy Nguyễn</b><i>Next Gen Founder</i></span></a>
    <div id="nav-links">%s</div>
    %s
    <button id="mo-menu" type="button" aria-expanded="false" aria-controls="menu-nho" aria-label="Mở menu"><span></span><span></span><span></span></button>
  </div>
  <div id="menu-nho">%s<a class="nut nut-v" href="%s">Cộng đồng NGF <span class="mt" aria-hidden="true">&rarr;</span></a></div>
  <div id="tien"></div>
</nav>""" % (dd("index.html", p), dau_hieu(p), links, cta, menu_nho, CONG_DONG)

def khoi_cuoi(p=""):
    """Khối cuối trang: ba lối đi. Có trên mọi trang."""
    return """<section class="cuoi" id="buoc-tiep">
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Bước tiếp theo</p>
      <h2>Người Duy thấy đi được xa thường bắt đầu bằng một việc rất nhỏ</h2>
      <p><span class="nhan">Không phải bằng một quyết định lớn.</span> Ba lối dưới đây đều là một việc như vậy, đủ nhỏ để làm xong trong tuần này. Bạn cứ đi chậm cũng được, Duy không giục ai.</p>
    </div>
    <div class="ba-loi tre hien">
      <article class="loi vang">
        <span class="so">Lối 01 · Đi cùng nhau</span>
        <h3>Vào Cộng đồng Next Gen Founder</h3>
        <p>Nơi nhà sáng lập luyện bốn năng lực ngay trong công việc thật, theo nhịp đều, bên cạnh những người hiểu chuyện mình đang gặp. Điền biểu mẫu hai phút, đội ngũ Next Gen Founder sẽ trao đổi để xem bạn có hợp không. Nếu chưa phải lúc, Duy và đội ngũ sẽ chỉ bạn bước hợp hơn.</p>
        <a class="nut nut-toi" href="%s">Đăng ký danh sách chờ <span class="mt" aria-hidden="true">&rarr;</span></a>
      </article>
      <article class="loi">
        <span class="so">Lối 02 · Đọc trước đã</span>
        <h3>Nhận Thư Next Gen Founder</h3>
        <p>Mỗi tuần một lá thư ngắn: một điểm nghẽn thật của người sáng lập, cách Duy nhìn nó, và một bước bạn làm được ngay trong tuần. Không quảng cáo, không bán hàng trong thư.</p>
        <form class="bt-form" novalidate>
          <input type="email" name="email" placeholder="Thư điện tử của bạn" aria-label="Thư điện tử của bạn" required>
          <button class="nut nut-v" type="submit">Đăng ký nhận thư</button>
        </form>
        <p class="bt-xong">Cảm ơn bạn. Ứng dụng thư vừa mở với nội dung soạn sẵn, bấm Gửi là xong.</p>
        <p class="bt-loi">Địa chỉ thư chưa đúng. Bạn kiểm lại giúp Duy.</p>
      </article>
      <article class="loi">
        <span class="so">Lối 03 · Hỏi thẳng</span>
        <h3>Liên hệ với Duy</h3>
        <p>Chưa rõ mình đang kẹt ở đâu thì làm phiếu chẩn đoán bảy phút trước. Muốn mời nói chuyện, hợp tác truyền thông hay hỏi về cố vấn riêng thì vào trang liên hệ, ở đó có đúng bốn cửa.</p>
        <a class="nut nut-vien" href="%s">Xem cách liên hệ <span class="mt" aria-hidden="true">&rarr;</span></a>
      </article>
    </div>
  </div>
</section>""" % (CONG_DONG, dd("lien-he.html", p))

def footer(p=""):
    ct_links = "".join('<a href="%s">%s</a>' % (dd(h, p), t) for h, t, _ in
                       [("chuong-trinh/the-trusted-creator.html", "The Trusted Creator", None),
                        ("chuong-trinh/the-trusted-advisor.html", "The Trusted Advisor", None),
                        ("chuong-trinh/founder-growth-system.html", "Founder Growth System", None),
                        ("chuong-trinh/community-growth-system.html", "Community Growth System", None),
                        ("chuong-trinh.html", "Xem tất cả", None)])
    return """<footer>
  <div class="bd ct">
    <div class="ct-gioi">
      <a class="logo" href="%s" aria-label="Coach Duy Nguyễn">%s<span><b>Coach Duy Nguyễn</b><i>Next Gen Founder</i></span></a>
      <p>Người cố vấn đi cùng nhà sáng lập thế hệ mới. Đi trước vài chặng, soi đúng, chỉ đường, giữ chuẩn, rồi trả lại quyền tự chủ.</p></p>
    </div>
    <div class="ct-cot">
      <div>
        <b>Chương trình</b>
        %s
      </div>
      <div>
        <b>Nội dung</b>
        <a href="%s">Blog</a><a href="%s">Phương pháp</a><a href="%s">Sách và tài liệu</a><a href="%s">Podcast</a><a href="%s">Câu chuyện học viên</a>
      </div>
      <div>
        <b>Đi tiếp</b>
        <a href="%s">Cộng đồng Next Gen Founder</a>
        <a href="%s" target="_blank" rel="noopener">Phiếu chẩn đoán 7 phút</a>
        <a href="%s" target="_blank" rel="noopener">Cỗ máy Nội dung Một người</a>
        <a href="%s">Về Duy</a><a href="%s">Liên hệ</a>
      </div>
    </div>
  </div>
  <div class="bd ct-cuoi">
    <span>Next Gen Founder · Coach Duy Nguyễn · <a href="mailto:%s">%s</a></span>
    <span>Nội dung trên trang thuộc về Coach Duy Nguyễn</span>
  </div>
</footer>""" % (dd("index.html", p), dau_hieu(p), ct_links, dd("blog.html", p), dd("phuong-phap.html", p),
                dd("sach.html", p), dd("podcast.html", p), dd("cau-chuyen-hoc-vien.html", p), CONG_DONG, PHIEU, CO_MAY,
                dd("ve-toi.html", p), dd("lien-he.html", p), EMAIL, EMAIL)

JSONLD_NGUOI = json.dumps({
    "@context": "https://schema.org", "@type": "Person",
    "name": "Coach Duy Nguyễn", "alternateName": "Duy Nguyễn",
    "jobTitle": "Người cố vấn cho nhà sáng lập",
    "description": "Người cố vấn đi cùng nhà sáng lập thế hệ mới. Giúp người chủ biến uy tín cá nhân thành hệ thống mà đội ngũ cùng vận hành.",
    "url": BASE + "/",
    "knowsAbout": ["Thương hiệu nhà sáng lập", "Tư vấn có trách nhiệm", "Hệ thống tăng trưởng",
                   "Kiến tạo cộng đồng", "CDN Trust Orbit", "Next Gen Founder"],
}, ensure_ascii=False)

# Next Step Group là pháp nhân đứng sau các chương trình. Khai riêng thành một
# thực thể để máy tìm kiếm và bộ trả lời của AI nối được người với tổ chức, thay
# vì chỉ thấy một cái tên người trôi nổi.
TO_CHUC = {
    "@type": "Organization", "@id": BASE + "/#to-chuc",
    "name": "Next Step Group", "alternateName": "NSG",
    "url": BASE + "/",
    "description": "Đơn vị phát triển hệ sinh thái Next Gen Founder, đào tạo và cố vấn "
                   "cho nhà sáng lập doanh nghiệp dịch vụ.",
    "founder": {"@id": BASE + "/#duy"},
    "email": EMAIL,
    "areaServed": "VN",
    "sameAs": [YOUTUBE, TIKTOK],
}

GOC = os.path.dirname(os.path.abspath(__file__))

def trang(ten_tep, tieu_de, mo_ta, than, active, jsonld=None, lop_body=""):
    sau = "/" in ten_tep
    p = "../" if sau else ""
    url = BASE + "/" + ten_tep
    doc = """<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<meta name="description" content="%s">
<link rel="canonical" href="%s">
<meta property="og:type" content="{OG_LOAI}">
<meta property="og:site_name" content="Coach Duy Nguyễn">
<meta property="og:locale" content="vi_VN">
<meta property="og:title" content="%s">
<meta property="og:description" content="%s">
<meta property="og:url" content="%s">
<meta name="twitter:card" content="summary_large_image">
{OG_ANH}
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="%sassets/style.css?v={VER}">
{PRELOAD}
<script>if(location.search.indexOf('static=1')>-1)document.documentElement.classList.add('noanim');</script>
<script type="application/ld+json">%s</script>
</head>
<body%s>
%s
%s
%s
%s
<script src="%sassets/site.js?v={VER}"></script>
</body>
</html>""" % (html.escape(tieu_de), html.escape(mo_ta), url, html.escape(tieu_de), html.escape(mo_ta), url,
              p, jsonld or JSONLD_NGUOI, (' class="%s"' % lop_body) if lop_body else "",
              nav(active, p), than, khoi_cuoi(p), footer(p), p)
    doc = doc.replace("{VER}", VER)
    m = re.search(r'<div class="(?:hero-nen|tran-nen)"[^>]*><img src="([^"]+)"', doc)
    doc = doc.replace("{PRELOAD}", ('<link rel="preload" as="image" href="%s" fetchpriority="high">' % m.group(1)) if m else "")

    # Bài viết là bài viết, còn lại là trang. Facebook và các bộ đọc dùng thẻ này
    # để biết nên hiện ngày đăng và tên tác giả hay không.
    doc = doc.replace("{OG_LOAI}", "article" if ten_tep.startswith("bai-viet/") else "website")

    # Ảnh lớn của chính trang đó, không có thì lấy ảnh mặc định. Địa chỉ phải
    # đầy đủ cả tên miền, vì bộ đọc của Facebook không hiểu đường dẫn tương đối.
    ma = re.search(r'<div class="(?:hero-nen|tran-nen|bai-anh)"[^>]*>\s*<img src="([^"]+)"(?:[^>]*?alt="([^"]*)")?', doc)
    nguon_anh = ma.group(1) if ma else (p + ANH_CHIA_SE)
    mo_ta_anh = (ma.group(2) if (ma and ma.group(2)) else tieu_de)
    dia_chi_anh = BASE + "/" + nguon_anh.replace("../", "")
    doc = doc.replace("{OG_ANH}",
        '<meta property="og:image" content="%s">\n'
        '<meta property="og:image:alt" content="%s">\n'
        '<meta name="twitter:image" content="%s">' % (dia_chi_anh, html.escape(mo_ta_anh), dia_chi_anh))
    duong = os.path.join(GOC, ten_tep)
    os.makedirs(os.path.dirname(duong), exist_ok=True) if sau else None
    open(duong, "w", encoding="utf-8").write(doc)
    return ten_tep

# Font máy chữ viết hoa kèm giãn chữ chỉ đọc tốt tới khoảng 20 ký tự tiếng Việt.
# Dài hơn thì dấu bị chật và mắt phải dò từng chữ. Hàm này tự chọn lớp theo độ dài,
# nên nội dung thêm về sau cũng tự đúng, không phải nhớ.
NGUONG_MONO = 20
def lop_nhan(t):
    return "mono" if len(t) <= NGUONG_MONO else "mono mono-dai"

def dau_trang(nhan, tieu, dan):
    return """<header class="dau-trang hoa-van">
  <div class="bd">
    <p class="%s">%s</p>
    <h1>%s</h1>
    <p class="dan">%s</p>
  </div>
</header>""" % (lop_nhan(nhan), nhan, tieu, dan)
