/* Giữ số thật khi không có JS; chuyển động chỉ giải thích khi khối xuất hiện. */
(()=>{
 const section=document.querySelector('.pain-section');if(!section)return;
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const count=section.querySelector('[data-selling-count]');
 const fill=section.querySelector('.pain-chart-fill');
 let started=false;
 function settle(){count.textContent='40';fill.getAnimations().forEach(a=>a.cancel());}
 function enter(){if(started)return;started=true;if(motion.matches)return;
  count.textContent='40';fill.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:1000,easing:getComputedStyle(document.documentElement).getPropertyValue('--ease').trim()||'cubic-bezier(0.23,1,0.32,1)'});
 }
 const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){enter();observer.disconnect();}},{threshold:.3});observer.observe(section.querySelector('.pain-evidence'));
 motion.addEventListener('change',e=>{if(e.matches)settle();});
 section.querySelectorAll('.pain-item').forEach(item=>{
  const summary=item.querySelector('summary'),answer=item.querySelector('.pain-answer');let animation=null,target=item.open;
  summary.addEventListener('click',event=>{
   event.preventDefault();target=!target;
   const from=answer.getBoundingClientRect().height;animation?.cancel();item.open=true;
   const to=target?answer.scrollHeight:0;
   if(motion.matches||event.detail===0){item.open=target;answer.style.height='';return;}
   answer.style.overflow='hidden';
   animation=answer.animate([{height:from+'px',opacity:from?1:0},{height:to+'px',opacity:target?1:0}],{duration:200,easing:getComputedStyle(document.documentElement).getPropertyValue('--ease').trim()||'cubic-bezier(0.23,1,0.32,1)'});
   animation.onfinish=()=>{item.open=target;answer.style.overflow='';animation=null;};
  });
 });
})();
