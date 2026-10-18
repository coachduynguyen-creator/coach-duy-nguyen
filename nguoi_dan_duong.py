# -*- coding: utf-8 -*-
"""Trang chương trình Người Dẫn Đường (D75 trong NGF-00B, phiếu chốt 38, 39, 40).

Dựng nguoi-dan-duong/index.html. Chạy sau dung.py:
  python3 nguoi_dan_duong.py

Chưa công bố lịch theo tháng (Coach Duy chốt 12/10/2026); trang liệt kê hoạt động và khoảnh khắc.

Trang có trong menu Chương trình và trong sitemap (URLS của dung.py).
"""
import os, re
from lib import trang, GOC

# Dải logo chạy và khối số người theo dõi lấy thẳng từ index.html do dung.py vừa dựng,
# để số và logo luôn khớp trang chủ. Bỏ logo ACB vì trang này nêu mức phí của một ngân
# hàng mà không nêu tên (Coach Duy chốt 12/10/2026, phiếu 40 mục C1).
_index = open(os.path.join(GOC, "index.html"), encoding="utf-8").read()
_kh = re.search(r'<div class="kh-chay">.*?</div>\s*</section>', _index, re.S).group(0)[:-len("</section>")]
_kh = re.sub(r'<span class="kh-l"><img src="img/doi-tac/mono/acb\.png".*?</span>', "", _kh, flags=re.S)
KHACH_HTML = _kh.replace('src="img/', 'src="../img/')
KHACH_SEC = ('<section class="kh">\n  <div class="bd"><p class="kh-dan">Các doanh nghiệp đã mời Duy đào tạo và tư vấn</p></div>\n  '
             + KHACH_HTML + '\n</section>\n')
SO_LIEU_HTML = re.search(r'<div class="hero-so">(.*?)</div>\s*<p class="hero-ghi">', _index, re.S).group(1)

P = "../"

# ------------------------------------------------------------ BẰNG CHỨNG
# Coach Duy xác nhận 12/10/2026, đồng ý công bố. Không thêm câu tự bảo đảm (Coach Duy dặn cùng ngày).
SO = [
    ("1 tỷ đồng", "một năm", "Mức cao nhất khách trả cho gói coaching kèm riêng với Duy"),
    ("120 triệu đồng", "một giờ", "Mức một ngân hàng thương mại lớn trả để mời Duy đào tạo"),
    ("50 tới 80 triệu đồng", "một buổi", "Mức các thương hiệu bảo hiểm, bất động sản trả cho một buổi đào tạo của Duy"),
]

# ------------------------------------------------------------ BẠN LÀ AI
# Coach Duy nhắc 12/10/2026: "người dẫn đường" trừu tượng, phải nói rõ đầu ra là huấn luyện viên kinh doanh.
BAN_LA_AI = [
    ("Nghề của bạn", "Huấn luyện viên kinh doanh", "Business coach cho chủ doanh nghiệp và chuyên gia: người hỏi đúng câu để họ tự nhìn ra chỗ kẹt, rồi đi cùng họ tới khi có kết quả."),
    ("Cách bạn làm", "Coaching một kèm một và dẫn nhóm", "Theo phương pháp Next Gen Founder mà Duy đang dùng với khách hàng của mình: thương hiệu cá nhân, bán hàng bằng niềm tin, hệ thống cho doanh nghiệp."),
    ("Nơi bạn làm", "Trong cộng đồng hoặc dịch vụ riêng", "Làm mentor trong Cộng đồng Next Gen Founder và được chia doanh thu, hoặc mở dịch vụ coaching mang tên của chính bạn, với chứng nhận của chương trình."),
]

# ------------------------------------------------------------ BỐN THỨ MANG VỀ
BON = [
    ("bl-viet-tay", "Phương pháp của riêng bạn", "Điều bạn đã trả giá để biết được viết ra thành các bước rõ ràng, để người khác làm theo và đạt kết quả. Duy chỉ bạn cách dựng, vì chính Duy đã dựng như vậy.", "một phương pháp có tên, có các bước, đã thử với khách thật, và buổi bạn trình bày nó trước Duy để được nhận xét thẳng"),
    ("bl-phong-thu", "Thương hiệu được tin cậy", "Người ta tìm tới bạn như một chuyên gia trong ngành, vì họ đã biết câu chuyện và lời hứa của bạn từ trước khi gặp.", "câu chuyện gốc, lời hứa, và một kênh chạy đều"),
    ("mc/mc-banlam", "Nghề huấn luyện viên kinh doanh", "Bạn tự dẫn được buổi coaching: hỏi đúng câu để chủ doanh nghiệp tự nhìn ra chỗ kẹt và tự quyết định.", "nhiều buổi coaching thật, có Duy ngồi cùng và nhận xét thẳng, được ghi lại thành sổ giờ coaching của bạn"),
    ("bl-noi-2", "Dịch vụ coaching có tên, có giá", "Phương pháp của bạn thành một dịch vụ người ta mua được, thay vì chỉ bán từng giờ làm việc.", "một dịch vụ mang tên của bạn, và những khách đầu tiên do Duy hoặc cộng đồng giới thiệu"),
    ("bl-may-tinh", "Bộ công cụ làm nghề", "Những thứ Duy đang dùng hằng ngày với khách hàng, bạn được dùng và chỉnh lại cho khách của mình.", "mẫu, kịch bản, bảng chấm điểm, bộ công cụ AI"),
    ("mc/mc-hoitruong", "Một nhóm người đi theo bạn", "Những người trong Cộng đồng Next Gen Founder tin cách bạn dẫn, cùng những người Duy giới thiệu bạn tới.", "một nhóm của riêng bạn trong cộng đồng"),
]

# ------------------------------------------------------------ BA CHÂN DUNG
# Ảnh minh họa dùng chung với trang Cộng đồng. Câu trong ngoặc là điều người đó tự nói với mình.
AI = [
    ("ngf-chu-dn", "Người chủ đi trước", "Người chủ doanh nghiệp đã đi qua một chặng",
     "Lại có người hẹn cà phê hỏi mình làm thế nào.",
     "Doanh nghiệp đã chạy được. Bạn trả lời mãi cùng một câu hỏi trong những buổi gặp không tên, và muốn biến những gì mình đã trả giá để biết thành một con đường cho người đi sau."),
    ("ngf-chuyen-gia", "Chuyên gia hành nghề lâu năm", "Luật, tài chính, y, giáo dục, kỹ thuật",
     "Nghỉ một tuần là thu nhập đứng lại.",
     "Bạn giỏi nghề, khách quý bạn, nhưng mọi đồng thu nhập đều đổi bằng giờ của chính bạn. Bạn muốn đóng gói chuyên môn thành chương trình mang tên mình, có người theo, có người học."),
    ("ngf-dan-doi", "Người dẫn đội ngũ", "Quản lý, người đào tạo nội bộ ở doanh nghiệp lớn",
     "Mình đã dẫn hàng trăm người, nhưng ngoài công ty chưa ai biết tên mình.",
     "Bạn đã dẫn đội ngũ, đào tạo người mới, gỡ chuyện khó cho người khác suốt nhiều năm. Bạn muốn làm việc đó cho chính mình, dưới tên của chính mình."),
]

# ------------------------------------------------------------ BẠN SẼ CÓ MẶT Ở ĐÓ
# Coach Duy chốt 12/10/2026: chưa công bố lịch theo tháng vì chương trình chưa chốt.
# Trang cho thấy người học được làm gì cùng Duy, bằng ảnh thật. (ảnh, nhãn, tiêu đề, chữ)
KHOANH_KHAC = [
    ("v5-chi-duong", "Trên sân khấu", "Khi Duy bước lên sân khấu trước hàng trăm người",
     "Bạn xem Duy chuẩn bị một bài nói, đứng ở cánh gà lúc Duy bước ra, rồi ngồi lại sau buổi để nghe Duy nói chỗ nào đã chạm tới người nghe, chỗ nào chưa. Tới lúc bạn sẵn sàng, bạn đứng trên sân khấu đó với phần của riêng mình."),
    ("cd-workshop", "Cùng khách hàng", "Khi một người chủ ngồi đối diện Duy và kể chuyện đang kẹt",
     "Bạn ngồi cùng bàn trong những buổi coaching và tư vấn thật. Bạn nghe Duy hỏi câu thứ hai, câu thứ ba, và thấy người chủ tự nhìn ra điều họ đã né suốt nhiều tháng."),
    ("v5-giu-chuan", "Gặp đối tác", "Khi Duy đi gặp đối tác và doanh nghiệp",
     "Bạn đi cùng Duy tới những buổi gặp doanh nghiệp mời đào tạo, đối tác và người trong mạng lưới của Duy. Bạn học cách mở lời, cách giữ vị thế, và được giới thiệu như một người Duy tin."),
    ("v5-lam-mau", "Trước máy quay", "Khi máy quay bật lên",
     "Bạn xem Duy làm một video từ ý tưởng tới lúc đăng, rồi làm kênh của mình theo đúng cách đó. Thương hiệu cá nhân của bạn lớn lên cạnh thương hiệu của Duy, qua những lần hai người cùng xuất hiện."),
    ("bl-ban-lam-viec", "Ở hậu trường", "Khi công ty của Duy vận hành mỗi ngày",
     "Bạn được xem những thứ Duy chưa đưa ra ngoài: cách Duy dựng một chương trình, kịch bản tư vấn, bộ công cụ AI Duy dùng hằng ngày, và cách đội ngũ chạy việc khi Duy không có mặt."),
    ("mc/mc-trao-bang", "Ngày nhận chứng nhận", "Rồi tới một ngày, bạn đứng ở hàng đầu bức ảnh",
     "Lúc đó bạn không còn là người ngồi nghe. Bạn đã dẫn một nhóm của riêng mình, và có những người gọi bạn là người dẫn đường."),
]
HOAT_DONG = [
    ("mc/mc-thuyettrinh", "Học tập và chuyển nghề", ["Phương pháp Next Gen Founder: Founder Heart Brand OS, Hệ thống 7 bước xây thương hiệu Founder", "The Trusted Advisor, bán hàng tư vấn bằng niềm tin", "Từ người giỏi nghề thành người dẫn nghề"]),
    ("v5-soi-dung", "Tư duy và kỹ năng", ["Tư duy của người dẫn đường: nhìn đúng chỗ kẹt, chỉ đường, giữ chuẩn", "Hỏi, lắng nghe và dẫn một nhóm", "Đứng trước đám đông và nói cho người ta nhớ"]),
    ("bl-may-tinh", "Hệ thống, phương pháp, công cụ", ["Mẫu, kịch bản, bảng chấm điểm Duy đang dùng", "Bộ công cụ AI cho nội dung, tư vấn và vận hành", "Cách đóng gói chuyên môn thành sản phẩm có giá"]),
    ("mc/mc-sankhau", "Đồng hành trực tiếp", ["Dự, đồng dẫn, rồi tự dẫn buổi coaching có Duy ngồi cùng", "Làm việc với khách hàng thật", "Đi gặp đối tác, đứng trên sân khấu cùng Duy"]),
    ("bl-noi-2", "Thương hiệu cá nhân", ["Câu chuyện gốc và lời hứa của bạn", "Một kênh chạy đều theo cách Duy đang làm", "Những lần cùng xuất hiện với Duy"]),
    ("mc/mc-daotao", "Cộng đồng", ["Sinh hoạt cùng Cộng đồng Pro và Diamond Founder Club", "Một nhóm của riêng bạn trong cộng đồng", "Những người cùng khóa đi tiếp với nhau sau chương trình"]),
]

CSS = """<style>
.ndd{--ke:clamp(18px,3vw,28px)}
.ndd section:not(.kh) img{height:auto}
/* Trang chung canh đều hai bên (.bd p). Trong thẻ và cột hẹp thì canh trái, đầu mục giữ canh giữa của .phan-dau. */
.ndd-hero p,.ndd-dt p,.ndd-dt li,.ndd-bon span,.ndd .mono{color:var(--vang)}
.ndd-hero{position:relative;overflow:hidden;isolation:isolate}
.ndd-hero > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%;z-index:-2;filter:saturate(.6) brightness(.5) blur(3px);transform:scale(1.05)}
.ndd-hero:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(23,18,15,.96) 0%,rgba(23,18,15,.75) 55%,rgba(23,18,15,.35) 100%),linear-gradient(180deg,transparent 60%,rgba(23,18,15,.98) 100%)}
.ndd-hero .bd{padding-top:clamp(40px,6vw,72px);padding-bottom:clamp(36px,6vw,64px)}
.ndd-nhan{display:inline-block;font-family:var(--f-mono);font-size:12px;line-height:1.5;letter-spacing:.12em;text-transform:uppercase;color:var(--vang) !important;border:1px solid rgba(242,177,74,.45);background:var(--vang-mo);border-radius:999px;padding:7px 16px;margin-bottom:22px}
.ndd-nhan i{width:7px;height:7px;border-radius:50%;background:var(--vang);display:inline-block;margin-right:10px;vertical-align:middle}
.ndd-hero .tren{display:grid;grid-template-columns:1.25fr .75fr;gap:clamp(24px,4vw,48px);align-items:center}
.ndd-hero .tren > img{width:100%;height:540px !important;max-height:62vh;object-fit:cover;object-position:50% 20%;border-radius:var(--r);box-shadow:var(--shadow);border:1px solid var(--line)}
.ndd-hero h1{font-size:clamp(30px,3.7vw,47px);line-height:1.08;letter-spacing:-.02em;margin:6px 0 16px}
.ndd-hero h1 span{display:block}
.ndd-phu{font-family:var(--f-tit);font-size:clamp(18px,2vw,23px);line-height:1.25;color:var(--vang-2);margin:-6px 0 16px}
.ndd-hero .dan{max-width:60ch;font-size:clamp(17px,2vw,20px);color:var(--ink-2)}
.ndd-so{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
.ndd-so div{border-top:2px solid var(--vang);padding-top:12px}
.ndd-so b{display:block;font-family:var(--f-tit);font-size:clamp(26px,3.4vw,40px);line-height:1.05;color:var(--ink)}
.ndd-so i{font-style:normal;font-family:var(--f-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--vang)}
.ndd-so span{display:block;margin-top:6px;font-size:14.5px;color:var(--ink-3);line-height:1.45}
.ndd-luu{margin-top:14px;font-size:14.5px;color:var(--ink-3)}
.ndd-cuoi .ndd-luu{text-align:center;max-width:640px;margin:18px auto 0}
.ndd-trich{margin-top:18px;padding-left:16px;border-left:3px solid var(--vang);font-family:var(--f-tit);font-size:clamp(20px,2.2vw,24px);line-height:1.35;color:var(--ink) !important}
.ndd-dt{display:grid;grid-template-columns:1.1fr 1fr;gap:var(--ke);align-items:center}
.ndd-dt > img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r);box-shadow:var(--shadow)}
.ndd-dt h2{font-size:clamp(30px,4.2vw,50px);line-height:1.08;margin:8px 0 14px}
.ndd-dt p{color:var(--ink-2);font-size:17px}
.ndd-bon{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ndd-bon em{display:block;margin-top:12px;padding-top:10px;border-top:1px solid var(--line);font-style:normal;font-size:14px;line-height:1.45;color:var(--vang)}
.ndd-bon figure{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.ndd-bon img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block}
.ndd-bon figcaption{padding:16px 18px 20px}
.ndd-bon b{display:block;font-family:var(--f-tit);font-size:21px;line-height:1.2;margin-bottom:6px}
.ndd-bon span{font-size:15px;color:var(--ink-2);line-height:1.5}
.ndd-ai3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ndd-ai3 > div{border-top:2px solid var(--vang);padding-top:16px}
.ndd-ai3 b{display:block;font-family:var(--f-tit);font-size:clamp(22px,2.4vw,28px);line-height:1.2;margin:6px 0 8px}
.ndd-ai3 span{display:block;font-size:16px;color:var(--ink-2);line-height:1.6}
.ndd-ai{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ndd-ai figure{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column}
.ndd-ai img{width:100%;aspect-ratio:4/4;object-fit:cover;object-position:50% 18%;display:block}
.ndd-ai figcaption{padding:18px 20px 22px;display:flex;flex-direction:column;gap:8px}
.ndd-ai b{font-family:var(--f-tit);font-size:22px;line-height:1.2}
.ndd-ai q{font-family:var(--f-tit);font-size:18px;line-height:1.35;color:var(--vang-2);quotes:"“" "”"}
.ndd-ai span{font-size:15px;color:var(--ink-2);line-height:1.55}
.ndd-kks{display:grid;gap:clamp(36px,6vw,72px)}
.ndd-kk{display:grid;grid-template-columns:1.25fr 1fr;gap:clamp(22px,4vw,48px);align-items:center}
.ndd-kk.dao > img{order:2}
.ndd-kk > img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:var(--r);box-shadow:var(--shadow)}
.ndd-kk h3{font-size:clamp(26px,3.2vw,38px);line-height:1.12;margin:8px 0 12px}
.ndd-kk p{font-size:17px;color:var(--ink-2);line-height:1.65}
.ndd-hd{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ndd-hd figure{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.ndd-hd img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
.ndd-hd figcaption{padding:16px 20px 22px}
.ndd-hd b{display:block;font-family:var(--f-tit);font-size:21px;margin-bottom:4px}
.ndd-hai{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.ndd-o{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:22px}
.ndd-o h3{font-size:21px;margin:6px 0 8px}
.ndd-o p,.ndd-o li{color:var(--ink-2);font-size:15.5px}
.ndd-nho{font-family:var(--f-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--vang) !important}
.ndd-ds{list-style:none;padding:0;margin:12px 0 0;display:grid;gap:10px}
.ndd-ds li{position:relative;padding-left:24px;color:var(--ink-2)}
.ndd-ds li:before{content:"";position:absolute;left:3px;top:.6em;width:9px;height:9px;border-radius:50%;background:var(--vang)}
.ndd-khong li:before{background:var(--ink-4)}
.ndd-vao{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;counter-reset:b;padding:0;margin:0}
.ndd-vao li{list-style:none;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:18px;counter-increment:b}
.ndd-vao li:before{content:"Bước " counter(b);font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--vang)}
.ndd-vao b{display:block;font-family:var(--f-tit);font-size:19px;margin:8px 0 6px}
.ndd-vao span{font-size:14.5px;color:var(--ink-2)}
.ndd-nut-dau{margin-top:22px}
.ndd-nut{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
@media (max-width:1000px){
  .ndd-bon{grid-template-columns:repeat(2,1fr)}
  .ndd-ai{grid-template-columns:1fr 1fr}
  .ndd-hd{grid-template-columns:1fr 1fr}
  .ndd-vao{grid-template-columns:repeat(2,1fr)}
  }
@media (max-width:700px){
  /* Coach Duy chốt 12/10/2026: trên điện thoại, tiêu đề căn giữa, chữ nội dung căn đều hai bên. */
  .ndd h1,.ndd h2,.ndd h3,.ndd .mono,.ndd .ndd-nho,.ndd .ndd-phu,.ndd .khi,.ndd-ai3 b,.ndd-bon b,.ndd-hd b,.ndd-ai b,.ndd-ai q,.ndd-vao b,.ndd-so i,.ndd-so b,.ndd-so span,  .ndd-hero .tren > div{text-align:center}
  .ndd-so div,.ndd-nhan{text-align:center !important}
      .ndd-vao li:before{display:block;text-align:center}
  .ndd p:not(.mono):not(.ndd-nho):not(.ndd-phu):not(.khi):not(.ndd-nhan),.ndd li,.ndd-bon span,.ndd-bon em,.ndd-ai span,.ndd-ai3 span,.ndd-vao span{text-align:justify !important;text-justify:inter-word}
  .ndd-trich{border-left:0 !important;padding-left:0 !important;border-top:2px solid var(--vang);padding-top:12px}
  .ndd-hero .tren,.ndd-bon{grid-template-columns:1fr}
  .ndd-hero h1 span{display:inline}
  .ndd-nhan{font-size:10.5px;letter-spacing:.06em;border-radius:14px}
  .ndd-hero .tren > img{max-height:320px;order:-1}
  .ndd-so,.ndd-dt,.ndd-kk{grid-template-columns:1fr}
  .ndd-dt > img,.ndd-kk > img,.ndd-kk.dao > img{order:-1}
}
</style>"""

def anh(ten, alt=""):
    return '<img src="%simg/%s.webp" alt="%s" loading="lazy">' % (P, ten, alt)

def ds(xs, lop="ndd-ds"):
    return '<ul class="%s">%s</ul>' % (lop, "".join("<li>%s</li>" % x for x in xs))

def dong_kk(k, i):
    a, nhan, tieu, chu = k
    return ('<article class="ndd-kk%s hien">%s<div><p class="mono">%s</p><h3>%s</h3><p>%s</p></div></article>'
            % (" dao" if i % 2 else "", anh(a, tieu), nhan, tieu, chu))

def the_hd(h):
    a, tieu, ds_ = h
    return '<figure class="hien">%s<figcaption><b>%s</b>%s</figcaption></figure>' % (anh(a, tieu), tieu, ds(ds_))

THAN = CSS + """<div class="ndd">
<section class="ndd-hero">
  <img src="%simg/dh-phong-lon.webp" alt="" aria-hidden="true">
  <div class="bd">
    <div class="tren"><div>
    <p class="ndd-nhan"><i aria-hidden="true"></i>Theo thư mời · Khóa đầu sáu tới mười người</p>
    <h1><span>Những gì bạn đã trả giá để biết,</span> <span>đừng để nó dừng lại ở bạn.</span></h1>
    <p class="ndd-phu">Người Dẫn Đường · Chương trình đào tạo huấn luyện viên kinh doanh (business coach)</p>
    <p class="dan">Mười hai tháng Duy kèm bạn trở thành một huấn luyện viên kinh doanh: người ngồi cùng chủ doanh nghiệp, giúp họ nhìn ra chỗ đang kẹt và tự đi tiếp. Bạn học bằng cách ngồi cạnh Duy trong những buổi coaching thật, với khách hàng thật.</p>
    <p class="ndd-nut-dau"><a class="nut nut-v" href="dang-ky/">Gửi đơn trở thành Người Dẫn Đường <span class="mt" aria-hidden="true">&rarr;</span></a></p>
    </div><img src="%simg/cd-san-khau.webp" alt="Coach Duy Nguyễn trên sân khấu" fetchpriority="high"></div>
    <div class="ndd-so">%s</div>
    <p class="ndd-luu">Ba con số trên là những gì Duy đã làm được. Chương trình không hứa bạn sẽ có mức thu nhập nào.</p>
  </div>
</section>
""" % (P, P, "".join('<div><i>%s</i><b>%s</b><span>%s</span></div>' % (d, s, m) for s, d, m in SO)) + KHACH_SEC + """
<section class="phan bd" id="ban-la-ai">
  <div class="phan-dau hien">
    <p class="mono">Sau chương trình, bạn là ai</p>
    <h2>Một huấn luyện viên kinh doanh, làm nghề theo cách của Duy</h2>
  </div>
  <div class="ndd-ai3">""" + "".join('<div class="hien"><p class="ndd-nho">%s</p><b>%s</b><span>%s</span></div>' % x for x in BAN_LA_AI) + """</div>
</section>

<section class="phan bd">
  <div class="ndd-dt">
    <div class="hien">
      <p class="mono">Vì sao có chương trình này</p>
      <h2>Duy chỉ nhận ít người, để kèm cho tới nơi tới chốn</h2>
      <p>Mỗi khóa Duy nhận sáu tới mười người. Duy dành cho mỗi người thời gian của mình, giới thiệu bạn với những người Duy quen, và cho bạn dùng đúng cách làm Duy đang dùng với khách trả tới một tỷ đồng một năm.</p>
      <p>Đổi lại, Duy mong bạn làm ra kết quả thật cho những người bạn dẫn dắt, để Cộng đồng Next Gen Founder có thêm những người dẫn đường đáng tin.</p>
      <p class="ndd-trich">Duy không tìm thêm học viên. Duy tìm người sẽ dẫn người khác tới kết quả thật.</p>
    </div>
    """ + anh("mc/mc-chungnhan", "Một lớp học viên nhận chứng nhận cùng Coach Duy") + """
  </div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Bạn nhận được gì</p>
    <h2>Sau mười hai tháng, bạn cầm về sáu thứ</h2>
    <p>Mỗi thứ dưới đây là thứ bạn mang về được, không phải cảm giác đã học xong.</p>
  </div>
  <div class="ndd-bon">""" + "".join('<figure class="hien">%s<figcaption><b>%s</b><span>%s</span><em>Bạn cầm về: %s</em></figcaption></figure>' % (anh(a, t), t, c, d) for a, t, c, d in BON) + """</div>
</section>

<section class="phan tran">
  <div class="tran-nen" aria-hidden="true"><img src="../img/dh-phong-lon.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien"><p class="mono">Thương hiệu bạn sẽ học cách xây</p><h2>Duy đã tự xây đúng thứ bạn sẽ học</h2>
    <p>Tháng 5 năm 2021, trang Facebook của Duy chưa có một người theo dõi, kênh YouTube chưa có một người đăng ký. Đây là con số hôm nay.</p></div>
    <div class="hero-so hien" style="border-top:0;margin-top:0;padding-top:0">""" + SO_LIEU_HTML + """</div>
    <p class="hero-ghi" style="margin-top:20px">Tính tới tháng 8 năm 2026, đọc từ trang công khai của từng kênh.</p>
  </div>
</section>

<section class="phan bd" id="co-mat">
  <div class="phan-dau hien">
    <p class="mono">Đi cùng Duy, không học từ xa</p>
    <h2>Bạn sẽ có mặt ở những nơi Duy đang làm việc</h2>
    <p>Mười hai tháng, bạn không ngồi nghe Duy kể lại. Bạn ở ngay đó, nhìn Duy làm, làm cùng Duy, rồi tự làm khi Duy ngồi phía sau.</p>
  </div>
  <div class="ndd-kks">""" + "".join(dong_kk(k, i) for i, k in enumerate(KHOANH_KHAC)) + """</div>
</section>

<section class="phan bd phan-sang" id="hoat-dong">
  <div class="phan-dau hien">
    <p class="mono">Trong mười hai tháng</p>
    <h2>Những gì bạn được làm cùng Duy</h2>
    <p>Lịch cụ thể Duy sắp xếp cùng khóa đầu. Đây là những việc bạn sẽ làm.</p>
  </div>
  <div class="ndd-hd">""" + "".join(the_hd(h) for h in HOAT_DONG) + """</div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Dành cho ai</p>
    <h2>Bạn có nhận ra mình trong một trong ba người này?</h2>
    <p>Điểm chung của cả ba: đã tự làm ra kết quả thật, và bắt đầu thấy việc dẫn người khác đi quan trọng không kém việc tự mình đi tiếp.</p>
  </div>
  <div class="ndd-ai">""" + "".join(
    '<figure class="hien">%s<figcaption><p class="ndd-nho">%s</p><b>%s</b><q>%s</q><span>%s</span></figcaption></figure>'
    % (anh(a, t), n, t, c, m) for a, n, t, c, m in AI) + """</div>
  <div class="ndd-hai" style="margin-top:22px">
    <div class="ndd-o hien"><h3>Bạn cần có</h3>""" + ds([
        "Kết quả thật trong kinh doanh hoặc chuyên môn, nói ra được và người khác kiểm chứng được",
        "Tin giá trị đi trước, tiền bạc đến sau",
        "Ít nhất tám giờ mỗi tuần trong mười hai tháng",
        "Sẵn sàng để Duy nhận xét thẳng sau mỗi buổi mình dẫn",
        "Cam kết dẫn lại người đi sau, như Duy đã dẫn bạn",
    ]) + """</div>
    <div class="ndd-o hien"><h3>Chương trình chưa hợp với bạn nếu</h3>""" + ds([
        "Bạn đang tìm một tấm chứng nhận để treo lên tường",
        "Bạn muốn có ngay kịch bản để mở một khóa học",
        "Bạn chưa có chuyện thật nào của chính mình để kể cho người học",
    ], "ndd-ds ndd-khong") + """</div>
  </div>
</section>

<section class="phan bd">
  <div class="ndd-dt">
    <div class="hien">
      <p class="mono">Chứng nhận</p>
      <h2>Đo bằng kết quả của người bạn coaching</h2>""" + ds([
        "Bạn đã tự dẫn đủ số buổi có Duy dự và nhận xét, ghi trong sổ giờ coaching của bạn",
        "Bạn đã trình bày phương pháp của mình trước Duy và được duyệt",
        "Có thành viên do bạn coaching đạt kết quả, và kết quả đó được ghi lại",
        "Duy là người duyệt cuối",
        "Chứng nhận có hạn một năm, gia hạn khi bạn vẫn dẫn nhóm và vẫn giữ chuẩn",
    ]) + """
    </div>
    """ + anh("dh-giua-doan", "Coach Duy Nguyễn giữa học viên trong một buổi đào tạo") + """
  </div>
  <div class="ndd-hai" style="margin-top:28px">
    <div class="ndd-o hien"><p class="ndd-nho">Con đường 1</p><h3>Mentor trong Cộng đồng Next Gen Founder</h3><p>Bạn dẫn nhóm thành viên, cùng dẫn các buổi coaching của cộng đồng, nhận khách kèm riêng do cộng đồng giới thiệu và được chia doanh thu từ nhóm mình dẫn. Tỷ lệ chia Duy nói rõ ở buổi gặp riêng.</p></div>
    <div class="ndd-o hien"><p class="ndd-nho">Con đường 2</p><h3>Coach độc lập mang chứng nhận</h3><p>Bạn làm dịch vụ của riêng mình và ghi chứng nhận Người Dẫn Đường khi chứng nhận còn hạn. Tên dịch vụ là tên của bạn, không mang tên Next Gen Founder hay tên chương trình.</p></div>
  </div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Cách vào</p>
    <h2>Chỉ nhận theo thư mời, khóa đầu sáu tới mười người</h2>
    <p>Duy mời trước thành viên Cộng đồng Pro và Diamond Founder Club, vì đã thấy cách các bạn làm việc. Người ngoài cộng đồng vào qua lời giới thiệu của một thành viên.</p>
  </div>
  <ol class="ndd-vao hien">
    <li><b>Thư mời hoặc đơn của bạn</b><span>Duy gửi thư mời tới người Duy thấy phù hợp, hoặc bạn tự gửi đơn.</span></li>
    <li><b>Đơn của bạn</b><span>Bạn kể kết quả mình đã làm ra, và người bạn muốn dẫn dắt.</span></li>
    <li><b>Gặp riêng Duy</b><span>Một buổi nói thẳng về mong muốn của bạn và yêu cầu của chương trình.</span></li>
    <li><b>Dẫn thử một buổi</b><span>Có Duy ngồi dự. Nói chuyện giỏi chưa chắc đã dẫn nhóm giỏi, nên bước này không bỏ.</span></li>
  </ol>
</section>

<section class="phan tran ndd-cuoi">
  <div class="tran-nen" aria-hidden="true"><img src="../img/v5-di-cung.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Khóa đầu, sáu tới mười người</p>
      <h2>Bạn muốn là một trong sáu tới mười người đầu tiên?</h2>
      <p>Gửi đơn kể về kết quả bạn đã làm ra và người bạn muốn dẫn dắt. Duy đọc từng đơn và trả lời trong 7 ngày.</p>
    </div>
    <div class="ndd-nut hien">
      <a class="nut nut-v" href="dang-ky/">Gửi đơn trở thành Người Dẫn Đường <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
    <p class="ndd-luu hien">Gửi đơn không mất phí. Duy đọc và trả lời trong 7 ngày. Nếu hợp, hai bên gặp riêng, rồi bạn dẫn thử một buổi có Duy dự. Chi phí tham gia, nếu có, Duy nói rõ ở buổi gặp riêng, trước khi bạn quyết định.</p>
  </div>
</section>
</div>
"""

TEP = "nguoi-dan-duong/index.html"
trang(TEP, "Người Dẫn Đường · Chương trình đào tạo huấn luyện viên kinh doanh",
      "Mười hai tháng Coach Duy Nguyễn kèm bạn trở thành huấn luyện viên kinh doanh (business coach): ngồi cạnh Duy trong những buổi coaching thật, rồi làm mentor trong Cộng đồng Next Gen Founder hoặc mở dịch vụ coaching của riêng bạn.",
      THAN, "", cuoi=False)

# Coach Duy chốt 12/10/2026: đưa vào menu Chương trình, mở cho Google (bỏ noindex), có trong sitemap.
print("  " + TEP)
