# -*- coding: utf-8 -*-
"""Bốn trang công cụ AI thu người đăng ký (D62, 10/10/2026).

Chữ trên trang đọc thẳng từ bốn tệp nội dung trong xưởng Next Gen Founder,
không chép sang đây, để chữ chỉ có một bản chuẩn. Sửa chữ thì sửa tệp .md
rồi chạy lại dung.py. Lấy Phần 1, 2, 3 và 7 của mỗi tệp; Phần 4, 5, 6 là
việc của phiên khác, không lên trang.

Phần mở (Google đọc được): tiêu đề, lời dẫn, cách dùng, hai bài mẫu.
Phần sau biểu mẫu nằm trong thẻ <template>, chỉ dựng ra khi người đọc đã
điền biểu mẫu năm ô. Biểu mẫu gửi vào đúng biểu mẫu Pancake của /tham-gia.
Số liệu doanh nghiệp trong phiếu chỉ lưu trên máy người dùng.
"""
import html, json, os, re

NGUON = "/Users/coachduynguyen/Codex_Projects/Next Gen Founder/deliverables/"
CONG_CU = [
    # (tên tệp trang, tệp nội dung)
    ("danh-gia-ke-hoach-2027", "NGF - Tài liệu thu lead 1, soi kế hoạch kinh doanh 2027 bằng AI.md"),
    ("so-khach-du-luong-co-lai", "NGF - Tài liệu thu lead 2, tính số khách để đủ lương và có lãi bằng AI.md"),
    ("quy-trinh-tu-cach-lam", "NGF - Tài liệu thu lead 3, biến cách làm trong đầu người chủ thành quy trình bằng AI.md"),
    ("khach-kho-tinh", "NGF - Tài liệu thu lead 4, để AI đóng vai khách khó tính kiểm cách tư vấn của nhân viên.md"),
    ("phan-bien-quyet-dinh", "NGF - Tài liệu thu lead 5, để AI hỏi khó một quyết định lớn trước khi chốt.md"),
    ("du-bao-dong-tien-13-tuan", "NGF - Tài liệu thu lead 6, dự báo dòng tiền 13 tuần trong kinh doanh.md"),
    ("lai-that-tung-goi", "NGF - Tài liệu thu lead 7, tính lãi thật của từng gói sản phẩm, dịch vụ.md"),
    ("chi-phi-quang-cao-moi-khach", "NGF - Tài liệu thu lead 8, tính chi phí quảng cáo cho mỗi khách mua hàng.md"),
    ("khach-den-khong-deu", "NGF - Tài liệu thu lead 9, tìm nguyên nhân khách hàng đến không đều.md"),
    ("khach-cu-quay-lai", "NGF - Tài liệu thu lead 10, kế hoạch chăm sóc để khách cũ quay lại mua.md"),
    ("khach-gioi-thieu-khach", "NGF - Tài liệu thu lead 11, cách đề nghị khách hàng giới thiệu khách mới.md"),
    ("loi-gioi-thieu-doanh-nghiep", "NGF - Tài liệu thu lead 12, viết lời giới thiệu doanh nghiệp theo nỗi lo của khách.md"),
    ("tu-van-khach-chua-mua", "NGF - Tài liệu thu lead 21, rà soát những buổi tư vấn khách chưa mua.md"),
    ("khach-noi-gia-cao", "NGF - Tài liệu thu lead 22, thống nhất cách trả lời khi khách nói giá cao.md"),
    ("giao-viec-cho-quan-ly", "NGF - Tài liệu thu lead 17, giao việc cho quản lý mà vẫn nắm được tình hình.md"),
    ("lich-lam-viec-nguoi-chu", "NGF - Tài liệu thu lead 18, rà soát lịch làm việc một tuần của người chủ.md"),
    ("chu-vang-hai-tuan", "NGF - Tài liệu thu lead 19, kiểm tra doanh nghiệp khi người chủ vắng mặt hai tuần.md"),
    ("diem-nghen-khi-chung-lai", "NGF - Tài liệu thu lead 20, tìm điểm nghẽn khi doanh nghiệp chững lại.md"),
    ("ket-qua-tung-vi-tri", "NGF - Tài liệu thu lead 13, mô tả kết quả công việc cho từng vị trí.md"),
    ("dao-tao-nhan-vien-moi", "NGF - Tài liệu thu lead 14, kế hoạch đào tạo nhân viên mới trong 30 ngày đầu.md"),
    ("trao-doi-kho-voi-nhan-vien", "NGF - Tài liệu thu lead 15, chuẩn bị buổi trao đổi khó với nhân viên.md"),
    ("phong-van-tuyen-dung", "NGF - Tài liệu thu lead 16, bộ câu hỏi phỏng vấn để tuyển đúng người.md"),
    ("cau-chuyen-thuong-hieu", "NGF - Tài liệu thu lead 23, tìm câu chuyện thật để xây dựng thương hiệu cá nhân.md"),
    ("hoso-doanh-nghiep-chatgpt", "NGF - Tài liệu thu lead 24, hồ sơ doanh nghiệp dùng cho ChatGPT.md"),
    ("ke-hoach-kinh-doanh-mot-trang", "NGF - Tài liệu thu lead 25, lập kế hoạch kinh doanh năm 2027 trong một trang.md"),
]
# Hình minh họa đầu trang, dựng bằng HTML từ số của bài mẫu thứ nhất trong tệp
# nội dung. Mỗi trang một kiểu hình. Đổi số trong bài mẫu thì sửa luôn ở đây.
HINH = {
 "danh-gia-ke-hoach-2027": dict(kieu="cot", tieu="Tháng thấp nhất năm 2027, khi mở thêm cơ sở thứ ba",
   cot=[("Doanh thu tháng 7", 260, "260 triệu"), ("Tổng chi tháng 7, khi có cơ sở thứ ba", 439, "439 triệu")],
   ket="Tháng đó lỗ khoảng 179 triệu. Muốn qua hai tháng xấu liên tiếp, chủ cần để dành khoảng 360 triệu.", vd="Chuỗi spa hai cơ sở",
   boi="Chủ một chuỗi spa hai cơ sở muốn năm 2027 tăng doanh thu từ 4,2 tỷ lên 6 tỷ và mở thêm cơ sở thứ ba vào quý 2. Đưa kế hoạch cho AI, một điều AI tìm ra nằm ở tháng 7, tháng doanh thu thấp nhất năm nay."),
 "so-khach-du-luong-co-lai": dict(kieu="pheu", tieu="Muốn có lãi 40 triệu mỗi tháng, phải có bao nhiêu khách",
   tang=[("Người mới tiếp cận", "400", "576"), ("Cuộc tư vấn", "100", "144"), ("Khách mới", "30", "43")],
   ket="Thêm 13 khách mới mỗi tháng, tức 176 người tiếp cận nữa", vd="Nhà hàng hai cơ sở",
   boi="Chủ một nhà hàng hai cơ sở, khách chủ yếu đặt tiệc trước, đang lỗ khoảng 20 triệu mỗi tháng và muốn còn lại 40 triệu lãi. AI tính ngược từ mốc đó ra số người phải có ở từng bước."),
 "quy-trinh-tu-cach-lam": dict(kieu="gio", tieu="Việc báo giá: chủ lấy lại được bao nhiêu giờ mỗi tuần",
   buoc=[("12 giờ", "chủ đang tự làm"), ("9 giờ", "chuyển được cho nhân viên"), ("5,7 giờ", "chủ lấy lại mỗi tuần")],
   ket="Chưa tới 10 giờ chủ muốn, vì người nhận việc chưa đủ giờ rảnh", vd="Công ty phần mềm 12 người",
   boi="Chủ một công ty phần mềm 12 người làm 55 giờ mỗi tuần, riêng việc báo giá và chốt yêu cầu với khách đã mất 12 giờ. AI giúp chủ viết cách làm đó thành quy trình để giao cho người khác."),
 "phan-bien-quyet-dinh": dict(kieu="cot", tieu="Nhận hợp đồng 9 tỷ: tiền cần có trước khi đợt thanh toán đầu tiên về",
   cot=[("Tiền dự phòng đang có", 1.2, "1,2 tỷ"), ("Tiền cần có trong 3 tháng đầu", 2.77, "2,77 tỷ")],
   ket="Thiếu khoảng 1,57 tỷ nếu chủ đầu tư không tạm ứng", vd="Công ty xây dựng nhà phố",
   boi="Chủ một công ty xây dựng nhà phố đang cân nhắc nhận hợp đồng 9 tỷ, gấp ba hợp đồng lớn nhất từng làm. Trước khi ký, AI tính số tiền phải ứng ra trước khi chủ đầu tư trả đợt đầu."),
 "du-bao-dong-tien-13-tuan": dict(kieu="cot", tieu="Số dư tài khoản tuần 11/01 tới 17/01/2027",
   cot=[("Số dư cuối tuần", 104, "104 triệu"), ("Mức chủ muốn luôn giữ", 150, "150 triệu")],
   ket="Thiếu 46 triệu so với mức muốn giữ, dù trên sổ mỗi tháng vẫn lãi khoảng 67 triệu.", vd="Công ty tổ chức sự kiện 18 người",
   boi="Chủ một công ty tổ chức sự kiện 18 người, trên sổ mỗi tháng lãi khoảng 67 triệu. Đưa thu chi 13 tuần tới cho AI, AI chỉ ra tuần giữa tháng 1, khi lương tháng 1 và thưởng tháng lương thứ 13 rơi vào hai tuần liền nhau."),
 "ket-qua-tung-vi-tri": dict(kieu="cot", tieu="Đăng ký khóa học của hai tư vấn viên trong một tháng",
   cot=[("Đăng ký của An", 21, "21 đăng ký"), ("Đăng ký của Bình", 9, "9 đăng ký")],
   ket="Bình ít hơn An 80 liên hệ, tức 13%, nhưng ít hơn 12 đăng ký, tức 57%.", vd="Trung tâm tiếng Anh trẻ em",
   boi="Một trung tâm tiếng Anh trẻ em 14 người có ba tư vấn viên tuyển sinh, chủ đang đánh giá bằng số liên hệ ghi trong sổ. Đưa số tháng vừa rồi cho AI, AI tách từng người theo lượt hẹn học thử, lượt đến học thử và số đăng ký."),
 "dao-tao-nhan-vien-moi": dict(kieu="cot", tieu="Nhân viên bán hàng mới trong 12 tháng: số người nhận và số còn sau 90 ngày",
   cot=[("Người mới nhận trong 12 tháng", 24, "24 người"), ("Còn lại sau 90 ngày", 13, "13 người")],
   ket="11 người nghỉ trong 90 ngày, 7 người trong số đó nghỉ ở tuần 2 và tuần 3.", vd="Chuỗi cửa hàng thời trang",
   boi="Một chuỗi 6 cửa hàng thời trang nhận 24 nhân viên bán hàng mới trong 12 tháng, chỉ 13 người còn sau 90 ngày. Đưa số cho AI, AI chỉ ra người mới hay nghỉ ở tuần nào và soạn lịch 30 ngày."),
 "trao-doi-kho-voi-nhan-vien": dict(kieu="cot", tieu="Báo cáo công nợ của nhân viên bán giỏi nhất trong 12 tuần",
   cot=[("Số tuần nộp trễ", 9, "9 tuần"), ("Số tuần nộp đúng hạn", 3, "3 tuần")],
   ket="Ba khách quá hạn thanh toán, tổng 186 triệu. Trong 5 lượt tập với AI, 3 câu của chủ dễ làm người nghe tự ái.", vd="Công ty phân phối thực phẩm khô",
   boi="Một công ty phân phối thực phẩm khô 31 người có nhân viên bán giỏi nhất, doanh số 410 triệu mỗi tháng, nhưng nộp báo cáo công nợ trễ. Chủ ngại nói thẳng vì sợ người này nghỉ, nên tập trước với AI đóng vai chính nhân viên."),
 "phong-van-tuyen-dung": dict(kieu="cot", tieu="Giáo viên mới trong ba lần tuyển gần nhất: số người nhận và số còn sau 90 ngày",
   cot=[("Người nhận việc", 9, "9 người"), ("Còn lại sau 90 ngày", 5, "5 người")],
   ket="4 người nghỉ trong 90 ngày, tốn khoảng 56 triệu tuyển và đào tạo lại.", vd="Trường mầm non tư thục",
   boi="Một trường mầm non tư thục hai cơ sở, 46 người, nhận 9 giáo viên trong ba lần tuyển gần nhất, chỉ 5 người còn sau 90 ngày. Đưa số cho AI, AI chỉ ra bộ câu hỏi hiện nay mới hỏi quan điểm và dựng lại bộ câu hỏi về việc đã làm."),
 "cau-chuyen-thuong-hieu": dict(kieu="cot", tieu="Mười câu chuyện đã chọn: chủ hiện lên như thế nào",
   cot=[("Chuyện chủ cứu tình thế", 8, "8 chuyện"), ("Chuyện chủ làm sai rồi sửa", 2, "2 chuyện")],
   ket="8 trên 10 chuyện chủ hiện lên như người cứu tình thế, chỉ 2 chuyện là chủ làm sai và sửa", vd="Công ty nội thất 14 người",
   boi="Chủ một công ty thiết kế và thi công nội thất 14 người muốn bắt đầu đăng bài trên Facebook nhưng không biết kể gì. Để AI phỏng vấn, AI thu thập 22 chuyện thô, chọn ra mười chuyện rồi chỉ ra chỗ lệch trong bộ mười chuyện đó."),
 "hoso-doanh-nghiep-chatgpt": dict(kieu="cot", tieu="Số chỗ ChatGPT phải tự giả định khi thử ba việc thật",
   cot=[("Với bản hồ sơ nháp", 7, "7 chỗ"), ("Mục tiêu sau khi sửa", 2, "2 chỗ")],
   ket="Sửa ba lỗ hổng trong hồ sơ để số chỗ ChatGPT phải tự giả định giảm từ 7 xuống 2", vd="Công ty phân phối thực phẩm đông lạnh 25 người",
   boi="Chủ một công ty phân phối thực phẩm đông lạnh 25 người có 5 người dùng ChatGPT, mỗi lần đều phải giới thiệu lại công ty. AI hỏi mười câu, soạn hồ sơ rồi thử ba việc thật. Với bản nháp đầu, ChatGPT phải tự giả định ở 7 chỗ."),
 "ke-hoach-kinh-doanh-mot-trang": dict(kieu="cot", tieu="Số dư tiền cuối tháng 3 năm 2027, tháng mua máy pha mới",
   cot=[("Số dư cuối tháng 3", 34, "34 triệu"), ("Mức chủ muốn luôn giữ", 50, "50 triệu")],
   ket="Thiếu 16 triệu so với mức muốn giữ, dù cả năm 2027 vẫn lãi khoảng 381 triệu", vd="Quán cà phê hai cơ sở",
   boi="Chủ một quán cà phê hai cơ sở muốn doanh thu năm 2027 đạt 4,5 tỷ, tăng 25%, nhưng chưa có kế hoạch nào viết ra. Trả lời từng phần AI hỏi, chủ thấy tháng 3, tháng mua máy pha mới 180 triệu, là lúc tiền xuống thấp nhất."),
 "lai-that-tung-goi": dict(kieu="cot", tieu="Một học viên gói luyện thi cam kết: lãi gộp và tiền công",
   cot=[("Lãi gộp của một học viên", 5.55, "5,55 triệu"), ("Tiền công nhân viên và chủ", 5.9, "5,9 triệu")],
   ket="Mỗi học viên làm trung tâm lỗ 0,35 triệu, cả tháng lỗ 7 triệu, dù lãi gộp trên sổ là 61,7% giá bán.", vd="Trung tâm ngoại ngữ 14 người",
   boi="Chủ một trung tâm ngoại ngữ 14 người bán bốn gói, cuối tháng chỉ còn 71,6 triệu, thấp hơn mức muốn 35,5 triệu. Cộng đủ tiền công nhân viên và thời gian của chủ vào từng gói, AI chỉ ra gói luyện thi cam kết đang lỗ."),
 "chi-phi-quang-cao-moi-khach": dict(kieu="cot", tieu="Một khách mua qua Facebook: tiền quảng cáo và lãi đơn đầu",
   cot=[("Tiền quảng cáo cho mỗi khách mua", 2.90, "2,90 triệu"), ("Lãi gộp của đơn đầu", 2.40, "2,40 triệu")],
   ket="Mỗi khách mua qua Facebook làm cửa hàng lỗ 0,50 triệu ở đơn đầu, dù kênh này nhận 53,6% tin nhắn.", vd="Cửa hàng nội thất",
   boi="Chủ một cửa hàng nội thất chạy ba kênh quảng cáo, tháng nào cũng đầy tin nhắn. Tách số liệu theo từng kênh, AI chỉ ra kênh nhiều tin nhắn nhất không phải kênh nhiều người mua nhất."),
 "khach-den-khong-deu": dict(kieu="cot", tieu="Số khách tháng 6 so với số khách chủ muốn có",
   cot=[("Số khách tháng 6", 74, "74 khách"), ("Số khách chủ muốn có", 110, "110 khách")],
   ket="Hụt 36 khách, trong đó khách từ quảng cáo thấp hơn mức trung bình của chính nó khoảng 24 khách.", vd="Thẩm mỹ viện 12 người",
   boi="Chủ một thẩm mỹ viện có 4 trong 6 tháng gần nhất hụt so với mục tiêu 110 khách. Tách riêng từng nguồn khách, AI chỉ ra tháng 6 hụt đúng tháng tiền quảng cáo xuống 5 triệu."),
 "khach-cu-quay-lai": dict(kieu="cot", tieu="Danh sách 1.200 khách cũ: bao nhiêu người đã quá thời gian mua lại",
   cot=[("Đã quá 2 tháng chưa mua lại", 1020, "1.020 khách"), ("Mới mua trong 3 tháng qua", 180, "180 khách")],
   ket="85% danh sách đã quá thời gian thông thường giữa hai lần mua, mà cả danh sách chỉ nhận một tin chung mỗi tháng.", vd="Cửa hàng mẹ và bé",
   boi="Chủ một cửa hàng mẹ và bé có 1.200 khách cũ, mỗi tháng gửi một tin Zalo chung. Chia danh sách theo lần mua gần nhất, AI chỉ ra phần lớn khách đã quá thời gian họ thường mua lại."),
 "khach-gioi-thieu-khach": dict(kieu="cot", tieu="Khách đã khen và đủ điều kiện để hỏi giới thiệu, so với số đã được hỏi",
   cot=[("Khách đã khen, đủ điều kiện để hỏi", 27, "27 khách"), ("Trong số đó đã được hỏi", 5, "5 khách")],
   ket="Còn 22 khách đủ điều kiện mà chưa ai hỏi giới thiệu", vd="Công ty nội thất 14 người",
   boi="Chủ một công ty thiết kế và thi công nội thất 14 người ký khoảng 46 hợp đồng mới mỗi năm, trong đó chỉ 6 hợp đồng đến từ khách giới thiệu. Đưa lời khen của khách cho AI, AI chỉ ra trong 27 khách đủ điều kiện để hỏi, mới có 5 người từng được hỏi."),
 "loi-gioi-thieu-doanh-nghiep": dict(kieu="cot", tieu="Số chữ của lời giới thiệu cũ và bản mới viết từ nỗi lo của khách",
   cot=[("Lời giới thiệu cũ", 37, "37 chữ"), ("Bản mới", 26, "26 chữ")],
   ket="Ngắn hơn 11 chữ. Bản mới nói đúng hai nỗi lo mà 2 trên 3 khách đã nhắc tới", vd="Công ty dịch vụ kế toán 12 người",
   boi="Chủ một công ty dịch vụ kế toán thuế 12 người đang giới thiệu công ty bằng một câu 37 chữ, trong đó có 6 cụm doanh nghiệp nào cũng nói được. Đưa lời của ba khách gần nhất cho AI, AI viết lại một bản ngắn hơn, đi từ nỗi lo có hai khách nhắc tới."),
 "tu-van-khach-chua-mua": dict(kieu="gio", tieu="Năm buổi tư vấn khách chưa đồng ý, đối chiếu với ba bước khách cần đi qua",
   buoc=[("3 trên 5", "buổi đủ Chạm Động Lực"), ("0 trên 5", "buổi đủ Chạm Điểm Nghẽn"), ("5 trên 5", "buổi đủ Chạm Con Đường")],
   ket="Cả năm buổi cùng thiếu Chạm Điểm Nghẽn, nên đây là lỗ hổng cố định trong cách tư vấn", vd="Phòng khám nha khoa 12 người",
   boi="Chủ một phòng khám nha khoa 3 bác sĩ có khoảng 40 buổi tư vấn mỗi tháng và khách đồng ý 14 buổi. Đưa năm buổi gần nhất mà khách xin suy nghĩ thêm cho AI, AI đối chiếu từng buổi với ba bước khách cần đi qua trước khi tự quyết định."),
 "khach-noi-gia-cao": dict(kieu="cot", tieu="Lãi gộp mỗi tháng của công ty cửa nhôm kính, khi không giảm giá và khi giảm 8% cho 15 đơn",
   cot=[("Nếu không giảm giá", 368.64, "368,64 triệu"), ("Thực tế khi giảm 8% cho 15 đơn", 311.04, "311,04 triệu")],
   ket="Nhường lại 57,6 triệu lãi gộp mỗi tháng, mà giá sau giảm vẫn cao hơn đối thủ 3,36 triệu", vd="Công ty cửa nhôm kính 12 người",
   boi="Chủ một công ty bán và lắp cửa nhôm kính 12 người chốt 24 đơn mỗi tháng, trong đó 15 đơn được nhân viên giảm 8% khi khách nói đắt. Đưa số liệu cho AI, AI tính ra mỗi tháng công ty nhường lại bao nhiêu lãi gộp."),
 "giao-viec-cho-quan-ly": dict(kieu="cot", tieu="Giờ chủ duyệt đơn đặt hàng mỗi tuần",
   cot=[("Hiện nay, duyệt cả 52 đơn", 6.1, "6,1 giờ"), ("Sau khi chia ba mức, duyệt 4 đơn trên 80 triệu", 0.8, "0,8 giờ")],
   ket="Lấy lại khoảng 5,3 giờ mỗi tuần, vì 48 trong 52 đơn không cần chủ trả lời trước", vd="Công ty phân phối thực phẩm khô 38 người",
   boi="Chủ một công ty phân phối thực phẩm khô 38 người duyệt từng đơn đặt hàng, mỗi tuần 52 đơn. Đưa số đơn và giá trị cho AI, AI chia việc thành ba mức theo giá trị đơn và tính chủ còn phải trả lời bao nhiêu đơn."),
 "lich-lam-viec-nguoi-chu": dict(kieu="cot", tieu="Giờ mỗi tuần dành cho kết quả quan trọng nhất của quý",
   cot=[("Hiện nay", 3, "3 giờ"), ("Chủ muốn dành", 12, "12 giờ")],
   ket="Thiếu 9 giờ mỗi tuần, trong khi lấy lại được khoảng 17,2 giờ nên đủ giờ để bù", vd="Công ty vệ sinh công nghiệp 46 người",
   boi="Chủ một công ty vệ sinh công nghiệp 46 người làm 58 giờ mỗi tuần. Đưa lịch tuần cho AI, AI chia từng việc thành ba nhóm và chỉ ra kế hoạch nhận khách tòa nhà văn phòng hạng A, kết quả quan trọng nhất của quý, chỉ có 3 giờ."),
 "chu-vang-hai-tuan": dict(kieu="cot", tieu="Tiền thu bị giữ lại khi chủ vắng 02/11 tới 15/11/2026",
   cot=[("Tiền thu chờ chủ ký hoặc gọi", 1060, "1.060 triệu"), ("Doanh thu 10 ngày làm việc", 850, "850 triệu")],
   ket="Tiền thu bị giữ lớn hơn doanh thu 10 ngày làm việc 210 triệu, trong lúc lương 380 triệu vẫn tới hạn", vd="Công ty thi công xây dựng 31 người",
   boi="Chủ một công ty thi công xây dựng 31 người dự định vắng hai tuần. Đưa việc, khách và khoản tiền của hai tuần đó cho AI, AI chỉ ra mọi chữ ký và quyết định đều đang chờ chủ."),
 "diem-nghen-khi-chung-lai": dict(kieu="cot", tieu="Số bản báo giá gửi đi mỗi quý, quý 4/2025 so với quý 3/2026",
   cot=[("Quý 4/2025", 52, "52 bản"), ("Quý 3/2026", 30, "30 bản")],
   ket="Giảm 22 bản (42%) trong khi tỷ lệ chốt vẫn gần 27%", vd="Công ty bao bì in ấn 34 người",
   boi="Chủ một công ty bao bì in ấn 34 người, doanh thu bốn quý quanh 6,1 tỷ, đã đổi mẫu bao bì và chạy quảng cáo. Trả lời AI từng câu hỏi, AI chỉ ra số báo giá gửi đi giảm mạnh còn các số khác gần như đứng yên."),
 "khach-kho-tinh": dict(kieu="bang", tieu="Điểm luyện của bốn nhân viên với bốn kiểu khách khó",
   cot=["So sánh giá", "Hỏi người khác", "Từng bị làm hỏng", "Im lặng"],
   hang=[("An", [4, 6, 8, 3]), ("Bình", [5, 5, 7, 4]), ("Chi", [7, 6, 8, 6]), ("Dũng", [3, 4, 6, 2])],
   ket="Cả đội ngũ yếu nhất với khách im lặng và khách so sánh giá", vd="Công ty dịch vụ kế toán",
   boi="Một công ty dịch vụ kế toán có bốn nhân viên tư vấn, tỷ lệ chốt khoảng 22%. AI đóng vai bốn kiểu khách khó, từng nhân viên tập trả lời, rồi AI chấm điểm trên thang 10."),
}

def hinh(ma):
    h = HINH.get(ma)
    if not h:
        return ""
    if h["kieu"] == "cot":
        lon = max(v for _, v, _ in h["cot"])
        than = '<div class="hh-cot">%s</div>' % "".join(
            '<div class="hh-c"><span class="hh-so">%s</span><i style="--h:%.2f"></i><span class="hh-nhan">%s</span></div>'
            % (chu, v / lon, ten) for ten, v, chu in h["cot"])
    elif h["kieu"] == "pheu":
        than = '<div class="hh-pheu">%s</div>' % "".join(
            '<div class="hh-t" style="--w:%d%%"><span>%s</span><b>%s <em>&rarr;</em> %s</b></div>'
            % (100 - i * 18, ten, cu, moi) for i, (ten, cu, moi) in enumerate(h["tang"]))
        than += '<p class="hh-chu">Hiện nay &rarr; mốc có lãi</p>'
    elif h["kieu"] == "gio":
        than = '<div class="hh-gio">%s</div>' % '<span class="hh-mui" aria-hidden="true">&rarr;</span>'.join(
            '<div><b>%s</b><span>%s</span></div>' % b for b in h["buoc"])
    else:
        than = '<table class="hh-bang"><thead><tr><th></th>%s</tr></thead><tbody>%s</tbody></table>' % (
            "".join("<th>%s</th>" % c for c in h["cot"]),
            "".join('<tr><th>%s</th>%s</tr>' % (ten, "".join('<td style="--p:%.2f">%d</td>' % (d / 10, d) for d in ds))
                    for ten, ds in h["hang"]))
    return ('<p class="hh-boi">%s</p><figure class="hh hh--%s"><figcaption><span class="hh-vd">Ví dụ · %s</span>%s</figcaption>%s'
            '<p class="hh-ket">%s</p></figure>' % (h["boi"], h["kieu"], h["vd"], h["tieu"], than, h["ket"]))

# Chủ đề của từng công cụ, dùng chung tên chủ đề với blog để cả website chỉ có một cách chia.
CHU_DE = {"danh-gia-ke-hoach-2027": "Điểm nghẽn của người sáng lập", "so-khach-du-luong-co-lai": "Bán hàng và phòng kinh doanh",
          "quy-trinh-tu-cach-lam": "Hệ thống tăng trưởng", "khach-kho-tinh": "Bán hàng và phòng kinh doanh",
          "phan-bien-quyet-dinh": "Điểm nghẽn của người sáng lập", "du-bao-dong-tien-13-tuan": "Hệ thống tăng trưởng",
          "lai-that-tung-goi": "Hệ thống tăng trưởng", "chi-phi-quang-cao-moi-khach": "Bán hàng và phòng kinh doanh",
          "khach-den-khong-deu": "Bán hàng và phòng kinh doanh", "khach-cu-quay-lai": "Bán hàng và phòng kinh doanh",
          "khach-gioi-thieu-khach": "Bán hàng và phòng kinh doanh", "loi-gioi-thieu-doanh-nghiep": "Thương hiệu của người sáng lập",
          "tu-van-khach-chua-mua": "Bán hàng và phòng kinh doanh", "khach-noi-gia-cao": "Bán hàng và phòng kinh doanh",
          "giao-viec-cho-quan-ly": "Điểm nghẽn của người sáng lập", "lich-lam-viec-nguoi-chu": "Điểm nghẽn của người sáng lập",
          "chu-vang-hai-tuan": "Hệ thống tăng trưởng", "diem-nghen-khi-chung-lai": "Điểm nghẽn của người sáng lập",
          "ket-qua-tung-vi-tri": "Hệ thống tăng trưởng", "dao-tao-nhan-vien-moi": "Hệ thống tăng trưởng",
          "trao-doi-kho-voi-nhan-vien": "Điểm nghẽn của người sáng lập", "phong-van-tuyen-dung": "Hệ thống tăng trưởng",
          "cau-chuyen-thuong-hieu": "Thương hiệu của người sáng lập", "hoso-doanh-nghiep-chatgpt": "AI cho người chủ",
          "ke-hoach-kinh-doanh-mot-trang": "Điểm nghẽn của người sáng lập"}

# Mã YouTube của video Coach Duy làm thật, khoảng 5 phút. Để trống thì trang không có khối video.
VIDEO = {"danh-gia-ke-hoach-2027": "", "so-khach-du-luong-co-lai": "", "quy-trinh-tu-cach-lam": "", "khach-kho-tinh": "", "phan-bien-quyet-dinh": "", "du-bao-dong-tien-13-tuan": "", "cau-chuyen-thuong-hieu": "", "ket-qua-tung-vi-tri": "", "khach-gioi-thieu-khach": "", "lai-that-tung-goi": "", "chi-phi-quang-cao-moi-khach": "", "khach-den-khong-deu": "", "khach-cu-quay-lai": "", "loi-gioi-thieu-doanh-nghiep": "", "tu-van-khach-chua-mua": "", "khach-noi-gia-cao": "", "giao-viec-cho-quan-ly": "", "lich-lam-viec-nguoi-chu": "", "chu-vang-hai-tuan": "", "diem-nghen-khi-chung-lai": "", "dao-tao-nhan-vien-moi": "", "trao-doi-kho-voi-nhan-vien": "", "phong-van-tuyen-dung": "", "hoso-doanh-nghiep-chatgpt": "", "ke-hoach-kinh-doanh-mot-trang": ""}


# ------------------------------------------------------------ đọc tệp .md
def _chia(chu, muc):
    """Chia văn bản theo dòng tiêu đề cấp `muc` (## hoặc ###). Trả về [(tiêu đề, thân)]."""
    phan, ten, dong = [], None, []
    for d in chu.split("\n"):
        if d.startswith(muc + " "):
            phan.append((ten, "\n".join(dong)))
            ten, dong = d[len(muc) + 1:].strip(), []
        else:
            dong.append(d)
    phan.append((ten, "\n".join(dong)))
    return phan

def _khoi(than):
    """Tách thân thành các khối cách nhau bằng dòng trống, bỏ đường kẻ ---."""
    return [k.strip() for k in re.split(r"\n\s*\n", than) if k.strip() and k.strip() != "---"]

def _ds(khoi):
    """Danh sách đánh số '1. ...' thành list chữ."""
    return [re.sub(r"^\d+\.\s+", "", d).strip() for d in khoi.split("\n") if re.match(r"^\d+\.\s", d)]

def _dong(s):
    """Chữ trong một dòng: thoát ký tự HTML rồi đổi **đậm**."""
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", html.escape(s, quote=False))

# Con số kèm đơn vị trong bài mẫu được tô vàng, để mắt bắt được ngay số nào đáng lo.
_SO = re.compile(r"(?<![\w])(\d[\d.,]*\s?(?:%|tỷ|triệu|lượt|giờ|cuộc|người|đơn|vụ|tuần|ngày|tháng|điểm|gói|hợp đồng|đồng)(?![\w]))")
def _dong_so(s):
    return _SO.sub(r'<span class="cc-so">\1</span>', _dong(s))

def _so(o):
    try: return float(o.replace(",", "."))
    except ValueError: return None

def _bang(khoi):
    """Bảng điểm: ô điểm trên 10 tô đậm nhạt theo điểm, nhìn là thấy chỗ yếu."""
    hang = [[o.strip() for o in d.strip().strip("|").split("|")] for d in khoi.split("\n")]
    hang = [h for h in hang if not all(re.fullmatch(r":?-+:?", o) for o in h)]
    dau = "".join("<th>%s</th>" % _dong(o) for o in hang[0])
    def o_bang(o, j):
        v = _so(o)
        if v is not None and 0 < j < len(hang[0]) - 1 and v <= 10:
            return '<td class="cc-diem" style="--p:%.2f">%s</td>' % (v / 10, _dong(o))
        return "<td>%s</td>" % _dong(o)
    than = "".join("<tr>%s</tr>" % "".join(o_bang(o, j) for j, o in enumerate(h)) for h in hang[1:])
    return '<div class="cc-bang"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (dau, than)

def _html(than):
    """Bài mẫu thành HTML. Đoạn "Số liệu" vào hộp xám, mỗi lỗ hổng thành một thẻ
    đánh số, việc AI đề xuất thành khung nhấn. Chữ giữ nguyên, chỉ đổi cách bày."""
    ra, nhan_sau, so_ho = [], "", 0
    for k in _khoi(than):
        if k.startswith("> "):
            continue
        if k.startswith("|"):
            ra.append(_bang(k)); continue
        if k.startswith("### Bài mẫu thứ"):
            viec = k[4:].split(": ", 1)[-1].split(", ", 1)
            if len(viec) == 2:
                ra.append("<h4>%s</h4>" % _dong(viec[1][0].upper() + viec[1][1:]))
            continue
        if k.startswith("### "):
            t = k[4:]
            nhan_sau = "lieu" if t.startswith("Số liệu") else "de-xuat" if t.startswith("Việc AI đề xuất") else ""
            ra.append('<h4 class="cc-h4">%s</h4>' % _dong(t)); continue
        if re.match(r"^\d+\.\s", k):
            ra.append("<ol>%s</ol>" % "".join("<li>%s</li>" % _dong_so(x) for x in _ds(k))); continue
        m = re.match(r"^\*\*(Lỗ hổng thứ \w+): (.+?)\*\*\s*(.*)$", k, re.S)
        if m:
            so_ho += 1
            ra.append('<div class="cc-ho"><span class="cc-ho-so">%02d</span><div><h5>%s</h5><p>%s</p></div></div>'
                      % (so_ho, _dong(m.group(2)[0].upper() + m.group(2)[1:]), _dong_so(m.group(3))))
            continue
        if k.startswith("**Số liệu.**") or nhan_sau == "lieu":
            ra.append('<div class="cc-lieu"><p>%s</p></div>' % _dong(k.replace("**Số liệu.** ", "", 1)))
        elif k.startswith("**Việc AI đề xuất") or nhan_sau == "de-xuat":
            ra.append('<div class="cc-de-xuat"><p>%s</p></div>' % _dong_so(k))
        elif k.startswith("AI đề xuất"):
            ra.append('<p class="cc-ai-noi">%s</p>' % _dong_so(k))
        else:
            ra.append("<p>%s</p>" % _dong_so(k))
        nhan_sau = ""
    return "".join(ra)

def doc(ma, tep):
    chu = open(os.path.join(NGUON, tep), encoding="utf-8").read()
    phan = {(t or "").split(".")[0]: b for t, b in _chia(chu, "##")}
    p1 = {t: b for t, b in _chia(phan["Phần 1"], "###") if t}
    p7 = phan["Phần 7"]
    cc = dict(ma=ma)
    cc["tieu"] = _khoi(p1["Tiêu đề trang"])[0]
    cc["duoi"] = _khoi(p1["Câu dưới tiêu đề"])[0]
    cc["dan"] = _khoi(p1["Lời dẫn của Duy"])
    cc["gioi_thieu"] = _khoi(p1["Câu giới thiệu trên thẻ"])[-1]
    cc["chu_de"] = CHU_DE[ma]
    cc["mau_dan"] = _khoi(p1["Câu mở phần ví dụ"])[-1]
    cc["vi_ai"] = re.findall(r"^- \*\*(.+?)\.\*\* (.+)$", p1.get("Công cụ này dành cho bạn", ""), re.M)
    k = _khoi(p1["Cách dùng, ba bước"])
    cc["buoc"], cc["buoc_sau"] = _ds(k[0]), k[1:]
    k = _khoi(p1["Phiếu điền số"])
    cc["phieu_dan"], cc["o"] = k[0], _ds(k[1])
    cc["moi"] = [x for x in _khoi(p1["Lời mời cuối trang"]) if not x.startswith("Nút:")]
    # Điều người đọc nhận được, lấy từ câu đầu của lời mời cuối trang đã duyệt:
    # "Làm xong bộ câu lệnh, bạn đang có trong tay X." Dùng làm mô tả trên thẻ.
    m = re.search(r"bạn đang có trong tay (.+?)\.", cc["moi"][0])
    cc["nhan_duoc"] = m.group(1) if m else cc["duoi"]
    m = re.search(r"(\d+(?: tới \d+)?) phút", " ".join(cc["buoc_sau"]))
    cc["phut"] = m.group(1) if m else ""

    # Câu lệnh: đoạn mở "Câu này chép vào ..." là lời dặn người chủ, không chép sang AI.
    cc["lenh"] = []
    for t, b in _chia(phan["Phần 2"], "###")[1:]:
        so, ten = re.match(r"Câu lệnh (\d+)\. (.+)", t).groups()
        doan = _khoi(b)
        dan = doan.pop(0) if doan[0].startswith("Câu này chép") else ""
        cc["lenh"].append(dict(so=int(so), ten=ten, dan=dan, chu="\n\n".join(doan)))

    # Kết quả AI trả về và lưu ý cho từng câu lệnh (Phần 2b), hiện dưới khối câu lệnh.
    cc["kq"] = {}
    for t, bk in _chia(phan.get("Phần 2b", ""), "###")[1:]:
        so = int(re.search(r"\d+", t).group())
        kq = re.search(r"^Kết quả: (.+)$", bk, re.M); meo = re.search(r"^(?:Lưu ý|Mẹo): (.+)$", bk, re.M)
        cc["kq"][so] = (kq.group(1) if kq else "", meo.group(1) if meo else "")

    # Câu lệnh 2 có các chỗ trống trong ngoặc vuông, theo đúng thứ tự ô trong phiếu.
    l2 = cc["lenh"][1]
    trong = re.findall(r"\[[^\]]+\]", l2["chu"])
    assert len(trong) == len(cc["o"]), "%s: câu lệnh 2 có %d chỗ trống, phiếu có %d ô" % (ma, len(trong), len(cc["o"]))
    cc["trong"] = trong

    # Bài mẫu: bỏ đoạn ghi chú cho người dựng trước khối đầu tiên, tách ở "Bài mẫu thứ hai".
    p3 = phan["Phần 3"]
    dau = min(i for i in (p3.find("\n> "), p3.find("\n### ")) if i >= 0)
    p3 = p3[dau:]
    i2 = p3.find("\n### Bài mẫu thứ hai")
    cc["mien_tru"] = _dong(re.search(r"^> (.+)$", p3, re.M).group(1))
    the = re.search(r'hai thẻ "([^"]+)" và "([^"]+)"', p7).groups()
    cc["mau"] = [(the[0], _html(p3[:i2])), (the[1], _html(p3[i2:]))]

    # Biểu mẫu năm ô: lựa chọn lấy đúng chữ trong Phần 7.
    def lua(nhan):
        return [x.strip() for x in re.search(nhan + r" \(([^)]+)\)", p7).group(1).split(";")]
    cc["vai_tro"], cc["doanh_thu"], cc["doi_ngu"] = lua("vai trò"), lua("doanh thu mỗi tháng"), lua("số người trong đội ngũ")

    # Ghi chú nhỏ trên câu lệnh, nếu Phần 7 có dặn.
    cc["nhan"] = {}
    m = re.search(r'Các câu ([\d, và]+) có nhãn nhỏ "([^"]+)"', p7)
    if m:
        for n in re.findall(r"\d+", m.group(1)):
            cc["nhan"][int(n)] = m.group(2)
    for n, g in re.findall(r'Câu lệnh (\d+) ghi chú(?: nhỏ phía trên)?: "([^"]+)"', p7):
        if not cc["lenh"][int(n) - 1]["dan"]:
            cc["nhan"][int(n)] = g
    # Ô nhập nhiều dòng có gợi ý riêng.
    m = re.search(r'Ô (\d+) \([^)]*\) và ô (\d+) \([^)]*\) đặt ô nhập nhiều dòng, có gợi ý "([^"]+)"', p7)
    cc["goi_y"] = {int(m.group(1)): m.group(3), int(m.group(2)): m.group(3)} if m else {}
    return cc

DS = [doc(ma, tep) for ma, tep in CONG_CU]


# Khối giới thiệu Coach Duy trước lời mời cộng đồng, Coach Duy duyệt qua phiếu ngày 11/10/2026.
# Chữ đọc từ tệp nội dung, sửa chữ thì sửa tệp đó.
def khoi_gioi_thieu(ban=1, goc="../"):
    t = open(os.path.join(NGUON, "NGF - Khối giới thiệu Coach Duy trên trang công cụ.md"), encoding="utf-8").read()
    b1 = t[t.index("## Bản 1."):t.index("## Bản 2.")]
    k = [x.strip() for x in b1.split("\n\n") if x.strip()]
    nho = [x for x in k if x.startswith("Dòng nhỏ phía trên:")][0].split(": ", 1)[1]
    doan = [x for x in k if x.startswith("Duy học") or x.startswith("Bây giờ Duy")]
    if ban == 2:
        b2 = t[t.index("## Bản 2."):t.index("## Ảnh")]
        nho = re.search(r"Dòng nhỏ phía trên: (.+)", b2).group(1)
        cuoi = re.search(r"câu cuối đổi thành: (.+)", b2).group(1)
        doan[-1] = doan[-1][:doan[-1].rindex("Mỗi công cụ")] + cuoi
    return ('<section class="phan bd phan-sang cc" id="nguoi-soan"><div class="cc-doc"><div class="ngs">'
            '<img class="ngs-anh" src="%simg/cd-chan-dung-vuong.webp" alt="Coach Duy Nguyễn" loading="lazy" width="96" height="96">'
            '<div><p class="mono">%s</p><h2>Coach Duy Nguyễn</h2>%s'
            '<a class="lk-v" href="%sve-toi.html">Tìm hiểu thêm về Duy <span class="mt" aria-hidden="true">&rarr;</span></a></div></div></div></section>'
            % (goc, html.escape(nho), "".join("<p>%s</p>" % _dong(x) for x in doan), goc))

# ------------------------------------------------------------ dựng trang
def _p(ds):
    return "".join("<p>%s</p>" % _dong(x) for x in ds)

# Màu theo chủ đề, khớp _MAU_CD trong dung.py (lớp eb-bia--N trong style.css).
MAU_CD = {"AI cho người chủ": 1, "Bán hàng và phòng kinh doanh": 2, "Hệ thống tăng trưởng": 3, "Kiến tạo cộng đồng": 4,
          "Thương hiệu của người sáng lập": 5, "Điểm nghẽn của người sáng lập": 6}

def _the_lien_quan(c):
    """Thẻ công cụ liên quan cuối trang: dải màu chủ đề, tên, câu nói nỗi lo (câu đầu của câu giới thiệu), số câu và thời gian."""
    cd = CHU_DE.get(c["ma"], "")
    lo = c["gioi_thieu"].split(". ")[0].rstrip(".") + "."
    return ('<a class="cc-khac eb-bia--%d" href="%s.html"><span class="cc-khac-cd">%s</span>'
            '<b>%s</b><span class="cc-khac-lo">%s</span>'
            '<span class="cc-khac-duoi"><span>%d câu lệnh · %s phút</span><span class="mt" aria-hidden="true">&rarr;</span></span></a>'
            % (MAU_CD.get(cd, 1), c["ma"], html.escape(cd), html.escape(c["tieu"]), _dong(lo), len(c["lenh"]), c["phut"]))

def lien_quan(ma, n=6):
    """Sáu công cụ cho cuối trang: ba công cụ cùng chủ đề, rồi mỗi chủ đề khác một công cụ cho đủ sáu."""
    cd = CHU_DE.get(ma)
    khac = [c for c in DS if c["ma"] != ma]
    ra = [c for c in khac if CHU_DE.get(c["ma"]) == cd][:n // 2]
    da_co = {cd}
    for c in khac:
        if len(ra) >= n: break
        if CHU_DE.get(c["ma"]) not in da_co: ra.append(c); da_co.add(CHU_DE.get(c["ma"]))
    ra += [c for c in khac if c not in ra][:n - len(ra)]
    return ra

def _kq(v):
    if not v or not v[0]:
        return ""
    return ('<div class="cc-kq"><p><b>AI sẽ trả về.</b> %s</p>%s</div>'
            % (_dong_so(v[0]), ('<p class="cc-meo"><b>Lưu ý.</b> %s</p>' % _dong(v[1])) if v[1] else ""))

def _chon(ten, nhan, ds):
    return ('<label class="cc-o"><span>%s</span><select name="%s" required><option value="">Chọn</option>%s</select></label>'
            % (nhan, ten, "".join('<option value="%d">%s</option>' % (i, html.escape(x[0].upper() + x[1:])) for i, x in enumerate(ds))))

def than_trang(cc):
    ma = cc["ma"]
    video = ""
    if VIDEO.get(ma):
        video = ('<div class="cc-video hien"><iframe src="https://www.youtube-nocookie.com/embed/%s?rel=0" '
                 'title="Video: %s" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>'
                 % (VIDEO[ma], html.escape(cc["tieu"])))
    # Ba bước thành ba thẻ có số và biểu tượng: điền số, chép sang ChatGPT, nhận kết quả.
    IC = ['<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
          '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8"/>',
          '<path d="M5 12l4 4 10-10"/>']
    buoc = '<div class="cc-buoc">%s</div>' % "".join(
        '<div class="cc-b"><div class="cc-b-dau"><span class="cc-b-so">%02d</span><span class="cc-b-ic" aria-hidden="true">'
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">%s</svg>'
        '</span></div><p>%s</p></div>' % (i + 1, IC[i % 3], _dong(x)) for i, x in enumerate(cc["buoc"]))
    buoc += "".join('<div class="cc-gio"><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">'
                    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><p>%s</p></div>' % _dong(x) for x in cc["buoc_sau"])
    # Lời dẫn: câu Duy tự nói với mình trong ngoặc kép được tô nổi lên.
    def nhan_trich(x):
        return re.sub(r'"([^"]+)"', r'<span class="cc-trich">"\1"</span>', _dong(x))
    dan = "".join('<p%s>%s</p>' % (' class="cc-mo-dau"' if i == 0 else "", nhan_trich(x)) for i, x in enumerate(cc["dan"]))
    tab = "".join('<button class="cc-tab%s" type="button" role="tab" aria-selected="%s" data-the="%d">%s</button>'
                  % (" chon" if i == 0 else "", "true" if i == 0 else "false", i, html.escape(t)) for i, (t, _) in enumerate(cc["mau"]))
    mau = "".join('<div class="cc-mau" role="tabpanel" data-the="%d">%s</div>' % (i, h) for i, (_, h) in enumerate(cc["mau"]))

    # Phiếu điền số và bộ câu lệnh, dựng ra khi đã qua biểu mẫu.
    o = "".join('<label class="cc-o"><span><b>%d.</b> %s</span><textarea rows="%d" data-o="%d"%s></textarea></label>'
                % (i + 1, _dong(x), 3 if (i + 1) in cc["goi_y"] else 2, i + 1,
                   (' placeholder="%s"' % html.escape(cc["goi_y"][i + 1])) if (i + 1) in cc["goi_y"] else "")
                for i, x in enumerate(cc["o"]))
    lenh, lenh_mo = "", ""
    for l in cc["lenh"]:
        ghi = l["dan"] or cc["nhan"].get(l["so"], "")
        lenh += ('<div class="cc-lenh" id="lenh-%d" data-so="%d"><div class="cc-lenh-dau"><div><span class="mono">Câu lệnh %d</span><h3>%s</h3></div>'
                 '<button class="nut nut-vien cc-chep" type="button">Chép</button></div>%s<div class="cc-chu">%s</div>%s</div>'
                 % (l["so"], l["so"], l["so"], _dong(l["ten"]), ('<p class="cc-ghi">%s</p>' % _dong(ghi)) if ghi else "", html.escape(l["chu"]),
                    _kq(cc["kq"].get(l["so"]))))
        if l["so"] == 2:   # các ô điền số nằm ngay trong khung câu lệnh 2, gõ tới đâu câu lệnh điền tới đó
            lenh = lenh.replace('<div class="cc-chu">',
                '<div class="cc-dien"><p class="cc-dien-dan">Gõ thông tin của bạn vào từng ô dưới đây. Câu lệnh bên dưới tự điền theo, chỗ đã điền hiện màu vàng. Xong thì bấm Chép.</p>'
                '<div class="cc-phieu">%s</div><p class="cc-dien-xem">Câu lệnh của bạn</p></div><div class="cc-chu">' % o, 1)
            lenh = lenh[:-len("</div>")] + '<div class="cc-chep-duoi"><button class="nut nut-v cc-chep" type="button">Chép câu lệnh 2</button></div></div>'
        if l["so"] == 1:   # mở ChatGPT kèm sẵn câu lệnh; chỉ câu 1, vì câu sau phải dán vào cùng cuộc trò chuyện
            lenh = lenh[:-len("</div>")] + ('<div class="cc-chep-duoi"><a class="nut nut-v cc-mo-gpt" href="https://chatgpt.com/" target="_blank" rel="noopener">'
                'Mở ChatGPT với câu lệnh này <span class="mt" aria-hidden="true">&rarr;</span></a>'
                '<p class="cc-mo-gpt-ghi">Trang chép sẵn câu lệnh cho bạn. Nếu ChatGPT chưa điền sẵn, bạn dán vào ô chat. Các câu lệnh sau, bạn chép rồi dán tiếp vào đúng cuộc trò chuyện này.</p></div></div>')
        if l["so"] == 1:   # câu lệnh 1 mở cho mọi người xem trước khi điền
            lenh_mo, lenh = lenh, ""
    du_lieu = json.dumps(dict(ma=ma, trong=cc["trong"], mau2=cc["lenh"][1]["chu"], n=len(cc["lenh"])), ensure_ascii=False).replace("</", "<\\/")

    khac = "".join(_the_lien_quan(c) for c in lien_quan(ma))
    return """<header class="dau-trang hoa-van cc-dau">
  <div class="bd cc-dau-luoi">
    <div>
      <a class="cc-ve" href="./">&larr; Tất cả công cụ</a>
      <h1>%(tieu)s</h1>
      <p class="dan">%(duoi)s</p>
    </div>
    <aside class="cc-lo" aria-label="Các bước dùng công cụ">
      <p class="cc-lo-dau">Sau khoảng %(phut)s phút</p>
      <ol>
        <li><b>Điền %(n_o)d thông tin của doanh nghiệp bạn</b><span>Số ước lượng gần đúng là đủ.</span></li>
        <li><b>Chép lần lượt %(n_lenh)d câu lệnh vào ChatGPT</b><span>Bản miễn phí cũng được.</span></li>
        <li class="cc-lo-xong"><b>Bạn nhận được</b><span>%(nhan)s</span></li>
      </ol>
      <p class="cc-tien" hidden></p>
      <a class="nut nut-v" href="#mo-cong-cu">Xem bộ câu lệnh <span class="mt" aria-hidden="true">&rarr;</span></a>
    </aside>
  </div>
</header>

<section class="phan bd cc cc-toi" id="gioi-thieu">
  <div class="cc-doc cc-rong">
    <h2>Công cụ này giúp bạn việc gì</h2>
    <div class="cc-vi">%(vi_ai)s</div>
  </div>
</section>

<section class="phan bd phan-sang cc" id="vi-sao">
  <div class="cc-doc cc-dan">
    <h2>Vì sao có bộ câu lệnh này</h2>
    %(dan)s
  </div>
  %(video)s
</section>

<section class="phan bd phan-sang cc" id="bai-mau">
  <div class="cc-doc">
    <h2>AI tìm ra gì ở hai doanh nghiệp mẫu</h2>
    <p class="cc-mau-dan">%(mau_dan)s</p>
    %(hinh)s
    <p class="cc-gia-dinh">%(mien_tru)s</p>
    <div class="cc-tabs" role="tablist">%(tab)s</div>
    %(mau)s
  </div>
</section>

<section class="phan bd phan-sang cc cc-lam" id="cach-dung">
  <div class="cc-doc cc-rong">
    <h2>Cách dùng</h2>
    %(buoc)s
  </div>
</section>

<section class="phan bd phan-sang cc cc-lam" id="mo-cong-cu">
  <div class="cc-doc">
    <h2>Bộ câu lệnh</h2>
    <p class="cc-tien" hidden></p>
    %(lenh_mo)s
    <div class="hop cc-cua" id="cc-cua">
      <h2>Còn %(con)d câu lệnh và phiếu tự ghép số liệu của bạn</h2>
      <p class="cc-cua-dan">Điền 3 ô để mở ngay.</p>
      <form id="cc-form" novalidate>
        <div class="cc-hai"><label class="cc-o"><span>Tên</span><input name="ten" autocomplete="name" required></label>
        <label class="cc-o"><span>Zalo</span><input name="zalo" type="tel" inputmode="tel" autocomplete="tel" required></label></div>
        %(vai_tro)s
        <p class="cc-loi" id="cc-loi" hidden></p>
        <button class="nut nut-v" type="submit">Mở bộ câu lệnh <span class="mt" aria-hidden="true">&rarr;</span></button>
      </form>
    </div>
    <div id="cc-kin"></div>
    <template id="cc-mau-kin">
      %(lenh)s
      <form class="hop cc-them" id="cc-them" novalidate>
        <p class="cc-them-dau">Để đội ngũ ưu tiên hỗ trợ bạn khi chạy thử, bạn cho Duy biết thêm hai điều. Không bắt buộc.</p>
        <div class="cc-hai">%(doanh_thu)s
        %(doi_ngu)s</div>
        <button class="nut nut-vien" type="submit">Gửi</button>
      </form>
    </template>
  </div>
</section>

%(gioi_thieu)s

<section class="phan tran cc-moi" id="cong-dong">
  <div class="tran-nen" aria-hidden="true"><img src="../img/cd-san-khau.webp" alt="" loading="lazy"></div>
  <div class="bd"><div class="cc-doc">
    %(moi)s
    <a class="nut nut-v" id="cc-dang-ky" href="../tham-gia/?cong-cu=%(ma)s">Đăng ký tham gia cộng đồng <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div></div>
</section>

<section class="phan bd phan-sang cc">
  <div class="cc-doc cc-rong">
    <p class="mono">Công cụ khác</p>
    <h2 class="cc-khac-tieu">Những việc người chủ thường làm tiếp theo</h2>
    <div class="cc-khac-luoi">%(khac)s</div>
    <a class="nut nut-vien cc-khac-het" href="index.html#thu-vien">Xem cả %(tong)d công cụ <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
</section>
<script type="application/json" id="cc-du-lieu">%(du_lieu)s</script>
<script src="../assets/cong-cu-ai.js?v={VER}"></script>""" % dict(
        tieu=_dong(cc["tieu"]), duoi=_dong(cc["duoi"]), dan=dan, hinh=hinh(ma), video=video, buoc=buoc,
        mien_tru=cc["mien_tru"], tab=tab, mau=mau, phieu_dan=_dong(cc["phieu_dan"]), o=o, lenh=lenh,
        vai_tro=_chon("vai_tro", "Vai trò", cc["vai_tro"]), lenh_mo=lenh_mo, gioi_thieu=khoi_gioi_thieu(1), mau_dan=_dong(cc["mau_dan"]), vi_ai="".join('<div class="cc-vi-o"><h3>%s</h3><p>%s</p></div>' % (_dong(t), _dong(v)) for t, v in cc["vi_ai"] if t != "Bạn nhận được gì"),
        phut=cc["phut"], nhan=_dong(dict(cc["vi_ai"]).get("Bạn nhận được gì", cc["nhan_duoc"])), con=len(cc["lenh"]) - 1, doanh_thu=_chon("doanh_thu", "Doanh thu mỗi tháng", cc["doanh_thu"]),
        doi_ngu=_chon("doi_ngu", "Số người trong đội ngũ", cc["doi_ngu"]),
        moi=_p(cc["moi"]), ma=ma, n_lenh=len(cc["lenh"]), n_o=len(cc["o"]), khac=khac, tong=len(DS), du_lieu=du_lieu)


# Trang Pancake chuyển tới sau khi người đọc gửi biểu mẫu "NGF Công cụ AI".
# Không cho Google đọc. Nó ghi nhận đã điền rồi đưa người đọc về đúng công cụ
# vừa mở (trang công cụ ghi tên mình vào máy trước khi hiện biểu mẫu). Biểu
# mẫu nằm trong khung con nên chuyển cả trang cha, không chỉ khung con.
DA_DANG_KY = """<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Đang mở bộ câu lệnh</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F2E9DA;color:#241B14;font:16px/1.6 system-ui,sans-serif;text-align:center;padding:24px}a{color:#8F5808;font-weight:600}</style>
</head>
<body>
<p>Đang mở bộ câu lệnh cho bạn.<br><a id="ve" href="./">Bấm vào đây nếu trang chưa tự chuyển</a></p>
<script>
(function(){
  var ma = null, dich = './';
  try { ma = localStorage.getItem('ngf-cho'); } catch (e) {}
  if (ma && /^[a-z0-9-]+$/.test(ma)) {
    dich = ma + '.html#mo-cong-cu';
    try {
      var n = JSON.parse(localStorage.getItem('ngf-lead') || '{}');
      n.qua_pancake = true; n.da = n.da || []; if (n.da.indexOf(ma) < 0) n.da.push(ma);
      localStorage.setItem('ngf-lead', JSON.stringify(n));
    } catch (e) {}
  }
  document.getElementById('ve').href = dich;
  try { (window.top || window).location.href = new URL(dich, location.href).href; }
  catch (e) { location.href = dich; }
})();
</script>
</body>
</html>
"""
