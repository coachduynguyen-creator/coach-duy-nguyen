# Thư mục này KHÔNG do mã sinh trang tạo ra. Đừng xóa.

`/founder-brand/` là trang bán Trusted Founder Brand Challenge: một tệp HTML tự
chứa, **chép tay** từ kho nguồn, không nằm trong `dung.py`, `chuong_trinh.py`,
`lib.py` hay `so_do.py`.

**Kho nguồn:** `~/Codex_Projects/trusted-founder-brand`
**Cập nhật:** sửa ở kho nguồn rồi chạy `bash dong-bo.sh` trong kho đó.

## Đã bị xóa nhầm hai lần trong một giờ, ngày 25/08/2026

- `ed8d813` đưa trang Cộng đồng về tên miền chung, xóa mất sáu tệp ở đây.
- `8636772` thay ảnh phần Năm việc, lại xóa tiếp sáu tệp đó.

Cả hai lần trang đang chạy thật thành 404. Không có lệnh xóa nào trong mã sinh
trang, nên nguyên nhân là commit chạy `git add -A` từ một thư mục làm việc chưa
có thư mục này.

## Trước khi commit vào kho này

Chạy `git status` và nhìn kỹ. Nếu thấy sáu tệp trong `founder-brand/` bị đánh
dấu xóa mà bạn không cố ý, hãy khôi phục bằng:

```
git checkout HEAD -- founder-brand
```
