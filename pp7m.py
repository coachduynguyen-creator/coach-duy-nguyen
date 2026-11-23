"""Trang Phương pháp: chỉ nói về Mô hình 7M. Chữ lấy từ tài liệu giới thiệu 7M
(xưởng NGF, outputs/ngf_gioi_thieu_7m_20261118/gioi-thieu.md, nguồn của bản PDF),
51 chuẩn tên theo D119 lấy từ hình bánh xe 7M (assets/chuan-7m.json)."""
import json

TRU = [
 ("1", "Thị trường", "Market", "Bán gì, cho ai?",
  ["Trụ cột này đứng đầu vì mọi việc phía sau đều dựa vào nó. Chưa rõ khách mục tiêu là ai thì không viết được cách tư vấn, không biết tuyển người thế nào, cũng không đặt được chỉ tiêu hợp lý.",
   "Thị trường trả lời 4 việc: khách nào nên nhận và khách nào nên từ chối; bán gói nào, với lời hứa gì và giá bao nhiêu; vì sao khách chọn công ty thay vì nơi khác; khách đến từ đâu và được giao cho nhân viên kinh doanh nào."],
  ["Nhân viên kinh doanh nhận mọi khách hỏi, kể cả khách không hợp, rồi mất nhiều ngày theo một khách không bao giờ mua.",
   "Mỗi người báo một mức giá, giảm giá theo ý mình để chốt cho kịp.",
   "Hỏi 3 nhân viên kinh doanh vì sao khách nên chọn công ty thì nhận về 3 câu trả lời khác nhau.",
   "2 người cùng chăm một khách, rồi tranh nhau khi khách đóng phí."]),
 ("2", "Quy trình", "Method", "Bán thế nào?",
  ["Quy trình là các chặng khách đi qua, từ tin nhắn đầu tiên tới khi đóng phí, rồi quay lại mua tiếp và giới thiệu người khác. Mỗi chặng ghi rõ khi nào khách được chuyển sang chặng sau, nhân viên kinh doanh làm gì và nói gì ở chặng đó.",
   "Quy trình chỉ có giá trị khi cả phòng làm theo hằng ngày. Bản quy trình in đẹp mà không ai dùng thì phòng vẫn bán theo thói quen của từng người. Vì vậy trụ cột này đi kèm quy tắc khi tư vấn khách: nhân viên kinh doanh được nói gì, không được hứa gì, và giữ vai người cố vấn cho khách thế nào thay vì nài khách mua."],
  ["Khách nhắn tin buổi tối, sáng hôm sau mới có người trả lời.",
   "Người giỏi bán được, nhưng không ai nói được người đó làm khác người khác ở đâu.",
   "Khách nói “để suy nghĩ thêm” là nhân viên kinh doanh dừng, không ai hỏi lại.",
   "Khách đã đóng phí thì không ai liên lạc nữa, cho tới khi khách tự quay lại hoặc không bao giờ quay lại."]),
 ("3", "Nhân sự", "Manpower", "Ai bán?",
  ["Trụ cột này lo cho từng người trong phòng: tuyển ai, người mới làm gì trong 90 ngày đầu, ai kèm, năng lực được chấm thế nào, người giỏi đi lên đâu và vì sao họ ở lại.",
   "Nhân sự rất dễ nhầm với trụ cột Quản lý. Cách phân biệt: Nhân sự nhìn từng người được tuyển, được dạy, được kèm và đi lên thế nào. Quản lý nhìn cả phòng được điều hành ra sao."],
  ["Tuyển theo cảm giác sau một buổi nói chuyện.",
   "Người mới được giao khách ngay tuần đầu, tự học bằng cách ngồi nghe người cũ.",
   "Không ai nói được một nhân viên kinh doanh giỏi cần những năng lực nào, nên đánh giá cuối năm chỉ dựa vào doanh số.",
   "Người giỏi nghỉ việc vì không thấy đường đi lên."]),
 ("4", "Tài chính", "Money", "Trả và chi thế nào?",
  ["Cách trả tiền quyết định nhân viên kinh doanh ưu tiên việc gì. Hoa hồng chỉ tính trên đơn chốt thì nhân viên kinh doanh dồn sức vào khách sắp mua, ít ai chăm khách cần theo lâu. Chỉ tiêu đặt quá cao thì cả phòng biết trước là không đạt, và thôi cố gắng từ giữa tháng.",
   "Trụ cột này có 2 phần. Phần thứ nhất là thu nhập của nhân viên kinh doanh: lương cứng và phần thay đổi, hoa hồng và thưởng, thu nhập theo mức đạt chỉ tiêu, khen thưởng ngoài tiền, quy chế khi 2 người cùng chăm một khách hoặc khi có người nghỉ. Phần thứ hai là chi phí của cả phòng: phòng tiêu bao nhiêu, vào đâu, để có một khách đóng phí.",
   "Giá bán và chính sách bán hàng không nằm ở trụ cột này. Giá là một phần của gói bán nên thuộc trụ cột Thị trường."],
  ["Nhân viên kinh doanh không tự tính được tháng này mình nhận bao nhiêu.",
   "Chính sách thưởng đổi giữa chừng mà không báo trước.",
   "Người chủ không biết mỗi khách đóng phí tốn bao nhiêu chi phí bán hàng.",
   "Có người nghỉ việc là có tranh chấp: khách đang chăm giao cho ai, hoa hồng đơn sau tính cho ai."]),
 ("5", "Công cụ", "Material", "Bán bằng công cụ nào?",
  ["Công cụ gồm nơi giữ dữ liệu khách (thường gọi là CRM), các kênh liên lạc, biểu mẫu, tài liệu gửi khách, trợ lý AI, bàn điều khiển cho quản lý và quyền truy cập.",
   "Công cụ đứng thứ 5, sau Thị trường, Quy trình, Nhân sự và Tài chính. Lý do: công cụ chạy theo cách bán, không phải ngược lại. Chọn phần mềm trước rồi bắt cả phòng bán theo phần mềm là cách tốn tiền nhất mà vẫn không ra kết quả.",
   "Đội ngũ Coach Duy Nguyễn có một công cụ riêng tên Sales OS, dùng để theo dõi khách và việc của phòng kinh doanh. Sales OS chỉ là một phần của trụ cột này, không phải cả mô hình. Doanh nghiệp dùng phần mềm khác vẫn đạt được chuẩn của 7M."],
  ["Thông tin khách nằm rải rác trong Zalo cá nhân của từng nhân viên kinh doanh.",
   "Nhân viên kinh doanh nghỉ là mất luôn lịch sử trao đổi với khách.",
   "Mỗi người tự soạn báo giá theo một mẫu riêng.",
   "Quản lý muốn biết hôm nay có bao nhiêu khách mới thì phải hỏi từng người."]),
 ("6", "Chỉ số", "Measure", "Đo chỉ số nào?",
  ["Có 2 loại chỉ số. Chỉ số kết quả cho biết chuyện đã xảy ra: doanh thu, tỷ lệ chốt, giá trị đơn, khách quay lại. Số liệu theo dõi hằng tuần cho biết chuyện sắp xảy ra: khách được trả lời nhanh hay chậm, bao nhiêu khách qua được từng chặng, việc hẹn với khách có làm đúng hạn không.",
   "Đợi cuối tháng nhìn doanh thu thì đã muộn để sửa. Nhìn số liệu theo dõi hằng tuần thì vẫn còn kịp.",
   "Ngoài 2 loại chỉ số, trụ cột này còn gồm mục tiêu doanh số và cách chia, chỉ số riêng của từng vị trí (KPI), mục tiêu cải tiến của cả phòng trong quý (OKR), dự báo doanh thu và báo cáo."],
  ["Chỉ tiêu năm chia đều cho 12 tháng, không theo mùa bán và năng lực thật của phòng.",
   "Cuối tháng mới biết thiếu doanh số.",
   "Báo cáo nộp đều nhưng không ai dùng để ra quyết định.",
   "Người chủ hỏi tháng này thu về bao nhiêu thì không ai trả lời được bằng một con số."]),
 ("7", "Quản lý", "Management", "Điều hành ra sao?",
  ["Quản lý là trụ cột giữ cho 6 trụ cột trước chạy cùng nhau mỗi ngày. Trụ cột này trả lời: quản lý trực tiếp làm gì mỗi ngày, họp những buổi nào và mỗi buổi gồm gì, ai lo cho cả phòng được kèm đều đặn, quyết định nào quản lý tự làm và quyết định nào phải lên người chủ, phòng giữ những chuẩn gì.",
   "Trụ cột này còn một việc hay bị bỏ qua: đưa cách làm mới vào dùng thật. Viết quy trình mới, mua công cụ mới thì dễ. Khó là sang tuần thứ 6 cả phòng vẫn làm theo. Vì vậy mỗi lần đổi cách làm, quản lý đếm xem mỗi tuần có bao nhiêu người đang làm theo, và kèm từng người tới khi phần lớn phòng làm theo."],
  ["Quản lý là nhân viên kinh doanh giỏi nhất phòng, và dành phần lớn thời gian đi bán thay cho các nhân viên khác.",
   "Họp tuần chỉ để đọc lại số, họp xong không ai nhận việc gì.",
   "Việc gì cũng chờ người chủ quyết.",
   "Quy trình mới áp dụng được 2 tuần rồi mọi người quay lại cách cũ.",
   "Phòng kinh doanh và bộ phận làm dịch vụ đổ lỗi cho nhau khi khách phàn nàn."]),
]
NHOM = {"1": "n0", "2": "n0", "3": "n1", "4": "n1", "5": "n2", "6": "n2", "7": "n2"}
HOI7 = [("Thị trường", "hỏi riêng từng nhân viên kinh doanh khách nào không nên nhận, mọi người có trả lời giống nhau không?"),
 ("Quy trình", "tuần này cả phòng có đang làm theo một quy trình bán chung không?"),
 ("Nhân sự", "người mới có được một người cụ thể kèm trong 90 ngày đầu không?"),
 ("Tài chính", "mỗi nhân viên kinh doanh có tự tính được thu nhập tháng này của mình không?"),
 ("Công cụ", "một nhân viên kinh doanh nghỉ việc, công ty có giữ được toàn bộ thông tin khách người đó đang chăm không?"),
 ("Chỉ số", "giữa tháng, phòng đã biết tháng này đủ hay thiếu doanh số chưa?"),
 ("Quản lý", "họp tuần của phòng có kết thúc bằng việc giao cho từng người không?")]
PDF = '<a class="nut nut-vien" href="tai-lieu/gioi-thieu-mo-hinh-7m.pdf" download>Tải PDF đầy đủ về Mô hình 7M <span class="mt" aria-hidden="true">&darr;</span></a>'
CHAM = '<a class="nut nut-v" href="danh-gia-phong-kinh-doanh/">Tự chấm điểm phòng kinh doanh của bạn <span class="mt" aria-hidden="true">&rarr;</span></a>'

def trang(dau_trang, banh_xe, nhom_html):
    chuan = json.load(open("assets/chuan-7m.json"))
    tru = "".join(f'''<article class="tru7 hien" id="tru-{so}">
      <div class="tru7-dau"><span class="trang-thai {NHOM[so]}"><i aria-hidden="true"></i>{so} · {en}</span><h3>Trụ cột {so}. {ten}</h3><p class="tru7-hoi">{hoi}</p></div>
      <div class="tru7-than">{"".join(f"<p>{p}</p>" for p in mo)}</div>
      <div class="tru7-hai">
        <div><h4>{len(chuan[so])} chuẩn</h4><ol>{"".join(f"<li><b>{c[0]}</b>{c[1]}</li>" for c in chuan[so])}</ol></div>
        <div><h4>Dấu hiệu phòng đang thiếu trụ cột này</h4><ul>{"".join(f"<li>{d}</li>" for d in dh)}</ul></div>
      </div>
    </article>''' for so, ten, en, hoi, mo, dh in TRU)
    hoi = "".join(f"<li><b>{t}:</b> {c}</li>" for t, c in HOI7)
    return dau_trang("Phương pháp", "Mô hình Phòng kinh doanh tiêu chuẩn 7M",
      "7 trụ cột, 51 chuẩn và cách bắt đầu. Trang này dành cho người chủ và quản lý kinh doanh. Bản PDF đầy đủ tải ở cuối trang.",
      anh="img/dau-trang/phuong-phap.webp", vi_tri="50% 40%") + f'''
<section class="phan bd hoa-van" id="ket-o-dau">
  <div class="doc7 hien">
    <p class="mono">Phòng kinh doanh kẹt ở đâu</p>
    <h2>Tuyển thêm người hay mua phần mềm mới, doanh số vẫn đứng yên</h2>
    <p>Khi doanh số chững lại, 2 cách dễ nghĩ tới nhất là tuyển thêm nhân viên kinh doanh hoặc mua một phần mềm mới. Cả 2 cách đều tốn tiền, và nhiều khi doanh số vẫn đứng yên.</p>
    <p>Lý do là phòng kinh doanh không chạy bằng một thứ. Nó chạy bằng nhiều thứ nối vào nhau: bán cho ai, bán theo các bước nào, ai bán, nhân viên kinh doanh được trả thế nào, dùng công cụ gì, đo bằng con số nào và ai điều hành. Một chỗ lỏng thì cả phòng chậm theo.</p>
    <p>Mua phần mềm khi chưa có quy trình thì phần mềm chỉ ghi lại sự lộn xộn nhanh hơn. Tuyển thêm người khi chưa có cách kèm thì người mới học lại đúng những thói quen cũ của người cũ. Tăng hoa hồng khi chưa rõ khách mục tiêu thì nhân viên kinh doanh chạy theo mọi khách, kể cả khách không nên nhận.</p>
    <p>Mô hình Phòng kinh doanh tiêu chuẩn 7M xếp những thứ đó thành 7 trụ cột. Tên tiếng Anh của cả 7 trụ cột đều bắt đầu bằng chữ M, nên mô hình gọi tắt là 7M. Người chủ nhìn cả phòng kinh doanh trên một trang, biết chỗ nào đang lỏng, và sửa đúng những chỗ đó trước.</p>
  </div>
</section>
<section class="phan bd phan-sang" id="mo-hinh-7m">
  <div class="m7 hien">
    <div class="m7-hinh">{banh_xe}</div>
    <div>
      <p class="mono">7 trụ cột</p>
      <h2>Xếp theo đúng thứ tự dựng một phòng kinh doanh</h2>
      <p class="m7-dan">Trước hết phải rõ bán gì, cho ai. Có khách mục tiêu rồi mới viết được cách bán. Có cách bán rồi mới biết cần tuyển người thế nào, trả họ ra sao. Công cụ đến sau, vì công cụ chạy theo cách bán. Chỉ số cho biết cả phòng có đang chạy đúng không. Quản lý giữ cho mọi thứ chạy đều mỗi ngày.</p>
      {nhom_html}
      <p class="m7-nut">{PDF}</p>
    </div>
  </div>
</section>
<section class="phan bd hoa-van" id="tung-tru-cot">
  <div class="phan-dau hien">
    <p class="mono">Từng trụ cột</p>
    <h2>Mỗi trụ cột trả lời một câu hỏi</h2>
    <p>Phần dưới cho biết từng trụ cột trả lời câu hỏi gì, gồm những chuẩn nào, và phòng đang thiếu trụ cột đó thì thường thấy chuyện gì.</p>
  </div>
  <div class="tru7-bo">{tru}</div>
</section>
<section class="phan bd phan-sang" id="tu-kiem-tra">
  <div class="doc7 hien">
    <p class="mono">Tự kiểm tra nhanh trong 5 phút</p>
    <h2>7 câu, mỗi câu ứng với một trụ cột</h2>
    <p>Trả lời theo việc phòng đang làm thật trong tháng này, không theo việc phòng định làm.</p>
    <ol class="hoi7">{hoi}</ol>
    <p>Câu nào trả lời “chưa” thì trụ cột đó cần chấm kỹ trước. Nhiều câu cùng “chưa” thì bắt đầu từ trụ cột có số nhỏ hơn, vì trụ cột sau dựa vào trụ cột trước. Đây chỉ là cách đoán nhanh, chưa thay được việc chấm theo 51 chuẩn.</p>
  </div>
</section>
<section class="phan bd hoa-van" id="bat-dau">
  <div class="doc7 hien">
    <p class="mono">Bắt đầu từ đâu</p>
    <h2>Không phòng nào cần làm cả 51 chuẩn cùng lúc</h2>
    <p>Làm hết một lượt thì không phòng nào theo kịp, và sau 1 tháng mọi thứ lại về như cũ. Cách đi đề xuất có 4 bước:</p>
    <ol class="buoc4">
      <li><b>Chấm cả phòng theo 51 chuẩn.</b> Người chủ và quản lý chấm cùng nhau, mỗi chuẩn đạt hay chưa đạt.</li>
      <li><b>Chọn 2 tới 3 chuẩn chưa đạt</b> có ảnh hưởng nhiều nhất tới doanh thu.</li>
      <li><b>Dựng phần đó:</b> điền mẫu, dùng thử trong phòng, kèm tới khi cả phòng làm theo.</li>
      <li><b>Đo lại sau vài tuần,</b> rồi mới sang chuẩn tiếp theo.</li>
    </ol>
    <h3>Đội ngũ Coach Duy Nguyễn làm gì, doanh nghiệp làm gì</h3>
    <p>Đội ngũ Coach Duy Nguyễn thiết kế tiêu chuẩn, tiêu chí và cùng doanh nghiệp điền bản thiết kế cho từng trụ cột. Ví dụ với trụ cột Nhân sự, đội ngũ không tuyển người thay doanh nghiệp, mà cùng doanh nghiệp đặt tiêu chuẩn tuyển, chương trình cho người mới và lộ trình thăng tiến.</p>
    <p>Việc tuyển, đào tạo, bán và quản lý hằng ngày vẫn do phòng kinh doanh của doanh nghiệp làm. Đích của 7M là phòng kinh doanh tự chạy được, không phải việc gì cũng chờ người chủ.</p>
    <div class="moi-nut doc7-nut">{CHAM}{PDF}</div>
  </div>
</section>'''
