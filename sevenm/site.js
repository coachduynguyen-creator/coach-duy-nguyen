/* Điều hướng dùng chung. Không nhận hoặc gửi dữ liệu biểu mẫu. */
(()=>{
 const menu=document.querySelector('.menu-button');
 const nav=document.getElementById('navigation');
 function closeMenu(returnFocus=false){if(!menu||!nav)return;const wasOpen=nav.classList.contains('open');nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(returnFocus&&wasOpen)menu.focus();}
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu(true);});
 document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
 const mobile=matchMedia('(max-width:600px)');
 function syncFooter(){document.querySelectorAll('.footer-links').forEach(group=>{group.open=!mobile.matches;const summary=group.querySelector('summary');if(mobile.matches)summary.removeAttribute('tabindex');else summary.setAttribute('tabindex','-1');});}
 syncFooter();mobile.addEventListener('change',syncFooter);
 const desktop=matchMedia('(min-width:951px)');desktop.addEventListener('change',()=>closeMenu());
 // Mở đúng phần được chọn từ sơ đồ, kể cả khi phần đó đang thu gọn.
 function openChapter(){const id=location.hash.slice(1);const chapter=document.getElementById(id);if(chapter?.classList.contains('standard-chapter'))chapter.open=true;}
 document.querySelectorAll('.model-preview a').forEach(a=>a.addEventListener('click',()=>{const chapter=document.querySelector(a.getAttribute('href'));if(chapter)chapter.open=true;}));
 addEventListener('hashchange',openChapter);openChapter();
 // Phản chiếu nhẹ theo con trỏ, chỉ trên máy tính và khi người dùng cho phép chuyển động.
 if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.querySelectorAll('.subpage .glass').forEach(surface=>{surface.addEventListener('pointermove',e=>{const r=surface.getBoundingClientRect();surface.style.setProperty('--light-x',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');surface.style.setProperty('--light-y',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');});});
 }
})();
