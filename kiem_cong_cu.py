# -*- coding: utf-8 -*-
"""Máy kiểm trang công cụ theo Tiêu chuẩn trang công cụ (Coach Duy chốt 11/10/2026).

    python3 kiem_cong_cu.py

Tiêu chuẩn bằng chữ nằm trong vault:
  02 Projects/Tools/Website coachduynguyen.vn/[C] Tiêu chuẩn trang công cụ.md
Mỗi điểm ở đây ứng với một mục trong tệp đó. Thêm điểm mới thì sửa cả hai.
Kiểm hai tầng: tệp nội dung (.md) đủ mục chưa, và trang đã dựng đủ khối chưa.
Thoát mã 1 khi có trang thiếu, để dung.py báo to.
"""
import os, re, sys
import cong_cu_ai as c

GOC = os.path.dirname(os.path.abspath(__file__))
THU_TU = ["dau-trang", "gioi-thieu", "vi-sao", "bai-mau", "cach-dung", "mo-cong-cu", "nguoi-soan", "cong-dong"]
Y_GIOI_THIEU = ["Giải quyết việc gì", "Bạn nhận được gì", "Dành cho ai", "Nên dùng khi nào"]


def kiem_noi_dung(x):
    loi = []
    if [t for t, _ in x["vi_ai"]] != Y_GIOI_THIEU:
        loi.append("mục 'Công cụ này dành cho bạn' phải đủ bốn ý: " + ", ".join(Y_GIOI_THIEU))
    if not x.get("mau_dan"):
        loi.append("thiếu mục 'Câu mở phần ví dụ'")
    if len(x["mau"]) != 2:
        loi.append("Phần 3 phải có đúng hai bài mẫu")
    thieu_kq = [l["so"] for l in x["lenh"] if l["so"] not in x["kq"]]
    if thieu_kq:
        loi.append("Phần 2b thiếu kết quả AI trả về cho câu lệnh %s" % thieu_kq)
    if len(x["lenh"]) < 2:
        loi.append("cần ít nhất hai câu lệnh (câu 1 đặt vai, câu 2 đưa số liệu)")
    h = c.HINH.get(x["ma"])
    if not h:
        loi.append("chưa có khung số trong HINH (cong_cu_ai.py)")
    elif not h.get("boi"):
        loi.append("khung số trong HINH thiếu câu bối cảnh 'boi'")
    if x["ma"] not in c.VIDEO:
        loi.append("chưa khai VIDEO (để trống nếu chưa quay)")
    return loi


def kiem_trang(ma):
    f = os.path.join(GOC, "cong-cu", ma + ".html")
    if not os.path.exists(f):
        return ["chưa dựng trang, chạy dung.py"]
    s = open(f, encoding="utf-8").read()
    mo = s.split("<template")[0]
    thu = [a or b for a, b in re.findall(r'<(?:section|header)[^>]*?(?:id="([^"]+)"|class="(dau-trang)[^"]*")', s)]
    form = s.split('id="cc-form"')[1].split("</form>")[0] if 'id="cc-form"' in s else ""
    diem = {
        "thứ tự bảy phần: " + " > ".join(THU_TU): [t for t in thu if t in THU_TU] == THU_TU,
        "thẻ ba bước ở cột phải đầu trang": 'class="cc-lo"' in s,
        "ba ô giới thiệu": s.count('class="cc-vi-o"') == 3,
        "câu bối cảnh trước khung số": 'class="hh-boi"' in s,
        "câu mở phần ví dụ": 'class="cc-mau-dan"' in s,
        "dòng ghi doanh nghiệp giả định": 'class="cc-gia-dinh"' in s,
        "câu lệnh 1 mở sẵn": 'id="lenh-1"' in mo,
        "nút chép ở cuối câu lệnh 1, không tự mở ChatGPT": "Chép câu lệnh 1" in mo and "chatgpt.com/?q" not in s,
        "biểu mẫu có tên, Zalo, vai trò, không hỏi doanh thu": all('name="%s"' % k in form for k in ("ten", "zalo", "vai_tro")) and 'name="doanh_thu"' not in form,
        "ô điền số nằm trong câu lệnh 2": 'class="cc-dien"' in s,
        "nút chép ở cuối câu lệnh 2": "Chép câu lệnh 2" in s,
        "hai dòng tiến độ": s.count('class="cc-tien"') == 2,
        "năm câu phân loại bắt buộc trong biểu mẫu (Coach Duy chốt 12/10/2026)": form.count('class="cc-pl"') == 5,
        "phần cách dùng và bộ câu lệnh nền sáng": all('phan-sang cc cc-lam" id="%s"' % k in s for k in ("cach-dung", "mo-cong-cu")),
        "không còn khối phiếu điền số riêng": "Phiếu điền số</h2>" not in s,
        "có lời mời cộng đồng": 'id="cong-dong"' in s,
        "khối giới thiệu Coach Duy trước lời mời": 'id="nguoi-soan"' in s and s.index('id="nguoi-soan"') < s.index('id="cong-dong"'),
    }
    return [k for k, v in diem.items() if not v]


def main():
    hong = 0
    for x in c.DS:
        loi = kiem_noi_dung(x) + kiem_trang(x["ma"])
        print(("ĐỦ    " if not loi else "THIẾU ") + x["ma"])
        for l in loi:
            print("        - " + l)
        hong += bool(loi)
    print("\n%d trên %d công cụ đạt tiêu chuẩn." % (len(c.DS) - hong, len(c.DS)))
    return 1 if hong else 0


if __name__ == "__main__":
    sys.exit(main())
