/* Dựng tự động bằng dung_tai_lieu_thu_thach.py, đừng sửa tay. */
var TAI_LIEU = {
"1": "<aside class=\"goi\">Sau hôm nay, bạn có bản đầu tiên của Bảng quy trình bán hàng bảy bước. Nhìn vào bảng, bạn biết mười khách gần nhất của mình đã dừng lại ở bước nào, và bước nào bạn cần để ý nhất trong tuần này.</aside>\n<p>Hôm nay bạn chưa sửa gì cả. Bạn chỉ đếm lại những gì đã xảy ra với mười khách gần nhất, vì khi chưa biết khách rơi ở đâu thì rất dễ bỏ công sửa nhầm chỗ.</p>\n<h2>Bảy ngày của thử thách</h2>\n<p>Trong cả bảy ngày, bạn làm việc với một sản phẩm và một nhóm khách, chọn ngay từ hôm nay. Thành phẩm cuối cùng là <strong>Bảng quy trình bán hàng bảy bước</strong> của chính bạn: bảy dòng cho bảy bước bán hàng, hôm nay điền bản đầu, mỗi ngày sau sửa một phần, và tới Ngày 7 bạn đo lại để có bản thứ hai.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Ngày</th><th>Bước học kỹ</th><th>Phần bảng bạn sửa</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Nhìn cả bảy bước</td><td>Điền cả bảy dòng, có bảng bản 1</td></tr>\n<tr><td>2</td><td>Tìm kiếm khách và phân loại</td><td>Dòng 1 và phần phân loại của dòng 2</td></tr>\n<tr><td>3</td><td>Tiếp cận và khai thác sâu</td><td>Phần tiếp cận của dòng 2, và dòng 3</td></tr>\n<tr><td>4</td><td>Trình bày giải pháp</td><td>Dòng 4</td></tr>\n<tr><td>5</td><td>Xử lý từ chối</td><td>Dòng 5</td></tr>\n<tr><td>6</td><td>Đề nghị khách quyết định</td><td>Dòng 6</td></tr>\n<tr><td>7</td><td>Chăm sóc sau bán</td><td>Dòng 7, đo lại cả bảng, có bảng bản 2</td></tr>\n</tbody></table></div>\n<p>Mỗi ngày có bốn phần: một video hướng dẫn, một tài liệu như bản bạn đang đọc, một bài tập làm ngay trên doanh nghiệp của bạn, và một video ngắn bạn tự quay để nộp. Bạn không cần làm bảy ngày liền nhau, bận một hôm thì hôm sau làm tiếp.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Bảy bước, và khách đang nghĩ gì ở từng bước</h3>\n<p>Từ lúc một người còn chưa biết tới bạn cho tới lúc họ dùng sản phẩm và quay lại mua thêm, việc bán hàng đi qua bảy bước. Ở mỗi bước, người bán làm một việc, còn khách đang ở một trạng thái khác nhau trong đầu.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước của người bán</th><th>Khách đang ở đâu</th><th>Khách đang nghĩ gì</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Nhận biết</td><td>Người này là ai, có liên quan gì tới mình không</td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Tìm hiểu</td><td>Nói chuyện với người này có đáng mất thời gian không</td></tr>\n<tr><td>3. Khai thác sâu</td><td>Tìm hiểu</td><td>Người này có hiểu đúng chuyện của mình không</td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Lựa chọn</td><td>Cách này có hợp với mình hơn những lựa chọn khác không</td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Lựa chọn</td><td>Mình còn lo điều này, nói ra thì người này trả lời thế nào</td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Mua</td><td>Mình quyết định bây giờ được chưa</td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Trải nghiệm</td><td>Mình đã chọn đúng chưa, có nên giới thiệu cho người khác không</td></tr>\n</tbody></table></div>\n<p>Khách đi qua những trạng thái này theo đúng thứ tự, và không ai nhảy cóc được. Một người còn đang tự hỏi bạn có hiểu chuyện của họ không mà đã nhận ngay bảng giá thì họ chưa có lý do gì để so sánh, ngoài con số. Nhiều lần khách \"chê đắt\" thật ra là khách bị kéo sang bước 4 khi còn đang ở bước 3.</p>\n<h3>2. Bước nào cũng có khách rơi, và các bước nối với nhau</h3>\n<p>Không có quy trình nào giữ được tất cả mọi người. Ở bước nào cũng có người dừng lại, và người đã dừng ở bước 2 thì không bao giờ tới được bước 6, dù câu đề nghị quyết định của bạn hay tới đâu.</p>\n<p>Bạn thử hình dung với số minh họa sau: mười người nhắn hỏi, năm người trả lời tiếp, ba người chịu kể chuyện của họ, và cuối cùng một người mua. Giả sử bạn chỉ sửa bước 2, để thay vì năm thì có bảy người trả lời tiếp. Các bước sau giữ nguyên cách làm, nhưng giờ có nhiều người đi vào hơn, nên cuối đường cũng có thêm người mua. Vì các bước nối với nhau như vậy, nâng được một bước là cả kết quả nhích lên theo.</p>\n<h3>3. Đo trước, sửa sau</h3>\n<p>Phần lớn chúng ta đã có sẵn một câu trả lời trong đầu: \"khách của mình chê giá\", hoặc \"mình chốt yếu\". Nhưng câu đó thường đến từ cuộc trao đổi mình nhớ rõ nhất, chứ chưa đến từ việc đếm. Khi đếm lại mười người gần nhất, nhiều người mới thấy khách rơi nhiều nhất ở một bước rất sớm, trước cả lúc kịp nói tới giá.</p>\n<p>Vì vậy hôm nay bạn ghi số trước, rồi mới ghi lý do. Trong bảng, lý do khách rơi là điều bạn <strong>đoán</strong>, nên bạn ghi chữ \"đoán\" ở đầu câu. Điều khách đã nói hoặc đã làm thì ghi thẳng, vì đó là điều <strong>thấy được</strong>. Hai thứ này cần nằm riêng, để những ngày sau bạn biết câu nào cần hỏi lại khách cho chắc.</p>\n<p>Không nhớ chính xác số thì bạn cứ ước, và ghi chữ \"ước\" bên cạnh. Một con số ước có ghi rõ vẫn hơn một ô để trống, vì tới Ngày 7 bạn sẽ đếm lại bằng số thật để so sánh.</p>\n<h2>Ô số đo ở từng dòng đếm gì</h2>\n<p>Từ dòng 2 tới dòng 6, mỗi dòng đếm trên những người đã qua dòng ngay trước, nên con số chỉ giữ nguyên hoặc giảm dần. Bước mất nhiều khách nhất là bước có số người rơi lớn nhất so với dòng trước.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dòng</th><th>Ô số đo ghi gì</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Mười khách này đến với bạn trong bao lâu, từ những nguồn nào. Ví dụ: 10 khách trong 6 tuần, 7 từ trang Facebook, 3 người quen giới thiệu</td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Trong mười người, bao nhiêu người trả lời tiếp và đúng là nhóm khách bạn phục vụ</td></tr>\n<tr><td>3. Khai thác sâu</td><td>Bao nhiêu người đã kể cho bạn họ muốn đạt điều gì và đang vướng ở đâu</td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Bao nhiêu người nhận được đề xuất từ bạn</td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Sau khi nghe đề xuất, bao nhiêu người vẫn trao đổi tiếp, kể cả người nói ra băn khoăn</td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Bao nhiêu người được bạn đề nghị quyết định, và bao nhiêu người mua</td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Trong những người đã mua, bao nhiêu người được bạn hỏi thăm sau khi dùng, và bao nhiêu người mua lại hoặc giới thiệu người khác. Khách mới mua chưa lâu thì bạn lấy số khách cũ và ghi \"ước\"</td></tr>\n</tbody></table></div>\n<div class=\"ngat\"></div>\n<h2>Mẫu. Bảng quy trình bán hàng bảy bước, bản 1</h2>\n<div class=\"bang\"><table>\n<thead><tr><th>Mục</th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td>Sản phẩm hoặc dịch vụ</td><td class=\"trong\"></td></tr>\n<tr><td>Nhóm khách</td><td class=\"trong\"></td></tr>\n<tr><td>Bản số</td><td>1</td></tr>\n<tr><td>Ngày điền</td><td class=\"trong\"></td></tr>\n<tr><td>Mười khách tính từ ngày nào tới ngày nào</td><td class=\"trong\"></td></tr>\n</tbody></table></div>\n<div class=\"o-dien thap\">\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Ở bước này tôi làm gì, nói gì</th><th>Số đo: bao nhiêu khách qua được bước này</th><th>Khách rơi ở đâu, vì sao</th><th>Việc sửa trong tuần này</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>3. Khai thác sâu</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>4. Trình bày giải pháp</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>5. Xử lý từ chối</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td><td class=\"trong\"></td></tr>\n</tbody></table></div>\n</div>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td><strong>Bước mất nhiều khách nhất</strong>, và mất bao nhiêu người</td><td class=\"trong\"></td></tr>\n<tr><td><strong>Bạn đoán vì sao</strong></td><td class=\"trong\"></td></tr>\n</tbody></table></div>\n<p>Bảng này bạn giữ suốt bảy ngày. Bản PDF riêng của mẫu nằm trong email Welcome Kit, bạn có thể in ra hoặc chép sang bảng tính tùy ý.</p>\n<div class=\"ngat\"></div>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Anh Minh có một xưởng thiết kế nội thất nhỏ, nhận thiết kế và thi công trọn căn hộ cho các gia đình vừa nhận nhà. Anh lấy mười người gần nhất đã nhắn hỏi trang Facebook của xưởng hoặc được người quen giới thiệu, trong sáu tuần.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Tôi làm gì, nói gì</th><th>Số đo</th><th>Khách rơi ở đâu, vì sao</th><th>Việc sửa</th></tr></thead>\n<tbody>\n<tr><td>1. Tìm kiếm khách</td><td>Đăng ảnh công trình đã làm lên trang Facebook, nhận khách người quen giới thiệu</td><td>10 khách trong 6 tuần: 7 từ trang Facebook, 3 người quen giới thiệu</td><td>Khách tới chậm, gần như chỉ từ một nguồn. Đoán: ảnh đẹp nhưng không nói rõ xưởng làm cho ai</td><td class=\"trong\"></td></tr>\n<tr><td>2. Tiếp cận và phân loại</td><td>Trả lời tin nhắn bằng bảng giá theo mét vuông</td><td>5 trên 10 trả lời tiếp và đúng nhóm khách</td><td>4 người im lặng sau khi nhận bảng giá, 1 người chỉ cần đóng tủ bếp. Đoán: khách thấy con số trước khi thấy vì sao nên chọn xưởng</td><td class=\"trong\"></td></tr>\n<tr><td>3. Khai thác sâu</td><td>Hẹn tới xem nhà, hỏi diện tích, số phòng, số tiền dự định</td><td>3 trên 5</td><td>2 người không nhận lời hẹn xem nhà. Đoán: tôi hẹn gặp mà chưa nói buổi gặp giúp gì cho họ</td><td class=\"trong\"></td></tr>\n<tr><td>4. Trình bày giải pháp</td><td>Gửi bản vẽ phối cảnh và báo giá trọn gói</td><td>3 trên 3</td><td>Không mất ai, nhưng ba bản vẽ gần giống nhau</td><td class=\"trong\"></td></tr>\n<tr><td>5. Xử lý từ chối</td><td>Khách nói giá cao thì giảm 5 phần trăm</td><td>2 trên 3</td><td>1 người không trả lời sau khi được giảm giá. Đoán: khách chưa thấy xưởng mình khác gì xưởng rẻ hơn</td><td class=\"trong\"></td></tr>\n<tr><td>6. Đề nghị khách quyết định</td><td>Gửi hợp đồng qua tin nhắn rồi chờ</td><td>Đề nghị 2, ký 1</td><td>1 người nói \"để bàn thêm với gia đình\". Tôi chưa hỏi từ đầu ai cùng quyết định</td><td class=\"trong\"></td></tr>\n<tr><td>7. Chăm sóc sau bán</td><td>Bàn giao xong thì nhắn cảm ơn</td><td>Ước: năm qua hỏi thăm lại 1 trên 8 khách cũ, 2 người giới thiệu thêm khách</td><td>Gần như không liên lạc lại sau bàn giao. Đoán: khách cũ quên xưởng, nên ít người giới thiệu</td><td class=\"trong\"></td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td><strong>Bước mất nhiều khách nhất</strong></td><td>Bước 2, mất 5 trên 10 người</td></tr>\n<tr><td><strong>Đoán vì sao</strong></td><td>Tôi gửi bảng giá ngay tin nhắn đầu, khách chưa kịp kể nhà mình thế nào đã phải so sánh giá</td></tr>\n</tbody></table></div>\n<p>Bạn để ý dòng 5: ở đây không ghi \"khách chê đắt\", vì khách chỉ im lặng. Câu \"khách chưa thấy khác biệt\" là điều anh Minh đoán, nên đứng sau chữ \"đoán\". Còn bước 2 được khoanh vì số người rơi lớn nhất, dù trước khi đếm anh Minh vẫn nghĩ mình yếu nhất ở lúc đưa hợp đồng.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Điền theo cách bạn muốn làm.</strong> Bảng bản 1 là bức ảnh chụp tình trạng hôm nay, kể cả khi chưa đẹp, vì tới Ngày 7 bạn cần nó để so sánh.</li>\n<li><strong>Ghi điều đang đoán như thể đã thấy.</strong> Ví dụ ghi \"khách chê giá\" trong khi khách chỉ im lặng. Lý do khách rơi luôn bắt đầu bằng chữ \"đoán\", trừ khi khách đã nói thẳng ra.</li>\n<li><strong>Để trống ô số đo vì không nhớ chính xác.</strong> Bạn ghi số ước và chữ \"ước\", đừng bỏ trống.</li>\n<li><strong>Đếm mỗi dòng trên một nhóm người khác nhau.</strong> Dòng sau chỉ đếm những người đã qua dòng trước, nên từ dòng 2 tới dòng 6 con số không bao giờ tăng lên.</li>\n<li><strong>Khoanh bước mình thấy khó chịu nhất thay vì bước có số rơi lớn nhất.</strong> Bạn khoanh theo số, rồi mới so với điều mình vẫn nghĩ.</li>\n<li><strong>Đưa thông tin thật của khách vào bài.</strong> Bạn không ghi tên, số điện thoại hay ảnh chụp tin nhắn của khách. Cần nhắc tới ai thì gọi là \"khách A\", \"khách B\".</li>\n</ul>\n<div class=\"ngat\"></div>",
"2": "<aside class=\"goi\">Sau hôm nay, bạn có hai điều trong tay: một trang chân dung về nhóm khách bạn chọn tư vấn trong cả thử thách, và một điều cụ thể cần hỏi lại khách thật, để biết chỗ nào trong trang đó bạn mới chỉ đoán.</aside>\n<p>Hôm qua bạn nhìn lại cách bạn đang tư vấn, còn hôm nay bạn quay sang người sẽ ngồi nghe bạn tư vấn: họ là ai, họ vướng chuyện gì, và vì sao đúng lúc này họ đi tìm bạn. Từ Ngày 3, mỗi câu bạn viết và mỗi câu bạn hỏi sẽ nhắm vào đúng người này.</p>\n<p>Hôm nay chưa phải lúc làm quảng cáo hay khảo sát thị trường. Bạn chỉ cần một trang rõ ràng về một nhóm khách.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Nhóm khách phải cụ thể, không phải \"mọi người\"</h3>\n<p>Nói \"ai cũng cần chăm sóc da\" thì nghe đúng, nhưng không giúp bạn viết nổi một câu mở đầu, vì một câu mở đầu hay chỉ nói được với một kiểu người. Nên hôm nay bạn chọn một nhóm khách trước, các nhóm khác để sau.</p>\n<p>Nhóm khách cụ thể là nhóm bạn hình dung được ngay: họ đang làm gì, đang sống ra sao, đang dùng cách nào để giải quyết chuyện của họ, và vì sao sản phẩm của bạn hợp với họ.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Chưa đủ cụ thể</th><th>Cụ thể hơn</th></tr></thead>\n<tbody>\n<tr><td>Phụ nữ từ 25 đến 45 tuổi</td><td>Phụ nữ đi làm văn phòng, đã tự thử mỹ phẩm một thời gian mà vết thâm sau mụn chưa mờ</td></tr>\n<tr><td>Ai quan tâm đến làn da</td><td>Người đang phải trang điểm dày mỗi sáng để che da xỉn màu</td></tr>\n</tbody></table></div>\n<p>Cột bên trái chỉ cho bạn biết khách là ai trên giấy tờ. Cột bên phải cho bạn biết khách đang sống với chuyện gì mỗi ngày, và chỉ cột này mới giúp bạn nói chuyện đúng.</p>\n<h3>2. Gọi đúng vấn đề và kết quả khách muốn</h3>\n<p>Tuổi, chức danh, ngành nghề là thông tin giúp bạn tìm ra khách, nhưng chưa nói gì về chuyện khách cần. Hai người cùng 35 tuổi, cùng làm kế toán, vẫn có thể đến spa vì hai lý do hoàn toàn khác nhau.</p>\n<p>Bạn ghi hai điều sau bằng lời của khách, càng gần câu khách nói thật càng tốt:</p>\n<ul>\n<li><strong>Vấn đề:</strong> khách đang vướng chuyện gì, nhìn vào đâu thì biết.</li>\n<li><strong>Kết quả khách muốn:</strong> khách muốn điều gì khác đi, nói bằng đời sống của họ chứ không bằng tên sản phẩm của bạn.</li>\n</ul>\n<div class=\"bang\"><table>\n<thead><tr><th>Hay ghi</th><th>Nên ghi</th></tr></thead>\n<tbody>\n<tr><td>Khách cần liệu trình mười buổi</td><td>Khách còn vết thâm, sáng nào cũng phải che dày mới dám ra khỏi nhà</td></tr>\n<tr><td>Khách muốn mua gói trị thâm</td><td>Khách muốn da đều màu để đỡ phải che, và đỡ mất thời gian mỗi sáng</td></tr>\n</tbody></table></div>\n<p>\"Liệu trình mười buổi\" là sản phẩm bạn bán, còn khách không đi tìm một liệu trình, khách đi tìm cách để hết phải che vết thâm. Chỉ khi ghi đúng điều khách muốn thì tới Ngày 5, lúc trình bày giải pháp, bạn mới nối được liệu trình với đúng điều đó.</p>\n<h3>3. Nhận ra lúc nhu cầu xuất hiện, và ghi thật thà phần nào đang đoán</h3>\n<p>Khách ít khi tìm đến bạn vào một ngày bình thường. Thường có một chuyện vừa xảy ra, chẳng hạn một dịp sắp tới, lần soi gương thấy da khác trước, hoặc sản phẩm dùng mãi mà không ăn thua. Biết chuyện đó là gì thì bạn biết nên mở đầu buổi tư vấn bằng câu nào.</p>\n<p>Phần lớn bạn sẽ chưa biết chắc. Không sao cả. Trong mỗi ô của trang chân dung, bạn đánh dấu một trong hai cách:</p>\n<ul>\n<li><strong>[Đã nghe từ khách]</strong>: khách từng nói, hoặc từng làm đúng như vậy.</li>\n<li><strong>[Đang đoán]</strong>: bạn thấy hợp lý nhưng chưa hề hỏi khách.</li>\n</ul>\n<p>Đoán thì không sai, chỉ sai khi bạn ghi điều đang đoán như thể đã biết rồi dựa vào đó để soạn cả cách tư vấn. Mỗi ô đang đoán là một câu hỏi bạn sẽ mang đi hỏi khách thật.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Tình huống dưới đây là giả định, để bạn xem cách ghi chứ không phải khách thật. Bạn đừng chép lại, hãy điền theo doanh nghiệp của chính bạn.</aside>\n<div class=\"vi-du\">\n<p>Bạn có một spa chăm sóc da nhỏ, mở tới chín giờ tối, bán các liệu trình theo từng buổi. Khách nhắn hỏi \"bên em có trị thâm không\", \"giá sao em\". Bạn trả lời mọi khách bằng cùng một bảng giá liệu trình. Hôm nay bạn chọn nhóm khách cho cả thử thách.</p>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td>Sản phẩm hoặc dịch vụ</td><td>Liệu trình chăm sóc da theo buổi, mở tới 21 giờ</td></tr>\n<tr><td>Nhóm khách bạn chọn</td><td>Phụ nữ đi làm văn phòng, ở gần khu spa, đã tự thử mỹ phẩm một thời gian mà vết thâm sau mụn chưa mờ</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<thead><tr><th>Ba khối</th><th>Bạn điền</th><th>Đã nghe từ khách hay đang đoán</th></tr></thead>\n<tbody>\n<tr><td>Khối 1. Họ là ai, vì sao hợp</td><td>Phụ nữ đi làm văn phòng, đã tự thử mỹ phẩm bán online. Hợp vì spa mở tới 21 giờ, họ ghé được sau giờ làm, và liệu trình bán theo từng buổi nên không phải trả một lần cả khoản lớn</td><td>[Đã nghe từ khách] đi làm văn phòng, đã tự thử mỹ phẩm. [Đang đoán] ở gần khu spa</td></tr>\n<tr><td>Khối 2. Vướng ở đâu, muốn khác đi thế nào</td><td>Còn vết thâm, da xỉn, sáng nào cũng phải che dày mới dám ra khỏi nhà. Muốn da đều màu hơn để đỡ phải che, và không tốn nhiều thời gian chăm da mỗi ngày</td><td>[Đã nghe từ khách] \"sáng nào cũng phải che\", \"da xỉn\". [Đang đoán] không muốn tốn thời gian</td></tr>\n<tr><td>Khối 3. Chuyện gì khiến họ đi tìm</td><td>Sắp tới một dịp phải gặp nhiều người hoặc chụp ảnh: đám cưới bạn thân, họp lớp. Hoặc nhìn lại ảnh cũ rồi thấy da khác hồi trước</td><td>[Đã nghe từ khách] một khách nhắc đám cưới bạn sau hai tháng. [Đang đoán] các dịp còn lại</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td>Ba khối có khớp nhau không</td><td>Khớp. Người đi làm văn phòng, phải gặp nhiều người, sắp có dịp cần da ổn</td></tr>\n<tr><td>Một điều cần hỏi lại khách thật</td><td>\"Chị bắt đầu tìm nơi chăm da vào lúc nào, và hôm đó có chuyện gì?\"</td></tr>\n</tbody></table></div>\n<p><strong>Điều đổi trong cách tư vấn.</strong> Trước đây bạn mở bằng bảng giá liệu trình. Từ giờ bạn sẽ mở bằng cách hỏi khách có dịp nào sắp tới không, vì dịp đó cho biết khách cần da ổn trong bao lâu.</p>\n<p>Bạn để ý Khối 2: khách không nói \"tôi cần liệu trình mười buổi\" mà nói \"sáng nào cũng phải che\", và câu thứ hai mới là câu bạn ghi.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Chọn nhóm quá rộng.</strong> \"Phụ nữ\", \"chủ doanh nghiệp\", \"ai cũng cần\". Bạn hỏi lại: nghĩ tới một người cụ thể trong nhóm đó, bạn có biết nói gì với họ không? Chưa thì thu hẹp thêm.</li>\n<li><strong>Mô tả khách bằng tuổi, chức danh, ngành rồi dừng.</strong> Ba điều đó không cho bạn biết khách đang vướng chuyện gì, nên bạn viết thêm vấn đề họ đang sống cùng.</li>\n<li><strong>Ghi sản phẩm của bạn thay cho điều khách muốn.</strong> \"Khách muốn gói mười buổi\" là lời của người bán. Bạn hỏi lại: nếu không có sản phẩm của bạn, khách muốn đời sống của họ khác đi thế nào?</li>\n<li><strong>Ghi điều đang đoán như điều đã biết.</strong> Bạn đánh dấu thật ở từng ô, và ô nào chưa hỏi khách thì để là đang đoán.</li>\n<li><strong>Đổi sản phẩm so với Ngày 1.</strong> Bảy ngày phải làm trên cùng một sản phẩm, nếu không các phần sẽ không ghép lại được ở Ngày 7.</li>\n<li><strong>Chọn hai ba nhóm cùng lúc.</strong> Bạn chỉ chọn một, các nhóm khác ghi lại để làm sau thử thách.</li>\n<li><strong>Đưa thông tin thật của khách vào bài.</strong> Bạn không ghi tên, số điện thoại hay ảnh chụp tin nhắn của khách.</li>\n</ul>\n<div class=\"ngat\"></div>",
"3": "<aside class=\"goi\"><strong>Sau ngày hôm nay, bạn sẽ có hai thứ.</strong> Một phần mở đầu viết bằng lời của chính bạn, đủ ba phần, và một video ngắn bạn đóng vai chính phần mở đầu đó để tự nghe lại.</aside>\n<p>Hôm qua bạn đã làm rõ mình đang tư vấn cho ai. Hôm nay bạn dùng chính người đó để chuẩn bị vài phút đầu của buổi tư vấn, và vài phút này chưa bán gì cả, chỉ để khách thấy đủ an toàn mà nói thật.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Chuẩn bị trước buổi: biết gì, đang đoán gì</h3>\n<p>Khách không muốn mất mười lăm phút đầu để giải thích điều bạn có thể tìm hiểu trước, nên chuẩn bị cũng là cách tôn trọng thời gian của họ. Bạn chỉ cần làm ba việc nhỏ:</p>\n<ul>\n<li>Đọc lại chân dung khách ở Ngày 2, để nhớ vấn đề họ đang gặp và điều khiến họ bắt đầu đi tìm giải pháp.</li>\n<li>Tách điều đã nghe từ khách khỏi điều đang đoán. Khách điền phiếu đặt lịch và ghi \"hỏi niềng răng\" là điều đã nghe, còn \"chắc chị ấy sợ đau\" là điều đang đoán. Đoán không có gì sai, chỉ cần bạn biết đó là đoán.</li>\n<li>Đặt một ý định cho buổi, về cách làm chứ không về kết quả. \"Hôm nay mình sẽ nói rõ là không ép khách\" là một ý định tốt, còn \"Hôm nay phải chốt được khách này\" thì không, vì nó kéo bạn về phía người bán.</li>\n</ul>\n<p>Điều đoán chỉ là la bàn tạm: khách nói khác đi thì bạn bỏ nó và nghe theo khách.</p>\n<h3>2. Vài phút đầu là để khách thấy an toàn</h3>\n<p>Vài phút đầu không quyết định chuyện khách có mua hay không, nó quyết định khách có mở lòng hay không. Khách không mở lòng thì cả buổi chỉ là vài câu qua loa, rồi kết thúc bằng câu \"để tôi suy nghĩ thêm\".</p>\n<p>Trong những phút này, khách thường tự hỏi ba điều dù không nói ra: người này có đang cố bán cho mình không, mình có cần phòng thủ không, và nói thật với người này có đáng không. Khách cũng không bước vào cùng một trạng thái, có ba trạng thái hay gặp:</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Khách đang</th><th>Họ thường làm gì</th><th>Bạn điều chỉnh thế nào</th></tr></thead>\n<tbody>\n<tr><td><strong>Cảnh giác</strong>, vì từng bị tư vấn sai hoặc bị ép</td><td>Nghe nhưng không nói hết</td><td>Nói rõ mục đích, nói chậm, chưa vội hỏi chuyện nhạy cảm</td></tr>\n<tr><td><strong>Mơ hồ</strong>, thấy chưa ổn nhưng chưa gọi tên được</td><td>Dễ bị ngợp nếu bạn nói giải pháp quá nhanh, dễ thu mình lại nếu bạn hỏi quá sâu</td><td>Đi chậm, hỏi nhẹ, để khách tự gọi tên điều mình thấy</td></tr>\n<tr><td><strong>Kỳ vọng nhưng dè chừng</strong>, sợ lại thất vọng như lần trước</td><td>Muốn một hướng đi tốt hơn nhưng chưa tin</td><td>Không hứa lớn. Cho khách thấy buổi nói chuyện có ích kể cả khi họ chưa mua</td></tr>\n</tbody></table></div>\n<p>Hiểu ba trạng thái này giúp bạn không vội kết luận về khách: khách ít nói chưa chắc là khách khó, có thể họ chỉ đang cảnh giác.</p>\n<h3>3. Mở cuộc bằng ba phần ngắn</h3>\n<p>Phần mở đầu chuẩn gồm ba phần, nói ngắn, nói chậm và nói rõ:</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Phần</th><th>Bạn làm gì</th><th>Để khách cảm thấy</th></tr></thead>\n<tbody>\n<tr><td>1. Nói lý do và mục tiêu của buổi</td><td>Cho khách biết buổi này để làm gì: để bạn hiểu mong muốn và hoàn cảnh của họ, rồi cùng xem bên bạn có hợp để giúp hay không</td><td>Cuộc nói chuyện có hướng rõ ràng, không mơ hồ</td></tr>\n<tr><td>2. Cam kết không ép, trả quyền quyết định cho khách</td><td>Nói rõ khách không cần quyết định hôm nay, nếu bên bạn chưa hợp thì bạn nói thẳng, và câu nào khách chưa muốn trả lời thì cứ để lại</td><td>Mình là người quyết định</td></tr>\n<tr><td>3. Xin phép hỏi sâu</td><td>Hỏi khách có đồng ý để bạn hỏi vài câu về hoàn cảnh của họ không</td><td>Mình được tôn trọng, nên an toàn để nói thật</td></tr>\n</tbody></table></div>\n<p>Phần 2 quan trọng nhất vì nó làm khách bớt phòng thủ, nên hãy nói phần này thật chậm và thật rõ.</p>\n<p>Xin phép không làm bạn thấp đi, ngược lại nó cho khách thấy bạn chuyên nghiệp, và khi khách gật đầu là họ đã nhận cuộc trò chuyện này. Ba phần chỉ là khung, câu chữ phải là của bạn, vì đọc thuộc lòng thì khách nghe ra ngay.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Đây là tình huống giả định để bạn xem cách ghi. Đừng chép lại, hãy điền theo doanh nghiệp của bạn.</aside>\n<div class=\"vi-du\">\n<p>Bạn làm tư vấn viên ở một phòng khám nha khoa nhỏ. Khách là một chị nhân viên văn phòng, đặt lịch qua trang của phòng khám để hỏi chuyện niềng răng và hẹn vào giờ nghỉ trưa, rồi sẽ gặp bạn ở quầy tư vấn trước khi gặp bác sĩ.</p>\n<p><strong>Mẫu 1, Phần A, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Điều biết hoặc đoán</th><th>Đã nghe hay đang đoán</th><th>Giúp mở đầu thế nào</th></tr></thead>\n<tbody>\n<tr><td>Chị đặt lịch hỏi chuyện niềng răng, hẹn giờ nghỉ trưa</td><td>Đã nghe từ khách</td><td>Nhắc đến việc chị tranh thủ giờ nghỉ trưa, rồi đi thẳng vào việc</td></tr>\n<tr><td>Chị có thể đã đi hỏi một nơi khác và ngại bị khuyên làm nhiều thứ</td><td>Đang đoán</td><td>Nói rõ là không ép, để chị bớt phòng thủ</td></tr>\n<tr><td>Chị lo thời gian điều trị kéo dài</td><td>Đang đoán</td><td>Chưa nhắc tới, để hỏi chị ở phần sau</td></tr>\n</tbody></table></div>\n<div class=\"bang\"><table>\n<tbody>\n<tr><td>Một điều cần hỏi lại khách thật</td><td>Chị đã đi hỏi nơi nào khác chưa, và lần đó chị thấy thế nào</td></tr>\n<tr><td>Ý định cho buổi này</td><td>Nói rõ là không ép chị quyết định hôm nay, và nói thật chậm</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 1, Phần B, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Phần</th><th>Câu bạn sẽ nói</th></tr></thead>\n<tbody>\n<tr><td>Chào và kết nối</td><td>\"Em chào chị. Em biết chị tranh thủ giờ nghỉ trưa để ghé, nên em xin đi thẳng vào việc ạ.\"</td></tr>\n<tr><td>1. Lý do và mục tiêu</td><td>\"Hôm nay em xin phép hỏi chị vài điều về mong muốn và tình hình của chị, rồi mình cùng xem phòng khám bên em có hợp để giúp chị không.\"</td></tr>\n<tr><td>2. Không ép, trả quyền</td><td>\"Em nói rõ để chị yên tâm: chị không cần quyết định gì trong hôm nay. Nếu bên em chưa hợp với điều chị cần, em sẽ nói thẳng. Câu nào chị chưa muốn trả lời, chị cứ báo em một tiếng, mình để sang sau. Còn chuyện chuyên môn về răng thì bác sĩ sẽ khám và trao đổi trực tiếp với chị.\"</td></tr>\n<tr><td>3. Xin phép hỏi sâu</td><td>\"Nếu chị thấy ổn, em xin phép hỏi chị vài câu để hiểu rõ hơn tình hình của chị trước, được không ạ?\"</td></tr>\n</tbody></table></div>\n<div class=\"ngat\"></div>\n<p><strong>Mẫu 2, đã điền sau lần đọc đầu</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Dấu hiệu</th><th>Có / Chưa</th><th>Sẽ sửa thế nào</th></tr></thead>\n<tbody>\n<tr><td>Nói rõ mục tiêu của buổi ngay từ đầu</td><td>Có</td><td class=\"trong\"></td></tr>\n<tr><td>Nói rõ khách không phải quyết định hôm nay</td><td>Có</td><td class=\"trong\"></td></tr>\n<tr><td>Nói rõ khách có quyền dừng hoặc để lại câu chưa muốn trả lời</td><td>Có</td><td class=\"trong\"></td></tr>\n<tr><td>Xin phép trước khi hỏi sâu</td><td>Có</td><td class=\"trong\"></td></tr>\n<tr><td>Phần chào chỉ một hai câu</td><td>Chưa</td><td>Bản nháp đầu có thêm câu \"bên em có nhiều năm kinh nghiệm\". Bỏ câu đó, vì nghe như đang tự quảng cáo</td></tr>\n<tr><td>Chưa nhắc sản phẩm, giải pháp, giá</td><td>Có</td><td class=\"trong\"></td></tr>\n<tr><td>Nói chậm, rõ</td><td>Chưa</td><td>Phần hai đọc hơi nhanh, thêm chỗ ngắt sau \"không cần quyết định gì trong hôm nay\"</td></tr>\n<tr><td>Câu chữ là của tôi</td><td>Chưa</td><td>Câu \"Em xin phép được trao đổi\" nghe cứng. Đổi thành \"Em xin hỏi chị vài điều\"</td></tr>\n</tbody></table></div>\n<p><strong>Câu kết video, ví dụ</strong></p>\n<p>\"Tôi đã bỏ câu giới thiệu kinh nghiệm vì nghe như đang bán. Tôi cũng thêm chỗ ngắt ở câu cam kết không ép, và đổi vài chỗ nói cứng thành lời tôi hay nói.\"</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Giới thiệu bản thân hoặc phòng khám quá dài.</strong> Khách cảm thấy đang bị bán nên phòng thủ hơn. Hãy rút còn một câu rồi chuyển sang khách: \"Phần giới thiệu em xin nói ngắn gọn. Điều em muốn trước hết là hiểu hoàn cảnh của chị.\"</li>\n<li><strong>Hỏi sâu quá sớm, khi khách chưa thấy an toàn.</strong> Nếu bạn hỏi ngay chuyện tiền bạc hay chuyện riêng khi khách còn dè chừng, khách sẽ khép lại và trả lời chung chung. Lúc đó hãy lùi lại một chút và nhắc lại quyền của khách: \"Câu này nếu chị chưa muốn trả lời thì mình để lại sau, không sao ạ.\"</li>\n<li><strong>Không nói rõ mục tiêu của buổi.</strong> Khách sẽ tự đoán, và thường là đoán mình đang bị bán. Hãy dừng lại làm rõ: \"Em xin nói lại cho chị yên tâm về mục tiêu buổi hôm nay.\"</li>\n<li><strong>Nói giải pháp quá sớm.</strong> Khi khách chưa thấy mình trong giải pháp đó, họ sẽ hoãn quyết định. Hãy quay lại câu hỏi mở: \"Trước khi nói hướng nào, em muốn hiểu rõ điều chị mong nhất lúc này.\"</li>\n<li><strong>Đọc thuộc lòng.</strong> Khách nghe ra ngay khi bạn đọc bài, nên chỉ cần nhớ ba phần rồi nói bằng lời của mình.</li>\n<li><strong>Hỏi dồn như phỏng vấn, hoặc nói liên tục.</strong> Khách sẽ trả lời ngắn và giữ lại điều quan trọng. Mở đầu xong thì bạn dừng lại để khách nói.</li>\n</ul>\n<div class=\"ngat\"></div>",
"4": "<aside class=\"goi\"><strong>Sau ngày hôm nay, bạn sẽ có hai thứ.</strong> Một bộ năm tới bảy câu hỏi bạn thực sự sẽ hỏi khách, xếp theo đúng thứ tự, và một câu tóm tắt để nói lại điều khách vừa chia sẻ, giữ đúng những từ khách đã dùng.</aside>\n<p>Ngày 3 kết thúc bằng câu xin phép khách cho bạn hỏi sâu hơn một chút, và hôm nay là những câu hỏi đó. Trên bản đồ năm chặng, đây là chặng Khai thác và chẩn đoán.</p>\n<p>Hôm nay chưa phải lúc giới thiệu sản phẩm. Nếu bạn muốn nói về giải pháp thì cứ ghi ý đó lại, Ngày 5 mới là lúc nói.</p>\n<p>Các ví dụ hôm nay lấy từ một công ty thiết kế và thi công nội thất, chỉ để minh họa. Bạn làm ngành khác thì thay bằng chuyện của bạn.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Hỏi khách muốn đạt điều gì trước, rồi mới hỏi điều gì đang cản</h3>\n<p>Nhiều người tư vấn vừa nghe khách nói là đã hỏi ngay \"anh chị đang vướng ở đâu?\". Câu đó có vẻ chủ động, nhưng khách phải trả lời khi bạn chưa biết điều họ đang hướng tới. Họ dễ có cảm giác đang bị tra hỏi, còn bạn thì chưa biết vướng mắc đó quan trọng với họ đến mức nào.</p>\n<p>Vì vậy thứ tự luôn là <strong>mong muốn trước, vướng mắc sau</strong>, không đảo.</p>\n<p>Ở bước hỏi mong muốn, bạn làm ba việc:</p>\n<ul>\n<li>Hỏi khách muốn đạt điều gì, và vì sao họ quan tâm đúng lúc này.</li>\n<li>Hỏi thang từ 1 tới 10 về mức quan trọng, rồi mời khách nói thêm vì sao họ chấm mức đó.</li>\n<li>Đi theo lời khách: họ nhắc chuyện nào thì hỏi tiếp chuyện đó, đừng bám cứng vào danh sách đã soạn.</li>\n</ul>\n<p>Con số khách chấm không phải để bạn đánh giá khách, điều đáng giá là lý do khách giải thích. Khách chấm cao mà nói được vì sao thì thường là họ đã rõ mình muốn gì, còn khách chấm thấp cũng là thông tin tốt, nên đừng vội nâng con số lên.</p>\n<p>Khi khách không muốn nói tiếp, bạn dừng lại. Quyền dừng thuộc về khách, và khi biết mình có quyền đó, họ thường sẵn lòng chia sẻ hơn.</p>\n<h3>2. Hỏi điều gì đang cản, rồi hỏi chuyện gì xảy ra nếu giữ nguyên</h3>\n<p>Khi mong muốn đã rõ, bạn hỏi điều gì đang khiến khách chưa đạt được và họ đã thử những cách nào. Câu trả lời cho biết họ đã làm gì, và còn thiếu gì.</p>\n<p>Khi khách đã gật đầu xác nhận điểm vướng, bạn hỏi thêm một câu: nếu mọi thứ giữ nguyên thì chuyện gì sẽ xảy ra. Hôm nay bạn chỉ hỏi về vài tháng tới, vì đó là chuyện gần và khách nhìn thấy được. Thế là đủ cho người mới.</p>\n<p>Có một nguyên tắc quan trọng: khách tự nói, bạn không nói thay. Bạn hỏi để họ nhìn thấy, không phải để dọa.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bạn nói thay, nghe như dọa</th><th>Để khách tự nói</th></tr></thead>\n<tbody>\n<tr><td>\"Để thế này lâu thì xuống cấp, chi phí còn tăng thêm nữa đấy.\"</td><td>\"Nếu tình trạng này tiếp tục trong vài tháng tới, anh chị nghĩ điều gì sẽ xảy ra ạ?\"</td></tr>\n<tr><td>\"Anh chị không làm sớm là lỡ việc đấy.\"</td><td>\"Trong ngắn hạn, chuyện này đang ảnh hưởng tới anh chị ở điểm nào nhiều nhất ạ?\"</td></tr>\n</tbody></table></div>\n<p>Khi khách nói ra hệ quả, bạn nhắc lại đúng điều họ vừa nói và nối về điều họ muốn đạt ở bước 1. Khách xác nhận xong thì chuyển bước, vì hỏi thêm chỉ làm buổi trao đổi nặng nề.</p>\n<h3>3. Tóm tắt bằng lời của khách, rồi hỏi mình hiểu đã đúng chưa</h3>\n<p>Cuối chặng này, bạn nói lại cho khách nghe ba điều: họ muốn gì, họ đang vướng ở đâu, và nếu để nguyên thì chuyện gì xảy ra. Rồi bạn hỏi: \"Em hiểu vậy đã đúng chưa ạ?\"</p>\n<p>Khách nghe lại mình nói và thấy mình được hiểu, còn bạn thì biết chắc mình hiểu đúng trước khi đề xuất. Điều quan trọng là nói lại bằng đúng những từ khách đã dùng, đừng đổi sang cách nói quen miệng của người bán.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Cách người bán hay nói</th><th>Cách khách tự nói</th></tr></thead>\n<tbody>\n<tr><td>\"Anh chị cần một giải pháp thi công trọn gói.\"</td><td>\"Anh chị muốn nhà xong trước dịp bố mẹ lên cuối năm.\"</td></tr>\n<tr><td>\"Anh chị đang gặp vấn đề về tối ưu ngân sách.\"</td><td>\"Anh chị chưa biết ngân sách có đủ không.\"</td></tr>\n</tbody></table></div>\n<p>Khách không đi tìm \"giải pháp trọn gói\", họ đi tìm một căn nhà kịp ngày bố mẹ lên. Bạn nói lại đúng như cách họ nói thì họ gật đầu ngay. Còn nói theo cách của bạn thì họ phải tự hiểu lại, và có khi hiểu sai.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Đây là tình huống giả định để bạn xem cách ghi. Đừng chép lại, hãy làm theo nhóm khách và ngành của bạn.</aside>\n<div class=\"vi-du\">\n<p>Bạn làm ở một công ty thiết kế và thi công nội thất. Khách A, một cặp vợ chồng, nhắn hỏi báo giá thi công trọn gói cho căn hộ vừa nhận, và thay vì gửi báo giá ngay, bạn hỏi lần lượt như sau.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Bạn hỏi</th><th>Khách nói gì, ghi đúng lời khách</th></tr></thead>\n<tbody>\n<tr><td>Mong muốn</td><td>\"Em muốn hiểu rõ hơn một chút: điều gì khiến anh chị làm nhà vào lúc này ạ?\"</td><td>\"Cuối năm bố mẹ anh lên ở cùng. Anh muốn nhà xong trước đó.\"</td></tr>\n<tr><td>Mong muốn</td><td>\"Nếu mọi thứ diễn ra đúng như anh chị mong, nhà xong thì anh chị muốn thấy gì ạ?\"</td><td>\"Bố mẹ có phòng riêng yên tĩnh. Con có góc học riêng.\"</td></tr>\n<tr><td>Mong muốn</td><td>\"Nếu chấm từ 1 tới 10, chuyện này quan trọng với anh chị tới đâu? Anh chị nói thêm giúp em vì sao chấm mức đó ạ.\"</td><td>\"Chín. Vì bố mẹ lên là đã báo từ trước, không dời được.\"</td></tr>\n<tr><td>Vướng mắc</td><td>\"Với mục tiêu đó, hiện tại điều gì đang khiến anh chị chưa làm được như mong muốn ạ?\"</td><td>\"Có người quen vẽ giúp rồi, mà bản vẽ chưa có phòng cho bố mẹ. Vợ chồng anh cũng chưa biết ngân sách có đủ không.\"</td></tr>\n<tr><td>Xác nhận</td><td>\"Em tóm lại điểm đang cản: bản vẽ chưa có phòng cho bố mẹ, và anh chị chưa rõ ngân sách. Em hiểu vậy đã đúng chưa ạ?\"</td><td>\"Đúng rồi.\"</td></tr>\n<tr><td>Nếu giữ nguyên</td><td>\"Nếu tình trạng này tiếp tục trong vài tháng tới, anh chị nghĩ điều gì sẽ xảy ra ạ?\"</td><td>\"Thì cuối năm nhà chưa xong. Bố mẹ phải ở nhờ họ hàng. Tụi anh cũng phải đóng thêm mấy tháng tiền thuê nhà cũ.\"</td></tr>\n<tr><td>Nếu giữ nguyên</td><td>\"Trong ngắn hạn, chuyện đó ảnh hưởng tới anh chị ở điểm nào nhiều nhất ạ?\"</td><td>\"Chuyện bố mẹ. Anh không muốn bố mẹ lên mà phải ở nhờ.\"</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 3, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th></th><th>Giữ đúng lời khách</th></tr></thead>\n<tbody>\n<tr><td>Khách muốn đạt điều gì</td><td>Nhà xong trước dịp bố mẹ lên cuối năm, có phòng riêng yên tĩnh cho bố mẹ và góc học cho con</td></tr>\n<tr><td>Khách đang vướng ở đâu</td><td>Bản vẽ chưa có phòng cho bố mẹ, chưa biết ngân sách có đủ không</td></tr>\n<tr><td>Nếu để vậy thì chuyện gì xảy ra</td><td>Nhà không kịp, bố mẹ phải ở nhờ họ hàng, vợ chồng đóng thêm tiền thuê nhà cũ</td></tr>\n</tbody></table></div>\n<p>\"Để em xem em hiểu đúng chưa: anh chị muốn nhà xong trước dịp bố mẹ lên cuối năm, có phòng riêng yên tĩnh cho bố mẹ và góc học cho con. Hiện anh chị đang vướng ở chỗ bản vẽ chưa có phòng cho bố mẹ, và chưa rõ ngân sách có đủ không. Nếu để vậy thì nhà không kịp, bố mẹ phải ở nhờ họ hàng, và anh chị còn đóng thêm tiền thuê nhà cũ. Em hiểu vậy có đúng không ạ?\"</p>\n<p>Bạn để ý: mong muốn được hỏi trước vướng mắc, chuyện \"bố mẹ phải ở nhờ\" do khách tự nói chứ người tư vấn không nói thay, và câu tóm tắt giữ đúng lời khách nói.</p>\n</div>\n<div class=\"ngat\"></div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Hỏi vướng mắc trước khi hỏi mong muốn.</strong> Khách thấy mình bị tra hỏi, còn bạn chưa biết vướng mắc đó quan trọng tới đâu. Hãy đổi lại thứ tự.</li>\n<li><strong>Biến câu hỏi về hệ quả thành lời dọa.</strong> Bạn nói \"để vậy lâu thì khổ lắm\" thay vì để khách tự nói. Chỉ nhắc lại đúng điều khách vừa chia sẻ.</li>\n<li><strong>Hỏi quá sâu.</strong> Khách đã gật đầu xác nhận mà bạn vẫn hỏi thêm. Khi khách xác nhận, hãy chuyển bước.</li>\n<li><strong>Nói hệ quả chung chung.</strong> Hệ quả chỉ có sức nặng khi chạm đúng điều khách muốn đạt ở bước 1.</li>\n<li><strong>Vội đưa giải pháp.</strong> Bạn vừa nghe ra vấn đề đã giới thiệu gói, trong khi khách chưa kịp thấy mình được hiểu.</li>\n<li><strong>Tóm tắt theo cách nói của bạn.</strong> \"Anh chị cần giải pháp tối ưu\" là cách nói của người bán, khách không nói vậy. Hãy dùng đúng những từ khách đã nói.</li>\n<li><strong>Hỏi như đang trách khách.</strong> Câu \"Vì sao anh chị chưa làm?\" khiến khách khép lại ngay. Hãy hỏi: \"Điều gì đang khiến anh chị chưa làm được như mong muốn ạ?\"</li>\n</ul>",
"5": "<aside class=\"goi\"><strong>Sau ngày hôm nay, bạn sẽ có hai thứ.</strong> Một đoạn đề xuất ngắn, mở bằng chính điều khách đã nói và nói rõ vì sao hợp, hợp tới đâu. Cùng một lần xem lại từng lời hứa, để không câu nào vượt quá những gì bạn chứng minh được.</aside>\n<p>Hôm qua bạn đã hỏi và tóm tắt lại điều khách cần, nên hôm nay là lúc bạn trả lời điều đó. Nhưng chưa vội kể về sản phẩm. Trước hết bạn kiểm tra xem hướng đi này có thật sự hợp với khách không, rồi mới trình bày, ngắn gọn và đúng chỗ.</p>\n<h2>Hôm nay nằm ở đâu</h2>\n<p>Bản đồ năm chặng của thử thách: Chuẩn bị và hiểu khách (Ngày 2), Mở đầu (Ngày 3), Khai thác và chẩn đoán (Ngày 4), <strong>Đề xuất (Ngày 5, hôm nay)</strong>, Giúp khách quyết định và theo sát (Ngày 6).</p>\n<p>Hôm nay bạn làm tiếp trên đúng sản phẩm và đúng nhóm khách đã chọn từ Ngày 1 và Ngày 2, còn đoạn đề xuất mở bằng câu tóm tắt bạn viết ở Ngày 4. Nếu chưa có câu đó, hãy quay lại làm Ngày 4 trước.</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Kiểm tra độ phù hợp trước khi trình bày</h3>\n<p>Độ phù hợp không có nghĩa là sản phẩm tốt mà là cách làm bạn sắp đề xuất hợp với con người, hoàn cảnh và mục tiêu của khách vào lúc này. Sản phẩm rất tốt vẫn có thể chưa hợp với một khách cụ thể.</p>\n<p>Bạn cần ba điều cùng đúng:</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Hợp ở đâu</th><th>Bạn tự hỏi</th><th>Một câu có thể hỏi khách</th></tr></thead>\n<tbody>\n<tr><td>Hợp với điều khách muốn đạt</td><td>Cách này có đưa khách tới gần điều họ đã nói không, hay chỉ giải quyết phần ngọn</td><td>\"Nhìn vào điều anh muốn đạt, đi theo hướng này có giúp anh tới gần hơn không ạ?\"</td></tr>\n<tr><td>Hợp với chỗ đang vướng</td><td>Cách này có đi thẳng vào chỗ khách đang kẹt không</td><td>\"Với những khó khăn anh vừa kể, anh thấy hướng này có đúng vào chỗ đang làm anh vướng không ạ?\"</td></tr>\n<tr><td>Hợp với hoàn cảnh và khả năng hiện tại</td><td>Khách có đủ người, thời gian, tiền bạc và mức sẵn sàng để làm theo không</td><td>\"Lúc này anh có đủ người và thời gian để bắt đầu theo hướng này không ạ?\"</td></tr>\n</tbody></table></div>\n<p>Mỗi lần bạn chỉ hỏi một câu rồi nghe, vì khách tự nói là hợp thì mới là hợp, bạn không khẳng định thay họ.</p>\n<p>Khi khách trả lời dứt khoát, kể bằng chuyện của chính họ và không còn hỏi kiểu phòng thủ, nghĩa là độ phù hợp đã rõ. <strong>Còn một trong ba điều chưa rõ thì chưa trình bày</strong>, hãy hỏi thêm. Có khi hỏi thêm xong bạn nhận ra chưa nên đề xuất ngay, và nói thật điều đó cũng là cách giữ lòng tin.</p>\n<h3>2. Trình bày theo bốn phần, chưa vội nói tên sản phẩm</h3>\n<p>Lỗi hay gặp nhất ở chặng này là biến phần đề xuất thành buổi giới thiệu sản phẩm. Khách đang cởi mở bỗng thấy mình bị bán, và quay lại thế phòng thủ. Vì vậy bạn đi theo bốn phần, và hai phần đầu chưa nhắc tên sản phẩm.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Phần</th><th>Bạn làm gì</th><th>Dạng câu nói</th></tr></thead>\n<tbody>\n<tr><td>1. Nhắc lại điều khách đã nói</td><td>Đưa lại điều khách muốn đạt và chỗ họ đang vướng, đúng bằng lời của khách</td><td>\"Từ những gì anh kể, anh đang muốn …, nhưng đang bị kẹt ở …\"</td></tr>\n<tr><td>2. Nêu hướng tiếp cận</td><td>Nói cách làm nói chung, chưa nói tên sản phẩm hay tính năng</td><td>\"Với trường hợp của anh, em thấy nên bắt đầu từ …, thay vì …\"</td></tr>\n<tr><td>3. Giải thích vì sao hợp</td><td>Nối hướng đó với chỗ vướng và điều khách coi trọng. Nói luôn giới hạn của nó và bằng chứng bạn được phép dùng</td><td>\"Hướng này đi thẳng vào chỗ …, mà vẫn giữ điều anh cần là … Có một giới hạn em nói trước: …\"</td></tr>\n<tr><td>4. Kiểm tra lại và xin phép nói chi tiết</td><td>Hỏi khách thấy hướng này giải quyết được tới đâu. Khách thấy hợp thì mới nói cụ thể</td><td>\"Anh thấy hướng này giải quyết được chuyện của anh tới đâu ạ? Nếu anh thấy hợp, em xin phép nói cụ thể hơn.\"</td></tr>\n</tbody></table></div>\n<p>Tên sản phẩm, tính năng và cách bắt đầu chỉ xuất hiện sau phần 4, khi khách đã đồng ý nghe. Hôm nay bạn luyện bốn phần này, chưa luyện phần nói chi tiết.</p>\n<p>Khách nào cũng có thể ngắt lời giữa chừng, lúc đó bạn cứ dừng lại nghe rồi quay về chỗ đang nói.</p>\n<p>Trong cả buổi tư vấn, phần đề xuất không nên chiếm hơn khoảng một phần ba thời gian. Ngày 7 chúng ta sẽ chia thời gian cho cả năm chặng.</p>\n<p><strong>Khi nào chuyển sang nói chi tiết.</strong> Có năm dấu hiệu cho thấy khách sẵn sàng nghe, và từ ba dấu hiệu trở lên là bạn có thể chuyển:</p>\n<ul>\n<li>Khách tự hỏi \"làm thế nào\", \"bắt đầu từ đâu\".</li>\n<li>Khách thôi tranh luận và chuyển sang hỏi cách vận hành.</li>\n<li>Khách tự nhắc lại mục tiêu hay chỗ đang vướng bằng lời của mình.</li>\n<li>Khách nghe tập trung và trả lời kỹ, có suy nghĩ.</li>\n<li>Hỏi khách sẵn sàng tới mức nào thì khách trả lời dứt khoát.</li>\n</ul>\n<h3>3. Chỉ nói điều bạn chứng minh được, và nói rõ giới hạn</h3>\n<p>Đây là chỗ phần đề xuất dễ trượt nhất, vì bạn muốn khách thấy giá trị nên rất dễ nói hơi quá.</p>\n<p><strong>Được dùng:</strong></p>\n<ul>\n<li>Đặc điểm thật của sản phẩm, khách có thể xem tận mắt.</li>\n<li>Cách làm việc thật của bạn.</li>\n<li>Bằng chứng đã được phép dùng: khách cũ đã đồng ý cho kể lại, và kể ẩn danh.</li>\n</ul>\n<p><strong>Không dùng:</strong></p>\n<ul>\n<li>Lời khen, kết quả hay con số của khách cũ khi chưa hỏi ý họ.</li>\n<li>Số liệu bạn không có nguồn.</li>\n<li>Lời hứa về doanh thu hay kết quả kinh doanh, vì những thứ này còn tùy nhiều việc nằm ngoài sản phẩm của bạn.</li>\n</ul>\n<p>Cũng như Ngày 1, hãy tách điều chứng minh được khỏi điều đang đoán. Mỗi câu bạn định nói về giá trị thuộc một trong ba loại: <strong>sự thật về sản phẩm</strong> (kiểm chứng được), <strong>dự đoán của bạn</strong>, hoặc điều <strong>cần có nguồn hay được phép</strong> mới nói được. Dự đoán không sai, nhưng phải nói rõ đó là dự đoán, còn loại thứ ba thì chưa có nguồn là bỏ.</p>\n<p>Nói rõ giới hạn cũng cần như vậy. Giới hạn là chỗ sản phẩm chưa làm được, hoặc chỉ làm được khi khách làm một việc nào đó. Khi nghe bạn nói cả chỗ chưa tới, khách biết bạn đang nói thật.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Đây là tình huống giả định, phần mềm trong ví dụ cũng là phần mềm giả định. Đừng chép lại, hãy điền theo sản phẩm và nhóm khách của bạn.</aside>\n<div class=\"vi-du\">\n<p>Bạn bán phần mềm ghi đơn và theo dõi hàng tồn cho cửa hàng bán lẻ. Khách là anh chủ một cửa hàng quần áo có hai điểm bán. Ở Ngày 4, bạn đã tóm tắt và anh xác nhận là đúng: <em>\"Để em xem em hiểu đúng chưa: anh muốn cuối ngày biết ngay mỗi cửa hàng bán được bao nhiêu và còn lại bao nhiêu hàng, không phải ngồi đối chiếu sổ tới khuya. Hiện hai nơi ghi hai sổ riêng nên số hay lệch, và anh đang nhập hàng theo cảm giác. Em hiểu vậy có đúng không ạ?\"</em></p>\n<p><strong>Mẫu 1, phần A, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Hợp ở đâu</th><th>Câu bạn hỏi khách</th><th>Rõ hay chưa rõ</th><th>Câu hỏi thêm</th></tr></thead>\n<tbody>\n<tr><td>Điều khách muốn đạt</td><td>\"Anh muốn cuối ngày biết ngay số bán và số tồn. Nếu làm được việc đó, anh thấy có đúng điều anh cần không ạ?\"</td><td>Rõ. Anh nói: \"Đúng, chuyện này làm anh mệt nhất\"</td><td class=\"trong\"></td></tr>\n<tr><td>Chỗ đang vướng</td><td>\"Chỗ kẹt của anh là hai nơi ghi hai sổ. Đi theo hướng ghi hết về một chỗ, anh thấy có đúng chỗ đang kẹt không ạ?\"</td><td>Rõ</td><td class=\"trong\"></td></tr>\n<tr><td>Hoàn cảnh và khả năng</td><td>\"Mỗi cửa hàng có mấy bạn cùng ghi đơn trong ngày ạ?\"</td><td>Chưa rõ. Anh nói có bạn mới vào, chưa quen ghi bằng điện thoại</td><td>\"Nếu bắt đầu với một cửa hàng trước, anh thấy có làm được không ạ?\" Anh trả lời làm được, nên bạn đi tiếp</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 1, phần B, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Phần</th><th>Câu bạn nói</th></tr></thead>\n<tbody>\n<tr><td>1. Nhắc lại</td><td>\"Em nhắc lại một chút để chắc là em hiểu đúng ý anh. Anh muốn cuối ngày biết ngay số bán và số hàng còn lại của cả hai cửa hàng, nhưng hiện hai nơi ghi hai sổ riêng nên số hay lệch.\"</td></tr>\n<tr><td>2. Hướng tiếp cận</td><td>\"Với trường hợp của anh, em thấy nên bắt đầu từ việc ghi mọi đơn bán vào một chỗ chung ngay lúc bán, thay vì ghi sổ riêng rồi cuối ngày mới cộng lại.\"</td></tr>\n<tr><td>3. Vì sao hợp, giới hạn, bằng chứng</td><td>\"Cách này đi thẳng vào chỗ anh đang kẹt là hai nơi hai sổ, mà vẫn giữ điều anh cần là biết số ngay cuối ngày. Có một giới hạn em nói trước: số hàng còn lại chỉ đúng khi cả hai cửa hàng ghi đủ đơn nhập và đơn bán. Nhân viên nào quên ghi thì số vẫn lệch. Còn bán được nhiều hơn hay không thì em chưa nói chắc được. Anh có thể xem trực tiếp cách ghi đơn để tự kiểm tra.\"</td></tr>\n<tr><td>4. Kiểm tra và xin phép</td><td>\"Anh thấy hướng này giải quyết chuyện hai sổ của anh được tới đâu ạ? Nếu anh thấy hợp, em xin phép nói cụ thể hơn về cách bắt đầu.\"</td></tr>\n</tbody></table></div>\n<div class=\"ngat\"></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Khách quan tâm, theo lời khách</th><th>Sản phẩm giúp được phần nào</th><th>Bằng chứng được phép nói</th><th>Giới hạn</th></tr></thead>\n<tbody>\n<tr><td>Cuối ngày biết ngay số bán và số tồn của hai cửa hàng</td><td>Mọi đơn ghi vào một chỗ chung, số tồn tự trừ sau mỗi đơn</td><td>Cách phần mềm chạy thật, cho khách xem trực tiếp</td><td>Chỉ đúng khi nhân viên ghi đủ đơn</td></tr>\n<tr><td>Không phải nhập hàng theo cảm giác</td><td>Cho xem mặt hàng nào bán nhanh, mặt hàng nào nằm lâu</td><td>Báo cáo bán hàng, xem trực tiếp trên phần mềm</td><td>Phần mềm cho thấy số bán, không tự quyết định nhập bao nhiêu</td></tr>\n</tbody></table></div>\n<p>Đã bỏ khỏi đề xuất: in hóa đơn, tích điểm cho khách quen, vì anh chưa nhắc tới nên để dành.</p>\n<p><strong>Mẫu 3, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Câu định nói</th><th>Sự thật</th><th>Dự đoán</th><th>Cần nguồn</th><th>Sửa lại thành</th></tr></thead>\n<tbody>\n<tr><td>\"Cuối ngày anh xem được số bán và số tồn của từng cửa hàng\"</td><td>X</td><td class=\"trong\"></td><td class=\"trong\"></td><td>Giữ nguyên, kèm cho xem trực tiếp</td></tr>\n<tr><td>\"Dùng phần mềm là hết lệch số\"</td><td class=\"trong\"></td><td>X</td><td class=\"trong\"></td><td>\"Số sẽ khớp khi cả hai cửa hàng ghi đủ đơn\"</td></tr>\n<tr><td>\"Nhiều cửa hàng đã tăng doanh thu nhờ phần mềm này\"</td><td class=\"trong\"></td><td class=\"trong\"></td><td>X</td><td>Bỏ. Chưa có số liệu và chưa hỏi ý khách cũ</td></tr>\n<tr><td>\"Đây là phần mềm tốt nhất cho cửa hàng nhỏ\"</td><td class=\"trong\"></td><td>X</td><td class=\"trong\"></td><td>Bỏ. Thay bằng: \"Phần mềm có những chức năng này, anh xem có hợp với hai cửa hàng của anh không ạ\"</td></tr>\n</tbody></table></div>\n<p>Để ý câu thứ ba: một câu nghe rất thuyết phục vẫn phải bỏ, nếu bạn không có nguồn và chưa được phép.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li>Trình bày ngay khi khách vừa nói xong. Bạn đã có đáp án nên muốn nói liền, nhưng hãy hỏi độ phù hợp trước, kể cả khi chắc chắn là hợp.</li>\n<li>Nói tên sản phẩm ngay phần 2. Khách vừa nghe thấy chuyện bán hàng là đóng lại, nên hai phần đầu chỉ nói cách làm.</li>\n<li>Kể hết tính năng. Mỗi điều bạn nói phải trả lời được câu: nó giúp phần nào trong điều khách vừa kể, trả lời không được thì bỏ.</li>\n<li>Khẳng định hợp thay khách. \"Chắc chắn hợp với anh rồi.\" Để khách tự nói.</li>\n<li>Hứa kết quả kinh doanh. \"Doanh thu sẽ tăng.\" Bạn không kiểm soát được điều đó.</li>\n<li>Kể chuyện khách cũ khi chưa hỏi ý. Tên, con số, lời khen của họ đều cần được phép trước.</li>\n<li>Giấu giới hạn. Bạn tưởng nói giới hạn thì khách lùi, nhưng thường khách dễ tin hơn khi nghe bạn nói cả chỗ chưa tới.</li>\n</ul>\n<div class=\"ngat\"></div>",
"6": "<aside class=\"goi\"><strong>Sau ngày hôm nay, bạn sẽ có hai thứ.</strong> Một cách xử lý cho băn khoăn khách hay nói nhất, bắt đầu bằng việc hỏi rõ rồi mới trả lời. Cùng một bước tiếp theo cụ thể, nói rõ làm việc gì, ai làm và làm lúc nào.</aside>\n<p>Hôm qua bạn trình bày giải pháp khớp với điều khách vừa nói, và sau phần đó khách hiếm khi nói \"được, tôi làm\" ngay. Họ thường nói \"để tôi suy nghĩ thêm\", \"để tôi xem lại\", hoặc chỉ im lặng.</p>\n<p>Hôm nay là chặng cuối của bản đồ năm chặng: <strong>Giúp khách quyết định và theo sát</strong>. Bạn không học cách thuyết phục khách, mà học cách hỏi để biết khách đang lo điều gì, rồi cùng khách chọn một bước nhỏ, rõ ràng, để cuộc trao đổi không dừng ở lời \"để suy nghĩ thêm\".</p>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Hỏi để hiểu khách lo gì, rồi mới trả lời</h3>\n<p>Câu khách nói ra thường chỉ là lời bên ngoài, còn điều khách lo thật nằm bên dưới. Nghe \"để tôi suy nghĩ thêm\", bạn chưa biết khách đang nghĩ về chuyện gì.</p>\n<p>Lỗi dễ mắc nhất là trả lời ngay lời bên ngoài: nói thêm về sản phẩm, so sánh với nơi khác, giảm giá, dẫn lời khen của người khác. Làm vậy giống như trả lời một câu hỏi mà khách chưa hề hỏi. Vì thế, khi khách còn băn khoăn, việc đầu tiên là <strong>hỏi</strong>, chưa phải <strong>giải thích</strong>.</p>\n<p>Nghe một băn khoăn, bạn có thể đoán xem khách còn chưa rõ điều gì, nhưng đó chỉ là <strong>giả thuyết</strong>, như bạn đã làm ở Ngày 1. Câu hỏi của bạn sẽ cho biết đoán đúng hay sai.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Khách nói</th><th>Khách có thể còn chưa rõ</th><th>Bạn thử kiểm tra bằng cách hỏi về</th></tr></thead>\n<tbody>\n<tr><td>\"Chưa sẵn sàng\", \"để tôi suy nghĩ thêm\"</td><td>Khách muốn đạt điều gì</td><td>Điều khách mong có được</td></tr>\n<tr><td>\"Tôi thử nhiều rồi mà không hiệu quả\"</td><td>Điều gì đang cản khách</td><td>Chuyện đã xảy ra những lần trước</td></tr>\n<tr><td>\"Sợ không hợp với tôi\"</td><td>Cách này có hợp với khách không</td><td>Điều khách cần để thấy hợp</td></tr>\n</tbody></table></div>\n<p>Hỏi đúng thì khách sẽ <strong>chậm lại</strong>: họ tự phân tích, trả lời dài hơn và rõ hơn, bớt đề phòng, và đó là dấu hiệu bạn đang đi đúng.</p>\n<h3>2. Phản hồi ba bước, và biết khi nào không nên dùng</h3>\n<p>Với người mới, ba bước là đủ, và hôm nay bạn tập đúng ba bước này:</p>\n<ol>\n<li><strong>Nhắc lại đúng lời khách</strong>, không thêm ý của bạn.</li>\n<li><strong>Cho khách thấy bạn hiểu</strong>, không khen, không trấn an suông.</li>\n<li><strong>Hỏi băn khoăn thật</strong> bằng một câu hỏi mở, không dẫn khách về sản phẩm.</li>\n</ol>\n<p>Hỏi xong câu nào cũng phải chờ, vì khách im vài giây là đang nghĩ, nên bạn đừng vội nói tiếp để lấp chỗ trống.</p>\n<p>Mỗi bước có một cách làm sai rất dễ nhận ra. Dưới đây là lời của một người tư vấn ở phòng tập, ví dụ đầy đủ nằm ở phần sau:</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước</th><th>Dễ làm sai</th><th>Nên nói</th></tr></thead>\n<tbody>\n<tr><td>Nhắc lại lời khách</td><td>\"Chị suy nghĩ thêm là đúng, nhưng gói này đang rất tốt, chị đăng ký luôn cho kịp ạ.\"</td><td>\"Dạ, em nghe chị nói là chị muốn suy nghĩ thêm.\"</td></tr>\n<tr><td>Cho khách thấy bạn hiểu</td><td>\"Chị cứ yên tâm, tập ở đây không có gì phải lo đâu ạ.\"</td><td>\"Dạ em hiểu, đây là khoản chị bỏ ra mỗi tháng nên chị muốn chắc chắn.\"</td></tr>\n<tr><td>Hỏi băn khoăn thật</td><td>\"Chị phân vân là do chưa hiểu hết quyền lợi của gói đúng không ạ?\"</td><td>\"Lúc này chị đang lăn tăn nhất về chuyện gì ạ?\"</td></tr>\n</tbody></table></div>\n<p>Câu bên trái hoặc dẫn khách về phía bạn muốn, hoặc đoán thay khách, còn câu bên phải để khách tự nói.</p>\n<p><strong>Hai bước thêm, khi cần.</strong> Có lúc ba bước làm khách chậm lại và nói nhiều hơn, nhưng bạn vẫn chưa nghe ra khách muốn gì. Lúc đó bạn thêm hai câu hỏi:</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Bước thêm</th><th>Dễ làm sai</th><th>Nên nói</th></tr></thead>\n<tbody>\n<tr><td>Hỏi khách muốn gì nếu không có gì cản</td><td>\"Nếu không có gì cản thì chị đăng ký luôn đúng không ạ?\"</td><td>\"Nếu không còn điều gì cản, chị muốn đạt được điều gì nhất ạ?\"</td></tr>\n<tr><td>Hỏi điều gì lặp lại nếu để yên</td><td>\"Không tập thì sau này chị sẽ hối hận đó ạ.\"</td><td>\"Nếu để thêm một tháng nữa, chị thấy điều gì sẽ tiếp tục lặp lại ạ?\"</td></tr>\n</tbody></table></div>\n<p>Câu thứ hai không phải để dọa khách, mà để khách tự nhìn thấy cái giá của việc đứng yên.</p>\n<p><strong>Ba lúc không nên dùng cách này:</strong></p>\n<ul>\n<li>Khách chưa thấy đủ thoải mái để nói thật. Dấu hiệu là họ trả lời rất ngắn, né tránh hoặc từ chối nhiều lần, và hỏi sâu thêm lúc này chỉ làm khách thấy bị dồn.</li>\n<li>Điều khách mong còn mơ hồ, hoặc chỉ là lời xã giao. Quay lại những câu hỏi của Ngày 4 để hiểu khách muốn gì, hoặc kết thúc buổi trao đổi nhẹ nhàng.</li>\n<li>Khách đã nói rõ là không. Tôn trọng câu trả lời đó và giữ mối quan hệ, đừng cố giữ khách lại. Bạn có thể nói: \"Dạ em hiểu ạ. Khi nào chị muốn nghe lại phần nào, em luôn sẵn sàng.\"</li>\n</ul>\n<h3>3. Thống nhất một bước tiếp, rồi theo sát</h3>\n<p>Hiểu băn khoăn xong thì buổi trao đổi chưa kết thúc, bạn còn một việc nữa là cùng khách chọn <strong>một bước tiếp theo</strong>.</p>\n<p><strong>Khi nào chuyển sang bước tiếp.</strong> Khi khách nói họ thấy hợp, hỏi cách bắt đầu, hoặc cho thấy họ nghiêm túc. Bạn cũng có thể nhìn vào năm dấu hiệu sau, thấy từ ba dấu hiệu trở lên là đủ để đề nghị:</p>\n<ul>\n<li>Khách hỏi cách thực hiện.</li>\n<li>Khách hỏi thêm để làm rõ, không phải để bắt bẻ.</li>\n<li>Khách nhắc lại điều mình muốn hoặc điều đang cản bằng chính lời của họ.</li>\n<li>Khách nói đều nhịp và tập trung.</li>\n<li>Khách trả lời rõ mức độ sẵn sàng của mình trên thang điểm, kèm lý do.</li>\n</ul>\n<p><strong>Một bước tiếp tốt có ba thứ:</strong> việc gì, ai làm và khi nào, thiếu một thứ là bước tiếp chưa rõ.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Chưa rõ</th><th>Rõ</th></tr></thead>\n<tbody>\n<tr><td>\"Chị xem rồi nhắn em nhé.\"</td><td>\"Thứ Bảy 8 giờ sáng chị tới tập thử một buổi. Em báo huấn luyện viên chuẩn bị, và tối thứ Sáu em nhắn nhắc chị.\"</td></tr>\n<tr><td>\"Khi nào tiện thì mình gặp lại.\"</td><td>\"Anh trao đổi với gia đình xong, thứ Tư em gọi anh lúc 7 giờ tối để nghe anh và gia đình đã bàn thế nào ạ.\"</td></tr>\n</tbody></table></div>\n<p>Câu ở dòng đầu của cột \"Chưa rõ\" còn một lỗi nữa: nó giao việc ngược cho khách và để bạn ngồi chờ, trong khi việc gọi lại, nhắn nhắc là việc của người tư vấn.</p>\n<p><strong>Đề nghị, không ép.</strong> Có hai lỗi ngược nhau: một là dồn khách quyết ngay, hai là ngại đề nghị rồi kết thúc bằng \"chị cứ suy nghĩ nhé\". Bạn đứng giữa hai lỗi đó: đọc tình trạng của khách, đề nghị <strong>một</strong> bước, nói vì sao bước đó hợp, rồi đưa hai khung giờ để khách chọn. Khách chưa muốn làm ngay thì hẹn một ngày bạn nhắn lại, đừng để bỏ trống.</p>\n<p>Bạn có thể mở bằng câu: \"Từ những gì chúng ta vừa trao đổi, em đề nghị bước tiếp theo là…, vì…\"</p>\n<p><strong>Theo sát sau buổi tư vấn.</strong> Theo sát không phải là đuổi theo khách, và có bốn nguyên tắc:</p>\n<ul>\n<li>Tin nhắn ngắn, ba tới năm dòng.</li>\n<li>Mỗi lần nhắn phải có một điều thật sự có ích cho khách, chưa có gì có ích thì chưa nhắn.</li>\n<li>Đi theo nhịp của khách, không hỏi \"chị quyết định chưa ạ\".</li>\n<li>Biết dừng đúng lúc.</li>\n</ul>\n<p>Nhịp dưới đây chỉ là gợi ý, bạn chỉnh theo khách và ngành của mình.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Tình trạng của khách</th><th>Nhịp theo sát gợi ý</th></tr></thead>\n<tbody>\n<tr><td>Còn đang cân nhắc</td><td>Nhắn một lần sau 3 tới 5 ngày. Một lần cuối khoảng 5 tới 7 ngày sau đó</td></tr>\n<tr><td>Từ chối nhẹ</td><td>Khoảng 7 tới 10 ngày nhắn một lần, nhiều nhất 2 tới 3 lần, rồi dừng</td></tr>\n<tr><td>Cần bàn với người khác</td><td>Giúp khách chuẩn bị. Ví dụ: \"Khi chị trao đổi với gia đình, điều gì chị thấy quan trọng nhất ạ?\"</td></tr>\n</tbody></table></div>\n<p>Khi gặp lại khách, bạn quay về đúng chỗ khách còn chưa rõ, không nói lại từ đầu.</p>\n<aside class=\"goi\">Nếu hôm nay bạn thấy nhiều quá, hãy giữ đúng <strong>một băn khoăn</strong> và <strong>một bước tiếp</strong>, còn hai bước thêm ở điểm 2 để sau cũng được.</aside>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Đây là tình huống giả định để bạn xem cách ghi. Đừng chép lại, hãy điền theo doanh nghiệp của bạn.</aside>\n<div class=\"vi-du\">\n<p>Bạn có một phòng tập thể hình, mỗi khách tập cùng một huấn luyện viên riêng. Một khách nữ, nhân viên văn phòng, đến tham quan và nghe giới thiệu gói 12 buổi. Cuối buổi, chị nói: \"Gói này chị thấy cũng ổn, để chị suy nghĩ thêm.\"</p>\n<p><strong>Cuộc trao đổi, viết lại</strong></p>\n<ul>\n<li>Bạn: \"Dạ, em nghe chị nói là chị muốn suy nghĩ thêm.\" <em>(bước 1)</em></li>\n<li>Bạn: \"Dạ em hiểu ạ. Đây là khoản chị bỏ ra mỗi tháng nên chị muốn chắc chắn.\" <em>(bước 2)</em></li>\n<li>Bạn: \"Lúc này chị đang lăn tăn nhất về chuyện gì ạ?\" <em>(bước 3, rồi chờ)</em></li>\n<li>Khách: \"Năm ngoái chị đóng một năm ở chỗ khác, đi được hai tuần là bỏ. Chị sợ lần này cũng vậy.\"</li>\n<li>Bạn: \"Dạ. Lần đó, sang tuần thứ hai có chuyện gì làm chị không đi nữa ạ?\"</li>\n<li>Khách: \"Chị tập một mình. Hôm nào mệt là ở nhà.\"</li>\n<li>Bạn: \"Từ những gì chúng ta vừa trao đổi, em đề nghị chị tập thử một buổi có huấn luyện viên. Buổi đó để chị tự thấy tập có người hẹn giờ thì khác thế nào. Thứ Bảy 8 giờ hoặc Chủ nhật 9 giờ, chị tiện giờ nào ạ?\"</li>\n<li>Khách: \"Thứ Bảy đi.\"</li>\n<li>Bạn: \"Dạ, vậy thứ Bảy 8 giờ chị tới. Em báo huấn luyện viên chuẩn bị, và tối thứ Sáu em nhắn nhắc chị ạ.\"</li>\n</ul>\n<p><strong>Mẫu 1, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Mục</th><th>Đã điền</th></tr></thead>\n<tbody>\n<tr><td>Băn khoăn khách hay nói</td><td>\"Để chị suy nghĩ thêm\"</td></tr>\n<tr><td>Bạn đoán khách còn chưa rõ điều gì</td><td>Có thể khách sợ lại bỏ giữa chừng như lần trước. Chưa chắc, cần hỏi</td></tr>\n<tr><td>Bước 1</td><td>\"Dạ, em nghe chị nói là chị muốn suy nghĩ thêm.\"</td></tr>\n<tr><td>Bước 2</td><td>\"Dạ em hiểu ạ. Đây là khoản chị bỏ ra mỗi tháng nên chị muốn chắc chắn.\"</td></tr>\n<tr><td>Bước 3</td><td>\"Lúc này chị đang lăn tăn nhất về chuyện gì ạ?\"</td></tr>\n<tr><td>Điều tôi không làm</td><td>Không giảm giá. Không nói \"chị yên tâm, lần này khác\". Không khen huấn luyện viên để át nỗi lo</td></tr>\n<tr><td>Khi nào không dùng</td><td>Khách trả lời rất ngắn, né, hoặc đã nói rõ là không tập</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, đã điền</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Mục</th><th>Đã điền</th></tr></thead>\n<tbody>\n<tr><td>Bước tiếp</td><td>Khách tập thử một buổi có huấn luyện viên</td></tr>\n<tr><td>Vì sao hợp</td><td>Nỗi lo của khách là tập một mình thì dễ bỏ. Buổi thử cho khách tự thấy tập có người hẹn giờ thì thế nào</td></tr>\n<tr><td>Khách làm gì, bạn làm gì</td><td>Khách tới phòng tập đúng giờ. Bạn báo huấn luyện viên chuẩn bị, tối thứ Sáu nhắn nhắc khách</td></tr>\n<tr><td>Hai khung giờ</td><td>Thứ Bảy 8 giờ hoặc Chủ nhật 9 giờ</td></tr>\n<tr><td>Câu đề nghị</td><td>\"Em đề nghị chị tập thử một buổi có huấn luyện viên. Thứ Bảy 8 giờ hoặc Chủ nhật 9 giờ, chị tiện giờ nào ạ?\"</td></tr>\n<tr><td>Nếu khách chưa muốn làm ngay</td><td>Hẹn thứ Tư tuần sau em nhắn hỏi lại</td></tr>\n</tbody></table></div>\n<div class=\"ngat\"></div>\n<p><strong>Mẫu 3, đã điền</strong> (tình huống khách chưa chọn giờ và nói \"để chị xem lịch\")</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Mục</th><th>Đã điền</th></tr></thead>\n<tbody>\n<tr><td>Tình trạng</td><td>Còn cân nhắc</td></tr>\n<tr><td>Nhắn sau 3 ngày, tin nhắn</td><td>\"Chị ơi, mấy hôm trước chị nói để chị xem lịch, nên em gửi chị lịch các khung giờ tập thử còn trống tuần này và danh sách đồ cần mang cho buổi đầu. Chị xem khi nào tiện thì báo em ạ. Tuần sau em sẽ nhắn lại thêm một lần nữa nhé.\"</td></tr>\n<tr><td>Điều có ích gửi kèm</td><td>Lịch khung giờ trống, danh sách đồ cần mang</td></tr>\n<tr><td>Lần nhắn cuối</td><td>6 ngày sau lần nhắn đầu</td></tr>\n<tr><td>Dừng nhắn</td><td>Sau lần nhắn cuối. Chỉ nhắn lại khi phòng tập có khung giờ mới phù hợp với chị, hoặc khi chị chủ động hỏi</td></tr>\n</tbody></table></div>\n<p>Để ý là bạn không hỏi \"chị quyết định chưa ạ\", tin nhắn có một điều thật sự có ích và biết chỗ dừng.</p>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li>Trả lời băn khoăn bằng cách nói thêm về sản phẩm. Khách chưa hỏi điều đó. Hỏi trước, trả lời sau.</li>\n<li>Giảm giá để khách thôi băn khoăn. Giảm giá không làm nỗi lo biến mất, chỉ làm khách nghĩ giá ban đầu chưa đúng.</li>\n<li>Trấn an suông. \"Chị yên tâm\", \"không sao đâu ạ\" là lời bạn nói cho mình dễ chịu, không giúp gì cho khách.</li>\n<li>Hỏi dẫn. \"Chị lo vì chưa hiểu hết quyền lợi đúng không ạ?\" Khách chỉ cần gật là xong, và bạn vẫn chưa biết khách lo gì.</li>\n<li>Dồn khách quyết ngay. Khách thấy bị dồn thì nói \"để suy nghĩ\" nhiều hơn.</li>\n<li>Ngại đề nghị. Kết thúc bằng \"chị cứ suy nghĩ nhé\" mà không có bước tiếp nào. Hãy đề nghị một việc cụ thể, kèm giờ.</li>\n<li>Bước tiếp thiếu người làm hoặc thiếu giờ. \"Khi nào tiện thì mình gặp lại\" chưa phải bước tiếp.</li>\n<li>Nhắn theo sát mà không có gì mới. Chỉ hỏi \"chị quyết định chưa ạ\" thì khách thấy bị đuổi theo.</li>\n<li>Dồn nhiều băn khoăn vào một phiếu. Một phiếu một băn khoăn.</li>\n<li>Đưa thông tin thật của khách vào bài. Không tên, không số điện thoại, không ảnh chụp tin nhắn.</li>\n</ul>\n<div class=\"ngat\"></div>",
"7": "<aside class=\"goi\">Sau ngày hôm nay, bạn sẽ có ba thứ: một Quy trình tư vấn bán hàng tiêu chuẩn đủ các phần và nối khớp với nhau, một bản tự đánh giá cho biết chỗ nào đã tốt hơn và chỗ nào còn phải sửa, cùng một việc cụ thể để dùng trong tuần tới.</aside>\n<p>Hôm nay không có bài học mới. Sáu ngày qua bạn đã làm từng phần. Hôm nay chúng ta nối chúng lại thành một quy trình, nói thử cả một cuộc tư vấn từ đầu tới cuối rồi mở lại Ngày 1 để xem bạn đã khác đi ở đâu và chưa khác ở đâu.</p>\n<h2>Sáu ngày bạn đã đi qua</h2>\n<p>Mỗi ngày bạn làm một phần của Quy trình tư vấn bán hàng tiêu chuẩn, và hôm nay bạn tập hợp các phần đó về một chỗ.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Ngày</th><th>Bạn đã làm</th><th>Phần trong Quy trình</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Nhìn lại quy trình đang dùng, ghi chỗ đang yếu ở từng chặng</td><td>Phần 1 Phạm vi, và bản đầu của Phần 3</td></tr>\n<tr><td>2</td><td>Làm rõ bạn đang tư vấn cho ai</td><td>Phần 2 Khách ưu tiên</td></tr>\n<tr><td>3</td><td>Mở đầu một buổi tư vấn</td><td>Phần 4 Mở đầu</td></tr>\n<tr><td>4</td><td>Những câu cần hỏi trước khi đề xuất</td><td>Phần 5 Câu hỏi để hiểu khách</td></tr>\n<tr><td>5</td><td>Trình bày giải pháp khớp với điều khách vừa nói</td><td>Phần 6 Đề xuất</td></tr>\n<tr><td>6</td><td>Băn khoăn của khách và bước tiếp theo</td><td>Phần 7 Băn khoăn hay gặp, Phần 8 Bước tiếp và theo sát</td></tr>\n<tr><td>7</td><td>Nối lại, tự đánh giá, nhìn lại</td><td>Phần 3 bản sửa, Phần 9 Tự đánh giá, Phần 10 Thử với khách thật</td></tr>\n</tbody></table></div>\n<h2>Ba điều của hôm nay</h2>\n<h3>1. Các phần phải nối được với nhau</h3>\n<p>Mỗi phần bạn làm riêng thì đều ổn, vấn đề thường nằm ở chỗ nối. Câu tóm tắt ở Ngày 4 dùng từ \"mục tiêu\" mà sang Ngày 5 phần đề xuất lại viết \"nhu cầu\", hay phần mở đầu hứa một điều còn phần cuối buổi lại làm điều khác.</p>\n<p>Vì vậy việc đầu tiên hôm nay là đi lần lượt từ Phần 1 tới Phần 8 và kiểm tra từng chỗ nối. Chỗ nào lệch thì sửa phần sau cho khớp phần trước, vì phần trước là điều bạn đã biết về khách.</p>\n<p>Phần nào bạn chưa làm kịp thì cứ ghi \"chưa làm\", đừng viết bù cho đủ trang.</p>\n<h3>2. Tự đánh giá để biết sửa gì, không để cho điểm</h3>\n<p>Sau khi nối xong, bạn nói thử cả một cuộc tư vấn từ mở đầu tới bước tiếp theo, rồi tự trả lời tám câu hỏi về cuộc đó. Mỗi câu trả lời là \"có\", \"chưa\" hoặc \"không áp dụng\".</p>\n<p>Bạn không cộng thành điểm tổng, vì có điểm tổng thì ai cũng muốn trả lời \"có\" cho đẹp. Thay vào đó, mỗi câu trả lời \"có\" phải kèm một bằng chứng là một câu bạn đã nói hoặc một đoạn trong video quay thử. Không tìm được bằng chứng thì đổi thành \"chưa\".</p>\n<p>Chỗ nào ghi \"chưa\" là chỗ bạn sẽ sửa tiếp sau thử thách. Bạn sửa lần lượt, chỗ ảnh hưởng tới khách nhiều nhất thì làm trước, không sửa tất cả trong cùng một tuần.</p>\n<h3>3. Nói đúng mức bạn đã đi tới</h3>\n<p>Có bốn mức, mức sau không thay thế mức trước và mỗi mức đều là một bước thật.</p>\n<div class=\"bang\"><table>\n<thead><tr><th>Mức</th><th>Nghĩa là</th><th>Bằng chứng bạn có</th></tr></thead>\n<tbody>\n<tr><td>1. Đã điền xong</td><td>Quy trình đã viết ra đủ các phần</td><td>Các phần đã điền</td></tr>\n<tr><td>2. Đã luyện được</td><td>Bạn đã nói ra miệng nhiều lần và thấy khác so với trước</td><td>Video quay thử, phiếu tự đánh giá</td></tr>\n<tr><td>3. Đã dùng với khách thật</td><td>Bạn đã dùng ít nhất một phần với một cuộc tư vấn thật và ghi lại</td><td>Ghi chép ẩn danh sau cuộc tư vấn</td></tr>\n<tr><td>4. Đã thấy kết quả khác đi trong kinh doanh</td><td>Số liệu của chính bạn khác đi so với trước, sau nhiều cuộc tư vấn</td><td>Số liệu bạn tự theo dõi</td></tr>\n</tbody></table></div>\n<p>Sau bảy ngày, nhiều người đang ở mức 1 hoặc mức 2 và như vậy là bình thường, vì mức 3 và mức 4 cần thời gian cùng khách thật, bảy ngày chưa đủ để nói tới chúng.</p>\n<p>Hôm nay bạn so sánh với Ngày 1 bằng điều viết ra được và nói ra được, chưa bằng doanh số, nên video của bạn cũng chỉ nên nói đúng mức đó.</p>\n<h2>Ví dụ đã điền</h2>\n<aside class=\"goi\"><strong>MINH HỌA.</strong> Đây là tình huống giả định để bạn xem cách ghi. Đừng chép lại, hãy điền theo doanh nghiệp của bạn.</aside>\n<div class=\"vi-du\">\n<p>Chúng ta quay lại khóa học tiếng Anh giao tiếp cho người đi làm ở Ngày 1. Hôm đó bản đồ ghi chỗ yếu ở cả năm chặng, hai chặng mở đầu và khai thác còn ghi \"chưa làm\". Chặng yếu nhất là khai thác: \"tôi báo học phí trước khi hiểu khách học để làm gì\". Điều muốn khác đi là chặng nào cũng có một việc làm khác đi, riêng chặng khai thác thì trước khi báo học phí, hỏi được ít nhất hai câu về mục tiêu của khách.</p>\n<p>Hôm nay bạn đã nối đủ các phần. Bạn nhờ một đồng nghiệp đóng vai khách, nói thử một cuộc gọi tư vấn khoảng hai mươi lăm phút và quay lại để tự xem, nhưng đây là mô phỏng chứ chưa phải khách thật.</p>\n<p><strong>Mẫu 1, một chỗ nối bị lệch.</strong> Phần 5 viết câu tóm tắt bằng từ \"mục tiêu học\", còn Phần 6 mở đề xuất bằng từ \"nhu cầu\", trong khi khách chưa hề nói từ nào trong hai từ đó. Bạn sửa cả hai phần thành lời khách đã nói trong buổi, ví dụ \"cần nói được trong cuộc họp với đối tác\".</p>\n<p><strong>Phần 3, chia thời gian cho cuộc gọi hai mươi lăm phút</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Chặng</th><th>Ngày 1</th><th>Ngày 7</th></tr></thead>\n<tbody>\n<tr><td>Chuẩn bị và hiểu khách</td><td>Xem tên trang cá nhân rồi trả lời</td><td>Xem trước khách làm nghề gì, đã điền Phần 2</td></tr>\n<tr><td>Mở đầu</td><td>Chưa làm</td><td>3 phút</td></tr>\n<tr><td>Khai thác, hỏi khách muốn đạt điều gì</td><td>Chưa làm</td><td>9 phút</td></tr>\n<tr><td>Khai thác, hỏi điều gì đang cản</td><td>Chưa làm</td><td>7 phút</td></tr>\n<tr><td>Đề xuất</td><td>Gần như toàn bộ phần trao đổi</td><td>3 phút</td></tr>\n<tr><td>Giúp khách quyết định và theo sát</td><td>Chờ khách nhắn lại</td><td>3 phút, kết thúc bằng một bước tiếp có ngày giờ</td></tr>\n</tbody></table></div>\n<p><strong>Mẫu 2, kết quả tự đánh giá</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Câu tự hỏi</th><th>Trả lời</th><th>Bằng chứng</th></tr></thead>\n<tbody>\n<tr><td>Khách biết vì sao có buổi nói chuyện</td><td>Có</td><td>Phút thứ hai tôi nói rõ lý do cuộc gọi và hỏi xin phép hỏi sâu</td></tr>\n<tr><td>Hỏi khách muốn đạt gì trước điều đang cản</td><td>Có</td><td>Ba câu đầu đều về việc khách cần tiếng Anh để làm gì</td></tr>\n<tr><td>Khách nói nhiều hơn tôi ở nửa đầu</td><td>Chưa</td><td>Phần mở đầu tôi nói gần bốn phút, dài hơn dự kiến</td></tr>\n<tr><td>Tóm tắt lại và khách đồng ý</td><td>Có</td><td>Tôi tóm tắt bằng đúng lời khách \"họp với đối tác\", người đóng vai gật đầu</td></tr>\n<tr><td>Đề xuất trả lời đúng điều khách xác nhận</td><td>Có</td><td>Tôi mở đề xuất bằng câu tóm tắt, chưa nhắc học phí trước đó</td></tr>\n<tr><td>Nói rõ giới hạn của giải pháp</td><td>Chưa</td><td>Tôi quên nói khóa này không dạy chuyên sâu một ngành</td></tr>\n<tr><td>Hỏi rõ băn khoăn trước khi trả lời</td><td>Có</td><td>Khi khách nói \"để chị xem lại\", tôi hỏi chị đang cân nhắc điều gì</td></tr>\n<tr><td>Kết thúc bằng bước tiếp cụ thể</td><td>Có</td><td>Hẹn nhắn lịch học thử vào thứ Năm, 9 giờ sáng</td></tr>\n</tbody></table></div>\n<p>Điều làm tốt hơn so với Ngày 1: hỏi mục tiêu trước khi nhắc học phí. Điều muốn sửa lần sau: rút phần mở đầu còn khoảng ba phút.</p>\n<p><strong>Mẫu 3, so sánh Ngày 1 và Ngày 7</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Chỗ so sánh</th><th>Ngày 1</th><th>Ngày 7</th><th>Bằng chứng thấy được</th></tr></thead>\n<tbody>\n<tr><td>Chuẩn bị và hiểu khách</td><td>Xem tên trang cá nhân rồi trả lời ngay</td><td>Xem trước khách làm nghề gì</td><td>Phần 2 đã điền cho nhóm người đi làm cần tiếng Anh để họp</td></tr>\n<tr><td>Mở đầu</td><td>Chưa làm, khách hỏi gì trả lời nấy</td><td>Nói lý do cuộc gọi và xin phép hỏi sâu</td><td>Video quay thử, phút thứ hai</td></tr>\n<tr><td>Khai thác và chẩn đoán</td><td>Chưa làm</td><td>Hỏi khách học để làm gì, nghe, rồi tóm tắt lại</td><td>Video quay thử, ba câu đầu và câu tóm tắt</td></tr>\n<tr><td>Đề xuất</td><td>Gửi lịch, học phí, giáo viên trong một tin</td><td>Mở bằng điều khách vừa nói, chưa nhắc học phí</td><td>Video quay thử, đoạn phút 17 đến 20</td></tr>\n<tr><td>Theo sát</td><td>Chờ khách nhắn lại</td><td>Hẹn bước tiếp có ngày giờ</td><td>Dòng ghi trong Phần 8</td></tr>\n</tbody></table></div>\n<p>Cả năm chặng đều đã khác đi <strong>trong buổi luyện</strong>. Chặng yếu nhất ở Ngày 1 là khai thác, giờ tôi hỏi được ba câu về mục tiêu trước khi nhắc học phí. Chặng mở đầu vẫn còn dài quá. Tôi chưa thử với khách thật nên chưa biết khách thật phản ứng ra sao, và đây là <strong>mức 2, đã luyện được</strong>.</p>\n<p><strong>Phần 10, việc dùng trong tuần tới</strong></p>\n<div class=\"bang\"><table>\n<thead><tr><th>Mục</th><th>Bạn điền</th></tr></thead>\n<tbody>\n<tr><td>Phần dùng đầu tiên</td><td>Phần 5, câu hỏi để hiểu khách, vì đó là chặng yếu nhất ở Ngày 1 và cũng là chặng đổi nhiều nhất</td></tr>\n<tr><td>Dùng với bao nhiêu cuộc</td><td>Ba cuộc tư vấn đầu tiên trong tuần tới</td></tr>\n<tr><td>Sau mỗi cuộc ghi lại</td><td>Tôi hỏi được mấy câu về mục tiêu trước khi nhắc học phí; khách nói gì sau câu tóm tắt</td></tr>\n<tr><td>Ngày mở lại Quy trình</td><td>Thứ Sáu tuần sau</td></tr>\n</tbody></table></div>\n</div>\n<h2>Những lỗi hay gặp</h2>\n<ul>\n<li><strong>Viết bù cho đủ trang.</strong> Phần nào chưa làm thì cứ ghi \"chưa làm\", vì viết bù cho đẹp thì tuần sau bạn cũng không dùng được.</li>\n<li><strong>Tích \"có\" cho cả tám câu tự đánh giá.</strong> Mỗi câu trả lời \"có\" phải có một câu hoặc một đoạn video đi kèm, không tìm được thì đó là \"chưa\".</li>\n<li><strong>Tự đóng cả hai vai rồi tự khen.</strong> Một mình thì khách luôn đồng ý, nên hãy nhờ một người khác đóng khách và dặn họ hỏi khó một chút.</li>\n<li><strong>Nói như đã có kết quả kinh doanh.</strong> Hôm nay bạn so sánh bằng điều đã viết và đã nói, còn chưa có khách thật thì chưa thể nói doanh số khác đi.</li>\n<li><strong>So sánh bằng cảm giác.</strong> Hãy mở Mẫu 1 và video Ngày 1 ra, đặt cạnh Ngày 7, vì nếu không mở thì bạn sẽ nhớ Ngày 1 tệ hơn hoặc tốt hơn thực tế.</li>\n<li><strong>Chọn nhiều việc để dùng tuần tới.</strong> Chỉ một việc thôi, vì nhiều việc thì cuối tuần bạn không biết việc nào có tác dụng.</li>\n<li><strong>Đưa thông tin thật của khách vào bài hoặc video.</strong> Không tên, không số điện thoại, không ảnh chụp tin nhắn.</li>\n</ul>"
};
var BAI = {
"2": {
"ten": "Hiểu đúng khách ưu tiên trước khi tư vấn",
"hua": "Sau hôm nay, bạn có hai điều trong tay: một trang chân dung về nhóm khách bạn chọn tư vấn trong cả thử thách, và một điều cụ thể cần hỏi lại khách thật, để biết chỗ nào trong trang đó bạn mới chỉ đoán.",
"phan": [
{
"tieu": "Mẫu 1. Chân dung khách ưu tiên",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Bạn viết bằng lời của mình, mỗi ô vài dòng, và không ghi tên, số điện thoại hay thông tin riêng của khách thật.</p>"
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
"nhan": "Nhóm khách bạn chọn, gọi bằng một câu",
"ten": "Mẫu 1 · Nhóm khách bạn chọn, gọi bằng một câu"
}
]
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
]
},
{
"tieu": "Khối 2. Họ đang vướng ở đâu, muốn khác đi thế nào (ghi bằng lời khách)",
"o": [
{
"id": "n2-0-1-1-1",
"nhan": "Bạn điền",
"ten": "Mẫu 1 · Khối 2. Họ đang vướng ở đâu, muốn khác đi thế nào (ghi bằng lời khách) · Bạn điền"
},
{
"id": "n2-0-1-1-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Khối 2. Họ đang vướng ở đâu, muốn khác đi thế nào (ghi bằng lời khách) · Đã nghe từ khách hay đang đoán"
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
"nhan": "Ba khối có khớp nhau không. Nhóm khách ở Khối 1 có đúng là người gặp vấn đề ở Khối 2 và gặp chuyện ở Khối 3 không",
"ten": "Mẫu 1 · Ba khối có khớp nhau không. Nhóm khách ở Khối 1 có đúng là người gặp vấn đề ở Khối 2 và gặp chuyện ở Khối 3 không"
},
{
"id": "n2-0-2-1-1",
"nhan": "Một điều cần hỏi lại khách thật để biết chỗ đang đoán là đúng hay sai",
"ten": "Mẫu 1 · Một điều cần hỏi lại khách thật để biết chỗ đang đoán là đúng hay sai"
}
]
}
]
},
{
"tieu": "Mẫu 2. Câu hỏi giúp bạn hiểu khách",
"cot": "Mẫu 2",
"nhom": [
{
"h": "<p>Bạn dùng mẫu này khi chưa biết điền ô nào trong Mẫu 1, trả lời ngắn thôi. Ở cột cuối, ghi nguồn giống Mẫu 1: <strong>[Đã nghe từ khách]</strong> nếu khách từng nói hoặc từng làm đúng như vậy, <strong>[Đang đoán]</strong> nếu bạn chưa hỏi. Chưa có khách nào thì ghi hết là đang đoán, và việc đầu tiên của bạn là tìm một người để hỏi.</p>"
},
{
"h": "<h4>Về nhóm khách</h4>"
},
{
"tieu": "Ba khách mua gần nhất của bạn có điểm gì giống nhau",
"o": [
{
"id": "n2-1-0-0-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về nhóm khách · Ba khách mua gần nhất của bạn có điểm gì giống nhau · Câu trả lời của bạn"
},
{
"id": "n2-1-0-0-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về nhóm khách · Ba khách mua gần nhất của bạn có điểm gì giống nhau · Nguồn"
}
]
},
{
"tieu": "Những người hỏi rồi không mua khác nhóm đã mua ở chỗ nào",
"o": [
{
"id": "n2-1-0-1-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về nhóm khách · Những người hỏi rồi không mua khác nhóm đã mua ở chỗ nào · Câu trả lời của bạn"
},
{
"id": "n2-1-0-1-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về nhóm khách · Những người hỏi rồi không mua khác nhóm đã mua ở chỗ nào · Nguồn"
}
]
},
{
"tieu": "Nhóm khách nào làm bạn tư vấn thấy dễ, và khách cũng hài lòng",
"o": [
{
"id": "n2-1-0-2-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về nhóm khách · Nhóm khách nào làm bạn tư vấn thấy dễ, và khách cũng hài lòng · Câu trả lời của bạn"
},
{
"id": "n2-1-0-2-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về nhóm khách · Nhóm khách nào làm bạn tư vấn thấy dễ, và khách cũng hài lòng · Nguồn"
}
]
},
{
"h": "<h4>Về vấn đề và điều khách muốn</h4>"
},
{
"tieu": "Khách kể chuyện của họ bằng những câu nào, chép gần nguyên lời",
"o": [
{
"id": "n2-1-1-0-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Khách kể chuyện của họ bằng những câu nào, chép gần nguyên lời · Câu trả lời của bạn"
},
{
"id": "n2-1-1-0-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Khách kể chuyện của họ bằng những câu nào, chép gần nguyên lời · Nguồn"
}
]
},
{
"tieu": "Trước khi tìm tới bạn, họ đã thử cách gì",
"o": [
{
"id": "n2-1-1-1-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Trước khi tìm tới bạn, họ đã thử cách gì · Câu trả lời của bạn"
},
{
"id": "n2-1-1-1-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Trước khi tìm tới bạn, họ đã thử cách gì · Nguồn"
}
]
},
{
"tieu": "Họ muốn khác đi thế nào, nói bằng đời sống của họ",
"o": [
{
"id": "n2-1-1-2-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Họ muốn khác đi thế nào, nói bằng đời sống của họ · Câu trả lời của bạn"
},
{
"id": "n2-1-1-2-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về vấn đề và điều khách muốn · Họ muốn khác đi thế nào, nói bằng đời sống của họ · Nguồn"
}
]
},
{
"h": "<h4>Về lúc nhu cầu xuất hiện</h4>"
},
{
"tieu": "Chuyện gì vừa xảy ra trước khi khách nhắn cho bạn",
"o": [
{
"id": "n2-1-2-0-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Chuyện gì vừa xảy ra trước khi khách nhắn cho bạn · Câu trả lời của bạn"
},
{
"id": "n2-1-2-0-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Chuyện gì vừa xảy ra trước khi khách nhắn cho bạn · Nguồn"
}
]
},
{
"tieu": "Khách thường tìm tới bạn vào lúc nào, hoặc sau dịp nào",
"o": [
{
"id": "n2-1-2-1-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Khách thường tìm tới bạn vào lúc nào, hoặc sau dịp nào · Câu trả lời của bạn"
},
{
"id": "n2-1-2-1-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Khách thường tìm tới bạn vào lúc nào, hoặc sau dịp nào · Nguồn"
}
]
},
{
"tieu": "Khách nào bạn có thể hỏi trong tuần này để biết thêm",
"o": [
{
"id": "n2-1-2-2-1",
"nhan": "Câu trả lời của bạn",
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Khách nào bạn có thể hỏi trong tuần này để biết thêm · Câu trả lời của bạn"
},
{
"id": "n2-1-2-2-2",
"nhan": "Nguồn",
"dong": 1,
"ten": "Mẫu 2 · Về lúc nhu cầu xuất hiện · Khách nào bạn có thể hỏi trong tuần này để biết thêm · Nguồn"
}
]
}
],
"rieng": 1
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Phần 2 này nằm trong bộ quy trình bạn sẽ ghép lại ở Ngày 7. Bạn chép từ Mẫu 1 sang và viết gọn lại bằng lời của chính bạn.</p>"
},
{
"h": "<h4>Phần 2. Khách ưu tiên</h4>"
},
{
"tieu": "Nhóm khách này là ai, vì sao hợp với sản phẩm của bạn",
"o": [
{
"id": "n2-3-0-0-1",
"nhan": "Bạn điền",
"ten": "Quy trình · Phần 2. Khách ưu tiên · Nhóm khách này là ai, vì sao hợp với sản phẩm của bạn · Bạn điền",
"qp": "Phần 2. Khách ưu tiên"
},
{
"id": "n2-3-0-0-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Quy trình · Phần 2. Khách ưu tiên · Nhóm khách này là ai, vì sao hợp với sản phẩm của bạn · Đã nghe từ khách hay đang đoán",
"qp": "Phần 2. Khách ưu tiên"
}
]
},
{
"tieu": "Họ đang vướng ở đâu, muốn khác đi thế nào",
"o": [
{
"id": "n2-3-0-1-1",
"nhan": "Bạn điền",
"ten": "Quy trình · Phần 2. Khách ưu tiên · Họ đang vướng ở đâu, muốn khác đi thế nào · Bạn điền",
"qp": "Phần 2. Khách ưu tiên"
},
{
"id": "n2-3-0-1-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Quy trình · Phần 2. Khách ưu tiên · Họ đang vướng ở đâu, muốn khác đi thế nào · Đã nghe từ khách hay đang đoán",
"qp": "Phần 2. Khách ưu tiên"
}
]
},
{
"tieu": "Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp",
"o": [
{
"id": "n2-3-0-2-1",
"nhan": "Bạn điền",
"ten": "Quy trình · Phần 2. Khách ưu tiên · Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp · Bạn điền",
"qp": "Phần 2. Khách ưu tiên"
},
{
"id": "n2-3-0-2-2",
"nhan": "Đã nghe từ khách hay đang đoán",
"dong": 1,
"ten": "Quy trình · Phần 2. Khách ưu tiên · Chuyện gì xảy ra thì họ bắt đầu đi tìm giải pháp · Đã nghe từ khách hay đang đoán",
"qp": "Phần 2. Khách ưu tiên"
}
]
},
{
"o": [
{
"id": "n2-3-1-0-1",
"nhan": "Một điều cần hỏi lại khách thật",
"ten": "Quy trình · Phần 2. Khách ưu tiên · Một điều cần hỏi lại khách thật",
"qp": "Phần 2. Khách ưu tiên"
}
]
},
{
"h": "<p>Phần 1 bạn đã làm ở Ngày 1. Phần 3 là chỗ bạn ghi cách đang làm hôm qua và sẽ sửa ở Ngày 7, còn các phần sau làm ở những ngày tiếp theo.</p>\n<aside class=\"goi\"><strong>Ngày mai.</strong> Bạn giữ nguyên sản phẩm và nhóm khách của hôm nay. Ngày 3, bạn sẽ viết và quay phần mở đầu buổi tư vấn dành cho đúng nhóm khách này, dựa trên chuyện khiến họ đi tìm bạn.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 2",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video dài <strong>một tới ba phút</strong>, trình bày nhóm khách bạn chọn bằng cách trả lời ba câu sau:</p>\n<ol>\n<li>Bạn chọn nhóm khách nào, và vì sao chọn nhóm này?</li>\n<li>Họ đang gặp vấn đề gì, và muốn đạt được điều gì?</li>\n<li>Điều gì khiến họ bắt đầu đi tìm giải pháp, và vì thế bạn sẽ đổi cách mở đầu hoặc cách tư vấn của bạn ra sao?</li>\n</ol>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Bạn nói như đang kể về một người cụ thể chứ không đọc lại từng ô của Mẫu 1, và chỗ nào mới đoán thì nói luôn là đang đoán. Bạn không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
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
"viec": "<ol>\n<li><strong>Giữ nguyên sản phẩm bạn đã chọn ở Ngày 1</strong>, vì trang chân dung phải khớp với bản đồ hôm qua.</li>\n<li><strong>Chọn một nhóm khách.</strong> Bạn nghĩ tới ba khách mua gần nhất và vài người hỏi rồi không mua, rồi tự hỏi nhóm nào bạn muốn phục vụ nhiều hơn và nhóm nào hợp với sản phẩm của bạn nhất.</li>\n<li><strong>Điền Mẫu 1</strong>, trang chân dung khách, đủ ba khối, và đánh dấu từng ô là đã nghe từ khách hay đang đoán.</li>\n<li><strong>Dùng Mẫu 2 khi chưa biết điền gì.</strong> Ô nào trong Mẫu 1 bạn chưa biết điền thì trả lời các câu hỏi tương ứng ở Mẫu 2, rồi chép ý chính sang Mẫu 1.</li>\n<li><strong>Chọn một điều cần hỏi lại khách thật</strong> và ghi ở cuối Mẫu 1, hôm nay bạn chưa cần đi hỏi.</li>\n<li><strong>Điền phần Quy trình</strong> của hôm nay ở cuối tài liệu này.</li>\n<li><strong>Quay video</strong> từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>\n<p>Nếu nhóm khách bạn ghi ở Phần 1 của Quy trình hôm qua khác với nhóm vừa chọn hôm nay, bạn sửa Phần 1 cho khớp.</p>",
"kiem": [
"Nhóm khách là một nhóm cụ thể, nghĩ tới một người trong nhóm là bạn hình dung được họ.",
"Mẫu 1 đủ ba khối, và ba khối khớp nhau.",
"Khối 2 ghi vấn đề và điều khách muốn bằng đời sống của khách, không bằng tên sản phẩm.",
"Mỗi ô đã đánh dấu đã nghe từ khách hay đang đoán.",
"Có một điều cần hỏi lại khách thật.",
"Sản phẩm vẫn là sản phẩm của Ngày 1.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video trả lời đủ ba câu, trong đó nêu ít nhất một điều bạn sẽ đổi trong cách tư vấn."
],
"nopSau": [
"Nộp Mẫu 1 đã điền và video Ngày 2. Mẫu 2 là để bạn dùng, không cần nộp.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong ngày học. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
]
},
"3": {
"ten": "Mở đầu buổi tư vấn",
"hua": "Sau ngày hôm nay, bạn sẽ có hai thứ. Một phần mở đầu viết bằng lời của chính bạn, đủ ba phần, và một video ngắn bạn đóng vai chính phần mở đầu đó để tự nghe lại.",
"phan": [
{
"tieu": "Mẫu 1. Kịch bản mở đầu",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Viết bằng lời bạn thường nói. Xưng hô theo cách bạn vẫn dùng với khách.</p>"
},
{
"h": "<h4>Phần A. Chuẩn bị trước buổi</h4>"
},
{
"tieu": "Dòng 1",
"o": [
{
"id": "n3-0-0-0-0",
"nhan": "Điều bạn biết hoặc đoán",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 1 · Điều bạn biết hoặc đoán"
},
{
"id": "n3-0-0-0-1",
"nhan": "Đã nghe hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 1 · Đã nghe hay đang đoán"
},
{
"id": "n3-0-0-0-2",
"nhan": "Giúp bạn mở đầu thế nào",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 1 · Giúp bạn mở đầu thế nào"
}
]
},
{
"tieu": "Dòng 2",
"o": [
{
"id": "n3-0-0-1-0",
"nhan": "Điều bạn biết hoặc đoán",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 2 · Điều bạn biết hoặc đoán"
},
{
"id": "n3-0-0-1-1",
"nhan": "Đã nghe hay đang đoán",
"dong": 1,
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 2 · Đã nghe hay đang đoán"
},
{
"id": "n3-0-0-1-2",
"nhan": "Giúp bạn mở đầu thế nào",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Dòng 2 · Giúp bạn mở đầu thế nào"
}
]
},
{
"o": [
{
"id": "n3-0-1-0-1",
"nhan": "Một điều bạn cần hỏi lại khách thật",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Một điều bạn cần hỏi lại khách thật"
},
{
"id": "n3-0-1-1-1",
"nhan": "Ý định của bạn cho buổi này, về cách làm, không phải kết quả",
"ten": "Mẫu 1 · Phần A. Chuẩn bị trước buổi · Ý định của bạn cho buổi này, về cách làm, không phải kết quả"
}
]
},
{
"h": "<h4>Phần B. Bốn câu bạn sẽ nói</h4>"
},
{
"h": "<p>Chào và kết nối chỉ cần một hai câu, nhắc đến hoàn cảnh của khách, càng ngắn càng tốt.</p>"
},
{
"o": [
{
"id": "n3-0-2-0-1",
"nhan": "Chào và kết nối",
"ten": "Mẫu 1 · Phần B. Bốn câu bạn sẽ nói · Chào và kết nối"
},
{
"id": "n3-0-2-1-1",
"nhan": "1. Lý do, mục tiêu",
"ten": "Mẫu 1 · Phần B. Bốn câu bạn sẽ nói · 1. Lý do, mục tiêu"
},
{
"id": "n3-0-2-2-1",
"nhan": "2. Không ép",
"ten": "Mẫu 1 · Phần B. Bốn câu bạn sẽ nói · 2. Không ép"
},
{
"id": "n3-0-2-3-1",
"nhan": "3. Xin phép hỏi sâu",
"ten": "Mẫu 1 · Phần B. Bốn câu bạn sẽ nói · 3. Xin phép hỏi sâu"
}
]
}
]
},
{
"tieu": "Mẫu 2. Bảng tự kiểm tra phần mở đầu",
"cot": "Mẫu 2",
"nhom": [
{
"h": "<p>Đọc to phần mở đầu của bạn hoặc nghe lại video quay thử, rồi mỗi dòng ghi Có hoặc Chưa. Dòng nào Chưa thì ghi bạn sẽ sửa thế nào.</p>"
},
{
"tieu": "Tôi nói rõ mục tiêu của buổi ngay từ đầu",
"o": [
{
"id": "n3-1-0-0-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi nói rõ mục tiêu của buổi ngay từ đầu · Có / Chưa"
},
{
"id": "n3-1-0-0-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi nói rõ mục tiêu của buổi ngay từ đầu · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Tôi nói rõ là khách không phải quyết định hôm nay",
"o": [
{
"id": "n3-1-0-1-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi nói rõ là khách không phải quyết định hôm nay · Có / Chưa"
},
{
"id": "n3-1-0-1-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi nói rõ là khách không phải quyết định hôm nay · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Tôi nói rõ là khách có quyền dừng hoặc để lại câu chưa muốn trả lời",
"o": [
{
"id": "n3-1-0-2-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi nói rõ là khách có quyền dừng hoặc để lại câu chưa muốn trả lời · Có / Chưa"
},
{
"id": "n3-1-0-2-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi nói rõ là khách có quyền dừng hoặc để lại câu chưa muốn trả lời · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Tôi xin phép trước khi hỏi sâu",
"o": [
{
"id": "n3-1-0-3-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi xin phép trước khi hỏi sâu · Có / Chưa"
},
{
"id": "n3-1-0-3-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi xin phép trước khi hỏi sâu · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Phần chào và giới thiệu bản thân chỉ một hai câu",
"o": [
{
"id": "n3-1-0-4-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Phần chào và giới thiệu bản thân chỉ một hai câu · Có / Chưa"
},
{
"id": "n3-1-0-4-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Phần chào và giới thiệu bản thân chỉ một hai câu · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Tôi chưa nhắc sản phẩm, giải pháp hay giá trong phần mở",
"o": [
{
"id": "n3-1-0-5-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi chưa nhắc sản phẩm, giải pháp hay giá trong phần mở · Có / Chưa"
},
{
"id": "n3-1-0-5-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi chưa nhắc sản phẩm, giải pháp hay giá trong phần mở · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Tôi nói chậm, rõ, không vội",
"o": [
{
"id": "n3-1-0-6-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Tôi nói chậm, rõ, không vội · Có / Chưa"
},
{
"id": "n3-1-0-6-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Tôi nói chậm, rõ, không vội · Bạn sẽ sửa thế nào"
}
]
},
{
"tieu": "Câu chữ là của tôi, không đọc như đọc bài",
"o": [
{
"id": "n3-1-0-7-1",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"ten": "Mẫu 2 · Câu chữ là của tôi, không đọc như đọc bài · Có / Chưa"
},
{
"id": "n3-1-0-7-2",
"nhan": "Bạn sẽ sửa thế nào",
"ten": "Mẫu 2 · Câu chữ là của tôi, không đọc như đọc bài · Bạn sẽ sửa thế nào"
}
]
},
{
"h": "<p>Nếu bạn đã thử với người thật thì thêm hai dòng: khách có nói nhiều hơn bạn trong mấy phút đầu không, và khách có trả lời đầy đủ các câu bạn hỏi không. Quay một mình thì bỏ hai dòng này. Lần đầu chưa cần dòng nào cũng được Có.</p>"
}
]
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Đây là trang thứ ba của bộ quy trình bạn sẽ ráp ở Ngày 7. Hãy chép từ Mẫu 1 sang, chọn câu bạn thấy đúng nhất sau khi sửa.</p>"
},
{
"h": "<h4>Phần 4. Mở đầu</h4>"
},
{
"o": [
{
"id": "n3-3-0-0-1",
"nhan": "Chuẩn bị: bạn đã biết gì về khách trước buổi này",
"ten": "Quy trình · Phần 4. Mở đầu · Chuẩn bị: bạn đã biết gì về khách trước buổi này",
"qp": "Phần 4. Mở đầu"
},
{
"id": "n3-3-0-1-1",
"nhan": "Câu chào và kết nối",
"ten": "Quy trình · Phần 4. Mở đầu · Câu chào và kết nối",
"qp": "Phần 4. Mở đầu"
},
{
"id": "n3-3-0-2-1",
"nhan": "Lý do của buổi nói chuyện hôm nay",
"ten": "Quy trình · Phần 4. Mở đầu · Lý do của buổi nói chuyện hôm nay",
"qp": "Phần 4. Mở đầu"
},
{
"id": "n3-3-0-3-1",
"nhan": "Câu nói rõ bạn không ép khách mua",
"ten": "Quy trình · Phần 4. Mở đầu · Câu nói rõ bạn không ép khách mua",
"qp": "Phần 4. Mở đầu"
},
{
"id": "n3-3-0-4-1",
"nhan": "Câu xin phép hỏi sâu hơn",
"ten": "Quy trình · Phần 4. Mở đầu · Câu xin phép hỏi sâu hơn",
"qp": "Phần 4. Mở đầu"
}
]
},
{
"o": [
{
"id": "n3-3-1-0-1",
"nhan": "Điều bạn đã bỏ hoặc sửa sau khi quay thử",
"ten": "Quy trình · Phần 4. Mở đầu · Điều bạn đã bỏ hoặc sửa sau khi quay thử",
"qp": "Phần 4. Mở đầu"
}
]
},
{
"h": "<p>Phần 1 bạn làm ở Ngày 1, phần 2 ở Ngày 2, phần 3 bạn sửa lại ở Ngày 7. Các phần sau làm ở những ngày tiếp theo.</p>\n<aside class=\"goi\"><strong>Ngày mai.</strong> Hãy giữ câu xin phép hỏi sâu ở cuối phần mở đầu, vì Ngày 4 bắt đầu ngay từ đó. Chúng ta sẽ học cách hỏi để hiểu khách muốn đạt điều gì và điều gì đang cản họ, trước khi bạn nghĩ tới chuyện đề xuất.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 3",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video từ một tới ba phút:</p>\n<ol>\n<li>Nói một câu cho biết bạn bán gì và khách trong video là ai (theo chân dung Ngày 2).</li>\n<li>Đóng vai phần mở đầu của bạn, nói với màn hình như khách đang ngồi trước mặt: chào, lý do, không ép, xin phép.</li>\n<li>Dừng lại, quay sang nói với người xem và kết video bằng câu hỏi \"Tôi đã bỏ hoặc sửa điều gì?\", rồi trả lời bằng một hai câu.</li>\n</ol>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Bạn không cần nói trôi chảy, quay lại bao nhiêu lần cũng được, rồi nộp bản bạn thấy ổn nhất. Đừng đưa tên, số điện thoại hay tin nhắn thật của khách vào video. Quay một mình thì ghi <strong>MÔ PHỎNG</strong> ở đầu video.</aside>"
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
"viec": "<ol>\n<li>Mở chân dung khách Ngày 2 và chọn một khách điển hình trong nhóm đó, để viết phần mở đầu cho họ.</li>\n<li>Điền Mẫu 1, kịch bản mở đầu: phần A là việc chuẩn bị, phần B là bốn câu bạn sẽ nói.</li>\n<li>Đóng vai và đọc thành tiếng phần mở đầu của bạn ít nhất một lần, như đang nói với một người ngồi trước mặt.</li>\n<li>Tự kiểm tra bằng Mẫu 2, sửa chỗ chưa ổn rồi đọc lại.</li>\n<li>Điền phần Quy trình của hôm nay, ở cuối tài liệu này.</li>\n<li>Quay video từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Mẫu 1 đã điền cả phần A và phần B.",
"Phần mở đầu có đủ ba phần: lý do và mục tiêu, không ép, xin phép hỏi sâu.",
"Câu không ép khách do chính tôi viết, không chép nguyên câu mẫu.",
"Phần chào và giới thiệu chỉ một hai câu, chưa nhắc sản phẩm hay giá.",
"Đã đọc to ít nhất một lần và sửa chỗ nói cứng.",
"Mẫu 2 đã điền, dòng nào Chưa thì có ghi cách sửa.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Nếu quay một mình, đã ghi MÔ PHỎNG.",
"Video dài từ một tới ba phút, kết bằng câu \"Tôi đã bỏ hoặc sửa điều gì?\"."
],
"nopSau": [
"Nộp Mẫu 1 và video Ngày 3. Mẫu 2 nộp nếu bạn đã điền.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong ngày học. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
]
},
"4": {
"ten": "Hỏi để hiểu động lực và điểm nghẽn của khách",
"hua": "Sau ngày hôm nay, bạn sẽ có hai thứ. Một bộ năm tới bảy câu hỏi bạn thực sự sẽ hỏi khách, xếp theo đúng thứ tự, và một câu tóm tắt để nói lại điều khách vừa chia sẻ, giữ đúng những từ khách đã dùng.",
"phan": [
{
"tieu": "Mẫu 1. Bộ câu hỏi của bạn",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Đọc các câu gợi ý, rồi chọn 5 tới 7 câu bạn thực sự sẽ hỏi và ghi lại bằng cách bạn nói. Đọc to lên, câu nào bạn không nói trơn tru với khách thì đổi cho tới khi nói được.</p>\n<p>Thứ tự hỏi là nhóm A trước, nhóm B sau, nhóm C cuối, và phải có ít nhất một câu ở nhóm C. Khung \"vài tháng tới\" ở nhóm C bạn đổi theo ngành của mình, miễn còn ở mức gần và khách nhìn thấy được.</p>"
},
{
"tieu": "A. Khách muốn đạt điều gì",
"o": [
{
"id": "n4-0-0-0-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Em muốn hiểu rõ hơn một chút: điều gì khiến anh chị quan tâm đến chuyện này đúng lúc này ạ?\"",
"ten": "Mẫu 1 · A. Khách muốn đạt điều gì · Câu bạn sẽ hỏi, theo cách bạn nói"
}
]
},
{
"tieu": "A. Khách muốn đạt điều gì",
"o": [
{
"id": "n4-0-0-1-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Nếu mọi thứ diễn ra đúng như anh chị mong, anh chị muốn đạt được điều gì ạ?\"",
"ten": "Mẫu 1 · A. Khách muốn đạt điều gì · Câu bạn sẽ hỏi, theo cách bạn nói (2)"
}
]
},
{
"tieu": "A. Khách muốn đạt điều gì",
"o": [
{
"id": "n4-0-0-2-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Nếu đạt được điều đó, cuộc sống hoặc công việc của anh chị sẽ khác đi thế nào ạ?\"",
"ten": "Mẫu 1 · A. Khách muốn đạt điều gì · Câu bạn sẽ hỏi, theo cách bạn nói (3)"
}
]
},
{
"tieu": "A. Khách muốn đạt điều gì",
"o": [
{
"id": "n4-0-0-3-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Nếu chấm từ 1 tới 10, điều đó quan trọng với anh chị tới đâu? Anh chị nói thêm giúp em vì sao chấm mức đó ạ.\"",
"ten": "Mẫu 1 · A. Khách muốn đạt điều gì · Câu bạn sẽ hỏi, theo cách bạn nói (4)"
}
]
},
{
"tieu": "B. Điều gì đang cản khách",
"o": [
{
"id": "n4-0-0-4-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Với mục tiêu anh chị vừa chia sẻ, hiện tại điều gì đang khiến anh chị chưa đạt được như mong muốn ạ?\"",
"ten": "Mẫu 1 · B. Điều gì đang cản khách · Câu bạn sẽ hỏi, theo cách bạn nói"
}
]
},
{
"tieu": "B. Điều gì đang cản khách",
"o": [
{
"id": "n4-0-0-5-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Trước đây anh chị đã thử những cách nào rồi ạ?\"",
"ten": "Mẫu 1 · B. Điều gì đang cản khách · Câu bạn sẽ hỏi, theo cách bạn nói (2)"
}
]
},
{
"tieu": "B. Điều gì đang cản khách",
"o": [
{
"id": "n4-0-0-6-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Trong những cách đó, cách nào đem lại kết quả tốt nhất, và phần nào khó nhất với anh chị ạ?\"",
"ten": "Mẫu 1 · B. Điều gì đang cản khách · Câu bạn sẽ hỏi, theo cách bạn nói (3)"
}
]
},
{
"tieu": "C. Nếu giữ nguyên thì sao",
"o": [
{
"id": "n4-0-0-7-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Nếu tình trạng này tiếp tục trong vài tháng tới, anh chị nghĩ điều gì sẽ xảy ra ạ?\"",
"ten": "Mẫu 1 · C. Nếu giữ nguyên thì sao · Câu bạn sẽ hỏi, theo cách bạn nói"
}
]
},
{
"tieu": "C. Nếu giữ nguyên thì sao",
"o": [
{
"id": "n4-0-0-8-2",
"nhan": "Câu bạn sẽ hỏi, theo cách bạn nói",
"goi": "Câu gợi ý: \"Trong ngắn hạn, chuyện này đang ảnh hưởng tới anh chị ở điểm nào nhiều nhất ạ?\"",
"ten": "Mẫu 1 · C. Nếu giữ nguyên thì sao · Câu bạn sẽ hỏi, theo cách bạn nói (2)"
}
]
}
]
},
{
"tieu": "Mẫu 2. Phiếu tự kiểm tra bộ câu hỏi",
"cot": "Mẫu 2",
"nhom": [
{
"h": "<p>Đây là công cụ riêng cho bạn, không phải nộp. Đọc lại bộ câu đã chọn ở Mẫu 1, trả lời từng dòng rồi sửa.</p>"
},
{
"tieu": "Câu hỏi mong muốn đứng trước, câu hỏi vướng mắc đứng sau?",
"o": [
{
"id": "n4-1-0-0-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Câu hỏi mong muốn đứng trước, câu hỏi vướng mắc đứng sau? · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-0-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Câu hỏi mong muốn đứng trước, câu hỏi vướng mắc đứng sau? · Sửa thế nào"
}
]
},
{
"tieu": "Có ít nhất một câu hỏi thang 1 tới 10 về mức quan trọng, kèm lời mời khách nói thêm?",
"o": [
{
"id": "n4-1-0-1-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Có ít nhất một câu hỏi thang 1 tới 10 về mức quan trọng, kèm lời mời khách nói thêm? · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-1-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Có ít nhất một câu hỏi thang 1 tới 10 về mức quan trọng, kèm lời mời khách nói thêm? · Sửa thế nào"
}
]
},
{
"tieu": "Có câu nào nghe như đang trách khách, ví dụ \"Vì sao anh chị chưa làm được?\" hay \"Người khác làm được mà?\"",
"o": [
{
"id": "n4-1-0-2-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Có câu nào nghe như đang trách khách, ví dụ \"Vì sao anh chị chưa làm được?\" hay \"Người khác làm được mà?\" · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-2-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Có câu nào nghe như đang trách khách, ví dụ \"Vì sao anh chị chưa làm được?\" hay \"Người khác làm được mà?\" · Sửa thế nào"
}
]
},
{
"tieu": "Có ít nhất một câu để khách tự nói chuyện gì xảy ra nếu giữ nguyên?",
"o": [
{
"id": "n4-1-0-3-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Có ít nhất một câu để khách tự nói chuyện gì xảy ra nếu giữ nguyên? · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-3-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Có ít nhất một câu để khách tự nói chuyện gì xảy ra nếu giữ nguyên? · Sửa thế nào"
}
]
},
{
"tieu": "Có câu nào thực ra là giới thiệu sản phẩm trá hình?",
"o": [
{
"id": "n4-1-0-4-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Có câu nào thực ra là giới thiệu sản phẩm trá hình? · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-4-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Có câu nào thực ra là giới thiệu sản phẩm trá hình? · Sửa thế nào"
}
]
},
{
"tieu": "Đọc to lên, bạn nói câu nào cũng trơn tru, không có câu nào chỉ viết ra mới thấy ổn?",
"o": [
{
"id": "n4-1-0-5-1",
"nhan": "Đã ổn / Cần sửa",
"chon": [
"Đã ổn",
"Cần sửa"
],
"ten": "Mẫu 2 · Đọc to lên, bạn nói câu nào cũng trơn tru, không có câu nào chỉ viết ra mới thấy ổn? · Đã ổn / Cần sửa"
},
{
"id": "n4-1-0-5-3",
"nhan": "Sửa thế nào",
"ten": "Mẫu 2 · Đọc to lên, bạn nói câu nào cũng trơn tru, không có câu nào chỉ viết ra mới thấy ổn? · Sửa thế nào"
}
]
},
{
"h": "<p>Câu hỏi tốt là câu mở, ngắn, và để khách nói nhiều hơn bạn. Nếu cả bộ câu của bạn chỉ để khách trả lời \"có\" hoặc \"không\" thì hãy sửa.</p>"
}
],
"rieng": 1
},
{
"tieu": "Mẫu 3. Câu tóm tắt cho khách nghe",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Viết sau khi đóng vai xong, dựa trên đúng điều \"khách\" đã nói và giữ nguyên những từ \"khách\" đã dùng.</p>"
},
{
"o": [
{
"id": "n4-2-0-0-1",
"nhan": "Khách muốn đạt điều gì",
"ten": "Mẫu 3 · Khách muốn đạt điều gì"
},
{
"id": "n4-2-0-1-1",
"nhan": "Khách đang vướng ở đâu",
"ten": "Mẫu 3 · Khách đang vướng ở đâu"
},
{
"id": "n4-2-0-2-1",
"nhan": "Nếu để vậy thì chuyện gì xảy ra",
"ten": "Mẫu 3 · Nếu để vậy thì chuyện gì xảy ra"
}
]
},
{
"o": [
{
"id": "n4-2-1-0",
"nhan": "Câu tóm tắt hoàn chỉnh, đọc to được trong khoảng nửa phút",
"goi": "\"Để em xem em hiểu đúng chưa: anh chị muốn ......, nhưng đang vướng ......, và nếu để vậy thì ....... Em hiểu vậy có đúng không ạ?\"",
"ten": "Mẫu 3 · Câu tóm tắt hoàn chỉnh, đọc to được trong khoảng nửa phút"
}
]
}
]
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Hôm nay bạn thêm Phần 5 vào bộ quy trình sẽ ráp ở Ngày 7. Hãy chép gọn từ Mẫu 1 và Mẫu 3.</p>"
},
{
"h": "<h4>Phần 5. Câu hỏi để hiểu khách</h4>"
},
{
"o": [
{
"id": "n4-4-0-0-1",
"nhan": "Câu 1",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 1",
"qp": "Phần 5. Câu hỏi để hiểu khách"
},
{
"id": "n4-4-0-1-1",
"nhan": "Câu 2",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 2",
"qp": "Phần 5. Câu hỏi để hiểu khách"
},
{
"id": "n4-4-0-2-1",
"nhan": "Câu 3, thang 1 tới 10",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 3, thang 1 tới 10",
"qp": "Phần 5. Câu hỏi để hiểu khách"
}
]
},
{
"o": [
{
"id": "n4-4-1-0-1",
"nhan": "Câu 4",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 4",
"qp": "Phần 5. Câu hỏi để hiểu khách"
},
{
"id": "n4-4-1-1-1",
"nhan": "Câu 5",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 5",
"qp": "Phần 5. Câu hỏi để hiểu khách"
},
{
"id": "n4-4-1-2-1",
"nhan": "Câu 6, nếu giữ nguyên",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu 6, nếu giữ nguyên",
"qp": "Phần 5. Câu hỏi để hiểu khách"
}
]
},
{
"o": [
{
"id": "n4-4-2-0",
"nhan": "Câu tóm tắt lại cho khách nghe",
"goi": "\"Để em xem em hiểu đúng chưa: anh chị muốn ......, nhưng đang vướng ......, và nếu để vậy thì ....... Em hiểu vậy có đúng không ạ?\"",
"ten": "Quy trình · Phần 5. Câu hỏi để hiểu khách · Câu tóm tắt lại cho khách nghe",
"qp": "Phần 5. Câu hỏi để hiểu khách"
}
]
},
{
"h": "<aside class=\"goi\"><strong>Ngày mai.</strong> Giữ Mẫu 3 bên cạnh. Ngày 5, bạn mở phần đề xuất bằng chính câu tóm tắt này, và điều khách muốn đạt hôm nay sẽ giúp bạn ở Ngày 6, khi khách còn băn khoăn.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 4",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video từ một tới ba phút: đóng vai đoạn hỏi và tóm tắt lại. Trong video, bạn làm ba việc:</p>\n<ol>\n<li>Hỏi ít nhất hai câu về điều khách muốn đạt, rồi mới chuyển sang câu về điều đang cản.</li>\n<li>Hỏi ít nhất một câu để khách tự nói chuyện gì xảy ra nếu giữ nguyên.</li>\n<li>Đọc câu tóm tắt, giữ đúng lời khách nói, rồi hỏi khách mình hiểu đã đúng chưa.</li>\n</ol>\n<aside class=\"goi\">Quay một mình thì bạn đóng cả hai vai, và nói rõ ở đầu video rằng đây là <strong>MÔ PHỎNG</strong>. Đừng đưa tên, số điện thoại hay tin nhắn thật của khách vào video. Video không cần dựng, quay bằng điện thoại là đủ.</aside>"
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
"viec": "<ol>\n<li>Mở lại trang chân dung khách ở Ngày 2. Mọi câu hỏi hôm nay dành cho đúng nhóm khách đó.</li>\n<li>Chọn 5 tới 7 câu ở Mẫu 1. Chọn câu bạn thực sự sẽ hỏi, sửa theo cách bạn nói rồi xếp theo thứ tự hỏi.</li>\n<li>Tự kiểm tra bằng Mẫu 2, rồi sửa câu chưa ổn.</li>\n<li>Đóng vai một cuộc hỏi đáp. Nhờ một người đóng khách, hoặc tự nói cả hai vai thành tiếng, rồi ghi lại điều \"khách\" nói.</li>\n<li>Viết câu tóm tắt ở Mẫu 3 từ chính phần khách vừa nói.</li>\n<li>Điền phần Quy trình của hôm nay, ở cuối tài liệu này.</li>\n<li>Quay video từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Mẫu 1 có 5 tới 7 câu, xếp đúng thứ tự: mong muốn trước, vướng mắc sau.",
"Có ít nhất một câu cho khách tự nói chuyện gì xảy ra nếu giữ nguyên.",
"Không câu nào nghe như đang trách khách hay dọa khách.",
"Câu tóm tắt giữ đúng lời khách nói, và kết thúc bằng việc hỏi khách mình hiểu đã đúng chưa.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Video dài từ một tới ba phút, có đủ ba việc ở đề bài. Quay một mình thì đã nói rõ là MÔ PHỎNG."
],
"nopSau": [
"Nộp Mẫu 1, Mẫu 3 và video Ngày 4. Mẫu 2 là công cụ của riêng bạn, không cần nộp.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong ngày học. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
]
},
"5": {
"ten": "Trình bày giải pháp khớp điều khách cần",
"hua": "Sau ngày hôm nay, bạn sẽ có hai thứ. Một đoạn đề xuất ngắn, mở bằng chính điều khách đã nói và nói rõ vì sao hợp, hợp tới đâu. Cùng một lần xem lại từng lời hứa, để không câu nào vượt quá những gì bạn chứng minh được.",
"phan": [
{
"tieu": "Mẫu 1. Khung đề xuất bốn phần",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Không ghi tên, số điện thoại hay thông tin riêng của khách, chỉ ghi nhóm khách bạn đã chọn ở Ngày 2.</p>"
},
{
"h": "<h4>Phần A. Kiểm tra độ phù hợp trước khi trình bày</h4>"
},
{
"tieu": "Hợp với điều khách muốn đạt",
"o": [
{
"id": "n5-0-0-0-1",
"nhan": "Câu bạn sẽ hỏi khách",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với điều khách muốn đạt · Câu bạn sẽ hỏi khách"
},
{
"id": "n5-0-0-0-2",
"nhan": "Rõ hay chưa rõ",
"chon": [
"Rõ",
"Chưa rõ"
],
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với điều khách muốn đạt · Rõ hay chưa rõ"
},
{
"id": "n5-0-0-0-3",
"nhan": "Nếu chưa rõ, câu hỏi thêm",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với điều khách muốn đạt · Nếu chưa rõ, câu hỏi thêm"
}
]
},
{
"tieu": "Hợp với chỗ đang vướng",
"o": [
{
"id": "n5-0-0-1-1",
"nhan": "Câu bạn sẽ hỏi khách",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với chỗ đang vướng · Câu bạn sẽ hỏi khách"
},
{
"id": "n5-0-0-1-2",
"nhan": "Rõ hay chưa rõ",
"chon": [
"Rõ",
"Chưa rõ"
],
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với chỗ đang vướng · Rõ hay chưa rõ"
},
{
"id": "n5-0-0-1-3",
"nhan": "Nếu chưa rõ, câu hỏi thêm",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với chỗ đang vướng · Nếu chưa rõ, câu hỏi thêm"
}
]
},
{
"tieu": "Hợp với hoàn cảnh và khả năng hiện tại",
"o": [
{
"id": "n5-0-0-2-1",
"nhan": "Câu bạn sẽ hỏi khách",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với hoàn cảnh và khả năng hiện tại · Câu bạn sẽ hỏi khách"
},
{
"id": "n5-0-0-2-2",
"nhan": "Rõ hay chưa rõ",
"chon": [
"Rõ",
"Chưa rõ"
],
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với hoàn cảnh và khả năng hiện tại · Rõ hay chưa rõ"
},
{
"id": "n5-0-0-2-3",
"nhan": "Nếu chưa rõ, câu hỏi thêm",
"ten": "Mẫu 1 · Phần A. Kiểm tra độ phù hợp trước khi trình bày · Hợp với hoàn cảnh và khả năng hiện tại · Nếu chưa rõ, câu hỏi thêm"
}
]
},
{
"h": "<h4>Phần B. Bốn phần của đoạn đề xuất</h4>"
},
{
"o": [
{
"id": "n5-0-1-0-1",
"nhan": "1. Nhắc lại điều khách đã nói. Dùng câu tóm tắt của Ngày 4",
"ten": "Mẫu 1 · Phần B. Bốn phần của đoạn đề xuất · 1. Nhắc lại điều khách đã nói. Dùng câu tóm tắt của Ngày 4"
},
{
"id": "n5-0-1-1-1",
"nhan": "2. Hướng tiếp cận, chưa nói tên sản phẩm",
"ten": "Mẫu 1 · Phần B. Bốn phần của đoạn đề xuất · 2. Hướng tiếp cận, chưa nói tên sản phẩm"
},
{
"id": "n5-0-1-2-1",
"nhan": "3. Vì sao hợp với khách này. Gồm: giới hạn của hướng này, và bằng chứng bạn được phép dùng",
"ten": "Mẫu 1 · Phần B. Bốn phần của đoạn đề xuất · 3. Vì sao hợp với khách này. Gồm: giới hạn của hướng này, và bằng chứng bạn được phép dùng"
},
{
"id": "n5-0-1-3-1",
"nhan": "4. Kiểm tra lại và xin phép nói chi tiết",
"ten": "Mẫu 1 · Phần B. Bốn phần của đoạn đề xuất · 4. Kiểm tra lại và xin phép nói chi tiết"
}
]
}
]
},
{
"tieu": "Mẫu 2. Bảng đối chiếu nhu cầu và lợi ích",
"cot": "Mẫu 2",
"nhom": [
{
"h": "<p>Mỗi dòng bắt đầu từ lời khách, không bắt đầu từ tính năng của sản phẩm. Sản phẩm có tính năng nào mà khách chưa hề nhắc tới thì không đưa vào đề xuất.</p>"
},
{
"tieu": "Dòng 1",
"o": [
{
"id": "n5-1-0-0-0",
"nhan": "Khách quan tâm điều gì, theo lời khách",
"ten": "Mẫu 2 · Dòng 1 · Khách quan tâm điều gì, theo lời khách"
},
{
"id": "n5-1-0-0-1",
"nhan": "Sản phẩm thực sự giúp được phần nào",
"ten": "Mẫu 2 · Dòng 1 · Sản phẩm thực sự giúp được phần nào"
},
{
"id": "n5-1-0-0-2",
"nhan": "Bằng chứng nào được phép nói",
"ten": "Mẫu 2 · Dòng 1 · Bằng chứng nào được phép nói"
},
{
"id": "n5-1-0-0-3",
"nhan": "Giới hạn: phần nào chưa giúp được",
"ten": "Mẫu 2 · Dòng 1 · Giới hạn: phần nào chưa giúp được"
}
]
},
{
"tieu": "Dòng 2",
"o": [
{
"id": "n5-1-0-1-0",
"nhan": "Khách quan tâm điều gì, theo lời khách",
"ten": "Mẫu 2 · Dòng 2 · Khách quan tâm điều gì, theo lời khách"
},
{
"id": "n5-1-0-1-1",
"nhan": "Sản phẩm thực sự giúp được phần nào",
"ten": "Mẫu 2 · Dòng 2 · Sản phẩm thực sự giúp được phần nào"
},
{
"id": "n5-1-0-1-2",
"nhan": "Bằng chứng nào được phép nói",
"ten": "Mẫu 2 · Dòng 2 · Bằng chứng nào được phép nói"
},
{
"id": "n5-1-0-1-3",
"nhan": "Giới hạn: phần nào chưa giúp được",
"ten": "Mẫu 2 · Dòng 2 · Giới hạn: phần nào chưa giúp được"
}
]
},
{
"tieu": "Dòng 3",
"o": [
{
"id": "n5-1-0-2-0",
"nhan": "Khách quan tâm điều gì, theo lời khách",
"ten": "Mẫu 2 · Dòng 3 · Khách quan tâm điều gì, theo lời khách"
},
{
"id": "n5-1-0-2-1",
"nhan": "Sản phẩm thực sự giúp được phần nào",
"ten": "Mẫu 2 · Dòng 3 · Sản phẩm thực sự giúp được phần nào"
},
{
"id": "n5-1-0-2-2",
"nhan": "Bằng chứng nào được phép nói",
"ten": "Mẫu 2 · Dòng 3 · Bằng chứng nào được phép nói"
},
{
"id": "n5-1-0-2-3",
"nhan": "Giới hạn: phần nào chưa giúp được",
"ten": "Mẫu 2 · Dòng 3 · Giới hạn: phần nào chưa giúp được"
}
]
},
{
"h": "<p>Đã bỏ khỏi đề xuất vì khách chưa nhắc tới: ...................................</p>"
}
]
},
{
"tieu": "Mẫu 3. Phiếu tự kiểm tra lời hứa",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Viết ra từng câu bạn định nói về giá trị hay kết quả của sản phẩm, rồi đánh dấu X vào đúng một cột. Câu ở cột Dự đoán: nói rõ đó là dự đoán, hoặc bỏ. Câu ở cột Cần nguồn hoặc được phép: chưa có nguồn hay chưa hỏi ý thì bỏ.</p>"
},
{
"tieu": "Dòng 1",
"o": [
{
"id": "n5-2-0-0-0",
"nhan": "Câu bạn định nói",
"ten": "Mẫu 3 · Dòng 1 · Câu bạn định nói"
},
{
"id": "n5-2-0-0-1",
"nhan": "Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép",
"chon": [
"Sự thật về sản phẩm",
"Dự đoán của tôi",
"Cần nguồn hoặc được phép"
],
"ten": "Mẫu 3 · Dòng 1 · Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép"
},
{
"id": "n5-2-0-0-4",
"nhan": "Tôi sửa lại thành",
"ten": "Mẫu 3 · Dòng 1 · Tôi sửa lại thành"
}
]
},
{
"tieu": "Dòng 2",
"o": [
{
"id": "n5-2-0-1-0",
"nhan": "Câu bạn định nói",
"ten": "Mẫu 3 · Dòng 2 · Câu bạn định nói"
},
{
"id": "n5-2-0-1-1",
"nhan": "Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép",
"chon": [
"Sự thật về sản phẩm",
"Dự đoán của tôi",
"Cần nguồn hoặc được phép"
],
"ten": "Mẫu 3 · Dòng 2 · Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép"
},
{
"id": "n5-2-0-1-4",
"nhan": "Tôi sửa lại thành",
"ten": "Mẫu 3 · Dòng 2 · Tôi sửa lại thành"
}
]
},
{
"tieu": "Dòng 3",
"o": [
{
"id": "n5-2-0-2-0",
"nhan": "Câu bạn định nói",
"ten": "Mẫu 3 · Dòng 3 · Câu bạn định nói"
},
{
"id": "n5-2-0-2-1",
"nhan": "Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép",
"chon": [
"Sự thật về sản phẩm",
"Dự đoán của tôi",
"Cần nguồn hoặc được phép"
],
"ten": "Mẫu 3 · Dòng 3 · Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép"
},
{
"id": "n5-2-0-2-4",
"nhan": "Tôi sửa lại thành",
"ten": "Mẫu 3 · Dòng 3 · Tôi sửa lại thành"
}
]
},
{
"tieu": "Dòng 4",
"o": [
{
"id": "n5-2-0-3-0",
"nhan": "Câu bạn định nói",
"ten": "Mẫu 3 · Dòng 4 · Câu bạn định nói"
},
{
"id": "n5-2-0-3-1",
"nhan": "Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép",
"chon": [
"Sự thật về sản phẩm",
"Dự đoán của tôi",
"Cần nguồn hoặc được phép"
],
"ten": "Mẫu 3 · Dòng 4 · Sự thật về sản phẩm / Dự đoán của tôi / Cần nguồn hoặc được phép"
},
{
"id": "n5-2-0-3-4",
"nhan": "Tôi sửa lại thành",
"ten": "Mẫu 3 · Dòng 4 · Tôi sửa lại thành"
}
]
}
]
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Đây là Phần 6 của bộ quy trình bạn sẽ ráp ở Ngày 7. Chép từ Mẫu 1 sang, viết gọn bằng lời của bạn.</p>"
},
{
"h": "<h4>Phần 6. Đề xuất</h4>"
},
{
"h": "<p><strong>Trước khi trình bày, bạn tự hỏi ba câu:</strong> cách này có hợp với điều khách muốn đạt không, có hợp với chỗ khách đang vướng không, và có hợp với hoàn cảnh, khả năng hiện tại của khách không. Còn một câu \"chưa rõ\" thì quay lại hỏi thêm, chưa trình bày.</p>"
},
{
"o": [
{
"id": "n5-4-0-0-1",
"nhan": "1. Nhắc lại điều khách đã nói. Chép câu tóm tắt ở Ngày 4",
"ten": "Quy trình · Phần 6. Đề xuất · 1. Nhắc lại điều khách đã nói. Chép câu tóm tắt ở Ngày 4",
"qp": "Phần 6. Đề xuất"
},
{
"id": "n5-4-0-1-1",
"nhan": "2. Hướng tiếp cận, chưa nói tên sản phẩm",
"ten": "Quy trình · Phần 6. Đề xuất · 2. Hướng tiếp cận, chưa nói tên sản phẩm",
"qp": "Phần 6. Đề xuất"
},
{
"id": "n5-4-0-2-1",
"nhan": "3. Vì sao hợp. Gồm giới hạn và bằng chứng bạn được phép dùng",
"ten": "Quy trình · Phần 6. Đề xuất · 3. Vì sao hợp. Gồm giới hạn và bằng chứng bạn được phép dùng",
"qp": "Phần 6. Đề xuất"
},
{
"id": "n5-4-0-3-1",
"nhan": "4. Kiểm tra lại và xin phép nói chi tiết",
"ten": "Quy trình · Phần 6. Đề xuất · 4. Kiểm tra lại và xin phép nói chi tiết",
"qp": "Phần 6. Đề xuất"
}
]
},
{
"o": [
{
"id": "n5-4-1-0-1",
"nhan": "Lời hứa bạn đã bỏ vì không có bằng chứng",
"ten": "Quy trình · Phần 6. Đề xuất · Lời hứa bạn đã bỏ vì không có bằng chứng",
"qp": "Phần 6. Đề xuất"
}
]
},
{
"h": "<p>Các phần khác của bộ quy trình bạn làm ở những ngày còn lại.</p>\n<aside class=\"goi\"><strong>Ngày mai.</strong> Sau phần đề xuất, nhiều khách sẽ nói ra điều còn lăn tăn. Ngày 6 chúng ta học cách hỏi để hiểu khách đang lo điều gì trước khi trả lời, và cùng khách hẹn một bước tiếp theo cụ thể.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 5",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video từ <strong>một tới ba phút</strong>, đóng vai đoạn trình bày trong một cuộc tư vấn. Trong video phải nghe được:</p>\n<ol>\n<li>Câu bạn hỏi để kiểm tra độ phù hợp, ít nhất một câu.</li>\n<li>Điều khách cần được nhắc lại đúng bằng lời của khách.</li>\n<li>Hướng tiếp cận và lý do nó hợp với khách này, kèm giới hạn.</li>\n<li>Câu kiểm tra lại và xin phép nói chi tiết.</li>\n</ol>\n<p>Bạn có thể kết video bằng một câu: hôm nay mình đã bỏ điều gì so với cách trình bày cũ.</p>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Quay một mình thì ghi <strong>MÔ PHỎNG</strong> ngay đầu video. Sau câu kiểm tra, bạn có thể dừng một nhịp và nói thành tiếng câu trả lời bạn đoán khách sẽ đáp. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
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
"viec": "<ol>\n<li>Mở lại hai thứ bạn đã có: nhóm khách ở Ngày 2 và câu tóm tắt ở Ngày 4.</li>\n<li>Điền phần A của Mẫu 1: trả lời ba câu về độ phù hợp. Còn câu nào \"chưa rõ\" thì ghi luôn câu bạn sẽ hỏi thêm.</li>\n<li>Điền Mẫu 2, bảng đối chiếu: khách quan tâm điều gì, sản phẩm giúp được phần nào, bằng chứng nào được phép nói, giới hạn là gì. Điều khách không nhắc tới thì bỏ khỏi đề xuất.</li>\n<li>Điền phần B của Mẫu 1: bốn phần của đoạn đề xuất, viết bằng lời bạn sẽ nói.</li>\n<li>Xem lại từng lời hứa bằng Mẫu 3, rồi sửa Mẫu 1 theo kết quả.</li>\n<li>Điền phần Quy trình của hôm nay, ở cuối tài liệu này.</li>\n<li>Quay video từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Có câu kiểm tra độ phù hợp trước khi trình bày. Điều nào chưa rõ thì đã có câu hỏi thêm.",
"Đoạn đề xuất mở bằng câu tóm tắt của Ngày 4, đúng lời khách.",
"Hai phần đầu chưa nói tên sản phẩm hay tính năng.",
"Đề xuất trả lời đúng điều khách đã nói, không kể thêm điều khách chưa nhắc tới.",
"Có nói giới hạn của hướng này.",
"Mẫu 3 đã xem lại. Không còn lời hứa doanh thu hay con số không có nguồn.",
"Bằng chứng về khách cũ chỉ dùng khi đã hỏi ý, và đã ẩn danh.",
"Kết thúc bằng câu kiểm tra lại và xin phép, không bằng câu nài khách quyết định.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Nếu quay một mình, đã ghi MÔ PHỎNG. Video dài từ một tới ba phút."
],
"nopSau": [
"Nộp Mẫu 1, Mẫu 3 và video Ngày 5. Mẫu 2 nộp thêm nếu bạn muốn.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong ngày học. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
]
},
"6": {
"ten": "Hiểu băn khoăn của khách và thống nhất bước tiếp",
"hua": "Sau ngày hôm nay, bạn sẽ có hai thứ. Một cách xử lý cho băn khoăn khách hay nói nhất, bắt đầu bằng việc hỏi rõ rồi mới trả lời. Cùng một bước tiếp theo cụ thể, nói rõ làm việc gì, ai làm và làm lúc nào.",
"phan": [
{
"tieu": "Mẫu 1. Phiếu xử lý một băn khoăn",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Chỉ một băn khoăn thôi, và lời khách ghi đúng như khách thường nói, không sửa cho đẹp.</p>"
},
{
"o": [
{
"id": "n6-0-0-0-1",
"nhan": "Băn khoăn khách hay nói, bằng lời khách",
"ten": "Mẫu 1 · Băn khoăn khách hay nói, bằng lời khách"
},
{
"id": "n6-0-0-1-1",
"nhan": "Bạn đoán khách còn chưa rõ điều gì (giả thuyết, chưa cần đúng)",
"ten": "Mẫu 1 · Bạn đoán khách còn chưa rõ điều gì (giả thuyết, chưa cần đúng)"
},
{
"id": "n6-0-0-2-1",
"nhan": "Bước 1. Bạn nhắc lại lời khách thế nào",
"ten": "Mẫu 1 · Bước 1. Bạn nhắc lại lời khách thế nào"
},
{
"id": "n6-0-0-3-1",
"nhan": "Bước 2. Bạn cho khách thấy mình hiểu thế nào",
"ten": "Mẫu 1 · Bước 2. Bạn cho khách thấy mình hiểu thế nào"
},
{
"id": "n6-0-0-4-1",
"nhan": "Bước 3. Câu hỏi để biết khách lo điều gì",
"ten": "Mẫu 1 · Bước 3. Câu hỏi để biết khách lo điều gì"
},
{
"id": "n6-0-0-5-1",
"nhan": "Nếu cần, hai câu thêm: khách muốn gì nếu không có gì cản; để yên thì điều gì lặp lại",
"ten": "Mẫu 1 · Nếu cần, hai câu thêm: khách muốn gì nếu không có gì cản; để yên thì điều gì lặp lại"
},
{
"id": "n6-0-0-6-1",
"nhan": "Điều bạn không làm khi nghe băn khoăn này",
"ten": "Mẫu 1 · Điều bạn không làm khi nghe băn khoăn này"
},
{
"id": "n6-0-0-7-1",
"nhan": "Khi nào bạn không dùng cách này với khách",
"ten": "Mẫu 1 · Khi nào bạn không dùng cách này với khách"
}
]
}
]
},
{
"tieu": "Mẫu 2. Bước tiếp bạn đề nghị",
"cot": "Mẫu 2",
"nhom": [
{
"o": [
{
"id": "n6-1-0-0-1",
"nhan": "Một bước tiếp bạn đề nghị (một việc, không phải ba)",
"ten": "Mẫu 2 · Một bước tiếp bạn đề nghị (một việc, không phải ba)"
},
{
"id": "n6-1-0-1-1",
"nhan": "Vì sao bước này hợp với điều khách vừa nói",
"ten": "Mẫu 2 · Vì sao bước này hợp với điều khách vừa nói"
},
{
"id": "n6-1-0-2-1",
"nhan": "Khách làm gì, bạn làm gì",
"ten": "Mẫu 2 · Khách làm gì, bạn làm gì"
},
{
"id": "n6-1-0-3-1",
"nhan": "Hai khung giờ bạn đưa cho khách chọn",
"ten": "Mẫu 2 · Hai khung giờ bạn đưa cho khách chọn"
},
{
"id": "n6-1-0-4-1",
"nhan": "Câu bạn nói để đề nghị",
"ten": "Mẫu 2 · Câu bạn nói để đề nghị"
},
{
"id": "n6-1-0-5-1",
"nhan": "Nếu khách chưa muốn làm ngay, bạn hẹn nhắn lại ngày nào",
"ten": "Mẫu 2 · Nếu khách chưa muốn làm ngay, bạn hẹn nhắn lại ngày nào"
}
]
}
]
},
{
"tieu": "Mẫu 3. Tin nhắn theo sát",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Chọn tình trạng khách hay gặp nhất, viết tin nhắn cho tình trạng đó.</p>"
},
{
"o": [
{
"id": "n6-2-0-0-1",
"nhan": "Tình trạng khách: còn cân nhắc, từ chối nhẹ, hay cần bàn với người khác",
"ten": "Mẫu 3 · Tình trạng khách: còn cân nhắc, từ chối nhẹ, hay cần bàn với người khác"
},
{
"id": "n6-2-0-1-1",
"nhan": "Nhắn sau mấy ngày, và nội dung tin nhắn (ba tới năm dòng)",
"ten": "Mẫu 3 · Nhắn sau mấy ngày, và nội dung tin nhắn (ba tới năm dòng)"
},
{
"id": "n6-2-0-2-1",
"nhan": "Điều có ích cho khách bạn gửi kèm",
"ten": "Mẫu 3 · Điều có ích cho khách bạn gửi kèm"
},
{
"id": "n6-2-0-3-1",
"nhan": "Nếu khách vẫn chưa trả lời, lần nhắn cuối vào ngày nào",
"ten": "Mẫu 3 · Nếu khách vẫn chưa trả lời, lần nhắn cuối vào ngày nào"
},
{
"id": "n6-2-0-4-1",
"nhan": "Từ lúc nào bạn dừng nhắn",
"ten": "Mẫu 3 · Từ lúc nào bạn dừng nhắn"
}
]
}
]
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Hôm nay bạn thêm hai phần vào bộ quy trình sẽ ráp ở Ngày 7, bằng cách chép từ Mẫu 1, Mẫu 2 và Mẫu 3 sang rồi viết gọn bằng lời của bạn.</p>"
},
{
"h": "<h4>Phần 7. Băn khoăn hay gặp</h4>"
},
{
"h": "<p>Lần đầu chỉ cần một băn khoăn, chọn điều khách hay nói nhất.</p>"
},
{
"o": [
{
"id": "n6-4-0-0-1",
"nhan": "Khách thường nói gì",
"ten": "Quy trình · Phần 7. Băn khoăn hay gặp · Khách thường nói gì",
"qp": "Phần 7. Băn khoăn hay gặp"
},
{
"id": "n6-4-0-1-1",
"nhan": "Câu bạn hỏi để hiểu rõ khách lo điều gì",
"ten": "Quy trình · Phần 7. Băn khoăn hay gặp · Câu bạn hỏi để hiểu rõ khách lo điều gì",
"qp": "Phần 7. Băn khoăn hay gặp"
},
{
"id": "n6-4-0-2-1",
"nhan": "Bạn đáp lại thế nào",
"ten": "Quy trình · Phần 7. Băn khoăn hay gặp · Bạn đáp lại thế nào",
"qp": "Phần 7. Băn khoăn hay gặp"
},
{
"id": "n6-4-0-3-1",
"nhan": "Điều bạn không làm (giảm giá để khách thôi băn khoăn, nói khách sai, ép)",
"ten": "Quy trình · Phần 7. Băn khoăn hay gặp · Điều bạn không làm (giảm giá để khách thôi băn khoăn, nói khách sai, ép)",
"qp": "Phần 7. Băn khoăn hay gặp"
}
]
},
{
"h": "<h4>Phần 8. Bước tiếp và theo sát</h4>"
},
{
"o": [
{
"id": "n6-4-1-0-1",
"nhan": "Bước tiếp bạn đề nghị (việc gì, ai làm, khi nào)",
"ten": "Quy trình · Phần 8. Bước tiếp và theo sát · Bước tiếp bạn đề nghị (việc gì, ai làm, khi nào)",
"qp": "Phần 8. Bước tiếp và theo sát"
},
{
"id": "n6-4-1-1-1",
"nhan": "Tin nhắn theo sát nếu khách chưa trả lời",
"ten": "Quy trình · Phần 8. Bước tiếp và theo sát · Tin nhắn theo sát nếu khách chưa trả lời",
"qp": "Phần 8. Bước tiếp và theo sát"
},
{
"id": "n6-4-1-2-1",
"nhan": "Khi nào bạn dừng nhắn",
"ten": "Quy trình · Phần 8. Bước tiếp và theo sát · Khi nào bạn dừng nhắn",
"qp": "Phần 8. Bước tiếp và theo sát"
}
]
},
{
"h": "<p>Các phần còn lại bạn làm ở những ngày khác, rồi ráp tất cả lại vào Ngày 7.</p>\n<aside class=\"goi\"><strong>Ngày mai.</strong> Ngày 7 là ngày ráp: bạn ghép các phần đã làm thành một Quy trình tư vấn bán hàng tiêu chuẩn hoàn chỉnh, thử với khách thật, rồi mở lại Mẫu 1 của Ngày 1 để thấy cách tư vấn của bạn đã khác đi ở chỗ nào.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 6",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video từ <strong>một tới ba phút</strong>, đóng vai một đoạn trao đổi, gồm ba phần:</p>\n<ol>\n<li>Khách nêu băn khoăn của họ bằng một câu. Bạn nhắc lại, cho khách thấy bạn hiểu, rồi hỏi băn khoăn thật.</li>\n<li>Khách nói ra điều họ lo (bạn đoán và nói thay khách cũng được).</li>\n<li>Bạn đề nghị một bước tiếp, nói rõ việc gì, ai làm và khi nào.</li>\n</ol>\n<aside class=\"goi\">Quay một mình thì nói rõ ngay đầu video đây là <strong>MÔ PHỎNG</strong>. Video không cần dựng, quay bằng điện thoại là đủ. Không đưa tên, số điện thoại hay tin nhắn thật của khách vào video.</aside>"
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
"viec": "<ol>\n<li>Chọn một băn khoăn mà nhóm khách bạn chọn ở Ngày 2 hay nói nhất. Có nhiều băn khoăn thì chọn một và ghi các băn khoăn còn lại để sau.</li>\n<li>Điền Mẫu 1, phiếu xử lý một băn khoăn, bằng lời bạn nói được thành tiếng.</li>\n<li>Điền Mẫu 2, bước tiếp bạn đề nghị.</li>\n<li>Điền Mẫu 3, tin nhắn theo sát nếu khách chưa trả lời.</li>\n<li>Điền phần Quy trình của hôm nay, ở cuối tài liệu này.</li>\n<li>Quay video từ một tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Tôi hỏi rõ khách lo điều gì trước khi trả lời.",
"Tôi nhắc lại đúng lời khách, không thêm ý của mình.",
"Không có câu ép khách quyết ngay, không trấn an suông, không dọa.",
"Tôi không giảm giá để thoát khỏi băn khoăn.",
"Bước tiếp có đủ ba thứ: việc gì, ai làm, khi nào.",
"Tin nhắn theo sát dài ba tới năm dòng, có một điều có ích cho khách, và có chỗ dừng.",
"Phiếu chỉ xử lý một băn khoăn.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Nếu quay một mình, đầu video đã nói MÔ PHỎNG.",
"Video dài từ một tới ba phút."
],
"nopSau": [
"Nộp Mẫu 1 và Mẫu 2 đã điền, cùng video Ngày 6. Mẫu 3 không cần nộp, nhưng bạn cần điền để làm Phần 8 bên dưới.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong ngày học. Nộp chậm vẫn được nhận, miễn là trước hạn cuối, tức ba ngày sau Ngày 7.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
]
},
"7": {
"ten": "Ráp quy trình và nhìn lại so với Ngày 1",
"hua": "Sau ngày hôm nay, bạn sẽ có ba thứ: một Quy trình tư vấn bán hàng tiêu chuẩn đủ các phần và nối khớp với nhau, một bản tự đánh giá cho biết chỗ nào đã tốt hơn và chỗ nào còn phải sửa, cùng một việc cụ thể để dùng trong tuần tới.",
"phan": [
{
"tieu": "Mẫu 1. Kiểm tra các chỗ nối của Quy trình",
"cot": "Mẫu 1",
"nhom": [
{
"h": "<p>Đi từ trên xuống, mỗi dòng trả lời \"có\" hoặc \"chưa\", và nếu chưa thì ghi bạn sẽ sửa gì.</p>"
},
{
"tieu": "Phần 1 và Phần 2",
"o": [
{
"id": "n7-0-0-0-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Nhóm khách ở Phần 2 có đúng là nhóm mua sản phẩm ở Phần 1 không",
"ten": "Mẫu 1 · Phần 1 và Phần 2 · Có / Chưa"
},
{
"id": "n7-0-0-0-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 1 và Phần 2 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 2 và Phần 4",
"o": [
{
"id": "n7-0-0-1-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Phần mở đầu dùng được điều bạn biết về nhóm khách này, hay mở đầu chung cho mọi người",
"ten": "Mẫu 1 · Phần 2 và Phần 4 · Có / Chưa"
},
{
"id": "n7-0-0-1-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 2 và Phần 4 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 4 và Phần 5",
"o": [
{
"id": "n7-0-0-2-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Câu hỏi đầu tiên của Phần 5 đi ngay sau câu xin phép hỏi sâu ở Phần 4",
"ten": "Mẫu 1 · Phần 4 và Phần 5 · Có / Chưa"
},
{
"id": "n7-0-0-2-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 4 và Phần 5 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 5 và Phần 6",
"o": [
{
"id": "n7-0-0-3-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Phần đề xuất mở bằng câu tóm tắt ở Phần 5, và giữ đúng lời khách nói",
"ten": "Mẫu 1 · Phần 5 và Phần 6 · Có / Chưa"
},
{
"id": "n7-0-0-3-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 5 và Phần 6 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 6 và Phần 7",
"o": [
{
"id": "n7-0-0-4-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Băn khoăn ở Phần 7 là băn khoăn hay xuất hiện sau đề xuất kiểu Phần 6",
"ten": "Mẫu 1 · Phần 6 và Phần 7 · Có / Chưa"
},
{
"id": "n7-0-0-4-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 6 và Phần 7 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 7 và Phần 8",
"o": [
{
"id": "n7-0-0-5-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Bước tiếp ở Phần 8 đi ra từ cách bạn xử lý băn khoăn, nói rõ việc gì, ai làm và làm lúc nào",
"ten": "Mẫu 1 · Phần 7 và Phần 8 · Có / Chưa"
},
{
"id": "n7-0-0-5-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 7 và Phần 8 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 4 và Phần 8",
"o": [
{
"id": "n7-0-0-6-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Phần mở đầu nói rõ bạn không ép khách, nhưng Phần 8 vẫn có một đề nghị bước tiếp rõ ràng, không dừng ở \"chị cứ suy nghĩ\"",
"ten": "Mẫu 1 · Phần 4 và Phần 8 · Có / Chưa"
},
{
"id": "n7-0-0-6-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 4 và Phần 8 · Bạn sẽ sửa gì"
}
]
},
{
"tieu": "Phần 3 và Phần 1",
"o": [
{
"id": "n7-0-0-7-2",
"nhan": "Có / Chưa",
"chon": [
"Có",
"Chưa"
],
"goi": "Câu bạn tự hỏi: Thời gian các chặng cộng lại bằng độ dài một cuộc tư vấn ghi ở Phần 1",
"ten": "Mẫu 1 · Phần 3 và Phần 1 · Có / Chưa"
},
{
"id": "n7-0-0-7-3",
"nhan": "Bạn sẽ sửa gì",
"ten": "Mẫu 1 · Phần 3 và Phần 1 · Bạn sẽ sửa gì"
}
]
}
]
},
{
"tieu": "Mẫu 2. Phiếu tự đánh giá một cuộc tư vấn",
"cot": "Mẫu 2",
"nhom": [
{
"h": "<p>Phiếu này dùng cho cuộc bạn vừa nói thử hôm nay, và sau này bạn dùng lại sau mỗi cuộc tư vấn thật. Không ghi tên, số điện thoại hay thông tin riêng của khách.</p>"
},
{
"tieu": "Khách biết vì sao buổi nói chuyện này diễn ra",
"o": [
{
"id": "n7-1-0-0-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Khách biết vì sao buổi nói chuyện này diễn ra · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-0-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Khách biết vì sao buổi nói chuyện này diễn ra · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Tôi hỏi khách muốn đạt điều gì trước khi hỏi điều gì đang cản",
"o": [
{
"id": "n7-1-0-1-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Tôi hỏi khách muốn đạt điều gì trước khi hỏi điều gì đang cản · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-1-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Tôi hỏi khách muốn đạt điều gì trước khi hỏi điều gì đang cản · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Khách nói nhiều hơn tôi ở nửa đầu buổi",
"o": [
{
"id": "n7-1-0-2-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Khách nói nhiều hơn tôi ở nửa đầu buổi · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-2-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Khách nói nhiều hơn tôi ở nửa đầu buổi · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Tôi tóm tắt lại và khách đồng ý là đúng",
"o": [
{
"id": "n7-1-0-3-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Tôi tóm tắt lại và khách đồng ý là đúng · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-3-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Tôi tóm tắt lại và khách đồng ý là đúng · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Đề xuất của tôi trả lời đúng điều khách vừa xác nhận",
"o": [
{
"id": "n7-1-0-4-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Đề xuất của tôi trả lời đúng điều khách vừa xác nhận · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-4-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Đề xuất của tôi trả lời đúng điều khách vừa xác nhận · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Tôi nói rõ giới hạn của giải pháp",
"o": [
{
"id": "n7-1-0-5-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Tôi nói rõ giới hạn của giải pháp · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-5-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Tôi nói rõ giới hạn của giải pháp · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Tôi hỏi rõ băn khoăn trước khi trả lời",
"o": [
{
"id": "n7-1-0-6-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Tôi hỏi rõ băn khoăn trước khi trả lời · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-6-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Tôi hỏi rõ băn khoăn trước khi trả lời · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"tieu": "Buổi tư vấn kết thúc bằng một bước tiếp cụ thể",
"o": [
{
"id": "n7-1-0-7-1",
"nhan": "Có / Chưa / Không áp dụng",
"chon": [
"Có",
"Chưa",
"Không áp dụng"
],
"ten": "Mẫu 2 · Buổi tư vấn kết thúc bằng một bước tiếp cụ thể · Có / Chưa / Không áp dụng"
},
{
"id": "n7-1-0-7-2",
"nhan": "Bằng chứng: câu bạn đã nói, hoặc đoạn trong video",
"ten": "Mẫu 2 · Buổi tư vấn kết thúc bằng một bước tiếp cụ thể · Bằng chứng: câu bạn đã nói, hoặc đoạn trong video"
}
]
},
{
"h": "<p>Hai dòng cuối của phiếu, điều làm tốt hơn và điều muốn sửa, bạn điền ở Phần 9.</p>"
}
]
},
{
"tieu": "Mẫu 3. So sánh Ngày 1 và Ngày 7",
"cot": "Mẫu 3",
"nhom": [
{
"h": "<p>Cột Ngày 1 chép chỗ đang yếu bạn đã ghi ở từng chặng trong Mẫu 1 và điều bạn nói trong video hôm đó, còn cột Ngày 7 ghi điều bạn làm bây giờ. Cột cuối ghi điều thấy được để làm bằng chứng, như câu bạn nói, dòng bạn viết hay đoạn trong video. Cảm giác \"mình tiến bộ\" chưa phải bằng chứng.</p>"
},
{
"tieu": "Chuẩn bị và hiểu khách",
"o": [
{
"id": "n7-2-0-0-1",
"nhan": "Ngày 1",
"tu": "m1-c0-lam",
"ten": "Mẫu 3 · Chuẩn bị và hiểu khách · Ngày 1"
},
{
"id": "n7-2-0-0-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Chuẩn bị và hiểu khách · Ngày 7"
},
{
"id": "n7-2-0-0-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Chuẩn bị và hiểu khách · Bằng chứng thấy được"
}
]
},
{
"tieu": "Mở đầu",
"o": [
{
"id": "n7-2-0-1-1",
"nhan": "Ngày 1",
"tu": "m1-c1-lam",
"ten": "Mẫu 3 · Mở đầu · Ngày 1"
},
{
"id": "n7-2-0-1-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Mở đầu · Ngày 7"
},
{
"id": "n7-2-0-1-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Mở đầu · Bằng chứng thấy được"
}
]
},
{
"tieu": "Khai thác và chẩn đoán",
"o": [
{
"id": "n7-2-0-2-1",
"nhan": "Ngày 1",
"tu": "m1-c2-lam",
"ten": "Mẫu 3 · Khai thác và chẩn đoán · Ngày 1"
},
{
"id": "n7-2-0-2-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Khai thác và chẩn đoán · Ngày 7"
},
{
"id": "n7-2-0-2-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Khai thác và chẩn đoán · Bằng chứng thấy được"
}
]
},
{
"tieu": "Đề xuất",
"o": [
{
"id": "n7-2-0-3-1",
"nhan": "Ngày 1",
"tu": "m1-c3-lam",
"ten": "Mẫu 3 · Đề xuất · Ngày 1"
},
{
"id": "n7-2-0-3-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Đề xuất · Ngày 7"
},
{
"id": "n7-2-0-3-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Đề xuất · Bằng chứng thấy được"
}
]
},
{
"tieu": "Giúp khách quyết định và theo sát",
"o": [
{
"id": "n7-2-0-4-1",
"nhan": "Ngày 1",
"tu": "m1-c4-lam",
"ten": "Mẫu 3 · Giúp khách quyết định và theo sát · Ngày 1"
},
{
"id": "n7-2-0-4-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Giúp khách quyết định và theo sát · Ngày 7"
},
{
"id": "n7-2-0-4-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Giúp khách quyết định và theo sát · Bằng chứng thấy được"
}
]
},
{
"tieu": "Thời gian dành cho từng phần của buổi",
"o": [
{
"id": "n7-2-0-5-1",
"nhan": "Ngày 1",
"ten": "Mẫu 3 · Thời gian dành cho từng phần của buổi · Ngày 1"
},
{
"id": "n7-2-0-5-2",
"nhan": "Ngày 7",
"ten": "Mẫu 3 · Thời gian dành cho từng phần của buổi · Ngày 7"
},
{
"id": "n7-2-0-5-3",
"nhan": "Bằng chứng thấy được",
"ten": "Mẫu 3 · Thời gian dành cho từng phần của buổi · Bằng chứng thấy được"
}
]
},
{
"o": [
{
"id": "n7-2-1-0-1",
"nhan": "Trong năm chặng, những chặng nào đã khác đi so với Ngày 1",
"ten": "Mẫu 3 · Trong năm chặng, những chặng nào đã khác đi so với Ngày 1"
},
{
"id": "n7-2-1-1-1",
"nhan": "Chặng bạn thấy yếu nhất ở Ngày 1, chép nguyên văn",
"tu": "m1-nghen",
"ten": "Mẫu 3 · Chặng bạn thấy yếu nhất ở Ngày 1, chép nguyên văn"
},
{
"id": "n7-2-1-2-1",
"nhan": "Sau bảy ngày, chặng đó đã khác đi chưa, khác ở đâu, hay vẫn như cũ",
"ten": "Mẫu 3 · Sau bảy ngày, chặng đó đã khác đi chưa, khác ở đâu, hay vẫn như cũ"
},
{
"id": "n7-2-1-3-1",
"nhan": "Điều thay đổi rõ nhất",
"ten": "Mẫu 3 · Điều thay đổi rõ nhất"
},
{
"id": "n7-2-1-4-1",
"nhan": "Điều chưa thay đổi",
"ten": "Mẫu 3 · Điều chưa thay đổi"
},
{
"id": "n7-2-1-5-1",
"nhan": "Điều bạn vẫn đang đoán, chưa kiểm tra với khách thật",
"ten": "Mẫu 3 · Điều bạn vẫn đang đoán, chưa kiểm tra với khách thật"
},
{
"id": "n7-2-1-6-1",
"nhan": "Bạn đang ở mức nào trong bốn mức",
"chon": [
"Đã điền xong Quy trình",
"Đã luyện được, quay thử nhiều lần",
"Đã dùng với khách thật",
"Đã thấy kết quả khác đi trong kinh doanh"
],
"ten": "Mẫu 3 · Bạn đang ở mức nào trong bốn mức"
}
]
}
],
"layTu": "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
},
{
"tieu": "Quy trình tư vấn bán hàng tiêu chuẩn của bạn: phần hoàn thành hôm nay",
"cot": "Quy trình",
"nhom": [
{
"h": "<p>Đây là những phần cuối của bộ quy trình, và sau trang này bạn có một Quy trình đủ để dùng.</p>"
},
{
"h": "<h4>Phần 3. Đường đi của một cuộc tư vấn, bản sửa</h4>"
},
{
"h": "<p>Ngày 1 bạn ghi cách đang làm, hôm nay bạn sửa lại theo những gì đã học và chia thời gian cho từng chặng. Phần chuẩn bị diễn ra trước buổi gặp nên không tính phút.</p>\n<p>Các tỉ lệ dưới đây chỉ để bạn so với cách đang làm, không phải luật: phần hỏi khách muốn đạt điều gì chiếm nhiều nhất, khoảng một phần ba tới hai phần năm buổi, phần hỏi điều đang cản khoảng một phần ba, còn từ đề xuất tới bước tiếp theo khoảng một phần năm tới ba phần mười. Phần còn lại là mở đầu, thường ngắn. Nếu bạn đang dành phần lớn thời gian để trình bày, đó là chỗ đáng sửa đầu tiên.</p>"
},
{
"o": [
{
"id": "n7-4-0-0-1",
"nhan": "Chuẩn bị và hiểu khách",
"goi": "Thời gian dự kiến: Trước buổi gặp",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Chuẩn bị và hiểu khách",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"tieu": "Mở đầu",
"o": [
{
"id": "n7-4-0-1-1",
"nhan": "Việc bạn làm ở chặng này",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Mở đầu · Việc bạn làm ở chặng này",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
},
{
"id": "n7-4-0-1-2",
"nhan": "Thời gian dự kiến",
"dong": 1,
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Mở đầu · Thời gian dự kiến",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"tieu": "Khai thác và chẩn đoán: khách muốn đạt gì",
"o": [
{
"id": "n7-4-0-2-1",
"nhan": "Việc bạn làm ở chặng này",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Khai thác và chẩn đoán: khách muốn đạt gì · Việc bạn làm ở chặng này",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
},
{
"id": "n7-4-0-2-2",
"nhan": "Thời gian dự kiến",
"dong": 1,
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Khai thác và chẩn đoán: khách muốn đạt gì · Thời gian dự kiến",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"tieu": "Khai thác và chẩn đoán: điều đang cản",
"o": [
{
"id": "n7-4-0-3-1",
"nhan": "Việc bạn làm ở chặng này",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Khai thác và chẩn đoán: điều đang cản · Việc bạn làm ở chặng này",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
},
{
"id": "n7-4-0-3-2",
"nhan": "Thời gian dự kiến",
"dong": 1,
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Khai thác và chẩn đoán: điều đang cản · Thời gian dự kiến",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"tieu": "Đề xuất",
"o": [
{
"id": "n7-4-0-4-1",
"nhan": "Việc bạn làm ở chặng này",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Đề xuất · Việc bạn làm ở chặng này",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
},
{
"id": "n7-4-0-4-2",
"nhan": "Thời gian dự kiến",
"dong": 1,
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Đề xuất · Thời gian dự kiến",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"tieu": "Giúp khách quyết định và theo sát",
"o": [
{
"id": "n7-4-0-5-1",
"nhan": "Việc bạn làm ở chặng này",
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Giúp khách quyết định và theo sát · Việc bạn làm ở chặng này",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
},
{
"id": "n7-4-0-5-2",
"nhan": "Thời gian dự kiến",
"dong": 1,
"ten": "Quy trình · Phần 3. Đường đi của một cuộc tư vấn, bản sửa · Giúp khách quyết định và theo sát · Thời gian dự kiến",
"qp": "Phần 3. Đường đi của một cuộc tư vấn, bản sửa"
}
]
},
{
"h": "<h4>Phần 9. Cách tự đánh giá một cuộc tư vấn</h4>"
},
{
"h": "<p>Tám câu của Mẫu 2 là phiếu bạn dùng lại sau mỗi cuộc tư vấn, còn ở đây bạn điền hai dòng:</p>"
},
{
"o": [
{
"id": "n7-4-1-0-1",
"nhan": "Điều tôi làm tốt hơn so với Ngày 1",
"ten": "Quy trình · Phần 9. Cách tự đánh giá một cuộc tư vấn · Điều tôi làm tốt hơn so với Ngày 1",
"qp": "Phần 9. Cách tự đánh giá một cuộc tư vấn"
},
{
"id": "n7-4-1-1-1",
"nhan": "Điều tôi muốn sửa ở lần sau, chọn một",
"ten": "Quy trình · Phần 9. Cách tự đánh giá một cuộc tư vấn · Điều tôi muốn sửa ở lần sau, chọn một",
"qp": "Phần 9. Cách tự đánh giá một cuộc tư vấn"
}
]
},
{
"h": "<h4>Phần 10. Thử với khách thật và ngày xem lại</h4>"
},
{
"h": "<p>Chọn <strong>một</strong> phần của Quy trình để dùng với khách thật trong bảy tới mười bốn ngày.</p>"
},
{
"o": [
{
"id": "n7-4-2-0-1",
"nhan": "Phần của Quy trình bạn sẽ thử đầu tiên, và vì sao chọn phần này",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Phần của Quy trình bạn sẽ thử đầu tiên, và vì sao chọn phần này",
"qp": "Phần 10. Thử với khách thật và ngày xem lại"
},
{
"id": "n7-4-2-1-1",
"nhan": "Thử với bao nhiêu cuộc tư vấn",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Thử với bao nhiêu cuộc tư vấn",
"qp": "Phần 10. Thử với khách thật và ngày xem lại"
},
{
"id": "n7-4-2-2-1",
"nhan": "Bạn sẽ ghi lại điều gì sau mỗi cuộc (ẩn danh)",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Bạn sẽ ghi lại điều gì sau mỗi cuộc (ẩn danh)",
"qp": "Phần 10. Thử với khách thật và ngày xem lại"
},
{
"id": "n7-4-2-3-1",
"nhan": "Chưa có khách để thử thì bạn làm gì",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Chưa có khách để thử thì bạn làm gì",
"qp": "Phần 10. Thử với khách thật và ngày xem lại"
},
{
"id": "n7-4-2-4-1",
"nhan": "Ngày xem lại Quy trình (trong vòng 7 tới 14 ngày)",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Ngày xem lại Quy trình (trong vòng 7 tới 14 ngày)",
"qp": "Phần 10. Thử với khách thật và ngày xem lại"
}
]
},
{
"h": "<p>Bạn đang ở mức nào? Hãy ghi đúng mức đang ở, đừng ghi mức bạn mong.</p>"
},
{
"o": [
{
"id": "n7-4-3-muc",
"nhan": "Mức bạn đang ở",
"chon": [
"Đã điền xong Quy trình",
"Đã luyện được, quay thử nhiều lần",
"Đã dùng với khách thật",
"Đã thấy kết quả khác đi trong kinh doanh"
],
"qp": "Phần 10. Thử với khách thật và ngày xem lại",
"ten": "Quy trình · Phần 10. Thử với khách thật và ngày xem lại · Mức bạn đang ở"
}
]
},
{
"h": "<aside class=\"goi\"><strong>Tuần tới.</strong> Thử thách dừng ở đây, Quy trình giờ là của bạn. Trong bảy tới mười bốn ngày tới, hãy dùng phần bạn đã chọn ở Phần 10, ghi lại sau mỗi cuộc tư vấn, và tới ngày đã hẹn thì mở Quy trình ra, sửa đúng một chỗ, rồi dùng tiếp.</aside>"
}
]
},
{
"tieu": "Đề bài video Ngày 7",
"cot": "Video",
"nhom": [
{
"h": "<p>Quay một video từ <strong>hai tới ba phút</strong>, theo ba phần:</p>\n<ol>\n<li><strong>Trước và sau.</strong> Ngày 1 bạn nói vấn đề của mình là gì. Bây giờ cách bạn tư vấn khác ở đâu, và chỗ nào vẫn như cũ?</li>\n<li><strong>Bạn đã làm gì, bằng chứng gì.</strong> Nói một ví dụ cụ thể, như một câu bạn đã sửa hoặc một câu bạn đã hỏi, và nói rõ bạn đang ở mức nào trong bốn mức.</li>\n<li><strong>Tuần tới.</strong> Bạn sẽ dùng phần nào của Quy trình với khách thật, vì sao chọn phần đó, và bạn sẽ ghi lại điều gì.</li>\n</ol>\n<aside class=\"goi\">Video không cần dựng, quay bằng điện thoại là đủ. Bạn không đưa tên, số điện thoại hay tin nhắn thật của khách vào video, và nói đúng điều đã làm được, kể cả khi mới tới mức 1 hoặc mức 2.</aside>"
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
"viec": "<ol>\n<li>Tập hợp các phần đã làm từ Ngày 1 tới Ngày 6 vào mẫu Quy trình tư vấn bán hàng tiêu chuẩn, theo số phần từ 1 tới 8. Phần nào chưa làm thì để trống và ghi \"chưa làm\".</li>\n<li>Điền Mẫu 1, kiểm tra các chỗ nối, và sửa những chỗ lệch.</li>\n<li>Sửa Phần 3, đường đi của một cuộc tư vấn, ở cuối tài liệu này và chia thời gian cho từng chặng.</li>\n<li>Nói thử cả một cuộc tư vấn từ mở đầu tới bước tiếp theo, tốt nhất là nhờ một người đóng vai khách. Không có ai thì bạn đóng cả hai vai và ghi <strong>MÔ PHỎNG</strong>. Nếu tiện, hãy quay lại để tự xem, video này bạn giữ cho riêng mình và không phải nộp.</li>\n<li>Điền Mẫu 2, tự đánh giá cuộc vừa nói thử.</li>\n<li>Mở lại video và Mẫu 1 của Ngày 1, rồi điền Mẫu 3, so sánh trước và sau.</li>\n<li>Điền Phần 9 và Phần 10 ở cuối tài liệu, trong đó chọn một việc để dùng trong tuần tới.</li>\n<li>Quay video từ hai tới ba phút theo đề bài, rồi nộp bài.</li>\n</ol>",
"kiem": [
"Quy trình có đủ các phần từ 1 tới 10. Phần nào chưa làm thì đã ghi \"chưa làm\".",
"Mẫu 1 đã kiểm tra đủ các chỗ nối, chỗ lệch đã sửa hoặc đã ghi sẽ sửa.",
"Phần 3 có thời gian cho từng chặng, và cộng lại khớp với độ dài cuộc tư vấn.",
"Mẫu 2 có bằng chứng ở mỗi câu trả lời \"có\".",
"Mẫu 3 so sánh bằng điều thấy được, không bằng cảm giác.",
"Phần 10 chỉ có một phần để dùng trong tuần tới, và có ngày mở lại Quy trình.",
"Không có tên, số điện thoại, ảnh chụp tin nhắn thật của khách.",
"Tình huống tự nghĩ ra hoặc cuộc nói thử một mình đã ghi MÔ PHỎNG.",
"Video dài từ hai tới ba phút, đủ ba phần, và nói đúng mức bạn đã đi tới."
],
"nopSau": [
"Nộp Quy trình tư vấn bán hàng tiêu chuẩn đã ráp, Mẫu 2, Mẫu 3, Phần 9, Phần 10 và video Ngày 7.",
"Bạn bấm Nộp bài ở cuối trang này, ngay trong hôm nay nếu kịp. Chưa kịp thì bạn vẫn còn ba ngày nữa, đó là hạn cuối cho cả bảy ngày.",
"Nộp xong, bạn có thể đăng một bài ngắn trong nhóm Facebook của thử thách, kể hôm nay bạn làm được gì và vướng ở đâu. Bài đăng trong nhóm thì các thành viên khác cùng đọc, nên bạn đừng đưa thông tin thật của khách vào đó."
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
"h": "<p>Nộp xong Ngày 7, bạn quay thêm một video cuối, video thứ chín của thử thách, dài từ ba tới năm phút. Video Ngày 7 nhìn lại quy trình, còn video này kể lại chặng đường của bạn, để một chủ doanh nghiệp khác cùng ngành xem cũng hiểu bạn đã đi từ đâu tới đâu.</p>\n<p>Bạn kể lần lượt bốn điều:</p>\n<ol>\n<li>Bạn là ai, làm ngành gì, bán sản phẩm gì cho nhóm khách nào.</li>\n<li>Trước thử thách, bạn tư vấn thế nào, và hay vướng ở chỗ nào.</li>\n<li>Trong bảy ngày, bạn đã đổi gì cụ thể trong cách tư vấn. Đã dùng với một khách thật thì kể lại buổi đó: bạn nói khác trước ở đâu, khách phản ứng ra sao. Gọi khách bằng tên chung, không nói tên thật.</li>\n<li>Bây giờ việc tư vấn của bạn khác trước ở đâu, và tuần tới bạn làm gì tiếp với quy trình của mình.</li>\n</ol>\n<p>Nói đúng mức bạn đã đi tới. Mới điền xong mẫu thì nói mới điền xong, đã dùng với khách thật thì kể buổi đó, chưa thấy kết quả thì nói chưa thấy. Một chuyện thật, nhỏ mà rõ, giúp người đi sau nhiều hơn một lời khen chung chung.</p>\n<p>Video này có thể được Next Gen Founder dùng công khai để lan tỏa và truyền thông, theo bản thỏa thuận bạn đã đồng ý lúc bắt đầu. Bạn dán đường dẫn video vào ô bên dưới rồi bấm Nộp bài, hạn cuối như cả thử thách.</p>"
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
