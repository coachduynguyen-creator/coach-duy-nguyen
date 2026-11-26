#!/usr/bin/env python3
"""Đồng bộ đầu và chân trang từ trang chủ SevenM. Dùng --check để chỉ kiểm tra."""
from pathlib import Path
import argparse
import re

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--check', action='store_true')
args = parser.parse_args()
root = Path(__file__).resolve().parent
home = (root / 'index.html').read_text()
header = re.search(r'<header\b.*?</header>', home, re.S).group()
footer = re.search(r'<footer\b.*?</footer>', home, re.S).group()
changed = []
for path in sorted(root.rglob('index.html')):
    if path.parent == root:
        continue
    section = path.relative_to(root).parts[0]
    pattern = r'(<a\b[^>]*href="/sevenm/' + re.escape(section) + r'/")'
    current_header = re.sub(pattern, r'\1 aria-current="page"', header)
    old = path.read_text()
    new = re.sub(r'<header\b.*?</header>', lambda _: current_header, old, flags=re.S)
    new = re.sub(r'<footer\b.*?</footer>', lambda _: footer, new, flags=re.S)
    if old != new:
        changed.append(str(path.relative_to(root)))
        if not args.check:
            path.write_text(new)
if changed:
    print(('Chưa đồng bộ: ' if args.check else 'Đã đồng bộ: ') + ', '.join(changed))
else:
    print('Đầu và chân trang đã đồng bộ.')
raise SystemExit(1 if args.check and changed else 0)
