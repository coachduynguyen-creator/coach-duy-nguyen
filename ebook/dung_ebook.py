# -*- coding: utf-8 -*-
"""Dựng e-book theo khuôn chung Coach Duy Nguyễn và Next Gen Founder, xuất PDF bằng Chrome.

    python3 ebook/dung_ebook.py E1          # dựng một cuốn
    python3 ebook/dung_ebook.py             # dựng mọi cuốn có tệp nội dung

Chữ của từng cuốn nằm ở Next Gen Founder/deliverables/NGF - E-book <mã>, <tên>.md, phần dưới
"## Nội dung e-book". Tên, câu giới thiệu và mô tả lấy từ tệp tên đã duyệt (phiếu ban-chot/phieu-ten).
Trang người soạn lấy từ khối giới thiệu Coach Duy đã duyệt. Khuôn trình bày ở ebook/khuon.css.
Kết quả: ebook/ra/<mã>.html (bản xem) và tai-lieu/<tên tệp>.pdf (bản tải về trên website).

Cú pháp trong tệp nội dung:
  ### Phần N. Tên phần      một phần lớn; "### Mở đầu" là đoạn mở
  #### Câu N. Câu hỏi      một thẻ câu hỏi; trong thẻ có dòng "Nhãn: ...", "Vì sao phải có: ...",
                           "Sai hay gặp: ...", "Dấu hiệu đã đạt: ..."
  **Nếu hổng câu N.** ... một ô việc, các ô liền nhau xếp thành lưới hai cột
  **Câu lệnh N. Tên** rồi khối ``` ... ```   một khung câu lệnh để chép sang ChatGPT
  > ...                      khung nhấn nền tối
  Ô viết: N                  N dòng kẻ để viết tay
  bảng | ... |, danh sách 1. 2. 3., **đậm** như Markdown thường
"""
import html, os, re, subprocess, sys

GOC = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.dirname(GOC)
NGF = os.path.expanduser("~/Codex_Projects/Next Gen Founder/deliverables")
TEN_MD = os.path.join(NGF, "NGF - Tên công cụ và e-book theo nỗi đau người chủ ngày 11-10-2026.md")
GT_MD = os.path.join(NGF, "NGF - Khối giới thiệu Coach Duy trên trang công cụ.md")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
FONT = ('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800'
        '&family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=IBM+Plex+Mono:wght@500;600&display=swap">')
# Tên tệp PDF trên website, theo mã e-book. Thêm dòng khi có cuốn mới.
TEP_PDF = {"E1": "sau-cau-hoi-dinh-vi-thuong-hieu-nguoi-sang-lap.pdf"}
MUC_LUC_BO = {"Mở đầu"}
e = html.escape


def dong(s):
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", e(s, quote=False))


def ten_da_duyet(ma):
    t = open(TEN_MD, encoding="utf-8").read()
    m = re.search(r"^### %s\. (.+?)\n\n\*\*Câu giới thiệu\.\*\* (.+?)\n\n\*\*Mô tả\.\*\* (.+?)\n" % re.escape(ma), t, re.M)
    return m.group(1), m.group(2), m.group(3)


def nguoi_soan():
    t = open(GT_MD, encoding="utf-8").read()
    b1 = t[t.index("## Bản 1."):t.index("## Bản 2.")]
    doan = [x.strip() for x in b1.split("\n\n") if x.strip().startswith(("Duy học", "Bây giờ Duy"))]
    # Câu cuối nói về e-book thay vì công cụ.
    doan[-1] = doan[-1][:doan[-1].rindex("Mỗi công cụ")] + "Cuốn e-book này là một phần của cách làm đó, viết lại để bạn tự làm được với chính doanh nghiệp mình."
    return doan


def than_sach(chu):
    """Phần nội dung thành HTML theo cú pháp ở đầu tệp."""
    ra, muc, i = [], [], 0
    k = [x for x in re.split(r"\n\s*\n", chu.strip())]
    viec = []

    def xa_viec():
        if viec:
            ra.append('<div class="viec">%s</div>' % "".join(viec)); viec.clear()
    while i < len(k):
        b = k[i].strip(); i += 1
        if not b:
            continue
        if not b.startswith("**Nếu hổng"):
            xa_viec()
        if b.startswith("### "):
            t = b[4:]
            m = re.match(r"(Phần \d+)\. (.+)", t)
            if t == "Mở đầu":
                ra.append('<div class="mo-dau-dau"></div>'); continue
            muc.append(t)
            moi = ' phan-moi' if m and m.group(1) in ("Phần 4",) else ""
            ra.append('<h2 class="phan%s"><span class="so">%s</span>%s</h2>' % (moi, e(m.group(1)) if m else "", dong(m.group(2) if m else t)))
        elif b.startswith("#### "):
            m = re.match(r"Câu (\d+)\. (.+)", b[5:])
            the, nhan, ba = [], "", {}
            while i < len(k) and not k[i].startswith(("#### ", "### ", "> ")):
                x = k[i].strip(); i += 1
                if x.startswith("Nhãn: "): nhan = x[6:]
                elif re.match(r"(Vì sao phải có|Sai hay gặp|Dấu hiệu đã đạt): ", x):
                    ten, noi = x.split(": ", 1); ba[ten] = noi
                else: the.append("<p>%s</p>" % dong(x))
            ba_html = "".join('<div class="%s"><b>%s</b>%s</div>' % (lop, ten, dong(ba[ten][0].upper() + ba[ten][1:]))
                              for ten, lop in (("Vì sao phải có", ""), ("Sai hay gặp", "sai"), ("Dấu hiệu đã đạt", "dat")) if ten in ba)
            ra.append('<div class="cau"><div class="cau-dau"><span class="cau-so">%s</span><div><p class="nhan">%s</p><h3>%s</h3></div></div>'
                      '<div class="cau-than">%s<div class="cau-ba">%s</div></div></div>' % (m.group(1), e(nhan), dong(m.group(2)), "".join(the), ba_html))
        elif b.startswith("**Nếu hổng"):
            m = re.match(r"\*\*(.+?)\*\*\s*(.+)", b, re.S)
            viec.append("<div><b>%s</b>%s</div>" % (e(m.group(1).rstrip(".")), dong(m.group(2))))
        elif re.match(r"\*\*Câu lệnh \d+\.", b):
            ten = re.match(r"\*\*(.+?)\*\*", b).group(1)
            code = k[i].strip() if i < len(k) else ""
            # khối ``` có thể bị tách ở dòng trống bên trong, gom lại cho tới dấu đóng
            while code.count("```") < 2 and i + 1 < len(k):
                i += 1; code += "\n\n" + k[i]
            i += 1
            noi = code.strip().strip("`").strip()
            so, tl = re.match(r"Câu lệnh (\d+)\. (.+)", ten).groups()
            ra.append('<div class="lenh"><div class="lenh-dau">%s<span>Câu lệnh %s · chép sang ChatGPT</span></div><pre>%s</pre></div>' % (e(tl), so, e(noi)))
        elif b.startswith("> "):
            ra.append("<blockquote><p>%s</p></blockquote>" % dong(re.sub(r"^> ?", "", b, flags=re.M)))
        elif b.startswith("|"):
            hang = [r for r in b.split("\n") if not re.match(r"^\|[-|\s]+\|$", r)]
            o = lambda r: [c.strip() for c in r.strip("|").split("|")]
            ra.append("<table><thead><tr>%s</tr></thead><tbody>%s</tbody></table>" % (
                "".join("<th>%s</th>" % dong(c) for c in o(hang[0])),
                "".join("<tr>%s</tr>" % "".join("<td>%s</td>" % dong(c) for c in o(r)) for r in hang[1:])))
        elif re.match(r"^\d+\.\s", b):
            ra.append('<ol class="ds">%s</ol>' % "".join("<li>%s</li>" % dong(re.sub(r"^\d+\.\s+", "", x)) for x in b.split("\n")))
        elif b.startswith("Ô viết: "):
            ra.append('<div class="o-viet">%s</div>' % ("<div></div>" * int(b[8:]) * 2))
        else:
            lop = ' class="mo-dau"' if ra and ra[-1] == '<div class="mo-dau-dau"></div>' else ""
            ra.append("<p%s>%s</p>" % (lop, dong(b)))
    xa_viec()
    return "".join(ra), muc


def muc_luc(x):
    m = re.match(r"(Phần \d+)\. (.+)", x)
    return "<li><span>%s</span>%s</li>" % ((m.group(1), e(m.group(2))) if m else ("", e(x)))


def dung(ma):
    tep = [f for f in os.listdir(NGF) if f.startswith("NGF - E-book %s," % ma) and f.endswith(".md")]
    if not tep:
        print("chưa có tệp nội dung cho", ma); return
    t = open(os.path.join(NGF, tep[0]), encoding="utf-8").read()
    chu_de = re.search(r"^chủ đề: (.+)$", t, re.M)
    chu_de = chu_de.group(1).strip() if chu_de else ""
    noi = t[t.index("## Nội dung e-book") + len("## Nội dung e-book"):]
    ten, gt, mt = ten_da_duyet(ma)
    than, muc = than_sach(noi)
    gt_html = "".join("<p>%s</p>" % dong(x) for x in nguoi_soan())
    trang = """<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>%(ten)s</title>%(font)s
<link rel="stylesheet" href="../khuon.css">
<style>@page{@bottom-left{content:"%(ten_ngan)s"}}</style></head><body>
<section class="bia">
  <img class="bia-ngf" src="../img/ngf-ngang-vang.png" alt="Next Gen Founder">
  <p class="bia-cd">E-book · %(chu_de)s</p>
  <h1>%(ten)s</h1>
  <p class="bia-gt">%(gt)s</p>
  <div class="bia-chan"><img src="../img/cdn-khien.png" alt=""><div><b>Coach Duy Nguyễn</b><span>Người cố vấn cho nhà sáng lập thế hệ mới</span></div><span class="bia-web">coachduynguyen.vn</span></div>
</section>
<section class="mo">
  <p class="nhan">Cuốn này dành cho bạn</p>
  <h2>%(ten)s</h2>
  <p class="mo-mt">%(mt)s</p>
  <p class="nhan">Trong cuốn này</p>
  <ol class="muc-luc">%(muc)s</ol>
</section>
<main>%(than)s</main>
<section class="ngs">
  <img class="ngs-anh" src="../img/cd-chan-dung-ebook.jpg" alt="Coach Duy Nguyễn">
  <div><p class="nhan">Người soạn cuốn này</p><h2>Coach Duy Nguyễn</h2>%(gt_html)s
  <div class="ngs-khien"><img src="../img/cdn-khien.png" alt=""><span>coachduynguyen.vn/ve-toi.html</span></div></div>
</section>
<section class="moi">
  <img src="../img/ngf-doc-trang.png" alt="Next Gen Founder">
  <h2>Cộng đồng Next Gen Founder</h2>
  <p>Cộng đồng là nơi những người chủ cùng nhau gỡ điểm nghẽn trong kinh doanh và doanh nghiệp. Nếu bạn muốn có những người chủ khác đi cùng mình trên đoạn đường này, Duy mời bạn đăng ký tham gia Cộng đồng Next Gen Founder.</p>
  <a class="moi-link" href="https://coachduynguyen.vn/tham-gia/?nguon=ebook-%(ma_nho)s">Đăng ký tham gia cộng đồng</a>
  <p class="moi-web">coachduynguyen.vn/tham-gia</p>
  <div class="moi-cdn"><img src="../img/cdn-khien.png" alt=""><span>Coach Duy Nguyễn · Next Gen Founder</span></div>
</section>
</body></html>""" % dict(ten=e(ten), ten_ngan=ten.replace('"', ''), font=FONT, chu_de=e(chu_de), gt=e(gt), mt=e(mt), ma_nho=ma.lower(),
                         muc="".join(muc_luc(x) for x in muc if x not in MUC_LUC_BO),
                         than=than, gt_html=gt_html)
    os.makedirs(os.path.join(GOC, "ra"), exist_ok=True)
    tep_html = os.path.join(GOC, "ra", "%s.html" % ma)
    open(tep_html, "w", encoding="utf-8").write(trang)
    pdf = os.path.join(WEB, "tai-lieu", TEP_PDF[ma])
    # Chrome hay đổ vỡ lúc tắt sau khi đã in xong, nên dựa vào dòng "bytes written" chứ không dựa vào mã thoát.
    r = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=15000",
                    "--print-to-pdf=%s" % pdf, "file://" + tep_html], capture_output=True, text=True, timeout=90)
    if "written to file" not in r.stdout + r.stderr:
        sys.exit("Chrome không in được %s:\n%s" % (ma, r.stderr[-800:]))
    print("đã dựng", ma, "->", os.path.relpath(pdf, WEB))


if __name__ == "__main__":
    for ma in (sys.argv[1:] or sorted(TEP_PDF)):
        dung(ma)
