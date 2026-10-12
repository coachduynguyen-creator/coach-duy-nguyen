# -*- coding: utf-8 -*-
"""Trang chương trình Người Dẫn Đường (D75 trong NGF-00B, phiếu chốt 38, 39, 40).

Dựng nguoi-dan-duong/index.html. Chạy sau dung.py:
  python3 nguoi_dan_duong.py

Nội dung 12 tháng (THANG) là bản đề xuất bước 2, chờ Coach Duy chốt ở phiếu 40.
Bản chuẩn sau khi chốt nằm ở xưởng Next Gen Founder; sửa ở đó rồi chép sang đây.

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
# Coach Duy xác nhận 12/10/2026, đồng ý công bố: dịch vụ thật, có hóa đơn, đóng thuế.
SO = [
    ("1 tỷ đồng", "một năm", "Mức cao nhất khách trả cho gói coaching kèm riêng với Duy"),
    ("120 triệu đồng", "một giờ", "Mức một ngân hàng thương mại lớn trả để mời Duy đào tạo"),
    ("50 tới 80 triệu đồng", "một buổi", "Mức các thương hiệu bảo hiểm, bất động sản trả cho một buổi đào tạo của Duy"),
]
# Không đặt logo ACB cạnh mức phí ngân hàng (Coach Duy chốt 12/10/2026, phiếu 40 mục C1).
_LOGO_CU = [("mobifone", "MobiFone"), ("aia", "AIA"), ("prudential", "Prudential"),
        ("bao-viet", "Bảo Việt Nhân thọ"), ("kb-securities", "KB Securities"), ("hsc", "HSC")]

# ------------------------------------------------------------ BỐN THỨ MANG VỀ
BON = [
    ("mc/mc-banlam", "Nghề dẫn đường", "Bạn ngồi cùng một bàn với ba người chủ, hỏi đúng câu, và nhìn họ tự đi tới quyết định của mình."),
    ("bl-phong-thu", "Thương hiệu cá nhân", "Kinh nghiệm của bạn thành câu chuyện, thành kênh, thành lý do để người lạ tin bạn trước khi gặp."),
    ("bl-viet-tay", "Mô hình kinh doanh từ chuyên môn", "Thứ bạn biết được đóng gói thành sản phẩm có tên, có giá, có người mua, không còn là bán giờ công."),
    ("mc/mc-hoitruong", "Cộng đồng của riêng bạn", "Một nhóm người đi theo bạn vì cách bạn dẫn họ, giống cách Duy đang xây Cộng đồng Next Gen Founder."),
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

# ------------------------------------------------------------ NGƯỜI DUY ĐÃ ĐẦU TƯ
# Theo hồ sơ case trong vault (Trusted Founder Brand): luôn ghi là kèm riêng, không
# nêu lĩnh vực hiện tại, không nêu phần trăm tăng trưởng, không nói doanh thu.
CA = [
    ("img/chuyen-gia/phong-thuy.webp", "Coach Lê Phương", "Năm 2022, kèm riêng",
     "Anh đang làm nghề phòng cháy chữa cháy, muốn đổi hướng sự nghiệp. Duy kèm anh xây kênh, đóng gói kiến thức thành chương trình, rồi thiết kế lại sản phẩm.",
     [("160.700", "người theo dõi TikTok"), ("5 triệu → 500 triệu", "giá trị sản phẩm sau khi thiết kế lại")]),
    ("img/kris-tran.webp", "Kris Trần", "Sáu tháng, kèm riêng",
     "Kris làm đầu tư tài chính ở Mỹ, hướng nội, ngại máy quay, muốn về Việt Nam lập nghiệp. Duy chỉ ra điểm Kris tưởng là yếu chính là chỗ khác biệt, rồi cùng Kris dựng một khung phương pháp mang tên riêng.",
     [("59.000", "người theo dõi Facebook"), ("153", "bài đăng trong sáu tháng")]),
]

# ------------------------------------------------------------ 12 THÁNG (đề xuất bước 2)
THANG = [
    # (tháng, nấc, tên, việc trong tháng, bạn mang ra)
    (1, 1, "Ngồi cạnh Duy", "Dự bốn buổi coaching Duy dẫn. Học năm vai của người dẫn đường: nhìn đúng chỗ kẹt, chỉ đường, làm mẫu, giữ chuẩn, đi cùng.", "Sổ ghi bốn buổi: Duy hỏi gì, dừng ở đâu, vì sao"),
    (2, 1, "Hỏi thay vì nói", "Tập nghe hết câu, hỏi câu thứ hai, nhận ra lúc mình đang muốn trả lời thay người chủ.", "Bản chẩn đoán điểm nghẽn của một người chủ thật"),
    (3, 2, "Câu chuyện của chính bạn", "Đồng dẫn với Duy. Tìm trong trải nghiệm của bạn những chuyện người khác cần nghe, theo Founder Heart Brand OS.", "Câu chuyện gốc và lời hứa của bạn"),
    (4, 2, "Thương hiệu lên kênh", "Đồng dẫn. Đi Hệ thống 7 bước xây thương hiệu Founder, chọn một kênh và đăng đều bốn tuần.", "Một kênh chạy đều, có người đầu tiên nhắn tới"),
    (5, 3, "Đóng gói chuyên môn", "Tự dẫn có Duy dự. Biến thứ bạn biết thành một sản phẩm đặt được tên và định được giá.", "Sản phẩm đầu tiên và bảng giá"),
    (6, 3, "Bán bằng niềm tin", "Tự dẫn có Duy dự. Học The Trusted Advisor, ngồi buổi tư vấn đầu tiên với khách thật. Duy đánh giá giữa chương trình.", "Khách đầu tiên, và quyết định lên chặng hai"),
    (7, 3, "Dẫn trọn một buổi", "Dẫn trọn buổi group coaching của Cộng đồng Pro, Duy ngồi cuối bàn và nhận xét sau buổi.", "Ba lần dẫn trọn buổi có nhận xét"),
    (8, 3, "Thiết kế cộng đồng", "Thiết kế nhóm đầu tiên của bạn: ai vào, gặp nhau thế nào, giữ cảm xúc chung ra sao.", "Bản thiết kế nhóm và mười người đầu tiên"),
    (9, 4, "Nhóm đầu tiên của bạn", "Tự dẫn một nhóm thật trong cộng đồng, không có Duy ngồi bên cạnh.", "Nhóm gặp đều bốn tuần, có ghi chép từng buổi"),
    (10, 4, "Nhóm chạy khi bạn vắng", "Đặt người điều phối, lịch gặp và chuẩn của nhóm, dùng AI để ghi chép và nhắc việc.", "Một buổi nhóm tự chạy khi bạn vắng"),
    (11, 4, "Kết quả của người khác", "Ghi lại kết quả của những người bạn coaching: trước khi gặp bạn thế nào, bây giờ thế nào.", "Hồ sơ kết quả của thành viên"),
    (12, 4, "Nhận chứng nhận, chọn đường", "Duy duyệt chứng nhận. Bạn chọn làm mentor trong cộng đồng hay coach độc lập, và chia sẻ hành trình trước cộng đồng.", "Chứng nhận Người Dẫn Đường"),
]
TEN_NAC = {1: "Ngồi dự", 2: "Đồng dẫn", 3: "Tự dẫn, có Duy dự", 4: "Tự dẫn nhóm thật"}

CSS = """<style>
.ndd{--ke:clamp(18px,3vw,28px)}
.ndd section:not(.kh) img{height:auto}
/* Trang chung canh đều hai bên (.bd p). Trong thẻ và cột hẹp thì canh trái, đầu mục giữ canh giữa của .phan-dau. */
.ndd-hero p,.ndd-dt p,.ndd-dt li,.ndd-bon span,.ndd-ca p,.ndd-ca dd,.ndd-t p,.ndd-canh li,.ndd-o p,.ndd-o li,.ndd-vao span,.ndd-ai span,.ndd-ai q,.ndd-ai b,.ndd-ai p,.ndd-moi p,.ndd-chang,.ndd li{text-align:left !important;text-justify:auto;hyphens:none}
.ndd .mono{color:var(--vang)}
.ndd-moi h2{font-size:clamp(26px,3vw,36px);line-height:1.15;margin:8px 0 10px}
.ndd-hero{position:relative;min-height:min(92vh,820px);display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;isolation:isolate}
.ndd-hero > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%;z-index:-2;filter:saturate(.6) brightness(.5) blur(3px);transform:scale(1.05)}
.ndd-hero:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(23,18,15,.96) 0%,rgba(23,18,15,.75) 55%,rgba(23,18,15,.35) 100%),linear-gradient(180deg,transparent 60%,rgba(23,18,15,.98) 100%)}
.ndd-hero .bd{padding-top:110px;padding-bottom:clamp(36px,6vw,64px)}
.ndd-hero .tren{display:grid;grid-template-columns:1.25fr .75fr;gap:24px;align-items:end}
.ndd-hero .tren > img{width:100%;height:540px !important;max-height:62vh;object-fit:cover;object-position:50% 20%;border-radius:var(--r);box-shadow:var(--shadow);border:1px solid var(--line)}
.ndd-hero h1{font-size:clamp(44px,8vw,96px);line-height:.98;letter-spacing:-.03em;margin:10px 0 16px}
.ndd-phu{font-family:var(--f-tit);font-size:clamp(21px,2.6vw,30px);line-height:1.25;color:var(--vang-2);margin:-6px 0 16px}
.ndd-hero .dan{max-width:60ch;font-size:clamp(17px,2vw,20px);color:var(--ink-2)}
.ndd-so{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
.ndd-so div{border-top:2px solid var(--vang);padding-top:12px}
.ndd-so b{display:block;font-family:var(--f-tit);font-size:clamp(26px,3.4vw,40px);line-height:1.05;color:var(--ink)}
.ndd-so i{font-style:normal;font-family:var(--f-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--vang)}
.ndd-so span{display:block;margin-top:6px;font-size:14.5px;color:var(--ink-3);line-height:1.45}
.ndd-thue{margin-top:14px;font-size:13.5px;color:var(--ink-4)}
.ndd-logo{display:grid;grid-template-columns:repeat(7,1fr);gap:18px;align-items:center;margin-top:30px}
.ndd-logo img{width:100%;height:34px !important;object-fit:contain;opacity:.75}
.ndd-dt{display:grid;grid-template-columns:1.1fr 1fr;gap:var(--ke);align-items:center}
.ndd-dt > img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r);box-shadow:var(--shadow)}
.ndd-dt h2{font-size:clamp(30px,4.2vw,50px);line-height:1.08;margin:8px 0 14px}
.ndd-dt p{color:var(--ink-2);font-size:17px}
.ndd-trich{margin-top:18px;padding-left:16px;border-left:3px solid var(--vang);font-family:var(--f-tit);font-size:clamp(20px,2.2vw,24px);line-height:1.35;color:var(--ink) !important}
.ndd-bon{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.ndd-bon figure{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden}
.ndd-bon img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block}
.ndd-bon figcaption{padding:16px 18px 20px}
.ndd-bon b{display:block;font-family:var(--f-tit);font-size:21px;line-height:1.2;margin-bottom:6px}
.ndd-bon span{font-size:15px;color:var(--ink-2);line-height:1.5}
.ndd-ai{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ndd-ai figure{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column}
.ndd-ai img{width:100%;aspect-ratio:4/4;object-fit:cover;object-position:50% 18%;display:block}
.ndd-ai figcaption{padding:18px 20px 22px;display:flex;flex-direction:column;gap:8px}
.ndd-ai b{font-family:var(--f-tit);font-size:22px;line-height:1.2}
.ndd-ai q{font-family:var(--f-tit);font-size:18px;line-height:1.35;color:var(--vang-2);quotes:"“" "”"}
.ndd-ai span{font-size:15px;color:var(--ink-2);line-height:1.55}
.ndd-ca{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.ndd-ca article{display:grid;grid-template-columns:150px 1fr;gap:18px;background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:20px}
.ndd-ca .anh{width:150px;height:190px !important;border-radius:var(--r-s);object-fit:cover;object-position:50% 20%;background:var(--panel-2);display:grid;place-items:center;font-family:var(--f-tit);font-size:48px;font-weight:800;color:var(--vang)}
.ndd-ca h3{font-size:22px;margin:0}
.ndd-ca .khi{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--vang);margin:4px 0 10px}
.ndd-ca p{font-size:15px;color:var(--ink-2)}
.ndd-ca dl{display:flex;flex-wrap:wrap;gap:10px 22px;margin:12px 0 0}
.ndd-ca dt{font-family:var(--f-tit);font-size:24px;font-weight:700;color:var(--ink)}
.ndd-ca dd{margin:0;font-size:13px;color:var(--ink-3)}
.ndd-chang{font-family:var(--f-mono);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--vang);margin:30px 0 12px}
.ndd-chang b{display:block;font-family:var(--f-tit);font-size:clamp(24px,3vw,32px);letter-spacing:-.01em;text-transform:none;color:var(--ink);margin-top:4px}
.ndd-luoi12{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.ndd-t{background:var(--paper);border:1px solid var(--line);border-radius:var(--r);padding:18px 18px 20px}
.ndd-t .s{font-family:var(--f-tit);font-size:44px;font-weight:800;line-height:1;color:var(--vang)}
.ndd-t .dau{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}
.ndd-t .n{display:inline-block;font-family:var(--f-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);border:1px solid var(--line-2);border-radius:999px;padding:4px 9px}
.ndd-t h3{font-size:19px;margin:10px 0 6px}
.ndd-t p{font-size:14.5px;color:var(--ink-2)}
.ndd-t .ra{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line-2);font-size:13.5px;color:var(--ink-3)}
.ndd-t .ra b{color:var(--vang);font-weight:600}
.ndd-thanh{display:flex;gap:4px;margin:16px 0 4px}
.ndd-thanh span{flex:1;height:6px;border-radius:3px;background:var(--line-2)}
.ndd-thanh span.on{background:var(--vang)}
.ndd-canh{display:grid;grid-template-columns:1fr 1fr;gap:var(--ke);align-items:center}
.ndd-canh > img{width:100%;aspect-ratio:3/2;object-fit:cover;object-position:85% 40%;border-radius:var(--r);box-shadow:var(--shadow)}
.ndd-canh h2{font-size:clamp(30px,4.2vw,50px);line-height:1.08;margin:8px 0 6px}
.ndd-canh ol{margin:14px 0 0;padding-left:20px;display:grid;gap:10px;color:var(--ink-2);font-size:16px}
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
.ndd-nut{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.ndd-moi{display:grid;grid-template-columns:200px 1fr auto;gap:24px;align-items:center;background:var(--paper);border:1px solid rgba(242,177,74,.4);border-radius:var(--r);padding:24px 28px 0 24px;overflow:hidden}
.ndd-moi > img{width:200px;align-self:end;display:block}
.ndd-moi > div{padding-bottom:24px}
.ndd-moi > a{margin-bottom:24px}
.ndd-moi p{color:var(--ink-2)}
@media (max-width:1000px){
  .ndd-bon{grid-template-columns:repeat(2,1fr)}
  .ndd-ai{grid-template-columns:1fr 1fr}
  .ndd-luoi12{grid-template-columns:repeat(2,1fr)}
  .ndd-vao{grid-template-columns:repeat(2,1fr)}
  .ndd-ca{grid-template-columns:1fr}
  .ndd-logo{grid-template-columns:repeat(4,1fr)}
  .ndd-moi{grid-template-columns:160px 1fr}
  .ndd-moi > img{width:160px}
  .ndd-moi > a{grid-column:1/-1;justify-self:start}
}
@media (max-width:700px){
  .ndd-hero .tren{grid-template-columns:1fr}
  .ndd-hero .tren > img{max-height:320px;order:-1}
  .ndd-so,.ndd-dt,.ndd-canh,.ndd-hai,.ndd-luoi12,.ndd-vao,.ndd-bon,.ndd-ai{grid-template-columns:1fr}
  .ndd-dt > img,.ndd-canh > img{order:-1}
  .ndd-ca article{grid-template-columns:1fr}
  .ndd-ca .anh{width:100%;height:240px !important;object-position:50% 25%}
  .ndd-ca dt{font-size:21px}
  .ndd-moi{grid-template-columns:1fr;padding:22px 22px 0}
  .ndd-moi > img{width:150px;justify-self:center;order:3}
  .ndd-moi > a{margin-bottom:8px}
}
</style>"""

def anh(ten, alt=""):
    return '<img src="%simg/%s.webp" alt="%s" loading="lazy">' % (P, ten, alt)

def ds(xs, lop="ndd-ds"):
    return '<ul class="%s">%s</ul>' % (lop, "".join("<li>%s</li>" % x for x in xs))

def the_ca(c):
    a, ten, khi, chu, so = c
    hinh = ('<img class="anh" src="%s%s" alt="%s" loading="lazy">' % (P, a, ten)) if a else ('<div class="anh" aria-hidden="true">%s</div>' % ten.split()[-1][0])
    return ('<article class="hien">%s<div><h3>%s</h3><p class="khi">%s</p><p>%s</p><dl>%s</dl></div></article>'
            % (hinh, ten, khi, chu, "".join("<div><dt>%s</dt><dd>%s</dd></div>" % s for s in so)))

def the_thang(t):
    so, nac, ten, viec, ra = t
    thanh = "".join('<span class="on"></span>' if i <= nac else "<span></span>" for i in range(1, 5))
    return ('<div class="ndd-t hien"><div class="dau"><div class="s">%02d</div><span class="n">Nấc %d · %s</span></div>'
            '<div class="ndd-thanh" aria-hidden="true">%s</div><h3>%s</h3><p>%s</p>'
            '<p class="ra"><b>Bạn mang ra:</b> %s</p></div>' % (so, nac, TEN_NAC[nac], thanh, ten, viec, ra))

THAN = CSS + """<div class="ndd">
<section class="ndd-hero">
  <img src="%simg/dh-phong-lon.webp" alt="" aria-hidden="true">
  <div class="bd">
    <div class="tren"><div>
    <h1>Người Dẫn Đường</h1>
    <p class="ndd-phu">Chương trình đào tạo người dẫn đường cho nhà sáng lập</p>
    <p class="dan">Mười hai tháng ngồi cạnh Duy trong những buổi coaching thật, với người chủ thật. Tới tháng thứ mười hai, bạn tự dẫn một nhóm của riêng mình, có thương hiệu, có sản phẩm và có cộng đồng đi theo bạn.</p>
    </div><img src="%simg/cd-san-khau.webp" alt="Coach Duy Nguyễn trên sân khấu" fetchpriority="high"></div>
    <div class="ndd-so">%s</div>
    <p class="ndd-thue">Đây là những dịch vụ Duy đang cung cấp, có hóa đơn và đóng thuế đầy đủ.</p>
  </div>
</section>
""" % (P, P, "".join('<div><i>%s</i><b>%s</b><span>%s</span></div>' % (d, s, m) for s, d, m in SO)) + KHACH_SEC + """
<section class="phan bd">
  <div class="ndd-dt">
    <div class="hien">
      <p class="mono">Vì sao có chương trình này</p>
      <h2>Đây là những người Duy đầu tư nhiều nhất</h2>
      <p>Thời gian, mạng lưới quan hệ, cách làm mà khách đã trả tới một tỷ đồng một năm. Duy dồn những thứ đó vào một nhóm nhỏ, để đưa từng người trở lại làm bằng chứng cho Cộng đồng Next Gen Founder.</p>
      <p class="ndd-trich">Duy không cần thêm học viên. Duy cần những người đi cùng một con đường.</p>
    </div>
    """ + anh("mc/mc-chungnhan", "Một lớp học viên nhận chứng nhận cùng Coach Duy") + """
  </div>
</section>

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Sau mười hai tháng</p>
    <h2>Bạn mang về bốn thứ, không phải một tấm giấy</h2>
  </div>
  <div class="ndd-bon">""" + "".join('<figure class="hien">%s<figcaption><b>%s</b><span>%s</span></figcaption></figure>' % (anh(a, t), t, c) for a, t, c in BON) + """</div>
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

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Những người Duy đã đầu tư</p>
    <h2>Trước khi có tên chương trình, Duy đã làm việc này</h2>
  </div>
  <div class="ndd-ca">""" + "".join(the_ca(c) for c in CA) + """</div>
</section>

<section class="phan bd phan-sang" id="muoi-hai-thang">
  <div class="phan-dau hien">
    <p class="mono">Mười hai tháng, bốn nấc</p>
    <h2>Mỗi tháng một việc thật, mỗi việc một thứ bạn mang ra</h2>
    <p>Hai nấc giữa diễn ra ngay trong những buổi coaching của Cộng đồng Pro và Diamond Founder Club. Mỗi tháng có thêm một buổi chung cho cả khóa. Thanh vàng trên mỗi tháng cho biết bạn đang ở nấc nào.</p>
  </div>
  <p class="ndd-chang hien">Tháng 1 tới 6<b>Học nghề bên cạnh Duy</b></p>
  <div class="ndd-luoi12">""" + "".join(the_thang(t) for t in THANG[:6]) + """</div>
  <p class="ndd-chang hien">Tháng 7 tới 12<b>Tự dẫn, và dựng con đường của riêng bạn</b></p>
  <div class="ndd-luoi12">""" + "".join(the_thang(t) for t in THANG[6:]) + """</div>
</section>

<section class="phan bd">
  <div class="ndd-canh">
    """ + anh("cd-workshop", "Coach Duy ngồi cùng bàn với học viên trong một buổi làm việc nhóm") + """
    <div class="hien">
      <p class="mono">Một buổi ở nấc ba</p>
      <h2>Bạn dẫn, Duy ngồi cuối bàn</h2>
      <ol>
        <li>Chín mươi phút, ba người chủ, mỗi người mang một chuyện đang kẹt.</li>
        <li>Bạn hỏi, họ trả lời. Duy không chen vào, chỉ ghi.</li>
        <li>Có lúc bạn muốn trả lời thay họ. Duy đánh dấu đúng khoảnh khắc đó.</li>
        <li>Hết buổi, hai người ngồi lại mười lăm phút: chỗ nào bạn đã nói thay vì hỏi, chỗ nào người chủ tự nhìn ra.</li>
      </ol>
    </div>
  </div>
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
        "Bạn đã tự dẫn đủ số buổi có Duy dự và nhận xét",
        "Có thành viên do bạn coaching đạt kết quả, và kết quả đó được ghi lại",
        "Duy là người duyệt cuối",
        "Chứng nhận có hạn một năm, gia hạn khi bạn vẫn dẫn nhóm và vẫn giữ chuẩn",
    ]) + """
    </div>
    """ + anh("v5-giu-chuan", "Coach Duy Nguyễn") + """
  </div>
  <div class="ndd-hai" style="margin-top:28px">
    <div class="ndd-o hien"><p class="ndd-nho">Con đường 1</p><h3>Mentor trong Cộng đồng Next Gen Founder</h3><p>Bạn dẫn nhóm thành viên, cùng dẫn các buổi coaching của cộng đồng, nhận khách kèm riêng do cộng đồng giới thiệu và được chia doanh thu từ nhóm mình dẫn.</p></div>
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
    <li><b>Thư mời</b><span>Duy gửi tới những người Duy thấy phù hợp.</span></li>
    <li><b>Phiếu khảo sát</b><span>Bạn kể kết quả mình đã làm ra, và người bạn muốn dẫn dắt.</span></li>
    <li><b>Gặp riêng Duy</b><span>Một buổi nói thẳng về mong muốn của bạn và yêu cầu của chương trình.</span></li>
    <li><b>Dẫn thử một buổi</b><span>Có Duy ngồi dự. Nói chuyện giỏi chưa chắc đã dẫn nhóm giỏi, nên bước này không bỏ.</span></li>
  </ol>
</section>

<section class="phan tran ndd-cuoi">
  <div class="tran-nen" aria-hidden="true"><img src="../img/v5-di-cung.webp" alt="" loading="lazy"></div>
  <div class="bd">
    <div class="phan-dau hien">
      <p class="mono">Khóa đầu, sáu tới mười người</p>
      <h2>Bạn muốn là một trong những người Duy đầu tư nhiều nhất?</h2>
      <p>Nhắn cho Duy vài dòng: kết quả bạn đã làm ra, và người bạn muốn dẫn dắt. Nếu bạn chưa là thành viên, hãy vào Cộng đồng Next Gen Founder trước, đó là nơi Duy gặp và mời những người đầu tiên.</p>
    </div>
    <div class="ndd-nut hien">
      <a class="nut nut-v" href="../lien-he.html">Nhắn cho Duy <span class="mt" aria-hidden="true">&rarr;</span></a>
      <a class="nut nut-vien" href="../tham-gia/">Vào Cộng đồng Next Gen Founder</a>
    </div>
  </div>
</section>
</div>
"""

TEP = "nguoi-dan-duong/index.html"
trang(TEP, "Người Dẫn Đường · Chương trình đào tạo người dẫn đường cho nhà sáng lập",
      "Mười hai tháng ngồi cạnh Coach Duy Nguyễn trong những buổi coaching thật, để tự dẫn một nhóm của riêng bạn, có thương hiệu, sản phẩm và cộng đồng.",
      THAN, "")

# Coach Duy chốt 12/10/2026: đưa vào menu Chương trình, mở cho Google (bỏ noindex), có trong sitemap.
print("  " + TEP)
