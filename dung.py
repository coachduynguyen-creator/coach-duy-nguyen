# -*- coding: utf-8 -*-
"""Dựng toàn bộ website Coach Duy Nguyễn. Chạy: python3 dung.py"""
import html, json, os, re
from lib import (BASE, CONG_DONG, CO_MAY, PHIEU, EMAIL, TTC_LANDING, YOUTUBE, TIKTOK, trang, dau_trang, dd)
from bai_viet import BAI
from bo_sung_bai import BO_SUNG
# bài mới nhất đứng đầu
BAI = sorted(BAI, key=lambda x: x["ngay"], reverse=True)

# Thời gian đọc tính thẳng từ số chữ của thân bài, khỏi phải sửa tay mỗi lần
# viết thêm. Lấy 200 chữ một phút, là nhịp đọc tiếng Việt trên màn hình.
def _phut_doc(than):
    van = html.unescape(re.sub(r"<[^>]+>", " ", than))
    return max(1, round(len(van.split()) / 200.0))

for _b in BAI:
    _b["doc"] = "%d phút đọc" % _phut_doc(_b["than"])
from chuong_trinh import CT
import so_do

# Số chương trình tự đếm, khỏi phải nhớ sửa tay mỗi lần thêm bớt.
CHU_SO = {8: "Tám", 9: "Chín", 10: "Mười", 11: "Mười một", 12: "Mười hai"}
def chu_so(n, hoa=False):
    t = CHU_SO.get(n, str(n))
    return t if hoa else t.lower()


# ---------------------------------------------------------------- khối dùng lại
# Bốn kênh và hai con số khác loại. Tách riêng vì một cái là người theo dõi,
# một cái là thành viên cộng đồng, một cái là số năm. Xếp chung một hàng thì
# sáu con số nhìn như nhau trong khi chúng không cùng nghĩa.
# Dòng vai trò lấy đúng cách trang kenh-youtube.html đã mô tả, không thêm tuyên bố mới.
# Viết đủ số. "334.000" đọc ra sức nặng thật, "334 nghìn" thì không.
# Bỏ dòng vai trò của từng kênh, vì nó làm loãng chính con số. Vai trò các
# kênh đã nói kỹ ở trang kenh-youtube.html.
KENH = [("Facebook", "334.000", "theo dõi"),
        ("YouTube",  "230.000", "đăng ký"),
        ("TikTok",   "231.000", "theo dõi"),
        ("Zalo",      "22.000", "theo dõi")]
THEM = [("26.600", "thành viên Sales Bứt Phá"), ("6 năm", "đăng đều, không nghỉ quãng nào")]

# Con số tổng làm đầu, bốn kênh làm phần chia nhỏ bên dưới.
# Coach Duy chốt ngày 25/08/2026 dùng con số tổng 800.000+, theo slide của mình.
TONG = ("800.000", "người theo dõi trên các nền tảng")
so_lieu_html = (
    '<div class="so-tong"><b>%s+</b><span>%s</span></div>'
    '<div class="kenh4">%s</div>'
    '<div class="kenh-them">%s</div>'
    % (TONG[0], TONG[1],
       "".join('<div class="k"><p class="k-ten">%s</p>'
               '<p class="k-so"><b>%s</b><span>%s</span></p></div>' % (t, n, dv)
               for t, n, dv in KENH),
       "".join('<div><b>%s</b><span>%s</span></div>' % (a, b) for a, b in THEM)))

VIEC5 = [("Soi đúng","Duy giúp bạn tách điều đang thấy khỏi vấn đề thật phía sau, bắt đầu từ những gì quan sát được chứ không từ cảm giác. Chưa gọi đúng tên vấn đề thì Duy chưa vội đưa công cụ."),
         ("Chỉ đường","Duy cho bạn thấy mình đang ở đâu, bước tiếp theo là gì, và điều gì chưa cần làm lúc này. Một bước vừa sức với chỗ bạn đang đứng, không phải một danh sách mẹo."),
         ("Làm mẫu","Duy đưa ra quyết định thật, tài liệu thật, và cả những sai lầm đã trả giá của chính mình, kèm điều kiện áp dụng. Có việc Duy vẫn đang làm dở, và sẽ nói với bạn đúng như vậy."),
         ("Giữ chuẩn","Duy nói rõ điều gì đủ, điều gì chưa, và cái giá của việc tiếp tục cách cũ. Sức nặng nằm ở lý do và ranh giới, không nằm ở giọng nói. Duy không làm nhẹ sự thật để bạn dễ chịu, nhưng cũng không để bạn một mình sau khi nghe."),
         ("Đi cùng và trao lại","Duy ở bên trong lúc bạn tập cách làm mới, rồi để lại một tiêu chí bạn tự đánh giá được và một câu hỏi còn dùng được lâu sau đó. Đích đến là bạn tự đi được, không phải bạn cần Duy mãi.")]
def khoi_viec5():
    return '<div class="viec5">%s</div>' % "".join(
        '<div class="d"><em>%02d</em><div><h4>%s</h4><p>%s</p></div></div>' % (i+1,t,p)
        for i,(t,p) in enumerate(VIEC5))

# Thẻ bài lớn luôn dùng ảnh thật của Coach Duy. Ba ảnh này đúng tỉ lệ 3:2 nên
# không bị cắt, và thẻ nổi bật nhất trên trang thì nên là mặt người viết.
ANH_LON = ["img/cd-dung-lop.webp", "img/cd-workshop.webp", "img/cd-giang-slide.webp"]
ALT_LON = ["Coach Duy Nguyễn nói trước một phòng người sáng lập",
           "Coach Duy Nguyễn đưa micro cho một học viên",
           "Coach Duy Nguyễn giảng trước màn chiếu"]

def the_bai_lon(b, p="", i=0):
    anh, alt = ANH_LON[i % 3], ALT_LON[i % 3]
    return """<a class="bai-lon" href="%sbai-viet/%s">
  <div class="anh"><img src="%s%s" alt="%s" loading="lazy"></div>
  <div class="chu">
    <p class="meta">%s &nbsp;·&nbsp; %s</p>
    <h3>%s</h3>
    <p>%s</p>
  </div>
</a>""" % (p, b["tep"], p, anh, alt, b["ngay_viet"], b["doc"], b["tieu"], b["mo"])

def the_bai_nho(b, p=""):
    return """<a class="bai-nho" href="%sbai-viet/%s">
  <div class="anh"><img src="%s%s" alt="%s" loading="lazy"></div>
  <div><p class="meta">%s &nbsp;·&nbsp; %s</p><h3>%s</h3><p>%s</p></div>
</a>""" % (p, b["tep"], p, b["anh"], b["alt"], b["chu_de"], b["doc"], b["tieu"],
           b["mo"][:88] + ("..." if len(b["mo"]) > 88 else ""))

def the_bai_luoi(b, p=""):
    return """<a class="the-bai" data-cd="%s" href="%sbai-viet/%s">
  <div class="anh"><img src="%s%s" alt="%s" loading="lazy"></div>
  <div class="chu">
    <p class="meta">%s &nbsp;·&nbsp; %s</p>
    <h2>%s</h2>
    <p>%s</p>
  </div>
</a>""" % (b["chu_de"], p, b["tep"], p, b["anh"], b["alt"], b["chu_de"], b["doc"], b["tieu"], b["mo"])

def the_ct(c, p=""):
    return """<a class="the-ct" href="%schuong-trinh/%s">
  <span class="tang%s">%s</span>
  <h3>%s</h3>
  <p class="vi">%s</p>
  <p>%s</p>
  <span class="xem">Xem chương trình <span class="mt" aria-hidden="true">&rarr;</span></span>
</a>""" % (p, c["tep"], "" if len(c["nang_luc"]) <= 20 else " tang-dai",
           c["nang_luc"], c["ten"], c["ten_vi"], c["tom"])

def dsk(muc, khong=False):
    return '<div class="dsk%s">%s</div>' % (" khong" if khong else "",
        "".join('<div><i aria-hidden="true"></i><p>%s</p></div>' % m for m in muc))

# ---------------------------------------------------------------- TRANG CHỦ
INDEX = """
<header id="hero">
  <div class="hero-nen"><img src="img/cd-workshop.webp" alt="" width="1400" height="933"></div>
  <div class="hero-in">
    <div class="hero-nguoi" aria-hidden="true"><img src="img/cd-chan-dung.webp" alt="" width="485" height="760" fetchpriority="high"></div>
    <div class="hero-giua">
      <div class="hero-avt"><img src="img/cd-avatar.webp" alt="Chân dung Coach Duy Nguyễn" width="256" height="256"></div>
      <p class="mono mono-dai">Nhà sáng lập Cộng đồng Next Gen Founder</p>
      <div class="ten">Duy <em>Nguyễn</em></div>
      <div class="bang-hieu">
        <p class="danh-xung">Coach. Trainer. Entrepreneur.</p>
        <div class="vach" aria-hidden="true"><i></i><b></b><i></i></div>
        <p class="khau-hieu">Lead. Inspire. Impact.</p>
      </div>
      <h1>Duy đang xây Cộng đồng Next Gen Founder, với một đích đến năm 2031: góp phần tạo nên <b>10.000 nhà sáng lập</b> biết xây uy tín được tin cậy, tư vấn có trách nhiệm, chuyển kinh nghiệm thành hệ thống, và kiến tạo cộng đồng cùng tạo ra giá trị.</h1>
      <div class="hero-nut">
        <a class="nut nut-v" href="{CONG_DONG}">Vào Cộng đồng Next Gen Founder <span class="mt" aria-hidden="true">&rarr;</span></a>
        <a class="nut nut-vien" href="chuong-trinh.html">Xem chương trình</a>
        <a class="nut nut-vien" href="blog.html">Đọc blog</a>
      </div>
    </div>
    <div class="hero-so">{SO_LIEU}</div>
    <p class="hero-ghi">Tính tới tháng 8 năm 2026, đọc từ trang công khai của từng kênh.</p>
  </div>
</header>

<section class="kh">
  <div class="bd"><p class="kh-dan">Hơn hai mươi doanh nghiệp đã mời Duy đào tạo nội bộ</p></div>
  {KHACH}
</section>

<section class="phan bd hoa-van" id="ve-toi">
  <div class="vt">
    <div class="vt-chu hien">
      <p class="mono">Về Duy</p>
      <h2>Duy đi cùng những người muốn tự nâng chuẩn của chính mình</h2>
      <p>Đó là chuyên gia có nghề, chủ doanh nghiệp dịch vụ, và người đang dẫn một đội ngũ. Điểm chung của họ: khách mua vì tin ở chính con người họ, trước khi tin vào công ty. Nên chuẩn của họ cũng là chuẩn của cả việc kinh doanh.</p>
      <p>Điều họ muốn không dừng ở doanh thu tháng này. Họ muốn mình trở thành một <span class="nhan">điểm đến đáng tin</span>: đối tác tìm tới khi có việc lớn, khách tìm tới trước khi đi so giá, người giỏi tìm tới xin một chỗ ngồi. Một cái tên người ta nhớ, và dám tin.</p>
      <p>Xa hơn nữa là di sản. Không phải một toà nhà hay một con số. <span class="nhan">Di sản của người sáng lập thế hệ mới là những gì mình đã đi qua</span>: kinh nghiệm thật, bài học thật, cả những lần vấp. Mình gói lại cho rõ ràng, kể lại thật lòng, rồi trao cho đội ngũ của mình và cho những người đi sau. Đó là thứ còn ở lại khi mình không còn ngồi ở ghế đó nữa.</p>
      <p>Duy làm việc đó cùng bạn. Đi trước bạn vài chặng nên biết đoạn nào dễ vấp, và ở bên trong lúc bạn tập cách làm mới.</p>
      <a class="lk-v" href="ve-toi.html">Đọc đầy đủ về Duy <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="vt-anh hien">
      <div class="quang" aria-hidden="true"></div>
      <div class="nguoi"><img src="img/cd-cat-noi.webp" alt="Coach Duy Nguyễn đang nói trước một phòng người sáng lập" loading="lazy" width="462" height="1022"></div>
      <div class="manh">
        <div class="anh m1"><img src="img/dh-giua-doan.webp" alt="Coach Duy Nguyễn đi giữa hàng ghế trong một hội trường đông người" loading="lazy"></div>
        <div class="anh m2"><img src="img/cd-workshop.webp" alt="Coach Duy Nguyễn đưa micro cho một học viên" loading="lazy"></div>
        <div class="anh m3"><img src="img/cd-giang-slide.webp" alt="Coach Duy Nguyễn giảng trước màn chiếu" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>

<section class="phan bd hoa-van duoi" id="cach-lam">
  <div class="phan-dau hien">
    <p class="mono">Cách Duy làm việc</p>
    <h2>Năm điều bạn nhận được mỗi lần chúng ta làm việc</h2>
    <p>Người cố vấn không phải là chức danh tự đặt. <span class="nhan">Nó là năm việc phải làm được.</span> Bạn có quyền lấy năm điều này ra kiểm Duy.</p>
  </div>
  <div class="hien">{VONG5}</div>
  <div class="khong hien" style="max-width:70ch;margin:34px auto 0">
    <b>3 việc Duy không làm</b>
    <p>Duy không làm thay phần việc của bạn, và không cam kết một con số doanh thu. Nếu Duy thấy mình chưa giúp được bạn lúc này, Duy sẽ nói thẳng và ngồi lại chỉ bạn chỗ hợp hơn.</p>
  </div>
</section>
<section class="phan bd hoa-van" id="cong-dong">
  <div class="phan-dau hien">
    <p class="mono">Cộng đồng Next Gen Founder · đang nhận danh sách chờ</p>
    <h2>Nơi uy tín cá nhân trở thành điểm tựa</h2>
    <p>Chuyên gia, chủ doanh nghiệp, người đang dẫn một đội ngũ. Điểm chung: <span class="nhan">người ta tin bạn trước khi tin công ty bạn.</span></p>
    <p style="margin-top:14px">Cộng đồng là nơi luyện bốn năng lực dưới đây trong công việc thật, cùng <span class="nhan">những người hiểu chuyện bạn đang gặp vì họ cũng đang đi qua.</span> Duy giữ nhịp và ở bên trong suốt chặng đó.</p>
  </div>
  <div class="cd-nl hien">
    {BANG_NL}
    <div class="nl-ai"><b>AI</b><p>AI là năng lực nền của cả bốn năng lực trên. Nó làm nhanh hơn phần nghiên cứu, chuẩn bị và tóm tắt. Phán đoán, quan hệ và quyết định có trách nhiệm vẫn là phần của con người.</p></div>
  </div>

  <div class="cd-mat hien">
    {MAT_NGUOI}
    <p class="cd-ghi">Ảnh minh hoạ. Mỗi người đều qua một buổi trao đổi trước khi vào.</p>
  </div>

  <div class="blog-them">
    <a class="nut nut-v" href="{CONG_DONG}">Đăng ký danh sách chờ <span class="mt" aria-hidden="true">&rarr;</span></a>
    <a class="nut nut-vien" href="chuong-trinh.html">Xem tất cả chương trình</a>
  </div>
</section>

<section class="phan bd hoa-van duoi" id="blog">
  <div class="phan-dau hien">
    <p class="mono">Blog</p>
    <h2>Chỗ nhà sáng lập hay vấp nhất, và cách gỡ</h2>
    <p><span class="nhan">Điểm nghẽn của người sáng lập</span>, cách thiết kế quan hệ với khách, và cách biến kinh nghiệm thành hệ thống mà đội ngũ cùng vận hành. Đây là những chỗ Duy cũng đã đi qua, nên viết từ chỗ đã làm.</p>
  </div>
  <div class="blog hien">
    {BAI_LON}
    <div class="ds-bai">{BAI_NHO}</div>
  </div>
  <div class="blog-them"><a class="nut nut-vien" href="blog.html">Xem tất cả bài viết <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>
"""
# Logo doanh nghiệp đã mời Coach Duy đào tạo nội bộ.
# Nguồn: PROFILE COACH DUY NGUYỄN, trang 9. Đây là bằng chứng thật, dùng thay cho
# dải "Featured in" của các trang tham chiếu vốn không dùng được.
# Bốn logo không đọc rõ tên thì để mô tả chung, không đoán tên doanh nghiệp.
KHACH = [("mobifone","MobiFone"),("aia","AIA"),("acb","ACB"),("prudential","Prudential"),
 ("bao-viet-life","Bảo Việt Nhân thọ"),("kb-securities","KB Securities"),("hsc","HSC"),
 ("mascom","Mascom"),("hung-vuong","Hưng Vượng Holdings"),("john-partners","John & Partners"),
 ("gaia","GAIA"),("minh-minh","Minh Minh Group"),("an-thuong-yen","An Thượng Yến"),
 ("nhan-ai","Nhân Ái"),("vulcano","Vulcano"),("kenli","KENLI"),("micc","MICC Group"),
 ("bighomes","BigHomes Group"),("trikhang-pharma","Trikhang Pharma"),("aiesec","AIESEC"),
 ("hac-viet","một doanh nghiệp khách hàng"),("w-group","một doanh nghiệp khách hàng"),
 ("bs-group","một doanh nghiệp khách hàng"),("phan-hang","một doanh nghiệp khách hàng")]
_kh1 = "".join('<span class="kh-t">%s</span>' % n
               for t, n in KHACH if not n.startswith("một"))
# Nhân đôi danh sách để dải chạy vòng liên tục, mắt không thấy chỗ nối.
khach_html = ('<div class="kh-chay"><div class="kh-day">%s</div>'
              '<div class="kh-day" aria-hidden="true">%s</div></div>' % (_kh1, _kh1))

# Lưới ảnh xếp so le, dựng theo đúng cách trang Cộng đồng Next Gen Founder xếp
# dải ảnh đầu trang: bảy cột lệch nhau theo chiều dọc, thẻ cao và thẻ vuông xen
# kẽ, Coach Duy đứng cột giữa. Bốn khuôn mặt mỗi bên nên hai bên cân nhau.
# Ảnh cột giữa cắt nền, đứng chạm đáy thẻ, khác hẳn ảnh cắt vuông hai bên.
#
# Phải ghi rõ số cột cho từng cột. Cột nào có hai ảnh thì chiếm hai hàng, mà
# trình duyệt xếp những ô đã biết hàng trước những ô chưa biết, nên nếu để nó
# tự xếp thì cột ngoài cùng bên phải nhảy về đứng thứ hai từ trái.
MN_COT = [
    (1, "44px", [("cao", "ngf-nu-1"), ("vuong", "ngf-nam-4")]),
    (2,  "4px", [("cao", "ngf-nam-1")]),
    (3, "76px", [("vuong", "ngf-nu-2")]),
    (4,  "0px", None),                       # None nghĩa là chỗ của Coach Duy
    (5, "76px", [("vuong", "ngf-nu-3")]),
    (6,  "4px", [("cao", "ngf-nam-2")]),
    (7, "44px", [("cao", "ngf-nam-3"), ("vuong", "ngf-nu-4")]),
]

def _the(kieu, ten):
    return ('<div class="mn-t mn-%s"><img src="img/%s.webp" alt="" width="300" '
            'height="400" loading="lazy" decoding="async"></div>' % (kieu, ten))

_GIUA = ('<div class="mn-t mn-cat">'
         '<img src="img/cd-cat-nen.webp" alt="Coach Duy Nguyễn" width="779" height="1120" '
         'loading="lazy" decoding="async">'
         '<b class="mn-ten">Coach Duy Nguyễn<span>Sáng lập Cộng đồng Next Gen Founder</span></b>'
         '</div>')

def _mn():
    ra = []
    # Bốn vạch dọc mảnh, đặt ở mép phải cột 1, 2, 5, 6 nên cân hai bên cột giữa.
    for c in (1, 2, 5, 6):
        ra.append('<i class="mn-vach" style="grid-column:%d"></i>' % c)
    for cot, pt, ds in MN_COT:
        lop = "mn-c"
        if ds is None:
            lop += " mn-giua"; ruot = _GIUA
        else:
            ruot = "".join(_the(k, t) for k, t in ds)
        ra.append('<div class="%s" style="--pt:%s;grid-column:%d">%s</div>'
                  % (lop, pt, cot, ruot))
    return '<div class="mn">%s</div>' % "".join(ra)

MAT_NGUOI = _mn()

INDEX = (INDEX.replace("{CONG_DONG}", CONG_DONG).replace("{SO_LIEU}", so_lieu_html)
         .replace("{VONG5}", so_do.vong_5()).replace("{BANG_NL}", so_do.bang_nang_luc())
         .replace("{MAT_NGUOI}", MAT_NGUOI).replace("{KHACH}", khach_html)
         .replace("{BAI_LON}", the_bai_lon(BAI[0]))
         .replace("{BAI_NHO}", "".join(the_bai_nho(b) for b in BAI[1:5])))

trang("index.html", "Coach Duy Nguyễn · Người cố vấn cho nhà sáng lập thế hệ mới",
      "Coach Duy Nguyễn đi cùng nhà sáng lập biến uy tín cá nhân thành hệ thống mà đội ngũ cùng vận hành. Bốn năng lực, quỹ đạo niềm tin, và cộng đồng Next Gen Founder.",
      INDEX, "index.html")
print("  index.html")

# ---------------------------------------------------------------- VỀ TÔI
# Dòng thời gian có ngày tháng và con số thật.
# Nguồn: slide "Kỷ nguyên của giá trị cá nhân" và PROFILE COACH DUY NGUYỄN.
# Không nhắc tên Next Step Group theo yêu cầu của Coach Duy.
MOC = [
 ("Trước 2021", "Làm nghề, chưa dạy nghề", "", "",
  "Chuyên gia marketing khối ô tô tại Honda Việt Nam. Sang Úc, đồng sáng lập một tập đoàn nhà hàng và tiệc cưới gồm bốn công ty, rồi làm giám đốc phát triển thị trường cho một công ty môi giới tài chính bất động sản."),
 ("Tháng 5 năm 2021", "Bắt đầu từ con số không, ở Úc", "img/mc/mc-banlamviec.webp",
  "Facebook 0 · YouTube 0",
  "Duy bắt tay xây thương hiệu cá nhân của chính mình, đúng thứ đang dạy người khác bây giờ, và làm khi trong tay chưa có gì."),
 ("Tháng 10 năm 2021", "Doanh nghiệp bắt đầu mời vào dạy", "img/mc/mc-phongnho.webp",
  "Facebook 60.000 · YouTube 50.000",
  "MobiFone, AIA và KB Securities mời đào tạo nội bộ cho đội ngũ của họ. Lần đầu uy tín trên mạng đổi được thành một hợp đồng thật."),
 ("Tháng 7 năm 2022", "Đứng trước những phòng vài trăm người", "img/mc/mc-sankhau.webp",
  "Facebook 120.000 · YouTube 130.000 · TikTok 21.000",
  "Hơn 500 học viên. Duy bắt đầu được mời làm diễn giả thay vì tự tổ chức lớp của Duy."),
 ("Năm năm sau", "Hơn ba nghìn học viên và một cách nghĩ khác", "img/mc/mc-hoitruong.webp",
  "Hơn 3.000 học viên",
  "Dạy hàng nghìn người bán hàng, Duy thấy một điều lặp lại: người chủ có thể bán rất giỏi mà doanh nghiệp vẫn kẹt, nếu nội dung, tư vấn, hệ thống và đội ngũ đều chờ họ."),
 ("Tháng 8 năm 2026", "Chuyển trọng tâm sang Next Gen Founder", "img/mc/mc-banlam.webp",
  "Đích tới năm 2031: 10.000 nhà sáng lập",
  "Từ đào tạo người bán sang phát triển người chủ, với bốn năng lực làm bản đồ. Và chọn cộng đồng làm nơi luyện chính."),
]
def the_moc(m, i):
    ngay, tieu, anh, so, mo = m
    a = ('<div class="mc-anh"><img src="%s" alt="%s" width="900" height="600"'
         ' loading="lazy" decoding="async"></div>' % (anh, tieu)) if anh else \
        ""
    return ('<article class="mc-the%s">' % ("" if anh else " mc-khong")
            + ('<p class="mc-ngay">%s</p>'
               '<div class="mc-chu"><h4>%s</h4>%s<p>%s</p></div>'
               '%s</article>'
               % (ngay, tieu, '<p class="mc-so">%s</p>' % so if so else "", mo, a)))
moc_html = '<div class="mc-doc">%s</div>' % "".join(the_moc(m, i) for i, m in enumerate(MOC))

HOC_VAN = [
 ("2021", "Harvard University", "Hoa Kỳ", "Chuyên viên tư vấn triển khai chiến lược kinh doanh"),
 ("2019", "Certificate in Finance and Mortgage Broking", "Úc", "Cố vấn tài chính tín dụng, làm việc với hơn mười lăm ngân hàng và tổ chức tài chính"),
 ("2012", "Deloitte UK", "Anh", "Chuyên viên tư vấn chiến lược doanh nghiệp"),
 ("2011", "University of Birmingham", "Anh", "Thạc sĩ Quản trị Kinh doanh, khoá xếp hạng 60 thế giới"),
 ("2008", "Đại học Ngoại Thương Hà Nội", "Việt Nam", "Cử nhân Kinh tế Đối ngoại"),
]
hoc_van_html = "".join(
    '<div class="hv-d"><b>%s</b><div><h4>%s <span>%s</span></h4><p>%s</p></div></div>' % h
    for h in HOC_VAN)

NIEM_TIN = [
 ("Xây uy tín để được tin, không phải để được biết",
  "Nổi tiếng là nhiều người biết tên bạn. Được tin cậy là đúng người hiểu bạn làm gì, tin bạn làm được và chủ động tìm tới. Duy làm việc cho vế thứ hai."),
 ("Tăng trưởng không thể chỉ nằm trong một người",
  "Nếu mọi nội dung, giao dịch lớn và quyết định quan trọng đều chờ người chủ, doanh thu tăng chỉ làm họ bận hơn. Nút thắt đó không tự gỡ."),
 ("Kinh nghiệm phải thành hệ thống",
  "Kết quả không thể chỉ nằm trong trí nhớ và sự đôn đốc của người chủ. Một hệ thống cần kết quả rõ, người chịu trách nhiệm, tiêu chuẩn, dữ liệu và một nhịp cải tiến."),
 ("Cộng đồng biến quan hệ thành năng lực",
  "Cộng đồng không phải nhóm đăng bài. Giá trị phải được tạo giữa các thành viên với nhau, không chỉ chảy một chiều từ người sáng lập xuống."),
]
niem_tin_html = "".join('<article><h3>%s</h3><p>%s</p></article>' % n for n in NIEM_TIN)

VE_TOI = dau_trang("Về Duy", "Người đi trước bạn vài chặng, đủ để biết đoạn nào dễ vấp",
  "Duy đi cùng nhà sáng lập biến uy tín cá nhân thành một hệ thống mà đội ngũ có thể cùng vận hành. Trang này viết đủ để bạn quyết định có nên nghe Duy hay không.") + """
<section class="phan bd">
  <div class="vt">
    <div class="vt-chu hien">
      <p class="mono">Duy làm gì</p>
      <h2>Doanh nghiệp của bạn bớt phụ thuộc vào chính bạn</h2>
      <p>Duy làm việc với người mà khách mua vì tin ở chính họ. Với những người này, uy tín cá nhân đứng ngay trước quyết định mua, trước một hợp đồng hợp tác, và trước lời đồng ý của một nhân sự giỏi. Đó vừa là lợi thế lớn nhất, vừa là giới hạn lớn nhất.</p>
      <p>Duy bắt đầu nghề bằng việc dạy bán hàng. Suốt năm năm, Duy làm việc với hàng nghìn người bán và nhận ra một điều lặp đi lặp lại: <span class="nhan">người chủ có thể bán rất giỏi mà doanh nghiệp vẫn kẹt</span>, nếu nội dung, tư vấn, hệ thống và đội ngũ đều chờ họ. Vì vậy Duy chuyển trọng tâm từ đào tạo người bán sang phát triển người chủ.</p>
      <p>Duy không rời bỏ phần bán hàng. Duy dùng chính nền tảng bán bằng niềm tin đó để giải một bài toán sâu hơn: làm sao để cách bán, cách tư vấn và cách ra quyết định của người chủ trở thành năng lực của cả đội ngũ.</p>
      <a class="lk-v" href="phuong-phap.html">Xem phương pháp Duy dùng <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="vt-anh hien">
      <div class="quang" aria-hidden="true"></div>
      <div class="nguoi"><img src="img/cd-cat-vest.webp" alt="Chân dung Coach Duy Nguyễn" loading="lazy" width="548" height="908"></div>
      <div class="manh">
        <div class="anh m1"><img src="img/dh-trong-doan.webp" alt="Coach Duy Nguyễn đứng giữa những người tham dự" loading="lazy"></div>
        <div class="anh m2"><img src="img/cd-dung-lop.webp" alt="Coach Duy Nguyễn nói trước một phòng người sáng lập" loading="lazy"></div>
        <div class="anh m3"><img src="img/cd-giang-slide.webp" alt="Coach Duy Nguyễn giảng trước màn chiếu" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Đường đi</p>
    <h2>Duy đi từ đâu tới đây</h2>
    <p>Duy để cả phần đầu, khi còn làm nghề chứ chưa dạy nghề. Vì phần lớn những gì dạy về sau đến từ giai đoạn đó.</p>
  </div>
  <div class="moc-tg hien">%s</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Học vấn và chứng chỉ</p>
    <h2>Nơi Duy học cách nghĩ, trước khi có gì để dạy</h2>
    <p>Bằng cấp không làm ai giỏi nghề. Nhưng bạn có quyền biết người mình sắp nghe đã học ở đâu ra.</p>
  </div>
  <div class="hv hien">%s</div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">4 điều Duy tin</p>
    <h2>Bốn điều Duy tin, để bạn biết mình có hợp với Duy không</h2>
    <p>Đọc bốn điều này, bạn biết ngay chúng ta có cùng cách nghĩ hay không, trước khi mất thời gian của cả hai.</p>
  </div>
  <div class="niem-tin tre hien">%s</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">3 người Duy hay ngồi cùng</p>
    <h2>Ba người Duy hay ngồi cùng nhất, xem bạn có gần ai không</h2>
  </div>
  <div class="cd-hang tre hien">
    <article>
      <div class="anh"><img src="img/ngf-chuyen-gia.webp" alt="Ảnh minh hoạ một chuyên gia có nghề" loading="lazy"></div>
      <div><h3>Chuyên gia có nghề</h3><p>Bạn giỏi việc của mình và khách tìm tới vì tên bạn. Nhưng thu nhập vẫn buộc chặt vào số giờ bạn ngồi xuống làm.</p></div>
    </article>
    <article>
      <div class="anh"><img src="img/ngf-chu-dn.webp" alt="Ảnh minh hoạ một chủ doanh nghiệp dịch vụ" loading="lazy"></div>
      <div><h3>Chủ doanh nghiệp dịch vụ</h3><p>Đã có khách, có doanh thu, có đội ngũ. Nhưng giao dịch lớn, ngoại lệ và quyết định quan trọng vẫn quay về bàn của bạn.</p></div>
    </article>
    <article>
      <div class="anh"><img src="img/ngf-dan-doi.webp" alt="Ảnh minh hoạ một người đang dẫn một đội ngũ" loading="lazy"></div>
      <div><h3>Người đang dẫn một đội ngũ</h3><p>Bạn chịu trách nhiệm cho kết quả của người khác. Bạn cần uy tín đủ để người giỏi tin và ở lại đủ lâu.</p></div>
    </article>
  </div>
  <div class="dut hien">
    <b>Chưa hợp lúc này</b>
    <p>Người chưa có khách trả tiền, người đang tìm cách tăng nhanh lượt xem, và người muốn Duy làm thay phần việc của mình. Ba nhóm này Duy nói thẳng ngay từ đầu để không ai mất thời gian, của bạn và của Duy.</p>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Cách Duy làm việc</p>
    <h2>Năm điều bạn nhận được, và ba điều Duy không làm thay bạn</h2>
    <p>Người cố vấn không phải là chức danh tự đặt. Nó là năm việc phải làm được. Bạn có quyền lấy năm điều này ra kiểm Duy.</p>
  </div>
  <div class="clv">
    <div class="hop hien"><h3>Năm việc Duy làm</h3><p class="dan-hop">Mỗi lần làm việc phải đi đủ năm bước, không bỏ bước nào.</p>%s</div>
    <div class="hop hien"><h3>Ba việc Duy không làm</h3><p class="dan-hop">Ranh giới này giữ cho việc đồng hành không biến thành sự lệ thuộc.</p>%s
      <div class="nl-ai" style="margin-top:22px"><b>Vì sao</b><p>Nếu bạn chỉ đi được khi có Duy, Duy đã làm sai việc của mình.</p></div>
    </div>
  </div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Số công khai</p>
      <h2>Bạn có quyền kiểm tra người mình sắp nghe</h2>
      <p>Duy để số ở đây, và nói luôn giới hạn của nó.</p>
    </div>
    <div class="hero-so hien" style="border-top:0;margin-top:0;padding-top:0">%s</div>
    <p class="hero-ghi" style="margin-top:18px">Tính tới tháng 8 năm 2026, đọc từ trang công khai của từng kênh.</p>
    <div class="khong hien" style="max-width:70ch;margin:34px auto 0">
      <b>Điều số này không nói</b>
      <p>Nó nói Duy có mặt đủ lâu và đủ đều để bạn kiểm chứng, không nói Duy giúp được bạn. Câu đó chỉ có bằng chứng trong chính doanh nghiệp của bạn mới trả lời được, và đó là điều Duy cùng bạn đi tìm.</p>
    </div>
  </div>
</section>
""" % (moc_html, hoc_van_html, niem_tin_html, khoi_viec5(),
       dsk(["Không làm thay phần việc của bạn. Duy chỉ đường và giữ chuẩn, bạn tự bước.",
            "Không hứa một con số doanh thu khi chưa đủ điều kiện.",
            "Không giữ ai ở lại bằng cảm giác lệ thuộc."], khong=True),
       so_lieu_html)

trang("ve-toi.html", "Về Coach Duy Nguyễn · Người cố vấn cho nhà sáng lập thế hệ mới",
      "Coach Duy Nguyễn là ai, đến chỗ này bằng con đường nào, tin điều gì, nói với ai, làm việc theo cách nào, và số liệu công khai kèm giới hạn của nó.",
      VE_TOI, "ve-toi.html")
print("  ve-toi.html")

# ---------------------------------------------------------------- PHƯƠNG PHÁP
PHUONG_PHAP = dau_trang("Phương pháp", "Năm việc của người cố vấn và quỹ đạo niềm tin",
  "Ba bản đồ Duy mở ra mỗi ngày: năm việc phải làm được khi đi cùng một nhà sáng lập, bốn năng lực làm bản đồ, và cách Duy thiết kế quan hệ với khách bằng quỹ đạo thay cho phễu.") + """
<section class="phan bd hoa-van">
  <div class="doi-cot">
    <div class="hien">
      <p class="mono">Bản đồ</p>
      <h2>Bốn năng lực của nhà sáng lập thế hệ mới</h2>
      <p>Đây là bản đồ Duy dùng để biết một người đang thiếu gì. Bạn không cần đi hết cùng lúc. Thường chỉ một năng lực đang chặn ba năng lực còn lại, và việc đầu tiên là tìm ra năng lực đó.</p>
      <p>AI là năng lực nền của cả bốn việc. Nó làm nhanh hơn phần nghiên cứu, chuẩn bị và tóm tắt. Phán đoán, quan hệ và quyết định có trách nhiệm vẫn là phần của con người.</p>
    </div>
    <div class="hien">{BANH_XE}</div>
  </div>
  <div class="hien" style="margin-top:40px">{BANG_NL}</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Cách làm việc</p>
    <h2>Năm điều bạn nhận được khi chúng ta đi cùng nhau</h2>
    <p>Người cố vấn không phải là chức danh tự đặt. Nó là năm việc phải làm được. Bạn có quyền lấy năm điều này ra kiểm Duy.</p>
  </div>
  <div class="clv">
    <div class="hop hien">
      <h3>Năm việc</h3>
      <p class="dan-hop">Mỗi lần làm việc phải đi đủ năm bước này, không bỏ bước nào.</p>
      {VIEC5}
      <a class="lk-v" style="margin-top:20px" href="bai-viet/nam-viec-cua-mot-nguoi-co-van.html">Đọc bài đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop hien">
      <h3>Ba việc Duy không làm</h3>
      <p class="dan-hop">Ranh giới này giữ cho việc đồng hành không biến thành sự lệ thuộc.</p>
      {KHONG_LAM}
      <div class="nl-ai" style="margin-top:22px"><b>Vì sao</b><p>Nếu bạn chỉ đi được khi có Duy, Duy đã làm sai việc của mình. Mục tiêu của sự đồng hành là giúp bạn trưởng thành hơn trong phán đoán và hành động.</p></div>
    </div>
  </div>
</section>

<section class="phan tran" id="quy-dao">
  <div class="tran-nen" aria-hidden="true"><img src="img/dh-phong-lon.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">CDN Trust Orbit</p>
      <h2>Duy tích luỹ niềm tin trước, rồi mới mời</h2>
      <p>Phễu đo được một chiến dịch, nhưng nó không mô tả đúng cách một người quyết định tin ai. Khách ở giữa, năm vòng quay quanh, và họ có thể tiến gần hoặc lùi ra bất cứ lúc nào mà vẫn còn trong hệ.</p>
    </div>
    {QUY_DAO}
    <p class="ket">Dùng phễu để đo. Dùng quỹ đạo để thiết kế quan hệ.</p>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Tiêu chuẩn</p>
    <h2>Mỗi lần xuất hiện, Duy phải để lại được gì</h2>
    <p>Mỗi lần xuất hiện trước một người, Duy phải đạt ít nhất một trong ba điều dưới đây. Không đạt điều nào thì đó là một lần tiêu bớt niềm tin chứ không tích thêm.</p>
  </div>
  <div class="dx tre hien">
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Một</span><h3>Hiểu vấn đề rõ hơn</h3><p>Sau khi đọc hoặc nghe, họ gọi đúng tên điều đang kẹt hơn lúc trước.</p></div></article>
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Hai</span><h3>Tự đánh giá được</h3><p>Họ có một tiêu chí để soi vào bối cảnh của chính mình, không cần hỏi Duy.</p></div></article>
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Ba</span><h3>Tiến một bước nhỏ</h3><p>Có một việc vừa sức họ làm được ngay trong tuần này.</p></div></article>
    <article><div><span class="trang-thai im"><i aria-hidden="true"></i>Ranh giới</span><h3>Bước tiếp theo đủ nhỏ</h3><p>Không yêu cầu cam kết lớn trước khi họ có đủ thông tin và niềm tin.</p></div></article>
  </div>
  <p class="ket">Khi niềm tin đã đủ, lời mời chỉ cần một câu.</p>
</section>
""".replace("{BANH_XE}", so_do.banh_xe()).replace("{BANG_NL}", so_do.bang_nang_luc()) \
   .replace("{VONG5}", so_do.vong_5()).replace("{QUY_DAO}", so_do.quy_dao()) \
   .replace("{KHONG_LAM}", dsk(["Không làm thay phần việc của bạn. Duy chỉ đường và giữ chuẩn, bạn tự bước.",
                                "Không hứa một con số doanh thu khi chưa đủ điều kiện. Điều Duy hứa là điểm nghẽn được gọi đúng tên và một năng lực được xây.",
                                "Không giữ ai ở lại bằng cảm giác lệ thuộc. Mỗi lần làm việc phải để lại cho bạn một tiêu chí tự đánh giá."], khong=True))

trang("phuong-phap.html", "Phương pháp của Coach Duy Nguyễn · Bốn năng lực và quỹ đạo niềm tin",
      "Bốn năng lực của nhà sáng lập thế hệ mới, năm việc của một người cố vấn, và CDN Trust Orbit, cách thiết kế quan hệ với khách bằng quỹ đạo thay cho phễu.",
      PHUONG_PHAP, "phuong-phap.html")
print("  phuong-phap.html")

# ---------------------------------------------------------------- CHƯƠNG TRÌNH: trang tổng
def nhom_ct(ten):
    return [c for c in CT if c["nhom"] == ten]

CHUONG_TRINH = dau_trang("Chương trình",
  "%s chương trình, nhưng lúc này bạn chỉ cần đúng một" % chu_so(len(CT), True),
  "Không ai đi hết cả %s. Mỗi người chỉ kẹt ở một chỗ tại một thời điểm, và gỡ đúng chỗ đó rồi thì phần còn lại nhẹ đi nhiều. Chưa rõ mình đang kẹt ở đâu thì quay về trang chủ, ở đó có một danh sách để bạn tự soi." % chu_so(len(CT))) + """


<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien">
    <p class="mono">4 năng lực</p>
    <h2>Luyện từng năng lực khi bạn biết mình thiếu gì</h2>
    <p>Bốn chương trình tương ứng với bốn năng lực của nhà sáng lập thế hệ mới. Không chương trình nào hứa tạo ra toàn bộ nhân dạng, mỗi chương trình chịu trách nhiệm cho một kết quả rõ.</p>
  </div>
  <div class="luoi-ct tre hien">{NL4}</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Đồng hành</p>
      <h2>Ở lại đủ lâu để cái mới thành thói quen</h2>
      <p>Một khoá học tạo ra hiểu biết. Chỉ có nhịp và cộng đồng mới biến hiểu biết thành thói quen. Đó là lý do cộng đồng là chỗ Duy dồn phần lớn thời gian trong năm nay.</p>
    </div>
    <div class="luoi-ct tre hien">{DONGHANH}</div>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Phạm vi riêng</p>
    <h2>Khi việc đủ lớn để cần một phạm vi riêng</h2>
    <p>Hai phạm vi này nhận rất giới hạn và không mở đăng ký đại trà. Chúng chỉ mở sau khi đã trao đổi đủ và cả hai bên thấy đúng thời điểm.</p>
  </div>
  <div class="luoi-ct tre hien">{RIENG}</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Công cụ mở</p>
    <h2>Hai công cụ Duy làm cho mình dùng trước, rồi mở cho bạn</h2>
  </div>
  <div class="luoi c2 tre hien">
    <article class="the">
      <span class="trang-thai"><i aria-hidden="true"></i>Đang mở, 7 phút</span>
      <h3>Phiếu chẩn đoán</h3>
      <p>Bảy phút để bạn tự nhìn ra điểm nghẽn đang chặn mình nhiều nhất, trước khi nói chuyện với bất kỳ ai, kể cả Duy.</p>
      <p style="margin-top:16px"><a class="lk-v" href="{PHIEU}" target="_blank" rel="noopener">Làm phiếu chẩn đoán <span class="mt" aria-hidden="true">&rarr;</span></a></p>
    </article>
    <article class="the">
      <span class="trang-thai"><i aria-hidden="true"></i>Đang mở</span>
      <h3>Cỗ máy Nội dung Một người</h3>
      <p>Bản đồ đầy đủ của một hệ thống nội dung mà một người vận hành được, có AI làm phần lặp lại. Xem trước khi quyết học gì.</p>
      <p style="margin-top:16px"><a class="lk-v" href="{CO_MAY}" target="_blank" rel="noopener">Xem cỗ máy nội dung <span class="mt" aria-hidden="true">&rarr;</span></a></p>
    </article>
  </div>
</section>
"""   .replace("{NL4}", "".join(the_ct(c) for c in nhom_ct("Bốn năng lực"))) \
   .replace("{DONGHANH}", "".join(the_ct(c) for c in nhom_ct("Đồng hành"))) \
   .replace("{RIENG}", "".join(the_ct(c) for c in nhom_ct("Riêng"))) \
   .replace("{PHIEU}", PHIEU).replace("{CO_MAY}", CO_MAY)

trang("chuong-trinh.html", "Chương trình của Coach Duy Nguyễn · Hệ sinh thái Next Gen Founder",
      "Bốn chương trình năng lực, Cộng đồng Thành viên, Diamond Founder Club, cố vấn riêng và giải pháp doanh nghiệp. Không phải một cái thang, là một hệ sinh thái theo mức sẵn sàng.",
      CHUONG_TRINH, "chuong-trinh.html")
print("  chuong-trinh.html")

# ---------------------------------------------------------------- CHƯƠNG TRÌNH: từng trang
for c in CT:
    p = "../"
    khac = [x for x in CT if x is not c and x["nhom"] == c["nhom"]][:2] or [x for x in CT if x is not c][:2]
    if c.get("anh_tach_nen"):
        hinh = ('<div class="vt-anh"><div class="quang" aria-hidden="true"></div>'
                '<div class="nguoi"><img src="%s%s" alt="%s" loading="lazy" width="542" height="1038"></div>'
                '<div class="manh" style="min-height:300px"></div></div>' % (p, c["anh"], c["alt"]))
    else:
        hinh = '<div class="anh anh-khung ngang"><img src="%s%s" alt="%s" loading="lazy"></div>' % (p, c["anh"], c["alt"])

    gia_html = ""
    if c.get("gia"):
        hang = "".join('<div><b>%s</b><span><strong>%s</strong><br>%s</span></div>' % g for g in c["gia"])
        gia_html = """<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Mức đầu tư</p><h2>Hai mức theo thời điểm đăng ký</h2></div>
  <div class="hien" style="max-width:800px;margin-inline:auto">
    <div class="bang-tt">%s</div>
    <div class="ghi-mau" style="margin-top:26px"><b>Lưu ý</b><p>%s</p></div>
  </div>
</section>""" % (hang, c["gia_ghi"])
    else:
        gia_html = """<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Mức đầu tư</p><h2>Trao đổi trước, nói giá sau</h2>
  <p>Duy không đặt giá lên trang, vì phạm vi phù hợp với bạn phải được xác định trước. Trong buổi trao đổi, chúng ta làm rõ điểm nghẽn, điều kiện và phạm vi, rồi mới nói tới mức đầu tư. Nếu chưa phải lúc, Duy và đội ngũ sẽ nói rõ vì sao và chỉ bạn bước hợp hơn.</p></div>
</section>"""

    chang_html = ""
    if c["tep"] == "the-trusted-creator.html":
        chang_html = """<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Cơ chế</p><h2>Năm chặng trong ba mươi ngày</h2>
  <p>Không phải năm bài giảng. Là năm chặng, mỗi chặng có kết quả riêng, và chặng sau chỉ chạy được khi chặng trước đã xong.</p></div>
  <div class="hien">%s</div>
</section>""" % so_do.chang_5()

    if c.get("mo_ban"):
        dich = TTC_LANDING or dd("lien-he.html", p)
        nhan_nut, tieu_cta, dan_cta = ("Đăng ký khoá đầu tiên", "Khoá đầu tiên khai giảng 28 tháng 9 năm 2026",
            "Đăng ký sớm áp dụng tới hết ngày 20 tháng 9. Nếu bạn còn phân vân mình có hợp không, làm phiếu chẩn đoán bảy phút trước, rồi quyết.")
    else:
        dich = CONG_DONG
        nhan_nut, tieu_cta, dan_cta = ("Trao đổi trước khi quyết", "Bắt đầu bằng một buổi trao đổi ngắn",
            "Chương trình này chỉ mở khi phạm vi phù hợp với điều bạn đang kẹt. Để lại vài dòng, đội ngũ Next Gen Founder sẽ trao đổi để xem có hợp không. Nếu chưa phải lúc, Duy và đội ngũ sẽ chỉ bạn bước hợp hơn.")
    ngoai = ' target="_blank" rel="noopener"' if dich.startswith("http") else ""
    cta_ct = """<section class="dai-vang">
  <div class="bd moi">
    <div class="hien">
      <p class="mono">Bước tiếp theo</p>
      <h2>%s</h2>
      <p>%s</p>
    </div>
    <div class="moi-nut hien">
      <a class="nut nut-toi" href="%s"%s>%s <span class="mt" aria-hidden="true">&rarr;</span></a>
      <a class="nut nut-vien-toi" href="%s" target="_blank" rel="noopener">Phiếu chẩn đoán 7 phút</a>
    </div>
  </div>
</section>""" % (tieu_cta, dan_cta, dich, ngoai, nhan_nut, PHIEU)

    tt = [("Dành cho", c["cho_ai"]), ("Hình thức", c["hinh_thuc"])]
    if c.get("khai_giang"): tt.insert(1, ("Khai giảng", c["khai_giang"]))
    # Tên chương trình sẽ đổi thì người mua có quyền biết trước.
    if c.get("chuyen_tiep"): tt.append(("Tên chương trình", c["chuyen_tiep"]))
    bang_tt = "".join('<div><b>%s</b><span>%s</span></div>' % t for t in tt)

    than = dau_trang(c["nang_luc"], c["ten"], c["tom"]) + """
<section class="phan bd hoa-van">
  <div class="doi-cot">
    <div class="hien">
      <p class="mono">Chương trình</p>
      <h2>%s</h2>
      <p>%s</p>
      <div class="bang-tt" style="margin-top:26px">%s</div>
    </div>
    <div class="hien">%s</div>
  </div>
</section>

<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien"><p class="mono">Kết quả</p><h2>Học xong, bạn có gì trong tay</h2></div>
  <div class="hien" style="max-width:800px;margin-inline:auto">%s</div>
</section>

%s

%s

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="%simg/cd-dung-lop.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Ranh giới</p><h2>Điều chương trình này chưa làm được cho bạn</h2>
    <p>Duy ghi phần này rõ ngang phần kết quả. Biết trước điều gì không có sẽ giúp bạn quyết đúng hơn.</p></div>
    <div class="hien" style="max-width:800px;margin-inline:auto">%s</div>
  </div>
</section>

%s

<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Xem thêm</p><h2>Hai chương trình liên quan</h2></div>
  <div class="luoi-ct tre hien">%s</div>
</section>
""" % (c["ten_vi"], c["luan_diem"], bang_tt, hinh,
       dsk(c["ket_qua"]), chang_html, gia_html, p, dsk(c["khong_gom"], khong=True),
       cta_ct, "".join(the_ct(x, p) for x in khac))

    ld = json.dumps({"@context":"https://schema.org","@type":"Course","name":c["ten"],
                     "description":c["tom"],"inLanguage":"vi",
                     "provider":{"@type":"Person","name":"Coach Duy Nguyễn","url":BASE+"/ve-toi.html"}},
                    ensure_ascii=False)
    trang("chuong-trinh/" + c["tep"], c["ten"] + " · Coach Duy Nguyễn", c["tom"], than, "chuong-trinh.html", jsonld=ld)
    print("  chuong-trinh/" + c["tep"])

# ---------------------------------------------------------------- BLOG
CHU_DE = ["Tất cả"] + sorted({b["chu_de"] for b in BAI})
chu_de_html = "".join('<button type="button" data-cd="%s"%s>%s</button>' % (t, ' class="on"' if i == 0 else '', t) for i, t in enumerate(CHU_DE))

BLOG = dau_trang("Blog", "Chỗ nhà sáng lập hay vấp nhất, và cách gỡ",
  "Điểm nghẽn của người sáng lập, cách thiết kế quan hệ với khách, và cách biến kinh nghiệm thành hệ thống mà đội ngũ cùng vận hành. Không viết bài theo xu hướng.") + """
<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Bài mới nhất</p><h2>%s</h2></div>
  <div class="blog hien">
    %s
    <div class="ds-bai">%s</div>
  </div>
</section>

<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien"><p class="mono">Tất cả %d bài</p><h2>Đọc theo chỗ bạn đang vướng</h2></div>
  <div class="chu-de hien">%s</div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (BAI[0]["tieu"], the_bai_lon(BAI[0]), "".join(the_bai_nho(b) for b in BAI[1:5]),
       len(BAI), chu_de_html, "".join(the_bai_luoi(b) for b in BAI))

trang("blog.html", "Blog của Coach Duy Nguyễn · Bài viết cho nhà sáng lập",
      "Bài viết về điểm nghẽn của người sáng lập, quỹ đạo niềm tin, thương hiệu cá nhân và cách biến kinh nghiệm thành hệ thống. Viết bởi Coach Duy Nguyễn.",
      BLOG, "blog.html")
print("  blog.html")

CAP_NHAT = "24 tháng 8, 2026"

def khoi_faq(faq):
    muc = "".join('<div class="muc"><h3>%s</h3><p>%s</p></div>' % (q, a) for q, a in faq)
    return '<div class="hoi-dap hien"><b>Câu hỏi thường gặp</b>%s</div>' % muc

def muc_luc(than):
    tieu = re.findall(r'<h2>(.*?)</h2>', than)
    if len(tieu) < 3: return "", than
    for i, t in enumerate(tieu):
        than = than.replace('<h2>%s</h2>' % t, '<h2 id="m%d">%s</h2>' % (i+1, t), 1)
    li = "".join('<li><a href="#m%d">%s</a></li>' % (i+1, t) for i, t in enumerate(tieu))
    return '<div class="muc-luc"><b>Trong bài này</b><ol>%s</ol></div>' % li, than

HOP_TAC_GIA = """<div class="tac-gia hien">
  <div class="anh-tg"><img src="../img/cd-avatar.webp" alt="Coach Duy Nguyễn" loading="lazy" width="256" height="256"></div>
  <div>
    <b>Coach Duy Nguyễn</b>
    <p>Người cố vấn đi cùng nhà sáng lập thế hệ mới. Sáu năm làm nội dung đều đặn trên bốn kênh, làm việc với hàng nghìn người bán hàng và người chủ doanh nghiệp dịch vụ. Tác giả phương pháp CDN Trust Orbit và bộ bốn năng lực của nhà sáng lập thế hệ mới.</p>
    <a class="lk-v" href="../ve-toi.html">Xem hồ sơ đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</div>"""

for i, b in enumerate(BAI):
    p = "../"
    bs = BO_SUNG.get(b["tep"], {})
    khac = [x for x in BAI if x is not b and x["chu_de"] == b["chu_de"]][:2]
    if len(khac) < 2:
        khac += [x for x in BAI if x is not b and x not in khac][:2 - len(khac)]
    faq = bs.get("faq", [])
    ml, than_bai = muc_luc(b["than"])
    tra_loi = ('<div class="tra-loi"><b>Tóm tắt</b><p>%s</p></div>' % bs["tra_loi"]) if bs.get("tra_loi") else ""

    ld = {"@context":"https://schema.org","@graph":[
      {"@type":"BlogPosting","headline":b["tieu"],"description":b["mo"],
       "datePublished":b["ngay"],"dateModified":"2026-08-24","articleSection":b["chu_de"],
       "inLanguage":"vi","wordCount":len(re.sub(r"<[^>]+>"," ",b["than"]).split()),
       "author":{"@type":"Person","name":"Coach Duy Nguyễn","url":BASE+"/ve-toi.html",
                 "jobTitle":"Người cố vấn cho nhà sáng lập","knowsAbout":[b["chu_de"]]},
       "publisher":{"@type":"Person","name":"Coach Duy Nguyễn"},
       "mainEntityOfPage":BASE+"/bai-viet/"+b["tep"]},
      {"@type":"BreadcrumbList","itemListElement":[
       {"@type":"ListItem","position":1,"name":"Trang chủ","item":BASE+"/"},
       {"@type":"ListItem","position":2,"name":"Blog","item":BASE+"/blog.html"},
       {"@type":"ListItem","position":3,"name":b["tieu"]}]}]}
    if faq:
        ld["@graph"].append({"@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q, a in faq]})
    ld = json.dumps(ld, ensure_ascii=False)

    than = """<article>
  <div class="bd bai-dau hien">
    <nav class="vun" aria-label="Đường dẫn"><a href="%sindex.html">Trang chủ</a><span>&rsaquo;</span><a href="%sblog.html">Blog</a><span>&rsaquo;</span><span>%s</span></nav>
    <p class="meta">%s &nbsp;·&nbsp; %s</p>
    <h1>%s</h1>
    <p class="tom">%s</p>
  </div>
  <div class="bd hien"><div class="bai-anh"><img src="%s%s" alt="%s"></div></div>
  <div class="bd">
    <div class="bai-than">
      <div class="doc hien">%s%s%s</div>
      %s
      %s
      <div class="bai-cuoi" style="max-width:74ch;margin-inline:auto">
        <p>Viết bởi Coach Duy Nguyễn</p>
        <a class="lk-v" href="%sblog.html">Về trang blog <span class="mt" aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</article>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Đọc tiếp</p><h2>Hai bài cùng mạch</h2></div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (p, p, b["chu_de"], b["chu_de"], b["doc"], b["tieu"], b["mo"],
       p, b["anh"], b["alt"], tra_loi, ml, than_bai,
       khoi_faq(faq) if faq else "", HOP_TAC_GIA, p,
       "".join(the_bai_luoi(x, p) for x in khac))
    trang("bai-viet/" + b["tep"], b["tieu"] + " · Coach Duy Nguyễn", b["mo"], than, "blog.html", jsonld=ld)
    print("  bai-viet/" + b["tep"])

# ---------------------------------------------------------------- SÁCH
def bia(nhan, ten, tieu_duoi, mo, trang_thai):
    return """<div class="bia">
  <div class="mat">
    <span class="nhan-bia">%s</span>
    <span class="ten-bia">%s</span>
    <span class="tac">Coach Duy Nguyễn</span>
  </div>
  <div class="duoi"><b>%s</b><p>%s</p><span class="tt im">%s</span></div>
</div>""" % (nhan, ten, tieu_duoi, mo, trang_thai)

SACH = dau_trang("Sách", "Sách Duy đang viết",
  "Chưa có cuốn nào đã in. Trang này ghi rõ cuốn nào đang viết và dự kiến ra mắt khi nào, để bạn không phải đoán.") + """
<section class="phan bd hoa-van">
  <div class="ghi-mau hien"><b>Bản thiết kế</b><p>Bìa dưới đây là bản dựng tạm bằng chữ, chưa phải bìa thật. Khi có bìa do hoạ sĩ làm, Duy thay ảnh vào đúng chỗ này.</p></div>
  <div class="hang-bia hai tre hien">%s%s</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Trong lúc chờ sách</p>
      <h2>Phần lớn nội dung Duy đã viết dần trên blog</h2>
      <p>Bạn đọc trước ở đó, và nói cho Duy biết chỗ nào cần đào sâu. Những chỗ được hỏi nhiều nhất sẽ thành chương dày nhất.</p>
    </div>
    <div class="blog hien">%s<div class="ds-bai">%s</div></div>
  </div>
</section>
""" % (
 bia("Sắp ra mắt", "Bán Bằng Vị Thế", "Bán Bằng Vị Thế",
     "Gom lại cách bán dựa trên vị thế và niềm tin Duy đã dạy suốt sáu năm. Viết cho người chủ chứ không cho người bán: làm sao để khách tìm tới vì tin bạn, và làm sao để cách bán đó không chỉ nằm trong đầu bạn.",
     "Đang viết · dự kiến quý 4 năm 2026"),
 bia("Bộ tài liệu", "Thực Chiến Bất Động Sản", "Bộ Sách Thực Chiến Bất Động Sản",
     "Bộ tài liệu thực chiến cho người làm bất động sản, rút từ các chương trình đào tạo đã chạy. Đây là phần chuyên ngành, tách khỏi dòng nội dung dành cho nhà sáng lập.",
     "Đang biên soạn"),
 the_bai_lon(BAI[3], i=2), "".join(the_bai_nho(b) for b in [BAI[8], BAI[0], BAI[4], BAI[6]]))

trang("sach.html", "Sách của Coach Duy Nguyễn · Bán Bằng Vị Thế",
      "Sách Bán Bằng Vị Thế đang viết, dự kiến quý 4 năm 2026, và Bộ Sách Thực Chiến Bất Động Sản đang biên soạn.",
      SACH, "sach.html")
print("  sach.html")

# ---------------------------------------------------------------- PODCAST
# Trang dựng theo kiểu trang phim tài liệu Coach Duy gửi mẫu ngày 26/08/2026:
# mở đầu tràn màn hình, sáu dải chuyên mục ảnh tràn viền đánh số, khối xem kênh
# ở cuối. Podcast là video quay rồi đăng YouTube, nên mọi dải đều mở kênh.
PD_MUC = [
 ("01","Điểm nghẽn của người sáng lập",
  "Vì sao càng bán tốt càng bận, vì sao tuyển thêm người lại bận hơn, và cách gỡ từng lớp một.",
  "img/bl-ban-lam-viec.webp","50% 34%"),
 ("02","Bán bằng chẩn đoán",
  "Dẫn một buổi tư vấn để khách tự nhìn ra vấn đề, thay vì bị thuyết phục.",
  "img/v5-di-cung.webp","50% 38%"),
 ("03","Thương hiệu của người sáng lập",
  "Làm rõ lãnh địa và luận điểm, biến công việc thật thành kho câu chuyện.",
  "img/bl-phong-thu.webp","50% 45%"),
 ("04","Xây hệ thống cùng đội ngũ",
  "Năm phần làm nên một hệ thống chạy được, và cách giao quyền mà không mất kiểm soát.",
  "img/dh-trong-doan.webp","50% 30%"),
 ("05","Kiến tạo cộng đồng",
  "Vì sao một nhóm đăng bài chưa phải cộng đồng, và bốn thứ quyết định cộng đồng sống hay chết.",
  "img/dh-phong-lon.webp","50% 40%"),
 ("06","AI trong công việc của người chủ",
  "Việc nào giao được cho máy, việc nào phải giữ, và cách dùng AI mà không mất tiếng nói riêng.",
  "img/bl-may-tinh.webp","50% 30%"),
]
pd_band = "".join(
 '''<a class="pd-band hien" href="#xem" data-muc="%d" aria-label="Chuyên mục %s: %s. Bấm để xem các tập của chuyên mục này.">
  <img src="%s" alt="" loading="lazy" style="object-position:%s">
  <div class="bd">
    <span class="pd-cham" aria-hidden="true"></span>
    <div class="pd-chu">
      <p class="pd-nhan">Chuyên mục %s</p>
      <h3>%s</h3>
      <p class="pd-mo">%s</p>
    </div>
    <span class="pd-dem" aria-hidden="true"><b>%s</b><i></i>06</span>
  </div>
</a>''' % (int(so), so, ten, anh, neo, so, ten, mo, so)
 for so, ten, mo, anh, neo in PD_MUC)


# Sáu tập xem ngay tại trang, lấy từ video có sẵn trên kênh ngày 26/08/2026.
# Tập podcast quay mới sẽ thay dần vào danh sách này: mỗi tập một mã YouTube,
# một mô tả, một lý do nên xem và một lời mời riêng. Bấm tập nào thì khung
# rạp ở trên phát tập đó ngay trên trang, không rời sang YouTube.
PD_TAP = [
 # ---- Chuyên mục 01 · Điểm nghẽn của người sáng lập
 dict(yt="mNRObOgqONc", muc=1,
  tieu="80 phần trăm thất bại không đến từ kỹ năng chốt",
  mo="Người ta hay đổ cho khâu chốt, rồi đi học thêm kỹ thuật chốt. Tập này chỉ ra chỗ hỏng thật nằm sớm hơn nhiều trong quan hệ với khách, và vì sao luyện chốt không cứu được nó.",
  lydo="Giúp bạn thôi tốn tiền vào sai chỗ, trước khi mua thêm một khoá kỹ năng nữa.",
  cta_nhan="Đăng ký nhận thư hằng tuần", cta="lien-he.html"),
 dict(yt="YnRjTGhwoQg", muc=1,
  tieu="Nếu phải khởi nghiệp lại, Duy sẽ làm gì trước",
  mo="Câu trả lời thẳng cho câu hỏi Duy hay được hỏi: bắt đầu lại từ đầu vào lúc này thì đi đường nào trước, và bỏ hẳn bước nào.",
  lydo="Nghe để soi lại thứ tự ưu tiên của chính mình, nhất là khi bạn đang tính làm lại một mảng.",
  cta_nhan="Làm phiếu chẩn đoán 7 phút", cta=PHIEU),
 dict(yt="yFz8MHt20vQ", muc=1,
  tieu="Hai chữ giữ việc kinh doanh vững trong năm khó",
  mo="Hai từ khoá Duy chọn cho năm 2026, và cách chúng đổi tiêu chí bạn dùng để chọn việc đáng làm.",
  lydo="Tập ngắn, nhưng đủ để bạn kiểm lại kế hoạch năm của mình trong một buổi cà phê.",
  cta_nhan="Làm phiếu chẩn đoán 7 phút", cta=PHIEU),
 dict(yt="yh_u6x1-qCo", muc=1,
  tieu="Bốn bước đi lên từ hai bàn tay trắng",
  mo="Con đường người mới hay bỏ qua vì nóng vội, kể theo đúng thứ tự Duy đã đi từ lúc chưa có gì trong tay.",
  lydo="Hợp với người đang ở đoạn đầu, để khỏi đốt tiền vào bước chưa tới lượt.",
  cta_nhan="Xem các chương trình", cta="chuong-trinh.html"),
 dict(yt="tr38f_RNwwU", muc=1,
  tieu="Bỏ một thói quen này trước khi mong bứt doanh số",
  mo="Một thói quen tư vấn rất phổ biến đang âm thầm phá buổi bán hàng, và cách thay nó bằng một việc làm được ngay.",
  lydo="Soi được ngay trong buổi tư vấn gần nhất của bạn, không cần chờ.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),

 # ---- Chuyên mục 02 · Bán bằng chẩn đoán
 dict(yt="eGQbItur-co", muc=2,
  tieu="Càng bán nhiều thứ, khách càng khó mua",
  mo="Vì sao bày ra nhiều lựa chọn lại làm khách chậm quyết định, và cách thu hẹp lời chào để đúng người thấy đúng thứ mình cần.",
  lydo="Nếu bạn đang nghĩ thêm gói, thêm dịch vụ là thêm doanh thu, tập này cho bạn thấy chiều ngược lại trước khi bạn tốn tiền vào nó.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),
 dict(yt="7aCWr74vWkI", muc=2,
  tieu="Không phải do giá. Đây là lý do khách rời bỏ bạn",
  mo="Khách nói đắt rồi đi, nhưng phần lớn không đi vì giá. Tập này lần ngược về chỗ niềm tin bị hụt trong buổi tư vấn, trước cả khi con số được nói ra.",
  lydo="Nếu bạn từng giảm giá mà khách vẫn không mua, tập này giải thích vì sao, và bạn sẽ thôi giảm nữa.",
  cta_nhan="Đọc bài: Vì sao giảm giá làm hỏng quan hệ", cta="bai-viet/vi-sao-giam-gia-lam-hong-quan-he.html"),
 dict(yt="YbiDnjbCK8Q", muc=2,
  tieu="Đừng thuyết phục nữa. Đây là cách khách tự mua",
  mo="Người bán càng cố thuyết phục, khách càng phòng thủ. Tập này trình bày cách dẫn buổi tư vấn bằng câu hỏi chẩn đoán, để khách tự nhìn ra vấn đề và tự đi tới quyết định.",
  lydo="Đây là lõi của cách Duy bán suốt nhiều năm, trình bày gọn trong một tập.",
  cta_nhan="Vào Cộng đồng NGF", cta=CONG_DONG),
 dict(yt="IAYzc91zZ3A", muc=2,
  tieu="Giá có thật là điều khách quan tâm nhất?",
  mo="Khách nói đắt, nhưng hành vi mua lại nói một điều khác. Tập này tách hai chuyện đó ra để bạn nhìn cho rõ.",
  lydo="Giúp bạn thôi sửa giá trong khi chỗ hỏng nằm ở niềm tin.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),
 dict(yt="r_Hj2t1mS8M", muc=2,
  tieu="Ba yếu tố quyết định việc khách xuống tiền",
  mo="Ba thứ chạy trong đầu khách trước khi quyết, và thứ tự chúng xuất hiện trong buổi tư vấn.",
  lydo="Nắm được thứ tự này thì buổi tư vấn đi đúng nhịp, không đốt cháy giai đoạn.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),
 dict(yt="bANYQ5imP3Y", muc=2,
  tieu="Tâm lý mua của khách hàng cao cấp",
  mo="Người trả tiền lớn quyết định theo cách khác hẳn người mua phổ thông, mà phần lớn người bán chưa từng được dạy điều đó.",
  lydo="Cần cho ai đang nâng phân khúc và thấy cách bán cũ không còn chạy.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),
 dict(yt="2VRKnLdYFuU", muc=2,
  tieu="Làm chủ cuộc trò chuyện với khách cao cấp",
  mo="Cách giữ nhịp buổi nói chuyện mà không lấn át, để khách thấy mình được dẫn chứ không bị ép.",
  lydo="Là phần thực hành lời nói đi kèm với tập về chẩn đoán.",
  cta_nhan="Vào Cộng đồng NGF", cta=CONG_DONG),
 dict(yt="BaN9P8UYUj8", muc=2,
  tieu="Bán giá cao giữa thị trường biến động",
  mo="Ghi từ giai đoạn thị trường khó, nói về việc chọn khách và giữ chuẩn khi xung quanh ai cũng vội hạ giá.",
  lydo="Ví dụ lấy từ bất động sản, nhưng cách nghĩ dùng được cho mọi ngành bán giá cao.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),
 dict(yt="iej3kmn7l1Q", muc=2,
  tieu="Vượt qua giai đoạn thị trường trầm lắng",
  mo="Khi thị trường chậm lại, việc gì đáng làm và việc gì chỉ đốt sức. Tập này xếp lại danh sách việc của người bán trong mùa khó.",
  lydo="Hợp để xem cùng đội ngũ trước một quý được dự báo chậm.",
  cta_nhan="Xem các chương trình", cta="chuong-trinh.html"),
 dict(yt="iWGg9QfOXQg", muc=2,
  tieu="Ba bước dẫn một buổi bán cho bất kỳ khách nào",
  mo="Một khung ba bước đơn giản để buổi tư vấn nào cũng có mở, có thân, có kết, thay vì trôi theo khách.",
  lydo="Dễ áp nhất trong các tập, dùng được ngay buổi hẹn kế tiếp.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),

 # ---- Chuyên mục 03 · Thương hiệu của người sáng lập
 dict(yt="s1UF9mSxM0s", muc=3,
  tieu="Nâng tầm vị thế chuyên gia trong mắt khách",
  mo="Vị thế không đến từ chức danh tự xưng, mà từ những dấu hiệu rất cụ thể khách đọc được khi làm việc với bạn. Tập này liệt kê các dấu hiệu đó.",
  lydo="Bạn kiểm được ngay mình đang phát ra dấu hiệu nào, thiếu dấu hiệu nào.",
  cta_nhan="Xem The Trusted Creator 30 Days", cta="chuong-trinh/the-trusted-creator.html"),
 dict(yt="sBaDKQOxRZw", muc=3,
  tieu="Vì sao nói nhiều làm mất vị thế",
  mo="Người bán hay lấp khoảng lặng bằng lời, và mỗi câu thừa là một lần tự hạ giá mình. Tập này nói về sức nặng của việc nói ít lại.",
  lydo="Nghe xong bạn sẽ để ý được chính mình trong buổi nói chuyện kế tiếp.",
  cta_nhan="Xem The Trusted Creator 30 Days", cta="chuong-trinh/the-trusted-creator.html"),
 dict(yt="Jgc233EB_H4", muc=3,
  tieu="Nói ít lại để được lắng nghe nhiều hơn",
  mo="Phần tiếp của chủ đề vị thế trong lời nói: cách đặt câu hỏi và giữ khoảng lặng để lời mình nói ra có trọng lượng.",
  lydo="Xem cùng tập trên thành một cặp, một tập chỉ vấn đề, một tập chỉ cách sửa.",
  cta_nhan="Xem The Trusted Creator 30 Days", cta="chuong-trinh/the-trusted-creator.html"),
 dict(yt="CIyxENto-7Y", muc=3,
  tieu="Khách khó tính, hay mình chưa biết cách hiện diện?",
  mo="Nhiều người than gặp toàn khách khó. Tập này lật lại: cách bạn xuất hiện đang mời kiểu khách nào tới, và đổi cách hiện diện thì tệp khách đổi theo.",
  lydo="Đáng xem nếu bạn thấy mình cứ gặp mãi một kiểu khách mệt mỏi.",
  cta_nhan="Làm phiếu chẩn đoán 7 phút", cta=PHIEU),
 dict(yt="ToQMhBlWhyw", muc=3,
  tieu="Gây ấn tượng với khách cao cấp ngay lần đầu",
  mo="Ấn tượng đầu với người có tiền không nằm ở bộ vest hay lời chào khéo, mà ở vài chi tiết chuẩn bị mà rất ít người làm.",
  lydo="Danh sách chi tiết đủ cụ thể để soát lại trước buổi gặp quan trọng.",
  cta_nhan="Xem The Trusted Creator 30 Days", cta="chuong-trinh/the-trusted-creator.html"),

 # ---- Chuyên mục 04 · Xây hệ thống cùng đội ngũ
 dict(yt="IUNdDgUxGWM", muc=4,
  tieu="Mười bước biến doanh nghiệp thành cỗ máy bán hàng",
  mo="Bức tranh đầy đủ nhất Duy từng trình bày về một hệ thống bán hàng chạy được mà không cần người chủ đứng cạnh từng bước.",
  lydo="Tập dài và nặng nhất danh sách này, xem khi bạn thật sự định xây.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),
 dict(yt="r_yjjvexSVA", muc=4,
  tieu="Tăng tỷ lệ chốt sau một tuần: sửa quy trình, không sửa người",
  mo="Chỗ tăng nhanh nhất không nằm ở việc ép đội ngũ cố thêm, mà ở vài điểm hở trong quy trình mà tuần nào cũng rò khách.",
  lydo="Có việc làm được trong bảy ngày, đo được bằng số.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),
 dict(yt="MOCQeUnyFak", muc=4,
  tieu="Kỹ năng lõi của một người bán chuyên nghiệp",
  mo="Nếu chỉ được luyện cho đội ngũ một kỹ năng, Duy chọn kỹ năng này. Tập này giải thích vì sao và luyện nó thế nào.",
  lydo="Dùng làm bài mở đầu khi đào tạo người mới trong đội ngũ.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),
 dict(yt="7lZvXC4baY8", muc=4,
  tieu="30 phút luyện nhận diện khách tiềm năng",
  mo="Một bài luyện ngắn giúp đội ngũ phân biệt người hỏi chơi với người sắp mua, để dồn giờ vào đúng khách.",
  lydo="Cho cả đội ngũ xem chung được, có bài tập làm ngay trong buổi họp.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),
 dict(yt="5vLoXS0WjHw", muc=4,
  tieu="Bán thêm đúng thời điểm mà không làm hỏng quan hệ",
  mo="Bán thêm sai lúc thì mất cả đơn đầu. Tập này chỉ ra thời điểm đúng và câu dẫn tự nhiên để giá trị đơn tăng mà khách vẫn thoải mái.",
  lydo="Một quy trình nhỏ nhưng cộng thẳng vào doanh thu mỗi tháng.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),
 dict(yt="qqbdg4g7HUc", muc=4,
  tieu="Thiết kế trải nghiệm cho khách hàng giá cao",
  mo="Khách trả giá cao đang mua cả hành trình chứ không chỉ món hàng. Tập này đi qua từng chặng của hành trình đó và chỗ hay bị bỏ quên.",
  lydo="Xem để viết lại hành trình khách của chính bạn thành các bước giao được cho đội ngũ.",
  cta_nhan="Xem Founder Growth System", cta="chuong-trinh/founder-growth-system.html"),

 # ---- Chuyên mục 05 · Kiến tạo cộng đồng
 # Kênh chưa có video đúng chủ đề này. Tạm xếp câu chuyện học viên vào đây,
 # các tập podcast quay mới về cộng đồng sẽ thay dần.
 dict(yt="TDQj-qAswCc", muc=5,
  tieu="10 năm làm nghề, và cú chuyển mình chỉ sau 30 ngày",
  mo="Một học viên làm sales 10 năm ngồi kể lại điều gì thật sự đổi trong 30 ngày làm việc cùng Duy. Không phải mẹo mới, mà là đổi cách nhìn về chính vị thế của mình.",
  lydo="Nghe một người thật kể bằng lời của họ, bạn tự đối chiếu được với chỗ mình đang đứng.",
  cta_nhan="Vào Cộng đồng NGF", cta=CONG_DONG),

 # ---- Chuyên mục 06 · AI trong công việc của người chủ
 dict(yt="l4tnX9lG8NE", muc=6,
  tieu="Thương hiệu cá nhân giữa thời AI",
  mo="AI làm nội dung nhanh hơn cho tất cả mọi người, nghĩa là nhanh không còn là lợi thế. Tập này nói về thứ máy không thay được: trải nghiệm thật và tiếng nói riêng của người chủ.",
  lydo="Xem trước khi bạn đầu tư thêm vào nội dung, để công sức đổ vào đúng chỗ tạo khác biệt.",
  cta_nhan="Đọc bài: AI làm nhanh phần đã rõ", cta="bai-viet/ai-lam-nhanh-phan-da-dung.html"),
]

def _ten_muc(n):
    so, ten = PD_MUC[n-1][0], PD_MUC[n-1][1]
    return "Chuyên mục %s · %s" % (so, ten)

def _rap_html():
    t = PD_TAP[0]
    the = "".join(
        ('<a class="pd-tap%s" href="https://www.youtube.com/watch?v=%s" target="_blank" rel="noopener" '
         'data-yt="%s" data-muc="%s" data-mucten="%s" data-tieu="%s" data-mo="%s" data-lydo="%s" '
         'data-ctan="%s" data-ctah="%s"%s>'
         '<span class="pd-tap-anh"><img src="https://i.ytimg.com/vi/%s/hqdefault.jpg" alt="" '
         'loading="lazy" decoding="async"><i class="pd-tap-play" aria-hidden="true"></i></span>'
         '<span class="pd-tap-so">Tập %02d</span><b>%s</b></a>')
        % ((" chon" if i == 0 else ""), x["yt"], x["yt"], x["muc"],
           _ten_muc(x["muc"]), x["tieu"].replace('"', "&quot;"), x["mo"].replace('"', "&quot;"),
           x["lydo"].replace('"', "&quot;"), x["cta_nhan"], dd(x["cta"]),
           ' aria-current="true"' if i == 0 else "", x["yt"], i + 1, x["tieu"])
        for i, x in enumerate(PD_TAP))
    return '''<section class="phan bd" id="xem">
  <div class="pd-rap hien">
    <div class="pd-man" id="pd-man">
      <button class="pd-poster" id="pd-poster" type="button" aria-label="Phát tập đang chọn">
        <img id="pd-poster-anh" src="https://i.ytimg.com/vi/%s/maxresdefault.jpg" alt="">
        <span class="pd-play" aria-hidden="true"></span>
      </button>
    </div>
    <div class="pd-rap-chu">
      <p class="pd-nhan" id="pd-rap-muc">%s</p>
      <h2 id="pd-rap-tieu">%s</h2>
      <p class="pd-rap-mo" id="pd-rap-mo">%s</p>
      <div class="pd-lydo"><b>Vì sao nên xem</b><p id="pd-rap-lydo">%s</p></div>
      <a class="nut nut-v" id="pd-rap-cta" href="%s">%s <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
  <div class="pd-tap-dau hien">
    <p class="mono" id="pd-loc-ten" style="margin:0;text-align:left">Tất cả các tập</p>
    <div class="pd-lat">
      <button class="pd-loc-xoa" id="pd-loc-xoa" type="button" hidden>Xem tất cả các tập</button>
      <button class="pd-mui" id="pd-truoc" type="button" aria-label="Trang trước">&larr;</button>
      <span class="pd-trang" id="pd-trang"></span>
      <button class="pd-mui" id="pd-sau" type="button" aria-label="Trang sau">&rarr;</button>
    </div>
  </div>
  <div class="pd-tap-luoi hien" id="pd-luoi">%s</div>
  <p class="pd-ghi" style="margin-top:16px">Bấm một tập để xem tại đây. Tập đang xếp theo chuyên mục gần nhất; khi mỗi chuyên mục có danh sách phát YouTube riêng, danh sách ở đây sẽ theo đúng nó.</p>
</section>
''' % (t["yt"], _ten_muc(t["muc"]), t["tieu"], t["mo"], t["lydo"], dd(t["cta"]), t["cta_nhan"], the)


KENH = """<section class="pd-hero">
  <div class="pd-nen" aria-hidden="true"><img src="img/dh-giua-doan.webp" alt="" width="1400" height="934" fetchpriority="high"></div>
  <div class="bd pd-hero-in">
    <p class="mono">Podcast Next Gen Founder</p>
    <h1>Mỗi tập một vấn đề,<br>kể tới tận gốc.</h1>
    <p class="pd-dan">Video podcast của Duy trên YouTube. Ngồi xuống cùng một câu hỏi thật của người sáng lập, đi qua ví dụ, điều kiện áp dụng, và cả chỗ phương pháp không hợp.</p>
    <div class="pd-nut-hang">
      <a class="nut nut-v" href="{YOUTUBE}" target="_blank" rel="noopener">Xem trên YouTube <span class="mt" aria-hidden="true">&rarr;</span></a>
      <a class="lk-v" href="#xem">Xem một tập ngay <span class="mt" aria-hidden="true">&darr;</span></a>
    </div>
    <div class="pd-hieu">
      <span><b>230.000</b> đăng ký YouTube</span>
      <span><b>800.000+</b> theo dõi các nền tảng</span>
      <span><b>6 năm</b> đăng đều, không nghỉ quãng nào</span>
    </div>
  </div>
  <span class="pd-cuon" aria-hidden="true">Cuộn để xem</span>
</section>

{RAP}<section class="pd-muc" id="chuyen-muc">
  <div class="bd pd-muc-dau">
    <p class="mono" style="margin:0">6 chuyên mục</p>
    <p class="pd-ghi">Bấm một chuyên mục để xem các tập của nó ở khung phía trên.</p>
  </div>
  {BANDS}
</section>

<section class="phan bd hoa-van duoi">
  <div class="pd-cuoi hien">
    <a class="pd-xem" href="{YOUTUBE}" target="_blank" rel="noopener" aria-label="Mở kênh YouTube của Coach Duy Nguyễn">
      <img src="img/cd-giang-slide.webp" alt="" loading="lazy">
      <span class="pd-play" aria-hidden="true"></span>
    </a>
    <div>
      <p class="mono" style="text-align:left">Vì sao có podcast này</p>
      <h2>YouTube là nơi Duy nói dài và nói sâu nhất</h2>
      <p>TikTok mở đầu câu chuyện, Facebook kể trải nghiệm, còn ở đây Duy trình bày hết một phương pháp. <span class="nhan">Mỗi tập đi trọn một vấn đề, xem xong là dùng được</span>, không phải đoạn cắt tạo tò mò.</p>
      <p style="margin-top:14px">Chủ đề không lấy theo xu hướng. Nó đến từ ba nguồn: câu hỏi lặp lại trong các buổi tư vấn, tình huống thật trong cộng đồng, và chỗ chính Duy từng vấp.</p>
      <p style="margin-top:26px"><a class="nut nut-v" href="{YOUTUBE}" target="_blank" rel="noopener">Xem kênh YouTube <span class="mt" aria-hidden="true">&rarr;</span></a></p>
    </div>
  </div>
  <div class="khong hien" style="max-width:70ch;margin:44px auto 0">
    <b>Số để bạn kiểm, không phải để khoe</b>
    <p>Số ở trang này đọc từ trang công khai của từng kênh, tính tới tháng 8 năm 2026. Nó nói Duy có mặt đủ lâu và đủ đều, không nói Duy giúp được bạn. Xem một tập rồi hãy quyết.</p>
  </div>
</section>
""".replace("{RAP}", _rap_html()).replace("{YOUTUBE}", YOUTUBE).replace("{BANDS}", pd_band)

trang("podcast.html", "Podcast Next Gen Founder · Coach Duy Nguyễn",
      "Video podcast của Coach Duy Nguyễn trên YouTube: mỗi tập đi trọn một vấn đề của người sáng lập, qua sáu chuyên mục từ điểm nghẽn tới AI.",
      KENH, "podcast.html")
print("  podcast.html")

# trang cũ kenh-youtube.html chuyển hướng sang trang mới, giữ liên kết đã chia sẻ
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "kenh-youtube.html"), "w", encoding="utf-8").write(
"""<!doctype html><html lang="vi"><head><meta charset="utf-8">
<title>Podcast Next Gen Founder</title>
<link rel="canonical" href="%s/podcast.html">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=podcast.html">
</head>
<body><p>Trang này đã chuyển thành <a href="podcast.html">Podcast Next Gen Founder</a>.</p>
<script>location.replace('podcast.html');</script></body></html>""" % BASE)
print("  kenh-youtube.html (chuyen huong)")

# ---------------------------------------------------------------- LIÊN HỆ
LIEN_HE = dau_trang("Liên hệ", "Bốn cách liên hệ với Duy",
  "Số lượng nhận rất giới hạn. Chọn đúng cửa dưới đây thì Duy trả lời nhanh hơn, và bạn cũng đỡ mất thời gian chờ.") + """
<section class="phan bd hoa-van">
  <div class="lh tre hien">
    <div class="hop">
      <h3>Muốn tham gia cộng đồng</h3>
      <p>Đây là cửa chính. Điền biểu mẫu khoảng hai phút, đội ngũ Next Gen Founder sẽ liên hệ để xem cộng đồng có giải được điều bạn đang kẹt không. Nếu chưa phải lúc, Duy và đội ngũ sẽ chỉ bạn bước hợp hơn.</p>
      <a class="lk-v" href="{CONG_DONG}">Đăng ký danh sách chờ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Chưa rõ mình đang kẹt ở đâu</h3>
      <p>Làm phiếu chẩn đoán bảy phút trước. Bạn sẽ tự nhìn ra điểm nghẽn đang chặn mình nhiều nhất, trước khi nói chuyện với bất kỳ ai, kể cả Duy.</p>
      <a class="lk-v" href="{PHIEU}" target="_blank" rel="noopener">Làm phiếu chẩn đoán <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Mời nói chuyện hoặc hợp tác truyền thông</h3>
      <p>Gửi thư nêu rõ chủ đề, đối tượng người nghe, thời gian và địa điểm. Duy trả lời trong vòng vài ngày làm việc.</p>
      <a class="lk-v" href="mailto:{EMAIL}">{EMAIL} <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Cố vấn riêng và giải pháp doanh nghiệp</h3>
      <p>Đây là hợp đồng riêng, Duy nhận rất giới hạn và chỉ mở sau khi đã trao đổi đủ. Bắt đầu bằng danh sách chờ cộng đồng, không bắt đầu bằng một cuộc gọi bán hàng.</p>
      <a class="lk-v" href="chuong-trinh/co-van-rieng.html">Xem phạm vi cố vấn riêng <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
  <div class="khong hien" style="max-width:70ch;margin:34px auto 0">
    <b>Những việc Duy không nhận</b>
    <p>Duy không làm thay phần việc của bạn, và không cam kết một con số doanh thu. Nếu Duy thấy mình chưa giúp được bạn lúc này, Duy sẽ nói thẳng và ngồi lại chỉ bạn chỗ hợp hơn. Nói không sớm là cách Duy giữ chuẩn.</p>
  </div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/dh-phong-lon.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Nơi Duy xuất hiện</p><h2>Bốn kênh Duy đăng đều suốt sáu năm</h2>
    <p>Nội dung dài nhất nằm ở YouTube. Nội dung ngắn ở TikTok và Facebook. Zalo là nơi Duy trả lời câu hỏi cụ thể.</p></div>
    <div class="hero-so hien" style="border-top:0;margin-top:0;padding-top:0">{SO_LIEU}</div>
    <p class="hero-ghi" style="margin-top:20px">Tính tới tháng 8 năm 2026, đọc từ trang công khai của từng kênh.</p>
  </div>
</section>
""".replace("{CONG_DONG}", CONG_DONG).replace("{PHIEU}", PHIEU).replace("{EMAIL}", EMAIL).replace("{SO_LIEU}", so_lieu_html)

trang("lien-he.html", "Liên hệ Coach Duy Nguyễn",
      "Bốn cửa liên hệ với Coach Duy Nguyễn: tham gia cộng đồng, làm phiếu chẩn đoán, mời nói chuyện, và cố vấn riêng.",
      LIEN_HE, "lien-he.html")
print("  lien-he.html")

# ---------------------------------------------------------------- 404
BON04 = dau_trang("Không tìm thấy", "Không tìm thấy trang này",
  "Có thể đường dẫn đã đổi, hoặc bạn gõ nhầm một ký tự. Dưới đây là những chỗ hay được tìm nhất.") + """
<section class="phan bd hoa-van">
  <div class="luoi c3 tre hien">
    <article class="the"><h3>Trang chủ</h3><p>Bắt đầu lại từ đầu.</p>
      <p style="margin-top:14px"><a class="lk-v" href="index.html">Về trang chủ <span class="mt" aria-hidden="true">&rarr;</span></a></p></article>
    <article class="the"><h3>Blog</h3><p>Mười bài viết về điểm nghẽn của người sáng lập.</p>
      <p style="margin-top:14px"><a class="lk-v" href="blog.html">Đọc blog <span class="mt" aria-hidden="true">&rarr;</span></a></p></article>
    <article class="the"><h3>Chương trình</h3><p>Hệ sinh thái Next Gen Founder, tám chương trình.</p>
      <p style="margin-top:14px"><a class="lk-v" href="chuong-trinh.html">Xem chương trình <span class="mt" aria-hidden="true">&rarr;</span></a></p></article>
  </div>
</section>"""
trang("404.html", "Không tìm thấy trang · Coach Duy Nguyễn",
      "Trang bạn tìm không có ở đây. Xem trang chủ, blog hoặc danh sách chương trình.", BON04, "index.html")
print("  404.html")

# ---------------------------------------------------------------- sitemap, robots, llms
URLS = ["", "cong-dong/", "ve-toi.html", "chuong-trinh.html", "phuong-phap.html", "blog.html",
        "sach.html", "podcast.html", "lien-he.html"] \
     + ["chuong-trinh/" + c["tep"] for c in CT] + ["bai-viet/" + b["tep"] for b in BAI]
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for t in URLS:
    sm.append("  <url><loc>%s/%s</loc></url>" % (BASE, t))
sm.append("</urlset>")
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "sitemap.xml"), "w", encoding="utf-8").write("\n".join(sm))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "robots.txt"), "w", encoding="utf-8").write(
    "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % BASE)

# GitHub Pages đọc tệp này để biết tên miền riêng. Sinh cùng lúc với robots.txt
# nên không bao giờ bị mất khi dựng lại trang.
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "CNAME"), "w",
     encoding="utf-8").write(BASE.split("//")[1] + "\n")

llms = """# Coach Duy Nguyễn

> Người cố vấn đi cùng nhà sáng lập thế hệ mới. Giúp người chủ biến uy tín cá nhân thành một hệ thống mà đội ngũ có thể cùng vận hành. Phương pháp riêng: bốn năng lực của nhà sáng lập thế hệ mới và CDN Trust Orbit, hệ thống quỹ đạo niềm tin.

## Trang chính
- [Về Duy](%(b)s/ve-toi.html): nói với ai, nhìn thấy vấn đề gì, số liệu công khai và giới hạn của nó
- [Phương pháp](%(b)s/phuong-phap.html): bốn năng lực, năm việc của người cố vấn, CDN Trust Orbit
- [Chương trình](%(b)s/chuong-trinh.html): hệ sinh thái Next Gen Founder, tám chương trình
- [Blog](%(b)s/blog.html): %(n)d bài viết cho nhà sáng lập
- [Sách](%(b)s/sach.html): Bán Bằng Vị Thế, đang viết, dự kiến quý 4 năm 2026
- [Podcast Next Gen Founder](%(b)s/podcast.html): video podcast trên YouTube, sáu chuyên mục, 230 nghìn người đăng ký
- [Liên hệ](%(b)s/lien-he.html)

## Chương trình
%(ct)s

## Bài viết
%(bv)s

## Trang liên quan cùng hệ sinh thái
- [Cộng đồng Next Gen Founder](%(cd)s): trang đăng ký danh sách chờ
- [Phiếu chẩn đoán 7 phút](%(ph)s): công cụ tự đánh giá điểm nghẽn
- [Cỗ máy Nội dung Một người](%(cm)s): bản đồ hệ thống nội dung một người vận hành
""" % dict(b=BASE, n=len(BAI), cd=CONG_DONG, ph=PHIEU, cm=CO_MAY,
           ct="\n".join("- [%s](%s/chuong-trinh/%s): %s" % (c["ten"], BASE, c["tep"], c["tom"]) for c in CT),
           bv="\n".join("- [%s](%s/bai-viet/%s): %s" % (b["tieu"], BASE, b["tep"], b["mo"]) for b in BAI))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "llms.txt"), "w", encoding="utf-8").write(llms)
print("  sitemap.xml, robots.txt, llms.txt")
print("XONG: %d trang" % (len(URLS) + 1))
