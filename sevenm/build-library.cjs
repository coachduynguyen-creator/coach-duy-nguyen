/* Nội dung lấy từ các trang gốc cùng kho, không viết lại bài hoặc tự tạo tập podcast. */
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const dom=p=>new JSDOM(read(p),{url:'https://coachduynguyen.vn/'+p}).window.document;
const copyEdits=Object.entries(JSON.parse(read('sevenm/library-copy-edits.json'))).sort((a,b)=>b[0].length-a[0].length);
function normalizeString(value){for(const [a,b]of copyEdits)value=value.split(a).join(b);return value;}
function normalizeCopy(element){const walker=element.ownerDocument.createTreeWalker(element,4);let text;while(text=walker.nextNode()){for(const [a,b] of copyEdits)text.textContent=text.textContent.split(a).join(b);}}
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const articles=[
 'doi-ngu-ban-hang-dang-o-vai-nao','kinh-nghiem-phai-thanh-he-thong','nam-thu-lam-nen-mot-he-thong','giao-quyen-ma-khong-mat-kiem-soat','cai-nut-that-mang-ten-ban','chan-doan-truoc-khi-ke-don','de-toi-suy-nghi-them','khach-chi-mac-ca-voi-nguoi-ban','vi-sao-giam-gia-lam-hong-quan-he','vi-sao-toi-khong-dung-phieu','khi-nao-nen-noi-khong','giu-binh-tinh-khi-khach-mat-binh-tinh','cai-gia-cua-nguoi-lam-duoc-moi-viec','bon-cau-toi-nghe-nhieu-nhat','cang-co-chung-minh-cang-mat-vi-the'
];
const pdfs=[
 ['gioi-thieu-mo-hinh-7m','Mô hình 7M'],['sang-loc-khach-hang-truoc-buoi-tu-van','Tư vấn bán hàng'],['dao-tao-nhan-vien-lam-duoc-viec-nhu-nguoi-chu','Huấn luyện'],['giao-viec-ma-van-nam-duoc-tinh-hinh','Quản lý'],['dat-muc-tieu-giao-viec-van-hanh-doanh-nghiep','Quản lý'],['vi-sao-khach-nghe-tu-van-xong-van-chua-mua','Tư vấn bán hàng'],['dung-ai-de-hieu-khach-hang-truoc-khi-viet','Công nghệ & AI'],['ke-hoach-kinh-doanh-mot-trang','Kế hoạch kinh doanh'],['tim-nguyen-nhan-khi-doanh-nghiep-chung-lai','Quản lý'],['lam-cho-khach-hang-den-deu-moi-thang','Thị trường']
];
const sourceBlog=dom('blog.html');
const sourcePodcast=dom('podcast.html');
const template=dom('sevenm/tai-lieu/index.html');
const toolsSection=template.querySelectorAll('.page-section')[1].cloneNode(true);
toolsSection.querySelectorAll('.source-note').forEach(e=>e.remove());
const existingTools=toolsSection.outerHTML;
const cta=template.querySelector('.page-cta').outerHTML;
const libraryNav=active=>`<nav class="library-nav" aria-label="Thư viện SevenM">${[['tai-lieu','Tài liệu'],['blog','Bài viết'],['podcast','Podcast']].map(([slug,label])=>`<a href="/sevenm/${slug}/"${active===slug?' aria-current="page"':''}>${label}</a>`).join('')}</nav>`;
function page(route,title,description,body,canonical){
 const d=new JSDOM(template.documentElement.outerHTML).window.document;
 d.querySelectorAll('link[href*="/sevenm/library.css"],script[src*="/sevenm/library.js"]').forEach(e=>e.remove());
 d.title=title+' · SevenM';
 d.querySelector('meta[name=description]').content=description;
 d.querySelector('link[rel=canonical]').href=canonical||'https://coachduynguyen.vn/sevenm/'+route+'/';
 d.querySelector('meta[property="og:title"]').content=d.title;
 d.querySelector('meta[property="og:description"]').content=description;
 const css=d.createElement('link');css.rel='stylesheet';css.href='/sevenm/library.css?v=281126-1';d.head.append(css);
 const script=d.createElement('script');script.defer=true;script.src='/sevenm/library.js?v=281126-1';d.head.append(script);
 d.body.classList.add('library-page');
 d.querySelector('main').innerHTML='<div aria-hidden="true" class="page-atmosphere"></div><div class="content">'+body+'</div>';
 for(const a of d.querySelectorAll('header a[href="/sevenm/tai-lieu/"]'))a.textContent='Thư viện';
 const target=path.join(__dirname,route,'index.html');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,'<!DOCTYPE html>\n'+d.documentElement.outerHTML);
}
function hero(title,lead,active){return `<div class="breadcrumbs"><a href="/sevenm/">SevenM</a><span aria-hidden="true">/</span><span>${esc(title)}</span></div>${libraryNav(active)}<section class="page-hero library-hero"><p class="eyebrow">THƯ VIỆN SEVENM</p><h1>${esc(title)}</h1><p class="page-lead">${esc(lead)}</p></section>`;}
const posts=articles.map(slug=>{
 const source='bai-viet/'+slug+'.html',d=dom(source);
 const card=[...sourceBlog.querySelectorAll('.the-bai')].find(a=>a.getAttribute('href')===source);
 const cover=card?.querySelector('img');
 const banned=['/img/mc/mc-hoitruong.webp','/img/mc/mc-chungnhan.webp','/img/mc/mc-sankhau.webp','/img/dh-phong-lon.webp'];
 const originalImage=cover?new URL(cover.getAttribute('src'),'https://coachduynguyen.vn/').pathname:'/img/bl-viet-tay.webp';
 const allowedImage=banned.includes(originalImage)?'/sevenm/assets/huan-luyen.webp':originalImage;
 const item={slug,source,title:normalizeString(d.querySelector('h1').textContent),description:normalizeString(d.querySelector('.tom').textContent),meta:d.querySelector('.meta').textContent.trim().replace(/\s+/g,' '),category:card?.dataset.cd||'Phòng kinh doanh',image:allowedImage,alt:banned.includes(originalImage)?'Coach Duy Nguyễn trong buổi đào tạo':cover?.alt||''};
 const content=d.querySelector('.doc').cloneNode(true);content.querySelector('.ml-ben')?.remove();normalizeCopy(content);
 for(const a of content.querySelectorAll('a[href]')){const href=a.getAttribute('href');if(!href.startsWith('#'))a.href=new URL(href,'https://coachduynguyen.vn/'+source).href;}
 for(const img of content.querySelectorAll('img[src]'))img.src=new URL(img.getAttribute('src'),'https://coachduynguyen.vn/'+source).href;
 const body=`<div class="breadcrumbs"><a href="/sevenm/">SevenM</a><span>/</span><a href="/sevenm/blog/">Bài viết</a></div>${libraryNav('blog')}<article class="reading-article"><header class="reading-hero"><div><p class="eyebrow">${esc(item.category)}</p><h1>${esc(item.title)}</h1><p class="page-lead">${esc(item.description)}</p><p class="reading-meta">${esc(item.meta)}</p></div><img src="${item.image}" alt="${esc(item.alt)}" width="1400" height="934"></header><div class="reading-body">${content.innerHTML}</div><div class="reading-source"><span>Coach Duy Nguyễn</span><a href="https://coachduynguyen.vn/${source}">Bài viết gốc ↗</a><a href="/sevenm/blog/">Các bài viết khác</a></div></article>${cta}`;
 page('blog/'+slug,item.title,item.description,body,'https://coachduynguyen.vn/'+source);
 return item;
});
function postCard(p,i){return `<article class="library-story${i===0?' is-featured':''}" data-library-item data-topic="${esc(p.category)}"><a href="/sevenm/blog/${p.slug}/" class="story-photo"><img src="${p.image}" alt="${esc(p.alt)}" width="1400" height="934" loading="lazy"></a><div><p class="eyebrow">${esc(p.category)}</p><h2><a href="/sevenm/blog/${p.slug}/">${esc(p.title)}</a></h2><p>${esc(p.description)}</p><a class="text-link" href="/sevenm/blog/${p.slug}/">Đọc bài viết ↗</a></div></article>`;}
const categories=[...new Set(posts.map(p=>p.category))];
const filters=`<div class="library-filters" aria-label="Lọc bài viết"><button type="button" data-library-filter="" aria-pressed="true">Tất cả</button>${categories.map(c=>`<button type="button" data-library-filter="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div>`;
page('blog','Bài viết về phòng kinh doanh','Bài viết về cách bán hàng, xây dựng hệ thống và quản lý phòng kinh doanh, chọn từ website Coach Duy Nguyễn.',hero('Bài viết về phòng kinh doanh','Bài viết về cách bán hàng, xây dựng hệ thống và quản lý phòng kinh doanh, chọn từ website Coach Duy Nguyễn.','blog')+filters+'<p class="library-results" aria-live="polite">'+posts.length+' bài viết</p><div class="library-stories">'+posts.map(postCard).join('')+'</div>'+cta);
const episodes=[...sourcePodcast.querySelectorAll('[data-yt]')].filter(e=>['2','4'].includes(e.dataset.muc)||e.dataset.yt==='tr38f_RNwwU').map(e=>({id:e.dataset.yt,title:normalizeString(e.dataset.tieu),description:normalizeString(e.dataset.mo),category:e.dataset.mucten}));
const first=episodes[0];
page('podcast','Podcast về bán hàng và quản lý','Các tập chia sẻ về tư vấn bán hàng, quy trình và hệ thống tăng trưởng của Coach Duy Nguyễn.',hero('Podcast về bán hàng và quản lý','Các tập chia sẻ về tư vấn bán hàng, quy trình và hệ thống tăng trưởng của Coach Duy Nguyễn.','podcast')+`<section class="podcast-console" aria-label="Podcast"><div class="podcast-current"><div class="podcast-screen"><button type="button" class="podcast-play" data-podcast-play aria-label="Phát: ${esc(first.title)}"><img src="https://i.ytimg.com/vi/${first.id}/hqdefault.jpg" width="480" height="360" alt=""><span aria-hidden="true">▶</span></button></div><p class="eyebrow" data-podcast-category>${esc(first.category)}</p><h2 data-podcast-title>${esc(first.title)}</h2><p data-podcast-description>${esc(first.description)}</p><a data-podcast-link class="text-link" href="https://www.youtube.com/watch?v=${first.id}" target="_blank" rel="noopener">Xem trên YouTube ↗</a></div><div class="podcast-queue"><p class="eyebrow">${episodes.length} TẬP CHỌN LỌC</p>${episodes.map((e,i)=>`<button type="button" data-podcast-episode="${esc(JSON.stringify(e))}" aria-pressed="${i===0}"><img src="https://i.ytimg.com/vi/${e.id}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360"><span><small>${String(i+1).padStart(2,'0')}</small><strong>${esc(e.title)}</strong></span></button>`).join('')}</div></section>`+cta);
const documents=pdfs.map(([slug,category])=>{
 const pdf='tai-lieu/'+slug+'.pdf';
 let title,description;
 if(slug==='gioi-thieu-mo-hinh-7m'){title='Giới thiệu Mô hình Phòng kinh doanh tiêu chuẩn 7M';description='Bản PDF trình bày 7 trụ cột và các chuẩn để rà soát phòng kinh doanh.';}
 else {const d=dom('e-book/'+slug+'.html');title=d.querySelector('h1').textContent;description=d.querySelector('.dan').textContent;}
 const prefix=path.join(__dirname,'assets/library',slug);
 if(!fs.existsSync(prefix+'.jpg'))execFileSync('pdftoppm',['-f','1','-l','1','-scale-to','600','-jpeg','-singlefile',path.join(root,pdf),prefix],{stdio:'pipe'});
 return {slug,title,description,category,pdf,href:slug==='gioi-thieu-mo-hinh-7m'?'/'+pdf:'/e-book/'+slug+'.html',cta:slug==='gioi-thieu-mo-hinh-7m'?'Mở PDF':'Nhận tài liệu'};
});
page('tai-lieu','Tài liệu và công cụ','Tài liệu và công cụ hiện có trên website Coach Duy Nguyễn, được chọn theo công việc xây dựng phòng kinh doanh.',hero('Tài liệu và công cụ','Tài liệu và công cụ hiện có trên website Coach Duy Nguyễn, được chọn theo công việc xây dựng phòng kinh doanh.','tai-lieu')+`<section class="page-section document-shelf"><div class="section-intro"><p class="eyebrow">${documents.length} TÀI LIỆU THỰC HÀNH</p><h2>Bắt đầu với những phần đang cần.</h2></div><div class="library-documents">${documents.map(p=>`<article><a class="pdf-cover" href="${p.href}" target="_blank" rel="noopener"><img src="/sevenm/assets/library/${p.slug}.jpg" alt="Bìa ${esc(p.title)}" width="424" height="600" loading="lazy"></a><div><p class="eyebrow">${esc(p.category)}</p><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><a class="text-link" href="${p.href}" target="_blank" rel="noopener">${p.cta} ↗</a></div></article>`).join('')}</div></section>`+existingTools+cta);
fs.writeFileSync(path.join(__dirname,'library-manifest.json'),JSON.stringify({source:'coachduynguyen.vn',posts,episodes,documents},null,2)+'\n');
console.log(`${posts.length} bài viết đầy đủ, ${episodes.length} tập podcast, ${documents.length} PDF thật.`);
