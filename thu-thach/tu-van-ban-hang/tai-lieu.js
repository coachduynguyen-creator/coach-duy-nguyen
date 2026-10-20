/* Dựng tự động bằng dung_tai_lieu_thu_thach.py, đừng sửa tay. */
var TAI_LIEU = {
"1": "<aside class=\"goi\">Sau hôm nay, bạn có bản đầu tiên của Bảng quy trình bán hàng bảy bước. Nhìn vào bảng, bạn biết mười khách gần nhất của mình đã dừng lại ở bước nào, và bước nào bạn cần để ý nhất trong tuần này.</aside>\n<p>Hôm nay bạn chưa sửa gì cả. Bạn chỉ đếm lại những gì đã xảy ra với mười khách gần nhất, vì khi chưa biết khách rơi ở đâu thì rất dễ bỏ công sửa nhầm chỗ.</p>\n<h2>Bảy ngày của thử thách</h2>\n<p>Trong cả bảy ngày, bạn làm việc với một sản phẩm và một nhóm khách, chọn ngay từ hôm nay. Thành phẩm cuối cùng là <strong>Bảng quy trình bán hàng bảy bước</strong> của chính bạn: bảy dòng cho bảy bước bán hàng, hôm nay điền bản đầu, mỗi ngày sau sửa một phần, và tới Ngày 7 bạn đo lại để có bản thứ hai.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Ngày</th><th>Bước học kỹ</th><th>Phần bảng bạn sửa</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Nhìn cả bảy bước</td><td>Điền cả bảy dòng, có bảng bản 1</td></tr>\n<tr><td>2</td><td>Tìm kiếm khách và phân loại</td><td>Dòng 1 và phần phân loại của dòng 2</td></tr>\n<tr><td>3</td><td>Tiếp cận và khai thác sâu</td><td>Phần tiếp cận của dòng 2, và dòng 3</td></tr>\n<tr><td>4</td><td>Trình bày giải pháp</td><td>Dòng 4</td></tr>\n<tr><td>5</td><td>Xử lý từ chối</td><td>Dòng 5</td></tr>\n<tr><td>6</td><td>Đề nghị khách quyết định</td><td>Dòng 6</td></tr>\n<tr><td>7</td><td>Chăm sóc sau bán</td><td>Dòng 7, đếm lại cả bảng, có bản 2 của bảng</td></tr>\n</tbody></table></div>\n<p>Mỗi ngày có bốn phần: một video hướng dẫn, một tài liệu như bản bạn đang đọc, một bài tập làm ngay trên doanh nghiệp của bạn, và một video ngắn bạn tự quay để nộp. Bạn không cần làm bảy ngày liền nhau, bận một hôm thì hôm sau làm tiếp.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Bảy bước, và khách đang nghĩ gì ở từng bước</h3>\n<p>Từ lúc một người còn chưa biết tới bạn cho tới lúc họ dùng sản phẩm và quay lại mua thêm, việc bán hàng đi qua bảy bước. Ở mỗi bước, người bán làm một việc, còn khách đang ở một trạng thái khác nhau trong đầu.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước của người bán</th><th>Khách đang ở đâu</th><th>Khách đang nghĩ gì</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Nhận biết</td><td>Người này là ai, có liên quan gì tới mình không</td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Tìm hiểu</td><td>Nói chuyện với người này có đáng mất thời gian không</td></tr>\n<tr><td>3. Khai thác sâu</td><td>Tìm hiểu</td><td>Người này có hiểu đúng chuyện của mình không</td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Lựa chọn</td><td>Cách này có hợp với mình hơn những lựa chọn khác không</td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Lựa chọn</td><td>Mình còn lo điều này, nói ra thì người này trả lời thế nào</td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Mua</td><td>Mình quyết định bây giờ được chưa</td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Trải nghiệm</td><td>Mình đã chọn đúng chưa, có nên giới thiệu cho người khác không</td></tr>\n</tbody></table></div>\n<p>Khách đi qua những trạng thái này theo đúng thứ tự, và không ai nhảy cóc được. Một người còn đang tự hỏi bạn có hiểu chuyện của họ không mà đã nhận ngay bảng giá thì họ chưa có lý do gì để so sánh, ngoài con số. Nhiều lần khách \"chê đắt\" thật ra là khách bị kéo sang bước 4 khi còn đang ở bước 3.</p>\n<h3>2. Bước nào cũng có khách rơi, và các bước nối với nhau</h3>\n<p>Không có quy trình nào giữ được tất cả mọi người. Ở bước nào cũng có người dừng lại, và người đã dừng ở bước 2 thì không bao giờ tới được bước 6, dù câu đề nghị quyết định của bạn hay tới đâu.</p>\n<p>Bạn thử hình dung với số minh họa sau: mười người nhắn hỏi, năm người trả lời tiếp, ba người chịu kể chuyện của họ, và cuối cùng một người mua. Giả sử bạn chỉ sửa bước 2, để thay vì năm thì có bảy người trả lời tiếp. Các bước sau giữ nguyên cách làm, nhưng giờ có nhiều người đi vào hơn, nên cuối đường cũng có thêm người mua. Vì các bước nối với nhau như vậy, nâng được một bước là cả kết quả nhích lên theo.</p>\n<h3>3. Đo trước, sửa sau</h3>\n<p>Phần lớn chúng ta đã có sẵn một câu trả lời trong đầu: \"khách của mình chê giá\", hoặc \"mình chốt yếu\". Nhưng câu đó thường đến từ cuộc trao đổi mình nhớ rõ nhất, chứ chưa đến từ việc đếm. Khi đếm lại mười người gần nhất, nhiều người mới thấy khách rơi nhiều nhất ở một bước rất sớm, trước cả lúc kịp nói tới giá.</p>\n<p>Vì vậy hôm nay bạn ghi số trước, rồi mới ghi lý do. Trong bảng, lý do khách rơi là điều bạn <strong>đoán</strong>, nên bạn ghi chữ \"đoán\" ở đầu câu. Điều khách đã nói hoặc đã làm thì ghi thẳng, vì đó là điều <strong>thấy được</strong>. Hai thứ này cần nằm riêng, để những ngày sau bạn biết câu nào cần hỏi lại khách cho chắc.</p>\n<p>Không nhớ chính xác số thì bạn cứ ước, và ghi chữ \"ước\" bên cạnh. Một con số ước có ghi rõ vẫn hơn một ô để trống, vì tới Ngày 7 bạn sẽ đếm lại bằng số thật để so sánh.</p>\n<h2>Ô số đo ở từng dòng đếm gì</h2>\n<p>Từ dòng 2 tới dòng 6, mỗi dòng đếm trên những người đã qua dòng ngay trước, nên con số chỉ giữ nguyên hoặc giảm dần. Bước mất nhiều khách nhất là bước có số người rơi lớn nhất so với dòng trước.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Ô số đo ghi gì</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Mười khách này đến với bạn trong bao lâu, từ những nguồn nào. Ví dụ: 10 khách trong 6 tuần, 7 từ trang Facebook, 3 người quen giới thiệu</td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Trong mười người, bao nhiêu người trả lời tiếp và đúng là nhóm khách bạn phục vụ</td></tr>\n<tr><td>3. Khai thác sâu</td><td>Bao nhiêu người đã kể cho bạn họ muốn đạt điều gì và đang vướng ở đâu</td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Bao nhiêu người nhận được đề xuất từ bạn</td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Sau khi nghe đề xuất, bao nhiêu người vẫn trao đổi tiếp, kể cả người nói ra băn khoăn</td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Bao nhiêu người được bạn đề nghị quyết định, và bao nhiêu người mua</td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Trong những người đã mua, bao nhiêu người được bạn hỏi thăm sau khi dùng, và bao nhiêu người mua lại hoặc giới thiệu người khác. Khách mới mua chưa lâu thì bạn lấy số khách cũ và ghi \"ước\"</td></tr>\n</tbody></table></div>\n<div class=\"ngat\"></div>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Anh Minh có một xưởng thiết kế nội thất nhỏ, nhận thiết kế và thi công trọn căn hộ cho các gia đình vừa nhận nhà. Anh lấy mười người gần nhất đã nhắn hỏi trang Facebook của xưởng hoặc được người quen giới thiệu, trong sáu tuần.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Tôi làm gì, nói gì</th><th>Số đo</th><th>Khách rơi ở đâu, vì sao</th><th>Việc sửa</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Đăng ảnh công trình đã làm lên trang Facebook, nhận khách người quen giới thiệu</td><td>10 khách trong 6 tuần: 7 từ trang Facebook, 3 người quen giới thiệu</td><td>Khách tới chậm, gần như chỉ từ một nguồn. Đoán: ảnh đẹp nhưng không nói rõ xưởng làm cho ai</td><td class=\"trong\"></td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Trả lời tin nhắn bằng bảng giá theo mét vuông</td><td>5 trên 10 trả lời tiếp và đúng nhóm khách</td><td>4 người im lặng sau khi nhận bảng giá, 1 người chỉ cần đóng tủ bếp. Đoán: khách thấy con số trước khi thấy vì sao nên chọn xưởng</td><td class=\"trong\"></td></tr>\n<tr><td>3. Khai thác sâu</td><td>Hẹn tới xem nhà, hỏi diện tích, số phòng, số tiền dự định</td><td>3 trên 5</td><td>2 người không nhận lời hẹn xem nhà. Đoán: tôi hẹn gặp mà chưa nói buổi gặp giúp gì cho họ</td><td class=\"trong\"></td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Gửi bản vẽ phối cảnh và báo giá trọn gói</td><td>3 trên 3</td><td>Không mất ai, nhưng ba bản vẽ gần giống nhau</td><td class=\"trong\"></td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Khách nói giá cao thì giảm 5 phần trăm</td><td>2 trên 3</td><td>1 người không trả lời sau khi được giảm giá. Đoán: khách chưa thấy xưởng mình khác gì xưởng rẻ hơn</td><td class=\"trong\"></td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Gửi hợp đồng qua tin nhắn rồi chờ</td><td>Đề nghị 2, ký 1</td><td>1 người nói \"để bàn thêm với gia đình\". Tôi chưa hỏi từ đầu ai cùng quyết định</td><td class=\"trong\"></td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Bàn giao xong thì nhắn cảm ơn</td><td>Ước: năm qua hỏi thăm lại 1 trên 8 khách cũ, 2 người giới thiệu thêm khách</td><td>Gần như không liên lạc lại sau bàn giao. Đoán: khách cũ quên xưởng, nên ít người giới thiệu</td><td class=\"trong\"></td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td><strong>Bước mất nhiều khách nhất</strong></td><td>Bước 2, mất 5 trên 10 người</td></tr>\n<tr><td><strong>Đoán vì sao</strong></td><td>Tôi gửi bảng giá ngay tin nhắn đầu, khách chưa kịp kể nhà mình thế nào đã phải so sánh giá</td></tr>\n</tbody></table></div>\n<p>Bạn để ý dòng 5: ở đây không ghi \"khách chê đắt\", vì khách chỉ im lặng. Câu \"khách chưa thấy khác biệt\" là điều anh Minh đoán, nên đứng sau chữ \"đoán\". Còn bước 2 được khoanh vì số người rơi lớn nhất, dù trước khi đếm anh Minh vẫn nghĩ mình yếu nhất ở lúc đưa hợp đồng.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Điền theo cách bạn muốn làm.</strong> Bảng bản 1 là bức ảnh chụp tình trạng hôm nay, kể cả khi chưa đẹp, vì tới Ngày 7 bạn cần nó để so sánh.</li>\n<li><strong>Ghi điều đang đoán như thể đã thấy.</strong> Ví dụ ghi \"khách chê giá\" trong khi khách chỉ im lặng. Lý do khách rơi luôn bắt đầu bằng chữ \"đoán\", trừ khi khách đã nói thẳng ra.</li>\n<li><strong>Để trống ô số đo vì không nhớ chính xác.</strong> Bạn ghi số ước và chữ \"ước\", đừng bỏ trống.</li>\n<li><strong>Đếm mỗi dòng trên một nhóm người khác nhau.</strong> Dòng sau chỉ đếm những người đã qua dòng trước, nên từ dòng 2 tới dòng 6 con số không bao giờ tăng lên.</li>\n<li><strong>Khoanh bước mình thấy khó chịu nhất thay vì bước có số rơi lớn nhất.</strong> Bạn khoanh theo số, rồi mới so với điều mình vẫn nghĩ.</li>\n<li><strong>Đưa thông tin thật của khách vào bài.</strong> Bạn không ghi tên, số điện thoại hay ảnh chụp tin nhắn của khách. Cần nhắc tới ai thì gọi là \"khách A\", \"khách B\".</li>\n</ul>\n<div class=\"ngat\"></div>",
"2": "<aside class=\"goi\">Sau hôm nay, bạn có một trang chân dung cho nhóm khách của mình và bốn tiêu chí để nhận ra sớm ai đúng là người nên tư vấn. Trong bảng, bạn sửa xong dòng 1 và phần phân loại của dòng 2.</aside>\n<p>Hôm qua bạn đã thấy khách rơi ở đâu. Hôm nay chúng ta bắt đầu sửa từ đầu bảng, vì hai dòng đầu quyết định ai đi vào những bước sau. Một người không thuộc nhóm khách của bạn mà vẫn đi tiếp, bạn sẽ tốn công hỏi chuyện và trình bày. Rồi họ dừng ở bước 5 hay bước 6 và bạn tưởng mình yếu ở khâu chốt.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Một nhóm khách, không phải \"mọi người\"</h3>\n<p>Khi bạn bán cho mọi người, lời bạn nói ra cũng phải chung chung cho vừa với mọi người, nên người đọc lướt qua mà không thấy câu nào nói về mình.</p>\n<p>So sánh hai cách gọi tên nhóm khách của một công ty dịch vụ kế toán:</p>\n<ul>\n<li>\"Doanh nghiệp nhỏ cần làm kế toán.\"</li>\n<li>\"Chủ cửa hàng bán online, doanh thu tăng nhanh trong một hai năm, tiền về nhiều tài khoản và tới giờ vẫn tự ghi sổ.\"</li>\n</ul>\n<p>Câu đầu đúng, nhưng ai cũng nói được. Câu thứ hai làm người trong nhóm đó thấy ngay đây là chuyện của mình, và cũng cho bạn biết nên nói gì với họ.</p>\n<p>Thu hẹp nhóm khách không có nghĩa là từ chối người khác, vì người ngoài nhóm vẫn mua được. Chỉ là lời bạn nói, bài bạn viết và câu bạn hỏi đều hướng vào một nhóm, nên nhóm đó nghe rõ hơn.</p>\n<h3>2. Gọi tên vấn đề, kết quả khách muốn, và lúc nhu cầu xuất hiện</h3>\n<p>Tuổi, giới tính và nghề nghiệp cho biết khách là ai trên giấy, nhưng chưa cho biết khi nào khách chịu nghe bạn. Một chân dung dùng được phải trả lời thêm ba câu:</p>\n<ul>\n<li>Họ đang gặp vấn đề gì, nói bằng lời của chính họ.</li>\n<li>Họ muốn đạt kết quả gì, cụ thể tới mức nhìn vào là biết đã đạt hay chưa.</li>\n<li>Chuyện gì vừa xảy ra thì họ bắt đầu đi tìm giải pháp. Đây là lúc nhu cầu xuất hiện, và cũng là lúc khách cần người tư vấn nhất.</li>\n</ul>\n<p>Như hôm qua, bạn tách điều đã nghe từ khách với điều đang đoán. Khách từng nói hoặc từng làm đúng như vậy thì ghi \"đã nghe\", còn bạn tự suy ra thì ghi \"đoán\". Chân dung toàn chữ \"đoán\" vẫn dùng được, nó chỉ cho bạn biết tuần này cần hỏi lại khách điều gì.</p>\n<h3>3. Dùng bốn tiêu chí để phân loại khách</h3>\n<p>Có chân dung rồi, mỗi khi một người mới hỏi tới, bạn trả lời hai câu trong đầu:</p>\n<ol>\n<li>Người này có đúng nhóm khách của mình không?</li>\n<li>Nếu đúng, họ đang tìm hiểu hay sắp mua?</li>\n</ol>\n<p>Ba loại người này cần ba cách trả lời khác nhau, tùy họ đứng ở đâu so với nhóm khách bạn chọn. Người chưa đúng nhóm vẫn được trả lời tử tế, có thể được giới thiệu tới chỗ hợp hơn, nhưng bạn không kéo họ vào một buổi tư vấn dài. Người đúng nhóm mà còn đang tìm hiểu thì cần thứ giúp họ hiểu thêm, và một lời hẹn hỏi lại. Người đúng nhóm và sắp mua thì bạn tư vấn ngay, đừng để họ chờ.</p>\n<p>Còn một điều nữa cần biết sớm: người đang trò chuyện với bạn có phải người quyết định không. Nhiều khi người hỏi là nhân viên hỏi giúp chủ, hay một người còn phải bàn với vợ, chồng, với người góp vốn.</p>\n<p>Để trả lời nhanh những câu đó với từng khách, bạn dùng bộ bốn tiêu chí mà nhiều đội ngũ bán hàng vẫn dùng, gọi tắt là B.A.N.T, ghép từ bốn chữ tiếng Anh viết tắt. Tên gọi xếp theo B, A, N, T, nhưng bạn hỏi theo thứ tự dưới đây: nhu cầu trước rồi mới tới ngân sách. Câu đầu tiên đã hỏi tiền thì khách nghe như mình đang bị sàng lọc.</p>\n<ol>\n<li><strong>Nhu cầu (Need).</strong> Nhu cầu của khách có hợp với sản phẩm của bạn không. Có thể hỏi: \"Hiện anh chị đang vướng ở chỗ nào?\", \"Vì sao anh chị muốn giải quyết chuyện này vào lúc này?\", \"Trước giờ anh chị đã tìm hiểu ở đâu, đã thử những cách nào?\"</li>\n<li><strong>Ngân sách (Budget).</strong> Khách có khả năng chi trả cho sản phẩm của bạn không. Có thể hỏi: \"Với việc này, anh chị thường dành ngân sách thế nào?\" Hoặc bạn nói trước loại sản phẩm này có mức từ cao tới thấp, rồi hỏi khách thấy mình hợp với mức nào.</li>\n<li><strong>Người quyết định (Authority).</strong> Người đang trò chuyện với bạn có quyền quyết định không. Có thể hỏi: \"Để bắt đầu, bên anh chị thường cần qua những bước nào?\", \"Ngoài anh chị, còn ai cùng quyết định việc này không?\"</li>\n<li><strong>Thời điểm mua (Timeline).</strong> Khách muốn mua ngay hay để sau. Có thể hỏi: \"Anh chị muốn bắt đầu khi nào?\", \"Anh chị có thể bắt đầu ngay, hay còn chờ thêm việc gì?\"</li>\n</ol>\n<p>Nhu cầu và ngân sách cho biết khách có đúng nhóm không. Người quyết định cho biết bạn đang nói chuyện với đúng người chưa. Thời điểm mua cho biết khách đang tìm hiểu hay sắp mua. Bạn viết lại các câu hỏi theo sản phẩm của mình, sao cho mỗi tiêu chí trả lời được \"có\" hoặc \"không\" khi nhìn vào một khách cụ thể. \"Khách có tiềm năng\" không phải tiêu chí, vì không ai trả lời có hay không được. Bốn tiêu chí giúp bạn biết khách có phù hợp không trước khi trình bày giải pháp.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Chị Hà có một công ty dịch vụ kế toán nhỏ, nhận ghi sổ và khai thuế hằng tháng cho doanh nghiệp. Ở Ngày 1, chị đếm được mười người hỏi trong năm tuần, và bước 2 mất nhiều nhất: năm trên mười người không trả lời sau khi nhận bảng giá.</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td>Sản phẩm hoặc dịch vụ</td><td>Ghi sổ và khai thuế hằng tháng</td></tr>\n<tr><td>Nhóm khách</td><td>Chủ cửa hàng bán online, doanh thu tăng nhanh trong một hai năm, vẫn tự ghi sổ</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<thead><tr><th>Ba khối</th><th>Bạn điền</th><th>Đã nghe hay đoán</th></tr></thead>\n<tbody>\n<tr><td>Khối 1. Họ là ai, vì sao hợp</td><td>Chủ cửa hàng bán online đã mở công ty, từ ba người làm trở lên, chưa có kế toán riêng. Hợp vì công ty chị quen làm sổ cho nhiều đơn nhỏ, tiền về từ nhiều nơi</td><td>Đã nghe: ba khách cũ đều như vậy. Đoán: từ ba người làm trở lên</td></tr>\n<tr><td>Khối 2. Vấn đề và kết quả muốn</td><td>\"Không biết tháng này mình lời hay lỗ thật\", \"tiền về mấy tài khoản, đối chiếu không khớp\". Muốn tháng nào cũng biết lời lỗ, và yên tâm khi cơ quan thuế hỏi</td><td>Đã nghe: hai câu trong ngoặc. Đoán: chuyện yên tâm khi bị hỏi</td></tr>\n<tr><td>Khối 3. Lúc nhu cầu xuất hiện</td><td>Vừa nhận thông báo của cơ quan thuế, sắp tới kỳ quyết toán cuối năm, hoặc người quen vẫn làm sổ giúp vừa nghỉ</td><td>Đã nghe: một khách nhắn ngay hôm nhận thông báo. Đoán: hai chuyện còn lại</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Ba khối có khớp không</td><td>Khớp: cửa hàng lớn nhanh thì sổ sách rối, và tới lúc bị hỏi mới thấy cần</td></tr>\n<tr><td>Một điều cần hỏi lại khách thật</td><td>\"Hôm anh chị quyết định tìm người làm kế toán, đã có chuyện gì xảy ra?\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Tiêu chí</th><th>Câu hỏi chị Hà dùng</th><th>Cho biết</th></tr></thead>\n<tbody>\n<tr><td>1. Nhu cầu. Đạt khi bán online là nguồn thu chính, đã mở công ty, chưa có kế toán riêng</td><td>\"Anh chị đang bán chủ yếu ở đâu? Hiện ai đang ghi sổ, và anh chị đang vướng ở chỗ nào?\"</td><td>Đúng nhóm</td></tr>\n<tr><td>2. Ngân sách. Đạt khi khách sẵn sàng chi cho việc ghi sổ hằng tháng, không chỉ khai thuế một lần</td><td>\"Bên em có gói chỉ khai thuế và gói ghi sổ hằng tháng kèm báo cáo lời lỗ. Anh chị đang nghĩ tới gói nào?\"</td><td>Đúng nhóm</td></tr>\n<tr><td>3. Người quyết định. Đạt khi người hỏi là chủ, hoặc có chủ cùng tham gia</td><td>\"Ngoài anh chị, còn ai cùng quyết định việc thuê kế toán không?\"</td><td>Đúng người</td></tr>\n<tr><td>4. Thời điểm mua. Đạt khi có một mốc gần: thông báo thuế, kỳ quyết toán, người làm sổ nghỉ</td><td>\"Anh chị muốn bắt đầu từ tháng nào? Gần đây có chuyện gì khiến anh chị nghĩ tới việc này?\"</td><td>Sắp mua</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, phần tổng hợp.</strong> Xếp lại mười khách, chị Hà có hai người sắp mua, bốn người đang tìm hiểu, bốn người chưa đúng nhóm: hai người cần dịch vụ mở công ty, một bạn sinh viên hỏi chỗ học kế toán, một hộ kinh doanh chỉ muốn khai thuế một lần với mức thấp nhất. Trong năm người rơi ở bước 2, bốn người vốn chưa đúng nhóm. Một trong hai người sắp mua là nhân viên hỏi giúp chủ cửa hàng, nên chị hẹn gọi lại khi có cả chủ.</p>\n<p><strong>Mẫu 4, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Trước đây</th><th>Từ nay</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Đăng bài \"nhận làm kế toán trọn gói\"</td><td>Viết bài nói thẳng với chủ cửa hàng bán online, dùng đúng những câu khách đã nói</td><td>Viết lại ba bài theo ba câu khách đã nói ở Khối 2</td></tr>\n<tr><td>2. Phần phân loại</td><td>Ai hỏi cũng gửi bảng giá</td><td>Tin nhắn đầu hỏi nhu cầu trước, rồi mới hỏi gói, người cùng quyết định và lúc muốn bắt đầu. Chưa đúng nhóm thì giới thiệu chỗ hợp hơn. Đang tìm hiểu thì gửi bảng tự kiểm tra sổ sách, hẹn hỏi lại sau một tuần. Sắp mua thì hẹn gọi trong ngày</td><td>Dùng tin nhắn mới với mọi người hỏi trong tuần này</td></tr>\n</tbody></table></div>\n<p>Bạn để ý: trước khi xếp lại, chị Hà nghĩ phải sửa ngay cách trả lời tin nhắn cho khéo hơn. Xếp xong, chị thấy phần lớn người rơi ở bước 2 vốn không cần dịch vụ của chị. Việc cần làm trước là có thêm người đúng nhóm hỏi tới, và trả lời ba loại người theo ba cách.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Gọi tên nhóm khách chỉ bằng tuổi, giới tính hay nghề.</strong> Chân dung phải nói được họ gặp vấn đề gì và muốn đạt điều gì.</li>\n<li><strong>Chọn nhóm rộng vì sợ mất khách.</strong> Người ngoài nhóm vẫn mua được. Thu hẹp nhóm là để lời bạn nói rõ hơn với một nhóm, không phải để từ chối ai.</li>\n<li><strong>Viết vấn đề bằng lời của sản phẩm.</strong> Ví dụ \"cần dịch vụ kế toán trọn gói\". Khách không nói vậy, khách nói \"không biết tháng này lời hay lỗ\".</li>\n<li><strong>Tiêu chí không trả lời được có hay không.</strong> Ví dụ \"khách nghiêm túc\", \"khách có tiềm năng\".</li>\n<li><strong>Hỏi ngân sách ngay câu đầu.</strong> Khách nghe như đang bị sàng lọc. Hỏi nhu cầu trước, khách kể xong chuyện của họ thì hỏi ngân sách mới tự nhiên.</li>\n<li><strong>Đổi sản phẩm hoặc nhóm khách giữa chừng.</strong> Bạn giữ một sản phẩm và một nhóm khách tới hết Ngày 7, nếu không thì bảng bản 1 và bản 2 không so sánh được.</li>\n<li><strong>Trả lời người chưa đúng nhóm một cách lạnh lùng.</strong> Họ có thể quen người đúng nhóm. Một lời giới thiệu tử tế tới chỗ hợp hơn vẫn là cách đối xử đúng.</li>\n</ul>\n<div class=\"ngat\"></div>",
"3": "<aside class=\"goi\">Sau hôm nay, bạn có một câu mở đầu cho cuộc trò chuyện với khách, một bộ câu hỏi theo ba tầng, và ba câu tóm tắt điều khách mong, điều khách lo, viết bằng lời của ba khách thật. Trong bảng, bạn sửa dòng 2 về tiếp cận và dòng 3 về khai thác sâu.</aside>\n<p>Hôm qua bạn đã chọn nhóm khách và biết cách nhận ra ai đúng nhóm. Hôm nay là lúc ngồi xuống nói chuyện với họ. Chỗ vấp hay gặp nhất ở bước này là hỏi vài câu cho có rồi giới thiệu luôn. Khách chưa kịp kể mình thật sự cần gì thì người bán đã nói về sản phẩm, và từ đó trở đi người bán phải đoán khách cần gì.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Một câu mở đầu: hỏi để hiểu trước, giới thiệu sau</h3>\n<p>Khách nhắn hỏi là phần lớn chúng ta trả lời ngay: giá bao nhiêu, gồm những gì, bao lâu thì xong. Trả lời xong là bạn đã sang phần giới thiệu, và rất khó quay lại hỏi khách.</p>\n<p>Vì vậy bạn cần một câu mở đầu nói trước với khách rằng bạn sẽ hỏi trước, giới thiệu sau. Ví dụ:</p>\n<aside class=\"goi\">\"Dạ em sẽ hỏi anh chị vài câu về việc anh chị đang làm trước, để biết phần nào hợp với anh chị, rồi em mới giới thiệu. Chừng mười lăm phút thôi ạ.\"</aside>\n<p>Câu này không xin phép khách. Nó nói rõ bạn sẽ làm gì và vì sao, giống một người cố vấn mở đầu buổi làm việc. Khách hỏi giá ngay từ đầu thì bạn báo một khoảng giá, rồi nói tiếp: \"Để báo giá đúng cho anh chị, em cần hiểu anh chị đang cần gì đã.\"</p>\n<h3>2. Ba tầng của điều khách cần</h3>\n<p>Điều khách cần có ba tầng, càng xuống sâu càng ít người hỏi tới.</p>\n<p><strong>Tầng một, thứ khách nhận được.</strong> Số lượng, gồm những gì, giao khi nào, giá bao nhiêu. Ở tầng này khách luôn có giá nơi khác để so sánh, nên nếu bạn chỉ nói ở tầng này thì khách sẽ so sánh giá.</p>\n<p><strong>Tầng hai, trải nghiệm và cảm xúc.</strong> Lần trước khách làm việc này thấy thế nào, mệt ở đâu, bực vì điều gì, sợ điều gì lặp lại.</p>\n<p><strong>Tầng ba, ý nghĩa và lý do khách tới.</strong> Vì sao lúc này khách mới tìm tới, chuyện này quan trọng với khách ở chỗ nào, làm xong thì công việc của khách thay đổi ra sao.</p>\n<p>Hai khách cùng hỏi một dịch vụ, cùng số lượng, cùng ngân sách, nhưng chuyện ở tầng hai và tầng ba có thể khác hẳn nhau. Bạn chỉ giới thiệu trúng cho từng người khi đã nghe họ kể tới hai tầng đó.</p>\n<h3>3. Phần lớn người tư vấn dừng ở tầng một</h3>\n<p>Nghe lại các cuộc tư vấn thì rất hay gặp chuyện này: người bán hỏi số lượng, ngân sách, thời gian, rồi dừng. Lý do không phải họ lười. Câu hỏi ở tầng một dễ hỏi và khách dễ trả lời, còn câu hỏi ở tầng hai, tầng ba thì mình ngại, sợ hỏi sâu quá khách khó chịu.</p>\n<p>Thật ra khách thường sẵn lòng kể, miễn là bạn hỏi về chuyện của khách chứ không hỏi về sản phẩm. Ba câu dưới đây dùng được ở hầu hết các ngành:</p>\n<ul>\n<li>\"Anh chị đã thử những cách nào rồi?\"</li>\n<li>\"Có lần nào xong việc này lại sinh thêm việc khác không?\"</li>\n<li>\"Chuyện này ảnh hưởng tới công việc của anh chị thế nào?\"</li>\n</ul>\n<p>Hỏi xong thì im lặng chờ khách nói hết. Khách kể tới đâu, bạn hỏi tiếp từ đúng chỗ đó: \"Lúc đó anh chị xử lý thế nào?\", \"Sao chuyện đó làm anh chị lo?\".</p>\n<p>Cuối cuộc trò chuyện, bạn tóm lại bằng một câu: \"Như vậy anh chị mong..., và anh chị lo...\". Dùng đúng từ khách đã dùng, rồi hỏi lại: \"Em hiểu vậy có đúng không anh chị?\". Bạn giữ câu tóm tắt này lại, vì Ngày 4 bạn mở phần trình bày bằng nó, và Ngày 6 bạn nhắc lại nó trước khi đề nghị khách quyết định.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Anh Tuấn nhận chụp ảnh và quay video sản phẩm cho các thương hiệu nhỏ bán online. Ở Ngày 2, anh chọn nhóm khách là chủ thương hiệu thời trang tự may, bán qua trang cá nhân và sàn thương mại điện tử, đang tự chụp bằng điện thoại.</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Lâu nay mở đầu bằng</td><td>Khách hỏi giá thì gửi ngay bảng giá ba gói</td></tr>\n<tr><td>Câu mở đầu mới</td><td>\"Dạ em hỏi chị vài câu về cửa hàng trước, để biết chị cần gói nào cho đúng, rồi em gửi phương án. Chừng mười phút thôi chị.\"</td></tr>\n<tr><td>Khách hỏi giá ngay</td><td>\"Dạ gói ảnh bên em từ vài triệu tới hơn chục triệu, tùy số mẫu và có quay video hay không. Để báo giá đúng, em cần biết chị đang bán hàng thế nào đã.\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, khách A đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Khách A</th></tr></thead>\n<tbody>\n<tr><td>Hỏi về</td><td>Giá chụp ba mươi mẫu áo</td></tr>\n<tr><td>Xuống tới tầng</td><td>Tầng ba</td></tr>\n<tr><td>Câu hỏi giúp kể sâu nhất</td><td>\"Chị đã thử những cách nào rồi?\"</td></tr>\n<tr><td>Câu khách nói đáng nhớ</td><td>\"Chị thuê một bạn chụp rồi, ảnh đẹp nhưng lên trang thì mỗi tấm một màu, khách hỏi màu thật là màu nào chị cũng không dám chắc\"</td></tr>\n<tr><td>Câu tóm tắt</td><td>Chị mong ảnh đăng lên trang đúng màu áo thật, khách không phải hỏi đi hỏi lại, và chị lo tốn tiền chụp mà ảnh không dùng được, khách nhận áo thấy khác màu rồi trả lại</td></tr>\n<tr><td>Khách trả lời</td><td>\"Đúng rồi, nhất là chuyện trả hàng\"</td></tr>\n</tbody></table></div>\n<p>Ở khách A, câu \"chị đã thử những cách nào rồi\" đưa cuộc trò chuyện xuống tầng hai: chị đã thuê người chụp và thất vọng. Anh Tuấn hỏi tiếp \"sao chuyện màu làm chị lo vậy\", và chị kể tới tầng ba: tháng trước có mười mấy đơn trả lại vì khách thấy áo khác màu. Nếu dừng ở tầng một, anh Tuấn chỉ biết chị cần chụp ba mươi mẫu, và lại gửi bảng giá như mọi lần.</p>\n<p>Với khách B, anh Tuấn chỉ hỏi được tới tầng một vì khách vội, hẹn nói tiếp hôm sau. Khách C chưa trả lời tin nhắn.</p>\n<p><strong>Mẫu 4, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Trước đây</th><th>Từ nay</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>2. Phần tiếp cận</td><td>Khách hỏi giá thì gửi bảng giá</td><td>Nói khoảng giá, rồi dùng câu mở đầu mới để hỏi trước</td><td>Dùng câu mở đầu mới với mọi người hỏi giá trong tuần</td></tr>\n<tr><td>3. Khai thác sâu</td><td>Hỏi số mẫu, hạn giao, ngân sách</td><td>Hỏi thêm ít nhất một câu tầng hai và một câu tầng ba, cuối cuộc tóm tắt mong và lo</td><td>Ghi câu tóm tắt cho mỗi khách vào sổ, để dùng ở bước trình bày</td></tr>\n</tbody></table></div>\n<p>Bạn để ý: câu tóm tắt dùng đúng từ khách dùng, \"đúng màu\", \"trả lại\", chứ không dùng từ người bán hay nói như \"chuẩn màu chuyên nghiệp\". Sang Ngày 4, anh Tuấn sẽ mở phần trình bày bằng chính câu đó.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Hỏi như điền phiếu.</strong> Hỏi liền năm sáu câu tầng một rồi chuyển sang giới thiệu. Một câu hỏi tốt, rồi hỏi tiếp từ điều khách vừa kể, có ích hơn mười câu hỏi theo danh sách.</li>\n<li><strong>Ngắt lời khách để giải thích.</strong> Khách vừa kể một chuyện không vui với nơi cũ, bạn nói ngay bên mình không như vậy. Lúc đó khách thôi kể.</li>\n<li><strong>Câu tóm tắt dùng từ của người bán.</strong> Ví dụ \"anh chị cần gói cao cấp\". Khách đâu có nói vậy. Câu tóm tắt phải nghe như chính khách nói.</li>\n<li><strong>Không hỏi lại khách xem mình hiểu đúng chưa.</strong> Bạn có thể hiểu sai, và hỏi lại là cách nhanh nhất để biết.</li>\n<li><strong>Ghi cuộc trò chuyện tưởng tượng vào Mẫu 3.</strong> Chưa gặp đủ khách thì ghi số đã gặp. Ba câu tóm tắt thật quý hơn ba câu đẹp tự nghĩ ra.</li>\n<li><strong>Hỏi những chuyện riêng không liên quan.</strong> Tầng ba là lý do khách tới với việc này, không phải chuyện gia đình hay tiền bạc riêng của khách.</li>\n</ul>\n<div class=\"ngat\"></div>",
"4": "<aside class=\"goi\">Sau hôm nay, bạn có một bảng ghi từng chuyện khách đã kể và phần sản phẩm giải quyết đúng chuyện đó, và một phần trình bày mới viết cho một khách thật. Trong bảng, bạn sửa dòng 4.</aside>\n<p>Hôm qua bạn đã ngồi nghe khách kể, và có trong tay câu tóm tắt điều khách mong, điều khách lo. Hôm nay bạn dùng chính câu đó làm điểm xuất phát để trình bày. Chỗ vấp hay gặp ở bước này là nói về sản phẩm theo đúng một bài cho mọi khách, kể hết những gì sản phẩm có, và để khách tự tìm xem phần nào liên quan tới mình. Khách thường không tìm, họ nghe xong rồi nói \"để em xem thêm\" và đi.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Mở đầu bằng điều khách mong và điều khách lo</h3>\n<p>Trước khi nói một câu nào về sản phẩm, bạn nhắc lại điều khách đã kể. Khách nghe thấy chuyện của mình trước, rồi mới nghe tới chuyện của bạn.</p>\n<p>Ở Ngày 3, anh Tuấn chụp ảnh sản phẩm đã có câu tóm tắt cho khách A. Hôm nay anh mở phần trình bày như sau:</p>\n<aside class=\"goi\">\"Hôm trước chị kể chị mong ảnh đăng lên trang đúng màu áo thật, khách không phải hỏi đi hỏi lại, và chị lo tốn tiền chụp mà ảnh không dùng được, khách nhận áo thấy khác màu rồi trả lại. Phương án em đề xuất hôm nay là để giải quyết đúng hai chuyện đó của chị.\"</aside>\n<p>Câu mở này làm hai việc: khách biết bạn đã nghe kỹ, và từ đây khách nghe mọi điều bạn nói sau với một câu hỏi trong đầu: nó có giúp chuyện màu áo, chuyện trả hàng hay không.</p>\n<h3>2. Nói điều khách nhận được, không đọc danh sách tính năng</h3>\n<p>Tính năng là thứ sản phẩm có, nhưng khách không mua tính năng, khách mua điều tính năng đó làm được cho họ. Cùng một tính năng, bạn có thể nói theo ba tầng, khớp với ba tầng bạn đã hỏi ở Ngày 3.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Cách nói</th><th>Ví dụ của anh Tuấn</th></tr></thead>\n<tbody>\n<tr><td><strong>Tính năng</strong>, thứ sản phẩm có</td><td>\"Bên em chụp có bảng chuẩn màu, chỉnh màu từng ảnh.\"</td></tr>\n<tr><td><strong>Tầng một</strong>, thứ khách nhận được</td><td>\"Ba mươi mẫu áo, mỗi mẫu bốn ảnh, màu đúng như áo thật.\"</td></tr>\n<tr><td><strong>Tầng hai</strong>, trải nghiệm của khách</td><td>\"Chị không phải trả lời từng tin nhắn hỏi áo ngoài có giống ảnh không.\"</td></tr>\n<tr><td><strong>Tầng ba</strong>, ý nghĩa với khách</td><td>\"Khách nhận áo đúng như ảnh nên ít trả hàng, chị yên tâm chạy quảng cáo cho mẫu mới.\"</td></tr>\n</tbody></table></div>\n<p>Bạn không cần nói đủ cả ba tầng cho mọi phần mà chỉ nói tới đúng tầng khách đã kể. Khách A của anh Tuấn kể tới chuyện trả hàng, nên anh nói tới tầng ba. Một khách khác chỉ hỏi giá và hạn giao thì nói ở tầng một là đủ, rồi hỏi thêm.</p>\n<h3>3. Phần nào không liên quan tới chuyện khách đã kể thì bỏ</h3>\n<p>Trước mỗi phần định nói, bạn tự hỏi: \"Phần này giúp được gì cho chuyện khách vừa kể?\" Trả lời được thì nói, và nói luôn câu trả lời đó cho khách nghe. Không trả lời được thì bỏ, dù đó là phần bạn tự hào nhất về sản phẩm.</p>\n<p>Bỏ bớt thì tiếc, nhưng phần trình bày ngắn và trúng làm khách tin hơn phần trình bày dài và đủ. Phần bỏ đi cũng không mất, khách hỏi tới thì bạn nói.</p>\n<p>Hai khách khác nhau sẽ nghe hai phần trình bày khác nhau, dù cùng một sản phẩm. Đó chính là dấu hiệu bạn đang trình bày đúng.</p>\n<p>Cuối phần trình bày bạn hỏi khách một câu để biết mình nói trúng chưa: \"Trong mấy phần em vừa nói, anh chị muốn em nói kỹ hơn phần nào?\" Nghe khách trả lời câu này, bạn biết nên nói thêm ở đâu và điều gì cần nhắc lại khi đề nghị quyết định ở Ngày 6.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Anh Khoa bán phần mềm quản lý bán hàng cho cửa hàng nhỏ. Nhóm khách anh chọn là chủ cửa hàng vật liệu xây dựng và điện nước, một tới ba nhân viên, đang ghi sổ tay và tính tiền bằng máy tính bỏ túi. Ở Ngày 3 anh trò chuyện với khách A là một chủ cửa hàng điện nước, và có câu tóm tắt: \"Anh mong cuối ngày biết được hôm nay lời lỗ bao nhiêu, hàng nào sắp hết, mà không phải ngồi cộng sổ tới khuya. Anh lo mua về rồi nhân viên không chịu dùng, và sổ sách mấy năm nay không chuyển qua được.\"</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Khách kể gì</th><th>Tầng</th><th>Phần sản phẩm giải quyết</th><th>Câu anh Khoa sẽ nói</th></tr></thead>\n<tbody>\n<tr><td>\"Tối nào cũng ngồi cộng sổ tới mười một giờ\"</td><td>Tầng hai</td><td>Máy tự làm báo cáo cuối ngày</td><td>\"Đóng cửa xong, anh mở điện thoại ra là biết hôm nay bán được bao nhiêu, lời bao nhiêu, không phải ngồi cộng sổ nữa.\"</td></tr>\n<tr><td>\"Ống nước loại bán chạy hết lúc nào không hay, khách tới hỏi thì không còn hàng\"</td><td>Tầng một</td><td>Báo hàng sắp hết</td><td>\"Mặt hàng nào sắp hết thì máy báo trước, anh kịp nhập thêm, khách tới là có hàng.\"</td></tr>\n<tr><td>\"Hai nhân viên của anh lớn tuổi rồi, máy móc phức tạp là họ không dùng\"</td><td>Tầng hai</td><td>Màn hình bán hàng chỉ có ba nút, buổi hướng dẫn tại cửa hàng</td><td>\"Em tới tận cửa hàng hướng dẫn hai anh chị nhân viên, bán thử cùng họ một buổi sáng. Họ chỉ cần nhớ ba nút.\"</td></tr>\n<tr><td>\"Muốn về quê ăn giỗ vài ngày mà không dám đi\"</td><td>Tầng ba</td><td>Xem đơn hàng và hàng tồn từ xa</td><td>\"Anh về quê vẫn xem được hôm nay cửa hàng bán những đơn nào, nên anh yên tâm đi vài ngày.\"</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<thead><tr><th>Những phần bỏ hôm nay</th></tr></thead>\n<tbody>\n<tr><td>Tích điểm cho khách quen, in hóa đơn điện tử, nối với sàn thương mại điện tử. Khách A không kể chuyện nào liên quan tới ba phần này.</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Câu</th><th></th></tr></thead>\n<tbody>\n<tr><td>Anh mong</td><td>Cuối ngày biết lời lỗ và hàng sắp hết, không phải ngồi cộng sổ tới khuya</td></tr>\n<tr><td>Anh lo</td><td>Nhân viên không chịu dùng, sổ sách cũ không chuyển qua được</td></tr>\n<tr><td>Phương án em đề xuất giúp anh</td><td>Có báo cáo ngay khi đóng cửa, có người tới tận nơi chỉ nhân viên, và bên em nhập giúp danh sách hàng từ sổ cũ trong tuần đầu</td></tr>\n<tr><td>Câu hỏi cuối</td><td>\"Trong mấy phần em vừa nói, anh muốn em nói kỹ hơn phần nào?\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Trước đây</th><th>Từ nay</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>4. Trình bày giải pháp</td><td>Mở bảng tính năng, đi lần lượt mười hai mục</td><td>Mở bằng mong và lo của khách, chỉ nói những phần liên quan tới chuyện khách kể, cuối buổi hỏi khách muốn nghe kỹ hơn phần nào</td><td>Trước mỗi buổi gặp, điền Mẫu 1 cho khách đó</td></tr>\n</tbody></table></div>\n<p>Bạn để ý: anh Khoa có mười hai tính năng nhưng chỉ nói bốn. Câu anh nói không bắt đầu bằng tên tính năng mà bắt đầu bằng chuyện của khách, \"đóng cửa xong\", \"anh về quê\". Và nỗi lo nhân viên không chịu dùng được trả lời ngay trong phần trình bày, không chờ khách hỏi.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Nhắc lại mong và lo bằng lời của mình.</strong> \"Anh cần giải pháp quản lý tối ưu.\" Khách không nói vậy. Dùng đúng lời khách: \"không phải ngồi cộng sổ tới khuya\".</li>\n<li><strong>Nói tên tính năng rồi dừng.</strong> \"Bên em có báo cáo tự động.\" Khách phải tự nghĩ báo cáo đó giúp gì cho mình. Bạn nói luôn điều khách nhận được.</li>\n<li><strong>Thêm phần thừa cho đủ.</strong> Nói xong bốn phần trúng, lại thêm \"à, bên em còn có...\" thêm ba phần khác. Phần thừa làm phần trúng nhạt đi.</li>\n<li><strong>Né nỗi lo của khách.</strong> Khách đã nói lo điều gì mà phần trình bày không nhắc tới, khách sẽ mang nỗi lo đó về nhà. Trả lời nó ngay trong phần trình bày.</li>\n<li><strong>Một bài cho mọi khách.</strong> Nếu Mẫu 1 của khách A và khách B giống hệt nhau, có thể bạn đã điền theo sản phẩm chứ chưa theo khách.</li>\n<li><strong>Không hỏi lại khách cuối phần trình bày.</strong> Bạn mất cơ hội biết mình nói trúng chỗ nào.</li>\n</ul>\n<div class=\"ngat\"></div>",
"5": "<aside class=\"goi\">Sau hôm nay, bạn có ba câu khách của bạn hay nói khi chưa quyết, và cách đáp từng câu theo ba bước. Trong bảng, bạn sửa dòng 5.</aside>\n<p>Hôm qua bạn đã trình bày bắt đầu từ chính chuyện khách kể. Dù trình bày tốt tới đâu, vẫn sẽ có khách nói \"để anh suy nghĩ thêm\", \"giá cao quá\", \"đợt này bận quá\". Chỗ vấp ở bước này thường không nằm ở câu khách nói, mà ở cách người bán phản ứng ngay sau đó: giải thích một hơi thật dài, hoặc giảm giá luôn cho xong.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Câu từ chối chưa phải câu trả lời cuối</h3>\n<p>Câu \"để anh suy nghĩ thêm\" có thể là một trong ba chuyện, và lúc khách vừa nói thì bạn chưa biết là chuyện nào:</p>\n<ul>\n<li>Khách cần thêm thời gian.</li>\n<li>Khách còn một nỗi lo chưa nói ra.</li>\n<li>Khách chưa thấy phương án liên quan tới mình.</li>\n</ul>\n<p>Vì chưa biết là chuyện nào, hai cách phản ứng quen thuộc của người bán đều dễ sai. Giải thích một hơi là bạn đang trả lời một nỗi lo do bạn tự đoán, và khách càng nghe càng thấy bị ép. Giảm giá ngay là bạn coi như vấn đề nằm ở giá, trong khi có khi không phải. Giảm xong mà khách vẫn chưa mua thì bạn mất cả tiền lẫn vị thế.</p>\n<p>Nghe khách từ chối, việc đầu tiên là hỏi để hiểu, chưa phải đáp.</p>\n<h3>2. Ba bước gỡ băn khoăn</h3>\n<p><strong>Bước 1. Nhắc lại, rồi dừng.</strong> Bạn nói lại đúng ý khách vừa nói, giọng nhẹ, rồi im lặng chờ.</p>\n<aside class=\"goi\">\"Dạ em hiểu anh nói là đợt này anh bận quá phải không anh?\"</aside>\n<p>Nhắc lại để khách thấy bạn đã nghe, không gạt lời họ đi. Khoảng im lặng sau đó là để khách nói thêm. Nhiều khi khách tự nói ra lý do thật ngay lúc này.</p>\n<p><strong>Bước 2. Ghi nhận, hỏi gốc.</strong> Bạn công nhận điều khách nói là có lý, rồi hỏi một câu để biết đằng sau đó là chuyện gì.</p>\n<aside class=\"goi\">\"Dạ, cuối năm thì đúng là việc nào cũng dồn. Anh cho em hỏi, ngoài chuyện thời gian, còn phần nào làm anh chưa yên tâm không ạ?\"</aside>\n<p>Ở bước này bạn chưa giải thích gì, bạn chỉ hỏi và nghe cho hết.</p>\n<p><strong>Bước 3. Đề xuất hướng đi khớp với điều khách đã kể.</strong> Biết gốc rồi, bạn xem lại câu tóm tắt mong và lo ở Ngày 3 và Mẫu 1 của Ngày 4, tìm xem mình đã bỏ sót chuyện gì. Hướng đi bạn đề xuất phải trả lời đúng gốc của băn khoăn, bằng chính lời khách từng nói.</p>\n<p>Có hai lúc bạn không nên dùng ba bước này. Khách trả lời rất ngắn, né tránh, từ chối nhiều lần: hỏi sâu thêm lúc này chỉ làm khách thấy bị dồn. Khách đã nói rõ là không: bạn tôn trọng câu trả lời đó và giữ mối quan hệ, ví dụ \"Dạ em hiểu ạ. Khi nào anh muốn xem lại phần nào, anh nhắn em.\"</p>\n<h3>3. Khách so sánh giá thì hỏi lại trước khi giải thích</h3>\n<p>\"Bên kia báo rẻ hơn\" là câu từ chối dễ làm người bán cuống nhất. Người bán thường kể ngay bên mình tốt hơn ở đâu. Bạn làm ngược lại, hỏi trước:</p>\n<aside class=\"goi\">\"Dạ, bên đó báo cho anh gồm những phần nào ạ?\"</aside>\n<p>Thường thì hai bên không bán cùng một thứ, dù tên gọi nghe giống nhau. Khi khách kể ra, bạn và khách cùng thấy chỗ khác nhau, và bạn chỉ ra chỗ khác nhau đó liên quan thế nào tới điều khách đang lo. Bạn không nói xấu bên kia, chỉ giúp khách so sánh hai phương án cho đúng.</p>\n<p>Bạn cũng không giảm giá chỉ để qua được một câu băn khoăn của khách. Nếu sau khi hỏi xong mà khách thật sự cần một phương án nhỏ hơn, bạn đề xuất bớt phần việc đi chứ không bớt giá cho cùng phần việc.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Chị Mai làm tư vấn nhân sự, chuyên dựng hệ thống lương thưởng cho doanh nghiệp từ hai mươi tới năm mươi người. Khách A là giám đốc một công ty phân phối thiết bị văn phòng, ba mươi lăm người. Câu tóm tắt ở Ngày 3: \"Anh mong giữ được mấy bạn bán hàng giỏi, trả lương sao cho công bằng để anh em không so bì nhau, và anh lo đổi cách tính lương thì nhân viên cũ phản ứng, người giỏi lại nghỉ trước.\"</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Câu thứ nhất</th><th>Câu thứ hai</th><th>Câu thứ ba</th></tr></thead>\n<tbody>\n<tr><td>Khách nói</td><td>\"Để anh suy nghĩ thêm\"</td><td>\"Bên kia báo rẻ hơn gần một nửa\"</td><td>\"Cuối năm bận quá, sang năm tính\"</td></tr>\n<tr><td>Bước 1</td><td>\"Dạ, anh muốn có thêm thời gian để cân nhắc phải không anh?\"</td><td>\"Dạ, bên đó báo thấp hơn bên em nhiều phải không anh?\"</td><td>\"Dạ, anh thấy đợt này chưa phải lúc phải không anh?\"</td></tr>\n<tr><td>Bước 2</td><td>\"Dạ, khoản này cân nhắc kỹ là đúng. Phần nào làm anh còn chưa yên tâm nhất ạ?\"</td><td>\"Dạ, bên đó báo cho anh gồm những phần nào ạ?\"</td><td>\"Dạ, cuối năm thì việc nào cũng dồn. Nếu sang năm làm thì anh muốn áp dụng từ tháng mấy ạ?\"</td></tr>\n<tr><td>Gốc bạn đoán</td><td>Vẫn lo nhân viên cũ phản ứng</td><td>Bên kia chỉ giao bảng lương mẫu</td><td>Muốn áp dụng từ đầu năm nhưng sợ không kịp</td></tr>\n<tr><td>Bước 3</td><td>\"Dạ hôm trước anh có nói anh lo người giỏi nghỉ trước. Vậy mình làm thử ở phòng kinh doanh một quý, lương cứng của ai cũng giữ nguyên, chỉ đổi phần thưởng. Anh em thấy lợi rồi mới mở rộng.\"</td><td>\"Dạ bên em làm thêm một phần: ngồi với từng trưởng phòng để giải thích cho nhân viên. Đó đúng là chuyện anh lo nhất, anh em phản ứng khi đổi cách tính lương.\"</td><td>\"Dạ nếu anh muốn áp dụng từ tháng một, mình làm phần khảo sát trong tháng mười hai, mỗi tuần anh chỉ cần ngồi với em một buổi.\"</td></tr>\n<tr><td>Không làm</td><td>Không kể thêm lợi ích</td><td>Không giảm giá, không nói xấu bên kia</td><td>Không nói \"chậm thì thiệt\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Câu cho thấy nỗi lo chưa được trả lời</td><td>\"Để anh suy nghĩ thêm\"</td></tr>\n<tr><td>Khách đã kể ở Ngày 3 chưa</td><td>Rồi: \"người giỏi lại nghỉ trước\"</td></tr>\n<tr><td>Ngày 4 bỏ sót gì</td><td>Trình bày cách tính thưởng rất kỹ, nhưng chưa nói cách giới thiệu với nhân viên cũ</td></tr>\n<tr><td>Lần sau thêm câu nào</td><td>\"Trước khi áp dụng, em ngồi với từng trưởng phòng và cả phòng kinh doanh để anh em hiểu mình được gì.\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Trước đây</th><th>Từ nay</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>5. Xử lý từ chối</td><td>Khách nói để suy nghĩ thì gửi thêm tài liệu và chờ</td><td>Nhắc lại, hỏi gốc, đề xuất hướng đi khớp với nỗi lo khách đã kể</td><td>Gọi lại hai khách đang \"suy nghĩ\", dùng ba bước</td></tr>\n</tbody></table></div>\n<p>Bạn để ý: ở câu thứ nhất, gốc của băn khoăn không phải thời gian mà là nỗi lo khách đã nói từ Ngày 3. Chị Mai không cần thuyết phục thêm, chị chỉ cần trả lời đúng nỗi lo đó, và câu trả lời là một cách làm nhỏ hơn, an toàn hơn, chứ không phải một mức giá thấp hơn.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Đáp ngay khi khách vừa nói xong.</strong> Bỏ qua bước 1 và bước 2, nhảy thẳng vào giải thích.</li>\n<li><strong>Câu nhắc lại nghe như bắt bẻ.</strong> \"Anh nói bận, nhưng mà...\" Nhắc lại chỉ để khách thấy bạn đã nghe, không phải để chuẩn bị phản bác.</li>\n<li><strong>Hỏi gốc bằng câu ép.</strong> \"Vậy rốt cuộc anh còn lo gì nữa?\" nghe như dồn khách. Hỏi nhẹ, và cho khách quyền không trả lời.</li>\n<li><strong>Giảm giá khi khách chưa nói gì về giá.</strong> Bạn tự đoán vấn đề là giá rồi tự trả lời.</li>\n<li><strong>Đề xuất một hướng đi không liên quan tới điều khách kể.</strong> Khách lo nhân viên phản ứng mà bạn đề xuất trả góp, hai chuyện chẳng ăn nhập gì với nhau.</li>\n<li><strong>Cố giữ khách đã nói rõ là không.</strong> Giữ mối quan hệ quý hơn một lần cố thêm.</li>\n</ul>\n<div class=\"ngat\"></div>",
"6": "<aside class=\"goi\">Sau hôm nay, bạn có một câu báo giá thật rõ, hai câu hỏi để khách quyết định, và một cách kết thúc buổi trao đổi bằng đơn hàng hoặc một lịch hẹn có ngày giờ. Trong bảng, bạn sửa dòng 6.</aside>\n<p>Khách đã kể điều họ mong và lo, đã nghe bạn trình bày, đã được gỡ băn khoăn, và đến đây rất nhiều người bán dừng lại. Họ chờ khách tự nói \"vậy em làm cho anh đi\", và khi khách không nói, buổi trao đổi kết thúc bằng câu \"anh cứ suy nghĩ thêm nhé\". Vậy nên người bán thường vấp đúng một chỗ ở bước này: không hỏi khách quyết định.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Nhắc lại, rồi hỏi hai câu</h3>\n<p>Trước khi hỏi khách quyết định, bạn nhắc lại ba thứ bằng chính lời khách: điều khách mong, điều khách lo, và những băn khoăn đã được gỡ ở Ngày 5. Nghe lại, khách thấy chuyện của mình được nói đủ bằng đúng lời mình.</p>\n<p>Rồi bạn hỏi câu thứ nhất:</p>\n<aside class=\"goi\">\"Nghe xong phương án này, anh chị thấy nó giúp được việc gì cho bên anh chị?\"</aside>\n<p>Câu này để khách tự nói ra phương án giúp được gì cho họ. Điều khách tự nói thì khách tin hơn điều nghe bạn nói, nên bạn nghe cho hết và không chen vào.</p>\n<p>Rồi câu thứ hai:</p>\n<aside class=\"goi\">\"Anh chị còn vướng chuyện gì mà chưa muốn làm ngay không?\"</aside>\n<p>Câu này để khách nói ra băn khoăn cuối cùng. Nếu khách nói \"không có gì\", bạn chuyển sang báo giá và đề nghị. Nếu khách nói ra một điều, bạn quay lại ba bước của Ngày 5 cho đúng điều đó.</p>\n<p>Bạn không ép khách nhưng phải hỏi, vì không hỏi thì khách không có lúc nào để nói có.</p>\n<h3>2. Báo một con số, nói rõ gồm những gì, rồi dừng lại</h3>\n<p>Nhiều người bán ngại nhất đúng chỗ này nên họ nói vòng, nói một khoảng giá, hoặc vừa báo giá xong đã thêm \"nhưng bên em đang có ưu đãi\". Khách nghe vậy sẽ nghĩ chính người bán cũng thấy giá chưa đáng.</p>\n<p>Một câu báo giá rõ có bốn ý:</p>\n<ul>\n<li><strong>Một con số</strong>, không phải một khoảng.</li>\n<li><strong>Gồm những gì</strong>, nói ngắn.</li>\n<li><strong>Nhắc lại điều khách lo</strong>, để khách thấy mình trả tiền cho đúng điều mình cần.</li>\n<li><strong>Rồi im lặng chờ khách</strong>, không nói thêm gì.</li>\n</ul>\n<p>Không xin lỗi khi báo giá, và không giảm giá khi khách chưa hỏi.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Nên tránh</th><th>Nên nói</th></tr></thead>\n<tbody>\n<tr><td>\"Giá thì cũng tùy anh, tầm năm mươi tới sáu mươi triệu, mà bên em có thể bớt chút.\"</td><td>\"Tám mươi bộ giá năm mươi hai triệu đồng, đã gồm khắc tên công ty, hộp quà và giao tận văn phòng trước hai mươi tháng Chạp. Anh lo hàng tới trễ nên em ghi ngày giao vào hợp đồng luôn.\"</td></tr>\n</tbody></table></div>\n<h3>3. Kết thúc bằng một quyết định</h3>\n<p>Khách có thể đồng ý mua hoặc chốt một lịch hẹn, cả hai đều được. Chỉ có một cách kết thúc là không được: \"anh cứ suy nghĩ rồi nhắn em\".</p>\n<p>Một lịch hẹn cụ thể phải có đủ ba thứ: <strong>việc gì, ai làm, khi nào</strong>.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Nên tránh</th><th>Nên nói</th></tr></thead>\n<tbody>\n<tr><td>\"Anh xem rồi nhắn em nhé.\"</td><td>\"Thứ Năm em gửi anh hai mẫu khắc tên để anh chọn. Sáng thứ Sáu chín giờ em gọi anh để chốt mẫu.\"</td></tr>\n<tr><td>\"Khi nào tiện thì mình gặp lại.\"</td><td>\"Chiều thứ Ba hai giờ em mang mẫu tới văn phòng anh, anh mời thêm người duyệt quà cùng xem.\"</td></tr>\n</tbody></table></div>\n<p>Câu \"anh xem rồi nhắn em\" còn một lỗi nữa: nó giao việc ngược cho khách và để bạn ngồi chờ, trong khi gọi lại và nhắn nhắc là việc của người bán.</p>\n<p><strong>Khi người quyết định không có mặt.</strong> Khách nói \"để anh trình giám đốc\", \"để chị bàn với cộng sự\". Bạn đừng tranh luận, cũng đừng dừng ở đó. Bạn gửi khách ba ý chính để trình lại: điều khách muốn, cách làm bạn đề xuất, và chi phí. Rồi hẹn một ngày cụ thể bạn gọi lại, hoặc một buổi có mặt người quyết định.</p>\n<aside class=\"goi\">\"Dạ em hiểu, khoản này anh cần trình giám đốc. Em gửi anh ba ý chính cho tiện: điều anh muốn, cách bên em làm, và chi phí. Chiều thứ Tư em gọi anh lúc ba giờ để nghe giám đốc nói thế nào ạ.\"</aside>\n<aside class=\"goi\">Nếu hôm nay bạn thấy nhiều quá, hãy giữ đúng <strong>một câu báo giá</strong> và <strong>một câu hỏi quyết định</strong>. Phần còn lại để sau cũng được.</aside>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Chị Lan có một xưởng gốm thủ công, làm bộ ấm chén khắc tên làm quà Tết cho doanh nghiệp. Khách A là trưởng phòng hành chính của một công ty xây dựng tám mươi người. Anh lo quà tới trễ như năm ngoái, và lo quà nhìn rẻ khi tặng đối tác. Ở Ngày 5, anh băn khoăn gốm thủ công dễ vỡ khi giao; chị Lan đã gỡ bằng cách đóng hộp có lót và đổi mới bộ nào vỡ, còn người duyệt cuối là giám đốc.</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Điều khách mong</td><td>\"Quà phải đàng hoàng, đối tác cầm lên thấy công ty mình có quan tâm\"</td></tr>\n<tr><td>Điều khách lo</td><td>\"Năm ngoái quà tới sau rằm tháng Chạp, phát không kịp\"</td></tr>\n<tr><td>Băn khoăn đã gỡ</td><td>Sợ vỡ khi giao. Đã thống nhất đóng hộp có lót, bộ nào vỡ đổi mới</td></tr>\n<tr><td>Câu nhắc lại</td><td>\"Anh muốn quà đàng hoàng, đối tác thấy công ty có quan tâm. Anh lo tới trễ như năm ngoái. Chuyện vỡ thì mình đã thống nhất đóng hộp có lót và đổi mới bộ nào vỡ.\"</td></tr>\n<tr><td>Câu thứ nhất, khách trả lời</td><td>\"Ấm khắc tên thì người ta để trên bàn làm việc cả năm, chứ quà bánh thì ăn xong là quên\"</td></tr>\n<tr><td>Câu thứ hai, khách trả lời</td><td>\"Phải trình giám đốc, ông hay hỏi giá\"</td></tr>\n<tr><td>Kết thúc</td><td>Lịch hẹn gọi lại, có ngày giờ</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Giá, một con số</td><td>Năm mươi hai triệu đồng</td></tr>\n<tr><td>Gồm những gì</td><td>Tám mươi bộ, khắc tên công ty, hộp quà có lót, giao tận văn phòng</td></tr>\n<tr><td>Điều khách lo mà bạn nhắc lại</td><td>Lo hàng tới trễ</td></tr>\n<tr><td>Câu báo giá</td><td>\"Tám mươi bộ giá năm mươi hai triệu đồng, đã gồm khắc tên công ty, hộp quà và giao tận văn phòng trước hai mươi tháng Chạp. Anh lo hàng tới trễ nên em ghi ngày giao vào hợp đồng luôn.\"</td></tr>\n<tr><td>Ba ý chính gửi khách trình lại</td><td>Quà để trên bàn đối tác cả năm; tám mươi bộ khắc tên, giao trước hai mươi tháng Chạp, ghi vào hợp đồng; năm mươi hai triệu đồng</td></tr>\n<tr><td>Ngày giờ gọi lại</td><td>Chiều thứ Tư, ba giờ, chị Lan gọi</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Trước đây</th><th>Từ nay</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>6. Đề nghị khách quyết định</td><td>Gửi bảng giá qua tin nhắn rồi chờ khách hồi âm</td><td>Báo giá một con số, nhắc lại điều khách lo, hỏi hai câu, kết thúc bằng lịch hẹn có ngày giờ</td><td>Gọi lại ba khách đã nhận bảng giá, hẹn ngày cụ thể</td></tr>\n</tbody></table></div>\n<p>Bạn để ý: câu trả lời đẹp nhất trong buổi này, \"để trên bàn làm việc cả năm\", là của khách chứ không phải của chị Lan. Câu đó chỉ xuất hiện vì chị hỏi, và vì giám đốc không có mặt nên chị không cố để khách đồng ý mua ngay trong buổi đó. Chị đưa đúng câu đó vào ba ý chính gửi khách, để khách trình lại giám đốc bằng chính lời mình.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Không hỏi.</strong> Trình bày xong rồi chờ khách tự lên tiếng.</li>\n<li><strong>Nói một khoảng giá.</strong> \"Tầm năm tới sáu mươi triệu\" làm khách nghĩ giá còn thương lượng được.</li>\n<li><strong>Xin lỗi hoặc giảm giá ngay sau khi báo giá.</strong> Khách chưa hỏi bớt mà bạn đã bớt.</li>\n<li><strong>Báo giá xong vẫn nói tiếp.</strong> Bạn sợ khoảng im lặng nên kể thêm tính năng. Hãy dừng lại và chờ.</li>\n<li><strong>Kết thúc bằng \"anh cứ suy nghĩ\".</strong> Không có việc gì, không ai làm, không ngày nào.</li>\n<li><strong>Dồn khách khi người quyết định không có mặt.</strong> Ép người không có quyền quyết định thì chỉ làm khó họ.</li>\n</ul>\n<div class=\"ngat\"></div>",
"7": "<aside class=\"goi\">Hôm nay bạn sửa dòng 7 của bảng, tức là cách chăm sóc khách sau khi bán, rồi đếm lại cả bảy bước bằng số thật của tuần này. Đếm xong, bạn có bản 2 của bảng để so sánh với bản 1 và biết bước nào cần sửa tiếp.</aside>\n<p>Nhiều người bán coi lúc khách trả tiền là lúc việc đã xong. Khách nhận hàng, dùng dịch vụ, rồi gần như không nghe người bán nói gì nữa cho tới khi người bán cần bán thêm. Ở bước này người bán hay vấp hai chỗ. Chỗ thứ nhất nằm ở khách: khách cũ dần quên bạn, nên ít quay lại và ít giới thiệu người mới. Chỗ thứ hai nằm ở chính người bán: sửa cả tuần mà không đếm lại, nên không biết việc sửa có tác dụng hay không.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Ba lúc khách nhớ lâu nhất</h3>\n<p>Khi nhớ lại một lần mua hàng, khách không nhớ đều từng ngày. Khách nhớ rõ nhất ba lúc: ngay sau khi mua, lúc thấy kết quả đầu tiên và lúc giao xong. Vì vậy chăm sóc khách sau khi bán không cần làm thật nhiều, chỉ cần làm thật kỹ đúng ba lúc đó.</p>\n<p><strong>Ngay sau khi khách mua:</strong> báo rõ việc gì làm tiếp, ai làm, ngày nào. Khách vừa bỏ tiền nên đây là lúc khách lo nhất, và một tin nhắn rõ ràng trong ngày là đủ để khách yên tâm.</p>\n<p><strong>Lúc khách thấy kết quả đầu tiên:</strong> hỏi thăm, có vướng thì gỡ ngay. Đây cũng là lúc dễ trục trặc nhất, nên bạn hỏi trước chứ đừng chờ khách phải nhắn cho bạn.</p>\n<p><strong>Lúc giao xong:</strong> nhắc lại khách mong gì, đã được gì, rồi nhờ khách giới thiệu người quen. Dịch vụ làm theo tháng thì đây là lúc xong mỗi tháng. Trước khi nhờ giới thiệu, bạn hỏi thêm: \"Còn điều gì anh chị chưa vừa ý không?\" Khách đang vừa ý thì đây là lúc hợp nhất để nhờ.</p>\n<p>Sau đó vẫn giữ liên lạc: nhắn ngắn, mỗi lần gửi một thứ có ích, khách trả lời chậm thì nhắn thưa ra, hai lần không trả lời thì dừng.</p>\n<p>Nhắn ngắn là khách đọc trong nửa phút là xong. Thứ có ích có thể là một cách dùng sản phẩm hay hơn, hoặc một tin khách cần biết, chứ không chỉ là câu \"anh chị cần gì thêm không\". Khi dừng, bạn vẫn để ngỏ lời mời khách quay lại.</p>\n<h3>2. Đếm lại cả bảy bước bằng số thật</h3>\n<p>Ngày 1 bạn đếm bảng lần đầu, đó là bản 1. Hôm nay bạn đếm lại bằng số thật của tuần này, lưu thành bản 2, rồi so sánh từng bước với bản 1.</p>\n<p>Muốn bản 2 so sánh được với bản 1, bạn đếm theo ba điều sau.</p>\n<ul>\n<li><strong>Dùng số thật của tuần này.</strong> Tuần này bạn chỉ gặp ba khách thì ghi ba khách. Không ước thêm cho đủ.</li>\n<li><strong>Ghi rõ đếm từ ngày nào tới ngày nào, có bao nhiêu khách.</strong> Người đọc bảng cần biết con số đứng trên bao nhiêu người.</li>\n<li><strong>Số của một tuần mới là dấu hiệu, chưa kết luận được.</strong> Bước 2 tăng từ 6 trên 12 khách lên 3 trên 4 khách chưa có nghĩa là bước 2 đã ổn. Con số đó chỉ cho biết bước 2 đáng theo dõi tiếp.</li>\n</ul>\n<p>Dòng nào ở bản 1 bạn ghi số ước, thì bản 2 thay bằng số thật nếu tuần này đã có. Chưa có số thật thì bạn giữ nguyên ghi chú \"ước\".</p>\n<p>Đếm xong, bạn chọn một bước để sửa tiếp sau thử thách. Thường đó là bước vẫn mất nhiều khách nhất, hoặc bước bạn đã sửa mà số chưa đổi. Bạn chọn theo số chứ không chọn bước mình thích làm.</p>\n<h3>3. Mỗi ngày ghi lại một lần gặp khách</h3>\n<p>Bảng cho bạn biết khách rơi ở bước nào. Muốn hiểu vì sao khách rơi, bạn phải nhìn vào từng lần gặp khách cụ thể, và sổ ghi tình huống giúp bạn làm việc đó. Mỗi lần gặp khách ghi vào năm ô:</p>\n<ul>\n<li><strong>Chuyện gì xảy ra:</strong> với khách nào, ở bước nào.</li>\n<li><strong>Lúc đó cần gì:</strong> lúc đó bạn cần đạt được điều gì.</li>\n<li><strong>Bạn đã nói, làm gì:</strong> ghi đúng câu bạn đã nói.</li>\n<li><strong>Khách phản ứng ra sao:</strong> có số thì ghi số.</li>\n<li><strong>Lần sau làm khác điều gì:</strong> gặp chuyện giống vậy, lần sau bạn sẽ làm gì khác.</li>\n</ul>\n<p>Hôm nay bạn ghi một lần gặp khách để làm mẫu, lần đầu có thể mất tới ba mươi phút. Sau thử thách, bạn ghi mỗi ngày một lần. Mỗi lần ghi mất khoảng mười lăm phút. Ghi đều một tháng, bạn có khoảng hai mươi lần gặp khách thật để nhìn ra mình hay vấp ở đâu.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Anh Quân nhận quản lý trang Facebook cho quán ăn và cửa hàng nhỏ, thu phí theo tháng, và ở bản 1 anh đếm được 12 khách trong tám tuần. Tuần thử thách anh gặp 4 khách mới, và có 4 khách đang dùng dịch vụ.</p>\n<p><strong>Dòng 7.</strong> Trước đây anh ký hợp đồng xong thì gửi lịch đăng bài, cuối tháng gửi bảng số liệu. Từ nay anh làm ba lúc. Ngay sau khi khách mua, tức là ngay trong ngày ký, anh nhắn rõ tuần đầu làm gì, ai phụ trách, ngày nào có bài đầu tiên. Lúc khách thấy kết quả đầu tiên, khi có bài được nhiều người hỏi, anh gọi báo chủ quán, kèm vài bình luận khách hỏi món. Lúc giao xong mỗi tháng, báo cáo có thêm ba dòng: chủ quán mong gì lúc đầu, tháng này được gì, tháng sau sửa gì. Việc sửa trong tuần: gọi cho 4 khách đang dùng dịch vụ theo cách mới.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Số bản 1, đếm Ngày 1</th><th>Số bản 2, đếm tuần này</th><th>Đã sửa gì ở bước này</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>12 khách trong 8 tuần, gần hết do người quen giới thiệu</td><td>4 khách trong 1 tuần, 2 khách từ bài đăng mới</td><td>Viết rõ dịch vụ dành cho quán ăn, cửa hàng dưới mười nhân viên</td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>6 trên 12</td><td>3 trên 4</td><td>Hỏi quán đang tự đăng bài hay chưa, rồi mới gửi bảng giá</td></tr>\n<tr><td>3. Khai thác sâu</td><td>4 trên 6</td><td>3 trên 3</td><td>Hỏi chủ quán muốn có khách mới hay muốn khách cũ quay lại</td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>4 trên 4</td><td>2 trên 3</td><td>Chỉ nói phần dịch vụ giải quyết đúng chuyện chủ quán đã kể. 1 người chưa hẹn được buổi trình bày</td></tr>\n<tr><td>5. Xử lý từ chối</td><td>2 trên 4</td><td>2 trên 2</td><td>Hỏi vì sao khách nói \"để em tự đăng cũng được\"</td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Đề nghị 2, ký 1</td><td>Đề nghị 2, ký 1, thêm 1 lịch hẹn thứ Sáu</td><td>Hỏi hai câu, báo giá một lần, chốt lịch hẹn có ngày giờ</td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Ước: 3 trên 7 khách cũ gia hạn sau ba tháng</td><td>Chưa đủ thời gian để đếm. Mới làm theo cách mới với 4 khách đang dùng</td><td>Làm ba lúc: ngay sau khi khách mua, lúc khách thấy kết quả đầu tiên, lúc giao xong mỗi tháng</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td><strong>Bước thay đổi rõ nhất</strong></td><td>Bước 2 tăng từ 6 trên 12 khách lên 3 trên 4 khách. Mới có bốn khách, nên đây mới là dấu hiệu, chưa kết luận được.</td></tr>\n<tr><td><strong>Tuần sau sửa bước nào</strong></td><td>Bước 4. Số tuần này giảm, và anh chưa biết vì sao</td></tr>\n</tbody></table></div>\n<p><strong>Sổ ghi tình huống</strong></p>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td><strong>Chuyện gì xảy ra</strong></td><td>Thứ Tư, chủ một tiệm bánh nói: \"Để em tự đăng cũng được, thuê ngoài tốn lắm.\" Ở bước 5</td></tr>\n<tr><td><strong>Lúc đó cần gì</strong></td><td>Hiểu vì sao chị nói vậy, trước khi báo giá</td></tr>\n<tr><td><strong>Bạn đã nói, làm gì</strong></td><td>Nhắc lại câu chị nói rồi im lặng chờ. Sau đó hỏi: \"Trước giờ chị tự đăng thì mỗi tuần mất bao nhiêu thời gian?\"</td></tr>\n<tr><td><strong>Khách phản ứng ra sao</strong></td><td>Chị kể tối nào cũng ngồi gần một tiếng, nhiều hôm bỏ. Chị hẹn thứ Sáu nghe báo giá chi tiết</td></tr>\n<tr><td><strong>Lần sau làm khác điều gì</strong></td><td>Lần này chị ngại không phải vì giá mà vì thời gian chị phải bỏ ra. Lần sau gặp câu này, anh hỏi số giờ trước khi báo giá</td></tr>\n</tbody></table></div>\n<p>Bạn để ý bước 4: số bản 2 kém hơn bản 1 nhưng anh Quân vẫn ghi đúng số chứ không giấu. Ở bước thay đổi rõ nhất, anh ghi kèm câu \"mới có bốn khách\". Còn bước sửa tiếp thì anh chọn bước 4 vì số giảm mà chưa rõ lý do, chứ không chọn bước đang có số đẹp.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Ước thêm cho bản 2 nhìn đẹp.</strong> Tuần này ba khách thì ghi ba khách. Một bảng có số thật nhưng ít vẫn dùng được, một bảng đẹp mà ước thì không.</li>\n<li><strong>Kết luận từ một tuần.</strong> \"Bước 2 xong rồi\" là kết luận quá sớm. Bạn ghi đó mới là dấu hiệu, rồi đếm tiếp vài tuần nữa.</li>\n<li><strong>Tin chăm sóc chung chung.</strong> Tin \"anh chị cần gì cứ nhắn em\" không có gì có ích cho khách, nên khách đọc rồi bỏ qua.</li>\n<li><strong>Nhắn dồn dập rồi bặt tin.</strong> Tuần đầu nhắn mỗi ngày, sau đó biến mất. Bạn theo nhịp của khách, và biết lúc dừng.</li>\n<li><strong>Chọn bước sửa tiếp theo cảm giác.</strong> Bước bạn thích sửa chưa chắc là bước khách đang rơi nhiều nhất. Bạn nhìn vào số trước.</li>\n<li><strong>Nói quá trong video.</strong> Mới tập nói xong mà nói như đã tăng doanh số. Làm tới đâu thì nói tới đó.</li>\n</ul>\n<div class=\"ngat\"></div>\n<h2>Sau bảy ngày</h2>\n<p>Bảy ngày qua bạn đã vẽ được bản đồ quy trình bán hàng của chính mình và đã sửa năm bước ở mức cơ bản. Bản 2 của bảng là điểm xuất phát chứ chưa phải đích. Tuần sau bạn mở lại bảng, sửa bước đã chọn và mỗi ngày ghi một lần gặp khách vào sổ.</p>\n<p>Mỗi bước bạn sửa trong tuần này còn nhiều tầng sâu hơn những gì bảy ngày kịp đi qua. Nếu bạn muốn đi tiếp từng bước một cách bài bản, chương trình PRO-SALES đi sâu vào từng bước trong bảy bước đó. Muốn tìm hiểu thêm về chương trình, bạn trả lời email hôm nay.</p>"
};
var BAI = {
"2": {
"ten": "Chọn đúng nhóm khách và phân loại sớm",
"hua": "Sau hôm nay, bạn có một trang chân dung cho nhóm khách của mình và bốn tiêu chí để nhận ra sớm ai đúng là người nên tư vấn. Trong bảng, bạn sửa xong dòng 1 và phần phân loại của dòng 2.",
"phan": [
{
"tieu": "Mẫu 1. Chân dung nhóm khách",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Bạn viết bằng lời của mình, mỗi ô vài dòng và không ghi tên, số điện thoại hay thông tin riêng của khách thật.</p>"
},
{
"o": [
{
"id": "n2-0-0-0-1",
"nhan": "Sản phẩm hoặc dịch vụ, giữ như Ngày 1",
"ten": "Mẫu 1 · Sản phẩm hoặc dịch vụ, giữ như Ngày 1"
},
{
"id": "n2-0-0-1-1",
"nhan": "Nhóm khách, gọi bằng một câu",
"ten": "Mẫu 1 · Nhóm khách, gọi bằng một câu"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Sản phẩm hoặc dịch vụ, giữ như Ngày 1",
{
"o": "n2-0-0-0-1"
}
],
[
"Nhóm khách, gọi bằng một câu",
{
"o": "n2-0-0-1-1"
}
]
]
}
},
{
"tieu": "Khối 1. Họ là ai, vì sao hợp với sản phẩm của bạn",
"o": [
{
"id": "n2-0-1-0-1",
"nhan": "Bạn điền",
"ten": "Mẫu 1 · Khối 1. Họ là ai, vì sao hợp với sản phẩm của bạn · Bạn điền"
},
{
"id": "n2-0-1-0-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Khối 1. Họ là ai, vì sao hợp với sản phẩm của bạn · Đã nghe từ khách hay đang đoán"
}
],
"bang": {
"dau": [
"Ba khối",
"Bạn điền",
"Đã nghe từ khách hay đang đoán"
],
"hang": [
[
"Khối 1. Họ là ai, vì sao hợp với sản phẩm của bạn",
{
"o": "n2-0-1-0-1"
},
{
"o": "n2-0-1-0-2"
}
],
[
"Khối 2. Họ đang gặp vấn đề gì, muốn đạt kết quả gì (ghi bằng lời khách)",
{
"o": "n2-0-1-1-1"
},
{
"o": "n2-0-1-1-2"
}
],
[
"Khối 3. Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp",
{
"o": "n2-0-1-2-1"
},
{
"o": "n2-0-1-2-2"
}
]
]
}
},
{
"tieu": "Khối 2. Họ đang gặp vấn đề gì, muốn đạt kết quả gì (ghi bằng lời khách)",
"o": [
{
"id": "n2-0-1-1-1",
"nhan": "Bạn điền",
"ten": "Mẫu 1 · Khối 2. Họ đang gặp vấn đề gì, muốn đạt kết quả gì (ghi bằng lời khách) · Bạn điền"
},
{
"id": "n2-0-1-1-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Khối 2. Họ đang gặp vấn đề gì, muốn đạt kết quả gì (ghi bằng lời khách) · Đã nghe từ khách hay đang đoán"
}
]
},
{
"tieu": "Khối 3. Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp",
"o": [
{
"id": "n2-0-1-2-1",
"nhan": "Bạn điền",
"ten": "Mẫu 1 · Khối 3. Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp · Bạn điền"
},
{
"id": "n2-0-1-2-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Khối 3. Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp · Đã nghe từ khách hay đang đoán"
}
]
},
{
"o": [
{
"id": "n2-0-2-0-1",
"nhan": "Ba khối có khớp nhau không. Người ở Khối 1 có đúng là người gặp vấn đề ở Khối 2 và gặp chuyện ở Khối 3 không",
"ten": "Mẫu 1 · Ba khối có khớp nhau không. Người ở Khối 1 có đúng là người gặp vấn đề ở Khối 2 và gặp chuyện ở Khối 3 không"
},
{
"id": "n2-0-2-1-1",
"nhan": "Một điều cần hỏi lại khách thật để biết chỗ đang đoán là đúng hay sai",
"ten": "Mẫu 1 · Một điều cần hỏi lại khách thật để biết chỗ đang đoán là đúng hay sai"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Ba khối có khớp nhau không. Người ở Khối 1 có đúng là người gặp vấn đề ở Khối 2 và gặp chuyện ở Khối 3 không",
{
"o": "n2-0-2-0-1"
}
],
[
"Một điều cần hỏi lại khách thật để biết chỗ đang đoán là đúng hay sai",
{
"o": "n2-0-2-1-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 2. Bốn tiêu chí phân loại",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n2-1-0-0-1",
"nhan": "1. Nhu cầu",
"goi": "Cho biết điều gì: Đúng nhóm hay chưa",
"ten": "Mẫu 2 · 1. Nhu cầu"
},
{
"id": "n2-1-0-1-1",
"nhan": "2. Ngân sách",
"goi": "Cho biết điều gì: Đúng nhóm hay chưa",
"ten": "Mẫu 2 · 2. Ngân sách"
},
{
"id": "n2-1-0-2-1",
"nhan": "3. Người quyết định",
"goi": "Cho biết điều gì: Đang nói với đúng người chưa",
"ten": "Mẫu 2 · 3. Người quyết định"
},
{
"id": "n2-1-0-3-1",
"nhan": "4. Thời điểm mua",
"goi": "Cho biết điều gì: Đang tìm hiểu hay sắp mua",
"ten": "Mẫu 2 · 4. Thời điểm mua"
}
],
"bang": {
"dau": [
"Tiêu chí",
"Câu hỏi bạn sẽ dùng, viết theo sản phẩm của bạn",
"Cho biết điều gì"
],
"hang": [
[
"1. Nhu cầu",
{
"o": "n2-1-0-0-1"
},
"Đúng nhóm hay chưa"
],
[
"2. Ngân sách",
{
"o": "n2-1-0-1-1"
},
"Đúng nhóm hay chưa"
],
[
"3. Người quyết định",
{
"o": "n2-1-0-2-1"
},
"Đang nói với đúng người chưa"
],
[
"4. Thời điểm mua",
{
"o": "n2-1-0-3-1"
},
"Đang tìm hiểu hay sắp mua"
]
]
}
},
{
"h": "<p>Đạt nhu cầu và ngân sách là đúng nhóm. Đúng nhóm mà đạt thêm thời điểm mua là sắp mua. Người đang trò chuyện chưa phải người quyết định thì khách vẫn giữ loại đó, nhưng trước khi tư vấn bạn hẹn thêm người cùng quyết định.</p>"
}
]
},
{
"tieu": "Mẫu 3. Xếp lại mười khách của Ngày 1",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Gọi khách là \"khách A\", \"khách B\" như hôm qua. Ở bốn cột tiêu chí ghi \"có\", \"không\" hoặc \"chưa biết\" nếu bạn chưa từng hỏi.</p>"
},
{
"tieu": "Khách A",
"o": [
{
"id": "n2-2-0-0-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách A · Nhu cầu"
},
{
"id": "n2-2-0-0-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách A · Ngân sách"
},
{
"id": "n2-2-0-0-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách A · Người quyết định"
},
{
"id": "n2-2-0-0-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách A · Thời điểm mua"
},
{
"id": "n2-2-0-0-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách A · Xếp vào loại nào"
},
{
"id": "n2-2-0-0-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách A · Ở Ngày 1, khách này dừng ở bước nào"
}
],
"bang": {
"dau": [
"Khách",
"Nhu cầu",
"Ngân sách",
"Người quyết định",
"Thời điểm mua",
"Xếp vào loại nào",
"Ở Ngày 1, khách này dừng ở bước nào"
],
"hang": [
[
"A",
{
"o": "n2-2-0-0-1"
},
{
"o": "n2-2-0-0-2"
},
{
"o": "n2-2-0-0-3"
},
{
"o": "n2-2-0-0-4"
},
{
"o": "n2-2-0-0-5"
},
{
"o": "n2-2-0-0-6"
}
],
[
"B",
{
"o": "n2-2-0-1-1"
},
{
"o": "n2-2-0-1-2"
},
{
"o": "n2-2-0-1-3"
},
{
"o": "n2-2-0-1-4"
},
{
"o": "n2-2-0-1-5"
},
{
"o": "n2-2-0-1-6"
}
],
[
"C",
{
"o": "n2-2-0-2-1"
},
{
"o": "n2-2-0-2-2"
},
{
"o": "n2-2-0-2-3"
},
{
"o": "n2-2-0-2-4"
},
{
"o": "n2-2-0-2-5"
},
{
"o": "n2-2-0-2-6"
}
],
[
"D",
{
"o": "n2-2-0-3-1"
},
{
"o": "n2-2-0-3-2"
},
{
"o": "n2-2-0-3-3"
},
{
"o": "n2-2-0-3-4"
},
{
"o": "n2-2-0-3-5"
},
{
"o": "n2-2-0-3-6"
}
],
[
"E",
{
"o": "n2-2-0-4-1"
},
{
"o": "n2-2-0-4-2"
},
{
"o": "n2-2-0-4-3"
},
{
"o": "n2-2-0-4-4"
},
{
"o": "n2-2-0-4-5"
},
{
"o": "n2-2-0-4-6"
}
],
[
"G",
{
"o": "n2-2-0-5-1"
},
{
"o": "n2-2-0-5-2"
},
{
"o": "n2-2-0-5-3"
},
{
"o": "n2-2-0-5-4"
},
{
"o": "n2-2-0-5-5"
},
{
"o": "n2-2-0-5-6"
}
],
[
"H",
{
"o": "n2-2-0-6-1"
},
{
"o": "n2-2-0-6-2"
},
{
"o": "n2-2-0-6-3"
},
{
"o": "n2-2-0-6-4"
},
{
"o": "n2-2-0-6-5"
},
{
"o": "n2-2-0-6-6"
}
],
[
"I",
{
"o": "n2-2-0-7-1"
},
{
"o": "n2-2-0-7-2"
},
{
"o": "n2-2-0-7-3"
},
{
"o": "n2-2-0-7-4"
},
{
"o": "n2-2-0-7-5"
},
{
"o": "n2-2-0-7-6"
}
],
[
"K",
{
"o": "n2-2-0-8-1"
},
{
"o": "n2-2-0-8-2"
},
{
"o": "n2-2-0-8-3"
},
{
"o": "n2-2-0-8-4"
},
{
"o": "n2-2-0-8-5"
},
{
"o": "n2-2-0-8-6"
}
],
[
"L",
{
"o": "n2-2-0-9-1"
},
{
"o": "n2-2-0-9-2"
},
{
"o": "n2-2-0-9-3"
},
{
"o": "n2-2-0-9-4"
},
{
"o": "n2-2-0-9-5"
},
{
"o": "n2-2-0-9-6"
}
]
]
}
},
{
"tieu": "Khách B",
"o": [
{
"id": "n2-2-0-1-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách B · Nhu cầu"
},
{
"id": "n2-2-0-1-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách B · Ngân sách"
},
{
"id": "n2-2-0-1-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách B · Người quyết định"
},
{
"id": "n2-2-0-1-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách B · Thời điểm mua"
},
{
"id": "n2-2-0-1-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách B · Xếp vào loại nào"
},
{
"id": "n2-2-0-1-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách B · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách C",
"o": [
{
"id": "n2-2-0-2-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách C · Nhu cầu"
},
{
"id": "n2-2-0-2-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách C · Ngân sách"
},
{
"id": "n2-2-0-2-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách C · Người quyết định"
},
{
"id": "n2-2-0-2-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách C · Thời điểm mua"
},
{
"id": "n2-2-0-2-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách C · Xếp vào loại nào"
},
{
"id": "n2-2-0-2-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách C · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách D",
"o": [
{
"id": "n2-2-0-3-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách D · Nhu cầu"
},
{
"id": "n2-2-0-3-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách D · Ngân sách"
},
{
"id": "n2-2-0-3-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách D · Người quyết định"
},
{
"id": "n2-2-0-3-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách D · Thời điểm mua"
},
{
"id": "n2-2-0-3-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách D · Xếp vào loại nào"
},
{
"id": "n2-2-0-3-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách D · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách E",
"o": [
{
"id": "n2-2-0-4-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách E · Nhu cầu"
},
{
"id": "n2-2-0-4-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách E · Ngân sách"
},
{
"id": "n2-2-0-4-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách E · Người quyết định"
},
{
"id": "n2-2-0-4-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách E · Thời điểm mua"
},
{
"id": "n2-2-0-4-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách E · Xếp vào loại nào"
},
{
"id": "n2-2-0-4-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách E · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách G",
"o": [
{
"id": "n2-2-0-5-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách G · Nhu cầu"
},
{
"id": "n2-2-0-5-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách G · Ngân sách"
},
{
"id": "n2-2-0-5-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách G · Người quyết định"
},
{
"id": "n2-2-0-5-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách G · Thời điểm mua"
},
{
"id": "n2-2-0-5-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách G · Xếp vào loại nào"
},
{
"id": "n2-2-0-5-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách G · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách H",
"o": [
{
"id": "n2-2-0-6-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách H · Nhu cầu"
},
{
"id": "n2-2-0-6-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách H · Ngân sách"
},
{
"id": "n2-2-0-6-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách H · Người quyết định"
},
{
"id": "n2-2-0-6-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách H · Thời điểm mua"
},
{
"id": "n2-2-0-6-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách H · Xếp vào loại nào"
},
{
"id": "n2-2-0-6-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách H · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách I",
"o": [
{
"id": "n2-2-0-7-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách I · Nhu cầu"
},
{
"id": "n2-2-0-7-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách I · Ngân sách"
},
{
"id": "n2-2-0-7-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách I · Người quyết định"
},
{
"id": "n2-2-0-7-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách I · Thời điểm mua"
},
{
"id": "n2-2-0-7-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách I · Xếp vào loại nào"
},
{
"id": "n2-2-0-7-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách I · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách K",
"o": [
{
"id": "n2-2-0-8-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách K · Nhu cầu"
},
{
"id": "n2-2-0-8-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách K · Ngân sách"
},
{
"id": "n2-2-0-8-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách K · Người quyết định"
},
{
"id": "n2-2-0-8-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách K · Thời điểm mua"
},
{
"id": "n2-2-0-8-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách K · Xếp vào loại nào"
},
{
"id": "n2-2-0-8-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách K · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"tieu": "Khách L",
"o": [
{
"id": "n2-2-0-9-1",
"nhan": "Nhu cầu",
"ten": "Mẫu 3 · Khách L · Nhu cầu"
},
{
"id": "n2-2-0-9-2",
"nhan": "Ngân sách",
"ten": "Mẫu 3 · Khách L · Ngân sách"
},
{
"id": "n2-2-0-9-3",
"nhan": "Người quyết định",
"ten": "Mẫu 3 · Khách L · Người quyết định"
},
{
"id": "n2-2-0-9-4",
"nhan": "Thời điểm mua",
"ten": "Mẫu 3 · Khách L · Thời điểm mua"
},
{
"id": "n2-2-0-9-5",
"nhan": "Xếp vào loại nào",
"ten": "Mẫu 3 · Khách L · Xếp vào loại nào"
},
{
"id": "n2-2-0-9-6",
"nhan": "Ở Ngày 1, khách này dừng ở bước nào",
"ten": "Mẫu 3 · Khách L · Ở Ngày 1, khách này dừng ở bước nào"
}
]
},
{
"o": [
{
"id": "n2-2-1-0-1",
"nhan": "Đúng nhóm, sắp mua",
"ten": "Mẫu 3 · Đúng nhóm, sắp mua"
},
{
"id": "n2-2-1-1-1",
"nhan": "Đúng nhóm, đang tìm hiểu",
"ten": "Mẫu 3 · Đúng nhóm, đang tìm hiểu"
},
{
"id": "n2-2-1-2-1",
"nhan": "Chưa đúng nhóm",
"ten": "Mẫu 3 · Chưa đúng nhóm"
},
{
"id": "n2-2-1-3-1",
"nhan": "Chưa biết, cần hỏi thêm",
"ten": "Mẫu 3 · Chưa biết, cần hỏi thêm"
}
],
"bang": {
"dau": [
"",
"Số người"
],
"hang": [
[
"Đúng nhóm, sắp mua",
{
"o": "n2-2-1-0-1"
}
],
[
"Đúng nhóm, đang tìm hiểu",
{
"o": "n2-2-1-1-1"
}
],
[
"Chưa đúng nhóm",
{
"o": "n2-2-1-2-1"
}
],
[
"Chưa biết, cần hỏi thêm",
{
"o": "n2-2-1-3-1"
}
]
]
}
},
{
"o": [
{
"id": "n2-2-2-0-1",
"nhan": "Trong số người rơi ở bước 2, bao nhiêu người vốn chưa đúng nhóm",
"ten": "Mẫu 3 · Trong số người rơi ở bước 2, bao nhiêu người vốn chưa đúng nhóm"
},
{
"id": "n2-2-2-1-1",
"nhan": "Điều này làm bạn nhìn bước 2 khác đi thế nào",
"ten": "Mẫu 3 · Điều này làm bạn nhìn bước 2 khác đi thế nào"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Trong số người rơi ở bước 2, bao nhiêu người vốn chưa đúng nhóm",
{
"o": "n2-2-2-0-1"
}
],
[
"Điều này làm bạn nhìn bước 2 khác đi thế nào",
{
"o": "n2-2-2-1-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 4. Hai dòng bạn sửa hôm nay",
"cot": "Mẫu 4",
"nhom": [
{
"tieu": "1. Tìm kiếm khách",
"o": [
{
"id": "n2-3-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b1-lam",
"ten": "Mẫu 4 · 1. Tìm kiếm khách · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b1-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 4 · 1. Tìm kiếm khách · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b1-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 4 · 1. Tìm kiếm khách · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"1. Tìm kiếm khách",
{
"o": "n2-3-0-0-1"
},
{
"o": "bang2-b1-lam"
},
{
"o": "bang2-b1-sua"
}
],
[
"2. Phần phân loại",
{
"o": "n2-3-0-1-1"
},
{
"o": "bang2-b2pl-lam"
},
{
"o": "bang2-b2pl-sua"
}
]
]
}
},
{
"tieu": "2. Phần phân loại",
"o": [
{
"id": "n2-3-0-1-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b2-lam",
"ten": "Mẫu 4 · 2. Phần phân loại · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b2pl-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 4 · 2. Phần phân loại · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b2pl-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 4 · 2. Phần phân loại · Việc sửa trong tuần này"
}
]
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng tương ứng trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Đề bài video Ngày 2",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, trả lời ba câu sau:</p>\n<ol>\n<li>Nhóm khách bạn chọn là ai, và họ đang gặp vấn đề gì?</li>\n<li>Họ muốn đạt kết quả gì, và chuyện gì xảy ra thì họ bắt đầu tìm tới bạn?</li>\n<li>Xếp lại mười khách hôm qua, bao nhiêu người đúng nhóm, và điều đó làm bạn nhìn bước 2 khác đi thế nào?</li>\n</ol>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Bạn nói về nhóm khách, không nói tên hay chuyện riêng của một khách cụ thể.</aside>"
},
{
"o": [
{
"id": "v2-video",
"nhan": "Đường dẫn video Ngày 2",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 2"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Điền trang chân dung nhóm khách</strong> theo Mẫu 1, giữ nguyên sản phẩm của Ngày 1. Nếu hôm qua bạn ghi nhóm khách quá rộng, hôm nay thu hẹp lại và sửa luôn ở phần đầu của bảng.</li>\n<li><strong>Viết câu hỏi cho bốn tiêu chí</strong> theo Mẫu 2, theo đúng sản phẩm của bạn, kèm dấu hiệu giúp bạn biết khách đạt tiêu chí đó.</li>\n<li><strong>Xếp lại mười khách của Ngày 1</strong> theo bốn tiêu chí, theo Mẫu 3. Bạn sẽ thấy trong số người đã rơi, bao nhiêu người vốn không thuộc nhóm của bạn.</li>\n<li><strong>Sửa dòng 1 và phần phân loại của dòng 2</strong> trong bảng: ghi cách làm mới vào ô \"tôi làm gì, nói gì\", và một việc cụ thể vào ô \"việc sửa trong tuần này\". Ô số đo thì giữ nguyên, vì tới Ngày 7 bạn mới đếm lại cả bảng một lượt.</li>\n<li><strong>Ghi ra ba khách đúng nhóm</strong> mà bạn có thể trò chuyện trong mấy ngày tới. Từ Ngày 3 tới Ngày 6, bạn làm việc với khách trong nhóm này.</li>\n<li><strong>Quay video</strong> từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Chân dung nói rõ vấn đề khách gặp và kết quả khách muốn, không chỉ tuổi hay nghề.",
"Mỗi khối đã ghi phần nào đã nghe từ khách, phần nào đang đoán.",
"Bốn tiêu chí đều có câu hỏi viết theo sản phẩm của bạn, và trả lời được \"có\" hoặc \"không\" khi nhìn vào một khách cụ thể.",
"Đã xếp đủ mười khách của Ngày 1, hoặc đủ số khách bạn có.",
"Dòng 1 và phần phân loại của dòng 2 đã có cách làm mới và một việc sửa trong tuần.",
"Đã ghi ra ba khách đúng nhóm để làm việc từ Ngày 3.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video trả lời đủ ba câu, dài từ một tới ba phút."
],
"nopSau": [
"Nộp trang chân dung, bốn tiêu chí, bảng xếp lại mười khách, Bảng quy trình bán hàng bảy bước đã sửa dòng 1 và dòng 2 cùng video Ngày 2.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Ngày mai. Bạn giữ nguyên nhóm khách này tới Ngày 7. Ngày 3, chúng ta sẽ sửa phần tiếp cận của dòng 2 và dòng 3: mở đầu cuộc trò chuyện thế nào, và hỏi gì để khách kể ra điều họ thật sự cần. Bạn sẽ trò chuyện với ba khách đúng nhóm vừa ghi ra hôm nay."
]
},
"3": {
"ten": "Tiếp cận và khai thác sâu",
"hua": "Sau hôm nay, bạn có một câu mở đầu cho cuộc trò chuyện với khách, một bộ câu hỏi theo ba tầng, và ba câu tóm tắt điều khách mong, điều khách lo, viết bằng lời của ba khách thật. Trong bảng, bạn sửa dòng 2 về tiếp cận và dòng 3 về khai thác sâu.",
"phan": [
{
"tieu": "Mẫu 1. Câu mở đầu",
"cot": "Mẫu 1",
"nhom": [
{
"o": [
{
"id": "n3-0-0-0-1",
"nhan": "Lâu nay bạn thường mở đầu bằng câu nào",
"ten": "Mẫu 1 · Lâu nay bạn thường mở đầu bằng câu nào"
},
{
"id": "n3-0-0-1-1",
"nhan": "Câu mở đầu mới: bạn sẽ hỏi trước, vì sao, mất bao lâu",
"ten": "Mẫu 1 · Câu mở đầu mới: bạn sẽ hỏi trước, vì sao, mất bao lâu"
},
{
"id": "n3-0-0-2-1",
"nhan": "Khách hỏi giá ngay từ đầu thì bạn nói gì",
"ten": "Mẫu 1 · Khách hỏi giá ngay từ đầu thì bạn nói gì"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Lâu nay bạn thường mở đầu bằng câu nào",
{
"o": "n3-0-0-0-1"
}
],
[
"Câu mở đầu mới: bạn sẽ hỏi trước, vì sao, mất bao lâu",
{
"o": "n3-0-0-1-1"
}
],
[
"Khách hỏi giá ngay từ đầu thì bạn nói gì",
{
"o": "n3-0-0-2-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 2. Bộ câu hỏi ba tầng",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n3-1-0-0-2",
"nhan": "Tầng một. Thứ khách nhận được",
"goi": "Câu hỏi mẫu: \"Anh chị cần trong bao lâu?\", \"Anh chị dự tính chi chừng bao nhiêu?\"",
"ten": "Mẫu 2 · Tầng một. Thứ khách nhận được"
},
{
"id": "n3-1-0-1-2",
"nhan": "Tầng hai. Trải nghiệm và cảm xúc",
"goi": "Câu hỏi mẫu: \"Anh chị đã thử những cách nào rồi?\", \"Có lần nào xong việc này lại sinh thêm việc khác không?\"",
"ten": "Mẫu 2 · Tầng hai. Trải nghiệm và cảm xúc"
},
{
"id": "n3-1-0-2-2",
"nhan": "Tầng ba. Ý nghĩa và lý do khách tới",
"goi": "Câu hỏi mẫu: \"Chuyện này ảnh hưởng tới công việc của anh chị thế nào?\", \"Sao lúc này anh chị mới tính tới chuyện này?\"",
"ten": "Mẫu 2 · Tầng ba. Ý nghĩa và lý do khách tới"
},
{
"id": "n3-1-0-3-2",
"nhan": "Câu hỏi nối tiếp, dùng khi khách vừa kể một chuyện",
"goi": "Câu hỏi mẫu: \"Lúc đó anh chị xử lý thế nào?\", \"Sao chuyện đó làm anh chị lo?\"",
"ten": "Mẫu 2 · Câu hỏi nối tiếp, dùng khi khách vừa kể một chuyện"
}
],
"bang": {
"dau": [
"Tầng",
"Câu hỏi mẫu",
"Câu hỏi của bạn"
],
"hang": [
[
"Tầng một. Thứ khách nhận được",
"\"Anh chị cần trong bao lâu?\", \"Anh chị dự tính chi chừng bao nhiêu?\"",
{
"o": "n3-1-0-0-2"
}
],
[
"Tầng hai. Trải nghiệm và cảm xúc",
"\"Anh chị đã thử những cách nào rồi?\", \"Có lần nào xong việc này lại sinh thêm việc khác không?\"",
{
"o": "n3-1-0-1-2"
}
],
[
"Tầng ba. Ý nghĩa và lý do khách tới",
"\"Chuyện này ảnh hưởng tới công việc của anh chị thế nào?\", \"Sao lúc này anh chị mới tính tới chuyện này?\"",
{
"o": "n3-1-0-2-2"
}
],
[
"Câu hỏi nối tiếp, dùng khi khách vừa kể một chuyện",
"\"Lúc đó anh chị xử lý thế nào?\", \"Sao chuyện đó làm anh chị lo?\"",
{
"o": "n3-1-0-3-2"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 3. Ghi chép ba khách",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Gọi khách là \"khách A\", \"khách B\", \"khách C\". Không ghi tên, số điện thoại hay chuyện riêng không liên quan tới việc mua.</p>"
},
{
"tieu": "Khách hỏi về điều gì",
"o": [
{
"id": "n3-2-0-0-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Khách hỏi về điều gì · Khách A"
},
{
"id": "n3-2-0-0-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Khách hỏi về điều gì · Khách B"
},
{
"id": "n3-2-0-0-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Khách hỏi về điều gì · Khách C"
}
],
"bang": {
"dau": [
"",
"Khách A",
"Khách B",
"Khách C"
],
"hang": [
[
"Khách hỏi về điều gì",
{
"o": "n3-2-0-0-1"
},
{
"o": "n3-2-0-0-2"
},
{
"o": "n3-2-0-0-3"
}
],
[
"Cuộc trò chuyện xuống tới tầng nào",
{
"o": "n3-2-0-1-1"
},
{
"o": "n3-2-0-1-2"
},
{
"o": "n3-2-0-1-3"
}
],
[
"Câu hỏi giúp khách kể sâu nhất",
{
"o": "n3-2-0-2-1"
},
{
"o": "n3-2-0-2-2"
},
{
"o": "n3-2-0-2-3"
}
],
[
"Câu khách nói đáng nhớ nhất, ghi đúng lời khách",
{
"o": "n3-2-0-3-1"
},
{
"o": "n3-2-0-3-2"
},
{
"o": "n3-2-0-3-3"
}
],
[
"Câu tóm tắt: anh chị mong..., anh chị lo...",
{
"o": "n3-2-0-4-1"
},
{
"o": "n3-2-0-4-2"
},
{
"o": "n3-2-0-4-3"
}
],
[
"Khách nói bạn hiểu đúng chưa",
{
"o": "n3-2-0-5-1"
},
{
"o": "n3-2-0-5-2"
},
{
"o": "n3-2-0-5-3"
}
]
]
}
},
{
"tieu": "Cuộc trò chuyện xuống tới tầng nào",
"o": [
{
"id": "n3-2-0-1-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Cuộc trò chuyện xuống tới tầng nào · Khách A"
},
{
"id": "n3-2-0-1-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Cuộc trò chuyện xuống tới tầng nào · Khách B"
},
{
"id": "n3-2-0-1-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Cuộc trò chuyện xuống tới tầng nào · Khách C"
}
]
},
{
"tieu": "Câu hỏi giúp khách kể sâu nhất",
"o": [
{
"id": "n3-2-0-2-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Câu hỏi giúp khách kể sâu nhất · Khách A"
},
{
"id": "n3-2-0-2-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Câu hỏi giúp khách kể sâu nhất · Khách B"
},
{
"id": "n3-2-0-2-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Câu hỏi giúp khách kể sâu nhất · Khách C"
}
]
},
{
"tieu": "Câu khách nói đáng nhớ nhất, ghi đúng lời khách",
"o": [
{
"id": "n3-2-0-3-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Câu khách nói đáng nhớ nhất, ghi đúng lời khách · Khách A"
},
{
"id": "n3-2-0-3-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Câu khách nói đáng nhớ nhất, ghi đúng lời khách · Khách B"
},
{
"id": "n3-2-0-3-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Câu khách nói đáng nhớ nhất, ghi đúng lời khách · Khách C"
}
]
},
{
"tieu": "Câu tóm tắt: anh chị mong..., anh chị lo...",
"o": [
{
"id": "n3-2-0-4-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Câu tóm tắt: anh chị mong..., anh chị lo... · Khách A"
},
{
"id": "n3-2-0-4-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Câu tóm tắt: anh chị mong..., anh chị lo... · Khách B"
},
{
"id": "n3-2-0-4-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Câu tóm tắt: anh chị mong..., anh chị lo... · Khách C"
}
]
},
{
"tieu": "Khách nói bạn hiểu đúng chưa",
"o": [
{
"id": "n3-2-0-5-1",
"nhan": "Khách A",
"ten": "Mẫu 3 · Khách nói bạn hiểu đúng chưa · Khách A"
},
{
"id": "n3-2-0-5-2",
"nhan": "Khách B",
"ten": "Mẫu 3 · Khách nói bạn hiểu đúng chưa · Khách B"
},
{
"id": "n3-2-0-5-3",
"nhan": "Khách C",
"ten": "Mẫu 3 · Khách nói bạn hiểu đúng chưa · Khách C"
}
]
},
{
"o": [
{
"id": "n3-2-1-0-1",
"nhan": "Cuộc nào bạn dừng ở tầng một, và vì sao",
"ten": "Mẫu 3 · Cuộc nào bạn dừng ở tầng một, và vì sao"
},
{
"id": "n3-2-1-1-1",
"nhan": "Lần sau gặp khách tương tự, bạn sẽ hỏi thêm câu nào",
"ten": "Mẫu 3 · Lần sau gặp khách tương tự, bạn sẽ hỏi thêm câu nào"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Cuộc nào bạn dừng ở tầng một, và vì sao",
{
"o": "n3-2-1-0-1"
}
],
[
"Lần sau gặp khách tương tự, bạn sẽ hỏi thêm câu nào",
{
"o": "n3-2-1-1-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 4. Hai phần bạn sửa hôm nay",
"cot": "Mẫu 4",
"nhom": [
{
"tieu": "2. Phần tiếp cận",
"o": [
{
"id": "n3-3-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b2-lam",
"ten": "Mẫu 4 · 2. Phần tiếp cận · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b2tc-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 4 · 2. Phần tiếp cận · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b2tc-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 4 · 2. Phần tiếp cận · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"2. Phần tiếp cận",
{
"o": "n3-3-0-0-1"
},
{
"o": "bang2-b2tc-lam"
},
{
"o": "bang2-b2tc-sua"
}
],
[
"3. Khai thác sâu",
{
"o": "n3-3-0-1-1"
},
{
"o": "bang2-b3-lam"
},
{
"o": "bang2-b3-sua"
}
]
]
}
},
{
"tieu": "3. Khai thác sâu",
"o": [
{
"id": "n3-3-0-1-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b3-lam",
"ten": "Mẫu 4 · 3. Khai thác sâu · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b3-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 4 · 3. Khai thác sâu · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b3-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 4 · 3. Khai thác sâu · Việc sửa trong tuần này"
}
]
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng tương ứng trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Đề bài video Ngày 3",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, đóng vai một đoạn khai thác với một khách trong nhóm của bạn. Trong video có ba việc:</p>\n<ol>\n<li>Nói câu mở đầu của bạn.</li>\n<li>Hỏi ít nhất một câu ở tầng hai hoặc tầng ba, và một câu hỏi tiếp từ điều khách vừa kể.</li>\n<li>Kết bằng câu tóm tắt \"anh chị mong..., anh chị lo...\", rồi hỏi khách xem bạn hiểu đúng chưa.</li>\n</ol>\n<aside class=\"goi\">Bạn có thể nhờ một người quen đóng vai khách. Quay một mình thì bạn nói cả hai vai, và nói rõ ở đầu video rằng đây là <strong>MÔ PHỎNG</strong>. Video không cần dựng, quay bằng điện thoại là đủ. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
},
{
"o": [
{
"id": "v3-video",
"nhan": "Đường dẫn video Ngày 3",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 3"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Viết câu mở đầu của bạn</strong> theo Mẫu 1, đọc to vài lần cho tới khi nói thấy tự nhiên.</li>\n<li><strong>Soạn bộ câu hỏi ba tầng</strong> theo Mẫu 2, cho đúng sản phẩm và nhóm khách của bạn.</li>\n<li><strong>Trò chuyện với ba khách đúng nhóm</strong> đã ghi ra ở Ngày 2. Gặp, gọi điện hay nhắn tin đều được. Ghi lại theo Mẫu 3: mỗi khách dừng ở tầng nào, câu nào của khách đáng nhớ nhất, và câu tóm tắt mong và lo.</li>\n<li><strong>Sửa dòng 2 và dòng 3</strong> trong bảng theo Mẫu 4: ghi cách làm mới vào ô \"từ nay tôi làm gì, nói gì\" và một việc vào ô \"việc sửa trong tuần này\".</li>\n<li><strong>Quay video</strong> từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>\n<p>Chưa gặp đủ ba khách trong hôm nay thì ghi số khách bạn đã gặp, và hẹn những người còn lại trong mấy ngày tới. Đừng điền Mẫu 3 bằng một cuộc trò chuyện tưởng tượng.</p>",
"kiem": [
"Câu mở đầu nói rõ bạn sẽ hỏi trước, vì sao, mất bao lâu, và không xin phép khách.",
"Bộ câu hỏi có đủ ba tầng, viết cho đúng sản phẩm của bạn.",
"Đã trò chuyện với khách thật trong nhóm khách của Ngày 2, ghi đúng số khách đã gặp.",
"Có ít nhất một cuộc trò chuyện xuống tới tầng hai hoặc tầng ba.",
"Câu tóm tắt dùng đúng từ khách dùng, không dùng từ của người bán.",
"Dòng 2 và dòng 3 đã có cách làm mới và một việc sửa trong tuần.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video dài từ một tới ba phút, có đủ ba việc ở đề bài. Quay một mình thì đã nói rõ là MÔ PHỎNG."
],
"nopSau": [
"Nộp câu mở đầu, bộ câu hỏi ba tầng, ghi chép các khách đã gặp kèm câu tóm tắt, Bảng quy trình bán hàng bảy bước đã sửa dòng 2 và dòng 3, và video Ngày 3.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Ngày mai. Bạn giữ lại các câu tóm tắt mong và lo. Ngày 4, chúng ta sẽ sửa dòng 4: mở phần trình bày bằng chính câu tóm tắt đó, rồi chỉ nói những phần sản phẩm giải quyết đúng chuyện khách đã kể."
]
},
"4": {
"ten": "Trình bày giải pháp",
"hua": "Sau hôm nay, bạn có một bảng ghi từng chuyện khách đã kể và phần sản phẩm giải quyết đúng chuyện đó, và một phần trình bày mới viết cho một khách thật. Trong bảng, bạn sửa dòng 4.",
"phan": [
{
"tieu": "Mẫu 1. Từ chuyện khách kể tới câu bạn nói",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Gọi khách là \"khách A\", và cột đầu ghi đúng lời khách nói chứ không sửa cho đẹp.</p>"
},
{
"tieu": "Dòng 1",
"o": [
{
"id": "n4-0-0-0-0",
"nhan": "Khách kể gì, ghi đúng lời khách",
"ten": "Mẫu 1 · Dòng 1 · Khách kể gì, ghi đúng lời khách"
},
{
"id": "n4-0-0-0-1",
"nhan": "Ở tầng nào",
"ten": "Mẫu 1 · Dòng 1 · Ở tầng nào"
},
{
"id": "n4-0-0-0-2",
"nhan": "Phần sản phẩm giải quyết chuyện đó",
"ten": "Mẫu 1 · Dòng 1 · Phần sản phẩm giải quyết chuyện đó"
},
{
"id": "n4-0-0-0-3",
"nhan": "Câu bạn sẽ nói với khách",
"ten": "Mẫu 1 · Dòng 1 · Câu bạn sẽ nói với khách"
}
],
"bang": {
"dau": [
"Khách kể gì, ghi đúng lời khách",
"Ở tầng nào",
"Phần sản phẩm giải quyết chuyện đó",
"Câu bạn sẽ nói với khách"
],
"hang": [
[
{
"o": "n4-0-0-0-0"
},
{
"o": "n4-0-0-0-1"
},
{
"o": "n4-0-0-0-2"
},
{
"o": "n4-0-0-0-3"
}
],
[
{
"o": "n4-0-0-1-0"
},
{
"o": "n4-0-0-1-1"
},
{
"o": "n4-0-0-1-2"
},
{
"o": "n4-0-0-1-3"
}
],
[
{
"o": "n4-0-0-2-0"
},
{
"o": "n4-0-0-2-1"
},
{
"o": "n4-0-0-2-2"
},
{
"o": "n4-0-0-2-3"
}
],
[
{
"o": "n4-0-0-3-0"
},
{
"o": "n4-0-0-3-1"
},
{
"o": "n4-0-0-3-2"
},
{
"o": "n4-0-0-3-3"
}
]
]
}
},
{
"tieu": "Dòng 2",
"o": [
{
"id": "n4-0-0-1-0",
"nhan": "Khách kể gì, ghi đúng lời khách",
"ten": "Mẫu 1 · Dòng 2 · Khách kể gì, ghi đúng lời khách"
},
{
"id": "n4-0-0-1-1",
"nhan": "Ở tầng nào",
"ten": "Mẫu 1 · Dòng 2 · Ở tầng nào"
},
{
"id": "n4-0-0-1-2",
"nhan": "Phần sản phẩm giải quyết chuyện đó",
"ten": "Mẫu 1 · Dòng 2 · Phần sản phẩm giải quyết chuyện đó"
},
{
"id": "n4-0-0-1-3",
"nhan": "Câu bạn sẽ nói với khách",
"ten": "Mẫu 1 · Dòng 2 · Câu bạn sẽ nói với khách"
}
]
},
{
"tieu": "Dòng 3",
"o": [
{
"id": "n4-0-0-2-0",
"nhan": "Khách kể gì, ghi đúng lời khách",
"ten": "Mẫu 1 · Dòng 3 · Khách kể gì, ghi đúng lời khách"
},
{
"id": "n4-0-0-2-1",
"nhan": "Ở tầng nào",
"ten": "Mẫu 1 · Dòng 3 · Ở tầng nào"
},
{
"id": "n4-0-0-2-2",
"nhan": "Phần sản phẩm giải quyết chuyện đó",
"ten": "Mẫu 1 · Dòng 3 · Phần sản phẩm giải quyết chuyện đó"
},
{
"id": "n4-0-0-2-3",
"nhan": "Câu bạn sẽ nói với khách",
"ten": "Mẫu 1 · Dòng 3 · Câu bạn sẽ nói với khách"
}
]
},
{
"tieu": "Dòng 4",
"o": [
{
"id": "n4-0-0-3-0",
"nhan": "Khách kể gì, ghi đúng lời khách",
"ten": "Mẫu 1 · Dòng 4 · Khách kể gì, ghi đúng lời khách"
},
{
"id": "n4-0-0-3-1",
"nhan": "Ở tầng nào",
"ten": "Mẫu 1 · Dòng 4 · Ở tầng nào"
},
{
"id": "n4-0-0-3-2",
"nhan": "Phần sản phẩm giải quyết chuyện đó",
"ten": "Mẫu 1 · Dòng 4 · Phần sản phẩm giải quyết chuyện đó"
},
{
"id": "n4-0-0-3-3",
"nhan": "Câu bạn sẽ nói với khách",
"ten": "Mẫu 1 · Dòng 4 · Câu bạn sẽ nói với khách"
}
]
},
{
"o": [
{
"id": "n4-0-1-0-1",
"nhan": "Những phần bạn hay nói nhưng không liên quan tới chuyện của khách này, hôm nay bỏ",
"ten": "Mẫu 1 · Những phần bạn hay nói nhưng không liên quan tới chuyện của khách này, hôm nay bỏ"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Những phần bạn hay nói nhưng không liên quan tới chuyện của khách này, hôm nay bỏ",
{
"o": "n4-0-1-0-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 2. Ba câu trình bày",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n4-1-0-0-1",
"nhan": "\"Anh chị mong...\"",
"ten": "Mẫu 2 · \"Anh chị mong...\""
},
{
"id": "n4-1-0-1-1",
"nhan": "\"Anh chị lo...\"",
"ten": "Mẫu 2 · \"Anh chị lo...\""
},
{
"id": "n4-1-0-2-1",
"nhan": "\"Phương án em đề xuất giúp anh chị...\"",
"ten": "Mẫu 2 · \"Phương án em đề xuất giúp anh chị...\""
},
{
"id": "n4-1-0-3-1",
"nhan": "Câu hỏi cuối để biết bạn nói trúng chưa",
"ten": "Mẫu 2 · Câu hỏi cuối để biết bạn nói trúng chưa"
}
],
"bang": {
"dau": [
"Câu",
"Bạn điền"
],
"hang": [
[
"\"Anh chị mong...\"",
{
"o": "n4-1-0-0-1"
}
],
[
"\"Anh chị lo...\"",
{
"o": "n4-1-0-1-1"
}
],
[
"\"Phương án em đề xuất giúp anh chị...\"",
{
"o": "n4-1-0-2-1"
}
],
[
"Câu hỏi cuối để biết bạn nói trúng chưa",
{
"o": "n4-1-0-3-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 3. Dòng 4 bạn sửa hôm nay",
"cot": "Mẫu 3",
"nhom": [
{
"tieu": "4. Trình bày giải pháp",
"o": [
{
"id": "n4-2-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b4-lam",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b4-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b4-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"4. Trình bày giải pháp",
{
"o": "n4-2-0-0-1"
},
{
"o": "bang2-b4-lam"
},
{
"o": "bang2-b4-sua"
}
]
]
}
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng 4 trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Đề bài video Ngày 4",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, đóng vai trình bày cho khách bạn đã chọn hôm nay. Trong video bạn làm ba việc theo thứ tự dưới đây.</p>\n<ol>\n<li>Mở đầu bằng điều khách mong và điều khách lo, dùng đúng lời khách.</li>\n<li>Trình bày hai tới bốn phần, mỗi phần nói rõ nó giúp gì cho điều khách đã kể chứ không đọc danh sách tính năng.</li>\n<li>Kết bằng câu hỏi để biết khách muốn bạn nói kỹ hơn phần nào.</li>\n</ol>\n<aside class=\"goi\">Bạn có thể nhờ một người quen đóng vai khách. Quay một mình thì bạn nói cả hai vai, và nói rõ ở đầu video rằng đây là <strong>MÔ PHỎNG</strong>. Video không cần dựng, quay bằng điện thoại là đủ. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
},
{
"o": [
{
"id": "v4-video",
"nhan": "Đường dẫn video Ngày 4",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 4"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Chọn một khách thật</strong> đã trò chuyện ở Ngày 3, khách có câu tóm tắt rõ nhất.</li>\n<li><strong>Ghi chuyện khách kể và câu bạn sẽ nói</strong> theo Mẫu 1: mỗi chuyện khách đã kể nằm ở tầng nào, phần sản phẩm nào giải quyết đúng chuyện đó và câu bạn sẽ nói với khách.</li>\n<li><strong>Gạch bỏ những phần không liên quan tới chuyện của khách</strong> ở cuối Mẫu 1, tức những phần bạn hay nói nhưng hôm nay không nói với khách này.</li>\n<li><strong>Viết ba câu trình bày</strong> theo Mẫu 2, rồi đọc to vài lần cho tới khi nói ra miệng thấy tự nhiên.</li>\n<li><strong>Sửa dòng 4</strong> trong bảng theo Mẫu 3, ghi cách trình bày mới và một việc cụ thể bạn sửa trong tuần này.</li>\n<li><strong>Quay video</strong> từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>\n<p>Có lịch gặp lại khách đó trong tuần thì dùng phần trình bày mới, và ghi lại khách nói gì ở câu hỏi cuối. Chưa có lịch thì bạn cứ viết và quay trước, rồi dùng khi gặp lại khách.</p>",
"kiem": [
"Khách được chọn là khách thật đã trò chuyện ở Ngày 3.",
"Mẫu 1 có ít nhất ba chuyện khách kể, ghi đúng lời khách, mỗi chuyện có tầng và phần sản phẩm giải quyết.",
"Đã ghi những phần bỏ đi vì không liên quan tới chuyện của khách.",
"Ba câu trình bày dùng lời của khách, và nỗi lo của khách được trả lời trong câu thứ ba.",
"Dòng 4 đã có cách làm mới và một việc sửa trong tuần.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video dài từ một tới ba phút, có đủ ba việc ở đề bài. Quay một mình thì đã nói rõ là MÔ PHỎNG."
],
"nopSau": [
"Nộp Mẫu 1, ba câu trình bày ở Mẫu 2, Bảng quy trình bán hàng bảy bước đã sửa dòng 4 cùng video Ngày 4.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Ngày mai. Bạn giữ lại Mẫu 1. Ngày 5, chúng ta sẽ sửa dòng 5: khi khách nói \"để anh suy nghĩ thêm\", bạn hỏi gốc của băn khoăn trước khi đáp, và dùng Mẫu 1 để xem mình đã bỏ sót chuyện gì khách kể."
]
},
"5": {
"ten": "Xử lý từ chối",
"hua": "Sau hôm nay, bạn có ba câu khách của bạn hay nói khi chưa quyết, và cách đáp từng câu theo ba bước. Trong bảng, bạn sửa dòng 5.",
"phan": [
{
"tieu": "Mẫu 1. Ba câu từ chối và cách đáp",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Ghi đúng lời khách chứ không sửa cho đẹp. Cột \"gốc bạn đoán\" chỉ là đoán, sau khi hỏi khách thật thì ghi lại cho đúng.</p>"
},
{
"tieu": "Khách nói gì, ghi đúng lời khách",
"o": [
{
"id": "n5-0-0-0-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Khách nói gì, ghi đúng lời khách · Câu thứ nhất"
},
{
"id": "n5-0-0-0-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Khách nói gì, ghi đúng lời khách · Câu thứ hai"
},
{
"id": "n5-0-0-0-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Khách nói gì, ghi đúng lời khách · Câu thứ ba"
}
],
"bang": {
"dau": [
"",
"Câu thứ nhất",
"Câu thứ hai",
"Câu thứ ba"
],
"hang": [
[
"Khách nói gì, ghi đúng lời khách",
{
"o": "n5-0-0-0-1"
},
{
"o": "n5-0-0-0-2"
},
{
"o": "n5-0-0-0-3"
}
],
[
"Bước 1. Bạn nhắc lại thế nào",
{
"o": "n5-0-0-1-1"
},
{
"o": "n5-0-0-1-2"
},
{
"o": "n5-0-0-1-3"
}
],
[
"Bước 2. Bạn ghi nhận thế nào, và hỏi gốc bằng câu nào",
{
"o": "n5-0-0-2-1"
},
{
"o": "n5-0-0-2-2"
},
{
"o": "n5-0-0-2-3"
}
],
[
"Gốc bạn đoán đằng sau câu này",
{
"o": "n5-0-0-3-1"
},
{
"o": "n5-0-0-3-2"
},
{
"o": "n5-0-0-3-3"
}
],
[
"Bước 3. Hướng đi bạn đề xuất, khớp với điều nào khách đã kể",
{
"o": "n5-0-0-4-1"
},
{
"o": "n5-0-0-4-2"
},
{
"o": "n5-0-0-4-3"
}
],
[
"Điều bạn sẽ không làm khi nghe câu này",
{
"o": "n5-0-0-5-1"
},
{
"o": "n5-0-0-5-2"
},
{
"o": "n5-0-0-5-3"
}
]
]
}
},
{
"tieu": "Bước 1. Bạn nhắc lại thế nào",
"o": [
{
"id": "n5-0-0-1-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Bước 1. Bạn nhắc lại thế nào · Câu thứ nhất"
},
{
"id": "n5-0-0-1-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Bước 1. Bạn nhắc lại thế nào · Câu thứ hai"
},
{
"id": "n5-0-0-1-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Bước 1. Bạn nhắc lại thế nào · Câu thứ ba"
}
]
},
{
"tieu": "Bước 2. Bạn ghi nhận thế nào, và hỏi gốc bằng câu nào",
"o": [
{
"id": "n5-0-0-2-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Bước 2. Bạn ghi nhận thế nào, và hỏi gốc bằng câu nào · Câu thứ nhất"
},
{
"id": "n5-0-0-2-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Bước 2. Bạn ghi nhận thế nào, và hỏi gốc bằng câu nào · Câu thứ hai"
},
{
"id": "n5-0-0-2-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Bước 2. Bạn ghi nhận thế nào, và hỏi gốc bằng câu nào · Câu thứ ba"
}
]
},
{
"tieu": "Gốc bạn đoán đằng sau câu này",
"o": [
{
"id": "n5-0-0-3-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Gốc bạn đoán đằng sau câu này · Câu thứ nhất"
},
{
"id": "n5-0-0-3-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Gốc bạn đoán đằng sau câu này · Câu thứ hai"
},
{
"id": "n5-0-0-3-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Gốc bạn đoán đằng sau câu này · Câu thứ ba"
}
]
},
{
"tieu": "Bước 3. Hướng đi bạn đề xuất, khớp với điều nào khách đã kể",
"o": [
{
"id": "n5-0-0-4-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Bước 3. Hướng đi bạn đề xuất, khớp với điều nào khách đã kể · Câu thứ nhất"
},
{
"id": "n5-0-0-4-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Bước 3. Hướng đi bạn đề xuất, khớp với điều nào khách đã kể · Câu thứ hai"
},
{
"id": "n5-0-0-4-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Bước 3. Hướng đi bạn đề xuất, khớp với điều nào khách đã kể · Câu thứ ba"
}
]
},
{
"tieu": "Điều bạn sẽ không làm khi nghe câu này",
"o": [
{
"id": "n5-0-0-5-1",
"nhan": "Câu thứ nhất",
"ten": "Mẫu 1 · Điều bạn sẽ không làm khi nghe câu này · Câu thứ nhất"
},
{
"id": "n5-0-0-5-2",
"nhan": "Câu thứ hai",
"ten": "Mẫu 1 · Điều bạn sẽ không làm khi nghe câu này · Câu thứ hai"
},
{
"id": "n5-0-0-5-3",
"nhan": "Câu thứ ba",
"ten": "Mẫu 1 · Điều bạn sẽ không làm khi nghe câu này · Câu thứ ba"
}
]
}
]
},
{
"tieu": "Mẫu 2. Đối chiếu với Mẫu 1 của Ngày 4",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n5-1-0-0-1",
"nhan": "Câu từ chối nào cho thấy khách còn một nỗi lo chưa được trả lời",
"ten": "Mẫu 2 · Câu từ chối nào cho thấy khách còn một nỗi lo chưa được trả lời"
},
{
"id": "n5-1-0-1-1",
"nhan": "Nỗi lo đó khách đã kể ở Ngày 3 chưa, bằng lời nào",
"ten": "Mẫu 2 · Nỗi lo đó khách đã kể ở Ngày 3 chưa, bằng lời nào"
},
{
"id": "n5-1-0-2-1",
"nhan": "Phần trình bày ở Ngày 4 đã bỏ sót gì",
"ten": "Mẫu 2 · Phần trình bày ở Ngày 4 đã bỏ sót gì"
},
{
"id": "n5-1-0-3-1",
"nhan": "Lần sau bạn thêm câu nào vào phần trình bày",
"ten": "Mẫu 2 · Lần sau bạn thêm câu nào vào phần trình bày"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Câu từ chối nào cho thấy khách còn một nỗi lo chưa được trả lời",
{
"o": "n5-1-0-0-1"
}
],
[
"Nỗi lo đó khách đã kể ở Ngày 3 chưa, bằng lời nào",
{
"o": "n5-1-0-1-1"
}
],
[
"Phần trình bày ở Ngày 4 đã bỏ sót gì",
{
"o": "n5-1-0-2-1"
}
],
[
"Lần sau bạn thêm câu nào vào phần trình bày",
{
"o": "n5-1-0-3-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 3. Dòng 5 bạn sửa hôm nay",
"cot": "Mẫu 3",
"nhom": [
{
"tieu": "5. Xử lý từ chối",
"o": [
{
"id": "n5-2-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b5-lam",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b5-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b5-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"5. Xử lý từ chối",
{
"o": "n5-2-0-0-1"
},
{
"o": "bang2-b5-lam"
},
{
"o": "bang2-b5-sua"
}
]
]
}
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng 5 trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Đề bài video Ngày 5",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, đóng vai đáp <strong>một</strong> câu từ chối trong ba câu bạn đã viết. Trong video bạn làm ba việc theo thứ tự dưới đây.</p>\n<ol>\n<li>Khách nói câu từ chối, bạn nhắc lại câu đó rồi dừng lại một nhịp.</li>\n<li>Bạn ghi nhận rồi hỏi gốc của băn khoăn, và khách trả lời.</li>\n<li>Bạn đề xuất một hướng đi, nói rõ nó khớp với điều nào khách đã kể.</li>\n</ol>\n<aside class=\"goi\">Bạn có thể nhờ một người quen đóng vai khách. Quay một mình thì bạn nói cả hai vai, và nói rõ ở đầu video rằng đây là <strong>MÔ PHỎNG</strong>. Video không cần dựng, quay bằng điện thoại là đủ. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
},
{
"o": [
{
"id": "v5-video",
"nhan": "Đường dẫn video Ngày 5",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 5"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Viết ba câu khách của bạn hay nói khi chưa quyết</strong>, ghi đúng lời khách. Nhớ lại các cuộc trò chuyện ở Ngày 3 và Ngày 4, hoặc những khách đã mất ở dòng 5 trong bảng của Ngày 1.</li>\n<li><strong>Viết cách đáp từng câu theo ba bước</strong> ở Mẫu 1, bằng câu bạn nói ra được tự nhiên.</li>\n<li><strong>Đối chiếu với Mẫu 1 của Ngày 4</strong> ở Mẫu 2: câu từ chối nào cho thấy bạn đã bỏ sót một chuyện khách kể.</li>\n<li><strong>Sửa dòng 5</strong> trong bảng theo Mẫu 3, ghi cách đáp mới và một việc cụ thể bạn sửa trong tuần này.</li>\n<li><strong>Quay video</strong> từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>\n<p>Muốn luyện thêm trước khi gặp khách thật, bạn dùng tài liệu <strong>Để AI đóng vai khách khó tính</strong>, đường dẫn có trong email hôm nay. Bạn đưa ba câu từ chối của mình vào, rồi tập đáp với AI vài lượt.</p>",
"kiem": [
"Ba câu từ chối ghi đúng lời khách của bạn hay nói.",
"Mỗi câu có đủ ba bước, và bước 2 là một câu hỏi, chưa phải một lời giải thích.",
"Hướng đi ở bước 3 khớp với một điều khách đã kể.",
"Không có cách đáp nào giảm giá chỉ để qua được băn khoăn của khách.",
"Đã đối chiếu với Mẫu 1 của Ngày 4 và ghi phần bị bỏ sót.",
"Dòng 5 đã có cách làm mới và một việc sửa trong tuần.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video dài từ một tới ba phút, có đủ ba việc ở đề bài. Quay một mình thì đã nói rõ là MÔ PHỎNG."
],
"nopSau": [
"Nộp ba câu từ chối và cách đáp, phần đối chiếu với Mẫu 1 của Ngày 4, Bảng quy trình bán hàng bảy bước đã sửa dòng 5, và video Ngày 5.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Ngày mai. Ngày 6, chúng ta sẽ sửa dòng 6: báo giá thật rõ, rồi đề nghị khách quyết định. Những băn khoăn bạn đã gỡ hôm nay sẽ được nhắc lại ngay trước câu hỏi đó."
]
},
"6": {
"ten": "Báo giá và đề nghị khách quyết định",
"hua": "Sau hôm nay, bạn có một câu báo giá thật rõ, hai câu hỏi để khách quyết định, và một cách kết thúc buổi trao đổi bằng đơn hàng hoặc một lịch hẹn có ngày giờ. Trong bảng, bạn sửa dòng 6.",
"phan": [
{
"tieu": "Mẫu 1. Nhắc lại và hai câu hỏi",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Ghi đúng lời khách nói. Nếu chưa gặp được khách thật hôm nay, bạn ghi là chưa gặp, và điền phần trả lời sau khi gặp.</p>"
},
{
"o": [
{
"id": "n6-0-0-0-1",
"nhan": "Điều khách mong, bằng lời khách",
"ten": "Mẫu 1 · Điều khách mong, bằng lời khách"
},
{
"id": "n6-0-0-1-1",
"nhan": "Điều khách lo, bằng lời khách",
"ten": "Mẫu 1 · Điều khách lo, bằng lời khách"
},
{
"id": "n6-0-0-2-1",
"nhan": "Băn khoăn đã gỡ ở Ngày 5",
"ten": "Mẫu 1 · Băn khoăn đã gỡ ở Ngày 5"
},
{
"id": "n6-0-0-3-1",
"nhan": "Câu nhắc lại bạn sẽ nói",
"ten": "Mẫu 1 · Câu nhắc lại bạn sẽ nói"
},
{
"id": "n6-0-0-4-1",
"nhan": "Câu hỏi thứ nhất: khách trả lời gì",
"ten": "Mẫu 1 · Câu hỏi thứ nhất: khách trả lời gì"
},
{
"id": "n6-0-0-5-1",
"nhan": "Câu hỏi thứ hai: khách trả lời gì",
"ten": "Mẫu 1 · Câu hỏi thứ hai: khách trả lời gì"
},
{
"id": "n6-0-0-6-1",
"nhan": "Buổi trao đổi kết thúc thế nào",
"ten": "Mẫu 1 · Buổi trao đổi kết thúc thế nào"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Điều khách mong, bằng lời khách",
{
"o": "n6-0-0-0-1"
}
],
[
"Điều khách lo, bằng lời khách",
{
"o": "n6-0-0-1-1"
}
],
[
"Băn khoăn đã gỡ ở Ngày 5",
{
"o": "n6-0-0-2-1"
}
],
[
"Câu nhắc lại bạn sẽ nói",
{
"o": "n6-0-0-3-1"
}
],
[
"Câu hỏi thứ nhất: khách trả lời gì",
{
"o": "n6-0-0-4-1"
}
],
[
"Câu hỏi thứ hai: khách trả lời gì",
{
"o": "n6-0-0-5-1"
}
],
[
"Buổi trao đổi kết thúc thế nào",
{
"o": "n6-0-0-6-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 2. Báo giá và lịch hẹn",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n6-1-0-0-1",
"nhan": "Giá, một con số",
"ten": "Mẫu 2 · Giá, một con số"
},
{
"id": "n6-1-0-1-1",
"nhan": "Gồm những gì",
"ten": "Mẫu 2 · Gồm những gì"
},
{
"id": "n6-1-0-2-1",
"nhan": "Điều khách lo mà bạn nhắc lại khi báo giá",
"ten": "Mẫu 2 · Điều khách lo mà bạn nhắc lại khi báo giá"
},
{
"id": "n6-1-0-3-1",
"nhan": "Câu báo giá đầy đủ, đúng như bạn sẽ nói với khách",
"ten": "Mẫu 2 · Câu báo giá đầy đủ, đúng như bạn sẽ nói với khách"
},
{
"id": "n6-1-0-4-1",
"nhan": "Nếu khách chưa đồng ý mua: lịch hẹn, việc gì",
"ten": "Mẫu 2 · Nếu khách chưa đồng ý mua: lịch hẹn, việc gì"
},
{
"id": "n6-1-0-5-1",
"nhan": "Ai làm",
"ten": "Mẫu 2 · Ai làm"
},
{
"id": "n6-1-0-6-1",
"nhan": "Khi nào, ngày và giờ",
"ten": "Mẫu 2 · Khi nào, ngày và giờ"
},
{
"id": "n6-1-0-7-1",
"nhan": "Nếu người quyết định không có mặt: ba ý chính gửi khách trình lại",
"ten": "Mẫu 2 · Nếu người quyết định không có mặt: ba ý chính gửi khách trình lại"
},
{
"id": "n6-1-0-8-1",
"nhan": "Ngày giờ bạn gọi lại",
"ten": "Mẫu 2 · Ngày giờ bạn gọi lại"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Giá, một con số",
{
"o": "n6-1-0-0-1"
}
],
[
"Gồm những gì",
{
"o": "n6-1-0-1-1"
}
],
[
"Điều khách lo mà bạn nhắc lại khi báo giá",
{
"o": "n6-1-0-2-1"
}
],
[
"Câu báo giá đầy đủ, đúng như bạn sẽ nói với khách",
{
"o": "n6-1-0-3-1"
}
],
[
"Nếu khách chưa đồng ý mua: lịch hẹn, việc gì",
{
"o": "n6-1-0-4-1"
}
],
[
"Ai làm",
{
"o": "n6-1-0-5-1"
}
],
[
"Khi nào, ngày và giờ",
{
"o": "n6-1-0-6-1"
}
],
[
"Nếu người quyết định không có mặt: ba ý chính gửi khách trình lại",
{
"o": "n6-1-0-7-1"
}
],
[
"Ngày giờ bạn gọi lại",
{
"o": "n6-1-0-8-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 3. Dòng 6 bạn sửa hôm nay",
"cot": "Mẫu 3",
"nhom": [
{
"tieu": "6. Đề nghị khách quyết định",
"o": [
{
"id": "n6-2-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b6-lam",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b6-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b6-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"6. Đề nghị khách quyết định",
{
"o": "n6-2-0-0-1"
},
{
"o": "bang2-b6-lam"
},
{
"o": "bang2-b6-sua"
}
]
]
}
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng 6 trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Đề bài video Ngày 6",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, đóng vai đoạn cuối buổi trao đổi. Trong video bạn làm ba việc theo thứ tự dưới đây.</p>\n<ol>\n<li>Bạn nhắc lại điều khách mong, điều khách lo và băn khoăn đã gỡ.</li>\n<li>Bạn hỏi hai câu ở Mẫu 1 và để khách trả lời bằng lời của họ.</li>\n<li>Bạn báo giá bằng một câu rõ, rồi đề nghị khách quyết định. Video kết thúc khi khách đồng ý mua, hoặc bằng một lịch hẹn có việc gì, ai làm, khi nào.</li>\n</ol>\n<aside class=\"goi\">Bạn có thể nhờ một người quen đóng vai khách. Quay một mình thì bạn nói cả hai vai, và nói rõ ở đầu video rằng đây là <strong>MÔ PHỎNG</strong>. Video không cần dựng, quay bằng điện thoại là đủ. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
},
{
"o": [
{
"id": "v6-video",
"nhan": "Đường dẫn video Ngày 6",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 6"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Viết câu nhắc lại chuyện của khách</strong>: điều khách mong, điều khách lo và băn khoăn đã gỡ, ở Mẫu 1.</li>\n<li><strong>Viết câu báo giá đủ bốn ý</strong> ở Mẫu 2, rồi đọc to vài lần cho quen miệng.</li>\n<li><strong>Hỏi hai câu với một khách thật</strong>, ghi lại khách trả lời gì ở Mẫu 1.</li>\n<li><strong>Ghi lại buổi nói chuyện kết thúc thế nào</strong>: khách đồng ý mua, hay lịch hẹn có đủ việc gì, ai làm, khi nào.</li>\n<li><strong>Sửa dòng 6</strong> trong bảng theo Mẫu 3, ghi cách đề nghị mới và một việc cụ thể bạn sửa trong tuần này.</li>\n<li><strong>Quay video từ một tới ba phút</strong>, kết bằng việc khách đồng ý mua hoặc một lịch hẹn, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Câu nhắc lại dùng lời của khách, có đủ mong, lo và băn khoăn đã gỡ.",
"Đã hỏi cả hai câu, không bỏ câu nào.",
"Câu báo giá là một con số, nói rõ gồm những gì, có nhắc lại điều khách lo.",
"Không xin lỗi, không giảm giá khi khách chưa hỏi.",
"Buổi trao đổi kết thúc khi khách đồng ý mua, hoặc bằng lịch hẹn có đủ việc gì, ai làm, khi nào.",
"Đã hỏi hai câu với một khách thật và ghi lại khách trả lời gì, hoặc ghi rõ là chưa gặp được.",
"Dòng 6 đã có cách làm mới và một việc sửa trong tuần.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video dài từ một tới ba phút, có đủ ba việc ở đề bài. Quay một mình thì đã nói rõ là MÔ PHỎNG."
],
"nopSau": [
"Nộp Mẫu 1 và Mẫu 2, Bảng quy trình bán hàng bảy bước đã sửa dòng 6, và video Ngày 6.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Ngày mai. Ngày 7, chúng ta sẽ sửa dòng cuối cùng, chăm sóc sau bán, rồi đếm lại cả bảy dòng để thấy bảng của bạn đã đổi ra sao sau một tuần."
]
},
"7": {
"ten": "Chăm sóc khách sau khi bán, rồi đếm lại cả bảng",
"hua": "Hôm nay bạn sửa dòng 7 của bảng, tức là cách chăm sóc khách sau khi bán, rồi đếm lại cả bảy bước bằng số thật của tuần này. Đếm xong, bạn có bản 2 của bảng để so sánh với bản 1 và biết bước nào cần sửa tiếp.",
"phan": [
{
"tieu": "Mẫu 1. Ba lúc khách nhớ",
"cot": "Mẫu 1",
"nhom": [
{
"o": [
{
"id": "n7-0-0-0-1",
"nhan": "Ngay sau khi khách mua: bạn gửi gì, nói gì",
"ten": "Mẫu 1 · Ngay sau khi khách mua: bạn gửi gì, nói gì"
},
{
"id": "n7-0-0-1-1",
"nhan": "Lúc khách thấy kết quả đầu tiên: đó là lúc nào, bạn làm gì",
"ten": "Mẫu 1 · Lúc khách thấy kết quả đầu tiên: đó là lúc nào, bạn làm gì"
},
{
"id": "n7-0-0-2-1",
"nhan": "Lúc giao xong: khi nào, câu bạn sẽ nói",
"ten": "Mẫu 1 · Lúc giao xong: khi nào, câu bạn sẽ nói"
},
{
"id": "n7-0-0-3-1",
"nhan": "Giữ liên lạc với khách cũ: bao lâu nhắn một lần, mỗi lần gửi thứ gì có ích",
"ten": "Mẫu 1 · Giữ liên lạc với khách cũ: bao lâu nhắn một lần, mỗi lần gửi thứ gì có ích"
},
{
"id": "n7-0-0-4-1",
"nhan": "Khi nào bạn dừng",
"ten": "Mẫu 1 · Khi nào bạn dừng"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Ngay sau khi khách mua: bạn gửi gì, nói gì",
{
"o": "n7-0-0-0-1"
}
],
[
"Lúc khách thấy kết quả đầu tiên: đó là lúc nào, bạn làm gì",
{
"o": "n7-0-0-1-1"
}
],
[
"Lúc giao xong: khi nào, câu bạn sẽ nói",
{
"o": "n7-0-0-2-1"
}
],
[
"Giữ liên lạc với khách cũ: bao lâu nhắn một lần, mỗi lần gửi thứ gì có ích",
{
"o": "n7-0-0-3-1"
}
],
[
"Khi nào bạn dừng",
{
"o": "n7-0-0-4-1"
}
]
]
}
}
]
},
{
"tieu": "Mẫu 2. Dòng 7 bạn sửa hôm nay",
"cot": "Mẫu 2",
"nhom": [
{
"tieu": "7. Chăm sóc sau bán",
"o": [
{
"id": "n7-1-0-0-1",
"nhan": "Trước đây tôi làm gì, nói gì",
"tu": "bang1-b7-lam",
"ten": "Mẫu 2 · 7. Chăm sóc sau bán · Trước đây tôi làm gì, nói gì"
},
{
"id": "bang2-b7-lam",
"nhan": "Từ nay tôi làm gì, nói gì",
"ten": "Mẫu 2 · 7. Chăm sóc sau bán · Từ nay tôi làm gì, nói gì"
},
{
"id": "bang2-b7-sua",
"nhan": "Việc sửa trong tuần này",
"ten": "Mẫu 2 · 7. Chăm sóc sau bán · Việc sửa trong tuần này"
}
],
"bang": {
"dau": [
"Dòng",
"Trước đây tôi làm gì, nói gì",
"Từ nay tôi làm gì, nói gì",
"Việc sửa trong tuần này"
],
"hang": [
[
"7. Chăm sóc sau bán",
{
"o": "n7-1-0-0-1"
},
{
"o": "bang2-b7-lam"
},
{
"o": "bang2-b7-sua"
}
]
]
}
},
{
"h": "<p>Bạn chép cột \"từ nay\" và cột \"việc sửa\" sang dòng 7 trong Bảng quy trình bán hàng bảy bước.</p>"
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Mẫu 3. So sánh bản 1 và bản 2",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Phần này giống mục cuối của Bảng quy trình bán hàng bảy bước, nên bạn điền ở một trong hai chỗ chứ không cần chép hai lần.</p>"
},
{
"o": [
{
"id": "n7-2-0-0-1",
"nhan": "Bản 1: số khách, tính từ ngày nào tới ngày nào",
"tu": "bang1-khoang",
"ten": "Mẫu 3 · Bản 1: số khách, tính từ ngày nào tới ngày nào"
},
{
"id": "bang2-khoang",
"nhan": "Bản 2: số khách, tính từ ngày nào tới ngày nào",
"ten": "Mẫu 3 · Bản 2: số khách, tính từ ngày nào tới ngày nào"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Bản 1: số khách, tính từ ngày nào tới ngày nào",
{
"o": "n7-2-0-0-1"
}
],
[
"Bản 2: số khách, tính từ ngày nào tới ngày nào",
{
"o": "bang2-khoang"
}
]
]
}
},
{
"tieu": "1. Tìm kiếm khách",
"o": [
{
"id": "n7-2-1-0-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b1-so",
"ten": "Mẫu 3 · 1. Tìm kiếm khách · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b1-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 1. Tìm kiếm khách · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b1-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 1. Tìm kiếm khách · Đã sửa gì ở bước này"
}
],
"bang": {
"dau": [
"Bước",
"Số bản 1, đếm Ngày 1",
"Số bản 2, đếm tuần này",
"Đã sửa gì ở bước này"
],
"hang": [
[
"1. Tìm kiếm khách",
{
"o": "n7-2-1-0-1"
},
{
"o": "bang2-b1-so"
},
{
"o": "bang2-b1-dasua"
}
],
[
"2. Tiếp cận và phân loại",
{
"o": "n7-2-1-1-1"
},
{
"o": "bang2-b2-so"
},
{
"o": "bang2-b2-dasua"
}
],
[
"3. Khai thác sâu",
{
"o": "n7-2-1-2-1"
},
{
"o": "bang2-b3-so"
},
{
"o": "bang2-b3-dasua"
}
],
[
"4. Trình bày giải pháp",
{
"o": "n7-2-1-3-1"
},
{
"o": "bang2-b4-so"
},
{
"o": "bang2-b4-dasua"
}
],
[
"5. Xử lý từ chối",
{
"o": "n7-2-1-4-1"
},
{
"o": "bang2-b5-so"
},
{
"o": "bang2-b5-dasua"
}
],
[
"6. Đề nghị khách quyết định",
{
"o": "n7-2-1-5-1"
},
{
"o": "bang2-b6-so"
},
{
"o": "bang2-b6-dasua"
}
],
[
"7. Chăm sóc sau bán",
{
"o": "n7-2-1-6-1"
},
{
"o": "bang2-b7-so"
},
{
"o": "bang2-b7-dasua"
}
]
]
}
},
{
"tieu": "2. Tiếp cận và phân loại",
"o": [
{
"id": "n7-2-1-1-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b2-so",
"ten": "Mẫu 3 · 2. Tiếp cận và phân loại · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b2-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 2. Tiếp cận và phân loại · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b2-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 2. Tiếp cận và phân loại · Đã sửa gì ở bước này"
}
]
},
{
"tieu": "3. Khai thác sâu",
"o": [
{
"id": "n7-2-1-2-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b3-so",
"ten": "Mẫu 3 · 3. Khai thác sâu · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b3-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 3. Khai thác sâu · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b3-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 3. Khai thác sâu · Đã sửa gì ở bước này"
}
]
},
{
"tieu": "4. Trình bày giải pháp",
"o": [
{
"id": "n7-2-1-3-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b4-so",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b4-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b4-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 4. Trình bày giải pháp · Đã sửa gì ở bước này"
}
]
},
{
"tieu": "5. Xử lý từ chối",
"o": [
{
"id": "n7-2-1-4-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b5-so",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b5-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b5-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 5. Xử lý từ chối · Đã sửa gì ở bước này"
}
]
},
{
"tieu": "6. Đề nghị khách quyết định",
"o": [
{
"id": "n7-2-1-5-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b6-so",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b6-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b6-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 6. Đề nghị khách quyết định · Đã sửa gì ở bước này"
}
]
},
{
"tieu": "7. Chăm sóc sau bán",
"o": [
{
"id": "n7-2-1-6-1",
"nhan": "Số bản 1, đếm Ngày 1",
"tu": "bang1-b7-so",
"ten": "Mẫu 3 · 7. Chăm sóc sau bán · Số bản 1, đếm Ngày 1"
},
{
"id": "bang2-b7-so",
"nhan": "Số bản 2, đếm tuần này",
"ten": "Mẫu 3 · 7. Chăm sóc sau bán · Số bản 2, đếm tuần này"
},
{
"id": "bang2-b7-dasua",
"nhan": "Đã sửa gì ở bước này",
"ten": "Mẫu 3 · 7. Chăm sóc sau bán · Đã sửa gì ở bước này"
}
]
},
{
"o": [
{
"id": "bang2-ro",
"nhan": "Bước thay đổi rõ nhất, và số đó đứng trên bao nhiêu khách",
"ten": "Mẫu 3 · Bước thay đổi rõ nhất, và số đó đứng trên bao nhiêu khách"
},
{
"id": "bang2-tiep",
"nhan": "Tuần sau bạn sẽ sửa bước nào, vì sao",
"ten": "Mẫu 3 · Tuần sau bạn sẽ sửa bước nào, vì sao"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Bước thay đổi rõ nhất, và số đó đứng trên bao nhiêu khách",
{
"o": "bang2-ro"
}
],
[
"Tuần sau bạn sẽ sửa bước nào, vì sao",
{
"o": "bang2-tiep"
}
]
]
}
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Mẫu 4. Sổ ghi tình huống, ghi một lần gặp khách",
"cot": "Mẫu 4",
"nhom": [
{
"o": [
{
"id": "n7-3-0-0-1",
"nhan": "Chuyện gì xảy ra",
"ten": "Mẫu 4 · Chuyện gì xảy ra"
},
{
"id": "n7-3-0-1-1",
"nhan": "Lúc đó cần gì",
"ten": "Mẫu 4 · Lúc đó cần gì"
},
{
"id": "n7-3-0-2-1",
"nhan": "Bạn đã nói, làm gì",
"ten": "Mẫu 4 · Bạn đã nói, làm gì"
},
{
"id": "n7-3-0-3-1",
"nhan": "Khách phản ứng ra sao",
"ten": "Mẫu 4 · Khách phản ứng ra sao"
},
{
"id": "n7-3-0-4-1",
"nhan": "Lần sau làm khác điều gì",
"ten": "Mẫu 4 · Lần sau làm khác điều gì"
}
],
"bang": {
"dau": [
"",
"Bạn điền"
],
"hang": [
[
"Chuyện gì xảy ra",
{
"o": "n7-3-0-0-1"
}
],
[
"Lúc đó cần gì",
{
"o": "n7-3-0-1-1"
}
],
[
"Bạn đã nói, làm gì",
{
"o": "n7-3-0-2-1"
}
],
[
"Khách phản ứng ra sao",
{
"o": "n7-3-0-3-1"
}
],
[
"Lần sau làm khác điều gì",
{
"o": "n7-3-0-4-1"
}
]
]
}
}
],
"rieng": 1
},
{
"tieu": "Đề bài video Ngày 7",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>hai tới ba phút</strong> và nói thẳng với người xem, không cần đóng vai. Video có ba phần:</p>\n<ol>\n<li><strong>Trước và sau.</strong> Bảng bản 1 và bản 2 khác nhau ở đâu, bạn nói cụ thể một hai dòng có kèm số.</li>\n<li><strong>Đã làm gì, có bằng chứng gì.</strong> Làm tới đâu thì nói tới đó, theo bốn mức dưới đây.</li>\n<li><strong>Hướng tiếp theo.</strong> Bước bạn sẽ sửa tiếp sau thử thách, và vì sao.</li>\n</ol>\n<p>Có bốn mức, mức sau là bằng chứng mạnh hơn mức trước:</p>\n<ul>\n<li><strong>Mức 1.</strong> Đã điền xong bảng</li>\n<li><strong>Mức 2.</strong> Đã tập nói, có video đóng vai</li>\n<li><strong>Mức 3.</strong> Đã nói thử với khách thật</li>\n<li><strong>Mức 4.</strong> Đã thấy thêm đơn, thêm khách quay lại</li>\n</ul>\n<p>Sau bảy ngày, phần lớn người học đang ở mức 1 hoặc 2, và như vậy là bình thường. Làm tới đâu thì nói tới đó. Người xem tin một chuyện thật, dù nhỏ, hơn một lời nói quá.</p>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Nếu bạn quay màn hình có bảng, che tên khách trước khi quay. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
},
{
"o": [
{
"id": "v7-video",
"nhan": "Đường dẫn video Ngày 7",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video Ngày 7"
}
]
}
]
}
],
"viec": "<ol>\n<li><strong>Sửa dòng 7: chăm sóc khách ở ba lúc (Mẫu 1, Mẫu 2).</strong> Ghi trước đây bạn làm gì sau khi bán, rồi viết cách làm mới cho từng lúc.</li>\n<li><strong>Đếm lại cả bảy bước, so với bản 1 (Mẫu 3).</strong> Dùng số thật của tuần này.</li>\n<li><strong>Chọn bước sẽ sửa tiếp, ghi rõ vì sao.</strong></li>\n<li><strong>Ghi lại một lần gặp khách vào sổ (Mẫu 4).</strong></li>\n<li><strong>Quay video 2 tới 3 phút, nói thẳng với người xem, không cần đóng vai.</strong></li>\n</ol>\n<p>Hôm nay ít thời gian thì bạn làm trước việc 1, 2, 3 và 5. Sổ ghi tình huống là của riêng bạn, để ngày mai bắt đầu cũng được.</p>",
"kiem": [
"Dòng 7 có cách làm cho đủ ba lúc: ngay sau khi khách mua, lúc khách thấy kết quả đầu tiên, lúc giao xong.",
"Cả bảy bước có số bản 2, là số thật của tuần này.",
"Đã ghi rõ số khách và đếm từ ngày nào tới ngày nào, cho cả bản 1 và bản 2.",
"Không có bước nào ước thêm cho đủ. Bước chưa đủ thời gian để đếm thì ghi rõ như vậy.",
"Đã chọn bước sửa tiếp và ghi vì sao.",
"Đã ghi một lần gặp khách vào sổ, đủ năm ô.",
"Video dài từ hai tới ba phút, đủ ba phần, làm tới đâu nói tới đó.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách."
],
"nopSau": [
"Nộp Bảng quy trình bán hàng bảy bước bản 2, có phần so sánh bản 1 và bản 2, cùng video Ngày 7. Sổ ghi tình huống là của riêng bạn nên không cần nộp, bạn giữ để dùng tiếp.",
"Bạn bấm Nộp bài ở cuối trang này. Nộp chậm vẫn được nhận nếu trước hạn cuối, tức ba ngày sau hôm nay."
]
},
"8": {
"nhan": "Sau Ngày 7",
"ten": "Video tổng kết cảm nhận",
"bai": "video tổng kết",
"phan": [
{
"tieu": "Video tổng kết cảm nhận",
"cot": "Video",
"nhom": [
{
"h": "<p>Nộp xong Ngày 7, bạn quay thêm một video cuối, video thứ chín của thử thách, dài từ ba tới năm phút. Video Ngày 7 nhìn lại bảng của bạn, còn video này kể lại chặng đường của bạn, để một chủ doanh nghiệp khác cùng ngành xem cũng hiểu bạn đã đi từ đâu tới đâu.</p>\n<p>Bạn kể lần lượt bốn điều:</p>\n<ol>\n<li>Bạn là ai, làm ngành gì, bán sản phẩm gì cho nhóm khách nào.</li>\n<li>Trước thử thách, bạn bán hàng thế nào, và khách hay rơi ở bước nào.</li>\n<li>Trong bảy ngày, bạn đã đổi gì cụ thể ở những bước đã sửa. Đã dùng với một khách thật thì kể lại lần đó: bạn nói khác trước ở đâu, khách phản ứng ra sao. Gọi khách bằng tên chung, không nói tên thật.</li>\n<li>Bây giờ cách bán của bạn khác trước ở đâu, và tuần tới bạn sửa tiếp bước nào trong bảng.</li>\n</ol>\n<p>Nói đúng mức bạn đã đi tới. Mới điền xong bảng thì nói mới điền xong, đã dùng với khách thật thì kể lần đó, chưa thấy kết quả thì nói chưa thấy. Một chuyện thật, nhỏ mà rõ, giúp người đi sau nhiều hơn một lời khen chung chung.</p>\n<p>Video này có thể được Next Gen Founder dùng công khai để lan tỏa và truyền thông, theo bản thỏa thuận bạn đã đồng ý lúc bắt đầu. Bạn dán đường dẫn video vào ô bên dưới rồi bấm Nộp bài, hạn cuối như cả thử thách.</p>"
},
{
"o": [
{
"id": "v8-video",
"nhan": "Đường dẫn video tổng kết",
"dong": 1,
"lk": 1,
"ten": "Đường dẫn video tổng kết"
}
]
}
]
}
],
"nopSau": [
"Hạn nộp video tổng kết giống hạn cuối của cả thử thách, tức ba ngày sau Ngày 7."
]
}
};
