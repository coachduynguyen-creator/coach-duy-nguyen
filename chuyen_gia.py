# -*- coding: utf-8 -*-
"""Bản mẫu Đội ngũ chuyên gia cố vấn, để Coach Duy gửi chuyên gia xem trước.

Dựng hai trang, cả hai đều noindex và không có trong sitemap:
  doi-ngu-chuyen-gia.html  trang riêng, bấm vào từng người mở hồ sơ chi tiết
  trang-chu-mau.html       bản sao trang chủ có thêm khối chuyên gia sau khối Cộng đồng

Chạy sau dung.py, vì trang-chu-mau.html chép từ index.html vừa dựng:
  python3 chuyen_gia.py

ponytail: tên và thông tin chuyên gia là ví dụ minh họa. Khi có người thật thì
thay danh sách CG, bỏ MAU (thanh báo bản mẫu), dời khối KHOI_TRANG_CHU vào INDEX
trong dung.py, chép chuyen-gia.css vào style.css và thêm trang vào URLS.
"""
import html, os, re
from lib import trang, dau_trang, GOC

CG = [
    {"ma": "tai-chinh-ca-nhan", "linh_vuc": "Tài chính cá nhân", "danh": "",
     "ten": "Lê Minh Châu", "chuc": "Chuyên gia hoạch định tài chính cá nhân và gia đình",
     "don_vi": "[Tên đơn vị đang công tác]", "nam": 12,
     "mot_cau": "Tách tiền gia đình khỏi tiền doanh nghiệp, để những tháng kinh doanh đi xuống không kéo cả nhà đi theo.",
     "loi_nhan": "Nhiều người chủ giữ sổ sách công ty rất kỹ nhưng chưa có nổi một bảng thu chi cho gia đình. Tôi thường bắt đầu từ chính bảng đó.",
     "giup": ["Tách bạch tài khoản cá nhân và tài khoản công ty",
              "Tự trả lương đều đặn cho chính mình khi doanh thu còn lên xuống",
              "Quỹ dự phòng cho gia đình và bảo hiểm cho người trụ cột",
              "Kế hoạch tài sản dài hạn: nhà, học phí cho con, lúc nghỉ hưu"],
     "hoi": ["Doanh thu chưa đều thì tôi nên tự trả lương cho mình bao nhiêu?",
             "Lúc công ty khó, có nên lấy tiền của gia đình ra bù không?",
             "Quỹ dự phòng bao nhiêu tháng chi tiêu là đủ?"],
     "kinh_nghiem": ["12 năm tư vấn tài chính cho gia đình chủ doanh nghiệp",
                     "[Chứng chỉ hành nghề hoặc chứng chỉ chuyên môn]",
                     "[Một kết quả tiêu biểu đã làm cho khách hàng]"]},
    {"ma": "tai-chinh-doanh-nghiep", "linh_vuc": "Tài chính doanh nghiệp", "danh": "",
     "ten": "Phạm Quốc Bảo", "chuc": "Giám đốc tài chính bán thời gian cho doanh nghiệp vừa và nhỏ",
     "don_vi": "[Tên đơn vị đang công tác]", "nam": 18,
     "mot_cau": "Đọc dòng tiền trước khi đọc lợi nhuận, để biết chắc tháng sau còn đủ tiền trả lương.",
     "loi_nhan": "Công ty có lãi trên giấy mà tài khoản vẫn cạn là chuyện tôi gặp hằng tuần. Con số không nói dối, chỉ là chưa ai sắp nó ra cho người chủ đọc.",
     "giup": ["Bảng dòng tiền 13 tuần để thấy trước tháng nào thiếu tiền",
              "Tính lãi lỗ thật của từng gói dịch vụ, từng nhóm khách",
              "Chuẩn bị số liệu trước khi vay ngân hàng hoặc mời người góp vốn",
              "Báo cáo quản trị một trang để người chủ đọc mỗi tuần"],
     "hoi": ["Lãi trên báo cáo mà tài khoản không có tiền, lỗi nằm ở đâu?",
             "Gói dịch vụ nào đang lỗ mà tôi chưa biết?",
             "Khi nào nên vay, khi nào nên mời thêm người góp vốn?"],
     "kinh_nghiem": ["18 năm làm tài chính, trong đó 8 năm ở vị trí giám đốc tài chính",
                     "[Chứng chỉ chuyên môn]",
                     "[Ngành hoặc quy mô doanh nghiệp đã đồng hành]"]},
    {"ma": "luat-doanh-nghiep", "linh_vuc": "Luật doanh nghiệp", "danh": "Luật sư",
     "ten": "Đỗ Hoàng Lâm", "chuc": "Luật sư điều hành, tư vấn pháp lý doanh nghiệp",
     "don_vi": "[Tên công ty luật] · Đoàn Luật sư [tỉnh, thành phố]", "nam": 15,
     "mot_cau": "Viết rõ chuyện góp vốn, chia quyền và hợp đồng ngay từ đầu, để về sau không phải gặp nhau ở tòa.",
     "loi_nhan": "Phần lớn tranh chấp tôi từng xử lý bắt đầu từ một thỏa thuận miệng giữa những người rất tin nhau. Viết ra giấy không làm mất lòng tin, nó giữ lòng tin.",
     "giup": ["Thỏa thuận góp vốn và chia cổ phần giữa những người cùng sáng lập",
              "Hợp đồng dịch vụ với khách hàng và đối tác",
              "Hợp đồng lao động, cam kết bảo mật thông tin khách hàng",
              "Xử lý tranh chấp bằng thương lượng trước khi phải khởi kiện"],
     "hoi": ["Hai người góp vốn ngang nhau thì ai quyết khi không thống nhất?",
             "Nhân viên nghỉ việc mang theo khách hàng, tôi làm được gì?",
             "Hợp đồng mẫu tải trên mạng có dùng được không?"],
     "kinh_nghiem": ["15 năm hành nghề luật sư doanh nghiệp",
                     "Thành viên Đoàn Luật sư [tỉnh, thành phố]",
                     "[Số vụ việc hoặc lĩnh vực tiêu biểu]"]},
    {"ma": "ke-toan-thue", "linh_vuc": "Kế toán và thuế", "danh": "",
     "ten": "Nguyễn Thanh Vân", "chuc": "Kế toán trưởng, phụ trách dịch vụ kế toán và đại lý thuế",
     "don_vi": "[Tên đơn vị đang công tác]", "nam": 20,
     "mot_cau": "Sổ sách đúng luật mà người chủ vẫn đọc hiểu được, để mùa quyết toán không còn là mùa lo.",
     "loi_nhan": "Thuế không đáng sợ bằng việc không biết mình đang sai ở đâu. Rà soát sớm một lần thì nhẹ hơn rất nhiều so với sửa sau một đợt kiểm tra.",
     "giup": ["Chọn giữa hộ kinh doanh và công ty theo đúng quy mô",
              "Rà soát rủi ro thuế trước kỳ quyết toán",
              "Sắp xếp hóa đơn, chứng từ cho gọn và đúng",
              "Biết khoản chi nào được tính vào chi phí khi nộp thuế"],
     "hoi": ["Doanh thu bao nhiêu thì nên chuyển từ hộ kinh doanh lên công ty?",
             "Tiền chạy quảng cáo Facebook có được tính vào chi phí không?",
             "Thuê dịch vụ kế toán hay tuyển một người làm trong công ty?"],
     "kinh_nghiem": ["20 năm làm kế toán, 10 năm ở vị trí kế toán trưởng",
                     "[Chứng chỉ hành nghề dịch vụ kế toán hoặc đại lý thuế]",
                     "[Số doanh nghiệp đang phụ trách sổ sách]"]},
    {"ma": "so-huu-tri-tue", "linh_vuc": "Sở hữu trí tuệ", "danh": "Luật sư",
     "ten": "Trịnh Gia Khang", "chuc": "Luật sư sở hữu trí tuệ, bảo hộ nhãn hiệu và bản quyền",
     "don_vi": "[Tên công ty luật] · Đoàn Luật sư [tỉnh, thành phố]", "nam": 10,
     "mot_cau": "Đăng ký bảo hộ tên, logo và tài liệu do bạn soạn trước khi người khác dùng mất.",
     "loi_nhan": "Người làm thương hiệu cá nhân hay nghĩ tên của mình thì không ai lấy được. Tôi đã gặp đủ trường hợp ngược lại để khuyên bạn nộp đơn sớm.",
     "giup": ["Đăng ký nhãn hiệu cho tên thương hiệu và logo",
              "Bảo vệ khóa học, giáo trình và phương pháp do mình xây",
              "Xử lý khi nội dung bị sao chép hoặc bị mạo danh",
              "Hợp đồng cấp phép, nhượng quyền sử dụng tài liệu"],
     "hoi": ["Tên thương hiệu cá nhân của tôi có đăng ký bảo hộ được không?",
             "Học viên chép giáo trình đi dạy lại thì tôi làm gì?",
             "Mất bao lâu thì có văn bằng bảo hộ?"],
     "kinh_nghiem": ["10 năm hành nghề luật sở hữu trí tuệ",
                     "[Chứng chỉ đại diện sở hữu công nghiệp]",
                     "[Ngành hoặc thương hiệu tiêu biểu đã bảo hộ]"]},
    {"ma": "nhan-su", "linh_vuc": "Nhân sự và lương thưởng", "danh": "",
     "ten": "Hoàng Mai Phương", "chuc": "Giám đốc nhân sự, tư vấn chính sách lương thưởng",
     "don_vi": "[Tên đơn vị đang công tác]", "nam": 16,
     "mot_cau": "Khung lương, thưởng và quyền quyết định rõ ràng, để người giỏi ở lại mà không phải chờ người chủ duyệt từng việc.",
     "loi_nhan": "Người giỏi hiếm khi nghỉ vì lương thấp. Họ nghỉ vì không thấy đường đi của mình trong công ty. Phần đó người chủ vẽ ra được.",
     "giup": ["Thang lương và chính sách thưởng theo kết quả",
              "Mô tả công việc và quyền quyết định của từng vị trí",
              "Bảo hiểm xã hội và chế độ cho người lao động đúng luật",
              "Tuyển người và cho nghỉ việc đúng quy trình"],
     "hoi": ["Thưởng theo doanh số hay theo lợi nhuận thì công bằng hơn?",
             "Bao giờ thì nên tuyển người quản lý thay mình?",
             "Cho một nhân viên nghỉ việc thế nào để đúng luật và giữ được tình?"],
     "kinh_nghiem": ["16 năm làm nhân sự, 7 năm ở vị trí giám đốc nhân sự",
                     "[Chứng chỉ chuyên môn]",
                     "[Quy mô doanh nghiệp đã xây hệ thống nhân sự]"]},
]

def chu_dau(t):
    w = t["ten"].split()
    return (w[-2][0] + w[-1][0]) if len(w) > 1 else w[0][0]

def ten_day_du(t):
    return (t["danh"] + " " if t["danh"] else "") + t["ten"]

def anh(t, lop="cg-anh"):
    # Có ảnh trong img/chuyen-gia/<ma>.webp thì dùng ảnh, chưa có thì dùng chữ viết tắt.
    tep = "img/chuyen-gia/%s.webp" % t["ma"]
    if os.path.exists(os.path.join(GOC, tep)):
        return '<div class="%s co-anh"><img src="%s" alt="Chân dung %s" loading="lazy" width="720" height="900"></div>' % (lop, tep, ten_day_du(t))
    return '<div class="%s" aria-hidden="true"><b>%s</b><i>Ảnh chân dung</i></div>' % (lop, chu_dau(t))

def the(t, p=""):
    return """<a class="cg-the" href="%sdoi-ngu-chuyen-gia.html#%s" data-mo="%s">
  %s
  <div class="cg-than">
    <span class="cg-lv">%s</span>
    <h3>%s</h3>
    <p class="cg-chuc">%s</p>
    <p class="cg-cau">%s</p>
    <span class="cg-xem">Xem hồ sơ <span class="mt" aria-hidden="true">&rarr;</span></span>
  </div>
</a>""" % (p, t["ma"], t["ma"], anh(t), t["linh_vuc"], ten_day_du(t), t["chuc"], t["mot_cau"])

def ds(xs):
    return "<ul>" + "".join("<li>%s</li>" % html.escape(x) for x in xs) + "</ul>"

def ho_so(t):
    return """<dialog class="cg-hs" id="%s" aria-labelledby="%s-ten">
  <button class="cg-dong" type="button" aria-label="Đóng hồ sơ">&times;</button>
  <div class="cg-hs-in">
    <aside class="cg-hs-trai">
      %s
      <span class="cg-lv">%s</span>
      <h2 id="%s-ten">%s</h2>
      <p class="cg-chuc">%s</p>
      <p class="cg-dv">%s</p>
      <div class="cg-so"><b>%d năm</b><span>hành nghề</span></div>
    </aside>
    <div class="cg-hs-phai">
      <blockquote>%s</blockquote>
      <h4>Đồng hành cùng bạn ở những việc</h4>%s
      <h4>Câu hỏi người chủ hay mang tới</h4>%s
      <h4>Kinh nghiệm hành nghề</h4>%s
      <h4>Cách đồng hành cùng cộng đồng</h4>
      <ul><li>Một buổi hỏi đáp trực tuyến mỗi tháng với thành viên Cộng đồng Next Gen Founder</li>
          <li>Bài viết và tài liệu chuyên đề về %s, đăng trên website</li>
          <li>Buổi trao đổi riêng khi thành viên cần đi sâu vào trường hợp của mình</li></ul>
      <p class="cg-gh">Buổi hỏi đáp trong cộng đồng giúp bạn nhìn rõ vấn đề và biết nên làm gì trước. Việc cần xem hồ sơ, chứng từ của riêng doanh nghiệp thì làm theo thỏa thuận riêng giữa bạn và chuyên gia.</p>
      <a class="nut nut-v" href="tham-gia/">Đăng ký tham gia Cộng đồng <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</dialog>""" % (t["ma"], t["ma"], anh(t, "cg-anh cg-anh-lon"), t["linh_vuc"], t["ma"], ten_day_du(t),
                t["chuc"], t["don_vi"], t["nam"], html.escape(t["loi_nhan"]),
                ds(t["giup"]), ds(t["hoi"]), ds(t["kinh_nghiem"]), t["linh_vuc"].lower())

CSS = '<link rel="stylesheet" href="assets/chuyen-gia.css">'

def mau(ve, chu):
    return """<div class="cg-mau"><div class="bd"><b>Bản thiết kế mẫu</b><span>Tên, ảnh và mọi thông tin chuyên gia trên trang là ví dụ minh họa, để anh chị hình dung cách Duy trình bày về đội ngũ. Phần trong ngoặc vuông là chỗ anh chị gửi thông tin thật.</span><a href="%s">%s <span aria-hidden="true">&rarr;</span></a></div></div>""" % (ve, chu)

# ------------------------------------------------------------ KHỐI TRÊN TRANG CHỦ
KHOI_TRANG_CHU = """
<section class="phan bd hoa-van duoi" id="doi-ngu-co-van">
  <div class="phan-dau hien">
    <p class="mono">Đội ngũ chuyên gia cố vấn</p>
    <h2>Có những câu hỏi cần đúng người trong nghề trả lời</h2>
    <p>Thuế, hợp đồng, dòng tiền, tài sản của gia đình. Người chủ hay để tới lúc có chuyện mới đi hỏi, và lúc đó thường đã muộn. <span class="nhan">Duy mời về Cộng đồng Next Gen Founder những chuyên gia đang hành nghề thật</span>, để bạn hỏi đúng người ngay từ lúc mới nghĩ tới.</p>
  </div>
  <div class="cg-luoi cg-luoi-gon tre hien">%s</div>
  <div class="blog-them"><a class="nut nut-vien" href="doi-ngu-chuyen-gia.html">Xem đội ngũ chuyên gia cố vấn <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>
""" % "".join(the(t) for t in CG)

# ------------------------------------------------------------ TRANG RIÊNG
THAN = mau("trang-chu-mau.html#doi-ngu-co-van", "Xem khối giới thiệu trên trang chủ") + CSS + dau_trang(
    "Đội ngũ chuyên gia cố vấn",
    "Người trong nghề ngồi cùng bạn trước khi việc lớn xảy ra",
    "Duy đi cùng bạn ở thương hiệu, tư vấn, hệ thống và cộng đồng. Còn thuế, pháp lý, dòng tiền và tài sản gia đình thì cần người đang hành nghề trả lời. Những chuyên gia dưới đây đồng hành cùng Cộng đồng Next Gen Founder, để bạn hỏi đúng người, đúng lúc.") + """

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Đội ngũ</p>
    <h2>Bấm vào từng người để xem hồ sơ</h2>
  </div>
  <div class="cg-luoi tre hien">%s</div>
</section>

<section class="phan bd">
  <div class="cg-moi hien">
    <div>
      <p class="mono">Dành cho chuyên gia</p>
      <h2>Bạn muốn đồng hành cùng cộng đồng?</h2>
      <p>Nếu bạn đang hành nghề ở một lĩnh vực người chủ doanh nghiệp cần, và muốn dành một phần thời gian cho những người đang xây doanh nghiệp từ chính uy tín của mình, Duy muốn được nói chuyện với bạn.</p>
    </div>
    <a class="nut nut-v" href="lien-he.html">Liên hệ với Duy <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</section>
%s
<script>
(function(){
  function mo(ma){var d=document.getElementById(ma);if(d&&d.showModal&&!d.open){d.showModal();d.querySelector('.cg-hs-in').scrollTop=0;}}
  document.querySelectorAll('[data-mo]').forEach(function(a){
    a.addEventListener('click',function(e){e.preventDefault();history.replaceState(null,'','#'+a.dataset.mo);mo(a.dataset.mo);});
  });
  document.querySelectorAll('dialog.cg-hs').forEach(function(d){
    d.querySelector('.cg-dong').addEventListener('click',function(){d.close();});
    d.addEventListener('click',function(e){if(e.target===d)d.close();});
    d.addEventListener('close',function(){history.replaceState(null,'',location.pathname);});
  });
  if(location.hash)mo(location.hash.slice(1));
})();
</script>
""" % ("".join(the(t) for t in CG), "".join(ho_so(t) for t in CG))

NOINDEX = '<meta name="robots" content="noindex">\n'

def chen_noindex(tep):
    duong = os.path.join(GOC, tep)
    s = open(duong, encoding="utf-8").read()
    if NOINDEX not in s:
        s = s.replace('<link rel="canonical"', NOINDEX + '<link rel="canonical"', 1)
    open(duong, "w", encoding="utf-8").write(s)

trang("doi-ngu-chuyen-gia.html", "Đội ngũ chuyên gia cố vấn · Coach Duy Nguyễn",
      "Những chuyên gia tài chính, pháp lý, kế toán và nhân sự đồng hành cùng Cộng đồng Next Gen Founder.",
      THAN, "")
chen_noindex("doi-ngu-chuyen-gia.html")

# Trang chủ mẫu: chép index.html vừa dựng, chèn khối chuyên gia sau khối Cộng đồng.
s = open(os.path.join(GOC, "index.html"), encoding="utf-8").read()
moc = '<section class="phan bd phan-vang" id="hanh-trinh">'
assert moc in s, "không tìm thấy khối Hành trình trên trang chủ, cần sửa mốc chèn"
s = s.replace(moc, KHOI_TRANG_CHU + moc, 1)
s = s.replace("</head>", CSS + "\n</head>", 1)
s = s.replace('<header id="hero">', mau("doi-ngu-chuyen-gia.html", "Xem trang Đội ngũ chuyên gia cố vấn") + '\n<header id="hero">', 1)
open(os.path.join(GOC, "trang-chu-mau.html"), "w", encoding="utf-8").write(s)
chen_noindex("trang-chu-mau.html")
print("  doi-ngu-chuyen-gia.html, trang-chu-mau.html")
