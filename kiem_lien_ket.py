# -*- coding: utf-8 -*-
"""Kiểm mọi liên kết trong site: tệp có tồn tại không, ảnh có tồn tại không, neo có đúng không."""
import os, re, sys, urllib.parse
GOC = os.path.dirname(os.path.abspath(__file__))
loi, tong_lk, tong_anh = [], 0, 0
trang_html = []
for r, d, f in os.walk(GOC):
    if any(x in r for x in ('.git',)): continue
    for n in f:
        if n.endswith('.html'): trang_html.append(os.path.join(r, n))

for tep in sorted(trang_html):
    s = open(tep, encoding='utf-8').read()
    thu_muc = os.path.dirname(tep)
    ten = os.path.relpath(tep, GOC)
    ids = set(re.findall(r'id="([^"]+)"', s))
    for attr, pat in (("href", r'href="([^"]+)"'), ("src", r'src="([^"]+)"')):
        for u in re.findall(pat, s):
            if u.startswith(('http://', 'https://', 'mailto:', 'data:', '#')):
                if u.startswith('#') and len(u) > 1 and u[1:] not in ids:
                    loi.append('%s: neo %s không có trong trang' % (ten, u))
                continue
            if attr == "href": tong_lk += 1
            else: tong_anh += 1
            duong = urllib.parse.unquote(u.split('#')[0].split('?')[0])
            if not duong: continue
            # Đường dẫn mở đầu bằng dấu gạch chéo tính từ gốc tên miền,
            # không tính từ thư mục của trang đang đứng.
            goc = GOC if duong.startswith('/') else thu_muc
            dich = os.path.normpath(os.path.join(goc, duong.lstrip('/')))
            if not os.path.exists(dich):
                loi.append('%s: %s="%s" không tồn tại' % (ten, attr, u))
            neo = u.split('#')[1] if '#' in u else None
            if neo:
                try:
                    t = open(dich, encoding='utf-8').read()
                    if ('id="%s"' % neo) not in t:
                        loi.append('%s: neo #%s không có trong %s' % (ten, neo, duong))
                except Exception: pass

print('So trang: %d | lien ket noi bo: %d | anh: %d' % (len(trang_html), tong_lk, tong_anh))
if loi:
    print('LOI: %d' % len(loi))
    for l in loi[:60]: print('  -', l)
    sys.exit(1)
print('0 loi lien ket')
