# -*- coding: utf-8 -*-
"""Dựng toàn bộ website Coach Duy Nguyễn. Chạy: python3 dung.py"""
import html, json, os, re
from lib import (BASE, CONG_DONG, CO_MAY, PHIEU, EMAIL, TTC_LANDING, YOUTUBE, TIKTOK,
                 NGAY_SUA, TO_CHUC, trang, dau_trang, dd)
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
# Bốn kênh và hai con số khác loại. Tách riêng vì một bên là người theo dõi,
# một bên là thành viên cộng đồng, một bên là số năm. Xếp chung một hàng thì
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
  <div class="bd"><p class="kh-dan">Ba mươi doanh nghiệp đã mời Duy đào tạo và tư vấn</p></div>
  {KHACH}
</section>

<section class="phan bd hoa-van" id="ve-toi">
  <div class="vt">
    <div class="vt-chu hien">
      <p class="mono">Về Duy</p>
      <h2>Duy đi cùng những người muốn tự nâng chuẩn của chính mình</h2>
      <p>Đó là chuyên gia có nghề, chủ doanh nghiệp dịch vụ, và người đang dẫn một đội ngũ. Điểm chung của họ: khách mua vì tin ở chính con người họ, trước khi tin vào công ty. Nên chuẩn của họ cũng là chuẩn của cả việc kinh doanh.</p>
      <p>Điều họ muốn không dừng ở doanh thu tháng này. Họ muốn mình trở thành một <span class="nhan">điểm đến đáng tin</span>: đối tác tìm tới khi có việc lớn, khách tìm tới trước khi đi so giá, người giỏi tìm tới xin một chỗ ngồi. Một tên tuổi khách nhớ, và dám tin.</p>
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

<section class="phan bd phan-sang" id="khung">
  <div class="phan-dau hien">
    <p class="mono">Triết lý làm nghề của Duy</p>
    <h2>Những khung tư duy Duy đúc kết qua nhiều năm làm nghề</h2>
    <p>Có khung Duy tự rút ra từ những buổi tư vấn thật, có khung Duy chọn lọc từ người đi trước rồi kiểm chứng lại trên chính khách hàng của mình. Duy không muốn chia sẻ những mẹo ngắn hạn. Mọi thứ Duy làm đều dựa trên tư duy gốc, và bạn có thể tìm hiểu những phương pháp luận cùng khung tư duy cốt lõi trong công việc của Duy ở đây.</p>
  </div>
  <div class="kh-luoi tre hien">
    <a class="kh-o" href="phuong-phap.html#pp-2" aria-label="Tam giác vàng">
      <svg viewBox="0 0 84 74" aria-hidden="true"><polygon points="42,7 78,67 6,67" fill="none" stroke="var(--vang)" stroke-width="1.3" opacity=".85"></polygon><circle cx="42" cy="7" r="3" fill="var(--vang)"></circle><circle cx="78" cy="67" r="3" fill="var(--vang)"></circle><circle cx="6" cy="67" r="3" fill="var(--vang)"></circle></svg>
      <b>Tam giác vàng</b><i>Vị thế 30 giây đầu</i>
    </a>
    <a class="kh-o" href="phuong-phap.html#pp-4" aria-label="Ba Điểm Chạm">
      <svg viewBox="0 0 84 74" aria-hidden="true"><circle cx="14" cy="37" r="9" fill="none" stroke="var(--vang)" stroke-width="1.3"></circle><circle cx="42" cy="37" r="9" fill="none" stroke="var(--vang)" stroke-width="1.3"></circle><circle cx="70" cy="37" r="9" fill="none" stroke="var(--vang)" stroke-width="1.3"></circle><line x1="23" y1="37" x2="33" y2="37" stroke="var(--vang)" stroke-width="1.2" opacity=".6"></line><line x1="51" y1="37" x2="61" y2="37" stroke="var(--vang)" stroke-width="1.2" opacity=".6"></line></svg>
      <b>Ba Điểm Chạm</b><i>Dẫn quyết định</i>
    </a>
    <a class="kh-o" href="phuong-phap.html#pp-3" aria-label="Công thức tin cậy">
      <svg viewBox="0 0 84 74" aria-hidden="true"><rect x="10" y="12" width="16" height="14" rx="3" fill="none" stroke="var(--vang)" stroke-width="1.2"></rect><rect x="34" y="12" width="16" height="14" rx="3" fill="none" stroke="var(--vang)" stroke-width="1.2"></rect><rect x="58" y="12" width="16" height="14" rx="3" fill="none" stroke="var(--vang)" stroke-width="1.2"></rect><line x1="10" y1="38" x2="74" y2="38" stroke="var(--vang)" stroke-width="1.4"></line><rect x="34" y="48" width="16" height="14" rx="3" fill="none" stroke="var(--vang)" stroke-width="1.6"></rect></svg>
      <b>Công thức tin cậy</b><i>Mẫu số phá tất cả</i>
    </a>
    <a class="kh-o" href="phuong-phap.html#pp-8" aria-label="Năm tầng doanh nghiệp">
      <svg viewBox="0 0 84 74" aria-hidden="true"><polygon points="42,6 76,68 8,68" fill="none" stroke="var(--vang)" stroke-width="1.3" opacity=".85"></polygon><line x1="34" y1="21" x2="50" y2="21" stroke="var(--vang)" stroke-width="1" opacity=".5"></line><line x1="27" y1="35" x2="57" y2="35" stroke="var(--vang)" stroke-width="1" opacity=".5"></line><line x1="20" y1="49" x2="64" y2="49" stroke="var(--vang)" stroke-width="1" opacity=".5"></line></svg>
      <b>Năm tầng</b><i>Doanh nghiệp tự chạy</i>
    </a>
  </div>
  <div class="blog-them"><a class="nut nut-vien" href="phuong-phap.html">Xem các triết lý và phương pháp <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>

<section class="phan bd hoa-van duoi" id="chuyen-gia">
  <div class="phan-dau hien">
    <p class="mono">Chuyên gia nói về Duy</p>
    <h2>Người trong nghề nói gì về cách Duy làm việc</h2>
  </div>
  <div class="kol-luoi tre hien">
    <article class="kol">
      <div class="anh"><img src="img/kol-1.webp" alt="Chân dung Mr. Minh Khôi" loading="lazy"></div>
      <div class="kol-than">
        <p>Làm việc cùng Coach Duy Nguyễn là một bước ngoặt trong sự nghiệp của tôi.</p>
        <div class="kol-ten"><b>Mr. Minh Khôi</b><span>Founder DAS Bí Mật Học Viện Số</span></div>
      </div>
    </article>
    <article class="kol">
      <div class="anh"><img src="img/kol-2.webp" alt="Chân dung Mr. Vũ Quang Minh" loading="lazy"></div>
      <div class="kol-than">
        <p>Coach Duy không chỉ giúp tôi giải quyết vấn đề mà còn mở ra một góc nhìn mới về bản thân và con đường kinh doanh.</p>
        <div class="kol-ten"><b>Mr. Vũ Quang Minh</b><span>Founder Hưng Đạo Vương Academy</span></div>
      </div>
    </article>
    <article class="kol">
      <div class="anh"><img src="img/kol-3.webp" alt="Chân dung ThS. Vũ Kim Khánh" loading="lazy"></div>
      <div class="kol-than">
        <p>Sau quá trình làm việc cùng Coach Duy Nguyễn, tôi không chỉ xây dựng được chiến lược vững chắc&hellip;</p>
        <div class="kol-ten"><b>ThS. Vũ Kim Khánh</b><span>Founder/CEO Học viện Doanh nhân Ecom FOS</span></div>
      </div>
    </article>
  </div>
</section>

<section class="phan bd hoa-van" id="cong-dong">
  <div class="phan-dau hien">
    <p class="mono">Cộng đồng Next Gen Founder · đang nhận danh sách chờ</p>
    <h2>Nơi uy tín cá nhân trở thành điểm tựa</h2>
    <p>Chuyên gia, chủ doanh nghiệp, người đang dẫn một đội ngũ. Điểm chung: <span class="nhan">khách tin bạn trước khi tin công ty bạn.</span></p>
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

<section class="phan bd phan-vang" id="hanh-trinh">
  <div class="phan-dau hien">
    <p class="mono">Hành trình ba chặng</p>
    <h2>Đi với Next Gen Founder theo thứ tự nào</h2>
    <p>Không ai phải cam kết lớn ngay từ đầu. Mỗi chặng là một cánh cửa riêng, và bạn dừng ở chặng nào cũng được.</p>
  </div>
  <div class="ht-luoi tre hien">
    <a class="ht" href="chuong-trinh/cong-dong-mo.html">
      <em>Chặng 01</em><h3>Cộng đồng Mở</h3>
      <p>Cửa vào rộng nhất, không mất phí nhưng có sàng lọc. Bạn xem cách Duy làm việc trước khi quyết định đi tiếp.</p>
      <i>Không mất phí &middot; có sàng lọc</i>
    </a>
    <span class="ht-mui" aria-hidden="true">&rarr;</span>
    <a class="ht" href="chuong-trinh/cong-dong-thanh-vien.html">
      <em>Chặng 02</em><h3>Cộng đồng Thành viên</h3>
      <p>Luyện đủ bốn năng lực suốt một năm ngay trong công việc thật, theo nhịp đều, có người phản hồi và đi cùng cả chặng.</p>
      <i>Bốn năng lực &middot; một năm</i>
    </a>
    <span class="ht-mui" aria-hidden="true">&rarr;</span>
    <a class="ht" href="chuong-trinh/diamond-founder-club.html">
      <em>Chặng 03</em><h3>Đi sâu hơn</h3>
      <p>Diamond Founder Club theo lời mời, hoặc cố vấn riêng một kèm một cho số rất ít người mỗi năm.</p>
      <i>Theo lời mời &middot; nhận giới hạn</i>
    </a>
  </div>
</section>

<section class="phan bd hoa-van duoi" id="blog">
  <div class="phan-dau hien">
    <p class="mono">Blog</p>
    <h2>Chỗ nhà sáng lập hay vấp nhất, và cách gỡ</h2>
    <p>Bốn câu dưới đây Duy nghe đi nghe lại từ người sáng lập, tới mức nghe nửa câu đầu là biết nửa sau. Thấy mình trong câu nào, bấm vào câu đó.</p>
  </div>
  <div class="tc-luoi tre hien">
    <a class="tc" href="bai-viet/bon-cau-toi-nghe-nhieu-nhat.html"><i>01</i><span>Tôi đăng nội dung nhiều nhưng không ra đúng khách.</span></a>
    <a class="tc" href="bai-viet/bon-cau-toi-nghe-nhieu-nhat.html"><i>02</i><span>Đội ngũ bán hàng vẫn phải chờ tôi xuất hiện mới chốt được.</span></a>
    <a class="tc" href="bai-viet/bon-cau-toi-nghe-nhieu-nhat.html"><i>03</i><span>Tuyển thêm người mà tôi lại bận hơn trước.</span></a>
    <a class="tc" href="bai-viet/bon-cau-toi-nghe-nhieu-nhat.html"><i>04</i><span>Tháng tốt tháng kém mà không rõ vì sao.</span></a>
  </div>
  <div class="blog hien">
    {BAI_LON}
    <div class="ds-bai">{BAI_NHO}</div>
  </div>
  <div class="blog-them"><a class="nut nut-vien" href="blog.html">Xem tất cả bài viết <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>

<section class="phan bd phan-sang" id="kho-cong-cu">
  <div class="phan-dau hien">
    <p class="mono">Kho công cụ và tài liệu</p>
    <h2>Mỗi công cụ gắn với một phương pháp</h2>
    <p>Dùng được ngay trên trang, không cần để lại thông tin gì. Công cụ nào đang làm thì ghi rõ đang làm.</p>
  </div>
  <div class="tl-luoi tre hien">
    <article class="tl">
      <div class="tl-bia3d" aria-hidden="true"><div class="bia3d"><i>Công cụ tự kiểm</i><b>Ba Điểm Chạm</b><span class="chan"><img src="img/logo-dn.webp" alt="" loading="lazy"><span>Coach Duy Nguyễn</span></span></div></div>
      <div class="tl-than"><h3>Bảng tự kiểm sau buổi tư vấn</h3>
      <p class="tl-mo">Mười hai câu chấm lại buổi tư vấn gần nhất, chỉ ra bạn đang thiếu chạm nào. Ba phút, kết quả chỉ mình bạn thấy.</p>
      <div class="tl-duoi"><span class="tl-tt mo">Dùng ngay trên trang</span>
      <a class="lk-v" href="cong-cu/tu-kiem-ba-diem-cham.html">Mở công cụ <span class="mt" aria-hidden="true">&rarr;</span></a></div></div>
    </article>
    <article class="tl">
      <div class="tl-bia3d" aria-hidden="true"><div class="bia3d"><i>Ebook</i><b>REFLECT</b><span class="chan"><img src="img/logo-dn.webp" alt="" loading="lazy"><span>Coach Duy Nguyễn</span></span></div></div>
      <div class="tl-than"><h3>Kịch bản REFLECT theo 10 ngành</h3>
      <p class="tl-mo">Trọn bộ kịch bản phản chiếu lời từ chối cho mười ngành dịch vụ, kèm lộ trình luyện ba mươi ngày.</p>
      <div class="tl-duoi"><span class="tl-tt mo">Sắp mở bán</span>
      <a class="lk-v" href="sach.html#thu-vien">Xem chi tiết <span class="mt" aria-hidden="true">&rarr;</span></a></div></div>
    </article>
    <article class="tl">
      <div class="tl-bia3d" aria-hidden="true"><div class="bia3d"><i>Công cụ tự kiểm</i><b>Hai tầng ba lăng kính</b><span class="chan"><img src="img/logo-dn.webp" alt="" loading="lazy"><span>Coach Duy Nguyễn</span></span></div></div>
      <div class="tl-than"><h3>Phiếu sàng khách trước buổi hẹn</h3>
      <p class="tl-mo">Chấm nhanh một người qua ba lăng kính để biết nên dành cho họ một buổi sâu hay một lời hẹn lại.</p>
      <div class="tl-duoi"><span class="tl-tt">Sắp ra mắt</span>
      <a class="lk-v" href="sach.html#thu-vien">Nhận tin khi có <span class="mt" aria-hidden="true">&rarr;</span></a></div></div>
    </article>
  </div>
  <div class="blog-them"><a class="nut nut-vien" href="sach.html#thu-vien">Xem cả kho công cụ <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>
"""
# Logo doanh nghiệp đã mời Coach Duy đào tạo hoặc tư vấn.
# Nguồn logo: dải đối tác trên scaleos.vn cho 26 đơn vị, bốn đơn vị còn lại do CDN
# gửi ngày 28/08/2026. Tất cả đã cắt nền và cắt sát hình bằng canvas, lưu ở
# img/doi-tac/. Từ 28/08/2026 không còn đơn vị nào phải hiện bằng chữ.
KHACH = [("mobifone","MobiFone"),("aia","AIA"),("acb","ACB"),("prudential","Prudential"),
 ("bao-viet","Bảo Việt Nhân thọ"),("kb-securities","KB Securities"),("hsc","HSC"),
 ("mascom","Mascom"),("hung-vuong","Hưng Vượng Holdings"),("john-partners","John & Partners"),
 ("gaia","GAIA"),("minh-minh","Minh Minh Group"),("an-thuong-yen","An Thượng Yến"),
 ("nhan-ai","Nhân Ái"),("vulcano","Vulcano"),("kenli","KENLI"),("micc","MICC Group"),
 ("bighomes","BigHomes Group"),("trikhang-pharma","Trikhang Pharma"),("aiesec","AIESEC"),
 ("phan-hang","Phan Hằng Group"),("w-group","W Group"),("bs-group","BS Group"),
 ("fos","FOS"),("gia-tot","Gia Tốt Việt Nam"),("secrets","Digital Academy Secrets"),
 ("vinh-tuong","Vĩnh Tường Saint-Gobain"),("x3-nang-suat","X3 Năng Suất"),
 ("lya","LYA Group"),("legacy","Legacy")]
# Mỗi logo có hai bản. Bản một màu hiện thường trực, bản màu gốc hiện khi rê chuột.
# Bản một màu KHÔNG dựng bằng phép lọc brightness(0) như trước, vì phép đó dồn mọi
# điểm ảnh về một màu nên logo nào có chi tiết bên trong sẽ thành khối đặc. Bản
# hiện tại tính độ sáng thật của từng điểm, đảo lại nếu logo vốn tối, rồi giữ
# nguyên chênh lệch sáng tối. Xem img/doi-tac/mono/.
_kh1 = "".join(
    ('<span class="kh-l">'
     '<img src="img/doi-tac/mono/%s.png" alt="%s" decoding="async">'
     '<img class="kh-mau" src="img/doi-tac/%s.png" alt="" aria-hidden="true" decoding="async">'
     '</span>' % (t, n, t))
    if t else ('<span class="kh-t">%s</span>' % n)
    for t, n in KHACH)
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

# Trang chủ khai ba thực thể nối với nhau bằng @id: người, tổ chức đứng sau, và
# chính website. Trước đây chỉ khai mỗi Person, nên máy thấy một tên người mà
# không biết Next Step Group là gì và ai là chủ trang.
LD_CHU = json.dumps({"@context": "https://schema.org", "@graph": [
    {"@type": "Person", "@id": BASE + "/#duy",
     "name": "Coach Duy Nguyễn", "alternateName": "Duy Nguyễn",
     "jobTitle": "Người cố vấn cho nhà sáng lập",
     "description": "Người cố vấn đi cùng nhà sáng lập thế hệ mới. Giúp người chủ biến uy tín "
                    "cá nhân thành hệ thống mà đội ngũ cùng vận hành.",
     "url": BASE + "/", "image": BASE + "/img/cd-chan-dung.webp",
     "worksFor": {"@id": BASE + "/#to-chuc"},
     "knowsAbout": ["Thương hiệu nhà sáng lập", "Tư vấn có trách nhiệm", "Hệ thống tăng trưởng",
                    "Kiến tạo cộng đồng", "CDN Trust Orbit", "Next Gen Founder"],
     "sameAs": [YOUTUBE, TIKTOK]},
    TO_CHUC,
    {"@type": "WebSite", "@id": BASE + "/#trang",
     "url": BASE + "/", "name": "Coach Duy Nguyễn",
     "inLanguage": "vi", "publisher": {"@id": BASE + "/#to-chuc"}},
]}, ensure_ascii=False)

trang("index.html", "Coach Duy Nguyễn · Người cố vấn cho nhà sáng lập thế hệ mới",
      "Coach Duy Nguyễn đi cùng nhà sáng lập biến uy tín cá nhân thành hệ thống mà đội ngũ cùng vận hành. Bốn năng lực, quỹ đạo niềm tin, và cộng đồng Next Gen Founder.",
      INDEX, "index.html", jsonld=LD_CHU)
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

<section class="phan bd phan-sang" id="tam-nhin">
  <div class="phan-dau hien">
    <p class="mono">Tầm nhìn · Sứ mệnh · Giá trị</p>
    <h2>Đích Duy đang đi tới, và thứ không đổi trên đường đi</h2>
    <p>Phần này lấy nguyên văn từ bộ chiến lược Next Gen Founder, để bạn đọc được đúng thứ đội ngũ NSG đang dùng để tự soi mỗi quý, không phải một bản viết riêng cho trang giới thiệu.</p>
  </div>
  <div class="tn-khoi hien">
    <div class="tn-so"><b>10.000</b><span>Next Gen Founder · đến năm 2031</span></div>
    <div class="tn-loi">
      <p>Họ xây doanh nghiệp dựa trên niềm tin, hệ thống và con người, đồng thời tiếp tục chia sẻ kinh nghiệm, cơ hội và sự nâng đỡ cho những người đi sau.</p>
      <p>Con số này vừa là mục tiêu kinh doanh, vừa là cam kết về tác động. NSG là phương tiện, đích đến là 10.000 người chủ thay đổi được cách họ xây doanh nghiệp.</p>
    </div>
  </div>
  <div class="sm-khoi hien">
    <b>Sứ mệnh</b>
    <p>NSG là chỗ dựa và môi trường phát triển để nhà sáng lập Việt Nam trở thành phiên bản tốt hơn của chính mình, xây doanh nghiệp tốt hơn và tiếp tục nâng đỡ những người đi sau.</p>
  </div>
  <div class="gt-luoi tre hien">
    <article class="gt"><em>Giá trị 01</em><h3>Chất lượng</h3><p>Đặt chất lượng tri thức, phương pháp và kết quả khách hàng lên trước việc làm nhiều hoặc mở rộng nhanh.</p></article>
    <article class="gt"><em>Giá trị 02</em><h3>Tính cập nhật</h3><p>Liên tục học từ thị trường, khách hàng, công nghệ và dữ liệu thật để kiến thức không thành lý thuyết cũ.</p></article>
    <article class="gt"><em>Giá trị 03</em><h3>Trách nhiệm xã hội</h3><p>Tạo giá trị kinh doanh mà không gây hại cho khách hàng, đội ngũ và cộng đồng.</p></article>
    <article class="gt"><em>Giá trị 04</em><h3>Đổi mới sáng tạo</h3><p>Tìm cách tốt hơn để khách học, làm và nhận kết quả, không lặp lại máy móc cách cũ.</p></article>
    <article class="gt"><em>Giá trị 05</em><h3>Tôn trọng con người</h3><p>Tôn trọng khách hàng, nhân sự và đối tác như những người có quyền lựa chọn và có khả năng trưởng thành.</p></article>
  </div>
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
      <div><h3>Chủ doanh nghiệp dịch vụ</h3><p>Đã có khách, có doanh thu và một đội ngũ đang chạy. Nhưng giao dịch lớn, ngoại lệ và quyết định quan trọng vẫn quay về bàn của bạn.</p></div>
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

<section class="phan bd phan-sang" id="phuong-phap-loi">
  <div class="phan-dau hien">
    <p class="mono">Phương pháp Duy dùng</p>
    <h2>Mỗi phương pháp có một hình dạng riêng</h2>
    <p>Đây là những khung Duy dựng ra trong lúc làm nghề rồi dùng đi dùng lại. Trang này cho bạn thấy hình dạng của từng khung và lúc nào thì mở nó ra. Phần lời thoại và bộ câu hỏi chi tiết nằm trong chương trình, không nằm ở đây.</p>
  </div>

  <div class="pp-bo">

    <article class="pp hien" id="pp-1">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 01</span></div>
        <h3 class="pp-ten">Bốn nguyên tắc bất biến</h3>
        <p class="pp-mo">Đây là nền của mọi thứ còn lại. Bốn nguyên tắc này quyết định bạn cư xử thế nào lúc khó, tức là lúc tháng chưa đạt và trước mặt là một người sẵn sàng trả tiền cho thứ chưa hợp với họ.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Trước khi bàn tới bất kỳ kỹ thuật nào. Bốn nguyên tắc sai thì kỹ thuật càng giỏi càng đi xa khỏi chỗ đúng.</p></div>
      </div>
      <div class="pp-hinh">
        <div class="nt4">
          <div><b>01</b><span>Không thuyết phục. Dẫn để khách tự nhìn ra.</span></div>
          <div><b>02</b><span>Đo bằng chất lượng quyết định của khách, không bằng doanh số.</span></div>
          <div><b>03</b><span>Tin cậy do khách trao cho bạn, không phải do bạn tự nhận.</span></div>
          <div><b>04</b><span>Không hợp thì nói thẳng. Dám nói không là cách xây tin cậy nhanh nhất.</span></div>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-2">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 02</span></div>
        <h3 class="pp-ten">Tam giác vàng</h3>
        <p class="pp-mo">Ba đỉnh tạo nên ấn tượng trong ba mươi giây đầu. Điều đáng nói là ba đỉnh không cộng vào nhau, chúng đỡ lẫn nhau. Thiếu một đỉnh thì hai đỉnh còn lại không cứu được, và người đối diện cảm nhận được chỗ thiếu đó trước khi họ kịp gọi tên.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Khi bạn muốn biết vì sao một người rất giỏi nghề mà vẫn không được tin, hoặc ngược lại.</p></div>
      </div>
      <div class="pp-hinh">
        <div class="tg">
          <svg viewBox="0 0 300 270" aria-hidden="true">
            <polygon points="150,44 268,226 32,226" fill="none" stroke="var(--vang)"
              stroke-width="1.2" opacity=".8"></polygon>
          </svg>
          <span class="tg-dinh" style="left:50%;top:0"><i></i>Phong thái</span>
          <span class="tg-dinh" style="left:89%;top:87%"><i></i>Chân thành</span>
          <span class="tg-dinh" style="left:11%;top:87%"><i></i>Có nghề</span>
          <span class="tg-giua">Thiếu một đỉnh,<br>hai đỉnh kia không cứu được</span>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-3">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 03</span></div>
        <h3 class="pp-ten">Công thức tin cậy</h3>
        <p class="pp-mo">Tin cậy không mơ hồ, nó có cấu trúc. Ba thứ xây nó lên, và một thứ chia nhỏ tất cả. Thứ chia nhỏ là mức bạn đang nghĩ về chính mình trong lúc nói chuyện với người khác. Bạn có thể rất giỏi ở tử số, mà mẫu số lớn thì mọi thứ đều bị kéo xuống.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Khi mọi thứ đều đúng mà khách vẫn không tin bạn. Đo bốn ô dưới đây, gần như luôn hỏng ở mẫu số.</p></div>
        <p class="pp-nguon"><b>Nguồn</b>Công thức gốc là Trust Equation của David Maister, Charles Green và Robert Galford, in trong sách <i>The Trusted Advisor</i> năm 2000 (<a href="https://trustedadvisor.com/why-trust-matters/understanding-trust/understanding-the-trust-equation" rel="noopener" target="_blank">trang giải thích của chính nhóm tác giả</a>). Duy dùng lại công thức này trong chương trình và đổi cách gọi bốn yếu tố cho hợp cách nói của người Việt.</p>
      </div>
      <div class="pp-hinh">
        <div>
          <div class="ct-ps">
            <span class="ct-t">T</span>
            <span class="ct-bang">=</span>
            <span class="ct-chia">
              <span class="ct-tren">
                <span class="ct-o"><i>C</i><span>Lời nói</span></span>
                <span class="ct-cong">+</span>
                <span class="ct-o"><i>R</i><span>Hành động</span></span>
                <span class="ct-cong">+</span>
                <span class="ct-o"><i>E</i><span>Kết nối</span></span>
              </span>
              <span class="ct-vach"></span>
              <span class="ct-o pha"><i>Sf</i><span>Nghĩ về mình</span></span>
            </span>
          </div>
          <p class="ct-ghi">Mẫu số càng lớn, cả tử số càng mất giá</p>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-4">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 04</span></div>
        <h3 class="pp-ten">Ba Điểm Chạm</h3>
        <p class="pp-mo">Ba trạng thái nhận thức mà một người phải đi qua để tự ra quyết định. Đủ cả ba thì quyết định đến tự nhiên, không cần ép và không cần kỹ thuật chốt nào. Thứ tự không đảo được, vì mỗi bước là điều kiện để bước sau có nghĩa.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Khi một cuộc trao đổi tốt mà không đi tới đâu. Chấm xem thiếu chạm nào, đừng chữa ở bề mặt.</p></div>
        <p style="margin-top:16px"><a class="lk-v" href="bai-viet/ba-diem-cham-va-thu-tu-khong-doi-duoc.html">Đọc bài đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a></p>
      </div>
      <div class="pp-hinh">
        <div class="bc">
          <span class="bc-o"><span class="bc-tron">1</span><b>Động lực</b><i>Điều họ thật sự muốn</i></span>
          <span class="bc-mui" aria-hidden="true">&rarr;</span>
          <span class="bc-o"><span class="bc-tron">2</span><b>Điểm nghẽn</b><i>Thứ đang giữ họ đứng yên</i></span>
          <span class="bc-mui" aria-hidden="true">&rarr;</span>
          <span class="bc-o"><span class="bc-tron">3</span><b>Con đường</b><i>Hướng đi hợp với họ</i></span>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-5">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 05</span></div>
        <h3 class="pp-ten">REFLECT, khi gặp từ chối</h3>
        <p class="pp-mo">Từ chối không phải rào cản cần vượt, nó là tín hiệu cần nghe. Nên việc đúng không phải là phản biện, mà là chẩn đoán xem Điểm Chạm nào chưa xong, rồi quay lại làm đầy đúng chỗ đó. Người bán và người cố vấn khác nhau rõ nhất đúng ở chỗ này.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Ngay khi nghe một câu từ chối, trước khi kịp mở miệng đáp lại.</p></div>
      </div>
      <div class="pp-hinh">
        <div class="rf">
          <div class="rf-hang">
            <span class="rf-o">Câu từ chối</span>
            <span class="rf-o vang">3 câu chẩn đoán</span>
          </div>
          <div class="rf-vong">
            <svg viewBox="0 0 300 52" aria-hidden="true">
              <path d="M250 4 L250 34 Q250 46 238 46 L62 46 Q50 46 50 34 L50 12"
                fill="none" stroke="var(--vang)" stroke-width="1.2" opacity=".7"></path>
              <path d="M44 20 L50 8 L56 20" fill="none" stroke="var(--vang)"
                stroke-width="1.2" opacity=".7"></path>
            </svg>
          </div>
          <p class="rf-ghi">Quay lại làm đầy Điểm Chạm còn thiếu</p>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-6">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 06</span></div>
        <h3 class="pp-ten">Hai tầng ba lăng kính</h3>
        <p class="pp-mo">Khung sàng người, để biết ai đáng dành thời gian và ai thì chưa phải lúc. Tầng một loại nhanh những người chưa đủ điều kiện nền. Tầng hai chấm ba lăng kính: ý định và cam kết, nguồn lực và năng lực, độ phù hợp và giá trị. Ba vòng giao nhau tạo ra bảy nhóm, và mỗi nhóm cần một cách đi khác nhau.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Trước khi nhận một khách, và trước khi quyết định dồn công vào một tệp nào đó. Sàng sai tệp thì mọi việc phía sau đều tốn gấp đôi.</p></div>
      </div>
      <div class="pp-hinh">
        <div class="lk">
          <svg viewBox="0 0 270 248" aria-hidden="true">
            <circle cx="102" cy="104" r="72" fill="rgba(242,177,74,.07)" stroke="var(--vang)" stroke-width="1" opacity=".8"></circle>
            <circle cx="168" cy="104" r="72" fill="rgba(242,177,74,.07)" stroke="var(--vang)" stroke-width="1" opacity=".8"></circle>
            <circle cx="135" cy="160" r="72" fill="rgba(242,177,74,.07)" stroke="var(--vang)" stroke-width="1" opacity=".8"></circle>
          </svg>
          <span class="lk-ten" style="left:20%;top:26%">Phù hợp<br>và giá trị</span>
          <span class="lk-ten" style="left:80%;top:26%">Ý định<br>và cam kết</span>
          <span class="lk-ten" style="left:50%;top:82%">Nguồn lực<br>và năng lực</span>
          <span class="lk-giua">Khách<br>phù hợp</span>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-7">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 07</span></div>
        <h3 class="pp-ten">Bốn cấp độ trưởng thành</h3>
        <p class="pp-mo">Cùng một sản phẩm, bốn người ở bốn cấp độ khác nhau sẽ nghe ra bốn điều khác nhau. Hai cấp dưới quan tâm tới nỗi đau, tức là làm sao thôi mất và thôi sai. Hai cấp trên quan tâm tới thành công, tức là làm sao đi nhanh hơn và xa hơn. Nói ngôn ngữ của cấp này cho người ở cấp kia là cách hỏng buổi nhanh nhất.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Khi viết nội dung, khi soạn cẩm nang, và khi chọn xem mình sẽ phục vụ tệp nào. Đây không phải khung chia giàu nghèo, nó chia theo điều khách đang cần nghe.</p></div>
      </div>
      <div class="pp-hinh">
        <div>
          <div class="cd4">
            <div><b>Đang thắng hoặc dẫn đầu</b><i>Tăng tốc</i></div>
            <div><b>Ổn nhưng đi ngang</b><i>Vượt ngưỡng</i></div>
            <div><b>Bắt đầu rồi xuống dốc</b><i>Ổn định lại</i></div>
            <div><b>Người mới bắt đầu</b><i>An toàn</i></div>
          </div>
          <div class="cd4-truc"><span>Nỗi đau &darr;</span><span>&uarr; Thành công</span></div>
        </div>
      </div>
    </article>

    <article class="pp hien" id="pp-8">
      <div>
        <div class="pp-dau"><span class="pp-so">Phương pháp 08</span></div>
        <h3 class="pp-ten">Năm tầng của một doanh nghiệp tự chạy</h3>
        <p class="pp-mo">Đây là khung Duy dùng khi nhìn cả doanh nghiệp chứ không nhìn riêng một cuộc tư vấn. Năm tầng chồng lên nhau, tầng trên đặt lên tầng dưới. Nên khi tầng trên cùng lung lay, chỗ phải sửa gần như luôn nằm ở tầng thấp hơn, chứ không nằm ở chính chỗ đang lung lay.</p>
        <div class="pp-khi"><b>Mở ra lúc nào</b><p>Khi chiến lược viết rất hay mà không ai chạy theo được, hoặc khi công ty đông người lên mà mọi việc vẫn quay về bàn của bạn.</p></div>
      </div>
      <div class="pp-hinh">
        <div class="nt5">
          <div class="nt5-hinh">
            <svg viewBox="0 0 128 130" aria-hidden="true">
              <polygon points="64,6 122,124 6,124" fill="none" stroke="var(--vang)" stroke-width="1.1" opacity=".8"></polygon>
              <line x1="52" y1="30" x2="76" y2="30" stroke="var(--vang)" stroke-width=".9" opacity=".45"></line>
              <line x1="40" y1="54" x2="88" y2="54" stroke="var(--vang)" stroke-width=".9" opacity=".45"></line>
              <line x1="29" y1="77" x2="99" y2="77" stroke="var(--vang)" stroke-width=".9" opacity=".45"></line>
              <line x1="17" y1="101" x2="111" y2="101" stroke="var(--vang)" stroke-width=".9" opacity=".45"></line>
            </svg>
            <span class="nt5-so" style="top:11%">05</span>
            <span class="nt5-so" style="top:29%">04</span>
            <span class="nt5-so" style="top:47%">03</span>
            <span class="nt5-so" style="top:65%">02</span>
            <span class="nt5-so" style="top:84%">01</span>
          </div>
          <div class="nt5-ds">
            <span><b>05</b>La bàn chiến lược</span>
            <span><b>04</b>Quản trị hiệu suất</span>
            <span><b>03</b>Cỗ máy tạo giá trị</span>
            <span><b>02</b>Dữ liệu và công nghệ</span>
            <span><b>01</b>Nền tảng văn hoá</span>
          </div>
        </div>
      </div>
    </article>

  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Một bảng để tự soi</p>
    <h2>Người bán hàng và người cố vấn, mười điểm khác nhau</h2>
    <p>Không cột nào xấu, chúng chỉ dành cho hai loại giao dịch khác nhau. Bán giá trị cao mà đứng nhầm cột thì mọi kỹ thuật phía sau đều chống lại mình. Đọc từng dòng và tự chấm xem buổi gần nhất bạn đứng bên nào.</p>
  </div>
  <div class="ss10 hien">
    <div class="ss10-dau"><span>Người bán hàng</span><span>Cố vấn tin cậy</span></div>
    <div class="h"><span>Mục đích là chốt được giao dịch</span><span>Mục đích là giúp khách nghĩ rõ</span></div>
    <div class="h"><span>Nghe để tìm chỗ gắn sản phẩm vào</span><span>Nghe để hiểu, không tìm kẽ hở</span></div>
    <div class="h"><span>Hỏi để dẫn khách về sản phẩm</span><span>Hỏi để dẫn khách về chính họ</span></div>
    <div class="h"><span>Không hợp thì tìm cách xoay chuyển</span><span>Không hợp thì nói thẳng là chưa hợp</span></div>
    <div class="h"><span>Trình bày như một bài thuyết trình</span><span>Trò chuyện như một cuộc đối thoại</span></div>
    <div class="h"><span>Xem từ chối là rào cản cần vượt</span><span>Xem từ chối là tín hiệu cần nghe</span></div>
    <div class="h"><span>Tạo cấp bách để chốt cho nhanh</span><span>Tôn trọng nhịp quyết định của khách</span></div>
    <div class="h"><span>Đo mình bằng doanh số</span><span>Đo mình bằng chất lượng quyết định của khách</span></div>
    <div class="h"><span>Giá trị nằm ở thành tích cá nhân</span><span>Giá trị nằm ở sự thay đổi của khách</span></div>
    <div class="h"><span>Kết thúc khi giao dịch xong</span><span>Xem giao dịch là một điểm trên hành trình dài</span></div>
  </div>
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
   .replace("{VIEC5}", khoi_viec5()) \
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
      <h2>Ở lại đủ lâu để nếp mới thành thói quen</h2>
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

<section class="phan bd hoa-van phan-sang" id="cach-tham-gia">
  <div class="phan-dau hien">
    <p class="mono">Trước khi hỏi giá</p>
    <h2>Vì sao trang này không có bảng giá</h2>
    <p>Cùng một chương trình, phạm vi phù hợp với hai người có thể khác nhau khá xa, nên một con số dán sẵn trên trang thường dẫn tới quyết định sai cho cả hai bên. Duy chọn cách nói điều kiện trước, nói giá sau.</p>
  </div>
  <div class="hien" style="max-width:820px;margin-inline:auto">
    <ul class="dk-ds">
      <li>Mỗi trang chương trình có mục <b>Điều kiện tham gia</b> ghi rõ bạn cần có sẵn những gì. Đọc mục đó trước, bạn tự biết mình hợp hay chưa mà không cần hỏi ai.</li>
      <li>Thiếu một điều kiện thường có nghĩa là chưa tới lúc, không phải là không bao giờ. Duy sẽ nói thẳng chỗ nào chưa hợp và chỉ bạn bước gần hơn.</li>
      <li>Mức đầu tư nói trong buổi trao đổi, sau khi đã rõ điểm nghẽn và phạm vi. Nếu chưa phải lúc thì Duy nói rõ vì sao, không giữ bạn lại.</li>
      <li>Cần bản gọn để đọc nhanh hoặc để đưa cho đội ngũ, xem <a href="dieu-kien-tham-gia.md">điều kiện của cả mười chương trình trên một trang</a>.</li>
    </ul>
  </div>
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
      "Bốn chương trình năng lực, Cộng đồng Thành viên, Diamond Founder Club, cố vấn riêng và giải pháp doanh nghiệp. Không phải một chiếc thang, mà là một hệ sinh thái theo mức sẵn sàng.",
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

    # Trang không đăng giá, nên phải đăng điều kiện. Khách tự kiểm được mình có hợp
    # hay chưa trước khi mất công hỏi, và bộ trả lời của AI cũng trả lời được câu
    # "tôi có tham gia được không" thay vì im lặng vì trang không có dữ liệu nào.
    dk_html = ""
    if c.get("dieu_kien"):
        muc = "".join("<li>%s</li>" % x for x in c["dieu_kien"])
        dk_html = """<section class="phan bd hoa-van" id="dieu-kien">
  <div class="phan-dau hien"><p class="mono">Trước khi tham gia</p><h2>Điều kiện tham gia</h2>
  <p>Duy ghi phần này ra để bạn tự kiểm trước, khỏi mất một buổi trao đổi mới biết chưa hợp. Thiếu một điều kiện thì thường là chưa tới lúc, không phải là không bao giờ.</p></div>
  <div class="hien" style="max-width:800px;margin-inline:auto">
    <ul class="dk-ds">%s</ul>
    <div class="ghi-mau" style="margin-top:24px"><b>Chương trình này dành cho ai</b><p>%s</p></div>
  </div>
</section>""" % (muc, c["cho_ai"])

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
    elif c.get("mo_ban"):
        # Chương trình đang mở bán có trang bán riêng. Giá chỉ công bố ở đó, một
        # nguồn duy nhất, để không bao giờ có hai con số lệch nhau trên hai trang.
        gia_html = """<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Mức đầu tư</p><h2>Giá và mốc đăng ký nằm ở trang chương trình</h2>
  <p>Chương trình này đang mở bán nên có trang riêng, ở đó ghi đủ hai mức giá, số suất của mức sớm và hạn đăng ký. Duy để giá ở một chỗ duy nhất để bạn không bao giờ đọc phải hai con số khác nhau.</p></div>
  <div class="moi-nut hien" style="justify-content:center">
    <a class="nut" href="%s" target="_blank" rel="noopener">Xem mức đầu tư và mốc đăng ký <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</section>""" % TTC_LANDING
    else:
        gia_html = """<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Mức đầu tư</p><h2>Trao đổi trước, nói giá sau</h2>
  <p>Duy không đặt giá lên trang, vì phạm vi phù hợp với bạn phải được xác định trước. Trong buổi trao đổi, chúng ta làm rõ điểm nghẽn, điều kiện và phạm vi, rồi mới nói tới mức đầu tư. Nếu chưa phải lúc, Duy và đội ngũ sẽ nói rõ vì sao và chỉ bạn bước hợp hơn.</p></div>
</section>"""

    chang_html = ""
    if c["tep"] == "trusted-founder-brand.html":
        chang_html = """<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Cơ chế</p><h2>Năm chặng trong ba tuần</h2>
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
       dsk(c["ket_qua"]), chang_html, dk_html + gia_html, p, dsk(c["khong_gom"], khong=True),
       cta_ct, "".join(the_ct(x, p) for x in khac))

    ld_ct = {"@context":"https://schema.org","@type":"Course","name":c["ten"],
             "description":c["tom"],"inLanguage":"vi",
             "url":BASE+"/chuong-trinh/"+c["tep"],
             "provider":{"@type":"Organization","name":"Next Step Group","url":BASE+"/"},
             "author":{"@type":"Person","name":"Coach Duy Nguyễn","url":BASE+"/ve-toi.html"},
             "audience":{"@type":"Audience","audienceType":c["cho_ai"]},
             "teaches":c["ket_qua"]}
    # coursePrerequisites là trường chuẩn của schema.org. Khai ở đây để bộ trả lời
    # của AI đáp được câu hỏi tham gia được hay chưa mà không cần trang có giá.
    if c.get("dieu_kien"):
        ld_ct["coursePrerequisites"] = c["dieu_kien"]
    ld = json.dumps(ld_ct, ensure_ascii=False)
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

<section class="phan bd phan-sang">
  <div class="phan-dau hien"><p class="mono">Tất cả %d bài</p><h2>Đọc theo chỗ bạn đang vướng</h2></div>
  <div class="chu-de hien">%s</div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (BAI[0]["tieu"], the_bai_lon(BAI[0]), "".join(the_bai_nho(b) for b in BAI[1:5]),
       len(BAI), chu_de_html, "".join(the_bai_luoi(b) for b in BAI))

# Trang blog khai đúng danh sách bài đang có, kèm ngày và mô tả từng bài. Bộ trả
# lời của AI đọc khối này là biết ngay trang có gì mà không phải mò từng thẻ.
LD_BLOG = json.dumps({"@context": "https://schema.org", "@graph": [
    {"@type": "Blog", "@id": BASE + "/blog.html#blog",
     "name": "Blog của Coach Duy Nguyễn", "inLanguage": "vi",
     "description": "Bài viết cho nhà sáng lập doanh nghiệp dịch vụ, về uy tín, tư vấn, "
                    "hệ thống và cộng đồng.",
     "author": {"@type": "Person", "name": "Coach Duy Nguyễn", "url": BASE + "/ve-toi.html"},
     "publisher": {"@type": "Organization", "name": "Next Step Group", "url": BASE + "/"}},
    {"@type": "ItemList", "name": "Bài viết trên blog Coach Duy Nguyễn",
     "numberOfItems": len(BAI),
     "itemListElement": [
        {"@type": "ListItem", "position": n + 1,
         "url": BASE + "/bai-viet/" + b["tep"],
         "item": {"@type": "BlogPosting", "headline": b["tieu"], "description": b["mo"],
                  "url": BASE + "/bai-viet/" + b["tep"],
                  "datePublished": b["ngay"], "dateModified": b.get("sua", NGAY_SUA),
                  "articleSection": b["chu_de"], "inLanguage": "vi",
                  "author": {"@type": "Person", "name": "Coach Duy Nguyễn"}}}
        for n, b in enumerate(BAI)]},
]}, ensure_ascii=False)

trang("blog.html", "Blog của Coach Duy Nguyễn · Bài viết cho nhà sáng lập",
      "Bài viết về điểm nghẽn của người sáng lập, quỹ đạo niềm tin, thương hiệu cá nhân và cách biến kinh nghiệm thành hệ thống. Viết bởi Coach Duy Nguyễn.",
      BLOG, "blog.html", jsonld=LD_BLOG)
print("  blog.html")

CAP_NHAT = "24 tháng 8, 2026"

def khoi_faq(faq):
    muc = "".join('<div class="muc"><h3>%s</h3><p>%s</p></div>' % (q, a) for q, a in faq)
    return '<div class="hoi-dap hien"><b>Câu hỏi thường gặp</b>%s</div>' % muc

def muc_luc(than):
    # Hai dạng từ cùng một danh sách mục: hộp gấp nằm đầu bài cho màn hẹp, và
    # cột dính bên trái cho màn rộng, có đánh dấu đang đọc tới đâu (site.js).
    # Học từ sidebar blog của scaleos.vn, nhưng làm mục lục theo bài thay vì
    # danh sách bài nổi bật, vì bài ở đây dài 1500 chữ với 6 tới 9 mục.
    tieu = re.findall(r'<h2>(.*?)</h2>', than)
    if len(tieu) < 3: return "", than
    for i, t in enumerate(tieu):
        than = than.replace('<h2>%s</h2>' % t, '<h2 id="m%d">%s</h2>' % (i+1, t), 1)
    li = "".join('<li><a href="#m%d">%s</a></li>' % (i+1, t) for i, t in enumerate(tieu))
    gap = '<details class="muc-luc"><summary>Trong bài này</summary><ol>%s</ol></details>' % li
    ben = ('<aside class="ml-ben" aria-label="Mục lục bài viết">'
           '<div class="ml-hop"><b>Trong bài này</b><ol>%s</ol></div></aside>') % li
    return gap + ben, than

HOP_TAC_GIA = """<div class="tac-gia hien">
  <div class="anh-tg"><img src="../img/cd-avatar.webp" alt="Coach Duy Nguyễn" loading="lazy" width="256" height="256"></div>
  <div>
    <b>Coach Duy Nguyễn</b>
    <p>Người cố vấn đi cùng nhà sáng lập thế hệ mới. Sáu năm làm nội dung đều đặn trên bốn kênh, làm việc với hàng nghìn người bán hàng và người chủ doanh nghiệp dịch vụ. Tác giả phương pháp CDN Trust Orbit và bộ bốn năng lực của nhà sáng lập thế hệ mới.</p>
    <a class="lk-v" href="../ve-toi.html">Xem hồ sơ đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</div>"""

# Mỗi chủ đề bài viết ứng với một chuyên mục podcast. Bài nào cũng mời xem một
# tập cụ thể, chọn theo chuyên mục, chứ không mời chung chung vào trang podcast.
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
  mo="Nhiều người hay đổ cho khâu chốt, rồi đi học thêm kỹ thuật chốt. Tập này chỉ ra chỗ hỏng thật nằm sớm hơn nhiều trong quan hệ với khách, và vì sao luyện chốt không cứu được nó.",
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
  mo="Một khung ba bước đơn giản để buổi tư vấn nào cũng có phần mở đầu, phần dẫn chuyện chính, và phần chốt lại rõ ràng, thay vì trôi theo khách.",
  lydo="Dễ áp nhất trong các tập, dùng được ngay buổi hẹn kế tiếp.",
  cta_nhan="Xem The Trusted Advisor", cta="chuong-trinh/the-trusted-advisor.html"),

 # ---- Chuyên mục 03 · Thương hiệu của người sáng lập
 dict(yt="s1UF9mSxM0s", muc=3,
  tieu="Nâng vị thế chuyên gia trong mắt khách",
  mo="Vị thế không đến từ chức danh tự xưng, mà từ những dấu hiệu rất cụ thể khách đọc được khi làm việc với bạn. Tập này liệt kê các dấu hiệu đó.",
  lydo="Bạn kiểm được ngay mình đang phát ra dấu hiệu nào, thiếu dấu hiệu nào.",
  cta_nhan="Xem Trusted Founder Brand Challenge", cta="chuong-trinh/trusted-founder-brand.html"),
 dict(yt="sBaDKQOxRZw", muc=3,
  tieu="Vì sao nói nhiều làm mất vị thế",
  mo="Người bán hay lấp khoảng lặng bằng lời, và mỗi câu thừa là một lần tự hạ giá mình. Tập này nói về sức nặng của việc nói ít lại.",
  lydo="Nghe xong bạn sẽ để ý được chính mình trong buổi nói chuyện kế tiếp.",
  cta_nhan="Xem Trusted Founder Brand Challenge", cta="chuong-trinh/trusted-founder-brand.html"),
 dict(yt="Jgc233EB_H4", muc=3,
  tieu="Nói ít lại để được lắng nghe nhiều hơn",
  mo="Phần tiếp của chủ đề vị thế trong lời nói: cách đặt câu hỏi và giữ khoảng lặng để lời mình nói ra có trọng lượng.",
  lydo="Xem cùng tập trên thành một cặp: một tập chỉ ra vấn đề, một tập chỉ cách sửa.",
  cta_nhan="Xem Trusted Founder Brand Challenge", cta="chuong-trinh/trusted-founder-brand.html"),
 dict(yt="CIyxENto-7Y", muc=3,
  tieu="Khách khó tính, hay mình chưa biết cách hiện diện?",
  mo="Nhiều người than gặp toàn khách khó. Tập này lật lại: cách bạn xuất hiện đang mời kiểu khách nào tới, và đổi cách hiện diện thì tệp khách đổi theo.",
  lydo="Đáng xem nếu bạn thấy mình cứ gặp mãi một kiểu khách mệt mỏi.",
  cta_nhan="Làm phiếu chẩn đoán 7 phút", cta=PHIEU),
 dict(yt="ToQMhBlWhyw", muc=3,
  tieu="Gây ấn tượng với khách cao cấp ngay lần đầu",
  mo="Ấn tượng đầu với người có tiền không nằm ở bộ vest hay lời chào khéo, mà ở vài chi tiết chuẩn bị mà rất ít người làm.",
  lydo="Danh sách chi tiết đủ cụ thể để soát lại trước buổi gặp quan trọng.",
  cta_nhan="Xem Trusted Founder Brand Challenge", cta="chuong-trinh/trusted-founder-brand.html"),

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

CHU_DE_MUC = {"Điểm nghẽn người sáng lập": 1, "Quan hệ với khách": 2,
              "Thương hiệu cá nhân": 3, "Hệ thống và đội ngũ": 4,
              "Cộng đồng": 5, "AI": 6}

def khoi_podcast(b, p=""):
    muc = CHU_DE_MUC.get(b["chu_de"], 1)
    tap = next((x for x in PD_TAP if x["muc"] == muc), PD_TAP[0])
    ten_muc = PD_MUC[muc-1][1]
    return """<section class="phan bd">
  <a class="lq-tap hien" href="%spodcast.html#tap-%s">
    <span class="lq-anh"><img src="https://i.ytimg.com/vi/%s/hqdefault.jpg" alt=""
      loading="lazy" decoding="async"><i class="lq-play" aria-hidden="true"></i></span>
    <span class="lq-chu">
      <span class="lq-nhan">Xem tập liên quan · %s</span>
      <b>%s</b>
      <span class="lq-mo">%s</span>
      <span class="lq-di">Xem tập này <span class="mt" aria-hidden="true">&rarr;</span></span>
    </span>
  </a>
</section>
""" % (p, tap["yt"], tap["yt"], ten_muc, tap["tieu"], tap["lydo"])

def khoi_nguon(nguon):
    """Dựng khối Nguồn tham khảo ở cuối bài.

    Chỉ bài nào dựa trên một khung của người khác mới có khối này. Không rắc
    nguồn cho đủ số, vì phần lớn bài là chuyện thật Duy gặp, không phải dẫn lại
    sách. Mỗi mục là (chữ dẫn, địa chỉ) và địa chỉ nào cũng đã mở ra xem thật.
    """
    if not nguon:
        return ""
    muc = "".join(
        '<li>%s <a href="%s" rel="noopener" target="_blank">Xem nguồn</a></li>' % (t, u)
        for t, u in nguon)
    return ('<div class="nguon-bai"><b>Nguồn tham khảo</b><ul>%s</ul>'
            '<p>Phần còn lại của bài là chuyện Duy gặp trong công việc, không dẫn lại từ đâu.</p>'
            '</div>' % muc)


def ngay_tieng_viet(ngay):
    """2026-08-27 thành 27 tháng 8, 2026. Viết ngày kiểu Việt, không kiểu Anh."""
    nam, thang, ngay_so = ngay.split("-")
    return "%d tháng %d, %s" % (int(ngay_so), int(thang), nam)


for i, b in enumerate(BAI):
    p = "../"
    bs = BO_SUNG.get(b["tep"], {})
    # Ba bài cho kín hàng lưới ba cột. Thiếu bài cùng chủ đề thì lấy bù bài
    # mới nhất ở chủ đề khác, để hàng không bị hụt ô.
    khac = [x for x in BAI if x is not b and x["chu_de"] == b["chu_de"]][:3]
    if len(khac) < 3:
        khac += [x for x in BAI if x is not b and x not in khac][:3 - len(khac)]
    if len(khac) < 2:
        khac += [x for x in BAI if x is not b and x not in khac][:2 - len(khac)]
    faq = bs.get("faq", [])
    ml, than_bai = muc_luc(b["than"])
    tra_loi = ('<div class="tra-loi"><b>Tóm tắt</b><p>%s</p></div>' % bs["tra_loi"]) if bs.get("tra_loi") else ""

    ld = {"@context":"https://schema.org","@graph":[
      {"@type":"BlogPosting","headline":b["tieu"],"description":b["mo"],
       "datePublished":b["ngay"],"dateModified":b.get("sua", NGAY_SUA),"articleSection":b["chu_de"],
       "inLanguage":"vi","wordCount":len(re.sub(r"<[^>]+>"," ",b["than"]).split()),
       "author":{"@type":"Person","name":"Coach Duy Nguyễn","url":BASE+"/ve-toi.html",
                 "jobTitle":"Người cố vấn cho nhà sáng lập","knowsAbout":[b["chu_de"]]},
       "publisher":{"@type":"Organization","name":"Next Step Group","url":BASE+"/"},
       "image":BASE+"/"+b["anh"],
       "mainEntityOfPage":BASE+"/bai-viet/"+b["tep"]},
      {"@type":"BreadcrumbList","itemListElement":[
       {"@type":"ListItem","position":1,"name":"Trang chủ","item":BASE+"/"},
       {"@type":"ListItem","position":2,"name":"Blog","item":BASE+"/blog.html"},
       {"@type":"ListItem","position":3,"name":b["tieu"]}]}]}
    if faq:
        ld["@graph"].append({"@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q, a in faq]})
    ld = json.dumps(ld, ensure_ascii=False)

    ngay_sua = b.get("sua", NGAY_SUA)
    ngay_sua_viet = ngay_tieng_viet(ngay_sua)
    than = """<article>
  <div class="bd bai-dau hien">
    <nav class="vun" aria-label="Đường dẫn"><a href="%sindex.html">Trang chủ</a><span>&rsaquo;</span><a href="%sblog.html">Blog</a><span>&rsaquo;</span><span>%s</span></nav>
    <p class="meta">%s &nbsp;·&nbsp; %s &nbsp;·&nbsp; <time datetime="%s">%s</time></p>
    <h1>%s</h1>
    <p class="tom">%s</p>
  </div>
  <div class="bd hien lo"><div class="bai-anh"><img src="%s%s" alt="%s"></div></div>
  <div class="bd">
    <div class="bai-than">
      <div class="doc hien">%s%s%s</div>
      %s
      %s
      %s
      <div class="bai-cuoi" style="max-width:74ch;margin-inline:auto">
        <p>Viết bởi Coach Duy Nguyễn &nbsp;·&nbsp; Cập nhật <time datetime="%s">%s</time></p>
        <a class="lk-v" href="%sblog.html">Về trang blog <span class="mt" aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </div>
</article>

%s<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Đọc tiếp</p><h2>Ba bài cùng mạch</h2></div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (p, p, b["chu_de"], b["chu_de"], b["doc"], b["ngay"], b["ngay_viet"], b["tieu"], b["mo"],
       p, b["anh"], b["alt"], tra_loi, ml, than_bai,
       khoi_faq(faq) if faq else "", khoi_nguon(b.get("nguon")), HOP_TAC_GIA,
       ngay_sua, ngay_sua_viet, p, khoi_podcast(b, p),
       "".join(the_bai_luoi(x, p) for x in khac))
    trang("bai-viet/" + b["tep"], b["tieu"] + " · Coach Duy Nguyễn", b["mo"], than, "blog.html", jsonld=ld, lop_body="giay")
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

# Thư viện công cụ và tài liệu. Học từ trang Tool Box của scaleos.vn: mỗi tài
# liệu gắn với một phương pháp, và tên phương pháp thành cách sắp xếp cả kho.
# Phần lớn công cụ đang ở trạng thái sắp ra mắt theo lời CDN ngày 26/08/2026:
# "tạo các công cụ demo để đưa vào cho đỡ trống cũng được". Trạng thái ghi thật
# trên thẻ, không có nút tải giả.
TAI_LIEU = [
 dict(loai="congcu", pp="Ba Điểm Chạm", ten="Bảng tự kiểm sau buổi tư vấn",
  mo="Mười hai câu chấm lại buổi tư vấn gần nhất theo ba Điểm Chạm, chỉ ra bạn đang thiếu chạm nào và nên sửa từ đâu.",
  tt="Dùng ngay trên trang", tt_mo=True, nut="Mở công cụ", href="cong-cu/tu-kiem-ba-diem-cham.html"),
 dict(loai="ebook", pp="REFLECT", ten="Kịch bản REFLECT theo 10 ngành",
  mo="Trọn bộ kịch bản phản chiếu lời từ chối cho mười ngành dịch vụ, kèm bản rút gọn và lộ trình luyện ba mươi ngày.",
  tt="Sắp mở bán", tt_mo=True, nut="Nhận tin khi mở bán", href="lien-he.html"),
 dict(loai="congcu", pp="Hai tầng ba lăng kính", ten="Phiếu sàng khách trước buổi hẹn",
  mo="Chấm nhanh một người qua ba lăng kính để biết nên dành cho họ một buổi sâu, một bước nhỏ, hay một lời hẹn lại.",
  tt="Sắp ra mắt", tt_mo=False, nut="Nhận tin khi có", href="lien-he.html"),
 dict(loai="congcu", pp="Công thức tin cậy", ten="Bảng tự đo bốn yếu tố tin cậy",
  mo="Tự chấm lời nói, hành động, kết nối và mức đang nghĩ về mình sau một quan hệ khách cụ thể, để thấy chỗ đang rò.",
  tt="Sắp ra mắt", tt_mo=False, nut="Nhận tin khi có", href="lien-he.html"),
 dict(loai="congcu", pp="Bốn cấp độ trưởng thành", ten="Bảng chọn ngôn ngữ theo cấp độ khách",
  mo="Xếp khách vào đúng cấp độ rồi tra xem họ đang cần nghe điều gì, và lỗi ngôn ngữ nào hay làm hỏng buổi với cấp đó.",
  tt="Sắp ra mắt", tt_mo=False, nut="Nhận tin khi có", href="lien-he.html"),
 dict(loai="congcu", pp="Tam giác vàng", ten="Bảng soát ba đỉnh trước buổi gặp quan trọng",
  mo="Soát nhanh phong thái, sự chân thành và dấu hiệu chuyên môn trước một buổi gặp đáng tiền, vì thiếu một đỉnh là hai đỉnh kia không cứu được.",
  tt="Sắp ra mắt", tt_mo=False, nut="Nhận tin khi có", href="lien-he.html"),
 dict(loai="congcu", pp="Năm tầng doanh nghiệp", ten="Phiếu rà năm tầng doanh nghiệp",
  mo="Đi một vòng năm tầng từ văn hoá tới chiến lược để tìm tầng đang yếu nhất, trước khi đổ thêm công vào tầng bên trên nó.",
  tt="Sắp ra mắt", tt_mo=False, nut="Nhận tin khi có", href="lien-he.html"),
]
_LOAI = {"congcu": "Công cụ tự kiểm", "ebook": "Ebook"}
THU_VIEN = """
<section class="phan bd phan-sang" id="thu-vien">
  <div class="phan-dau hien">
    <p class="mono">Kho công cụ và tài liệu</p>
    <h2>Mỗi tài liệu gắn với một phương pháp</h2>
    <p>Các công cụ dưới đây rút từ đúng những khung trên <a class="lk-v" href="phuong-phap.html">trang Phương pháp</a>. Công cụ nào dùng được ngay thì ghi rõ, bản nào đang làm thì ghi đang làm, không có nút tải giả.</p>
  </div>
  <div class="tl-loc hien" id="tl-loc">
    <button class="tl-nut chon" type="button" data-loc="all">Tất cả</button>
    <button class="tl-nut" type="button" data-loc="congcu">Công cụ tự kiểm</button>
    <button class="tl-nut" type="button" data-loc="ebook">Ebook</button>
  </div>
  <div class="tl-luoi hien">%s</div>
</section>
""" % "".join(
 ('<article class="tl" data-loai="%s">'
  '<div class="tl-bia3d" aria-hidden="true"><div class="bia3d"><i>%s</i><b>%s</b>'
  '<span class="chan"><img src="img/logo-dn.webp" alt="" loading="lazy"><span>Coach Duy Nguy\u1ec5n</span></span></div></div>'
  '<div class="tl-than"><h3>%s</h3>'
  '<p class="tl-mo">%s</p>'
  '<div class="tl-duoi"><span class="tl-tt%s">%s</span>'
  '<a class="lk-v" href="%s">%s <span class="mt" aria-hidden="true">&rarr;</span></a></div>'
  '</div></article>')
 % (t["loai"], _LOAI[t["loai"]], t["pp"], t["ten"], t["mo"],
    " mo" if t["tt_mo"] else "", t["tt"], t["href"], t["nut"])
 for t in TAI_LIEU)

SACH = dau_trang("Sách và tài liệu", "Sách đang viết, công cụ dùng được ngay",
  "Hai cuốn sách đang viết, một ebook sắp mở bán, và kho công cụ tự kiểm gắn với từng phương pháp. Từng mục ở trạng thái nào, trang này ghi rõ để bạn không phải đoán.") + """
<section class="phan bd hoa-van">
  <div class="ghi-mau hien"><b>Bản thiết kế</b><p>Bìa dưới đây là bản dựng tạm bằng chữ, chưa phải bìa thật. Khi có bìa do hoạ sĩ làm, Duy thay ảnh vào đúng chỗ này.</p></div>
  <div class="hang-bia hai tre hien">%s%s</div>
</section>
""" % (
 bia("Sắp ra mắt", "Bán Bằng Vị Thế", "Bán Bằng Vị Thế",
     "Gom lại cách bán dựa trên vị thế và niềm tin Duy đã dạy suốt sáu năm. Viết cho người chủ chứ không cho người bán: làm sao để khách tìm tới vì tin bạn, và làm sao để cách bán đó không chỉ nằm trong đầu bạn.",
     "Đang viết · dự kiến quý 4 năm 2026"),
 bia("Bộ tài liệu", "Thực Chiến Bất Động Sản", "Bộ Sách Thực Chiến Bất Động Sản",
     "Bộ tài liệu thực chiến cho người làm bất động sản, rút từ các chương trình đào tạo đã chạy. Đây là phần chuyên ngành, tách khỏi dòng nội dung dành cho nhà sáng lập.",
     "Đang biên soạn")) + THU_VIEN + """
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
""" % (the_bai_lon(BAI[3], i=2), "".join(the_bai_nho(b) for b in [BAI[8], BAI[0], BAI[4], BAI[6]]))

# ------------------------------------------------- CÔNG CỤ TỰ KIỂM
# Công cụ đầu tiên trong kho tài liệu, dùng ngay trên trang. Nội dung chỉ lấy
# từ phần đã công khai của Ba Điểm Chạm (bài blog và trang phương pháp), không
# đụng vào bộ câu hỏi trong tài liệu chương trình.
TK_CAU = {
 1: ("Phần 1 · Chạm Động Lực", "Khách đã rõ điều họ thật sự muốn chưa?", [
     "Khách tự nói ra được điều họ muốn bằng lời của chính họ, không phải bằng chữ của tôi.",
     "Lý do khách tìm hiểu là cụ thể, không phải xã giao kiểu xem thử cho biết.",
     "Khách nối được quyết định này với một việc lớn hơn họ đang muốn thay đổi.",
     "Trong buổi, khách không bị phân tâm bởi chuyện ngoài lề."]),
 2: ("Phần 2 · Chạm Điểm Nghẽn", "Khách đã thấy thứ đang giữ họ đứng yên chưa?", [
     "Khách gọi tên được thứ đang giữ họ đứng yên, không phải tôi gọi thay.",
     "Buổi có nói tới cái giá của việc không làm gì trong sáu tháng tới.",
     "Khi nhắc chuyện cũ chưa thành, khách nói được vì sao cách cũ chưa xong.",
     "Có một khoảnh khắc khách nói đúng rồi, đây là chỗ mình kẹt, hoặc một câu tương đương."]),
 3: ("Phần 3 · Chạm Con Đường", "Khách đã thấy con đường của mình chưa?", [
     "Khách hỏi nên đi phương án nào, thay vì chỉ hỏi giá.",
     "Giải pháp được đặt trong bối cảnh riêng của khách, không phải bài trình bày chung.",
     "Cuối buổi tôi không phải thuyết phục, khách tự thấy hướng đi hợp với họ.",
     "Buổi kết thúc bằng một bước tiếp theo cụ thể, có thời hạn."]),
}
_tk_nhom = "".join(
 '<div class="tk-nhom hien"><p class="mono">%s</p><h2>%s</h2>%s</div>' % (
  ten, hoi, "".join('<label class="tk-cau"><input type="checkbox" data-cham="%d"><span>%s</span></label>'
                    % (n, c) for c in cau))
 for n, (ten, hoi, cau) in sorted(TK_CAU.items()))
CONG_CU = dau_trang("Công cụ tự kiểm", "Bảng tự kiểm sau buổi tư vấn",
  "Chọn một buổi tư vấn gần nhất bạn còn nhớ rõ. Đánh dấu những câu đúng với buổi đó, công cụ sẽ chỉ ra Điểm Chạm nào đang thiếu.") + """
<section class="phan bd phan-sang">
  <div class="ghi-mau hien"><b>Trước khi chấm</b><p>Công cụ này chấm nhận thức của khách sau một buổi, không chấm con người, và cũng không chấm bạn. Kết quả chỉ có nghĩa khi bạn đánh dấu thật, kể cả khi nó làm mình khó chịu.</p></div>
""" + _tk_nhom + """
  <div class="hien" style="margin-top:30px">
    <button class="nut nut-v" id="tk-xem" type="button">Xem kết quả <span class="mt" aria-hidden="true">&rarr;</span></button>
  </div>
  <div id="tk-kq" hidden></div>
  <div class="hien" style="margin-top:34px">
    <p style="font-size:14.5px;color:var(--ink-3)">Công cụ dựa trên nguyên tắc đọc ngược của phương pháp Ba Điểm Chạm.
    <a class="lk-v" href="../bai-viet/ba-diem-cham-va-thu-tu-khong-doi-duoc.html">Đọc bài đầy đủ</a> ·
    <a class="lk-v" href="../phuong-phap.html">Xem các phương pháp khác</a></p>
  </div>
</section>
"""
trang("cong-cu/tu-kiem-ba-diem-cham.html", "Bảng tự kiểm sau buổi tư vấn · Coach Duy Nguyễn",
      "Mười hai câu chấm lại buổi tư vấn gần nhất theo ba Điểm Chạm, chỉ ra bạn đang thiếu chạm nào.",
      CONG_CU, "sach.html")
print("  cong-cu/tu-kiem-ba-diem-cham.html")

# ------------------------------------------------- CÂU CHUYỆN HỌC VIÊN
# Nguồn: thư viện case trong vault, con số được Coach Duy xác nhận trực tiếp
# ngày 28/07/2026 và CDN đồng ý chia sẻ công khai ngày 26/08/2026. Nguyên tắc
# biên tập lấy nguyên từ tài liệu nguồn: hành vi trước rồi mới tới con số,
# kết quả nổi bật không kể thành kết quả điển hình, giới hạn nói ngay trên
# trang. Câu nói của khách anh Thức chưa xác nhận nguyên văn nên kể gián tiếp.
CAU_CHUYEN = dau_trang("Câu chuyện học viên", "Người thật, số thật, và giới hạn được nói rõ",
  "Những câu chuyện dưới đây do học viên kể lại và Duy xác nhận trực tiếp, có tài liệu gốc kèm theo. Mỗi chuyện là một trường hợp trong một bối cảnh cụ thể, không phải lời cam kết cho mọi người.") + """
<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Câu chuyện chính · Bất động sản</p>
    <h2>Khách chọn người hỏi về gia đình mình, không chọn người rẻ nhất</h2>
  </div>
  <div class="bai-than hien" style="max-width:74ch;margin-inline:auto">
    <p>Giao dịch 10,6 tỷ. Hai người bán khác sẵn sàng giảm khoảng 300 triệu. Nếu khách chỉ mua bằng giá, kết quả đã được quyết định từ trước khi anh Nguyễn Minh Chiến kịp nói câu nào.</p>
    <p>Anh Chiến không lao vào sản phẩm, cũng không chạy theo mức giảm. Anh hỏi về gia đình, về đời sống, về bức tranh năm tới mười năm của khách, rồi mới làm rõ tiêu chí quyết định thật của họ.</p>
    <p>Khoảng mười hai giờ sau, khách báo đặt cọc. Hoa hồng giữ nguyên.</p>
    <div class="ch-so">
      <div><b>10,6 tỷ</b><span>Giá trị giao dịch</span></div>
      <div><b>~300 triệu</b><span>Mức hai đối thủ sẵn sàng giảm</span></div>
      <div><b>12 giờ</b><span>Từ buổi nói chuyện tới lúc khách báo cọc</span></div>
    </div>
    <div class="ch-quote">
      <p>Anh chọn em không phải vì em rẻ nhất. Anh chọn em vì em là người duy nhất hỏi anh về gia đình, về cuộc sống của anh.</p>
      <span>Lời người khách, anh Chiến kể lại</span>
    </div>
    <div class="dut"><b>Giới hạn của câu chuyện</b><p>Đây là một trường hợp trong bối cảnh cụ thể, không phải cam kết rằng cứ hỏi đúng câu là khách sẽ mua. Thứ đáng mang về là chỗ anh Chiến chọn đứng: người giúp khách quyết, không phải người xin được chọn.</p></div>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Ngoài bất động sản · Đồng hồ cao cấp</p>
    <h2>Một ngày học, một hành vi đổi, và chiếc đồng hồ hơn 500 triệu</h2>
  </div>
  <div class="bai-than hien" style="max-width:74ch;margin-inline:auto">
    <p>Anh Thức bán đồng hồ cao cấp nhiều năm, phần lớn bằng bản năng. Chốt được hay mất một deal đều khó giải thích vì sao, nên cũng khó dạy lại cho đội ngũ.</p>
    <p>Sau một ngày thực hành, anh đổi đúng một chỗ: chuyển sự chú ý từ chiếc đồng hồ sang người đối diện, để ý hơn tới câu hỏi mình đặt và khoảng im lặng mình giữ.</p>
    <p>Ngày hôm sau, anh chốt một chiếc hơn 500 triệu. Người khách nói rằng mình biết nhiều bên bán đồng hồ, nhưng quý và muốn ủng hộ anh.</p>
    <div class="dut"><b>Giới hạn của câu chuyện</b><p>Giá trị không nằm ở việc một ngày học tạo ra một deal 500 triệu. Nó nằm ở chỗ một người bán giàu kinh nghiệm nhận ra và đổi được một hành vi cụ thể ngay trong cuộc tư vấn kế tiếp.</p></div>
  </div>
</section>

<section class="phan bd phan-sang" id="bon-nganh">
  <div class="phan-dau hien">
    <p class="mono">Bốn ngành khác</p>
    <h2>Cùng một cách đổi, mỗi người một ngành</h2>
    <p>Bốn kết quả dưới đây do học viên báo lại và Duy xác nhận, có tài liệu gốc. Con số chỉ có nghĩa khi đọc kèm hành vi đã đổi.</p>
  </div>
  <div class="ch-luoi tre hien">
    <article class="ch-the"><i>Trang Minh Thuận · Ngành đệm</i><b>~200 triệu / 1 tuần</b><p>Đổi cách mở đầu: thôi báo giá và khuyến mãi, bắt đầu bằng hỏi và hiểu khách.</p></article>
    <article class="ch-the"><i>Hồ Thảo · Tài chính</i><b>~40 triệu / 3 ngày</b><p>Thôi nói tính năng sản phẩm, bắt đầu hiểu bài toán tài chính của từng khách.</p></article>
    <article class="ch-the"><i>Đội ngũ bác sĩ An Văn Sơn · Nha khoa</i><b>~700 triệu / 30 ngày</b><p>Chuyển đổi ở cấp đội ngũ, không chỉ một cá nhân làm giỏi lên.</p></article>
    <article class="ch-the"><i>Hoa Kenli · Nội thất</i><b>2,3 tỷ / 30 ngày</b><p>Quay lại sau nghỉ sinh, lấy lại vị thế và giữ nhịp làm video đều.</p></article>
  </div>
  <div class="ch-quote hien" style="max-width:74ch;margin-inline:auto;margin-top:44px">
    <p>Họ không mua khóa học. Họ mua phiên bản mới của chính họ.</p>
    <span>Chị Vân Anh, cố vấn học tập</span>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Cách đọc những con số này</p>
    <h2>Ba điều Duy giữ khi kể chuyện học viên</h2>
  </div>
  <div class="luoi c3 tre hien">
    <article class="the"><h3>Số có nguồn</h3><p>Con số do học viên báo lại, Duy xác nhận trực tiếp và có tài liệu gốc kèm theo. Không có con số nào được làm tròn lên cho đẹp.</p></article>
    <article class="the"><h3>Nổi bật không phải điển hình</h3><p>Đây là những kết quả tốt nhất, không phải kết quả trung bình. Kể chuyện tốt nhất mà nói như chuyện thường gặp là một kiểu nói dối.</p></article>
    <article class="the"><h3>Chương trình không tạo ra doanh số</h3><p>Học viên áp dụng một hành vi từ chương trình, trong một bối cảnh cụ thể, và bối cảnh đó dẫn tới kết quả. Ba phần đó đều phải có mặt.</p></article>
  </div>
</section>
"""
trang("cau-chuyen-hoc-vien.html", "Câu chuyện học viên · Coach Duy Nguyễn",
      "Chuyện thật của học viên với con số đã xác nhận: deal 10,6 tỷ không cần giảm giá, và bốn ngành khác cùng một cách đổi hành vi.",
      CAU_CHUYEN, "chuong-trinh.html")
print("  cau-chuyen-hoc-vien.html")

trang("sach.html", "Sách và tài liệu của Coach Duy Nguyễn",
      "Hai cuốn sách đang viết, ebook kịch bản REFLECT, và kho công cụ tự kiểm gắn với từng phương pháp của Coach Duy Nguyễn.",
      SACH, "sach.html")
print("  sach.html")

# ---------------------------------------------------------------- PODCAST

def _ten_muc(n):
    so, ten = PD_MUC[n-1][0], PD_MUC[n-1][1]
    return "Chuyên mục %s · %s" % (so, ten)

def _rap_html():
    t = PD_TAP[0]
    the = "".join(
        ('<a class="pd-tap%s" id="tap-%s" href="https://www.youtube.com/watch?v=%s" target="_blank" rel="noopener" '
         'data-yt="%s" data-muc="%s" data-mucten="%s" data-tieu="%s" data-mo="%s" data-lydo="%s" '
         'data-ctan="%s" data-ctah="%s"%s>'
         '<span class="pd-tap-anh"><img src="https://i.ytimg.com/vi/%s/hqdefault.jpg" alt="" '
         'loading="lazy" decoding="async"><i class="pd-tap-play" aria-hidden="true"></i></span>'
         '<span class="pd-tap-so">Tập %02d</span><b>%s</b></a>')
        % ((" chon" if i == 0 else ""), x["yt"], x["yt"], x["yt"], x["muc"],
           _ten_muc(x["muc"]), x["tieu"].replace('"', "&quot;"), x["mo"].replace('"', "&quot;"),
           x["lydo"].replace('"', "&quot;"), x["cta_nhan"], dd(x["cta"]),
           ' aria-current="true"' if i == 0 else "", x["yt"], i + 1, x["tieu"])
        for i, x in enumerate(PD_TAP))
    return '''<section class="phan bd" id="xem">
  <div class="pd-rap hien">
    <div class="pd-khung">
      <div class="pd-man" id="pd-man">
        <button class="pd-poster" id="pd-poster" type="button" aria-label="Phát tập đang chọn">
          <img id="pd-poster-anh" src="https://i.ytimg.com/vi/%s/maxresdefault.jpg" alt="" onerror="this.onerror=null;this.src=this.src.replace('maxres','hq')">
          <span class="pd-play" aria-hidden="true"></span>
        </button>
      </div>
      <div class="pd-dieu">
        <button class="pd-nut-man" id="pd-rong" type="button" aria-pressed="false">
          <span class="pd-bieu pd-bieu-rong" aria-hidden="true"></span>
          <span id="pd-rong-chu">Mở rộng khung</span>
        </button>
        <button class="pd-nut-man" id="pd-toan" type="button">
          <span class="pd-bieu pd-bieu-toan" aria-hidden="true"></span>
          <span>Toàn màn hình</span>
        </button>
      </div>
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

# Chương trình đổi tên ngày 24/08/2026 nên trang đổi theo. Địa chỉ cũ đã được chia
# sẻ ra ngoài, giữ lại một trang chuyển hướng để không gãy liên kết và không mất
# thứ hạng đã có. Đặt noindex để máy tìm kiếm dồn về địa chỉ mới.
open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                  "chuong-trinh", "the-trusted-creator.html"), "w", encoding="utf-8").write(
"""<!doctype html><html lang="vi"><head><meta charset="utf-8">
<title>Trusted Founder Brand Challenge</title>
<link rel="canonical" href="%s/chuong-trinh/trusted-founder-brand.html">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=trusted-founder-brand.html">
</head>
<body><p>Chương trình này đã đổi tên thành
<a href="trusted-founder-brand.html">Trusted Founder Brand Challenge</a>.</p>
<script>location.replace('trusted-founder-brand.html');</script></body></html>""" % BASE)
print("  chuong-trinh/the-trusted-creator.html (chuyen huong)")

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
        "sach.html", "podcast.html", "lien-he.html", "cau-chuyen-hoc-vien.html",
        "cong-cu/tu-kiem-ba-diem-cham.html"] \
     + ["chuong-trinh/" + c["tep"] for c in CT] + ["bai-viet/" + b["tep"] for b in BAI]
# Ngày sửa của từng địa chỉ. Bài viết khai đúng ngày sửa của bài, trang tĩnh
# khai ngày sửa chung của trang. Không có lastmod thì máy phải tự đoán trang nào
# mới, mà bộ trả lời của AI thì ưu tiên nội dung mới rất mạnh.
NGAY_BAI = {"bai-viet/" + b["tep"]: b.get("sua", NGAY_SUA) for b in BAI}
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for t in URLS:
    sm.append("  <url><loc>%s/%s</loc><lastmod>%s</lastmod></url>"
              % (BASE, t, NGAY_BAI.get(t, NGAY_SUA)))
sm.append("</urlset>")
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "sitemap.xml"), "w", encoding="utf-8").write("\n".join(sm))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "robots.txt"), "w", encoding="utf-8").write(
    "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % BASE)

# Tệp điều kiện tham gia, viết cho máy đọc. Trang không đăng giá, nên nếu không có
# tệp này thì trợ lý AI được hỏi "tôi tham gia được chương trình nào" sẽ không có
# gì để trả lời. Đây là bản gọn của đúng những gì đã in trên từng trang chương
# trình, không phải nội dung riêng viết cho máy.
dk = ["# Điều kiện tham gia các chương trình của Coach Duy Nguyễn", "",
      "> Cập nhật %s. Trang không công khai giá. Mức đầu tư chỉ nói sau một buổi "
      "trao đổi ngắn, vì phạm vi phù hợp với từng người phải được xác định trước. "
      "Phần dưới đây là điều kiện tham gia, đủ để bạn tự kiểm xem mình có hợp hay chưa." % NGAY_SUA, ""]
for c in CT:
    ten = c["ten"].replace("&nbsp;", " ")
    dk.append("## %s" % ten)
    dk.append("")
    dk.append("- Trang: %s/chuong-trinh/%s" % (BASE, c["tep"]))
    dk.append("- Dành cho: %s" % c["cho_ai"])
    dk.append("- Hình thức: %s" % c["hinh_thuc"])
    if c.get("khai_giang"):
        dk.append("- Thời điểm: %s" % c["khai_giang"])
    dk.append("- Điều kiện tham gia:")
    for x in c.get("dieu_kien", []):
        dk.append("  - %s" % x)
    if c.get("mo_ban"):
        dk.append("- Giá: công bố đầy đủ trên trang chương trình %s" % TTC_LANDING)
    else:
        dk.append("- Giá: không công khai, trao đổi trước rồi mới nói mức đầu tư")
    dk.append("")
dk += ["## Cách bắt đầu", "",
       "- Chưa rõ mình kẹt ở đâu: làm Phiếu chẩn đoán 7 phút tại %s" % PHIEU,
       "- Muốn tìm hiểu trước khi cam kết: đăng ký danh sách chờ Cộng đồng Next Gen Founder tại %s" % CONG_DONG,
       "- Muốn trao đổi trực tiếp: %s/lien-he.html" % BASE, ""]
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "dieu-kien-tham-gia.md"),
     "w", encoding="utf-8").write("\n".join(dk))

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
- [Điều kiện tham gia](%(b)s/dieu-kien-tham-gia.md): điều kiện của từng chương trình, dạng máy đọc được. Trang không công khai giá, mức đầu tư chỉ nói sau một buổi trao đổi.
- [Blog](%(b)s/blog.html): %(n)d bài viết cho nhà sáng lập
- [Sách và tài liệu](%(b)s/sach.html): Bán Bằng Vị Thế, đang viết, dự kiến quý 4 năm 2026
- [Podcast Next Gen Founder](%(b)s/podcast.html): video podcast trên YouTube, sáu chuyên mục, 230 nghìn người đăng ký
- [Cộng đồng Next Gen Founder](%(cd)s): cộng đồng cho nhà sáng lập thế hệ mới, ba cấp độ, đang mở danh sách chờ
- [Liên hệ](%(b)s/lien-he.html)

## Chương trình
%(ct)s

## Bài viết
%(bv)s

## Trang liên quan cùng hệ sinh thái
- [Phiếu chẩn đoán 7 phút](%(ph)s): công cụ tự đánh giá điểm nghẽn
- [Cỗ máy Nội dung Một người](%(cm)s): bản đồ hệ thống nội dung một người vận hành
""" % dict(b=BASE, n=len(BAI), cd=CONG_DONG, ph=PHIEU, cm=CO_MAY,
           ct="\n".join("- [%s](%s/chuong-trinh/%s): %s" % (c["ten"], BASE, c["tep"], c["tom"]) for c in CT),
           bv="\n".join("- [%s](%s/bai-viet/%s): %s" % (b["tieu"], BASE, b["tep"], b["mo"]) for b in BAI))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "llms.txt"), "w", encoding="utf-8").write(llms)
print("  sitemap.xml, robots.txt, llms.txt")
print("XONG: %d trang" % (len(URLS) + 1))
