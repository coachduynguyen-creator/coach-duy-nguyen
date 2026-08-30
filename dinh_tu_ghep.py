"""Nối hai âm tiết của từ ghép tiếng Việt bằng khoảng trắng không ngắt.

Chỉ chạy trên tiêu đề, nhãn đậm, câu trích lớn và câu dẫn. Không chạy trên
chữ thân bài: nbsp quá nhiều làm dòng không ngắt được và tràn ở khổ hẹp.
Chạy lại nhiều lần không sao, chỗ đã nối rồi thì không khớp mẫu nữa.
"""
import re, sys

NB = chr(160)
GHEP = ("khách hàng|doanh nghiệp|thương hiệu|thị trường|nội dung|chuyên môn|chuyên gia|"
"trải nghiệm|sáng lập|quan điểm|tiêu chuẩn|chất liệu|phong thái|vị thế|tín hiệu|quyết định|"
"câu chuyện|đội ngũ|sản phẩm|chương trình|đăng ký|đầu tư|phù hợp|tham gia|thực hành|điểm danh|"
"phản hồi|xuất bản|định dạng|luận điểm|niềm tin|uy tín|cố vấn|đối tác|kết quả|công việc|giá trị|"
"tình trạng|phụ thuộc|thuật toán|tích lũy|trọng lượng|thể hiện|hành động|rèn luyện|sản xuất|"
"thông thường|thời điểm|kết nối|cảm giác|kỳ vọng|kinh nghiệm|thiết kế|vận hành|hoàn thành|"
"cam kết|bảo đảm|thanh toán|học phí|cộng đồng|thành viên|trí tuệ|nhân tạo|xu hướng|theo dõi|"
"lãnh địa|tình huống|bằng chứng|trụ cột|quy trình|kế hoạch|khai giảng|điều kiện|nhận xét|"
"định vị|thử thách|tiếp tục|xuất hiện|làm nghề|giải trí|nghiêm túc|chủ động|tự nhiên|điều khoản|"
"giải quyết|đại diện|hình thức|người chủ")
CAP = [c.strip() for c in GHEP.split('|') if c.strip()]

def _noi(chu):
    for c in CAP:
        a, b = c.split(' ', 1)
        for bien in (c, a[0].upper() + a[1:] + ' ' + b):
            chu = re.sub(r'(?<![\w' + NB + r'])' + re.escape(bien) + r'(?![\w])',
                         bien.replace(' ', NB), chu)
    return chu

def noi_bo_qua_the(txt):
    """Nối trong phần chữ, bỏ qua mọi thẻ HTML."""
    ra, i = [], 0
    for m in re.finditer(r'<[^>]+>', txt):
        ra.append(('t', txt[i:m.start()])); ra.append(('g', m.group(0))); i = m.end()
    ra.append(('t', txt[i:]))
    return ''.join(p if k == 'g' else _noi(p) for k, p in ra)

MAU = [
    r'(<(?:h1|h2|h3|h4)[^>]*>)(.*?)(</(?:h1|h2|h3|h4)>)',
    r'(<p class="dan"[^>]*>)(.*?)(</p>)',
    r'(<strong>)([^<]*)(</strong>)',
    r'(<div class="nhan-dang hien">\s*<b>)(.*?)(</b>)',
    r'(<div class="ket-cap hien">\s*<b>)(.*?)(</b>)',
    r'(<div class="chan(?: cuoi)?"><b>)(.*?)(</b>)',
    r'(<figcaption>\s*<b>)(.*?)(</b>)',
    r'(<div class="noi hien tre">)(.*?)(</div>\s*</div>)',
    r'(<div class="ke-thu hien">\s*<b>)(.*?)(</b>)',
    r'(<div class="tieu hien">\s*<h3>)(.*?)(</h3>)',
    r'(<summary>)(.*?)(</summary>)',
]

def chay(duong):
    s = open(duong, encoding='utf-8').read()
    truoc = s.count(NB)
    for mau in MAU:
        s = re.sub(mau, lambda m: m.group(1) + noi_bo_qua_the(m.group(2)) + m.group(3),
                   s, flags=re.S)
    open(duong, 'w', encoding='utf-8').write(s)
    return s.count(NB) - truoc, s.count(NB)

if __name__ == '__main__':
    them, tong = chay(sys.argv[1])
    print('them %d, tong %d khoang trang khong ngat' % (them, tong))
