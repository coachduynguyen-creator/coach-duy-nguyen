const body=document.body;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
body.classList.add('js');
body.dataset.motion=paused?'none':'full';
body.dataset.paused=String(paused);
const visible=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');visible.unobserve(entry.target);}}},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>visible.observe(el));
const menu=document.querySelector('.menu-button');const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a,button').forEach(el=>el.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const dialog=document.getElementById('preview-dialog');
const defaultPreviewMessage=document.getElementById('dialog-message').textContent;
document.querySelectorAll('[data-preview]').forEach(el=>el.addEventListener('click',()=>{document.getElementById('dialog-title').textContent=el.dataset.preview;document.getElementById('dialog-message').textContent=el.dataset.previewMessage||defaultPreviewMessage;dialog.showModal();}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
reduced.addEventListener('change',e=>{paused=e.matches;body.dataset.motion=paused?'none':'full';body.dataset.paused=String(paused);});
const pillars=[
 {id:'M1',title:'Thị trường',group:'Bán đúng cách',position:[50,13],summary:'Bán cho ai, giải quyết nhu cầu gì và vì sao khách hàng chọn doanh nghiệp.',work:['Xác định nhóm khách hàng và nhu cầu ưu tiên.','Thiết kế cách tiếp cận, thông điệp và đề xuất phù hợp.','Thống nhất tiêu chí sàng lọc cơ hội bán hàng.'],ai:'Tổng hợp phản hồi, phân tích cuộc trao đổi và hỗ trợ nghiên cứu khách hàng. Con người kiểm tra và quyết định.',output:'Chân dung khách hàng, đề xuất giá trị và tiêu chí sàng lọc.'},
 {id:'M2',title:'Quy trình',group:'Bán đúng cách',position:[78,29],summary:'Thống nhất cách bán hàng từ tiếp cận, tư vấn đến quyết định mua, thanh toán và chăm sóc.',work:['Thiết kế các bước bán hàng, thanh toán và điều kiện chuyển bước.','Xây dựng hướng dẫn tư vấn, chăm sóc và nuôi dưỡng.','Phân công trách nhiệm và cách phối hợp giữa các bộ phận.'],ai:'Soạn bản nháp nội dung chăm sóc, tóm tắt trao đổi và nhắc việc theo quy trình đã thống nhất.',output:'Quy trình bán hàng, hướng dẫn thực hiện và mẫu chăm sóc khách hàng.'},
 {id:'M3',title:'Nhân sự',group:'Nguồn lực đúng',position:[84,58],summary:'Có người phù hợp, hiểu rõ công việc và được huấn luyện để thực hiện.',work:['Làm rõ vai trò, trách nhiệm và yêu cầu năng lực.','Thiết kế chương trình đào tạo và hướng dẫn nhân viên mới.','Xây dựng cách huấn luyện, phản hồi và đánh giá năng lực.'],ai:'Mô phỏng tình huống tư vấn và hỗ trợ phân tích cuộc gọi theo tiêu chí chuyên môn do quản lý xác lập.',output:'Mô tả vai trò, khung năng lực và kế hoạch đào tạo, huấn luyện.'},
 {id:'M4',title:'Ngân sách',group:'Nguồn lực đúng',position:[65,82],summary:'Phân bổ chi phí theo mục tiêu và khả năng triển khai của phòng kinh doanh.',work:['Xác định chi phí nhân sự, công cụ và hoạt động bán hàng.','Lập ngân sách và các phương án phân bổ.','Thiết kế cách theo dõi chi phí so với kết quả thực hiện.'],ai:'Hỗ trợ tổng hợp chi phí và so sánh phương án từ dữ liệu đã được kiểm tra.',output:'Ngân sách phòng kinh doanh và cách theo dõi chi phí.'},
 {id:'M5',title:'Công cụ',group:'Nguồn lực đúng',position:[35,82],summary:'Chọn và kết nối công nghệ để phục vụ cách làm của doanh nghiệp.',work:['Rà soát dữ liệu, CRM và công cụ đang sử dụng.','Chọn giải pháp phù hợp với quy trình, ngân sách và nhân sự.','Thiết lập cách kết nối, phân quyền và hướng dẫn sử dụng.'],ai:'Kết nối trợ lý AI hoặc tự động hóa cho các công việc phù hợp, với dữ liệu và quyền truy cập được kiểm soát.',output:'Danh mục giải pháp, phương án kết nối và hướng dẫn sử dụng.'},
 {id:'M6',title:'Đo lường',group:'Quản lý đúng',position:[16,58],summary:'Biết hoạt động nào đang tạo kết quả và điểm nào cần điều chỉnh.',work:['Thống nhất định nghĩa và cách tính các chỉ số.','Thiết kế báo cáo theo từng vai trò và thời điểm xem.','Xác định cách kiểm tra chất lượng dữ liệu.'],ai:'Tổng hợp báo cáo và gợi ý điểm cần xem xét. Số liệu và nguyên nhân cần được người phụ trách xác minh.',output:'Bộ chỉ số, mẫu báo cáo và hướng dẫn đọc số liệu.'},
 {id:'M7',title:'Điều hành',group:'Quản lý đúng',position:[22,29],summary:'Có người chịu trách nhiệm và nhịp quản lý để hệ thống được thực hiện đều đặn.',work:['Thiết kế lịch họp, nội dung đánh giá và cách giao việc.','Làm rõ quyền quyết định và trách nhiệm xử lý vướng mắc.','Huấn luyện quản lý theo dõi, phản hồi và điều chỉnh.'],ai:'Chuẩn bị nội dung họp, tổng hợp việc đã thống nhất và hỗ trợ theo dõi tiến độ thực hiện.',output:'Nhịp điều hành, mẫu họp và cơ chế theo dõi trách nhiệm.'}
];
const framework=document.querySelector('.framework-groups');
const allButtons=[];
for(const [index,p] of pillars.entries()){
 const target=[...framework.querySelectorAll('[data-group]')].find(group=>group.dataset.group===p.group).querySelector('.pillar-list');
 const button=document.createElement('button');button.className='pillar-node';button.type='button';button.dataset.index=index;button.setAttribute('aria-pressed',String(index===0));button.setAttribute('aria-controls','pillar-information');button.setAttribute('aria-label',p.id+' '+p.title+', '+p.group);button.innerHTML='<span>'+p.id+'</span><strong>'+p.title+'</strong><svg class="pillar-selected-mark" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4.5 10 3.5 3.5 7.5-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';target.append(button);allButtons.push(button);
}
const detail=document.querySelector('.pillar-detail');
let selected=-1,detailAnimation;
function selectPillar(index,animate=true){
 if(index===selected)return;selected=index;const p=pillars[index];
 allButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
 document.getElementById('pillar-group').textContent=p.group;document.getElementById('pillar-code').textContent=p.id;document.getElementById('pillar-title').textContent=p.title;document.getElementById('pillar-summary').textContent=p.summary;
 document.getElementById('pillar-work').replaceChildren(...p.work.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
 document.getElementById('pillar-ai').textContent=p.ai;document.getElementById('pillar-output').textContent=p.output;
 if(animate&&!reduced.matches&&!paused){detailAnimation?.cancel();detailAnimation=document.querySelector('.pillar-detail-content').animate([{opacity:.45,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(0.23,1,0.32,1)'});}
}
allButtons.forEach(button=>{const index=Number(button.dataset.index);button.addEventListener('click',()=>{selectPillar(index);if(innerWidth<761)detail.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});});button.addEventListener('focus',()=>selectPillar(index,false));button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'&&matchMedia('(min-width:761px) and (hover:hover) and (pointer:fine)').matches)selectPillar(index);});});
selectPillar(0,false);
async function insertDashboard(){try{const response=await fetch('assets/dashboard.svg');if(!response.ok)throw Error('dashboard');const text=await response.text();const parsed=new DOMParser().parseFromString(text,'image/svg+xml');const svg=parsed.documentElement;if(svg.localName!=='svg')throw Error('svg');svg.setAttribute('role','img');svg.setAttribute('aria-label','Mẫu giao diện Sales OS hỗ trợ trụ M6 về đo lường trong hệ thống 7M. Dữ liệu giả định, doanh thu tháng 6 là 285 triệu đồng.');document.getElementById('dashboard-art').replaceChildren(document.importNode(svg,true));const largeSvg=document.importNode(svg,true);const ids=new Map();largeSvg.querySelectorAll('[id]').forEach(node=>{ids.set(node.id,'sales-detail-'+node.id);node.id='sales-detail-'+node.id;});largeSvg.querySelectorAll('*').forEach(node=>{for(const attribute of [...node.attributes]){let value=attribute.value;ids.forEach((next,old)=>{value=value.replaceAll('url(#'+old+')','url(#'+next+')');if(value==='#'+old)value='#'+next;});if(value!==attribute.value)node.setAttribute(attribute.name,value);}});document.getElementById('sales-demo-art').replaceChildren(largeSvg);}catch{const image=new Image();image.src='assets/dashboard.svg';image.alt='Mẫu giao diện Sales OS, dữ liệu minh họa';document.getElementById('dashboard-art').replaceChildren(image);}}
insertDashboard();

// Bản điện thoại xem toàn cảnh trước, mở vùng cuộn riêng khi cần đọc chi tiết.
const salesDialog=document.getElementById('sales-demo-dialog');
document.getElementById('open-sales-demo').addEventListener('click',()=>salesDialog.showModal());
salesDialog.querySelector('.sales-demo-close').addEventListener('click',()=>salesDialog.close());
salesDialog.addEventListener('click',event=>{if(event.target===salesDialog){const bounds=salesDialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)salesDialog.close();}});

// Điện thoại thu gọn các nhóm liên kết; máy tính vẫn đọc được toàn bộ.
const footerMobile=matchMedia('(max-width:600px)');
function syncFooterGroups(){document.querySelectorAll('.footer-links').forEach(group=>{group.open=!footerMobile.matches;const summary=group.querySelector('summary');if(footerMobile.matches)summary.removeAttribute('tabindex');else summary.setAttribute('tabindex','-1');});}
syncFooterGroups();footerMobile.addEventListener('change',syncFooterGroups);
