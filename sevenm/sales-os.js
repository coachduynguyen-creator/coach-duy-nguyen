/* Sơ đồ minh họa, không gọi dịch vụ AI, CRM hoặc dữ liệu khách. */
(()=>{
 const content=window.SevenMSalesOS;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const touch=matchMedia('(max-width:760px)');
 const NS='http://www.w3.org/2000/svg';
 const create=(name,attrs)=>{const e=document.createElementNS(NS,name);for(const [k,v] of Object.entries(attrs||{}))e.setAttribute(k,v);return e;};
 document.querySelectorAll('[data-os-network]').forEach((network,index)=>{
  const detailed=network.dataset.detail==='true';
  const layout=network.querySelector('.os-layout');
  const svg=network.querySelector('svg');
  const nodes=new Map([...network.querySelectorAll('[data-os-node]')].map(n=>[n.dataset.osNode,n]));
  const panel=detailed?document.getElementById('os-information'):null;
  let selected='hub',inView=true,frame;
  const edges=detailed?[['channels','crm'],['crm','channels'],['crm','hub'],['hub','inbox'],['inbox','people'],['ai-intake','hub'],['ai-sales','hub'],['ai-care','hub'],['ai-manager','hub'],['crm','customer-data'],['knowledge','hub'],['rules','hub'],['people','hub']]:[['channels','crm'],['crm','channels'],['crm','hub'],['hub','people'],['ai','hub'],['knowledge','hub']];
  function highlight(preview=selected){
   const related=new Set([preview]);for(const [a,b] of edges)if(a===preview||b===preview){related.add(a);related.add(b);}
   nodes.forEach((node,key)=>{node.classList.toggle('is-related',related.has(key));if(detailed)node.setAttribute('aria-pressed',String(key===selected));});
   svg.querySelectorAll('[data-from]').forEach(path=>path.classList.toggle('is-related',path.dataset.from===preview||path.dataset.to===preview));
  }
  function draw(){
   const box=layout.getBoundingClientRect();if(!box.width)return;
   svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);svg.replaceChildren();
   const defs=create('defs');const marker=create('marker',{id:`os-arrow-${index}`,viewBox:'0 0 8 8',refX:7,refY:4,markerWidth:5,markerHeight:5,orient:'auto'});marker.append(create('path',{d:'M1 1 7 4 1 7','class':'os-edge-arrow'}));defs.append(marker);svg.append(defs);
   edges.forEach(([from,to],i)=>{
    const a=nodes.get(from).getBoundingClientRect(),b=nodes.get(to).getBoundingClientRect();
    let x1=a.x+a.width/2-box.x,y1=a.y+a.height/2-box.y,x2=b.x+b.width/2-box.x,y2=b.y+b.height/2-box.y;
    const main=['channels','crm','hub','inbox','people'];
    const horizontal=!touch.matches&&main.includes(from)&&main.includes(to);
    if(horizontal){const sign=x2>x1?1:-1;x1+=sign*a.width/2;y1=a.y+a.height/2-box.y;x2-=sign*(b.width/2+3);}
    else {const sign=y2>y1?1:-1;y1+=sign*a.height/2;y2-=sign*(b.height/2+3);}
    let d;
    // Các đường quay về đi ở mép ngoài, không chạy xuyên qua nội dung.
    if(from==='crm'&&to==='channels'){
     if(touch.matches){const gutter=box.width-2;x1=a.right-box.x;y1=a.y+a.height/2-box.y;x2=b.right-box.x;y2=b.y+b.height/2-box.y;d=`M${x1},${y1} C${gutter},${y1} ${gutter},${y2} ${x2},${y2}`;}
     else{x1=a.x+a.width/2-box.x;y1=a.bottom-box.y;x2=b.x+b.width/2-box.x;y2=b.bottom-box.y;const gutter=Math.max(y1,y2)+34;d=`M${x1},${y1} C${x1},${gutter} ${x2},${gutter} ${x2},${y2}`;}
    } else if(touch.matches&&[['crm','hub'],['hub','inbox'],['hub','people'],['crm','customer-data'],['knowledge','hub'],['rules','hub'],['people','hub']].some(([a,b])=>a===from&&b===to)){
     const left=(from==='crm'&&to==='hub')||(from==='hub'&&(to==='inbox'||to==='people'));const gutter=left?2:box.width-2;
     x1=(left?a.left:a.right)-box.x;y1=a.y+a.height/2-box.y;x2=(left?b.left:b.right)-box.x;y2=b.y+b.height/2-box.y;
     d=`M${x1},${y1} C${gutter},${y1} ${gutter},${y2} ${x2},${y2}`;
    } else if(from==='people'&&to==='hub'){
     const gutter=touch.matches?box.width-2:box.height-9;
     if(touch.matches){x1=a.right-box.x;y1=a.y+a.height/2-box.y;x2=b.right-box.x;y2=b.y+b.height/2-box.y;d=`M${x1},${y1} C${gutter},${y1} ${gutter},${y2} ${x2},${y2}`;}
     else {x1=a.x+a.width/2-box.x;y1=a.bottom-box.y;x2=b.x+b.width/2-box.x;y2=b.bottom-box.y;d=`M${x1},${y1} C${x1},${gutter} ${x2},${gutter} ${x2},${y2}`;}
    } else if(horizontal){const bend=(x1+x2)/2;d=`M${x1},${y1} C${bend},${y1} ${bend},${y2} ${x2},${y2}`;}
    else {const bend=(y1+y2)/2;d=`M${x1},${y1} C${x1},${bend} ${x2},${bend} ${x2},${y2}`;}
    const path=create('path',{d,'class':'os-edge','data-from':from,'data-to':to,'marker-end':`url(#os-arrow-${index})`});svg.append(path);
    const red=from.startsWith('ai')||from==='rules'||from==='hub';
    // SVG di chuyển điểm sáng theo đường cong, không đổi vị trí thẻ hoặc chữ.
    const packet=create('g',{'class':'os-packet'+(red?' is-red':'')});packet.append(create('circle',{r:5,'class':'os-packet-halo'}),create('circle',{r:2.2}));
    const motion=create('animateMotion',{dur:(5.5+(i%3)*.7)+'s',repeatCount:'indefinite',path:d,begin:(-i*.8)+'s',calcMode:'paced'});packet.append(motion);svg.append(packet);
   });highlight();syncMotion();
  }
  function syncMotion(){if(reduce.matches||document.hidden||!inView)svg.pauseAnimations?.();else svg.unpauseAnimations?.();}
  function queue(){cancelAnimationFrame(frame);frame=requestAnimationFrame(draw);}
  function select(key,announce=false){
   if(!nodes.has(key)||!content[key]||!panel)return;
   selected=key;const item=content[key];highlight();
   const fields={code:item.code,title:item.title,text:item.text,human:item.human,output:item.output};
   Object.entries(fields).forEach(([k,v])=>{panel.querySelector('[data-os-'+k+']').textContent=v;});
   panel.querySelector('[data-os-work]').replaceChildren(...item.work.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
   panel.querySelector('[data-os-picker]').value=key;
   if(announce)panel.querySelector('.os-live-status').textContent='Đang xem: '+item.title+'. '+item.text;
  }
  if(detailed){
   nodes.forEach((node,key)=>{
    node.addEventListener('click',()=>{select(key,true);if(touch.matches)panel.scrollIntoView({behavior:reduce.matches?'instant':'smooth',block:'start'});});
    node.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&matchMedia('(hover:hover) and (pointer:fine)').matches)highlight(key);});
    node.addEventListener('pointerleave',()=>highlight());
    node.addEventListener('focus',()=>select(key));
   });
   panel.querySelector('[data-os-picker]').addEventListener('change',e=>select(e.target.value,true));
   const initial=new URLSearchParams(location.search).get('os');select(nodes.has(initial)?initial:'hub');
  }
  new ResizeObserver(queue).observe(layout);
  document.fonts?.ready.then(queue);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncMotion();},{rootMargin:'120px'}).observe(network);
  document.addEventListener('visibilitychange',syncMotion);reduce.addEventListener('change',syncMotion);touch.addEventListener('change',queue);queue();
 });
})();
