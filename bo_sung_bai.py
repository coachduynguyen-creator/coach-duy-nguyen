# -*- coding: utf-8 -*-
"""Khối trả lời nhanh và hỏi đáp cho mười bài đầu.
Mỗi bài cần: tra_loi (40 tới 60 chữ, đứng một mình vẫn hiểu) và faq (3 câu).
Máy tìm kiếm và trợ lý AI trích đúng hai khối này."""

BO_SUNG = {
"bon-cau-toi-nghe-nhieu-nhat.html": dict(
 tra_loi="Bốn câu người sáng lập hay nói nhất đều dẫn về một nguyên nhân: uy tín, cách ra quyết định và cách tạo kết quả vẫn nằm trong đầu người chủ, chưa thành tài sản, quy trình, dữ liệu và năng lực của đội. Vì vậy càng bán tốt, người chủ càng bận.",
 faq=[("Vì sao đăng nội dung nhiều mà không ra đúng khách?",
       "Vì luận điểm nghề nghiệp còn nằm trong đầu người chủ, chưa thành một câu mà cả đội nói giống nhau. Nội dung vì thế mỗi bài một hướng, và người xem không nhớ được bạn đại diện cho điều gì. Tăng tần suất không sửa được chỗ này."),
      ("Tuyển thêm người mà tôi lại bận hơn, gỡ từ đâu?",
       "Bắt đầu bằng một luồng công việc, không phải cả công ty. Viết ra kết quả rõ ràng của luồng đó, ai chịu trách nhiệm, đo bằng chỉ số nào, và bao lâu rà lại một lần. Chỗ nào bạn ấp úng khi trả lời, chỗ đó là điểm nghẽn thật."),
      ("Làm sao biết luồng đã ra khỏi đầu tôi?",
       "Khi người phụ trách xử lý được tám trong mười tình huống mà không hỏi bạn, kể cả tình huống chưa có trong tài liệu, và giải thích được vì sao họ làm vậy. Trước lúc đó bạn vẫn đang thuê người thực hiện.")]),

"vi-sao-toi-khong-dung-phieu.html": dict(
 tra_loi="Phễu bán hàng đo được một chiến dịch nhưng không mô tả đúng cách một người quyết định tin ai, vì nó giả định người ta đi một chiều và không quay lại. Quỹ đạo đặt khách ở giữa, năm vòng quay quanh, ai cũng có thể tiến gần hoặc lùi ra mà vẫn còn trong hệ.",
 faq=[("Vậy có nên bỏ hẳn phễu không?",
       "Không. Dùng phễu để đo một chiến dịch có điểm bắt đầu và điểm kết thúc, vì nó cho con số để cải tiến. Chỉ đừng dùng phễu để thiết kế cả quan hệ với khách, vì lúc đó người chưa mua bị coi là thất bại cần cứu."),
      ("Năm vòng quỹ đạo niềm tin gồm những gì?",
       "Vòng một là lúc người ta gặp bạn lần đầu. Vòng hai là lúc đúng người nhận ra vấn đề của họ. Vòng ba là lúc họ đồng ý cho bạn giữ liên lạc. Vòng bốn là niềm tin lớn dần. Vòng năm là lúc họ chọn bước tiếp theo, kể cả khi bước đúng là dừng lại."),
      ("Một điểm chạm tốt phải làm được gì?",
       "Ít nhất một trong ba điều: giúp họ hiểu vấn đề rõ hơn, giúp họ tự đánh giá bối cảnh của mình, hoặc giúp họ tiến một bước nhỏ có ích. Không đạt điều nào thì đó là một lần tiêu bớt niềm tin chứ không tích thêm.")]),

"nam-viec-cua-mot-nguoi-co-van.html": dict(
 tra_loi="Người cố vấn phải làm được năm việc: soi đúng vấn đề thật phía sau, chỉ bước tiếp theo kèm dấu hiệu hoàn thành, làm mẫu bằng quyết định và sai lầm thật, giữ chuẩn kể cả khi mất lòng, và trao lại quyền tự chủ để người học tự đi được.",
 faq=[("Làm sao phân biệt người cố vấn thật và người tự gọi mình là cố vấn?",
       "Đếm xem họ làm được mấy trong năm việc. Người chỉ khen và động viên thiếu việc chỉ đường. Người chỉ đưa mẹo thiếu việc soi đúng. Người khiến bạn nghĩ chỉ họ mới giải quyết được vấn đề của bạn thì đang xây sự lệ thuộc."),
      ("Chỉ đường khác lời khuyên ở chỗ nào?",
       "Một lời khuyên chỉ đường được thì có ba thứ: thứ tự các bước, điều kiện để đi tiếp, và dấu hiệu cho biết đã xong. Thiếu dấu hiệu hoàn thành thì đó chưa phải chỉ đường, mới chỉ là động viên."),
      ("Ba việc một người cố vấn không nên làm là gì?",
       "Không làm thay phần việc của bạn. Không hứa một con số kết quả khi chưa đủ điều kiện. Không giữ ai ở lại bằng cảm giác lệ thuộc.")]),

"uy-tin-khong-phai-de-noi-tieng.html": dict(
 tra_loi="Nổi tiếng là nhiều người biết tên bạn, đo bằng lượt xem và người theo dõi. Được tin cậy là đúng người hiểu bạn làm gì, tin bạn làm được và chủ động tìm tới. Một người rất nổi tiếng vẫn có thể không ai thuê, còn người chỉ vài nghìn người theo dõi vẫn kín lịch cả năm.",
 faq=[("Làm sao biết mình đang nổi tiếng hay đang được tin cậy?",
       "Đếm trong ba tháng qua có bao nhiêu người chủ động tìm tới bạn mà không qua giới thiệu. Con số đó nói về uy tín thật hơn mọi chỉ số nền tảng. Nếu lượt xem cao mà con số này gần bằng không, bạn đang có sự chú ý chứ chưa có niềm tin."),
      ("Bài kiểm xoá tên là gì?",
       "Lấy năm nội dung gần nhất, xoá tên và ảnh, đưa cho một người cùng ngành và hỏi họ đăng nguyên văn được bao nhiêu bài lên trang của họ mà không ai thấy lạ. Nếu là bốn hoặc năm, vấn đề của bạn là định vị chứ không phải tần suất."),
      ("Uy tín có đủ để giữ khách không?",
       "Không. Uy tín chỉ khiến người ta chịu ngồi xuống nghe bạn lần đầu. Từ giây phút đó, thứ quyết định là chất lượng tư vấn và chất lượng giao hàng. Xây thương hiệu mà không nâng hai thứ kia là xây một cái cửa đẹp dẫn vào phòng trống.")]),

"cai-nut-that-mang-ten-ban.html": dict(
 tra_loi="Nút thắt hình thành khi người chủ tự quyết nhiều việc mà không viết lại lý do quyết. Mỗi lần như vậy tạo thêm một điểm chỉ họ xử lý được. Nút này không đau khi công ty nhỏ, chỉ đau đúng lúc công ty lớn lên, tức lúc người chủ cần rảnh nhất.",
 faq=[("Ba dấu hiệu nút thắt đã siết là gì?",
       "Bạn đi vắng ba ngày là có việc bình thường phải chờ. Người giỏi trong đội hỏi bạn nhiều hơn năm ngoái vì họ sợ làm sai. Và bạn bắt đầu né tuyển thêm, vì trong lòng biết tuyển thêm là bận thêm."),
      ("Viết quy trình có gỡ được nút thắt không?",
       "Không đủ. Quy trình mô tả các bước, còn thứ đang thiếu là cách nghĩ đằng sau các bước. Một hệ thống chạy được cần năm thứ: kết quả rõ, người chịu trách nhiệm, tiêu chuẩn hoàn thành, dữ liệu, và một nhịp rà soát cố định."),
      ("Nên bắt đầu từ đâu?",
       "Chọn đúng một luồng đang tốn nhiều thời gian của bạn nhất, viết ra năm thứ ở trên, chạy sáu tuần rồi rà lại. Một luồng một quý, bốn luồng một năm. Sau hai năm cái nút mang tên bạn không còn nữa.")]),

"kinh-nghiem-phai-thanh-he-thong.html": dict(
 tra_loi="Trong doanh nghiệp dịch vụ, thứ tạo ra kết quả tốt nhất thường nằm trong đầu người chủ và vài người giỏi nhất. Đó là sức mạnh vì khó bắt chước, nhưng cũng là rủi ro lớn nhất vì nó rời khỏi công ty cùng lúc với người mang nó.",
 faq=[("Đội có tự học được cách nghĩ của người chủ không?",
       "Học được một phần và rất chậm. Người giỏi học được cách bạn làm, nhưng không học được vì sao bạn quyết như vậy trong tình huống ngoại lệ. Mà nghề dịch vụ thì phần lớn giá trị nằm ở tình huống ngoại lệ."),
      ("Cách rẻ nhất để lấy kinh nghiệm ra khỏi đầu là gì?",
       "Ghi lại quyết định, không ghi lại thao tác. Mỗi tình huống khó, dành mười phút viết ba dòng: tình huống là gì, tôi quyết thế nào, và tôi quyết như vậy vì điều gì. Dòng thứ ba là dòng có giá trị nhất và cũng hay bị bỏ nhất."),
      ("Năm thứ làm nên một hệ thống là gì?",
       "Kết quả rõ ràng, người chịu trách nhiệm là một cái tên chứ không phải một phòng ban, tiêu chuẩn hoàn thành, dữ liệu đủ để biết luồng khoẻ hay yếu, và nhịp rà soát cố định.")]),

"cong-dong-khong-phai-nhom-dang-bai.html": dict(
 tra_loi="Một nhóm chỉ thành cộng đồng khi thành viên nhận được thứ có ích từ thành viên khác, không chỉ từ người sáng lập. Bài kiểm nhanh: nếu bạn ngừng đăng hai tuần mà nhóm ngừng hoạt động, giá trị vẫn đang chảy một chiều và mô hình đó không lớn được.",
 faq=[("Bốn thứ quyết định cộng đồng sống hay chết là gì?",
       "Lời hứa rõ về việc vào đây được gì và không được gì. Tiêu chuẩn thành viên để biết ai hợp ai chưa hợp. Trải nghiệm mười bốn ngày đầu để người mới có thắng nhỏ sớm. Và một nhịp hoạt động cố định để người ta biết khi nào quay lại."),
      ("Đo cộng đồng bằng gì?",
       "Không đo bằng số người trong nhóm. Đo bằng tỉ lệ kích hoạt trong mười bốn ngày đầu, tỉ lệ quay lại theo nhịp, giá trị được tạo giữa các thành viên, và tỉ lệ gia hạn hoặc giới thiệu. Con số cuối cùng trung thực nhất."),
      ("Vì sao mở cửa cho tất cả lại là sai?",
       "Vì bạn sẽ mất người giỏi trước tiên, do họ nhạy nhất với chất lượng. Một cộng đồng giữ được chất lượng bằng cách chọn người, không bằng cách chọn giá.")]),

"ai-lam-nhanh-phan-da-dung.html": dict(
 tra_loi="AI khuếch đại thứ đã có. Đưa cho nó một luận điểm rõ và kho câu chuyện thật, nó tiết kiệm rất nhiều giờ. Đưa cho nó một sự mơ hồ, nó trả lại sự mơ hồ được viết trơn tru hơn. Trơn tru là chỗ nguy hiểm vì nó khiến bạn tưởng mình đã nghĩ xong.",
 faq=[("Việc nào giao được cho AI, việc nào không?",
       "Giao được: tìm và tóm tắt tài liệu, sắp xếp ý đã có, chuyển một nội dung dài thành nhiều định dạng, gợi ý góc nhìn bạn chưa xét. Không giao được: quyết định bạn tin điều gì, chọn lập trường, đánh giá một con người, và chịu trách nhiệm cho câu bạn nói ra trước công chúng."),
      ("Dùng AI thế nào để không mất giọng riêng?",
       "Đừng để AI viết từ số không. Dùng nó ở ba chỗ: gom chất liệu sau một buổi làm việc thật, phản biện một lập luận, và chuyển định dạng. Câu nào bạn không tự nói được trước một phòng người thì đừng đăng, kể cả khi nó nghe hay."),
      ("Làm sao nhận ra nội dung do AI viết hộ?",
       "Đọc một bài của họ rồi nghe họ nói mười phút. Nếu hai thứ đó là hai người khác nhau, bạn biết ai đang viết.")]),

"thuong-hieu-khong-xay-bang-so-bai-dang.html": dict(
 tra_loi="Thương hiệu cá nhân là một trí nhớ được xây trong đầu người khác. Trí nhớ đó chỉ đậm lên khi cùng một thứ được nhận ra nhiều lần, không phải khi nhiều thứ khác nhau được nhìn thấy nhiều lần. Vì vậy tăng tần suất không cứu được một định vị mơ hồ.",
 faq=[("Ba lớp phải rõ trước khi tăng sản lượng là gì?",
       "Lãnh địa, tức bạn nói về vùng nào và cố ý không nói về vùng nào. Luận điểm, tức bạn tin điều gì mà nhiều người trong ngành chưa tin và có bằng chứng gì. Và bằng chứng thật từ công việc của bạn, thứ không ai sao chép được."),
      ("Nên đăng bao nhiêu bài một tuần?",
       "Khi ba lớp trên đã rõ thì câu trả lời thường thấp hơn người ta nghĩ: một nội dung dài mỗi tuần, cắt ra vài mẩu ngắn, cộng với việc trả lời thật kỹ câu hỏi người xem đặt ra. Nhịp đó một người giữ được nhiều năm."),
      ("Người thắng trong làm nội dung là ai?",
       "Không phải người đăng nhiều nhất, mà là người còn đăng sau năm thứ ba.")]),

"khi-nao-nen-noi-khong.html": dict(
 tra_loi="Nhận một khách sai tốn bốn thứ: thời gian giao hàng cho người không đạt kết quả, chỗ của một khách đúng, năng lượng của đội, và đắt nhất là uy tín, vì người không đạt kết quả sẽ kể lại trải nghiệm theo cách họ thấy chứ không theo cách bạn giải thích.",
 faq=[("Bốn dấu hiệu nên nói không là gì?",
       "Khách chưa đủ điều kiện đầu vào. Khách thật ra muốn bạn làm thay. Khách đang tìm một lời bảo đảm chứ không mua một phương pháp. Và khách không có mặt để làm, dù họ trả đủ tiền."),
      ("Nói không thế nào để không mất quan hệ?",
       "Ba phần: nói rõ lý do bằng điều kiện chứ không bằng đánh giá con người, đưa một lối khác nếu có, và giữ cửa mở. Người bị từ chối đúng cách thường quay lại, và quay lại với sự tôn trọng."),
      ("Làm sao biết tiêu chí sàng lọc của mình?",
       "Nhìn danh sách khách đang có, chọn một người mà nếu quay lại thời điểm ký bạn sẽ không ký nữa, rồi viết ra dấu hiệu lúc đó bạn đã thấy nhưng bỏ qua. Dấu hiệu đó chính là tiêu chí đầu tiên, và bạn đã trả tiền để có nó.")]),
}
