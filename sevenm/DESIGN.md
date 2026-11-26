# Quy chuẩn thiết kế SevenM

Coach Duy chốt ngày 27/11/2026: hình khối và thông tin phải tách rõ khỏi nền như framework tròn. Áp dụng cùng nguyên tắc cho website, slide và tài liệu. Giữ xanh than, đỏ thương hiệu, logo M gấp và nội dung 51 chuẩn hiện hành.

## Một nguồn cho mỗi phần

- `design-system.css`: thang chữ và bề mặt dùng chung, nạp cuối trên đủ 12 trang.
- `framework-wheel.js/css`: 7 trụ thuộc 3 nhóm 2/3/2, chọn nhóm hoặc chọn trụ riêng.
- `phuong-phap/index.html`: nguồn 51 chuẩn. Chạy `sync-standards.py` để sinh dữ liệu và `--check` để bắt lệch.
- `sales-os-map.js`: cách dựng sơ đồ nguồn đã được duyệt, không thay bằng các thẻ lớn đơn điệu.

## Chữ theo vai trò

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
