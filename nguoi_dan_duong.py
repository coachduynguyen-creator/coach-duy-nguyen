# -*- coding: utf-8 -*-
"""Trang chương trình Người Dẫn Đường (D75 trong NGF-00B, phiếu chốt 38 và 39).

Dựng nguoi-dan-duong/index.html, noindex, không có trong sitemap và menu cho tới
khi Coach Duy duyệt. Chạy sau dung.py:
  python3 nguoi_dan_duong.py

ponytail: khi Coach Duy duyệt thì bỏ dòng chen_noindex, thêm trang vào URLS và
sitemap trong dung.py.
"""
import os
from lib import trang, dau_trang, GOC

CSS = """<style>
.ndd-luoi{--cot:4;display:grid;grid-template-columns:repeat(var(--cot),1fr);gap:18px}
.ndd-luoi.ba{--cot:3}
@media (max-width:1000px){.ndd-luoi,.ndd-luoi.ba{--cot:2}}
@media (max-width:600px){.ndd-luoi,.ndd-luoi.ba{--cot:1}}
.ndd-o{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:22px;box-shadow:var(--shadow-s)}
.ndd-o p,.ndd-o li,.ndd-ds li{text-align:left !important}
.ndd-so{font-family:var(--f-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--vang)}
.ndd-o h3{font-size:21px;margin:8px 0 8px}
.ndd-o p{color:var(--ink-2);font-size:15.5px}
.ndd-ds{list-style:none;padding:0;margin:14px 0 0;display:grid;gap:10px}
.ndd-ds li{position:relative;padding-left:26px;color:var(--ink-2)}
.ndd-ds li:before{content:"";position:absolute;left:4px;top:.6em;width:9px;height:9px;border-radius:50%;background:var(--vang)}
.ndd-khong li:before{background:var(--ink-4)}
.ndd-hai{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
@media (max-width:700px){.ndd-hai{grid-template-columns:1fr}}
.ndd-moi{display:flex;flex-wrap:wrap;gap:18px 28px;align-items:center;justify-content:space-between;background:var(--paper);border:1px solid rgba(242,177,74,.4);border-radius:var(--r);padding:28px}
.ndd-moi > div{flex:1 1 420px}
.ndd-moi p{text-align:left !important;color:var(--ink-2)}
</style>"""

def o(so, tieu, chu):
    return '<div class="ndd-o hien"><p class="ndd-so">%s</p><h3>%s</h3><p>%s</p></div>' % (so, tieu, chu)

def ds(xs, lop="ndd-ds"):
    return '<ul class="%s">%s</ul>' % (lop, "".join("<li>%s</li>" % x for x in xs))

THAN = CSS + dau_trang(
    "Người Dẫn Đường",
    "Chương trình đào tạo người dẫn đường cho nhà sáng lập",
    "Mười hai tháng Duy kèm trực tiếp một nhóm nhỏ những người đã có kết quả thật trong kinh doanh hoặc chuyên môn. Bạn cùng Duy ngồi vào những buổi coaching thật với người chủ thật, cho tới khi bạn tự dẫn được một nhóm mà không cần Duy ngồi bên cạnh.") + """

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Vì sao có chương trình này</p>
    <h2>Một người không đi cùng hết được mười nghìn người</h2>
    <p>Duy đặt mục tiêu góp phần tạo nên 10.000 Next Gen Founder tại Việt Nam. Đi được tới con số đó thì không thể chỉ có một mình Duy ngồi trong mọi buổi coaching. Duy cần những người hiểu cách Duy nghĩ, làm việc theo cùng một chuẩn, và muốn đi cùng một con đường. Người Dẫn Đường là nơi Duy truyền lại nghề cho những người đó.</p>
  </div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Dành cho ai</p>
    <h2>Bạn đã tự làm ra kết quả, giờ muốn dẫn người khác đi</h2>
  </div>
  <div class="ndd-hai">
    <div class="ndd-o hien"><h3>Chương trình dành cho bạn nếu</h3>""" + ds([
        "Bạn đã có kết quả thật trong kinh doanh hoặc trong chuyên môn của mình, nói ra được và người khác kiểm chứng được",
        "Bạn tin giá trị đi trước, tiền bạc đến sau",
        "Bạn dành được ít nhất tám giờ mỗi tuần trong mười hai tháng",
        "Bạn sẵn sàng để Duy nhận xét thẳng sau mỗi buổi mình dẫn",
    ]) + """</div>
    <div class="ndd-o hien"><h3>Chương trình chưa hợp với bạn nếu</h3>""" + ds([
        "Bạn đang tìm một tấm chứng nhận để treo lên tường",
        "Bạn muốn có ngay kịch bản để mở một khóa học",
        "Bạn chưa có chuyện thật nào của chính mình để kể cho người học",
    ], "ndd-ds ndd-khong") + """</div>
  </div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Mười hai tháng, bốn nấc</p>
    <h2>Học bằng cách làm cùng Duy, mỗi nấc chỉ lên khi đã vững</h2>
    <p>Chương trình chia hai chặng, mỗi chặng sáu tháng. Bạn đi qua bốn nấc, ngay trong những buổi coaching thật của Cộng đồng Next Gen Founder, cộng thêm một buổi chung mỗi tháng cho cả khóa.</p>
  </div>
  <div class="ndd-luoi">""" + "".join([
        o("Nấc 1", "Ngồi dự", "Bạn ngồi trong buổi coaching Duy dẫn, xem Duy hỏi gì, dừng ở đâu, và vì sao không trả lời thay người chủ."),
        o("Nấc 2", "Đồng dẫn", "Bạn dẫn một phần buổi cùng Duy. Sau buổi, hai người ngồi lại xem chỗ nào bạn đã nói thay vì hỏi."),
        o("Nấc 3", "Tự dẫn, có Duy dự", "Bạn dẫn trọn buổi, Duy ngồi nghe và nhận xét. Đây là nấc dài nhất của chương trình."),
        o("Nấc 4", "Tự dẫn một nhóm thật", "Bạn tự dẫn một nhóm thành viên trong cộng đồng, và ghi lại kết quả của những người bạn coaching."),
    ]) + """</div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Bạn học những gì</p>
    <h2>Ba phần, phần nào cũng gắn với người chủ thật</h2>
  </div>
  <div class="ndd-luoi ba">""" + "".join([
        o("Phần 1", "Phương pháp Next Gen Founder", "Founder Heart Brand OS, Hệ thống 7 bước xây thương hiệu Founder và The Trusted Advisor, phương pháp bán hàng tư vấn bằng niềm tin."),
        o("Phần 2", "Kỹ năng coaching và dẫn nhóm", "Người giỏi kinh doanh hay nói thay người chủ. Phần này tập cách hỏi, cách để cả nhóm cùng nói và cùng nghe, và cách để người chủ tự đi tới quyết định."),
        o("Phần 3", "Vận hành một nhóm trong cộng đồng", "Mời người, giữ cho nhóm gặp nhau đều đặn, ghi lại kết quả, và giữ chuẩn của cộng đồng khi không có Duy ở đó."),
    ]) + """</div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Chứng nhận</p>
    <h2>Chứng nhận đo bằng kết quả của người bạn coaching</h2>
  </div>
  <div class="ndd-o hien">""" + ds([
        "Bạn đã tự dẫn đủ số buổi có Duy dự và nhận xét",
        "Có thành viên do bạn coaching đạt kết quả và kết quả đó được ghi lại",
        "Duy là người duyệt cuối",
        "Chứng nhận có hạn một năm, gia hạn khi bạn vẫn dẫn nhóm và vẫn giữ chuẩn",
    ]) + """</div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Sau chứng nhận</p>
    <h2>Hai con đường, bạn tự chọn</h2>
  </div>
  <div class="ndd-hai">""" + "".join([
        o("Con đường 1", "Mentor trong Cộng đồng Next Gen Founder", "Bạn dẫn nhóm thành viên, cùng dẫn các buổi coaching của cộng đồng, nhận khách kèm riêng do cộng đồng giới thiệu và được chia doanh thu từ nhóm mình dẫn."),
        o("Con đường 2", "Coach độc lập mang chứng nhận", "Bạn làm dịch vụ của riêng mình và ghi chứng nhận Người Dẫn Đường khi chứng nhận còn hạn. Tên dịch vụ là tên của bạn, không mang tên Next Gen Founder hay tên chương trình."),
    ]) + """</div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Cách vào</p>
    <h2>Chương trình chỉ nhận theo thư mời</h2>
    <p>Khóa đầu nhận từ sáu tới mười người. Duy mời trước những thành viên Cộng đồng Pro và Diamond Founder Club, vì đã thấy cách các bạn làm việc. Người ngoài cộng đồng vào qua lời giới thiệu của một thành viên.</p>
  </div>
  <div class="ndd-luoi">""" + "".join([
        o("Bước 1", "Thư mời", "Duy gửi thư mời tới những người Duy thấy phù hợp."),
        o("Bước 2", "Phiếu khảo sát", "Bạn kể kết quả mình đã làm ra, và lý do bạn muốn dẫn người khác."),
        o("Bước 3", "Gặp riêng Duy", "Một buổi nói chuyện thẳng về mong muốn của bạn và yêu cầu của chương trình."),
        o("Bước 4", "Dẫn thử một buổi", "Bạn dẫn thử một buổi nhóm, có Duy ngồi dự. Nói chuyện giỏi chưa chắc đã dẫn nhóm giỏi, nên bước này không bỏ."),
    ]) + """</div>
</section>

<section class="phan bd">
  <div class="ndd-moi hien">
    <div>
      <p class="mono">Muốn được cân nhắc cho khóa đầu</p>
      <h2>Để lại lời nhắn cho Duy</h2>
      <p>Nếu bạn đã là thành viên cộng đồng, hoặc có người trong cộng đồng giới thiệu, hãy nhắn cho Duy vài dòng về kết quả bạn đã làm ra và người bạn muốn dẫn dắt.</p>
    </div>
    <a class="nut nut-v" href="../lien-he.html">Nhắn cho Duy <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</section>
"""

TEP = "nguoi-dan-duong/index.html"
trang(TEP, "Người Dẫn Đường · Chương trình đào tạo người dẫn đường cho nhà sáng lập",
      "Mười hai tháng Coach Duy Nguyễn kèm trực tiếp một nhóm nhỏ người đã có kết quả thật, để họ dẫn dắt và coaching những người chủ đi sau.",
      THAN, "")

# Ẩn khỏi Google cho tới khi Coach Duy duyệt (phiếu chốt 39, mục C1).
duong = os.path.join(GOC, TEP)
s = open(duong, encoding="utf-8").read()
s = s.replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"', 1)
open(duong, "w", encoding="utf-8").write(s)
print("  " + TEP)
