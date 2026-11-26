const body=document.body;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
body.classList.add('js');
body.dataset.motion=paused?'none':'full';
body.dataset.paused=String(paused);
const visible=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');visible.unobserve(entry.target);}}},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>visible.observe(el));
reduced.addEventListener('change',e=>{paused=e.matches;body.dataset.motion=paused?'none':'full';body.dataset.paused=String(paused);});
const pillars=[
 {id:'M1',title:'Thị trường',group:'Bán đúng cách',position:[50,13],summary:'Bán cho ai, giải quyết nhu cầu gì và vì sao khách hàng chọn doanh nghiệp.',work:['Xác định nhóm khách hàng và nhu cầu ưu tiên.','Thiết kế cách tiếp cận, thông điệp và đề xuất phù hợp.','Thống nhất tiêu chí sàng lọc cơ hội bán hàng.'],ai:'Tổng hợp phản hồi, phân tích cuộc trao đổi và hỗ trợ nghiên cứu khách hàng. Con người kiểm tra và quyết định.',output:'Chân dung khách hàng, đề xuất giá trị và tiêu chí sàng lọc.'},
 {id:'M2',title:'Quy trình',group:'Bán đúng cách',position:[78,29],summary:'Thống nhất cách bán hàng từ tiếp cận, tư vấn đến quyết định mua, thanh toán và chăm sóc.',work:['Thiết kế các bước bán hàng, thanh toán và điều kiện chuyển bước.','Xây dựng hướng dẫn tư vấn, chăm sóc và nuôi dưỡng.','Phân công trách nhiệm và cách phối hợp giữa các bộ phận.'],ai:'Soạn bản nháp nội dung chăm sóc, tóm tắt trao đổi và nhắc việc theo quy trình đã thống nhất.',output:'Quy trình bán hàng, hướng dẫn thực hiện và mẫu chăm sóc khách hàng.'},
 {id:'M3',title:'Nhân sự',group:'Nguồn lực đúng',position:[84,58],summary:'Có người phù hợp, hiểu rõ công việc và được huấn luyện để thực hiện.',work:['Làm rõ vai trò, trách nhiệm và yêu cầu năng lực.','Thiết kế chương trình đào tạo và hướng dẫn nhân viên mới.','Xây dựng cách huấn luyện, phản hồi và đánh giá năng lực.'],ai:'Mô phỏng tình huống tư vấn và hỗ trợ phân tích cuộc gọi theo tiêu chí chuyên môn do quản lý xác lập.',output:'Mô tả vai trò, khung năng lực và kế hoạch đào tạo, huấn luyện.'},
 {id:'M4',title:'Ngân sách',group:'Nguồn lực đúng',position:[65,82],summary:'Thiết kế cơ chế thu nhập, hoa hồng, thưởng và kiểm soát chi phí của phòng kinh doanh.',work:['Thống nhất cách tính thu nhập, hoa hồng, thưởng và ghi nhận.','Làm rõ cách chia hoa hồng khi khách chung hoặc nhân sự nghỉ.','Lập và theo dõi chi phí của phòng kinh doanh.'],ai:'Hỗ trợ tổng hợp chi phí và so sánh phương án từ dữ liệu đã được kiểm tra.',output:'Cơ chế thu nhập, hoa hồng và thưởng; ngân sách và cách theo dõi chi phí.'},
 {id:'M5',title:'Công cụ',group:'Nguồn lực đúng',position:[35,82],summary:'Chọn và kết nối công nghệ để phục vụ cách làm của doanh nghiệp.',work:['Rà soát dữ liệu, CRM và công cụ đang sử dụng.','Chọn giải pháp phù hợp với quy trình, ngân sách và nhân sự.','Thiết lập cách kết nối, phân quyền và hướng dẫn sử dụng.'],ai:'Kết nối trợ lý AI hoặc tự động hóa cho các công việc phù hợp, với dữ liệu và quyền truy cập được kiểm soát.',output:'Danh mục giải pháp, phương án kết nối và hướng dẫn sử dụng.'},
 {id:'M6',title:'Đo lường',group:'Quản lý đúng',position:[16,58],summary:'Biết hoạt động nào đang tạo kết quả và điểm nào cần điều chỉnh.',work:['Thống nhất định nghĩa và cách tính các chỉ số.','Thiết kế báo cáo theo từng vai trò và thời điểm xem.','Xác định cách kiểm tra chất lượng dữ liệu.'],ai:'Tổng hợp báo cáo và gợi ý điểm cần xem xét. Số liệu và nguyên nhân cần được người phụ trách xác minh.',output:'Bộ chỉ số, mẫu báo cáo và hướng dẫn đọc số liệu.'},
 {id:'M7',title:'Điều hành',group:'Quản lý đúng',position:[22,29],summary:'Có người chịu trách nhiệm và nhịp quản lý để hệ thống được thực hiện đều đặn.',work:['Thiết kế lịch họp, nội dung đánh giá và cách giao việc.','Làm rõ quyền quyết định và trách nhiệm xử lý vướng mắc.','Huấn luyện quản lý theo dõi, phản hồi và điều chỉnh.'],ai:'Chuẩn bị nội dung họp, tổng hợp việc đã thống nhất và hỗ trợ theo dõi tiến độ thực hiện.',output:'Nhịp điều hành, mẫu họp và cơ chế theo dõi trách nhiệm.'}
];
const wheel=window.SevenMFramework.mount(document.querySelector('[data-framework-wheel]'),pillars,{onGroup:selectPillarGroup});
const allButtons=wheel.buttons;
const detail=document.querySelector('.pillar-detail');
let selected=-1,detailAnimation;
function selectPillar(index,animate=true){
 if(index===selected)return;selected=index;const p=pillars[index];
 detail.classList.remove('is-group-overview');document.querySelector('.detail-block h4').textContent='Cùng doanh nghiệp xây dựng';
 wheel.setActive(index);
 document.getElementById('pillar-group').textContent=p.group;document.getElementById('pillar-code').textContent=p.id;document.getElementById('pillar-title').textContent=p.title;document.getElementById('pillar-summary').textContent=p.summary;
 document.getElementById('pillar-work').replaceChildren(...p.work.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
 document.getElementById('pillar-ai').textContent=p.ai;document.getElementById('pillar-output').textContent=p.output;
 if(animate&&!reduced.matches&&!paused){detailAnimation?.cancel();detailAnimation=document.querySelector('.pillar-detail-content').animate([{opacity:.45,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(0.23,1,0.32,1)'});}
}
allButtons.forEach(button=>{const index=Number(button.dataset.index);button.addEventListener('click',()=>{selectPillar(index);if(innerWidth<761)detail.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});});button.addEventListener('focus',()=>selectPillar(index,false));button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'&&matchMedia('(min-width:761px) and (hover:hover) and (pointer:fine)').matches)selectPillar(index);});});
selectPillar(0,false);

allButtons.forEach((button,index)=>button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%7;if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index+6)%7;if(event.key==='Home')next=0;if(event.key==='End')next=6;if(next!==undefined){event.preventDefault();allButtons[next].focus();}}));

function selectPillarGroup(index){
 selected=-1;const group=wheel.groups[index];detail.classList.add('is-group-overview');
 document.getElementById('pillar-group').textContent='3 nhóm năng lực';document.getElementById('pillar-code').textContent=group.members.map(i=>pillars[i].id).join(' · ');document.getElementById('pillar-title').textContent=group.title;document.getElementById('pillar-summary').textContent=group.text;document.querySelector('.detail-block h4').textContent='Các trụ cột trong nhóm';
 document.getElementById('pillar-work').replaceChildren(...group.members.map(i=>{const li=document.createElement('li');li.textContent=pillars[i].id+' · '+pillars[i].title+': '+pillars[i].summary;return li;}));
 if(innerWidth<761)document.querySelector('.fw-wheel').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
}
