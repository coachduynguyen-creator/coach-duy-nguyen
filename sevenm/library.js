/* Lọc bài đang có và chỉ nạp trình phát khi người đọc bấm phát. */
(() => {
 const filters=[...document.querySelectorAll('[data-library-filter]')];
 const items=[...document.querySelectorAll('[data-library-item]')];
 filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  items.forEach(item=>item.hidden=!!button.dataset.libraryFilter&&item.dataset.topic!==button.dataset.libraryFilter);
  const status=document.querySelector('.library-results');
  if(status)status.textContent=items.filter(i=>!i.hidden).length+' bài viết';
 }));
 const episodes=[...document.querySelectorAll('[data-podcast-episode]')];
 if(!episodes.length)return;
 let active=JSON.parse(episodes[0].dataset.podcastEpisode);
 const screen=document.querySelector('.podcast-screen');
 function poster(){
  const button=document.createElement('button');button.type='button';button.className='podcast-play';button.setAttribute('aria-label','Phát: '+active.title);
  const img=document.createElement('img');img.src='https://i.ytimg.com/vi/'+active.id+'/hqdefault.jpg';img.alt='';img.width=480;img.height=360;
  const play=document.createElement('span');play.setAttribute('aria-hidden','true');play.textContent='▶';button.append(img,play);
  button.addEventListener('click',()=>{
   const frame=document.createElement('iframe');frame.title=active.title;frame.src='https://www.youtube-nocookie.com/embed/'+active.id+'?autoplay=1&rel=0';frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;screen.replaceChildren(frame);
  });screen.replaceChildren(button);
 }
 episodes.forEach(button=>button.addEventListener('click',()=>{
  active=JSON.parse(button.dataset.podcastEpisode);episodes.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelector('[data-podcast-title]').textContent=active.title;
  document.querySelector('[data-podcast-description]').textContent=active.description;
  document.querySelector('[data-podcast-category]').textContent=active.category;
  document.querySelector('[data-podcast-link]').href='https://www.youtube.com/watch?v='+active.id;
  poster();
 }));poster();
})();
