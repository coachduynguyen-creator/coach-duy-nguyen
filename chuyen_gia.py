# -*- coding: utf-8 -*-
"""Đội ngũ chuyên gia cố vấn: khối trên trang chủ và trang riêng doi-ngu-chuyen-gia.html.

dung.py import tệp này: lấy KHOI_TRANG_CHU chèn vào trang chủ, và tệp này tự dựng
trang riêng khi được import. Thêm chuyên gia thì thêm một mục vào CG và đặt ảnh ở
img/chuyen-gia/<ma>.webp. Ô nào chưa có thông tin thì để None, trang tự bỏ phần đó.
"""
import html, os
from lib import trang, dau_trang, GOC

CG = [
    {"ma": "tai-chinh-ca-nhan", "linh_vuc": "Tài chính cá nhân", "danh": "",
     "ten": "Cherry Nguyen", "chuc": "Cố vấn tài chính tại FIDT, tư vấn đầu tư và quản lý tài sản",
     "don_vi": "FIDT", "nam": None,
     "mot_cau": "Tách tiền gia đình khỏi tiền doanh nghiệp, để những tháng kinh doanh đi xuống không kéo cả nhà đi theo.",
     "loi_nhan": None,
     "giup": ["Tách bạch tài khoản cá nhân và tài khoản công ty",
              "Tự trả lương đều đặn cho chính mình khi doanh thu còn lên xuống",
              "Quỹ dự phòng cho gia đình và bảo hiểm cho người trụ cột",
              "Kế hoạch đầu tư và tài sản dài hạn: nhà, học phí cho con, lúc nghỉ hưu"],
     "hoi": ["Doanh thu chưa đều thì tôi nên tự trả lương cho mình bao nhiêu?",
             "Lúc công ty khó, có nên lấy tiền của gia đình ra bù không?",
             "Tiền nhàn rỗi của gia đình nên để ở đâu cho an toàn?"],
     "kinh_nghiem": None},
    {"ma": "phong-thuy", "linh_vuc": "Phong thủy và tử vi", "danh": "Coach",
     "ten": "Lê Phương", "chuc": "Chuyên gia phong thủy và tử vi cho doanh nghiệp",
     "don_vi": None, "nam": None,
     "mot_cau": "Xem phong thủy văn phòng, cửa hàng và chọn thời điểm cho những việc lớn của doanh nghiệp.",
     "loi_nhan": None,
     "giup": ["Bố trí văn phòng, cửa hàng và chỗ ngồi của người chủ",
              "Chọn ngày khai trương, ký kết, chuyển trụ sở",
              "Chọn màu sắc, tên gọi cho thương hiệu mới",
              "Đọc lá số tử vi để người chủ hiểu thêm về mình trước một quyết định lớn"],
     "hoi": ["Văn phòng mới nên đặt bàn của người chủ ở hướng nào?",
             "Tháng nào hợp để khai trương chi nhánh?",
             "Năm nay tôi nên giữ quy mô hay mở rộng?"],
     "kinh_nghiem": None,
     "ghi": "Phong thủy và tử vi là góc nhìn tham khảo để người chủ cân nhắc thêm, không thay cho tư vấn pháp lý, tài chính hay số liệu kinh doanh."},
]

def ten_day_du(t):
    return (t["danh"] + " " if t["danh"] else "") + t["ten"]

def anh(t, lop="cg-anh"):
    return '<div class="%s co-anh"><img src="img/chuyen-gia/%s.webp" alt="Chân dung %s" loading="lazy" width="720" height="720"></div>' % (lop, t["ma"], ten_day_du(t))

def the(t):
    return """<a class="cg-the" href="doi-ngu-chuyen-gia.html#%s" data-mo="%s">
  %s
  <div class="cg-than">
    <span class="cg-lv">%s</span>
    <h3>%s</h3>
    <p class="cg-chuc">%s</p>
    <p class="cg-cau">%s</p>
    <span class="cg-xem">Xem hồ sơ <span class="mt" aria-hidden="true">&rarr;</span></span>
  </div>
</a>""" % (t["ma"], t["ma"], anh(t), t["linh_vuc"], ten_day_du(t), t["chuc"], t["mot_cau"])

def muc(tieu, xs):
    return ("<h4>%s</h4><ul>%s</ul>" % (tieu, "".join("<li>%s</li>" % html.escape(x) for x in xs))) if xs else ""

def ho_so(t):
    return """<dialog class="cg-hs" id="%s" aria-labelledby="%s-ten">
  <button class="cg-dong" type="button" aria-label="Đóng hồ sơ">&times;</button>
  <div class="cg-hs-in">
    <aside class="cg-hs-trai">
      %s
      <span class="cg-lv">%s</span>
      <h2 id="%s-ten">%s</h2>
      <p class="cg-chuc">%s</p>
      %s%s
    </aside>
    <div class="cg-hs-phai">
      %s%s%s%s
      <h4>Cách đồng hành cùng cộng đồng</h4>
      <ul><li>Buổi hỏi đáp trực tuyến với thành viên Cộng đồng Next Gen Founder</li>
          <li>Bài viết và tài liệu chuyên đề về %s</li>
          <li>Buổi trao đổi riêng khi thành viên cần đi sâu vào trường hợp của mình</li></ul>
      %s<p class="cg-gh">Buổi hỏi đáp trong cộng đồng giúp bạn nhìn rõ vấn đề và biết nên làm gì trước. Việc cần xem hồ sơ, chứng từ của riêng doanh nghiệp thì làm theo thỏa thuận riêng giữa bạn và chuyên gia.</p>
      <a class="nut nut-v" href="tham-gia/">Đăng ký tham gia Cộng đồng <span class="mt" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</dialog>""" % (t["ma"], t["ma"], anh(t, "cg-anh cg-anh-lon"), t["linh_vuc"], t["ma"], ten_day_du(t), t["chuc"],
                ('<p class="cg-dv">%s</p>' % t["don_vi"]) if t["don_vi"] else "",
                ('<div class="cg-so"><b>%s năm</b><span>hành nghề</span></div>' % t["nam"]) if t["nam"] else "",
                ("<blockquote>%s</blockquote>" % html.escape(t["loi_nhan"])) if t["loi_nhan"] else "",
                muc("Đồng hành cùng bạn ở những việc", t["giup"]), muc("Câu hỏi người chủ hay mang tới", t["hoi"]),
                muc("Kinh nghiệm hành nghề", t["kinh_nghiem"]), t["linh_vuc"].lower(),
                ('<p class="cg-gh">%s</p>' % t["ghi"]) if t.get("ghi") else "")

# ------------------------------------------------------------ KHỐI TRÊN TRANG CHỦ
KHOI_TRANG_CHU = """<section class="phan bd hoa-van duoi" id="doi-ngu-co-van">
  <div class="phan-dau hien">
    <p class="mono">Đội ngũ chuyên gia cố vấn</p>
    <h2>Có những câu hỏi cần đúng người trong nghề trả lời</h2>
    <p>Tiền của gia đình tách khỏi tiền công ty thế nào, việc lớn nên làm vào lúc nào. Người chủ hay để tới lúc có chuyện mới đi hỏi, và lúc đó thường đã muộn. <span class="nhan">Duy mời về Cộng đồng Next Gen Founder những chuyên gia đang hành nghề thật</span>, để bạn hỏi đúng người ngay từ lúc mới nghĩ tới.</p>
  </div>
  <div class="cg-luoi cg-luoi-gon tre hien">%s</div>
  <div class="blog-them"><a class="nut nut-vien" href="doi-ngu-chuyen-gia.html">Xem đội ngũ chuyên gia cố vấn <span class="mt" aria-hidden="true">&rarr;</span></a></div>
</section>

""" % "".join(the(t) for t in CG)

# ------------------------------------------------------------ TRANG RIÊNG
THAN = dau_trang(
    "Đội ngũ chuyên gia cố vấn",
    "Người trong nghề ngồi cùng bạn trước khi việc lớn xảy ra",
    "Duy đi cùng bạn ở thương hiệu, tư vấn, hệ thống và cộng đồng. Còn chuyện tiền của gia đình hay chọn thời điểm cho một việc lớn thì cần người đang hành nghề trả lời. Những chuyên gia dưới đây đồng hành cùng Cộng đồng Next Gen Founder, để bạn hỏi đúng người, đúng lúc.") + """

<section class="phan bd">
  <div class="phan-dau hien">
    <p class="mono">Đội ngũ</p>
    <h2>Bấm vào từng người để xem hồ sơ</h2>
    <p>Đội ngũ đang mời thêm chuyên gia pháp lý, kế toán và thuế.</p>
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

trang("doi-ngu-chuyen-gia.html", "Đội ngũ chuyên gia cố vấn · Coach Duy Nguyễn",
      "Chuyên gia tài chính cá nhân, phong thủy và tử vi đồng hành cùng Cộng đồng Next Gen Founder của Coach Duy Nguyễn.",
      THAN, "doi-ngu-chuyen-gia.html")
print("  doi-ngu-chuyen-gia.html")
