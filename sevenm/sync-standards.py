"""Tạo dữ liệu minh họa từ 51 chuẩn trên trang phương pháp, không soạn bản khác."""
import html
import json
import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent
source = (root / 'phuong-phap/index.html').read_text()
clean = lambda value: html.unescape(re.sub('<[^>]+>', '', value)).strip()
data = []
for code, body in re.findall(r'<details class="standard-chapter glass" id="m(\d)"[^>]*>(.*?)</details>', source):
    title = clean(re.search(r'<strong>(.*?)</strong>', body)[1])
    summary = clean(re.search(r'<p class="chapter-summary">(.*?)</p>', body)[1])
    standards = [{'code': number, 'title': clean(label)} for number, label in re.findall(r'<li><span>([\d.]+)</span>(.*?)</li>', body)]
    ai = clean(re.search(r'<span class="code">AI HỖ TRỢ</span><p>(.*?)</p>', body)[1])
    data.append({'id': 'M' + code, 'title': title, 'summary': summary, 'standards': standards, 'ai': ai})
assert [len(item['standards']) for item in data] == [7, 10, 7, 5, 7, 7, 8]
out = '/* Sinh từ phuong-phap/index.html bằng sync-standards.py. */\nwindow.SevenMStandards=' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n'
target = root / 'sevenm-standards.js'
if '--check' in sys.argv:
    assert target.read_text() == out, 'Dữ liệu 51 chuẩn chưa đồng bộ.'
    print('51 chuẩn khớp nguồn phương pháp.')
else:
    target.write_text(out)
    print('Đã đồng bộ 51 chuẩn.')
