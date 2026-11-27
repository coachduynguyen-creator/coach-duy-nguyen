(()=>{
 const root=document.querySelector('.ai-explorer');if(!root)return;
 const articles=[...root.querySelectorAll('.ai-reading article')],rail=root.querySelector('.ai-rail'),buttons=[...rail.querySelectorAll('button')];
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),reading=root.querySelector('.ai-reading'),route=root.querySelector('[data-route-pillar]'),link=root.querySelector('.ai-stage-end a');let change;
 function select(index,animate=true){articles.forEach((article,i)=>{article.hidden=i!==index;});buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));route.textContent='M'+(index+1);link.href='/sevenm/phuong-phap/#m'+(index+1);link.textContent='Xem tiêu chuẩn M'+(index+1)+' ↗';change?.cancel();if(animate&&!motion.matches)change=reading.animate([{opacity:.4,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:200,easing:getComputedStyle(document.documentElement).getPropertyValue('--ease').trim()||'cubic-bezier(0.23,1,0.32,1)'});}
 root.classList.add('is-enhanced');rail.hidden=false;root.querySelector('.ai-stage-end').hidden=false;select(0,false);
 buttons.forEach((b,i)=>{b.addEventListener('click',()=>select(i));b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowDown'||e.key==='ArrowRight')next=(i+1)%buttons.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=(i+buttons.length-1)%buttons.length;if(e.key==='Home')next=0;if(e.key==='End')next=buttons.length-1;if(next!==undefined){e.preventDefault();buttons[next].focus();select(next,false);}});});
 const flow=document.querySelector('.technology-flow');function measure(){const routeLine=root.querySelector('.ai-route');routeLine.style.setProperty('--ai-route-distance',routeLine.clientWidth*.68+'px');flow?.querySelectorAll('li').forEach(li=>{const mobile=innerWidth<=760;li.style.setProperty('--tech-step-distance',(mobile?Math.max(0,li.clientHeight-55):Math.max(0,li.clientWidth-56))+'px');});}
 new ResizeObserver(measure).observe(root);if(flow)new ResizeObserver(measure).observe(flow);measure();
 motion.addEventListener('change',e=>{if(e.matches)change?.cancel();});
})();
