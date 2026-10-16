#!/usr/bin/env python3
"""Dựng phần tài liệu đọc cho sổ làm bài Thử thách 7 ngày Tư vấn bán hàng.

Đọc Tài liệu Ngày 1 tới 7 (.md, phần sau <!-- BẢN THÀNH VIÊN -->), giữ các mục để đọc
(Bảy ngày, Ba điều, Ví dụ đã điền, Những lỗi hay gặp...), bỏ các mục đã thành ô bài trên
trang (Việc cần làm, Mẫu, Đề bài video, Tự kiểm tra, Nộp bài).
Phần bài của Ngày 2 tới 7 và video tổng kết (BAI[8]) cũng sinh từ chính tệp .md: mỗi bảng thành
các ô điền, chữ trên trang khớp nguyên văn nguồn. Ngày 0 và 1 viết tay trong index.html vì khóa
lưu của hai ngày đó đã có người dùng. Khóa ô sinh ra theo vị trí (n2-1-0-3-1: ngày, mục, bảng,
dòng, cột), nên thêm hay bớt dòng trong bảng cũ thì chữ đã điền ở các dòng sau sẽ lệch ô.
Riêng các ô nối với Bảng quy trình bán hàng bảy bước mang khóa cố định: cột "Từ nay" và "Việc sửa"
của mẫu sửa dòng ghi vào bản 2 (bang2-b{dòng}-lam, -sua; dòng 2 tách 2pl phân loại, 2tc tiếp cận),
cột "Trước đây" và "Số đo bản 1" chép từ bản 1 của Ngày 1 (bang1-...). Ngày 7 ráp hai bản từ các khóa này.
Ghi ra thu-thach/tu-van-ban-hang/tai-lieu.js và chép PDF sang thu-thach/tu-van-ban-hang/pdf/.
Sửa chữ tài liệu thì sửa tệp .md bên NGF rồi chạy lại: python3 dung_tai_lieu_thu_thach.py
"""
import importlib.util, json, pathlib, re, shutil, unicodedata

NGUON = pathlib.Path.home() / "Codex_Projects/Next Gen Founder/outputs/ngf_thu_thach_7_ngay_20261014"
DICH = pathlib.Path(__file__).parent / "thu-thach/tu-van-ban-hang"
BO = ("Việc cần làm", "Mẫu", "Đề bài video", "Tự kiểm tra", "Nộp bài", "Video tổng kết")

spec = importlib.util.spec_from_file_location("dung_pdf", NGUON / "dung_pdf.py")
dung_pdf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(dung_pdf)


def tim(ten):
    """Tên tệp tiếng Việt trên Mac lưu dạng NFD, so sánh sau khi chuẩn hoá."""
    for p in NGUON.iterdir():
        if unicodedata.normalize("NFC", p.name) == ten:
            return p
    raise SystemExit("Không thấy tệp: " + ten)


def phan_doc(md):
    md = md.split(dung_pdf.DAU, 1)[1]
    giu, bo, dau = [], False, True
    for d in md.splitlines():
        if d.startswith("# "):
            continue
        if dau and d.startswith(">"):   # câu hứa đầu trang, trang đã hiện riêng
            continue
        if d.startswith("## "):
            dau = False
            bo = d[3:].startswith(BO)
        elif d.strip():
            dau = dau and d.startswith(">")
        if not bo:
            giu.append(d)
    return dung_pdf.md_sang_html("\n".join(giu))


# ---------- phần bài: bảng trong .md thành ô điền ----------
CHON = {"Có / Chưa": ["Có", "Chưa"], "Có / Chưa / Không áp dụng": ["Có", "Chưa", "Không áp dụng"],
        "Rõ hay chưa rõ": ["Rõ", "Chưa rõ"]}
GOP = [("Đã ổn", "Cần sửa"), ("Sự thật về sản phẩm", "Dự đoán của tôi", "Cần nguồn hoặc được phép")]
NGAN = ("Đã nghe", "Nguồn", "Thời gian", "Rõ hay")
RIENG = {(7, "Mẫu 4")}   # theo mục Nộp bài: sổ ghi tình huống "không cần nộp", ô vẫn tự lưu nhưng không gửi đi
TU = {"Bản 1: số khách": "bang1-khoang"}   # ô một dòng: nhãn bắt đầu bằng khóa thì chép từ ô Ngày 1
ID = {"Bản 2: số khách": "bang2-khoang", "Bước thay đổi rõ nhất": "bang2-ro", "Tuần sau bạn sẽ sửa bước nào": "bang2-tiep"}
NUA = {"phân loại": "pl", "tiếp cận": "tc"}   # "2. Phần phân loại" (Ngày 2), "2. Phần tiếp cận" (Ngày 3)


def o_bang(x, nhan, cot):
    """Ô ở dòng "N. ..." của bảng sửa dòng hay bảng so sánh: gắn khóa bản 2 hoặc chép từ bản 1."""
    m = re.match(r"(\d)\. ", nhan)
    if not m:
        return
    so = m.group(1)
    k = so + NUA.get(nhan[8:], "") if nhan.startswith("2. Phần ") else so
    if cot.startswith("Trước đây"):
        x["tu"] = f"bang1-b{so}-lam"
    elif cot.startswith("Từ nay"):
        x["id"] = f"bang2-b{k}-lam"
    elif cot.startswith("Việc sửa"):
        x["id"] = f"bang2-b{k}-sua"
    elif cot.startswith(("Số đo bản 1", "Số bản 1")):
        x["tu"] = f"bang1-b{so}-so"
    elif cot.startswith(("Số đo bản 2", "Số bản 2")):
        x["id"] = f"bang2-b{so}-so"
    elif cot.startswith("Đã sửa gì"):
        x["id"] = f"bang2-b{so}-dasua"


def tron(t):
    return re.sub(r"\*\*(.+?)\*\*", r"\1", t).strip()


def sang_trang(t):
    """Câu nhắc email trong tài liệu, trên trang thì nộp bằng nút."""
    return re.sub(r"Bạn nộp bài qua đường dẫn nộp bài trong email[^,]*,", "Bạn bấm Nộp bài ở cuối trang này,", t) \
        .replace("Bạn dán đường dẫn video vào trang nộp bài trong email,", "Bạn dán đường dẫn video vào ô bên dưới rồi bấm Nộp bài,")


def bang_o(dong, ma, nhom, dau_muc):
    """Một bảng markdown thành các nhóm ô. nhom: danh sách nhóm của phần, nối thêm vào."""
    hang = [[o.strip() for o in d.strip().strip("|").split("|")] for d in dong]
    dau, than = hang[0], hang[2:]
    if len(dau) == 1:   # bảng một cột: tiêu đề là tên ô, dòng có chữ là câu mẫu
        mau = " ".join(tron(h[0]) for h in than if h[0])
        nhom.append({"o": [{"id": ma + "-0", "nhan": tron(dau[0]), "goi": mau}]})
        return
    gop = {c: g for g in GOP for c, x in enumerate(dau) if x == g[0] and all(y in dau for y in g)}
    bo_cot = {dau.index(y) for g in gop.values() for y in g[1:]}
    tieu_de = [h for h in than if all(h) and h[-1] == dau[-1]]
    le = None if not tieu_de else tron(dau[0])
    gom, chu_cai = None, None
    for r, h in enumerate(than):
        if all(h):
            if h[-1] == dau[-1]:
                le, gom = tron(h[0]), None
            continue
        nhan_dong = [(c, x) for c, x in enumerate(h) if x and c not in bo_cot]
        trong = [c for c, x in enumerate(h) if not x and c not in bo_cot]
        nhan = tron(nhan_dong[0][1]) if nhan_dong and nhan_dong[0][0] == 0 else ""
        goi = "; ".join(tron(dau[c]) + ": " + tron(x) for c, x in nhan_dong if c > 0)
        m = re.match(r"^([A-Z])(\. |$)", nhan)
        if m:   # Nhóm A, A, A...: mỗi chữ cái một nhóm
            if m.group(2):
                chu_cai = nhan
            nhan, le_dong = "", chu_cai
        else:
            le_dong = le
        o = []
        for c in trong:
            x = {"id": f"{ma}-{r}-{c}", "nhan": tron(dau[c]) or "Bạn điền"}
            if c in gop:
                x["nhan"], x["chon"] = " / ".join(gop[c]), list(gop[c])
            elif dau[c] in CHON:
                x["chon"] = CHON[dau[c]]
            elif dau[c].startswith(NGAN):
                x["dong"] = 1
            o_bang(x, nhan, tron(dau[c]))
            o.append(x)
        if not nhan and not le_dong:
            nhan = f"Dòng {r + 1}"
        if len(o) == 1 and nhan:   # một ô: nhãn dòng là tên ô
            o[0]["nhan"] = nhan
            for k, v in TU.items():
                if nhan.startswith(k):
                    o[0]["tu"] = v
            for k, v in ID.items():
                if nhan.startswith(k):
                    o[0]["id"] = v
            if goi:
                o[0]["goi"] = goi
            ten = le_dong or ""
            if gom is None or gom.get("tieu", "") != ten or gom.get("_nhieu"):
                gom = {"tieu": ten, "o": []} if ten else {"o": []}
                nhom.append(gom)
            gom["o"] += o
        else:
            if goi:
                o[0]["goi"] = goi
            gom = {"tieu": " · ".join(filter(None, [le_dong, nhan])), "o": o, "_nhieu": 1}
            nhom.append(gom)


def phan_bai(n, tieu, than, si=0):
    """Một mục ## (Mẫu, Đề bài video) thành một phần bài trên trang."""
    cot = "Video" if "video" in tieu.lower() else tieu.split(".")[0]
    p = {"tieu": tieu, "cot": cot, "nhom": []}
    if (n, cot) in RIENG:
        p["rieng"] = 1
    chu, muc, ma = [], "", 0

    def xa():
        h = dung_pdf.md_sang_html(sang_trang("\n".join(chu)))
        # khung o-dien và ngắt trang chỉ cho bản PDF, trên trang thì bảng đã thành ô điền
        h = re.sub(r'<div class="(o-dien[^"]*|ngat)">|</div>', "", h).strip()
        if h:
            p["nhom"].append({"h": h})
        chu.clear()

    dong, i = than.splitlines(), 0
    while i < len(dong):
        s = dong[i].strip()
        hd = re.match(r"^(### |\*\*)(.+?)(\*\*)?$", s)
        if s.startswith("|"):
            xa(); j = i
            while j < len(dong) and dong[j].strip().startswith("|"):
                j += 1
            truoc = len(p["nhom"])
            bang_o(dong[i:j], f"n{n}-{si}-{ma}", p["nhom"], muc)
            for g in p["nhom"][truoc:]:
                for o in g["o"]:
                    o["ten"] = " · ".join(filter(None, [cot, muc, g.get("tieu"), o["nhan"]]))
            ma += 1; i = j; continue
        if hd and (s.startswith("### ") or (hd.group(3) and "**" not in hd.group(2))):
            xa(); muc = hd.group(2).rstrip(".")
            p["nhom"].append({"h": f"<h4>{dung_pdf.inline(muc)}</h4>"}); i += 1; continue
        chu.append(dong[i]); i += 1
    xa()
    if cot == "Video":
        o = {"id": f"v{n}-video", "nhan": f"Đường dẫn video {'tổng kết' if n == 8 else 'Ngày ' + str(n)}", "dong": 1, "lk": 1}
        o["ten"] = o["nhan"]
        p["nhom"].append({"o": [o]})
    for g in p["nhom"]:
        g.pop("_nhieu", None)
    if any(o.get("tu") for g in p["nhom"] for o in g.get("o", [])):
        p["layTu"] = "Chép bài đã viết ở Ngày 1 vào các ô còn trống"
    return p


def bai_ngay(n, md):
    md = md.split(dung_pdf.DAU, 1)[1]
    ten = re.search(r"^# Ngày \d+\. (.+)$", md, re.M).group(1)
    hua = re.search(r"^# .+\n+((?:>.*\n)+)", md, re.M).group(1)
    muc = re.split(r"^## ", md, flags=re.M)[1:]
    d = {"ten": ten, "hua": tron(" ".join(l[1:].strip() for l in hua.splitlines())), "phan": []}
    tong = None
    for m in muc:
        tieu, _, than = m.partition("\n")
        if tieu.startswith("Việc cần làm"):
            d["viec"] = dung_pdf.md_sang_html(than.replace("<!-- NGẮT TRANG -->", ""))
        elif tieu.startswith("Tự kiểm tra"):
            d["kiem"] = [tron(l.strip()[6:]) for l in than.splitlines() if l.strip().startswith("- [ ] ")]
        elif tieu.startswith("Nộp bài"):
            d["nopSau"] = [tron(sang_trang(l)) for l in than.split("\n\n") if l.strip() and not l.strip().startswith("<!--")]
            assert "email" not in " ".join(d["nopSau"]), (n, d["nopSau"])
        elif tieu.startswith("Video tổng kết"):
            tong = {"nhan": "Sau Ngày 7", "ten": tieu, "bai": "video tổng kết", "phan": [phan_bai(8, tieu, than)],
                    "nopSau": ["Hạn nộp video tổng kết giống hạn cuối của cả thử thách, tức ba ngày sau Ngày 7."]}
        elif tieu.startswith(("Mẫu ", "Đề bài video")):
            d["phan"].append(phan_bai(n, tieu.strip(), than, len(d["phan"])))
    # trang đi theo thứ tự làm: Mẫu rồi Video
    d["phan"].sort(key=lambda p: p["cot"] == "Video")
    return d, tong


tai_lieu, bai = {}, {}
(DICH / "pdf").mkdir(exist_ok=True)
for n in range(1, 8):
    ten = f"NGF - Tài liệu Ngày {n} thử thách 7 ngày"
    md = tim(ten + ".md").read_text(encoding="utf-8")
    html = phan_doc(md)
    assert not re.search(r"<h2[^>]*>Việc cần làm", html) and "<h1>" not in html, n
    tai_lieu[n] = html
    shutil.copyfile(tim(ten + ".pdf"), DICH / f"pdf/ngay-{n}.pdf")
    if n >= 2:
        bai[n], tong = bai_ngay(n, md)
        if tong:
            bai[8] = tong

# mỗi cột trên bảng tính phải khác tên, trùng thì thêm số; khóa ô không được trùng
for n, d in bai.items():
    ids = [o["id"] for p in d["phan"] for g in p["nhom"] for o in g.get("o", [])]
    assert len(ids) == len(set(ids)), (n, [i for i in ids if ids.count(i) > 1])
    da = {}
    for p in d["phan"]:
        for g in p["nhom"]:
            for o in g.get("o", []):
                k = o["ten"][:190]
                da[k] = da.get(k, 0) + 1
                o["ten"] = k + (f" ({da[k]})" if da[k] > 1 else "")

(DICH / "tai-lieu.js").write_text(
    "/* Dựng tự động bằng dung_tai_lieu_thu_thach.py, đừng sửa tay. */\nvar TAI_LIEU = "
    + json.dumps(tai_lieu, ensure_ascii=False, indent=0) + ";\nvar BAI = "
    + json.dumps(bai, ensure_ascii=False, indent=0) + ";\n", encoding="utf-8")
print("Đã dựng tai-lieu.js:", {n: len(h) for n, h in tai_lieu.items()})
print("Số ô mỗi ngày:", {n: sum(len(g.get("o", [])) for p in d["phan"] for g in p["nhom"]) for n, d in bai.items()})
