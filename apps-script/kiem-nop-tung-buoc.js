// Chạy: node apps-script/kiem-nop-tung-buoc.js  (in OK, hoặc dừng và báo dòng sai)
// Kiểm docBaiNop: dòng "Bước nộp" 1 hoặc 2 không tính là đã nộp ngày, dòng để trống thì có.
const fs = require('fs'), assert = require('assert');
const mo = { Date, Utilities: { formatDate: d => d.toISOString().slice(0, 10) }, ...{} };
const ma = fs.readFileSync(__dirname + '/nhan-bai-thu-thach.gs', 'utf8');
const hoi = new Function('Utilities', 'SpreadsheetApp', 'PropertiesService', 'LockService', 'DriveApp', 'DocumentApp', 'ContentService', 'Logger',
  ma + '\nreturn { docBaiNop, tenTrang };');
const { docBaiNop } = hoi(mo.Utilities, {}, {}, {}, {}, {}, {}, {});
const td = ['Thời gian', 'Họ và tên', 'Email', 'Số điện thoại', 'Bước nộp'], g = new Date('2026-10-17T05:00:00Z');
const hang = { 1: [td, [g, 'A', 'a@x.vn', '0901234567', 1], [g, 'A', 'a@x.vn', '0901234567', 2]], 2: [td, [g, 'A', 'a@x.vn', '0901234567', ''], [g, 'B', 'b@x.vn', '0987654321', 1]] };
const bang = { getSheetByName: ten => { const n = +String(ten).replace(/\D/g, ''); const v = hang[n]; return v && { getLastRow: () => v.length, getDataRange: () => ({ getValues: () => v }) }; } };
const ds = docBaiNop(bang);
const a = ds['a@x.vn|901234567'], b = ds['b@x.vn|987654321'];
assert.deepStrictEqual(a.buoc, { 1: 2 });          // Ngày 1 mới nộp một phần, bước xa nhất là 2
assert.strictEqual(a.da_nop[1], undefined);        // chưa tính là đã nộp Ngày 1
assert.ok(a.da_nop[2]);                            // Ngày 2 nộp đủ
assert.strictEqual(b.da_nop[2], undefined);        // người B chỉ mới nộp Bước 1 Ngày 2
assert.deepStrictEqual(b.buoc, { 2: 1 });
console.log('OK');
