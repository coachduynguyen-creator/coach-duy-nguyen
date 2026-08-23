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
      ("Mỗi lần xuất hiện, tôi phải để lại được gì?",
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
       "Không. Uy tín chỉ khiến người ta chịu ngồi xuống nghe bạn lần đầu. Từ giây phút đó, cái quyết định là chất lượng tư vấn và chất lượng giao hàng. Xây thương hiệu mà không nâng hai phần kia là xây một cái cửa đẹp dẫn vào phòng trống.")]),

"cai-nut-that-mang-ten-ban.html": dict(
 tra_loi="Nút thắt hình thành khi người chủ tự quyết nhiều việc mà không viết lại lý do quyết. Mỗi lần như vậy tạo thêm một điểm chỉ họ xử lý được. Nút này không đau khi công ty nhỏ, chỉ đau đúng lúc công ty lớn lên, tức lúc người chủ cần rảnh nhất.",
 faq=[("Ba dấu hiệu nút thắt đã siết là gì?",
       "Bạn đi vắng ba ngày là có việc bình thường phải chờ. Người giỏi trong đội hỏi bạn nhiều hơn năm ngoái vì họ sợ làm sai. Và bạn bắt đầu né tuyển thêm, vì trong lòng biết tuyển thêm là bận thêm."),
      ("Viết quy trình có gỡ được nút thắt không?",
       "Không đủ. Quy trình mô tả các bước, còn cái đang thiếu là cách nghĩ đằng sau các bước. Một hệ thống chạy được cần năm thứ: kết quả rõ, người chịu trách nhiệm, tiêu chuẩn hoàn thành, dữ liệu, và một nhịp rà soát cố định."),
      ("Nên bắt đầu từ đâu?",
       "Chọn đúng một luồng đang tốn nhiều thời gian của bạn nhất, viết ra năm thứ ở trên, chạy sáu tuần rồi rà lại. Một luồng một quý, bốn luồng một năm. Sau hai năm cái nút ở chỗ bạn không còn nữa.")]),

"kinh-nghiem-phai-thanh-he-thong.html": dict(
 tra_loi="Trong doanh nghiệp dịch vụ, cái tạo ra kết quả tốt nhất thường nằm trong đầu người chủ và vài người giỏi nhất. Đó là sức mạnh vì khó bắt chước, nhưng cũng là rủi ro lớn nhất vì nó rời khỏi công ty cùng lúc với người mang nó.",
 faq=[("Đội có tự học được cách nghĩ của người chủ không?",
       "Học được một phần và rất chậm. Người giỏi học được cách bạn làm, nhưng không học được vì sao bạn quyết như vậy trong tình huống ngoại lệ. Mà nghề dịch vụ thì phần lớn giá trị nằm ở tình huống ngoại lệ."),
      ("Cách rẻ nhất để lấy kinh nghiệm ra khỏi đầu là gì?",
       "Ghi lại quyết định, không ghi lại thao tác. Mỗi tình huống khó, dành mười phút viết ba dòng: tình huống là gì, tôi quyết thế nào, và tôi quyết như vậy vì điều gì. Dòng thứ ba là dòng có giá trị nhất và cũng hay bị bỏ nhất."),
      ("Năm phần làm nên một hệ thống là gì?",
       "Kết quả rõ ràng, người chịu trách nhiệm là một cái tên chứ không phải một phòng ban, tiêu chuẩn hoàn thành, dữ liệu đủ để biết luồng khoẻ hay yếu, và nhịp rà soát cố định.")]),

"cong-dong-khong-phai-nhom-dang-bai.html": dict(
 tra_loi="Một nhóm chỉ thành cộng đồng khi thành viên nhận được thứ có ích từ thành viên khác, không chỉ từ người sáng lập. Bài kiểm nhanh: nếu bạn ngừng đăng hai tuần mà nhóm ngừng hoạt động, giá trị vẫn đang chảy một chiều và mô hình đó không lớn được.",
 faq=[("Bốn thứ quyết định cộng đồng sống hay chết là gì?",
       "Lời hứa rõ về việc vào đây được gì và không được gì. Tiêu chuẩn thành viên để biết ai hợp ai chưa hợp. Trải nghiệm mười bốn ngày đầu để người mới có kết quả nhỏ sớm. Và một nhịp hoạt động cố định để người ta biết khi nào quay lại."),
      ("Đo cộng đồng bằng gì?",
       "Không đo bằng số người trong nhóm. Đo bằng tỉ lệ người mới bắt tay làm thật trong mười bốn ngày đầu, tỉ lệ quay lại theo nhịp, giá trị thành viên tạo cho nhau, và tỉ lệ gia hạn hoặc giới thiệu. Con số cuối cùng trung thực nhất."),
      ("Vì sao mở cửa cho tất cả lại là sai?",
       "Vì bạn sẽ mất người giỏi trước tiên, do họ nhạy nhất với chất lượng. Một cộng đồng giữ được chất lượng bằng cách chọn người, không bằng cách chọn giá.")]),

"ai-lam-nhanh-phan-da-dung.html": dict(
 tra_loi="AI khuếch đại cái sẵn có. Đưa cho nó một luận điểm rõ và kho câu chuyện thật, nó tiết kiệm rất nhiều giờ. Đưa cho nó một sự mơ hồ, nó trả lại sự mơ hồ được viết trơn tru hơn. Trơn tru là chỗ nguy hiểm vì nó khiến bạn tưởng mình đã nghĩ xong.",
 faq=[("Việc nào giao được cho AI, việc nào không?",
       "Giao được: tìm và tóm tắt tài liệu, sắp xếp ý đã có, chuyển một nội dung dài thành nhiều định dạng, gợi ý góc nhìn bạn chưa xét. Không giao được: quyết định bạn tin điều gì, chọn lập trường, đánh giá một con người, và chịu trách nhiệm cho câu bạn nói ra trước công chúng."),
      ("Dùng AI thế nào để không mất giọng riêng?",
       "Đừng để AI viết từ số không. Dùng nó ở ba chỗ: gom chất liệu sau một buổi làm việc thật, phản biện một lập luận, và chuyển định dạng. Câu nào bạn không tự nói được trước một phòng người thì đừng đăng, kể cả khi nó nghe hay."),
      ("Làm sao nhận ra nội dung do AI viết hộ?",
       "Đọc một bài của họ rồi nghe họ nói mười phút. Nếu đọc và nghe ra hai người khác nhau, bạn biết ai đang viết.")]),

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
       "Khách chưa đủ điều kiện để bắt đầu. Khách thật ra muốn bạn làm thay. Khách đang tìm một lời bảo đảm chứ không mua một phương pháp. Và khách không có mặt để làm, dù họ trả đủ tiền."),
      ("Nói không thế nào để không mất quan hệ?",
       "Ba phần: nói rõ lý do bằng điều kiện chứ không bằng đánh giá con người, đưa một lối khác nếu có, và giữ cửa mở. Người bị từ chối đúng cách thường quay lại, và quay lại với sự tôn trọng."),
      ("Làm sao biết tiêu chí sàng lọc của mình?",
       "Nhìn danh sách khách đang có, chọn một người mà nếu quay lại thời điểm ký bạn sẽ không ký nữa, rồi viết ra dấu hiệu lúc đó bạn đã thấy nhưng bỏ qua. Dấu hiệu đó chính là tiêu chí đầu tiên, và bạn đã trả tiền để có nó.")]),

"lanh-dia-chuyen-mon.html": dict(
 tra_loi="Lãnh địa chuyên môn là giao của ba thứ: một nhóm người cụ thể, một loại vấn đề cụ thể, và một cách nhìn mà bạn có còn người khác chưa có. Ngành và nghề chưa phải lãnh địa. Người không dám bỏ vùng nào sẽ không sở hữu vùng nào.",
 faq=[("Làm sao tìm ra lãnh địa của mình?",
       "Chia giấy ba cột: những gì bạn biết làm, những gì người ta thật sự trả tiền cho bạn, và những gì bạn còn muốn làm sau năm năm nữa. Lãnh địa nằm ở chỗ giao của ba cột. Nếu chỗ giao rỗng, bạn có vấn đề lớn hơn vấn đề nội dung."),
      ("Chọn lãnh địa hẹp có mất khách không?",
       "Mất loại khách lẻ tẻ, được khả năng được nhớ. Một lãnh địa tốt phải làm hai việc cùng lúc: khiến đúng người thấy đây là dành cho mình, và khiến người không phù hợp tự rời đi mà không thấy khó chịu."),
      ("Bao lâu thì biết mình chọn đúng?",
       "Ba dấu hiệu theo thứ tự: người nghe hỏi tiếp thay vì chỉ gật đầu, có người tự loại mình, và người ta giới thiệu bạn bằng đúng câu bạn dùng. Dấu hiệu cuối thường đến sau sáu tới mười hai tháng nói nhất quán.")]),

"kho-cau-chuyen.html": dict(
 tra_loi="Người sáng lập hiếm khi hết ý tưởng. Cái họ thiếu là một cái kho và thói quen bỏ đồ vào kho. Ý tưởng đến lúc đang làm việc chứ không đến lúc ngồi trước màn hình trắng, nên phải ghi lại ngay trong ngày, ba dòng một mẩu.",
 faq=[("Nên ghi lại những loại chất liệu nào?",
       "Bốn loại: câu hỏi lặp lại từ ba người trở lên, quyết định có đánh đổi kèm lý do, sai lầm đã trả giá, và số liệu ngược với dự đoán. Loại thứ hai quý nhất vì không ai sao chép được cách bạn nghĩ."),
      ("Ghi thế nào cho dùng được về sau?",
       "Đúng ba dòng, ngay trong ngày. Dòng một là tình huống, dòng hai là điều bạn làm hoặc thấy, dòng ba là vì sao. Dòng ba biến một mẩu ghi chép thành chất liệu, thiếu nó thì sáu tháng sau bạn đọc lại không hiểu vì sao mình ghi."),
      ("Cần phần mềm gì để làm kho?",
       "Một tệp duy nhất, ghi theo ngày, không phân loại. Phân loại làm chậm việc ghi, mà việc ghi mới là việc khó. Nếu nói dễ hơn viết thì ghi âm hai phút rồi để máy chuyển thành chữ.")]),

"nhip-lam-noi-dung.html": dict(
 tra_loi="Nhịp làm nội dung phải được thiết kế cho tuần tệ nhất, không phải tuần rảnh nhất. Cách bền nhất là mỗi tuần làm một nội dung gốc đủ sâu rồi cắt ra thành nhiều mảnh ngắn, tổng cộng khoảng năm giờ một tuần.",
 faq=[("Nên đăng bao nhiêu bài một tuần?",
       "Câu hỏi đúng không phải bao nhiêu bài mà là nhịp nào bạn giữ được ba năm. Một nội dung gốc mỗi tuần cắt thành ba tới năm mảnh ngắn là nhịp một người vận hành được và giữ được lâu."),
      ("Chia thời gian trong tuần thế nào?",
       "Ba khối: khối gom chất liệu ba mươi phút mỗi ngày, khối làm nội dung gốc chín mươi phút một lần mỗi tuần, và khối cắt mảnh sáu mươi phút một lần mỗi tuần. Chỉ khối làm cần đầu óc tỉnh táo."),
      ("Lỡ một tuần thì có nên đăng bù không?",
       "Không. Đăng bù là cách quay lại vòng bung sức rồi kiệt. Lỡ một tuần thì tuần sau đi tiếp như chưa có gì, vì không ai đếm ngoài bạn.")]),

"chan-doan-truoc-khi-ke-don.html": dict(
 tra_loi="Một buổi tư vấn tốt có bốn phần theo đúng thứ tự: mở và thống nhất mục đích khoảng năm phút, chẩn đoán khoảng hai mươi lăm phút, gọi tên vấn đề khoảng mười phút, rồi mới chọn bước tiếp theo. Trình bày giải pháp trước khi chẩn đoán là lỗi làm hỏng phần lớn buổi tư vấn.",
 faq=[("Cần lấy những thông tin gì khi chẩn đoán?",
       "Ba lớp: hiện trạng quan sát được, những gì họ đã thử và kết quả, và cái giá của việc không làm gì trong sáu tháng tới. Thiếu lớp thứ ba, bạn sẽ gặp khách khen phương án hay rồi biến mất."),
      ("Làm sao biết mình đã gọi đúng tên vấn đề?",
       "Khách im vài giây rồi nói đúng rồi. Nếu bạn gọi sai, họ sẽ sửa bạn, và điều đó cũng tốt vì bạn học được và họ thấy bạn nghe thật."),
      ("Ba lỗi hay gặp trong buổi tư vấn là gì?",
       "Trình bày giải pháp quá sớm, hỏi để dẫn dắt chứ không để hiểu, và không dám nói không hợp. Cái giá của lỗi thứ ba luôn lớn hơn khoản thu được từ ca đó.")]),

"de-toi-suy-nghi-them.html": dict(
 tra_loi="Câu để tôi suy nghĩ thêm gần như không bao giờ mang nghĩa cần thêm thời gian. Nó có bốn nghĩa: chưa thấy vấn đề đủ lớn, không phải người quyết, chưa tin mình làm nổi, hoặc giá vượt mức tự cho phép. Mỗi nghĩa cần một cách xử lý khác nhau.",
 faq=[("Hỏi câu gì để biết nghĩa thật?",
       "Hỏi: anh chị cứ nói thật, nếu bây giờ phải quyết thì điều gì làm anh chị lăn tăn nhất. Câu này cho phép nói thật, hỏi về một điều duy nhất nên dễ trả lời, và không đẩy họ vào thế phải quyết ngay."),
      ("Vì sao giảm giá là phản ứng tệ nhất?",
       "Vì giảm giá chỉ trả lời cho một trong bốn nghĩa, và đó là nghĩa ít phổ biến nhất. Chín trên mười lần bạn giảm giá là bạn đang trả lời sai câu hỏi, đồng thời dạy khách rằng giá của bạn không thật."),
      ("Khi nào câu đó mang nghĩa đen?",
       "Khi quyết định ảnh hưởng tới người khác trong doanh nghiệp và họ cần trao đổi nội bộ. Lúc đó việc của bạn là gửi một tài liệu ngắn ghi rõ phạm vi, kết quả, điều kiện và cái giá của việc không làm, để họ mang vào cuộc họp.")]),

"vi-sao-giam-gia-lam-hong-quan-he.html": dict(
 tra_loi="Giảm giá dạy khách ba điều: giá ban đầu không thật, ngần ngại là chiến thuật hiệu quả, và bạn cần họ hơn họ cần bạn. Điều thứ ba đảo vị thế, mà trong tư vấn thì vị thế quyết định lời khuyên của bạn có được nghe hay không.",
 faq=[("Có cách nào thay cho giảm giá?",
       "Ba cách: thu hẹp phạm vi mà giữ đơn giá, đổi lịch thanh toán mà không đổi tổng số, hoặc đề nghị một bước nhỏ hơn có phí trước. Cả ba giữ nguyên thông điệp về giá trị."),
      ("Vì sao khách được giảm mạnh lại khó hơn?",
       "Người trả đủ giá đã tự thuyết phục mình rằng việc này quan trọng nên họ có mặt và làm bài. Người được giảm mạnh thường vào với tâm thế thử xem sao, vắng nhiều hơn, và cuối cùng không ra kết quả."),
      ("Khi nào giảm giá là hợp lý?",
       "Hai trường hợp, và cả hai phải công khai lý do: giá ra mắt cho khoá đầu tiên khi chưa có bằng chứng người học, và giảm theo một quy tắc áp dụng cho tất cả như đăng ký sớm. Cái làm hỏng quan hệ là mức riêng dành cho người biết mặc cả.")]),

"nam-thu-lam-nen-mot-he-thong.html": dict(
 tra_loi="Một hệ thống chạy được cần năm thứ: kết quả rõ ràng đo được, một cái tên chịu trách nhiệm, tiêu chuẩn hoàn thành, dữ liệu đủ để biết luồng khoẻ hay yếu, và một nhịp rà soát cố định. Quy trình chỉ là cách ghi lại bốn phần kia.",
 faq=[("Vì sao thư mục quy trình không ai mở?",
       "Vì quy trình chỉ là một phần năm của hệ thống, và thường là phần ít quan trọng nhất. Thiếu người chịu trách nhiệm thì quy trình thành tài liệu tham khảo, thiếu nhịp rà soát thì hệ thống chết trong ba tháng."),
      ("Nên bắt đầu từ đâu?",
       "Từ kết quả, rồi tới người chịu trách nhiệm, rồi mới tới cách làm. Khi đã có kết quả rõ và người chịu trách nhiệm, thường chính người đó viết ra quy trình tốt hơn bạn viết hộ, và tài liệu do họ viết thì họ dùng."),
      ("Làm sao biết luồng đã rời khỏi đầu người chủ?",
       "Khi người phụ trách xử lý được tám trong mười tình huống mà không hỏi, kể cả tình huống chưa có trong tài liệu, và giải thích được vì sao họ làm vậy.")]),

"giao-quyen-ma-khong-mat-kiem-soat.html": dict(
 tra_loi="Giao quyền hiệu quả là giao theo vùng, không giao theo việc. Vẽ ba vùng cho người nhận: vùng xanh tự quyết không cần báo, vùng vàng tự quyết rồi báo lại, vùng đỏ hỏi trước khi quyết. Giữ vùng đỏ càng nhỏ càng tốt và viết ra rõ ràng.",
 faq=[("Hai kiểu giao quyền sai là gì?",
       "Giao việc mà giữ quyết định, khiến người nhận thành cái máy và không giảm tải cho ai. Và giao hết mà không có ranh giới, khiến bạn phải nhảy vào sửa rồi cả hai mất niềm tin."),
      ("Vì sao phải viết ranh giới ra?",
       "Khi ranh giới nằm trong đầu bạn, người kia phải đoán. Người thận trọng sẽ hỏi mọi thứ nên bạn không giảm tải, người mạnh dạn sẽ quyết cả chỗ bạn không muốn nên bạn phải sửa. Cả hai đều đang hành xử hợp lý với thông tin họ có."),
      ("Dấu hiệu giao quyền đã thành công?",
       "Không phải khi họ làm đúng như bạn, mà khi họ xử lý một tình huống theo cách khác bạn, bạn thấy chấp nhận được, và họ giải thích được vì sao chọn cách đó.")]),

"muoi-bon-ngay-dau.html": dict(
 tra_loi="Tỉ lệ người còn hoạt động sau sáu tháng gần như được định đoạt trong mười bốn ngày đầu. Người có một kết quả nhỏ nhìn thấy được trong hai tuần đầu thì ở lại, người không có thì âm thầm rời đi. Thắng nhỏ là bằng chứng rằng chỗ này làm được việc và chính họ làm được việc.",
 faq=[("Bốn việc phải xảy ra trong mười bốn ngày đầu là gì?",
       "Ngày một tới ba biết mình đang ở đâu qua một cách tự đánh giá. Ngày ba tới bảy làm được một việc nhỏ và thấy kết quả. Ngày bảy tới mười được một người thật nhìn thấy. Ngày mười tới mười bốn biết nhịp tiếp theo là gì."),
      ("Ba lỗi hay gặp với người mới là gì?",
       "Đổ hết tài nguyên vào ngày đầu khiến họ choáng, để người mới tự tìm đường, và không ai chào. Một câu chào của người thật có sức nặng hơn mười thông báo tự động."),
      ("Đo mười bốn ngày đầu bằng gì?",
       "Tỉ lệ hoàn tất bước tự đánh giá, tỉ lệ có ít nhất một lần đóng góp, tỉ lệ quay lại trong tuần thứ hai, và số người mới được thành viên cũ tương tác.")]),

"do-cong-dong-bang-gi.html": dict(
 tra_loi="Số thành viên là chỉ số dễ tăng nhất và ít liên quan nhất tới giá trị. Bốn con số nói đúng hơn: tỉ lệ người mới bắt tay làm thật trong mười bốn ngày đầu, tỉ lệ quay lại theo nhịp, giá trị tạo ra giữa các thành viên, và tỉ lệ gia hạn hoặc giới thiệu.",
 faq=[("Bài kiểm nào cho biết cộng đồng có sống thật không?",
       "Ngừng đăng trong hai tuần và xem chuyện gì xảy ra. Nếu vẫn có hoạt động thì giá trị đang được tạo giữa các thành viên. Nếu im lặng hoàn toàn thì bạn đang gánh toàn bộ. Đừng làm bài kiểm này khi cộng đồng còn dưới ba tháng tuổi."),
      ("Hai chỉ số nào nên bỏ?",
       "Tổng số bài đăng, vì nhiều bài chào hàng tệ hơn ít bài đáng đọc. Và số người theo dõi trang, vì theo dõi là hành vi gần như không tốn gì nên không nói lên mức độ cam kết."),
      ("Đo xong thì làm gì?",
       "Ít người bắt tay làm thật thì sửa mười bốn ngày đầu. Quay lại thấp thì sửa nhịp. Giá trị giữa thành viên thấp thì sửa cơ chế kết nối. Gia hạn thấp thì xem lại lời hứa ban đầu có được giữ không.")]),
}
