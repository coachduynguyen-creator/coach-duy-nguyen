# -*- coding: utf-8 -*-
"""Trang đăng ký làm Người Dẫn Đường (bản chốt 16/10/2026, mục C1 tới C4).

Dựng nguoi-dan-duong/dang-ky/index.html. Dung.py gọi ngay sau trang chương trình.

Đơn gửi về cùng nơi nhận với Cộng đồng và Founder Brand (Apps Script, địa chỉ lấy
thẳng từ cong-dong/index.html để hai nơi không lệch nhau), nhưng mang nguon
'nguoi-dan-duong' nên vào tab riêng và báo riêng cho Coach Duy. Tên trường phải
khớp hàm lay() của NGUON['nguoi-dan-duong'] trong apps-script/nhan-dang-ky.gs.
Các lựa chọn B6, B8, B9, B10, B11 phải bắt đầu đúng chữ mà goiY() so khớp.

Trang không có trong sitemap và đặt noindex: chỉ người được mời hoặc bấm từ trang chương trình mới vào.
"""
import os, re, html
from lib import trang, GOC, dau_trang

_cd = open(os.path.join(GOC, "cong-dong", "index.html"), encoding="utf-8").read()
FORM_URL = re.search(r"form:'(https://script\.google\.com/macros/s/[^']+/exec)'", _cd).group(1)

TEP = "nguoi-dan-duong/dang-ky/index.html"
e = html.escape


def o_chu(ten, nhan, bat_buoc=False, dai=False, goi_y="", loai="text", nho=""):
    sao = ' <span class="bb" aria-hidden="true">*</span>' if bat_buoc else ' <small>(không bắt buộc)</small>'
    thuoc = ' data-bb="1" aria-required="true"' if bat_buoc else ""
    if dai:
        o = '<textarea name="%s" rows="4" placeholder="%s"%s></textarea>' % (ten, e(goi_y), thuoc)
    else:
        o = '<input type="%s" name="%s" placeholder="%s" autocomplete="off"%s>' % (loai, ten, e(goi_y), thuoc)
    return '<label class="o"><span>%s%s</span>%s%s</label>' % (nhan, sao, ('<em>%s</em>' % nho) if nho else "", o)


def o_chon(ten, nhan, cac, bat_buoc=False, them=""):
    sao = ' <span class="bb" aria-hidden="true">*</span>' if bat_buoc else ' <small>(không bắt buộc)</small>'
    thuoc = ' data-bb="1"' if bat_buoc else ""
    ds = "".join('<label class="chon"><input type="radio" name="%s" value="%s"><span>%s</span></label>'
                 % (ten, e(c), e(c)) for c in cac)
    return ('<fieldset class="o nhom"%s data-ten="%s"><legend>%s%s</legend><div class="cac-chon">%s</div>%s</fieldset>'
            % (thuoc, ten, nhan, sao, ds, them))


B1 = ["Chủ doanh nghiệp đã đi qua một chặng", "Chuyên gia hành nghề lâu năm",
      "Người dẫn đội ngũ trong doanh nghiệp", "Khác"]
B6 = ["Chưa có", "1 đến 2 người", "3 đến 5 người", "Hơn 5 người"]
B8 = ["Chưa", "Có nhưng không chính thức", "Có và có thu phí"]
B9 = ["Được", "Cần sắp xếp lại", "Chưa chắc"]
B10 = ["Tôi muốn vậy", "Tôi sẽ cần làm quen", "Tôi chưa chắc"]
B11 = ["Có", "Cần nghe thêm"]
B13 = ["YouTube", "Facebook", "Người giới thiệu", "Sự kiện hoặc lớp học", "Khác"]

BUOC1 = "".join([
    o_chu("ten", "Họ và tên", True, goi_y="Ví dụ: Nguyễn Văn An"),
    o_chu("dienthoai", "Số điện thoại hoặc Zalo", True, loai="tel", goi_y="09xx xxx xxx"),
    o_chu("email", "Email", True, loai="email", goi_y="ban@vidu.com"),
    o_chon("nhom", "Bạn thuộc nhóm nào?", B1, True),
    o_chu("linh_vuc", "Bạn làm trong lĩnh vực nào, được bao nhiêu năm?", True, goi_y="Ví dụ: Tư vấn tài chính cá nhân, 12 năm"),
    o_chu("lien_ket", "Đường dẫn Facebook, LinkedIn hoặc website của bạn", goi_y="Dán một hoặc nhiều đường dẫn"),
])

BUOC2 = "".join([
    o_chu("ket_qua", "Kết quả lớn nhất bạn đã tự làm ra là gì? Ghi kèm con số.", True, True,
          "Ví dụ: Đưa doanh thu công ty từ 2 tỷ lên 9 tỷ trong 3 năm"),
    o_chu("kiem_chung", "Ai hoặc điều gì có thể kiểm chứng kết quả đó?", True, True,
          "Khách hàng, đối tác, báo cáo, sản phẩm công khai..."),
    o_chon("nguoi_hoi", "Một tháng qua, có mấy người hỏi bạn “làm sao được như vậy”?", B6),
    o_chu("muon_dan", "Bạn muốn dẫn ai, và giúp họ đạt kết quả gì?", True, True,
          "Càng cụ thể càng tốt: họ là ai, đang vướng ở đâu, bạn giúp họ tới đâu"),
    o_chon("tung_dan", "Bạn đã từng dẫn người khác chưa?", B8, False,
           '<label class="o phu"><em>Nếu có, khoảng bao nhiêu người?</em><input type="text" name="tung_dan_so" autocomplete="off" placeholder="Ví dụ: 5 người"></label>'),
])

BUOC3 = "".join([
    o_chon("thoi_gian", "Bạn sắp xếp được tám giờ mỗi tuần, trong mười hai tháng, không?", B9, True),
    o_chon("nhan_xet", "Sau mỗi buổi, Duy sẽ nhận xét thẳng, không nói giảm. Bạn thấy sao?", B10, True),
    o_chon("dan_lai", "Bạn có sẵn lòng dẫn lại người đi sau mình không?", B11, True),
    o_chu("mong", "Sau mười hai tháng, bạn mong có được gì?", False, True, "Viết như bạn đang kể với một người bạn"),
    o_chon("biet_qua", "Bạn biết đến Duy qua đâu?", B13),
    o_chu("bang_khoan", "Điều bạn băn khoăn nhất lúc này là gì?", False, True),
    o_chu("dieu_biet", "Một điều bạn muốn Duy biết trước buổi gặp", False, True),
])

CSS = """<style>
.ddk{padding:8px 0 96px}
.ddk-khung{width:min(100% - 40px,760px);margin-inline:auto}
.ddk-tien{display:flex;gap:8px;margin:0 0 22px;padding:0;list-style:none}
.ddk-tien li{flex:1;border-top:3px solid var(--line-2);padding-top:8px;font-family:var(--f-mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-4)}
.ddk-tien li.on{border-color:var(--vang);color:var(--vang)}
.ddk-tien li.xong{border-color:var(--vang-3);color:var(--ink-3)}
.ddk-form{color-scheme:light;--ink:#241B14;--ink-2:#4E4034;--ink-3:#5E4F3E;--ink-4:#75634F;--line-2:#B9A78E;background:#FBF6EB;color:#241B14;border:1px solid #DFD2BE;border-radius:var(--r);padding:30px;box-shadow:0 18px 50px rgba(0,0,0,.45)}
.ddk-form .buoc{border:0;margin:0;padding:0;min-width:0;display:none}
.ddk-form .buoc.on{display:block}
.ddk-form .buoc > h2{font-size:clamp(22px,3vw,28px);margin:0 0 20px}
.ddk-form .o{display:flex;flex-direction:column;gap:7px;margin:0 0 20px;font-size:15.5px;font-weight:600;color:var(--ink);border:0;padding:0;min-width:0}
.ddk-form .o legend{padding:0;margin:0 0 8px;font-size:15.5px;font-weight:600;color:var(--ink)}
.ddk-form .o small{font-weight:500;color:var(--ink-4);font-size:13px}
.ddk-form .o em{font-style:normal;font-weight:400;font-size:13.5px;color:var(--ink-3)}
.ddk-form .bb{color:#A8620A}
.ddk-form input[type=text],.ddk-form input[type=tel],.ddk-form input[type=email],.ddk-form textarea{width:100%;min-height:48px;padding:12px 14px;border:1px solid var(--line-2);border-radius:var(--r-s);background:#fff;color:#241B14;font:400 16px/1.5 var(--f-than)}
.ddk-form textarea{min-height:112px;resize:vertical}
.ddk-form input::placeholder,.ddk-form textarea::placeholder{color:var(--ink-4)}
.ddk-form input:focus-visible,.ddk-form textarea:focus-visible{outline:none;border-color:#A8620A;box-shadow:0 0 0 3px rgba(168,98,10,.22)}
.ddk-form .cac-chon{display:grid;gap:8px}
.ddk-form .chon{display:flex;align-items:center;gap:12px;margin:0;padding:12px 14px;border:1px solid var(--line-2);border-radius:var(--r-s);background:#fff;font-weight:500;font-size:15.5px;cursor:pointer}
.ddk-form .chon input{accent-color:#A8620A;width:18px;height:18px;flex:none;margin:0}
.ddk-form .chon:has(input:checked){border-color:#A8620A;background:#F7E6C8}
.ddk-form .chon:has(input:focus-visible){box-shadow:0 0 0 3px rgba(168,98,10,.22)}
.ddk-form .o.phu{margin:10px 0 0}
.ddk-form .sai input[type=text],.ddk-form .sai input[type=tel],.ddk-form .sai input[type=email],.ddk-form .sai textarea,.ddk-form input[aria-invalid=true],.ddk-form textarea[aria-invalid=true]{border-color:#C0462F}
.ddk-form .nhom.sai .chon{border-color:#C0462F}
.ddk-loi{display:none;margin:0 0 16px;color:#B23A24;font-weight:600;font-size:14.5px}
.ddk-form.co-loi .ddk-loi{display:block}
.ddk-nut{display:flex;gap:12px;justify-content:space-between;flex-wrap:wrap;margin-top:8px}
.ddk-nut .nut{cursor:pointer;font-size:16px}
.ddk-nut button.nut:disabled{opacity:.6;cursor:default}
.ddk-bay{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.ddk-xong{display:none;padding:26px;border-radius:var(--r);background:#F7E6C8;border:1px solid #D9B26A}
.ddk-xong b{display:block;font-family:var(--f-tit);font-size:24px;margin-bottom:8px}
.ddk-xong p{color:#4E4034}
.ddk-form.da-gui .buoc,.ddk-form.da-gui .ddk-nut,.ddk-form.da-gui .ddk-loi{display:none}
.ddk-form.da-gui .ddk-xong{display:block}
.ddk-ghi{margin-top:16px;font-size:14px;color:var(--ink-3)}
@media (max-width:560px){.ddk-form{padding:20px}.ddk-nut .nut{width:100%;justify-content:center}}
</style>"""

JS = """<script>
(function(){
  var d=document, f=d.getElementById('ddk-form'); if(!f) return;
  var URL_GUI='""" + FORM_URL + """';
  var buoc=[].slice.call(f.querySelectorAll('.buoc')), tien=[].slice.call(d.querySelectorAll('.ddk-tien li'));
  var hien=0, nutLui=d.getElementById('ddk-lui'), nutTiep=d.getElementById('ddk-tiep'), nutGui=d.getElementById('ddk-gui'), loi=d.getElementById('ddk-loi');
  function giaTri(n){ var el=f.elements[n]; if(!el) return ''; if(el.length!==undefined&&!el.tagName){ for(var i=0;i<el.length;i++) if(el[i].checked) return el[i].value; return ''; } return (el.value||'').trim(); }
  function dat(){
    buoc.forEach(function(b,i){ b.classList.toggle('on',i===hien); });
    tien.forEach(function(t,i){ t.classList.toggle('on',i===hien); t.classList.toggle('xong',i<hien); });
    nutLui.style.visibility=hien?'visible':'hidden';
    nutTiep.style.display=hien<buoc.length-1?'inline-flex':'none';
    nutGui.style.display=hien===buoc.length-1?'inline-flex':'none';
    f.classList.remove('co-loi');
  }
  function kiem(b){
    var thieu=null;
    [].slice.call(b.querySelectorAll('[data-bb]')).forEach(function(o){
      var ten, trong;
      if(o.tagName==='FIELDSET'){ ten=o.getAttribute('data-ten'); trong=!giaTri(ten); o.classList.toggle('sai',trong); if(trong&&!thieu) thieu=o.querySelector('input'); }
      else { ten=o.name; var v=giaTri(ten); trong=!v; if(ten==='email'&&v&&!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v)) trong=true;
        if(trong){ o.setAttribute('aria-invalid','true'); if(!thieu) thieu=o; } else o.removeAttribute('aria-invalid'); }
    });
    if(thieu){ loi.textContent='Còn chỗ chưa điền hoặc chưa đúng, những ô viền đỏ ở trên.'; f.classList.add('co-loi'); thieu.focus(); return false; }
    f.classList.remove('co-loi'); return true;
  }
  nutTiep.addEventListener('click',function(){ if(kiem(buoc[hien])){ hien++; dat(); f.scrollIntoView({behavior:'smooth',block:'start'}); } });
  nutLui.addEventListener('click',function(){ if(hien>0){ hien--; dat(); f.scrollIntoView({behavior:'smooth',block:'start'}); } });
  f.addEventListener('submit',function(ev){
    ev.preventDefault();
    if(hien<buoc.length-1){ nutTiep.click(); return; }
    for(var i=0;i<buoc.length;i++){ if(!kiem(buoc[i])){ hien=i; dat(); kiem(buoc[i]); return; } }
    var ds=['ten','dienthoai','email','nhom','linh_vuc','lien_ket','ket_qua','kiem_chung','nguoi_hoi','muon_dan','tung_dan','thoi_gian','nhan_xet','dan_lai','mong','biet_qua','bang_khoan','dieu_biet','bay'], data={};
    ds.forEach(function(n){ data[n]=giaTri(n); });
    var so=giaTri('tung_dan_so'); if(so&&data.tung_dan) data.tung_dan+=' - '+so;
    data.nguon='nguoi-dan-duong';
    data.trang_nguon=location.pathname;
    data.nguon_chien_dich=(new URLSearchParams(location.search).get('utm_source')||'').slice(0,80);
    function loiGui(m){ nutGui.disabled=false; nutGui.textContent='Gửi lại'; loi.innerHTML=m||'Chưa gửi được, có thể do mạng. Bạn thử lại, hoặc <a href="../../lien-he.html">nhắn cho Duy</a>.'; f.classList.add('co-loi'); }
    nutGui.disabled=true; nutGui.textContent='Đang gửi...';
    /* text/plain là cố ý, giống trang Cộng đồng: tránh yêu cầu kiểm tra trước của trình duyệt mà Apps Script không trả lời. */
    fetch(URL_GUI,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data)})
      .then(function(r){ return r.json(); })
      .then(function(kq){ if(kq&&kq.ok){ f.classList.add('da-gui'); d.querySelector('.ddk-tien').style.display='none'; d.querySelector('.ddk-ghi').style.display='none'; f.scrollIntoView({behavior:'smooth',block:'start'}); } else loiGui(kq&&kq.loi?e2(kq.loi):''); })
      .catch(function(){ loiGui(''); });
  });
  function e2(s){ return String(s).replace(/[&<>]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }
  dat();
})();
</script>"""

THAN = CSS + """
""" + dau_trang("Đơn làm Người Dẫn Đường",
                "Gửi đơn làm <span>Người Dẫn Đường</span>",
                "Duy đọc từng đơn và trả lời trong 7 ngày. Có khá nhiều câu hỏi, vì mỗi câu giúp Duy hiểu bạn trước buổi gặp. Bạn cứ viết thật.") + """
<section class="ddk">
  <div class="ddk-khung">
    <ol class="ddk-tien" aria-label="Các bước">
      <li class="on">1 · Bạn là ai</li><li>2 · Kết quả</li><li>3 · Sẵn sàng</li>
    </ol>
    <form id="ddk-form" class="ddk-form" novalidate>
      <fieldset class="buoc on"><h2>Bạn là ai</h2>""" + BUOC1 + """</fieldset>
      <fieldset class="buoc"><h2>Kết quả và người bạn muốn dẫn</h2>""" + BUOC2 + """</fieldset>
      <fieldset class="buoc"><h2>Mức sẵn sàng</h2>""" + BUOC3 + """</fieldset>
      <div class="ddk-bay" aria-hidden="true"><label>Để trống<input type="text" name="bay" tabindex="-1" autocomplete="off"></label></div>
      <p class="ddk-loi" id="ddk-loi" role="alert"></p>
      <div class="ddk-nut">
        <button type="button" class="nut nut-vien" id="ddk-lui">Quay lại</button>
        <button type="button" class="nut nut-v" id="ddk-tiep">Tiếp tục <span class="mt" aria-hidden="true">&rarr;</span></button>
        <button type="submit" class="nut nut-v" id="ddk-gui" style="display:none">Gửi đơn làm Người Dẫn Đường</button>
      </div>
      <div class="ddk-xong" role="status"><b>Duy đã nhận đơn của bạn.</b><p>Duy đọc từng đơn và trả lời bạn trong 7 ngày. Một thư xác nhận đang được gửi tới email bạn vừa điền.</p></div>
    </form>
    <p class="ddk-ghi">Đơn này chỉ để Duy hiểu bạn trước buổi gặp. Gửi đơn không đồng nghĩa với việc được nhận hay bị từ chối ngay.</p>
  </div>
</section>
""" + JS

trang(TEP, "Gửi đơn làm Người Dẫn Đường",
      "Đơn đăng ký làm Người Dẫn Đường của Coach Duy Nguyễn: ba bước ngắn để Duy hiểu bạn trước buổi gặp.",
      THAN, "")

# Trang đăng ký không đưa lên Google: chỉ người bấm từ trang chương trình mới cần tới.
_p = os.path.join(GOC, TEP)
_s = open(_p, encoding="utf-8").read()
if 'name="robots"' not in _s:
    open(_p, "w", encoding="utf-8").write(_s.replace('<link rel="canonical"', '<meta name="robots" content="noindex, follow">\n<link rel="canonical"', 1))
print("  " + TEP)
