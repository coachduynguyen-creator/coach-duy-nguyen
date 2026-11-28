# Quy chuẩn thiết kế SevenM

Coach Duy chốt ngày 27/11/2026: hình khối và thông tin phải tách rõ khỏi nền như framework tròn. Áp dụng cùng nguyên tắc cho website, slide và tài liệu. Giữ xanh than, đỏ thương hiệu, logo M gấp và nội dung 51 chuẩn hiện hành.

## Một nguồn cho mỗi phần

- `design-system.css`: thang chữ và bề mặt dùng chung, nạp cuối trên đủ 12 trang.
- `framework-wheel.js/css`: 7 trụ thuộc 3 nhóm 2/3/2, chọn nhóm hoặc chọn trụ riêng. Coach chốt lại ngày 27/11/2026: các múi có góc bằng nhau và khe ngăn đều; phân nhóm bằng màu, không tăng khoảng cách ở ranh giới nhóm.
- `phuong-phap/index.html`: nguồn 51 chuẩn. Chạy `sync-standards.py` để sinh dữ liệu và `--check` để bắt lệch.
- `sales-os-map.js`: cách dựng sơ đồ nguồn đã được duyệt, không thay bằng các thẻ lớn đơn điệu.

## Chữ theo vai trò

Thang chữ và các giá trị màu trong bản mã hiện tại là phần triển khai do Codex đề xuất theo nguyên tắc đã chốt. Coach Duy chưa duyệt riêng từng con số.

Space Grotesk cho chữ chính, đủ tiếng Việt; IBM Plex Mono chỉ cho mã và nhãn ngắn. Tiêu đề 700, nội dung 500. Không dùng thêm phông cho cùng vai trò.

| Vai trò | Máy tính | Điện thoại |
| --- | --- | --- |
| Tiêu đề trang | 42 tới 64 px theo màn hình | 36 px, 32 px ở màn hình 320 |
| Tiêu đề khu vực | 32 tới 44 px theo màn hình | 32 px |
| Tiêu đề nội dung mở rộng/lời mời | 32 px | 28 px |
| Tiêu đề khối | 26 px | 24 px |
| Đoạn giới thiệu | 20 px | 18 px |
| Nội dung | 18 px | 18 px |
| Ghi chú/chân trang | 14 px | 14 px |
| Nút chính | 16 px, đậm 700 | 16 px, đậm 700 |

Ngoại lệ có mục đích: chữ trong mô phỏng giao diện 14 tới 16 px; tên trụ trên vòng tròn tối thiểu 14 px; nhãn mã ngắn 12 px; chữ vector trong sơ đồ có chế độ phóng to; số lớn biểu thị số ngày hoặc chỉ số không dùng cỡ tiêu đề thông thường. Không ép mọi chữ về cùng cỡ và làm mất phân cấp.

## Tách nền bằng 3 mức

Nền trang xanh than tối, khối nội dung dùng `--surface-main`, khối cần nhấn hoặc hình vẽ dùng `--surface-high`. Có đường biên và bóng mềm; chữ phụ vẫn đọc rõ. Đỏ dành cho hành động hoặc trạng thái được chọn. Không tăng độ sáng toàn bộ nền trang để chữa một khối bị chìm.

Slide theo cùng nguyên tắc phân cấp và tương phản; cỡ chữ phải điều chỉnh theo khổ trình chiếu, không sao chép nguyên số px của website. Khối nội dung và biểu đồ phải sáng hơn nền, chữ rõ khi nhìn ở xa. Không tự tạo số liệu để trang trí biểu đồ.

## Cách kiểm trước khi giao

Thử đủ 12 trang ở desktop và mobile, chiều rộng 320 không tràn toàn trang; kiểm 7 trụ/3 nhóm, bàn phím, liên kết mở đúng chuẩn, menu và chân trang. Đo các cặp màu chữ chính. Không thay đổi cách nhận đăng ký thật khi chỉ sửa giao diện. Chưa thử iPhone vật lý, Safari hoặc toàn bộ WCAG thì ghi rõ.

## Dàn hình vẽ trong khổ thực tế

Trang phương pháp đặt giới thiệu phía trên và framework toàn chiều ngang phía dưới. Không lồng bố cục vòng tròn cùng 3 thẻ vào một nửa chiều ngang của hero. Khi khối chứa hẹp, chuyển xếp chồng theo chiều rộng của chính khối chứa. Kiểm chữ trong hình có chồng nhau hoặc chạm tâm không; kiểm tràn ngang toàn trang không đủ để bắt lỗi này.

## Số liệu và tình huống vận hành

Coach chốt ngày 27/11/2026: sau Sales OS và thanh logo có section đối chiếu vấn đề phòng kinh doanh, gồm biểu đồ lớn 40/60 và 4 tình huống mở rộng. Học cách nhấn số và thanh tỷ lệ từ slide AI, giữ màu SevenM. Dùng Salesforce State of Sales 2026 trang 8, ghi rõ trung bình, năm báo cáo, thời gian khảo sát và phạm vi quốc tế. Không coi 60% công việc khác là lãng phí; không tự tạo tỷ lệ cho 4 tình huống.

`pain-section.css/js` chỉ nạp trên trang chủ. Số có sẵn khi tắt JS, chuyển động biểu đồ chạy 1 lần khi xuất hiện; ánh nền chậm theo hệ chuyển động đang có. Các tình huống dùng details/summary, mở bằng bàn phím không chạy hiệu ứng. Mobile xếp biểu đồ trước, tình huống sau; giữ khoảng trắng giữa các từ khi ẩn ngắt dòng.

Coach chốt bổ sung ngày 27/11/2026: phần Cách SevenM đồng hành giữ bố cục tiến trình, bỏ nền box của 4 bước. Tách nội dung khỏi nền không đồng nghĩa mọi nội dung đều phải có khung.

## Thứ tự nội dung trang chủ

Coach duyệt ngày 27/11/2026: sau section vấn đề là mô hình 7M, rồi sơ đồ công nghệ với tiêu đề Đưa 7M vào vận hành với công nghệ và AI, sau đó tới dịch vụ. Lời mời trao đổi cuối trang gom câu hỏi và nút thành một cụm, nút ngay dưới câu hỏi.

## Trình bày trang Công nghệ và AI

Coach phản hồi ngày 27/11/2026: 7 hàng chữ và 4 thẻ chữ dài thiếu cảm giác công nghệ, lệch hero. Triển khai mới trong technology-story.css/js: chọn trụ 7M ở một bên, vùng tập trung có luồng minh họa 7M → AI hỗ trợ → người phụ trách, đọc đúng nội dung trụ đã chọn và mở tiêu chuẩn tương ứng. 4 bước triển khai nối bằng đường sáng, chữ đặt trực tiếp trên nền; tablet xếp 2 cột, mobile thành tiến trình dọc. Phần nguyên tắc bên dưới dùng chữ và đường phân cách, không lặp thẻ nền. Không thêm số liệu, không thay nội dung chuyên môn, không dùng 7 thẻ lớn lặp lại. Có chế độ giảm chuyển động; không có JS vẫn đọc được cả 7 trụ.

## Điều chỉnh phần thân theo phản hồi 28/11/2026

Coach chỉ rõ 2 lỗi: toàn trang một màu xanh và chữ chìm vào nền; hero tốt vì pha xanh đỏ, có hiệu ứng và chiều sâu. Không tăng sáng bằng cách phủ thêm xanh lên cả nền và hộp. Phần thân cần các vùng ánh đỏ có vị trí, bề mặt kính tối trung tính ở phía trước, chữ trắng đủ tách khỏi nền. Giá trị CSS là phần triển khai đang chỉnh theo phản hồi, chưa coi mọi con số màu đã được Coach duyệt riêng.

`refinement.css/js` nạp cuối trên 12 trang hiện hành. Không nạp lên trang thử. Giữ hero chính và thang chữ Space Grotesk/IBM Plex Mono. Mỗi loại nội dung dùng cách trình bày phù hợp: bộ chọn 7 trụ với một chương đang đọc, quy trình mở có luồng kết nối, hành trình tự chấm có mô phỏng, thư viện bìa tài liệu, nội dung triển khai dùng biểu tượng và nền mở. Không lặp hộp lớn chứa chữ cho mọi phần.

51 chuẩn trong HTML phương pháp vẫn là nguồn chuẩn, JS chỉ thay cách đọc; liên kết trên vòng tròn và bộ chọn chương phải đồng bộ. Mô phỏng tự chấm không tạo điểm số hoặc kết quả doanh nghiệp. Không đổi cách nhận đăng ký. Biểu tượng Phosphor trong assets/ui có giấy phép kèm theo.

Chỉ số có nguồn phải hiện đúng giá trị từ đầu. Với 40% thời gian bán hàng, chỉ thanh tỷ lệ chuyển động; không đếm số từ 0 để ảnh chụp giữa chừng hiện 34% hoặc một số khác với nguồn.

## Ảnh lồng trong nội dung dịch vụ

Coach Duy chốt ngày 28/11/2026: dùng ảnh thật lồng phía sau như khối đào tạo để trang sống động hơn. Áp dụng có chọn lọc ở các phần nói về tư vấn, triển khai và huấn luyện; chọn ảnh khác nhau đúng ngữ cảnh. Lớp phủ và vị trí ảnh phải được chỉnh riêng trên điện thoại để chữ trắng rõ, người trong ảnh vẫn nhận ra được. Phần tiêu chuẩn, biểu đồ và số liệu tiếp tục dùng hình vẽ phù hợp nội dung.

`photo-surfaces.css` giữ lớp ảnh của 3 khối dịch vụ trên trang chủ và trang tổng quan dịch vụ, nạp sau `refinement.css`. Ảnh trang trí bằng CSS, nội dung chính vẫn nằm trong HTML.
