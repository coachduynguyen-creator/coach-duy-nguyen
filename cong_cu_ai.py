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
    # (tên tệp trang, tệp nội dung, chữ ngắn trên bìa thẻ ở trang chủ)
    ("soi-ke-hoach-2027", "NGF - Tài liệu thu lead 1, soi kế hoạch kinh doanh 2027 bằng AI.md", "Kế hoạch 2027"),
    ("so-khach-du-luong-co-lai", "NGF - Tài liệu thu lead 2, tính số khách để đủ lương và có lãi bằng AI.md", "Số khách cần có"),
    ("quy-trinh-tu-cach-lam", "NGF - Tài liệu thu lead 3, biến cách làm trong đầu người chủ thành quy trình bằng AI.md", "Quy trình từ cách làm"),
    ("khach-kho-tinh", "NGF - Tài liệu thu lead 4, để AI đóng vai khách khó tính kiểm cách tư vấn của nhân viên.md", "Khách khó tính"),
]
# Mã YouTube của video Coach Duy làm thật, khoảng 5 phút. Để trống thì trang không có khối video.
VIDEO = {"soi-ke-hoach-2027": "", "so-khach-du-luong-co-lai": "", "quy-trinh-tu-cach-lam": "", "khach-kho-tinh": ""}


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

def _bang(khoi):
    hang = [[o.strip() for o in d.strip().strip("|").split("|")] for d in khoi.split("\n")]
    hang = [h for h in hang if not all(re.fullmatch(r":?-+:?", o) for o in h)]
    dau = "".join("<th>%s</th>" % _dong(o) for o in hang[0])
    than = "".join("<tr>%s</tr>" % "".join("<td>%s</td>" % _dong(o) for o in h) for h in hang[1:])
    return '<div class="cc-bang"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (dau, than)

def _html(than, bo_trich=True):
    """Khối thân Markdown thành HTML: đoạn, danh sách, bảng, tiêu đề ###."""
    ra = []
    for k in _khoi(than):
        if k.startswith("> "):
            if not bo_trich:
                ra.append('<p class="cc-gia-dinh">%s</p>' % _dong(k[2:]))
        elif k.startswith("|"):
            ra.append(_bang(k))
        elif k.startswith("### Bài mẫu thứ"):
            # Tên thẻ đã nói là bài mẫu nào. Chỉ giữ phần nói việc gì, nếu có.
            viec = k[4:].split(": ", 1)[-1].split(", ", 1)
            if len(viec) == 2:
                ra.append("<h4>%s</h4>" % _dong(viec[1][0].upper() + viec[1][1:]))
        elif k.startswith("### "):
            ra.append("<h4>%s</h4>" % _dong(k[4:]))
        elif re.match(r"^\d+\.\s", k):
            ra.append("<ol>%s</ol>" % "".join("<li>%s</li>" % _dong(x) for x in _ds(k)))
        else:
            ra.append("<p>%s</p>" % _dong(k))
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

    # Câu lệnh: đoạn mở "Câu này chép vào ..." là lời dặn người chủ, không chép sang AI.
    cc["lenh"] = []
    for t, b in _chia(phan["Phần 2"], "###")[1:]:
        so, ten = re.match(r"Câu lệnh (\d+)\. (.+)", t).groups()
        doan = _khoi(b)
        dan = doan.pop(0) if doan[0].startswith("Câu này chép") else ""
        cc["lenh"].append(dict(so=int(so), ten=ten, dan=dan, chu="\n\n".join(doan)))

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

DS = [dict(doc(ma, tep), bia=bia) for ma, tep, bia in CONG_CU]


# ------------------------------------------------------------ dựng trang
def _p(ds):
    return "".join("<p>%s</p>" % _dong(x) for x in ds)

def _the_lien_quan(c):
    return ('<a class="cc-khac" href="%s.html"><span class="mono">Bộ câu lệnh AI</span>'
            '<b>%s</b><span class="lk-v">Mở công cụ <span class="mt" aria-hidden="true">&rarr;</span></span></a>'
            % (c["ma"], html.escape(c["tieu"])))

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
    buoc = "<ol class=\"cc-buoc\">%s</ol>%s" % ("".join("<li>%s</li>" % _dong(x) for x in cc["buoc"]), _p(cc["buoc_sau"]))
    tab = "".join('<button class="cc-tab%s" type="button" role="tab" aria-selected="%s" data-the="%d">%s</button>'
                  % (" chon" if i == 0 else "", "true" if i == 0 else "false", i, html.escape(t)) for i, (t, _) in enumerate(cc["mau"]))
    mau = "".join('<div class="cc-mau" role="tabpanel" data-the="%d">%s</div>' % (i, h) for i, (_, h) in enumerate(cc["mau"]))

    # Phiếu điền số và bộ câu lệnh, dựng ra khi đã qua biểu mẫu.
    o = "".join('<label class="cc-o"><span><b>%d.</b> %s</span><textarea rows="%d" data-o="%d"%s></textarea></label>'
                % (i + 1, _dong(x), 3 if (i + 1) in cc["goi_y"] else 2, i + 1,
                   (' placeholder="%s"' % html.escape(cc["goi_y"][i + 1])) if (i + 1) in cc["goi_y"] else "")
                for i, x in enumerate(cc["o"]))
    lenh = ""
    for l in cc["lenh"]:
        ghi = l["dan"] or cc["nhan"].get(l["so"], "")
        lenh += ('<div class="cc-lenh" data-so="%d"><div class="cc-lenh-dau"><div><span class="mono">Câu lệnh %d</span><h3>%s</h3></div>'
                 '<button class="nut nut-vien cc-chep" type="button">Chép</button></div>%s<div class="cc-chu">%s</div></div>'
                 % (l["so"], l["so"], _dong(l["ten"]), ('<p class="cc-ghi">%s</p>' % _dong(ghi)) if ghi else "", html.escape(l["chu"])))
    du_lieu = json.dumps(dict(ma=ma, trong=cc["trong"], mau2=cc["lenh"][1]["chu"]), ensure_ascii=False).replace("</", "<\\/")

    khac = "".join(_the_lien_quan(c) for c in DS if c["ma"] != ma)
    return """<header class="dau-trang cc-dau">
  <div class="bd">
    <a class="cc-ve" href="../sach.html#thu-vien">&larr; Kho công cụ và tài liệu</a>
    <p class="mono">Bộ câu lệnh AI cho chủ doanh nghiệp</p>
    <h1>%(tieu)s</h1>
    <p class="dan">%(duoi)s</p>
    <ul class="cc-chip"><li>%(n_lenh)d câu lệnh</li><li>Phiếu %(n_o)d ô</li><li>Dùng với ChatGPT</li><li>Hai bài mẫu</li></ul>
  </div>
</header>
<section class="phan bd cc">
  <nav class="cc-ml" aria-label="Mục lục"><a href="#cach-dung">Cách dùng</a><a href="#bai-mau">Hai bài mẫu</a><a href="#mo-cong-cu">Phiếu và câu lệnh</a><a href="#cong-dong">Cộng đồng</a></nav>
  <div class="cc-doc cc-dan">
    %(dan)s
  </div>
  %(video)s
  <div class="cc-doc" id="cach-dung">
    <h2>Cách dùng</h2>
    %(buoc)s
  </div>

  <div class="cc-doc" id="bai-mau">
    <h2>Hai bài mẫu</h2>
    <p class="cc-gia-dinh">%(mien_tru)s</p>
    <div class="cc-tabs" role="tablist">%(tab)s</div>
    %(mau)s
  </div>

  <div class="cc-doc" id="mo-cong-cu">
    <div class="hop cc-cua" id="cc-cua">
      <h2>Mở phiếu điền số và bộ câu lệnh</h2>
      <form id="cc-form" novalidate>
        <label class="cc-o"><span>Tên</span><input name="ten" autocomplete="name" required></label>
        <label class="cc-o"><span>Zalo</span><input name="zalo" type="tel" inputmode="tel" autocomplete="tel" required></label>
        %(vai_tro)s
        %(doanh_thu)s
        %(doi_ngu)s
        <p class="cc-loi" id="cc-loi" hidden></p>
        <button class="nut nut-v" type="submit">Mở bộ câu lệnh <span class="mt" aria-hidden="true">&rarr;</span></button>
      </form>
    </div>
    <div id="cc-kin"></div>
    <template id="cc-mau-kin">
      <h2>Phiếu điền số</h2>
      <p>%(phieu_dan)s</p>
      <div class="cc-phieu">%(o)s</div>
      <h2 class="cc-h-lenh">Bộ câu lệnh</h2>
      %(lenh)s
    </template>
  </div>

  <div class="cc-doc cc-moi" id="cong-dong">
    %(moi)s
    <a class="nut nut-v" id="cc-dang-ky" href="../tham-gia/?cong-cu=%(ma)s">Đăng ký tham gia cộng đồng <span class="mt" aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="cc-doc">
    <p class="mono">Ba công cụ còn lại</p>
    <div class="cc-khac-luoi">%(khac)s</div>
  </div>
</section>
<script type="application/json" id="cc-du-lieu">%(du_lieu)s</script>
<script src="../assets/cong-cu-ai.js?v={VER}"></script>""" % dict(
        tieu=_dong(cc["tieu"]), duoi=_dong(cc["duoi"]), dan=_p(cc["dan"]), video=video, buoc=buoc,
        mien_tru=cc["mien_tru"], tab=tab, mau=mau, phieu_dan=_dong(cc["phieu_dan"]), o=o, lenh=lenh,
        vai_tro=_chon("vai_tro", "Vai trò", cc["vai_tro"]), doanh_thu=_chon("doanh_thu", "Doanh thu mỗi tháng", cc["doanh_thu"]),
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
<p>Đang mở bộ câu lệnh cho bạn.<br><a id="ve" href="../sach.html#thu-vien">Bấm vào đây nếu trang chưa tự chuyển</a></p>
<script>
(function(){
  var ma = null, dich = '../sach.html#thu-vien';
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
