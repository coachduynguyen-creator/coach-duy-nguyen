/* Framework 7M: giữ bố cục tròn đã chốt, lấy số chuẩn từ nguồn dùng chung. */
window.SevenMFramework={mount(host,pillars,{links=false}={}){
 const NS='http://www.w3.org/2000/svg',make=(tag,attrs)=>{const e=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
 const id='fw-'+(document.querySelectorAll('.fw-wheel').length+1),step=360/7;
 const polar=(radius,angle)=>{const a=(angle-90)*Math.PI/180;return[320+radius*Math.cos(a),320+radius*Math.sin(a)];};
 const point=(r,a)=>polar(r,a).map(x=>x.toFixed(2)).join(' ');
 const arc=(r,a,b)=>`M${point(r,a)} A${r} ${r} 0 ${b-a>180?1:0} 1 ${point(r,b)}`;
 const sector=(a,b)=>`${arc(268,a,b)}L${point(127,b)}A127 127 0 0 0 ${point(127,a)}Z`;
 host.classList.add('fw-layout');
 const wheel=document.createElement('div');wheel.className='fw-wheel';
 const svg=make('svg',{viewBox:'0 0 640 640','aria-hidden':'true',class:'fw-art'});
 svg.innerHTML=`<defs><linearGradient id="${id}-sector" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#345873"/><stop offset="1" stop-color="#24455e"/></linearGradient><linearGradient id="${id}-selected" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#75434c"/><stop offset="1" stop-color="#3b3046"/></linearGradient><radialGradient id="${id}-center"><stop stop-color="#1c354d"/><stop offset="1" stop-color="#10263b"/></radialGradient></defs>`;
 svg.append(make('circle',{cx:320,cy:320,r:290,class:'fw-base'}));
 const sectors=[];
 for(let i=0;i<7;i++){const path=make('path',{d:sector(i*step+1.15,(i+1)*step-1.15),class:'fw-sector',fill:`url(#${id}-sector)`});svg.append(path);sectors.push(path);}
 const arcs=[];
 for(const[a,b]of [[0,2],[2,5],[5,7]]){const path=make('path',{d:arc(283,a*step+1.5,b*step-1.5),class:'fw-group-arc'});svg.append(path);arcs.push(path);}
 svg.append(make('circle',{cx:320,cy:320,r:119,fill:`url(#${id}-center)`,class:'fw-center-ring'}));wheel.append(svg);
 const center=document.createElement('div');center.className='fw-center';center.innerHTML='<strong>PHÒNG<br>KINH DOANH</strong><span>51 CHUẨN</span>';wheel.append(center);
 const buttons=[];
 for(const[i,p]of pillars.entries()){
  const button=document.createElement(links?'a':'button');if(!links)button.type='button';else button.href='#m'+(i+1);
  const[x,y]=polar(199,(i+.5)*step);button.className='fw-button';button.dataset.index=i;button.style.left=x/640*100+'%';button.style.top=y/640*100+'%';
  const count=window.SevenMStandards?.[i]?.standards.length;button.setAttribute('aria-label',p.id+' '+p.title+(count?', '+count+' tiêu chuẩn':''));
  if(!links){button.setAttribute('aria-pressed','false');button.setAttribute('aria-controls','pillar-information');}
  const code=document.createElement('span'),title=document.createElement('strong');code.textContent=p.id;title.textContent=p.title;button.append(code,title);wheel.append(button);buttons.push(button);
 }
 const groups=[{title:'Bán đúng cách',text:'Bán cho ai và bán như thế nào.',members:[0,1]},{title:'Nguồn lực đúng',text:'Có người, ngân sách và công cụ phù hợp.',members:[2,3,4]},{title:'Quản lý đúng',text:'Theo dõi kết quả và điều hành cả phòng.',members:[5,6]}];
 const legend=document.createElement('div');legend.className='fw-groups';const cards=[];
 for(const group of groups){const card=document.createElement('section');card.className='fw-group';const title=document.createElement('h3'),members=document.createElement('p'),summary=document.createElement('p');title.textContent=group.title;members.className='fw-members';members.textContent=group.members.map(i=>pillars[i].id+' '+pillars[i].title).join(' · ');summary.className='fw-group-summary';summary.textContent=group.text;card.append(title,members,summary);legend.append(card);cards.push(card);}
 host.append(wheel,legend);
 sectors.forEach((path,i)=>{path.addEventListener('click',()=>buttons[i].click());});
 const setActive=index=>{const group=index<2?0:index<5?1:2;buttons.forEach((b,i)=>{b.classList.toggle('is-active',i===index);if(!links)b.setAttribute('aria-pressed',String(i===index));});sectors.forEach((path,i)=>{path.setAttribute('fill',`url(#${id}-${i===index?'selected':'sector'})`);path.classList.toggle('is-active',i===index);});arcs.forEach((a,i)=>a.classList.toggle('is-active',i===group));cards.forEach((c,i)=>c.classList.toggle('is-active',i===group));};
 if(links){buttons.forEach((b,i)=>b.addEventListener('click',()=>{setActive(i);const chapter=document.getElementById('m'+(i+1));if(chapter)chapter.open=true;}));setActive(0);}
 return{buttons,setActive};
}};
document.querySelectorAll('[data-framework-links]').forEach(host=>window.SevenMFramework.mount(host,window.SevenMStandards,{links:true}));
