# -*- coding: utf-8 -*-
"""them_bai.py <mo_ta.json> <than.txt>: thêm một bài mới vào cuối BAI."""
import io, json, sys
p = "bai_viet.py"
m = json.load(io.open(sys.argv[1], encoding="utf-8"))
than = io.open(sys.argv[2], encoding="utf-8").read().strip()
s = io.open(p, encoding="utf-8").read()
assert 'tep="%s"' % m["tep"] not in s, "bài này đã có rồi"
khoi = ('\ndict(tep="%(tep)s", chu_de="%(chu_de)s",\n'
        ' tieu="%(tieu)s",\n'
        ' mo="%(mo)s",\n'
        ' ngay="%(ngay)s", ngay_viet="%(ngay_viet)s", doc="7 phút đọc",\n'
        ' anh="%(anh)s", alt="%(alt)s",\n' % m) + ' than="""\n' + than + '\n"""),\n'
i = s.rindex("\n]")
s = s[:i] + "\n" + khoi + s[i:]
io.open(p, "w", encoding="utf-8").write(s)
compile(io.open(p, encoding="utf-8").read(), p, "exec")
print("đã thêm: %s" % m["tep"])
