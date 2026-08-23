# -*- coding: utf-8 -*-
"""Dựng toàn bộ website Coach Duy Nguyễn. Chạy: python3 dung.py"""
import json, os
from lib import (BASE, CONG_DONG, CO_MAY, PHIEU, EMAIL, TTC_LANDING, trang, dau_trang, dd)
from bai_viet import BAI
from chuong_trinh import CT
import so_do

# ---------------------------------------------------------------- khối dùng lại
SO_LIEU = [("334 nghìn","theo dõi Facebook"),("230 nghìn","đăng ký YouTube"),
           ("231 nghìn","theo dõi TikTok"),("22 nghìn","theo dõi Zalo"),
           ("26,6 nghìn","thành viên Sales Bứt Phá"),("6 năm","làm nội dung đều đặn")]
so_lieu_html = "".join('<div><b>%s</b><span>%s</span></div>' % (a,b) for a,b in SO_LIEU)

VIEC5 = [("Soi đúng","Tách điều bạn đang thấy khỏi vấn đề thật phía sau. Bắt đầu từ hành vi và kết quả quan sát được, không bắt đầu từ cảm giác."),
         ("Chỉ đường","Cho bạn thấy đang ở đâu, bước tiếp theo là gì, và điều gì chưa cần làm lúc này. Một bước vừa sức, không phải một danh sách mẹo."),
         ("Làm mẫu","Đưa quyết định thật, tài liệu thật và cả sai lầm đã trả giá của chính tôi, kèm điều kiện áp dụng, không chỉ kể phần kết quả đẹp."),
         ("Giữ chuẩn","Nói rõ điều gì được chấp nhận, điều gì không, và cái giá của việc tiếp tục cách cũ. Tôi không làm nhẹ sự thật để bạn dễ chịu."),
         ("Trao lại quyền tự chủ","Để lại cho bạn một tiêu chí tự đánh giá và một câu hỏi bạn còn dùng được sau khi rời khỏi tôi.")]
def khoi_viec5():
    return '<div class="viec5">%s</div>' % "".join(
        '<div class="d"><em>%02d</em><div><h4>%s</h4><p>%s</p></div></div>' % (i+1,t,p)
        for i,(t,p) in enumerate(VIEC5))

def the_bai_lon(b, p=""):
    return """<a class="bai-lon" href="%sbai-viet/%s">
  <div class="anh"><img src="%s%s" alt="%s" loading="lazy"></div>
  <div class="chu">
    <p class="meta">%s &nbsp;·&nbsp; %s</p>
    <h3>%s</h3>
    <p>%s</p>
  </div>
</a>""" % (p, b["tep"], p, b["anh"], b["alt"], b["ngay_viet"], b["doc"], b["tieu"], b["mo"])

def the_bai_nho(b, p=""):
    return """<a class="bai-nho" href="%sbai-viet/%s">
  <div class="anh"><img src="%s%s" alt="%s" loading="lazy"></div>
  <div><p class="meta">%s</p><h3>%s</h3></div>
</a>""" % (p, b["tep"], p, b["anh"], b["alt"], b["ngay_viet"], b["tieu"])

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
  <span class="tang">%s</span>
  <h3>%s</h3>
  <p class="vi">%s</p>
  <p>%s</p>
  <span class="xem">Xem chương trình <span class="mt" aria-hidden="true">&rarr;</span></span>
</a>""" % (p, c["tep"], c["nang_luc"], c["ten"], c["ten_vi"], c["tom"])

def dsk(muc, khong=False):
    return '<div class="dsk%s">%s</div>' % (" khong" if khong else "",
        "".join('<div><i aria-hidden="true"></i><p>%s</p></div>' % m for m in muc))

# ---------------------------------------------------------------- TRANG CHỦ
INDEX = """
<header id="hero">
  <div class="hero-nen"><img src="img/cd-dung-lop.jpg" alt="" width="1600" height="1067"></div>
  <div class="hero-in">
    <div class="hero-goc"><span>Coach Duy Nguyễn</span><span>2026</span></div>
    <div class="hero-giua">
      <div class="hero-avt"><img src="img/cd-avatar.png" alt="Chân dung Coach Duy Nguyễn" width="256" height="256"></div>
      <p class="mono">Người cố vấn · Next Gen Founder</p>
      <div class="ten">Coach Duy <em>Nguyễn</em></div>
      <div class="bang-hieu">
        <p class="danh-xung">Coach. Trainer. Entrepreneur.</p>
        <div class="vach" aria-hidden="true"><i></i><b></b><i></i></div>
        <p class="khau-hieu">Lead. Inspire. Impact.</p>
      </div>
      <h1>Tôi đi trước bạn vài chặng, và tôi đi cùng để bạn tự bước được. Không phải để bạn cần tôi mãi.</h1>
      <div class="hero-nut">
        <a class="nut nut-v" href="{CONG_DONG}" target="_blank" rel="noopener">Vào Cộng đồng Next Gen Founder <span class="mt" aria-hidden="true">&rarr;</span></a>
        <a class="nut nut-vien" href="chuong-trinh.html">Xem chương trình</a>
        <a class="nut nut-vien" href="blog.html">Đọc blog</a>
      </div>
    </div>
    <div class="hero-so">{SO_LIEU}</div>
    <p class="hero-ghi">Tính tới tháng 8 năm 2026, đọc từ trang công khai của từng kênh.</p>
  </div>
</header>

<section class="phan bd hoa-van" id="ve-toi">
  <div class="vt">
    <div class="vt-chu hien">
      <p class="mono">Về tôi</p>
      <h2>Người đi trước vài chặng, không phải người biết hết</h2>
      <p>Tôi làm việc với người mà khách mua vì tin ở chính họ: chuyên gia có nghề, chủ doanh nghiệp dịch vụ, và người đang dẫn một đội. Với những người này, uy tín cá nhân đứng ngay trước quyết định mua, trước một hợp đồng hợp tác, và trước lời đồng ý của một nhân sự giỏi.</p>
      <p>Điều tôi nghe nhiều nhất là bốn câu. Đăng nội dung nhiều nhưng không ra đúng khách. Đội bán hàng vẫn phải chờ tôi xuất hiện mới chốt được. Tuyển thêm người nhưng tôi lại bận hơn trước. Tháng tốt tháng kém mà không rõ vì sao.</p>
      <p><span class="nhan">Uy tín, cách ra quyết định và cách tạo ra kết quả vẫn nằm chủ yếu trong đầu người chủ.</span> Doanh nghiệp chưa chuyển chúng thành tài sản, quy trình, dữ liệu và năng lực của đội. Vì vậy càng bán tốt, người chủ càng bận.</p>
      <a class="lk-v" href="ve-toi.html">Đọc đầy đủ về tôi <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="vt-anh hien">
      <div class="quang" aria-hidden="true"></div>
      <div class="nguoi"><img src="img/cd-chan-dung.png" alt="Chân dung Coach Duy Nguyễn" loading="lazy" width="485" height="760"></div>
      <div class="manh">
        <div class="anh m1"><img src="img/cd-san-khau.jpg" alt="Coach Duy Nguyễn trên sân khấu" loading="lazy"></div>
        <div class="anh m2"><img src="img/cd-workshop.jpg" alt="Coach Duy Nguyễn đưa micro cho một học viên" loading="lazy"></div>
        <div class="anh m3"><img src="img/cd-giang-slide.jpg" alt="Coach Duy Nguyễn giảng trước màn chiếu" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>

<section class="phan bd hoa-van duoi" id="cach-lam">
  <div class="phan-dau hien">
    <p class="mono">Cách tôi làm việc</p>
    <h2>Năm việc tôi làm, và bản đồ tôi dùng</h2>
    <p>Người cố vấn không phải là chức danh tự đặt. Nó là năm việc phải làm được. Tôi viết ra đây để bạn kiểm tôi.</p>
  </div>
  <div class="clv">
    <div class="hop hien">
      <h3>Năm việc tôi làm khi đi cùng một nhà sáng lập</h3>
      <p class="dan-hop">Mỗi lần làm việc phải đi đủ năm bước này, không bỏ bước nào.</p>
      {VIEC5}
      <div class="khong">
        <b>Ba việc tôi không làm</b>
        <p>Không làm thay phần việc của bạn. Không hứa một con số doanh thu khi chưa đủ điều kiện. Không giữ ai ở lại bằng cảm giác lệ thuộc.</p>
      </div>
    </div>
    <div class="hop hien">
      <h3>Bốn năng lực của nhà sáng lập thế hệ mới</h3>
      <p class="dan-hop">Bản đồ tôi dùng để biết bạn đang thiếu gì. Thường chỉ một năng lực đang chặn ba năng lực còn lại.</p>
      {BANG_NL}
      <div class="nl-ai"><b>AI</b><p>AI là năng lực nền của cả bốn việc trên. Nó làm nhanh hơn phần nghiên cứu, chuẩn bị và tóm tắt. Phán đoán, quan hệ và quyết định có trách nhiệm vẫn là phần của con người.</p></div>
      <a class="lk-v" style="margin-top:20px" href="phuong-phap.html">Xem phương pháp đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<section class="phan tran" id="quy-dao">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-workshop.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">CDN Trust Orbit</p>
      <h2>Tôi tích luỹ niềm tin trước, rồi mới mời</h2>
      <p>Cái phễu bán hàng đo được một chiến dịch, nhưng nó không mô tả đúng cách một người quyết định tin ai. Nên tôi thiết kế quan hệ bằng quỹ đạo: khách ở giữa, năm vòng quay quanh.</p>
    </div>
    {QUY_DAO}
    <p class="ket">Khi niềm tin đã đủ, lời mời chỉ cần một câu.</p>
  </div>
</section>

<section class="phan bd hoa-van" id="chuong-trinh">
  <div class="phan-dau hien">
    <p class="mono">Hệ sinh thái</p>
    <h2>Bạn không phải mua theo thứ tự từ rẻ tới đắt</h2>
    <p>Đây là một hệ sinh thái theo nhu cầu và mức sẵn sàng, không phải một cái thang. Bạn vào đúng chỗ mình đang kẹt, và ra khi đã đủ.</p>
  </div>
  <div class="hien">{HE_SINH_THAI}</div>
  <div class="blog-them"><a class="nut nut-vien" href="chuong-trinh.html">Xem tất cả chương trình <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>

<section class="phan bd hoa-van duoi" id="blog">
  <div class="phan-dau hien">
    <p class="mono">Blog</p>
    <h2>Bài viết mới nhất</h2>
    <p>Tôi viết về đúng những gì đang làm: điểm nghẽn của người sáng lập, cách thiết kế quan hệ với khách, và cách biến kinh nghiệm thành hệ thống.</p>
  </div>
  <div class="blog hien">
    {BAI_LON}
    <div class="ds-bai">{BAI_NHO}</div>
  </div>
  <div class="blog-them"><a class="nut nut-vien" href="blog.html">Xem tất cả bài viết <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>
"""
INDEX = (INDEX.replace("{CONG_DONG}", CONG_DONG).replace("{SO_LIEU}", so_lieu_html)
         .replace("{VIEC5}", khoi_viec5()).replace("{BANG_NL}", so_do.bang_nang_luc())
         .replace("{QUY_DAO}", so_do.quy_dao()).replace("{HE_SINH_THAI}", so_do.he_sinh_thai())
         .replace("{BAI_LON}", the_bai_lon(BAI[0]))
         .replace("{BAI_NHO}", "".join(the_bai_nho(b) for b in BAI[1:4])))

trang("index.html", "Coach Duy Nguyễn · Người cố vấn cho nhà sáng lập thế hệ mới",
      "Coach Duy Nguyễn đi cùng nhà sáng lập biến uy tín cá nhân thành hệ thống mà đội ngũ cùng vận hành. Bốn năng lực, quỹ đạo niềm tin, và cộng đồng Next Gen Founder.",
      INDEX, "index.html")
print("  index.html")

# ---------------------------------------------------------------- VỀ TÔI
VE_TOI = dau_trang("Về tôi", "Người đi trước vài chặng, không phải người biết hết",
  "Tôi là Coach Duy Nguyễn. Tôi đi cùng nhà sáng lập biến uy tín cá nhân thành một hệ thống mà đội ngũ có thể cùng vận hành.") + """
<section class="phan bd">
  <div class="vt">
    <div class="vt-chu hien">
      <p class="mono">Tôi nói với ai</p>
      <h2>Người mà khách mua vì tin ở chính họ</h2>
      <p>Chuyên gia có nghề, chủ doanh nghiệp dịch vụ, và người đang dẫn một đội. Với những người này, uy tín cá nhân đứng ngay trước quyết định mua, trước một hợp đồng hợp tác, và trước lời đồng ý của một nhân sự giỏi.</p>
      <p>Tôi bắt đầu nghề bằng việc dạy bán hàng. Suốt sáu năm, tôi làm việc với hàng nghìn người bán và nhận ra một điều lặp đi lặp lại: người chủ có thể bán rất giỏi mà doanh nghiệp vẫn kẹt, nếu nội dung, tư vấn, hệ thống và đội ngũ đều chờ họ. Vì vậy tôi chuyển trọng tâm từ đào tạo người bán sang phát triển người chủ.</p>
      <p>Tôi không rời bỏ phần bán hàng. Tôi dùng chính nền tảng bán bằng niềm tin đó để giải một bài toán sâu hơn.</p>
    </div>
    <div class="vt-anh hien">
      <div class="quang" aria-hidden="true"></div>
      <div class="nguoi"><img src="img/cd-chan-dung.png" alt="Chân dung Coach Duy Nguyễn" loading="lazy" width="485" height="760"></div>
      <div class="manh">
        <div class="anh m1"><img src="img/cd-workshop.jpg" alt="Coach Duy Nguyễn đưa micro cho một học viên" loading="lazy"></div>
        <div class="anh m2"><img src="img/cd-dung-lop.jpg" alt="Coach Duy Nguyễn nói trước một phòng người sáng lập" loading="lazy"></div>
        <div class="anh m3"><img src="img/cd-giang-slide.jpg" alt="Coach Duy Nguyễn giảng trước màn chiếu" loading="lazy"></div>
      </div>
    </div>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Ba người tôi hay ngồi cùng</p>
    <h2>Bạn có nằm trong ba chân dung này không</h2>
    <p>Nếu có, phần lớn những gì tôi viết trên trang này sẽ chạm đúng chỗ bạn đang nghĩ.</p>
  </div>
  <div class="luoi c3 tre hien">
    <article class="the cd-the">
      <div class="anh"><img src="img/nguoi-chuyen-gia.jpg" alt="Ảnh minh hoạ một chuyên gia có nghề" loading="lazy"></div>
      <div class="noi"><h3>Chuyên gia có nghề</h3>
      <p>Bạn giỏi việc của mình và khách tìm tới vì tên bạn. Nhưng thu nhập vẫn buộc chặt vào số giờ bạn ngồi xuống làm.</p></div>
    </article>
    <article class="the cd-the">
      <div class="anh"><img src="img/nguoi-chu-dn.jpg" alt="Ảnh minh hoạ một chủ doanh nghiệp dịch vụ" loading="lazy"></div>
      <div class="noi"><h3>Chủ doanh nghiệp dịch vụ</h3>
      <p>Đã có khách, có doanh thu, có đội. Nhưng giao dịch lớn, ngoại lệ và quyết định quan trọng vẫn quay về bàn của bạn.</p></div>
    </article>
    <article class="the cd-the">
      <div class="anh"><img src="img/nguoi-dan-doi.jpg" alt="Ảnh minh hoạ một người đang dẫn một đội" loading="lazy"></div>
      <div class="noi"><h3>Người đang dẫn một đội</h3>
      <p>Bạn chịu trách nhiệm cho kết quả của người khác. Bạn cần uy tín đủ để người giỏi tin và ở lại đủ lâu.</p></div>
    </article>
  </div>
  <div class="dut hien">
    <b>Chưa hợp lúc này</b>
    <p>Người chưa có khách trả tiền, người đang tìm cách tăng nhanh lượt xem, và người muốn tôi làm thay phần việc của mình. Ba nhóm này tôi nói thẳng ngay từ đầu để không ai mất thời gian.</p>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Điều tôi nhìn thấy</p>
    <h2>Bốn câu nghe như bốn vấn đề, thật ra một chỗ</h2>
  </div>
  <div class="clv">
    <div class="hop hien">
      <h3>Bốn câu tôi nghe nhiều nhất</h3>
      <p class="dan-hop">Người nói ra thường đi tìm bốn giải pháp khác nhau. Đó là chỗ tốn tiền nhất.</p>
      <div class="viec5">
        <div class="d"><em>01</em><div><h4>Nội dung nhiều, khách sai</h4><p>Đăng đều đặn nhiều tháng, có lượt xem, nhưng người nhắn tin không phải người trả tiền được.</p></div></div>
        <div class="d"><em>02</em><div><h4>Đội chờ tôi mới chốt</h4><p>Có người, có kịch bản, có quy trình. Nhưng tới giao dịch lớn thì khách vẫn hỏi gặp người chủ.</p></div></div>
        <div class="d"><em>03</em><div><h4>Tuyển thêm, bận hơn</h4><p>Đây là câu làm người chủ hoang mang nhất, vì nó ngược với điều họ mong khi tuyển người.</p></div></div>
        <div class="d"><em>04</em><div><h4>Tháng tốt tháng kém</h4><p>Doanh thu lên xuống mà không chỉ ra được nguyên nhân, nên cũng không lặp lại được tháng tốt.</p></div></div>
      </div>
    </div>
    <div class="hop hien">
      <h3>Chúng về cùng một chỗ</h3>
      <p class="dan-hop">Hỏi ngược lại từng câu, cả bốn đều dẫn về một câu trả lời giống nhau.</p>
      <p style="font-size:16.5px;color:var(--ink-2)">Vì sao nội dung không ra đúng khách? Vì luận điểm nằm trong đầu người chủ, chưa thành một câu mà cả đội nói giống nhau. Vì sao đội chờ người chủ? Vì cách đọc khách vẫn nằm trong đầu người chủ. Vì sao tuyển thêm mà bận hơn? Vì việc chưa được viết thành luồng. Vì sao tháng tốt tháng kém? Vì không có dữ liệu nào ghi lại điều gì tạo ra tháng tốt.</p>
      <div class="nl-ai" style="margin-top:22px"><b>Gốc</b><p>Uy tín, cách ra quyết định và cách tạo ra kết quả vẫn nằm chủ yếu trong đầu người chủ. Doanh nghiệp chưa chuyển chúng thành tài sản, quy trình, dữ liệu và năng lực của đội.</p></div>
      <a class="lk-v" style="margin-top:20px" href="bai-viet/bon-cau-toi-nghe-nhieu-nhat.html">Đọc bài đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Số công khai</p>
      <h2>Bạn có quyền kiểm người mình sắp nghe</h2>
      <p>Tôi để số ở đây, và nói luôn giới hạn của nó.</p>
    </div>
    <div class="hero-so hien" style="border-top:0;margin-top:0;padding-top:0">{SO_LIEU}</div>
    <div class="khong hien" style="max-width:70ch;margin:34px auto 0">
      <b>Điều số này không nói</b>
      <p>Nó nói tôi có mặt đủ lâu và đủ đều để bạn kiểm chứng, không nói tôi giúp được bạn. Câu đó chỉ có bằng chứng trong chính doanh nghiệp của bạn mới trả lời được, và đó là thứ tôi cùng bạn đi tìm.</p>
    </div>
  </div>
</section>
""".replace("{SO_LIEU}", so_lieu_html)

trang("ve-toi.html", "Về Coach Duy Nguyễn · Người cố vấn cho nhà sáng lập",
      "Coach Duy Nguyễn nói với ai, nhìn thấy vấn đề gì ở người sáng lập, và làm việc theo cách nào. Số liệu công khai và giới hạn của nó.",
      VE_TOI, "ve-toi.html")
print("  ve-toi.html")

# ---------------------------------------------------------------- PHƯƠNG PHÁP
PHUONG_PHAP = dau_trang("Phương pháp", "Năm việc của người cố vấn và quỹ đạo niềm tin",
  "Ba thứ tôi dùng mỗi ngày: năm việc phải làm được khi đi cùng một nhà sáng lập, bốn năng lực làm bản đồ, và cách tôi thiết kế quan hệ với khách bằng quỹ đạo thay cho phễu.") + """
<section class="phan bd hoa-van">
  <div class="doi-cot">
    <div class="hien">
      <p class="mono">Bản đồ</p>
      <h2>Bốn năng lực của nhà sáng lập thế hệ mới</h2>
      <p>Đây là bản đồ tôi dùng để biết một người đang thiếu gì. Bạn không cần đi hết cùng lúc. Thường chỉ một năng lực đang chặn ba năng lực còn lại, và việc đầu tiên là tìm ra năng lực đó.</p>
      <p>AI là năng lực nền của cả bốn việc. Nó làm nhanh hơn phần nghiên cứu, chuẩn bị và tóm tắt. Phán đoán, quan hệ và quyết định có trách nhiệm vẫn là phần của con người.</p>
    </div>
    <div class="hien">{BANH_XE}</div>
  </div>
  <div class="hien" style="margin-top:40px">{BANG_NL}</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Cách làm việc</p>
    <h2>Năm việc tôi làm khi đi cùng một nhà sáng lập</h2>
    <p>Người cố vấn không phải là chức danh tự đặt. Nó là năm việc phải làm được. Tôi viết ra đây để bạn kiểm tôi.</p>
  </div>
  <div class="clv">
    <div class="hop hien">
      <h3>Năm việc</h3>
      <p class="dan-hop">Mỗi lần làm việc phải đi đủ năm bước này, không bỏ bước nào.</p>
      {VIEC5}
      <a class="lk-v" style="margin-top:20px" href="bai-viet/nam-viec-cua-mot-nguoi-co-van.html">Đọc bài đầy đủ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop hien">
      <h3>Ba việc tôi không làm</h3>
      <p class="dan-hop">Ranh giới này giữ cho việc đồng hành không biến thành sự lệ thuộc.</p>
      {KHONG_LAM}
      <div class="nl-ai" style="margin-top:22px"><b>Vì sao</b><p>Nếu bạn chỉ đi được khi có tôi, tôi đã làm sai việc của mình. Mục tiêu của sự đồng hành là giúp bạn trưởng thành hơn trong phán đoán và hành động.</p></div>
    </div>
  </div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-workshop.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">CDN Trust Orbit</p>
      <h2>Tôi tích luỹ niềm tin trước, rồi mới mời</h2>
      <p>Phễu đo được một chiến dịch, nhưng nó không mô tả đúng cách một người quyết định tin ai. Khách ở giữa, năm vòng quay quanh, và họ có thể tiến gần hoặc lùi ra bất cứ lúc nào mà vẫn còn trong hệ.</p>
    </div>
    {QUY_DAO}
    <p class="ket">Dùng phễu để đo. Dùng quỹ đạo để thiết kế quan hệ.</p>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Tiêu chuẩn</p>
    <h2>Một điểm chạm tốt phải làm được gì</h2>
    <p>Mỗi lần xuất hiện trước một người, tôi phải đạt ít nhất một trong ba điều dưới đây. Không đạt điều nào thì đó là một lần tiêu bớt niềm tin chứ không tích thêm.</p>
  </div>
  <div class="dx tre hien">
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Một</span><h3>Hiểu vấn đề rõ hơn</h3><p>Sau khi đọc hoặc nghe, họ gọi đúng tên điều đang kẹt hơn lúc trước.</p></div></article>
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Hai</span><h3>Tự đánh giá được</h3><p>Họ có một tiêu chí để soi vào bối cảnh của chính mình, không cần hỏi tôi.</p></div></article>
    <article><div><span class="trang-thai"><i aria-hidden="true"></i>Ba</span><h3>Tiến một bước nhỏ</h3><p>Có một việc vừa sức họ làm được ngay trong tuần này.</p></div></article>
    <article><div><span class="trang-thai im"><i aria-hidden="true"></i>Ranh giới</span><h3>Bước tiếp theo đủ nhỏ</h3><p>Không yêu cầu cam kết lớn trước khi họ có đủ thông tin và niềm tin.</p></div></article>
  </div>
  <p class="ket">Khi niềm tin đã đủ, lời mời chỉ cần một câu.</p>
</section>
""".replace("{BANH_XE}", so_do.banh_xe()).replace("{BANG_NL}", so_do.bang_nang_luc()) \
   .replace("{VIEC5}", khoi_viec5()).replace("{QUY_DAO}", so_do.quy_dao()) \
   .replace("{KHONG_LAM}", dsk(["Không làm thay phần việc của bạn. Tôi chỉ đường và giữ chuẩn, bạn tự bước.",
                                "Không hứa một con số doanh thu khi chưa đủ điều kiện. Lời hứa của tôi là điểm nghẽn được gọi đúng tên và một năng lực được xây.",
                                "Không giữ ai ở lại bằng cảm giác lệ thuộc. Mỗi lần làm việc phải để lại cho bạn một tiêu chí tự đánh giá."], khong=True))

trang("phuong-phap.html", "Phương pháp của Coach Duy Nguyễn · Bốn năng lực và quỹ đạo niềm tin",
      "Bốn năng lực của nhà sáng lập thế hệ mới, năm việc của một người cố vấn, và CDN Trust Orbit, cách thiết kế quan hệ với khách bằng quỹ đạo thay cho phễu.",
      PHUONG_PHAP, "phuong-phap.html")
print("  phuong-phap.html")

# ---------------------------------------------------------------- CHƯƠNG TRÌNH: trang tổng
def nhom_ct(ten):
    return [c for c in CT if c["nhom"] == ten]

CHUONG_TRINH = dau_trang("Chương trình", "Hệ sinh thái Next Gen Founder",
  "Không phải một cái thang bắt bạn mua lần lượt từ rẻ tới đắt. Là một hệ sinh thái theo nhu cầu và mức sẵn sàng. Bạn vào đúng chỗ mình đang kẹt, và ra khi đã đủ.") + """
<section class="phan bd hoa-van">
  <div class="hien">{HE_SINH_THAI}</div>
</section>

<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien">
    <p class="mono">Bốn năng lực</p>
    <h2>Luyện từng năng lực khi bạn biết mình thiếu gì</h2>
    <p>Bốn chương trình tương ứng với bốn năng lực của nhà sáng lập thế hệ mới. Không chương trình nào hứa tạo ra toàn bộ nhân dạng, mỗi chương trình chịu trách nhiệm cho một kết quả rõ.</p>
  </div>
  <div class="luoi-ct tre hien">{NL4}</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Đồng hành</p>
      <h2>Ở lại đủ lâu để thay đổi thành thói quen</h2>
      <p>Một khoá học tạo ra hiểu biết. Chỉ có nhịp và cộng đồng mới biến hiểu biết thành thói quen. Đó là lý do cộng đồng là chỗ tôi dồn phần lớn thời gian trong năm nay.</p>
    </div>
    <div class="luoi-ct tre hien">{DONGHANH}</div>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Phạm vi riêng</p>
    <h2>Khi quyết định đủ lớn để cần một phạm vi riêng</h2>
    <p>Hai phạm vi này nhận rất giới hạn và không mở đăng ký đại trà. Chúng chỉ mở sau khi đã trao đổi đủ và cả hai bên thấy đúng thời điểm.</p>
  </div>
  <div class="luoi-ct tre hien">{RIENG}</div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Công cụ mở</p>
    <h2>Hai thứ bạn dùng được ngay, không mất phí</h2>
  </div>
  <div class="luoi c2 tre hien">
    <article class="the">
      <span class="trang-thai"><i aria-hidden="true"></i>Đang mở, 7 phút</span>
      <h3>Phiếu chẩn đoán</h3>
      <p>Bảy phút để bạn tự nhìn ra điểm nghẽn đang chặn mình nhiều nhất, trước khi nói chuyện với bất kỳ ai, kể cả tôi.</p>
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
""".replace("{HE_SINH_THAI}", so_do.he_sinh_thai()) \
   .replace("{NL4}", "".join(the_ct(c) for c in nhom_ct("Bốn năng lực"))) \
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
                '<div class="nguoi"><img src="%s%s" alt="%s" loading="lazy" width="485" height="760"></div>'
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
  <p>Tôi không đặt giá lên trang, vì phạm vi phù hợp với bạn phải được xác định trước. Trong buổi trao đổi, chúng ta làm rõ điểm nghẽn, điều kiện và phạm vi, rồi mới nói tới mức đầu tư. Nếu chưa hợp, bạn được nói thẳng và không mất gì.</p></div>
</section>"""

    chang_html = ""
    if c["tep"] == "the-trusted-creator.html":
        chang_html = """<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Cơ chế</p><h2>Năm chặng trong ba mươi ngày</h2>
  <p>Không phải năm bài giảng. Là năm chặng, mỗi chặng có đầu ra riêng, và chặng sau chỉ chạy được khi chặng trước đã xong.</p></div>
  <div class="hien">%s</div>
</section>""" % so_do.chang_5()

    if c.get("mo_ban"):
        dich = TTC_LANDING or dd("lien-he.html", p)
        nhan_nut, tieu_cta, dan_cta = ("Đăng ký khoá đầu tiên", "Khoá đầu tiên khai giảng 28 tháng 9 năm 2026",
            "Đăng ký sớm áp dụng tới hết ngày 20 tháng 9. Nếu bạn còn phân vân mình có hợp không, làm phiếu chẩn đoán bảy phút trước, rồi quyết.")
    else:
        dich = CONG_DONG
        nhan_nut, tieu_cta, dan_cta = ("Trao đổi trước khi quyết", "Bắt đầu bằng một buổi trao đổi ngắn",
            "Chương trình này chỉ mở khi phạm vi phù hợp với điều bạn đang kẹt. Để lại vài dòng, đội Next Gen Founder sẽ trao đổi để xem có hợp không. Nếu chưa hợp, bạn được nói thẳng.")
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
  <div class="phan-dau hien"><p class="mono">Kết quả</p><h2>Bạn ra khỏi chương trình với những gì</h2></div>
  <div class="hien" style="max-width:800px;margin-inline:auto">%s</div>
</section>

%s

%s

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="%simg/cd-dung-lop.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Ranh giới</p><h2>Chương trình này không làm gì</h2>
    <p>Tôi ghi phần này rõ ngang phần kết quả. Biết trước điều gì không có sẽ giúp bạn quyết đúng hơn.</p></div>
    <div class="hien" style="max-width:800px;margin-inline:auto">%s</div>
  </div>
</section>

%s

<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Xem thêm</p><h2>Hai chương trình gần với chương trình này</h2></div>
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

BLOG = dau_trang("Blog", "Tôi viết về đúng những gì đang làm",
  "Điểm nghẽn của người sáng lập, cách thiết kế quan hệ với khách, và cách biến kinh nghiệm thành hệ thống mà đội ngũ cùng vận hành. Không viết bài theo xu hướng.") + """
<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Bài mới nhất</p><h2>%s</h2></div>
  <div class="blog hien">
    %s
    <div class="ds-bai">%s</div>
  </div>
</section>

<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien"><p class="mono">Tất cả %d bài</p><h2>Chọn theo chủ đề</h2></div>
  <div class="chu-de hien">%s</div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (BAI[0]["tieu"], the_bai_lon(BAI[0]), "".join(the_bai_nho(b) for b in BAI[1:4]),
       len(BAI), chu_de_html, "".join(the_bai_luoi(b) for b in BAI))

trang("blog.html", "Blog của Coach Duy Nguyễn · Bài viết cho nhà sáng lập",
      "Bài viết về điểm nghẽn của người sáng lập, quỹ đạo niềm tin, thương hiệu cá nhân và cách biến kinh nghiệm thành hệ thống. Viết bởi Coach Duy Nguyễn.",
      BLOG, "blog.html")
print("  blog.html")

for i, b in enumerate(BAI):
    p = "../"
    khac = [x for x in BAI if x is not b and x["chu_de"] == b["chu_de"]][:2]
    if len(khac) < 2:
        khac += [x for x in BAI if x is not b and x not in khac][:2 - len(khac)]
    ld = json.dumps({
        "@context":"https://schema.org","@type":"BlogPosting","headline":b["tieu"],
        "description":b["mo"],"datePublished":b["ngay"],"dateModified":b["ngay"],
        "articleSection":b["chu_de"],"inLanguage":"vi",
        "author":{"@type":"Person","name":"Coach Duy Nguyễn","url":BASE+"/ve-toi.html"},
        "publisher":{"@type":"Person","name":"Coach Duy Nguyễn"},
        "mainEntityOfPage":BASE+"/bai-viet/"+b["tep"]}, ensure_ascii=False)
    than = """<article>
  <div class="bd bai-dau hien">
    <p class="meta"><a href="%sblog.html" style="color:inherit;text-decoration:none">%s</a> &nbsp;·&nbsp; %s &nbsp;·&nbsp; %s</p>
    <h1>%s</h1>
    <p class="tom">%s</p>
  </div>
  <div class="bd hien"><div class="bai-anh"><img src="%s%s" alt="%s"></div></div>
  <div class="bd"><div class="bai-than hien">%s</div>
  <div class="bai-cuoi">
    <p>Viết bởi Coach Duy Nguyễn</p>
    <a class="lk-v" href="%sblog.html">Về trang blog <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div></div>
</article>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien"><p class="mono">Đọc tiếp</p><h2>Hai bài cùng mạch</h2></div>
  <div class="luoi-bai tre hien">%s</div>
</section>
""" % (p, b["chu_de"], b["ngay_viet"], b["doc"], b["tieu"], b["mo"], p, b["anh"], b["alt"],
       b["than"], p, "".join(the_bai_luoi(x, p) for x in khac))
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

SACH = dau_trang("Sách", "Sách tôi đang viết",
  "Tôi chưa có sách đã in. Trang này ghi rõ cuốn nào đang viết và dự kiến ra mắt khi nào, để bạn không phải đoán.") + """
<section class="phan bd hoa-van">
  <div class="ghi-mau hien"><b>Bản thiết kế</b><p>Bìa dưới đây là bản dựng tạm bằng chữ, chưa phải bìa thật. Khi có bìa do hoạ sĩ làm, tôi thay ảnh vào đúng chỗ này.</p></div>
  <div class="hang-bia hai tre hien">%s%s</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-san-khau.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Trong lúc chờ sách</p>
      <h2>Phần lớn nội dung tôi đã viết dần trên blog</h2>
      <p>Bạn đọc trước ở đó, và nói cho tôi biết chỗ nào cần đào sâu. Những chỗ được hỏi nhiều nhất sẽ thành chương dày nhất.</p>
    </div>
    <div class="blog hien">%s<div class="ds-bai">%s</div></div>
  </div>
</section>
""" % (
 bia("Sắp ra mắt", "Bán Bằng Vị Thế", "Bán Bằng Vị Thế",
     "Gom lại cách bán dựa trên vị thế và niềm tin tôi đã dạy suốt sáu năm. Viết cho người chủ chứ không cho người bán: làm sao để khách tìm tới vì tin bạn, và làm sao để cách bán đó không chỉ nằm trong đầu bạn.",
     "Đang viết · dự kiến quý 4 năm 2026"),
 bia("Bộ tài liệu", "Thực Chiến Bất Động Sản", "Bộ Sách Thực Chiến Bất Động Sản",
     "Bộ tài liệu thực chiến cho người làm bất động sản, rút từ các chương trình đào tạo đã chạy. Đây là phần chuyên ngành, tách khỏi dòng nội dung dành cho nhà sáng lập.",
     "Đang biên soạn"),
 the_bai_lon(BAI[3]), "".join(the_bai_nho(b) for b in [BAI[8], BAI[0], BAI[4]]))

trang("sach.html", "Sách của Coach Duy Nguyễn · Bán Bằng Vị Thế",
      "Sách Bán Bằng Vị Thế đang viết, dự kiến quý 4 năm 2026, và Bộ Sách Thực Chiến Bất Động Sản đang biên soạn.",
      SACH, "sach.html")
print("  sach.html")

# ---------------------------------------------------------------- PODCAST
TAP_MAU = [
  ("01","Người chủ giỏi bán nhất công ty, và cái giá của điều đó","Khách mời sẽ được công bố","Chưa ghi","~45 phút"),
  ("02","Bỏ một dòng doanh thu đang chạy tốt để đi xa hơn","Khách mời sẽ được công bố","Chưa ghi","~52 phút"),
  ("03","Lần đầu giao quyền quyết định giá cho người khác","Khách mời sẽ được công bố","Chưa ghi","~38 phút"),
  ("04","Xây một cộng đồng mà mình không phải là trung tâm","Khách mời sẽ được công bố","Chưa ghi","~50 phút"),
]
tap_html = "".join("""<div class="tap">
  <span class="so-tap">TẬP %s</span>
  <div class="art" aria-hidden="true"><span>DN</span></div>
  <div><h3>%s</h3><p class="phu">%s</p></div>
  <span class="ngay">%s</span><span class="dai">%s</span>
</div>""" % t for t in TAP_MAU)

PODCAST = dau_trang("Podcast", "Podcast Nhà sáng lập thế hệ mới",
  "Đối thoại với người sáng lập và người điều hành về một thay đổi thật họ đã làm, kèm điều kiện và cái giá phải trả. Không phải phỏng vấn thành công.") + """
<section class="phan bd hoa-van" style="padding-bottom:44px">
  <div class="nen-tang hien"><span>Sẽ có trên</span><b><i aria-hidden="true"></i>Spotify</b><b><i aria-hidden="true"></i>Apple Podcasts</b><b><i aria-hidden="true"></i>YouTube</b></div>
  <div class="ghi-mau hien" style="margin-top:34px"><b>Chưa mở</b><p>Chưa có tập nào được ghi. Phần dưới là bản thiết kế để bạn hình dung trang khi đã có tập. Tên tập là ví dụ về hướng nội dung, không phải tập đã có thật.</p></div>
</section>

<section class="phan bd hoa-van duoi" style="padding-top:0">
  <div class="phan-dau hien"><p class="mono">Bản thiết kế</p><h2>Trang sẽ trông như thế này</h2>
  <p>Mỗi tập gắn với một thay đổi thật trong cách khách mời xây doanh nghiệp. Tôi không mở podcast chỉ để có thêm một kênh.</p></div>
  <div class="ds-tap hien">%s</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-dung-lop.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Tiêu chuẩn một tập</p><h2>Ba điều một tập phải có, thiếu thì tôi không phát</h2></div>
    <div class="dx tre hien">
      <article><div><span class="trang-thai"><i aria-hidden="true"></i>Một</span><h3>Một thay đổi thật</h3><p>Khách mời kể một quyết định họ đã đổi, kèm mốc thời gian, không nói chung về triết lý.</p></div></article>
      <article><div><span class="trang-thai"><i aria-hidden="true"></i>Hai</span><h3>Cái giá đã trả</h3><p>Thay đổi nào cũng có giá. Tập nào không nói được cái giá thì tập đó chưa đủ thật.</p></div></article>
      <article><div><span class="trang-thai"><i aria-hidden="true"></i>Ba</span><h3>Điều kiện áp dụng</h3><p>Cách làm đó hợp với ai và không hợp với ai. Người nghe cần biết mình có nằm trong nhóm đó không.</p></div></article>
      <article><div><span class="trang-thai im"><i aria-hidden="true"></i>Không có</span><h3>Không phỏng vấn thành công</h3><p>Tôi không mời khách lên để kể mình giỏi thế nào. Đó là loại nội dung nghe xong không dùng được.</p></div></article>
    </div>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien"><p class="mono">Trong lúc chờ</p><h2>Nghe tôi ở nơi khác</h2>
  <p>Tôi làm nội dung đều đặn sáu năm trên bốn kênh. Nội dung dài nhất nằm ở YouTube, nội dung ngắn ở TikTok và Facebook.</p></div>
  <div class="hero-so hien" style="border-top:0;margin-top:0;padding-top:0">%s</div>
</section>
""" % (tap_html, so_lieu_html)

trang("podcast.html", "Podcast Nhà sáng lập thế hệ mới · Coach Duy Nguyễn",
      "Podcast Nhà sáng lập thế hệ mới của Coach Duy Nguyễn đang chuẩn bị. Mỗi tập gắn với một thay đổi thật trong cách khách mời xây doanh nghiệp.",
      PODCAST, "podcast.html")
print("  podcast.html")

# ---------------------------------------------------------------- LIÊN HỆ
LIEN_HE = dau_trang("Liên hệ", "Bốn cửa để nói chuyện với tôi",
  "Tôi nhận rất giới hạn. Chọn đúng cửa dưới đây thì tôi trả lời nhanh hơn, và bạn cũng đỡ mất thời gian chờ.") + """
<section class="phan bd hoa-van">
  <div class="lh tre hien">
    <div class="hop">
      <h3>Muốn tham gia cộng đồng</h3>
      <p>Đây là cửa chính. Điền biểu mẫu khoảng hai phút, đội Next Gen Founder sẽ liên hệ để xem cộng đồng có giải được điều bạn đang kẹt không. Nếu chưa hợp, bạn được nói thẳng.</p>
      <a class="lk-v" href="{CONG_DONG}" target="_blank" rel="noopener">Đăng ký danh sách chờ <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Chưa rõ mình đang kẹt ở đâu</h3>
      <p>Làm phiếu chẩn đoán bảy phút trước. Bạn sẽ tự nhìn ra điểm nghẽn đang chặn mình nhiều nhất, trước khi nói chuyện với bất kỳ ai, kể cả tôi.</p>
      <a class="lk-v" href="{PHIEU}" target="_blank" rel="noopener">Làm phiếu chẩn đoán <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Mời nói chuyện hoặc hợp tác truyền thông</h3>
      <p>Gửi thư nêu rõ chủ đề, đối tượng người nghe, thời gian và địa điểm. Tôi trả lời trong vòng vài ngày làm việc.</p>
      <a class="lk-v" href="mailto:{EMAIL}">{EMAIL} <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="hop">
      <h3>Cố vấn riêng và giải pháp doanh nghiệp</h3>
      <p>Đây là hợp đồng riêng, tôi nhận rất giới hạn và chỉ mở sau khi đã trao đổi đủ. Bắt đầu bằng danh sách chờ cộng đồng, không bắt đầu bằng một cuộc gọi bán hàng.</p>
      <a class="lk-v" href="chuong-trinh/co-van-rieng.html">Xem phạm vi cố vấn riêng <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
  <div class="khong hien" style="max-width:70ch;margin:34px auto 0">
    <b>Điều tôi không nhận</b>
    <p>Tôi không nhận làm thay phần việc của bạn, không nhận lời mời cam kết một con số doanh thu, và không nhận người mà tôi biết mình chưa giúp được. Nói không sớm là cách tôi giữ chuẩn.</p>
  </div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="img/cd-workshop.jpg" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Nơi tôi xuất hiện</p><h2>Bốn kênh tôi làm đều đặn sáu năm</h2>
    <p>Nội dung dài nhất nằm ở YouTube. Nội dung ngắn ở TikTok và Facebook. Zalo là nơi tôi trả lời câu hỏi cụ thể.</p></div>
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
BON04 = dau_trang("Không tìm thấy", "Trang này không có ở đây",
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
URLS = ["", "ve-toi.html", "chuong-trinh.html", "phuong-phap.html", "blog.html",
        "sach.html", "podcast.html", "lien-he.html"] \
     + ["chuong-trinh/" + c["tep"] for c in CT] + ["bai-viet/" + b["tep"] for b in BAI]
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for t in URLS:
    sm.append("  <url><loc>%s/%s</loc></url>" % (BASE, t))
sm.append("</urlset>")
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "sitemap.xml"), "w", encoding="utf-8").write("\n".join(sm))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "robots.txt"), "w", encoding="utf-8").write(
    "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % BASE)

llms = """# Coach Duy Nguyễn

> Người cố vấn đi cùng nhà sáng lập thế hệ mới. Giúp người chủ biến uy tín cá nhân thành một hệ thống mà đội ngũ có thể cùng vận hành. Phương pháp riêng: bốn năng lực của nhà sáng lập thế hệ mới và CDN Trust Orbit, hệ thống quỹ đạo niềm tin.

## Trang chính
- [Về tôi](%(b)s/ve-toi.html): nói với ai, nhìn thấy vấn đề gì, số liệu công khai và giới hạn của nó
- [Phương pháp](%(b)s/phuong-phap.html): bốn năng lực, năm việc của người cố vấn, CDN Trust Orbit
- [Chương trình](%(b)s/chuong-trinh.html): hệ sinh thái Next Gen Founder, tám chương trình
- [Blog](%(b)s/blog.html): %(n)d bài viết cho nhà sáng lập
- [Sách](%(b)s/sach.html): Bán Bằng Vị Thế, đang viết, dự kiến quý 4 năm 2026
- [Podcast](%(b)s/podcast.html): Nhà sáng lập thế hệ mới, đang chuẩn bị
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
