# -*- coding: utf-8 -*-
"""Bốn trang công cụ AI thu người đăng ký (D62, 10/10/2026).

Chữ trên trang đọc thẳng từ bốn tệp nội dung trong xưởng Next Gen Founder,
không chép sang đây, để chữ chỉ có một bản chuẩn. Sửa chữ thì sửa tệp .md
rồi chạy lại dung.py. Lấy Phần 1, 2, 3 và 7 của mỗi tệp; Phần 4, 5, 6 là
việc của phiên khác, không lên trang.

Phần mở (Google đọc được): tiêu đề, lời dẫn, cách dùng, hai bài mẫu.
Phần sau biểu mẫu nằm trong thẻ <template>, chỉ dựng ra khi người đọc đã
điền biểu mẫu năm ô. Biểu mẫu gửi vào đúng biểu mẫu Pancake của /tham-gia.
Số liệu doanh nghiệp trong phiếu chỉ lưu trên máy người dùng.
"""
import html, json, os, re

NGUON = "/Users/coachduynguyen/Codex_Projects/Next Gen Founder/deliverables/"
CONG_CU = [
    # (tên tệp trang, tệp nội dung)
    ("danh-gia-ke-hoach-2027", "NGF - Tài liệu thu lead 1, soi kế hoạch kinh doanh 2027 bằng AI.md"),
    ("so-khach-du-luong-co-lai", "NGF - Tài liệu thu lead 2, tính số khách để đủ lương và có lãi bằng AI.md"),
    ("quy-trinh-tu-cach-lam", "NGF - Tài liệu thu lead 3, biến cách làm trong đầu người chủ thành quy trình bằng AI.md"),
    ("khach-kho-tinh", "NGF - Tài liệu thu lead 4, để AI đóng vai khách khó tính kiểm cách tư vấn của nhân viên.md"),
    ("phan-bien-quyet-dinh", "NGF - Tài liệu thu lead 5, để AI hỏi khó một quyết định lớn trước khi chốt.md"),
]
# Hình minh họa đầu trang, dựng bằng HTML từ số của bài mẫu thứ nhất trong tệp
# nội dung. Mỗi trang một kiểu hình. Đổi số trong bài mẫu thì sửa luôn ở đây.
HINH = {
 "danh-gia-ke-hoach-2027": dict(kieu="cot", tieu="Tháng thấp nhất năm 2027, khi mở thêm cơ sở thứ ba",
   cot=[("Doanh thu tháng 7", 260, "260 triệu"), ("Tổng chi tháng 7, khi có cơ sở thứ ba", 439, "439 triệu")],
   ket="Tháng đó lỗ khoảng 179 triệu. Muốn qua hai tháng xấu liên tiếp, chủ cần để dành khoảng 360 triệu.", vd="Chuỗi spa hai cơ sở",
   boi="Chủ một chuỗi spa hai cơ sở muốn năm 2027 tăng doanh thu từ 4,2 tỷ lên 6 tỷ và mở thêm cơ sở thứ ba vào quý 2. Đưa kế hoạch cho AI, một điều AI tìm ra nằm ở tháng 7, tháng doanh thu thấp nhất năm nay."),
 "so-khach-du-luong-co-lai": dict(kieu="pheu", tieu="Muốn có lãi 40 triệu mỗi tháng, phải có bao nhiêu khách",
   tang=[("Người mới tiếp cận", "400", "576"), ("Cuộc tư vấn", "100", "144"), ("Khách mới", "30", "43")],
   ket="Thêm 13 khách mới mỗi tháng, tức 176 người tiếp cận nữa", vd="Nhà hàng hai cơ sở",
   boi="Chủ một nhà hàng hai cơ sở, khách chủ yếu đặt tiệc trước, đang lỗ khoảng 20 triệu mỗi tháng và muốn còn lại 40 triệu lãi. AI tính ngược từ mốc đó ra số người phải có ở từng bước."),
 "quy-trinh-tu-cach-lam": dict(kieu="gio", tieu="Việc báo giá: chủ lấy lại được bao nhiêu giờ mỗi tuần",
   buoc=[("12 giờ", "chủ đang tự làm"), ("9 giờ", "chuyển được cho nhân viên"), ("5,7 giờ", "chủ lấy lại mỗi tuần")],
   ket="Chưa tới 10 giờ chủ muốn, vì người nhận việc chưa đủ giờ rảnh", vd="Công ty phần mềm 12 người",
   boi="Chủ một công ty phần mềm 12 người làm 55 giờ mỗi tuần, riêng việc báo giá và chốt yêu cầu với khách đã mất 12 giờ. AI giúp chủ viết cách làm đó thành quy trình để giao cho người khác."),
 "phan-bien-quyet-dinh": dict(kieu="cot", tieu="Nhận hợp đồng 9 tỷ: tiền cần có trước khi đợt thanh toán đầu tiên về",
   cot=[("Tiền dự phòng đang có", 1.2, "1,2 tỷ"), ("Tiền cần có trong 3 tháng đầu", 2.77, "2,77 tỷ")],
   ket="Thiếu khoảng 1,57 tỷ nếu chủ đầu tư không tạm ứng", vd="Công ty xây dựng nhà phố",
   boi="Chủ một công ty xây dựng nhà phố đang cân nhắc nhận hợp đồng 9 tỷ, gấp ba hợp đồng lớn nhất từng làm. Trước khi ký, AI tính số tiền phải ứng ra trước khi chủ đầu tư trả đợt đầu."),
 "khach-kho-tinh": dict(kieu="bang", tieu="Điểm luyện của bốn nhân viên với bốn kiểu khách khó",
   cot=["So sánh giá", "Hỏi người khác", "Từng bị làm hỏng", "Im lặng"],
   hang=[("An", [4, 6, 8, 3]), ("Bình", [5, 5, 7, 4]), ("Chi", [7, 6, 8, 6]), ("Dũng", [3, 4, 6, 2])],
   ket="Cả đội ngũ yếu nhất với khách im lặng và khách so sánh giá", vd="Công ty dịch vụ kế toán",
   boi="Một công ty dịch vụ kế toán có bốn nhân viên tư vấn, tỷ lệ chốt khoảng 22%. AI đóng vai bốn kiểu khách khó, từng nhân viên tập trả lời, rồi AI chấm điểm trên thang 10."),
}

def hinh(ma):
    h = HINH.get(ma)
    if not h:
        return ""
    if h["kieu"] == "cot":
        lon = max(v for _, v, _ in h["cot"])
        than = '<div class="hh-cot">%s</div>' % "".join(
            '<div class="hh-c"><span class="hh-so">%s</span><i style="--h:%.2f"></i><span class="hh-nhan">%s</span></div>'
            % (chu, v / lon, ten) for ten, v, chu in h["cot"])
    elif h["kieu"] == "pheu":
        than = '<div class="hh-pheu">%s</div>' % "".join(
            '<div class="hh-t" style="--w:%d%%"><span>%s</span><b>%s <em>&rarr;</em> %s</b></div>'
            % (100 - i * 18, ten, cu, moi) for i, (ten, cu, moi) in enumerate(h["tang"]))
        than += '<p class="hh-chu">Hiện nay &rarr; mốc có lãi</p>'
    elif h["kieu"] == "gio":
        than = '<div class="hh-gio">%s</div>' % '<span class="hh-mui" aria-hidden="true">&rarr;</span>'.join(
            '<div><b>%s</b><span>%s</span></div>' % b for b in h["buoc"])
    else:
        than = '<table class="hh-bang"><thead><tr><th></th>%s</tr></thead><tbody>%s</tbody></table>' % (
            "".join("<th>%s</th>" % c for c in h["cot"]),
            "".join('<tr><th>%s</th>%s</tr>' % (ten, "".join('<td style="--p:%.2f">%d</td>' % (d / 10, d) for d in ds))
                    for ten, ds in h["hang"]))
    return ('<p class="hh-boi">%s</p><figure class="hh hh--%s"><figcaption><span class="hh-vd">Ví dụ · %s</span>%s</figcaption>%s'
            '<p class="hh-ket">%s</p></figure>' % (h["boi"], h["kieu"], h["vd"], h["tieu"], than, h["ket"]))

# Mã YouTube của video Coach Duy làm thật, khoảng 5 phút. Để trống thì trang không có khối video.
VIDEO = {"danh-gia-ke-hoach-2027": "", "so-khach-du-luong-co-lai": "", "quy-trinh-tu-cach-lam": "", "khach-kho-tinh": "", "phan-bien-quyet-dinh": ""}


# ------------------------------------------------------------ đọc tệp .md
def _chia(chu, muc):
    """Chia văn bản theo dòng tiêu đề cấp `muc` (## hoặc ###). Trả về [(tiêu đề, thân)]."""
    phan, ten, dong = [], None, []
    for d in chu.split("\n"):
        if d.startswith(muc + " "):
            phan.append((ten, "\n".join(dong)))
            ten, dong = d[len(muc) + 1:].strip(), []
        else:
            dong.append(d)
    phan.append((ten, "\n".join(dong)))
    return phan

def _khoi(than):
    """Tách thân thành các khối cách nhau bằng dòng trống, bỏ đường kẻ ---."""
    return [k.strip() for k in re.split(r"\n\s*\n", than) if k.strip() and k.strip() != "---"]

def _ds(khoi):
    """Danh sách đánh số '1. ...' thành list chữ."""
    return [re.sub(r"^\d+\.\s+", "", d).strip() for d in khoi.split("\n") if re.match(r"^\d+\.\s", d)]

def _dong(s):
    """Chữ trong một dòng: thoát ký tự HTML rồi đổi **đậm**."""
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", html.escape(s, quote=False))

# Con số kèm đơn vị trong bài mẫu được tô vàng, để mắt bắt được ngay số nào đáng lo.
_SO = re.compile(r"(?<![\w])(\d[\d.,]*\s?(?:%|tỷ|triệu|lượt|giờ|cuộc|người|đơn|vụ|tuần|ngày|tháng|điểm|gói|hợp đồng|đồng)(?![\w]))")
def _dong_so(s):
    return _SO.sub(r'<span class="cc-so">\1</span>', _dong(s))

def _so(o):
    try: return float(o.replace(",", "."))
    except ValueError: return None

def _bang(khoi):
    """Bảng điểm: ô điểm trên 10 tô đậm nhạt theo điểm, nhìn là thấy chỗ yếu."""
    hang = [[o.strip() for o in d.strip().strip("|").split("|")] for d in khoi.split("\n")]
    hang = [h for h in hang if not all(re.fullmatch(r":?-+:?", o) for o in h)]
    dau = "".join("<th>%s</th>" % _dong(o) for o in hang[0])
    def o_bang(o, j):
        v = _so(o)
        if v is not None and 0 < j < len(hang[0]) - 1 and v <= 10:
            return '<td class="cc-diem" style="--p:%.2f">%s</td>' % (v / 10, _dong(o))
        return "<td>%s</td>" % _dong(o)
    than = "".join("<tr>%s</tr>" % "".join(o_bang(o, j) for j, o in enumerate(h)) for h in hang[1:])
    return '<div class="cc-bang"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (dau, than)

def _html(than):
    """Bài mẫu thành HTML. Đoạn "Số liệu" vào hộp xám, mỗi chỗ hở thành một thẻ
    đánh số, việc AI đề xuất thành khung nhấn. Chữ giữ nguyên, chỉ đổi cách bày."""
    ra, nhan_sau, so_ho = [], "", 0
    for k in _khoi(than):
        if k.startswith("> "):
            continue
        if k.startswith("|"):
            ra.append(_bang(k)); continue
        if k.startswith("### Bài mẫu thứ"):
            viec = k[4:].split(": ", 1)[-1].split(", ", 1)
            if len(viec) == 2:
                ra.append("<h4>%s</h4>" % _dong(viec[1][0].upper() + viec[1][1:]))
            continue
        if k.startswith("### "):
            t = k[4:]
            nhan_sau = "lieu" if t.startswith("Số liệu") else "de-xuat" if t.startswith("Việc AI đề xuất") else ""
            ra.append('<h4 class="cc-h4">%s</h4>' % _dong(t)); continue
        if re.match(r"^\d+\.\s", k):
            ra.append("<ol>%s</ol>" % "".join("<li>%s</li>" % _dong_so(x) for x in _ds(k))); continue
        m = re.match(r"^\*\*(Chỗ hở thứ \w+): (.+?)\*\*\s*(.*)$", k, re.S)
        if m:
            so_ho += 1
            ra.append('<div class="cc-ho"><span class="cc-ho-so">%02d</span><div><h5>%s</h5><p>%s</p></div></div>'
                      % (so_ho, _dong(m.group(2)[0].upper() + m.group(2)[1:]), _dong_so(m.group(3))))
            continue
        if k.startswith("**Số liệu.**") or nhan_sau == "lieu":
            ra.append('<div class="cc-lieu"><p>%s</p></div>' % _dong(k.replace("**Số liệu.** ", "", 1)))
        elif k.startswith("**Việc AI đề xuất") or nhan_sau == "de-xuat":
            ra.append('<div class="cc-de-xuat"><p>%s</p></div>' % _dong_so(k))
        elif k.startswith("AI đề xuất"):
            ra.append('<p class="cc-ai-noi">%s</p>' % _dong_so(k))
        else:
            ra.append("<p>%s</p>" % _dong_so(k))
        nhan_sau = ""
    return "".join(ra)

def doc(ma, tep):
    chu = open(os.path.join(NGUON, tep), encoding="utf-8").read()
    phan = {(t or "").split(".")[0]: b for t, b in _chia(chu, "##")}
    p1 = {t: b for t, b in _chia(phan["Phần 1"], "###") if t}
    p7 = phan["Phần 7"]
    cc = dict(ma=ma)
    cc["tieu"] = _khoi(p1["Tiêu đề trang"])[0]
    cc["duoi"] = _khoi(p1["Câu dưới tiêu đề"])[0]
    cc["dan"] = _khoi(p1["Lời dẫn của Duy"])
    k = _khoi(p1["Cách dùng, ba bước"])
    cc["buoc"], cc["buoc_sau"] = _ds(k[0]), k[1:]
    k = _khoi(p1["Phiếu điền số"])
    cc["phieu_dan"], cc["o"] = k[0], _ds(k[1])
    cc["moi"] = [x for x in _khoi(p1["Lời mời cuối trang"]) if not x.startswith("Nút:")]
    # Điều người đọc nhận được, lấy từ câu đầu của lời mời cuối trang đã duyệt:
    # "Làm xong bộ câu lệnh, bạn đang có trong tay X." Dùng làm mô tả trên thẻ.
    m = re.search(r"bạn đang có trong tay (.+?)\.", cc["moi"][0])
    cc["nhan_duoc"] = m.group(1) if m else cc["duoi"]
    m = re.search(r"(\d+(?: tới \d+)?) phút", " ".join(cc["buoc_sau"]))
    cc["phut"] = m.group(1) if m else ""

    # Câu lệnh: đoạn mở "Câu này chép vào ..." là lời dặn người chủ, không chép sang AI.
    cc["lenh"] = []
    for t, b in _chia(phan["Phần 2"], "###")[1:]:
        so, ten = re.match(r"Câu lệnh (\d+)\. (.+)", t).groups()
        doan = _khoi(b)
        dan = doan.pop(0) if doan[0].startswith("Câu này chép") else ""
        cc["lenh"].append(dict(so=int(so), ten=ten, dan=dan, chu="\n\n".join(doan)))

    # Kết quả AI trả về và mẹo cho từng câu lệnh (Phần 2b), hiện dưới khối câu lệnh.
    cc["kq"] = {}
    for t, bk in _chia(phan.get("Phần 2b", ""), "###")[1:]:
        so = int(re.search(r"\d+", t).group())
        kq = re.search(r"^Kết quả: (.+)$", bk, re.M); meo = re.search(r"^Mẹo: (.+)$", bk, re.M)
        cc["kq"][so] = (kq.group(1) if kq else "", meo.group(1) if meo else "")

    # Câu lệnh 2 có các chỗ trống trong ngoặc vuông, theo đúng thứ tự ô trong phiếu.
    l2 = cc["lenh"][1]
    trong = re.findall(r"\[[^\]]+\]", l2["chu"])
    assert len(trong) == len(cc["o"]), "%s: câu lệnh 2 có %d chỗ trống, phiếu có %d ô" % (ma, len(trong), len(cc["o"]))
    cc["trong"] = trong

    # Bài mẫu: bỏ đoạn ghi chú cho người dựng trước khối đầu tiên, tách ở "Bài mẫu thứ hai".
    p3 = phan["Phần 3"]
    dau = min(i for i in (p3.find("\n> "), p3.find("\n### ")) if i >= 0)
    p3 = p3[dau:]
    i2 = p3.find("\n### Bài mẫu thứ hai")
    cc["mien_tru"] = _dong(re.search(r"^> (.+)$", p3, re.M).group(1))
    the = re.search(r'hai thẻ "([^"]+)" và "([^"]+)"', p7).groups()
    cc["mau"] = [(the[0], _html(p3[:i2])), (the[1], _html(p3[i2:]))]

    # Biểu mẫu năm ô: lựa chọn lấy đúng chữ trong Phần 7.
    def lua(nhan):
        return [x.strip() for x in re.search(nhan + r" \(([^)]+)\)", p7).group(1).split(";")]
    cc["vai_tro"], cc["doanh_thu"], cc["doi_ngu"] = lua("vai trò"), lua("doanh thu mỗi tháng"), lua("số người trong đội ngũ")

    # Ghi chú nhỏ trên câu lệnh, nếu Phần 7 có dặn.
    cc["nhan"] = {}
    m = re.search(r'Các câu ([\d, và]+) có nhãn nhỏ "([^"]+)"', p7)
    if m:
        for n in re.findall(r"\d+", m.group(1)):
            cc["nhan"][int(n)] = m.group(2)
    for n, g in re.findall(r'Câu lệnh (\d+) ghi chú(?: nhỏ phía trên)?: "([^"]+)"', p7):
        if not cc["lenh"][int(n) - 1]["dan"]:
            cc["nhan"][int(n)] = g
    # Ô nhập nhiều dòng có gợi ý riêng.
    m = re.search(r'Ô (\d+) \([^)]*\) và ô (\d+) \([^)]*\) đặt ô nhập nhiều dòng, có gợi ý "([^"]+)"', p7)
    cc["goi_y"] = {int(m.group(1)): m.group(3), int(m.group(2)): m.group(3)} if m else {}
    return cc

DS = [doc(ma, tep) for ma, tep in CONG_CU]


# ------------------------------------------------------------ dựng trang
def _p(ds):
    return "".join("<p>%s</p>" % _dong(x) for x in ds)

def _the_lien_quan(c):
    return ('<a class="cc-khac" href="%s.html">'
            '<b>%s</b><span class="lk-v">Mở công cụ <span class="mt" aria-hidden="true">&rarr;</span></span></a>'
            % (c["ma"], html.escape(c["tieu"])))

def _kq(v):
    if not v or not v[0]:
        return ""
    return ('<div class="cc-kq"><p><b>AI sẽ trả về.</b> %s</p>%s</div>'
            % (_dong_so(v[0]), ('<p class="cc-meo"><b>Mẹo.</b> %s</p>' % _dong(v[1])) if v[1] else ""))

def _chon(ten, nhan, ds):
    return ('<label class="cc-o"><span>%s</span><select name="%s" required><option value="">Chọn</option>%s</select></label>'
            % (nhan, ten, "".join('<option value="%d">%s</option>' % (i, html.escape(x[0].upper() + x[1:])) for i, x in enumerate(ds))))

def than_trang(cc):
    ma = cc["ma"]
    video = ""
    if VIDEO.get(ma):
        video = ('<div class="cc-video hien"><iframe src="https://www.youtube-nocookie.com/embed/%s?rel=0" '
                 'title="Video: %s" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>'
                 % (VIDEO[ma], html.escape(cc["tieu"])))
    # Ba bước thành ba thẻ có số và biểu tượng: điền số, chép sang ChatGPT, nhận kết quả.
    IC = ['<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
          '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8"/>',
          '<path d="M5 12l4 4 10-10"/>']
    buoc = '<div class="cc-buoc">%s</div>' % "".join(
        '<div class="cc-b"><div class="cc-b-dau"><span class="cc-b-so">%02d</span><span class="cc-b-ic" aria-hidden="true">'
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">%s</svg>'
        '</span></div><p>%s</p></div>' % (i + 1, IC[i % 3], _dong(x)) for i, x in enumerate(cc["buoc"]))
    buoc += "".join('<div class="cc-gio"><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">'
                    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><p>%s</p></div>' % _dong(x) for x in cc["buoc_sau"])
    # Lời dẫn: câu Duy tự nói với mình trong ngoặc kép được tô nổi lên.
    def nhan_trich(x):
        return re.sub(r'"([^"]+)"', r'<span class="cc-trich">"\1"</span>', _dong(x))
    dan = "".join('<p%s>%s</p>' % (' class="cc-mo-dau"' if i == 0 else "", nhan_trich(x)) for i, x in enumerate(cc["dan"]))
    tab = "".join('<button class="cc-tab%s" type="button" role="tab" aria-selected="%s" data-the="%d">%s</button>'
                  % (" chon" if i == 0 else "", "true" if i == 0 else "false", i, html.escape(t)) for i, (t, _) in enumerate(cc["mau"]))
    mau = "".join('<div class="cc-mau" role="tabpanel" data-the="%d">%s</div>' % (i, h) for i, (_, h) in enumerate(cc["mau"]))

    # Phiếu điền số và bộ câu lệnh, dựng ra khi đã qua biểu mẫu.
    o = "".join('<label class="cc-o"><span><b>%d.</b> %s</span><textarea rows="%d" data-o="%d"%s></textarea></label>'
                % (i + 1, _dong(x), 3 if (i + 1) in cc["goi_y"] else 2, i + 1,
                   (' placeholder="%s"' % html.escape(cc["goi_y"][i + 1])) if (i + 1) in cc["goi_y"] else "")
                for i, x in enumerate(cc["o"]))
    lenh, lenh_mo = "", ""
    for l in cc["lenh"]:
        ghi = l["dan"] or cc["nhan"].get(l["so"], "")
        lenh += ('<div class="cc-lenh" data-so="%d"><div class="cc-lenh-dau"><div><span class="mono">Câu lệnh %d</span><h3>%s</h3></div>'
                 '<button class="nut nut-vien cc-chep" type="button">Chép</button></div>%s<div class="cc-chu">%s</div>%s</div>'
                 % (l["so"], l["so"], _dong(l["ten"]), ('<p class="cc-ghi">%s</p>' % _dong(ghi)) if ghi else "", html.escape(l["chu"]),
                    _kq(cc["kq"].get(l["so"]))))
        if l["so"] == 1:   # câu lệnh 1 mở cho mọi người xem trước khi điền
            lenh_mo, lenh = lenh, ""
    du_lieu = json.dumps(dict(ma=ma, trong=cc["trong"], mau2=cc["lenh"][1]["chu"]), ensure_ascii=False).replace("</", "<\\/")

    khac = "".join(_the_lien_quan(c) for c in DS if c["ma"] != ma)
    return """<header class="dau-trang hoa-van cc-dau">
  <div class="bd cc-dau-luoi">
    <div>
      <a class="cc-ve" href="./">&larr; Tất cả công cụ</a>
      <h1>%(tieu)s</h1>
      <p class="dan">%(duoi)s</p>
      <ul class="cc-chip"><li><b>%(n_lenh)d</b> câu lệnh</li><li>Điền <b>%(n_o)d</b> thông tin</li><li>Dùng được với ChatGPT bản miễn phí</li></ul>
    </div>
  </div>
</header>

<section class="phan bd phan-sang cc" id="bai-mau">
  <div class="cc-doc">
    <h2>AI tìm ra gì ở hai doanh nghiệp mẫu</h2>
    %(hinh)s
    <p class="cc-gia-dinh">%(mien_tru)s</p>
    <div class="cc-tabs" role="tablist">%(tab)s</div>
    %(mau)s
  </div>
</section>

<section class="phan bd cc cc-toi" id="cach-dung">
  <div class="cc-doc cc-rong">
    <h2>Cách dùng</h2>
    %(buoc)s
  </div>
</section>

<section class="phan bd cc cc-toi" id="mo-cong-cu">
  <div class="cc-doc">
    <h2>Bộ câu lệnh</h2>
    %(lenh_mo)s
    <div class="hop cc-cua" id="cc-cua">
      <h2>Còn %(con)d câu lệnh và phiếu tự ghép số liệu của bạn</h2>
      <p class="cc-cua-dan">Điền 3 ô để mở ngay.</p>
      <form id="cc-form" novalidate>
        <div class="cc-hai"><label class="cc-o"><span>Tên</span><input name="ten" autocomplete="name" required></label>
        <label class="cc-o"><span>Zalo</span><input name="zalo" type="tel" inputmode="tel" autocomplete="tel" required></label></div>
        %(vai_tro)s
        <p class="cc-loi" id="cc-loi" hidden></p>
        <button class="nut nut-v" type="submit">Mở bộ câu lệnh <span class="mt" aria-hidden="true">&rarr;</span></button>
      </form>
    </div>
    <div id="cc-kin"></div>
    <template id="cc-mau-kin">
      <form class="hop cc-them" id="cc-them" novalidate>
        <p class="cc-them-dau">Để đội ngũ ưu tiên hỗ trợ bạn khi chạy thử, bạn cho Duy biết thêm hai điều. Không bắt buộc.</p>
        <div class="cc-hai">%(doanh_thu)s
        %(doi_ngu)s</div>
        <button class="nut nut-vien" type="submit">Gửi</button>
      </form>
      <h2 class="cc-h-lenh">Phiếu điền số</h2>
      <p>%(phieu_dan)s</p>
      <div class="cc-phieu">%(o)s</div>
      %(lenh)s
    </template>
  </div>
</section>

<section class="phan bd phan-sang cc" id="vi-sao">
  <div class="cc-doc cc-dan">
    <h2>Vì sao có bộ câu lệnh này</h2>
    %(dan)s
  </div>
  %(video)s
</section>

<section class="phan tran cc-moi" id="cong-dong">
  <div class="tran-nen" aria-hidden="true"><img src="../img/cd-san-khau.webp" alt="" loading="lazy"></div>
  <div class="bd"><div class="cc-doc">
    %(moi)s
    <a class="nut nut-v" id="cc-dang-ky" href="../tham-gia/?cong-cu=%(ma)s">Đăng ký tham gia cộng đồng <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div></div>
</section>

<section class="phan bd phan-sang cc">
  <div class="cc-doc cc-rong">
    <p class="mono">Công cụ khác</p>
    <div class="cc-khac-luoi">%(khac)s</div>
  </div>
</section>
<script type="application/json" id="cc-du-lieu">%(du_lieu)s</script>
<script src="../assets/cong-cu-ai.js?v={VER}"></script>""" % dict(
        tieu=_dong(cc["tieu"]), duoi=_dong(cc["duoi"]), dan=dan, hinh=hinh(ma), video=video, buoc=buoc,
        mien_tru=cc["mien_tru"], tab=tab, mau=mau, phieu_dan=_dong(cc["phieu_dan"]), o=o, lenh=lenh,
        vai_tro=_chon("vai_tro", "Vai trò", cc["vai_tro"]), lenh_mo=lenh_mo, con=len(cc["lenh"]) - 1, doanh_thu=_chon("doanh_thu", "Doanh thu mỗi tháng", cc["doanh_thu"]),
        doi_ngu=_chon("doi_ngu", "Số người trong đội ngũ", cc["doi_ngu"]),
        moi=_p(cc["moi"]), ma=ma, n_lenh=len(cc["lenh"]), n_o=len(cc["o"]), khac=khac, du_lieu=du_lieu)


# Trang Pancake chuyển tới sau khi người đọc gửi biểu mẫu "NGF Công cụ AI".
# Không cho Google đọc. Nó ghi nhận đã điền rồi đưa người đọc về đúng công cụ
# vừa mở (trang công cụ ghi tên mình vào máy trước khi hiện biểu mẫu). Biểu
# mẫu nằm trong khung con nên chuyển cả trang cha, không chỉ khung con.
DA_DANG_KY = """<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Đang mở bộ câu lệnh</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F2E9DA;color:#241B14;font:16px/1.6 system-ui,sans-serif;text-align:center;padding:24px}a{color:#8F5808;font-weight:600}</style>
</head>
<body>
<p>Đang mở bộ câu lệnh cho bạn.<br><a id="ve" href="./">Bấm vào đây nếu trang chưa tự chuyển</a></p>
<script>
(function(){
  var ma = null, dich = './';
  try { ma = localStorage.getItem('ngf-cho'); } catch (e) {}
  if (ma && /^[a-z0-9-]+$/.test(ma)) {
    dich = ma + '.html#mo-cong-cu';
    try {
      var n = JSON.parse(localStorage.getItem('ngf-lead') || '{}');
      n.qua_pancake = true; n.da = n.da || []; if (n.da.indexOf(ma) < 0) n.da.push(ma);
      localStorage.setItem('ngf-lead', JSON.stringify(n));
    } catch (e) {}
  }
  document.getElementById('ve').href = dich;
  try { (window.top || window).location.href = new URL(dich, location.href).href; }
  catch (e) { location.href = dich; }
})();
</script>
</body>
</html>
"""
