# -*- coding: utf-8 -*-
"""thay_than.py <tep.html> <tep_than_moi.txt>: thay nguyên phần thân của một bài.

Vá từng đoạn bằng str.replace là cách sai. Ngày 26/08/2026 hai mục mới rơi nhầm
sang bài khác vì hai bài dùng chung một tiêu đề mục, và chỉ phát hiện ra nhờ đếm
lại số chữ. Thay nguyên khối theo khoá tep thì không có chỗ cho lỗi đó.
"""
import io, re, sys

p = "bai_viet.py"
tep, than_moi = sys.argv[1], io.open(sys.argv[2], encoding="utf-8").read().strip()
s = io.open(p, encoding="utf-8").read()

i = s.index('dict(tep="%s"' % tep)
j = s.index('\n than="""', i) + len('\n than="""')
k = s.index('"""),', j)
s = s[:j] + "\n" + than_moi + "\n" + s[k:]
io.open(p, "w", encoding="utf-8").write(s)
compile(io.open(p, encoding="utf-8").read(), p, "exec")
print("đã thay thân: %s" % tep)
