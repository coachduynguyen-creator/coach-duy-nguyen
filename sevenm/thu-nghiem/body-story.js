(() => {
  const standards = window.SevenMStandards?.find(p => p.id === 'M4');
  const budgetButtons = [...document.querySelectorAll('[data-budget]')];
  const focus = document.querySelector('#budget-focus');
  const schemas = [
    ['Thành phần thu nhập', 'Cách tính', 'Kỳ chi trả'],
    ['Kết quả bán hàng', 'Hoa hồng', 'Điều kiện thưởng'],
    ['Mục tiêu', 'Kết quả', 'Ghi nhận'],
    ['Nhân sự', 'Công cụ', 'Hoạt động bán hàng'],
    ['Khách hàng chung', 'Nhân sự nghỉ', 'Quy tắc chia hoa hồng']
  ];
  function budgetSelect(index) {
    const standard = standards?.standards[index];
    if (!standard) return;
    budgetButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    document.querySelectorAll('[data-line]').forEach((line, i) => line.classList.toggle('is-active', i === index));
    focus.querySelector('.focus-code').textContent = 'CHUẨN ' + standard.code;
    focus.querySelector('h3').textContent = standard.title;
    [...focus.querySelectorAll('.budget-schema span')].forEach((span, i) => span.textContent = schemas[index][i]);
  }
  budgetButtons.forEach((b, index) => {
    b.setAttribute('aria-controls', 'budget-focus');
    b.addEventListener('click', () => budgetSelect(index));
  });
  budgetSelect(3);
  const captions = [
    ['Dành khoảng 10 phút', 'Người chủ hoặc quản lý trả lời theo tình hình thực tế của phòng kinh doanh.'],
    ['Trả lời 28 câu', 'Đi lần lượt qua các câu hỏi thuộc 7 trụ cột. Không cần chuẩn bị một bộ báo cáo mới.'],
    ['Xem kết quả', 'Dùng báo cáo để nhận ra những phần cần trao đổi và kiểm tra thêm.'],
    ['Chọn việc cần làm trước', 'Chia sẻ kết quả với quản lý hoặc nhắn đội ngũ để trao đổi phần cần làm trước.']
  ];
  const matrix = document.querySelector('.question-matrix');
  for (let i = 1; i <= 28; i++) {
    const cell = document.createElement('span');
    cell.textContent = String(i).padStart(2, '0');
    cell.style.setProperty('--i', i);
    matrix.append(cell);
  }
  const steps = [...document.querySelectorAll('[data-step]')];
  const stage = document.querySelector('.journey-stage');
  const caption = document.querySelector('#journey-caption');
  steps.forEach((button, index) => {
    button.setAttribute('aria-controls', 'journey-caption');
    button.addEventListener('click', () => {
      steps.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
      stage.dataset.scene = String(index);
      stage.querySelectorAll('.journey-visual').forEach((scene, i) => scene.hidden = i !== index);
      caption.querySelector('h3').textContent = captions[index][0];
      caption.querySelector('p').textContent = captions[index][1];
    });
  });
})();
