# Website Coach Duy Nguyễn

Trang web cá nhân của Coach Duy Nguyễn, định hướng Next Gen Founder. Trang tĩnh, không cần máy chủ.

## Cách sửa nội dung

Toàn bộ trang HTML được **sinh ra** từ các tệp Python. Không sửa trực tiếp tệp `.html`, vì lần dựng sau sẽ ghi đè.

| Muốn sửa gì | Sửa tệp nào |
|---|---|
| Thêm hoặc sửa bài blog | `bai_viet.py` |
| Thêm hoặc sửa chương trình | `chuong_trinh.py` |
| Menu, chân trang, khối cuối trang, địa chỉ liên kết | `lib.py` |
| Nội dung từng trang | `dung.py` |
| Sơ đồ trực quan | `so_do.py` |
| Màu, cỡ chữ, bố cục | `assets/style.css` |
| Hành vi trên trang | `assets/site.js` |

Sau khi sửa, chạy:

```
python3 dung.py
```

Nếu sửa `assets/style.css` hoặc `assets/site.js`, tăng `VER` trong `lib.py` để trình duyệt người xem tải bản mới.

## Kiểm trước khi đăng

```
python3 kiem_lien_ket.py
```

Kiểm giao diện: mở `kiem-tat-ca.html` bằng máy chủ cục bộ, mở bảng điều khiển trình duyệt và chạy `chayTatCa(1400)` rồi `chayTatCa(375)`. Chỉ đăng khi ra `0 loi`.

## Đăng lên GitHub Pages

Đẩy toàn bộ thư mục này lên nhánh chính của kho `coachduynguyen-creator/coach-duy-nguyen`, bật GitHub Pages ở nhánh đó.

## Đổi sang tên miền riêng

Sửa `BASE` trong `lib.py` thành `https://coachduynguyen.vn`, chạy lại `python3 dung.py`, thêm tệp `CNAME` chứa tên miền.
