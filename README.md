# Website Coach Duy Nguyễn

Trang web cá nhân của Coach Duy Nguyễn, định hướng Next Gen Founder. 27 trang tĩnh, không cần máy chủ.

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

## Còn để tạm, cần điền khi có

Trong `lib.py`:

- `TTC_LANDING` đang để trống. Khi trang bán The Trusted Creator ở `~/Codex_Projects/trusted-creator` được đăng, điền địa chỉ vào đây, chạy lại `dung.py`, mọi nút đăng ký của chương trình đó tự trỏ đúng chỗ.
- `BASE` đang là địa chỉ GitHub Pages. Khi chuyển sang coachduynguyen.vn thì sửa ở đây, chạy lại, và thêm tệp `CNAME`.

Trong `assets/site.js`:

- `NOI_NHAN` đang để `loai:'thu'`, tức bấm đăng ký bản tin thì mở ứng dụng thư với nội dung soạn sẵn. Khi có dịch vụ nhận thật, đổi thành `loai:'form'` và điền địa chỉ vào `form`.

## Kiểm trước khi đăng

```
python3 kiem_lien_ket.py
```

Kiểm giao diện: chạy máy chủ cục bộ trong thư mục này, mở `kiem-tat-ca.html`, mở bảng điều khiển trình duyệt và chạy `chayTatCa(1400)` rồi `chayTatCa(375)`. Chỉ đăng khi cả hai ra `0 loi`.

## Đăng lên GitHub Pages

Tạo kho công khai `coach-duy-nguyen` trong tài khoản `coachduynguyen-creator`, rồi:

```
git remote add origin https://github.com/coachduynguyen-creator/coach-duy-nguyen.git
git push -u origin main
```

Bật GitHub Pages ở nhánh chính trong phần Settings của kho.
