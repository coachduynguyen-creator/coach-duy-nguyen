# -*- coding: utf-8 -*-
"""Trang giới thiệu nhóm Mentor: mentor/index.html.

Không có đơn đăng ký, Duy gửi đường dẫn cho người được mời. Bản chốt nội dung ở vault:
02 Projects/Tools/Website coachduynguyen.vn/[C] Bản chốt trang Mentor 30-10-2026.md
"""
from lib import trang, dau_trang

THAN = dau_trang(
    "Đội ngũ cố vấn · Mentor",
    "Kinh nghiệm anh chị đã trả giá, để người đi sau bớt vấp",
    "Duy đang mời một nhóm nhỏ những người đã tự tay đưa doanh nghiệp qua giai đoạn khó nhất, "
    "từ chủ doanh nghiệp tới CEO và tổng giám đốc. Anh chị chia sẻ theo lịch hợp với mình, kể cho những "
    "người chủ đang xây doanh nghiệp nghe một giai đoạn mình đã đi qua, rồi góp ý vào vấn đề họ đang gặp."
,
    anh="../img/mentor/nen-dau.webp", vi_tri="right 40%",
) + """
<section class="phan bd hoa-van">
  <div class="doi-cot mt-dau">
    <div class="hien">
      <p class="mono">Vì sao có nhóm Mentor</p>
      <h2>Vì sao Duy lập nhóm Mentor</h2>
      <p>Cộng đồng Next Gen Founder, cộng đồng của những nhà sáng lập thế hệ mới, tới nay có hơn 200 thành viên. Họ là chủ doanh nghiệp, Founder và chuyên gia đang xây doanh nghiệp của mình, từ nhiều ngành nghề và nhiều quy mô doanh nghiệp khác nhau.</p>
      <p>Duy muốn trong cộng đồng có những người đi trước, là các Founder đã làm được, để dẫn dắt những người cùng ngành với mình đi lên và đi cùng họ một đoạn. Theo Duy, đó là <span class="nhan">sức mạnh của một cộng đồng</span>.</p>
    </div>
    <div class="anh-khung ngang hien"><img src="../img/cd-workshop.webp" alt="Coach Duy Nguyễn chia sẻ với thành viên Cộng đồng Next Gen Founder" loading="lazy"></div>
  </div>
</section>

<section class="phan bd phan-sang">
  <div class="phan-dau hien">
    <p class="mono">Bài học không có trong sách</p>
    <h2>Điều giúp người chủ đi sau bớt vấp nhất</h2>
    <p>Mỗi bài học như vậy anh chị đã tốn tiền và mất thời gian thật mới có. <span class="nhan">Không ai kể lại thì người đi sau sẽ vấp lại đúng chỗ đó.</span></p>
  </div>
  <div class="luoi c3 tre hien">
    <article class="mt-vap"><svg class="mt-hinh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5"/><path d="m22 8-5 5"/></svg><b>01</b><span class="mt-nhan">Lần vấp</span><h3>Chọn sai người</h3></article>
    <article class="mt-vap"><svg class="mt-hinh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/></svg><b>02</b><span class="mt-nhan">Lần vấp</span><h3>Mở rộng sớm hơn sức mình</h3></article>
    <article class="mt-vap"><svg class="mt-hinh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg><b>03</b><span class="mt-nhan">Lần vấp</span><h3>Ôm một việc quá lâu rồi mới chịu giao</h3></article>
  </div>
</section>

<section class="phan bd hoa-van duoi">
  <div class="phan-dau hien">
    <p class="mono">Hai nhóm trong Đội ngũ cố vấn</p>
    <h2>Mentor khác chuyên gia cố vấn ở chỗ nào</h2>
  </div>
  <div class="luoi c2 tre hien">
    <article class="the">
      <span class="mt-nhan">Chuyên gia cố vấn</span>
      <h3>Giỏi một nghề cụ thể</h3>
      <p>Trong Đội ngũ cố vấn, Duy đã có nhóm chuyên gia cố vấn, là những người giỏi một nghề cụ thể như kế toán và thuế, tài chính hay phong thủy. Họ giúp thành viên làm đúng phần việc thuộc nghề đó.</p>
      <p class="mt-lk"><a class="lk-v" href="../doi-ngu-chuyen-gia.html">Xem nhóm chuyên gia cố vấn <span class="mt" aria-hidden="true">&rarr;</span></a></p>
    </article>
    <article class="the mt-noi">
      <span class="mt-nhan">Mentor</span>
      <h3>Kể lại đường mình đã đi</h3>
      <p>Mentor thì không cần là chuyên gia của một nghề nào. Anh chị kể lại đường mình đã đi: đã chọn gì ở từng ngã rẽ, đã sai ở đâu, và nếu được làm lại thì sẽ làm khác chỗ nào.</p>
    </article>
  </div>
</section>

<section class="phan bd phan-sang">
  <div class="phan-dau hien">
    <p class="mono">Một buổi chia sẻ</p>
    <h2>Một buổi chia sẻ diễn ra thế nào</h2>
    <p>Anh chị nhận bao nhiêu buổi là do anh chị chọn, không có số buổi bắt buộc. Có người chỉ nhận một buổi trong năm, có người sẵn sàng chia sẻ hàng tuần, <span class="nhan">Duy xếp lịch theo anh chị.</span></p>
    <p>Phần lớn buổi chia sẻ diễn ra qua Zoom. Cộng đồng cũng có những buổi gặp mặt trực tiếp, từ nhóm nhỏ ngồi quanh một màn hình tới bữa tối trao đổi, và Duy rất mong anh chị tới ngồi cùng và chia sẻ ở những buổi đó.</p>
  </div>
  <div class="mt-so tre hien">
    <div><b>90 phút</b><span>mỗi buổi</span></div>
    <div><b>Zoom</b><span>hoặc gặp trực tiếp</span></div>
    <div><b>Buổi tối</b><span>trong tuần</span></div>
  </div>
  <div class="luoi c3 tre hien mt-anh">
    <figure><div class="anh-khung ngang"><img src="../img/mentor/truc-tuyen.webp" alt="Duy dẫn một buổi trao đổi trực tuyến từ phòng quay" loading="lazy"></div><figcaption>Buổi trực tuyến từ phòng quay</figcaption></figure>
    <figure><div class="anh-khung ngang"><img src="../img/mentor/nhom-nho.webp" alt="Một buổi chia sẻ nhóm nhỏ trực tiếp" loading="lazy"></div><figcaption>Nhóm nhỏ gặp trực tiếp</figcaption></figure>
    <figure><div class="anh-khung ngang"><img src="../img/mentor/an-toi-2.webp" alt="Bữa tối trao đổi cùng thành viên Cộng đồng tại Hà Nội" loading="lazy"></div><figcaption>Bữa tối trao đổi</figcaption></figure>
  </div>
  <div class="duong-chang mt-chang tre hien">
    <div class="chang"><span class="mt-nhan">Một tuần trước</span><b>Duy gọi cho anh chị</b><p>Hai bên cùng chọn giai đoạn sẽ kể, nên anh chị không cần soạn bài trình bày.</p></div>
    <div class="chang"><span class="mt-nhan">Vài ngày trước</span><b>Anh chị xem trước vấn đề</b><p>Duy chọn vấn đề của vài thành viên Master Club và gửi anh chị xem trước, để anh chị góp ý thẳng mà không bị hỏi bất ngờ.</p></div>
    <div class="chang"><span class="mt-nhan">45 phút đầu</span><b>Anh chị kể chuyện</b><p>Duy ngồi cùng anh chị và dẫn bằng câu hỏi.</p></div>
    <div class="chang"><span class="mt-nhan">45 phút sau</span><b>Anh chị góp ý</b><p>Vài thành viên Master Club đưa ra vấn đề đang gặp trong doanh nghiệp của mình.</p></div>
  </div>
</section>

<section class="phan bd hoa-van">
  <div class="phan-dau hien">
    <p class="mono">Ai ngồi nghe</p>
    <h2>Những người chủ đang điều hành doanh nghiệp</h2>
    <p>Người nghe là thành viên Master Club và Grand Master Club, hai cấp đồng hành dài hạn của Cộng đồng Next Gen Founder. Đây là những người chủ đang điều hành doanh nghiệp và mang vấn đề đang gặp tới buổi chia sẻ.</p>
  </div>
  <div class="luoi c2 tre hien">
    <div class="anh-khung ngang"><img src="../img/mentor/ghi-chep.webp?v=2" alt="Những người chủ ngồi quanh bàn họp trong một buổi trao đổi" loading="lazy"></div>
    <div class="anh-khung ngang"><img src="../img/mentor/hoi-truong.webp?v=2" alt="Hội trường kín người trong một buổi Duy giảng trực tiếp" loading="lazy"></div>
  </div>
</section>

<section class="phan bd phan-vang">
  <div class="phan-dau hien">
    <p class="mono">Điều anh chị nhận lại</p>
    <h2>Chia sẻ những gì mình đã trải qua với người đang thực sự cần</h2>
    <p>Làm mentor không phải một cuộc trao đổi quyền lợi. Phần anh chị nhận lại nằm ở chỗ khác: <span class="nhan">những gì anh chị đã trải qua giúp được người đang cần nó.</span></p>
  </div>
  <div class="luoi c3 tre hien">
    <article class="the mt-ql"><i class="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-6h3M4 13h3v6H6a2 2 0 0 1-2-2z"/></svg></i><h3>Người nghe đang gặp đúng chỗ anh chị từng gặp</h3><p>Người ngồi nghe là những người chủ đang điều hành doanh nghiệp, và vấn đề họ mang tới thường là chỗ anh chị từng đi qua. Câu chuyện anh chị kể có thể giúp họ tránh được chỗ anh chị đã vấp.</p></article>
    <article class="the mt-ql"><i class="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg></i><h3>Thấy kinh nghiệm của mình giúp được người khác</h3><p>Sau phần kể chuyện, anh chị nghe vấn đề thật của một người chủ khác và góp ý từ chính những gì mình đã làm. Bài học anh chị có được trong doanh nghiệp của mình giờ giúp thêm một doanh nghiệp nữa.</p></article>
    <article class="the mt-ql"><i class="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V11"/><path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z"/></svg></i><h3>Để lại di sản của chính mình</h3><p>Kinh nghiệm anh chị đã tốn tiền và thời gian mới có được, nếu không kể ra thì sẽ dừng lại ở anh chị. Kể ra rồi, nó đi tiếp qua những người chủ đã nghe anh chị và doanh nghiệp của họ.</p></article>
  </div>
  <p class="mt-ro tre hien"><b>Vài điều Duy nói rõ từ đầu để anh chị yên tâm.</b> Buổi chia sẻ không có phần bán hàng của bất kỳ ai, kể cả Duy. Bản ghi hình chỉ được đăng khi anh chị đã duyệt, và anh chị nhận bản ghi để đăng lên kênh của mình nếu muốn. Anh chị có một trang hồ sơ trên coachduynguyen.vn để sau buổi chia sẻ, thành viên biết anh chị đang làm gì. Vai trò mentor không có thù lao.</p>
</section>

<section class="phan bd hoa-van duoi">
  <div class="doi-cot hinh-trai">
  <div class="anh-khung ngang hien"><img src="../img/mentor/tro-chuyen-duy.webp" alt="Duy trò chuyện riêng với một thành viên sau buổi học" loading="lazy"></div>
  <div class="mt-cuoi hien">
    <p class="mono">Sau khi đọc trang này</p>
    <p class="mt-cuoi-chinh">Nếu anh chị nhận trang này từ Duy, Duy sẽ gọi lại trong tuần để hai bên nói chuyện kỹ hơn, và anh chị chưa cần trả lời gì lúc này.</p>
    <p>Nếu anh chị thấy mình hợp với nhóm này mà chưa nói chuyện với Duy, anh chị nhắn Duy qua trang Liên hệ.</p>
    <a class="lk-v" href="../lien-he.html">Mở trang Liên hệ <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
  </div>
</section>
<style>
.doi-cot .mono{color:var(--vang)}
.anh-khung img{width:100%;height:100%;object-fit:cover}
.mt-nhan{display:block;font-family:var(--f-mono);font-size:11.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--vang);margin-bottom:12px}
.the p + p{margin-top:12px}
.mt-noi{border-color:var(--vang)}
.mt-ql{border-top:3px solid #F2B14A}
.mt-ic{display:inline-grid;place-items:center;width:48px;height:48px;border-radius:12px;background:#17120F;color:#F2B14A;margin-bottom:16px}
.mt-ic svg{width:26px;height:26px}
.phan-vang .mt-ql h3{margin-bottom:10px}
.mt-ro{max-width:68ch;margin:40px auto 0;text-align:center;font-size:15px;line-height:1.7;color:rgba(23,18,15,.78)}
.mt-ro b{color:var(--on-vang)}
.mt-vap{position:relative;overflow:hidden;background:#17120F;border-radius:var(--r);padding:30px 28px 34px;min-height:230px;box-shadow:0 24px 50px -28px rgba(23,18,15,.75);transition:transform .4s var(--ease)}
.mt-vap:hover{transform:translateY(-4px)}
.mt-vap::before{content:"";position:absolute;left:0;top:0;width:100%;height:3px;background:linear-gradient(90deg,#F2B14A,transparent)}
.mt-vap > *{position:relative;z-index:1}
.mt-vap .mt-hinh{position:absolute;z-index:0;right:-18px;bottom:-18px;width:150px;height:150px;color:#F2B14A;opacity:.14}
.mt-vap b{display:block;font-family:var(--f-tit);font-weight:800;font-size:64px;line-height:1;color:#F2B14A;margin-bottom:14px}
.mt-vap .mt-nhan{color:#A2968A;margin-bottom:8px}
.mt-vap h3:not(#_){text-align:left!important;margin:0;color:#F9F5F0;font-size:clamp(20px,2vw,24px);line-height:1.3;max-width:15ch}

@media(max-width:999px){.mt-dau > .anh-khung{order:-1}}
/* mt-den-trang: mọi ảnh nội dung đen trắng, rê chuột thì hiện màu */
img[loading="lazy"]{filter:grayscale(1) contrast(1.05);transition:filter .8s var(--ease),transform .8s var(--ease)}
@media(hover:hover){img[loading="lazy"]:hover{filter:grayscale(0)}}
.mt-anh{margin-bottom:34px}
.mt-anh figure{margin:0}
.mt-anh figcaption{margin-top:10px;font-size:14px;color:var(--ink-3);text-align:center}
.mt-so{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;max-width:760px;margin:0 auto 34px}
.mt-so > div{text-align:center;border:1px solid var(--line);border-radius:var(--r);padding:20px 10px;background-color:var(--panel)}
.mt-so b{display:block;font-family:var(--f-tit);font-weight:800;font-size:clamp(22px,3vw,32px);color:var(--vang)}
.mt-so span{display:block;margin-top:6px;font-size:14px;color:var(--ink-3)}
@media(min-width:1000px){.mt-chang{grid-template-columns:repeat(4,minmax(0,1fr))}}
.mt-cuoi{max-width:62ch}
.mt-cuoi p{font-size:16.5px;color:var(--ink-2);margin-top:12px}
.mt-cuoi .mt-cuoi-chinh{font-family:var(--f-tit);font-weight:700;font-size:clamp(20px,2.4vw,26px);color:var(--ink);line-height:1.4}
.mt-cuoi .lk-v{margin-top:20px}
</style>"""

trang("mentor/index.html", "Mentor · Đội ngũ cố vấn · Coach Duy Nguyễn",
      "Nhóm Mentor của Cộng đồng Next Gen Founder: những chủ doanh nghiệp đi trước kể lại một giai đoạn đã đi qua cho thành viên Master Club.",
      THAN, "mentor/", cuoi=False, anh_chia_se="img/cd-workshop.webp")
print("  mentor/index.html")
