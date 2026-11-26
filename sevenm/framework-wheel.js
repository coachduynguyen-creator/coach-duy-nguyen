/* Framework 7M: giữ bố cục tròn đã chốt, lấy số chuẩn từ nguồn dùng chung. */
window.SevenMFramework={mount(host,pillars,{links=false,onGroup}={}){
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
 const groupColors=[['#315c73','#23485e'],['#2c4e67','#203e57'],['#475a75','#354b65']];
 const defs=svg.querySelector('defs');groupColors.forEach(([a,b],i)=>{const g=make('linearGradient',{id:`${id}-group-${i}`,x1:0,y1:0,x2:1,y2:1});g.append(make('stop',{'stop-color':a}),make('stop',{offset:1,'stop-color':b}));defs.append(g);});
 const together=make('linearGradient',{id:`${id}-together`,x1:0,y1:0,x2:1,y2:1});together.append(make('stop',{'stop-color':'#71424c'}),make('stop',{offset:1,'stop-color':'#4a3449'}));defs.append(together);
 svg.append(make('circle',{cx:320,cy:320,r:290,class:'fw-base'}));
 const sectors=[];
 for(let i=0;i<7;i++){const group=i<2?0:i<5?1:2,start=[0,2,5].includes(i)?2.8:1.05,end=[2,5,7].includes(i+1)?2.8:1.05;const path=make('path',{d:sector(i*step+start,(i+1)*step-end),class:'fw-sector',fill:`url(#${id}-group-${group})`});svg.append(path);sectors.push(path);}
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
 for(const[groupIndex,group]of groups.entries()){const card=document.createElement('button');card.type='button';card.dataset.groupIndex=groupIndex;card.className='fw-group';card.setAttribute('aria-pressed','false');card.setAttribute('aria-label',group.title+', làm nổi bật '+group.members.map(i=>pillars[i].id).join(', '));if(!links)card.setAttribute('aria-controls','pillar-information');const title=document.createElement('span'),members=document.createElement('span'),summary=document.createElement('span');title.className='fw-group-title';title.textContent=group.title;members.className='fw-members';members.textContent=group.members.map(i=>pillars[i].id+' '+pillars[i].title).join(' · ');summary.className='fw-group-summary';summary.textContent=group.text;card.append(title,members,summary);legend.append(card);cards.push(card);}
 host.append(wheel,legend);
 sectors.forEach((path,i)=>{path.addEventListener('click',()=>buttons[i].click());});
 const paint=(index,group,whole=false)=>{host.dataset.selection=whole?'group':'pillar';buttons.forEach((b,i)=>{b.classList.toggle('is-active',i===index);if(!links)b.setAttribute('aria-pressed',String(i===index));});sectors.forEach((path,i)=>{const own=i<2?0:i<5?1:2,fill=whole&&own===group?'together':i===index?'selected':'group-'+own;path.setAttribute('fill',`url(#${id}-${fill})`);path.classList.toggle('is-active',i===index);path.classList.toggle('is-group-active',own===group);});arcs.forEach((a,i)=>a.classList.toggle('is-active',i===group));cards.forEach((c,i)=>{c.classList.toggle('is-active',i===group);c.setAttribute('aria-pressed',String(i===group));});};
 const setActive=index=>paint(index,index<2?0:index<5?1:2);
 const setGroup=group=>{paint(-1,group,true);onGroup?.(group);};cards.forEach((c,i)=>c.addEventListener('click',()=>setGroup(i)));
 if(links){buttons.forEach((b,i)=>b.addEventListener('click',()=>{setActive(i);const chapter=document.getElementById('m'+(i+1));if(chapter)chapter.open=true;}));setActive(0);}
 return{buttons,setActive,setGroup,groups,groupButtons:cards};
}};
document.querySelectorAll('[data-framework-links]').forEach(host=>window.SevenMFramework.mount(host,window.SevenMStandards,{links:true}));
