// Bản mẫu các trang chi tiết: lọc thẻ, chép câu lệnh, phát podcast, màn đăng bài, bước đăng ký
var $$=function(s,g){return Array.prototype.slice.call((g||document).querySelectorAll(s))};

// Lọc theo nhóm cho Công cụ và Podcast
$$('[data-chips]').forEach(function(hang){
  var luoi=document.querySelector('[data-luoi="'+hang.dataset.chips+'"]');
  $$('.tr-chip',hang).forEach(function(c){c.onclick=function(){
    $$('.tr-chip',hang).forEach(function(x){x.classList.toggle('on',x===c)});
    $$('[data-nhom]',luoi).forEach(function(t){t.hidden=!!c.dataset.loc&&t.dataset.nhom!==c.dataset.loc});
    if(luoi._trang)luoi._trang(1);
  }});
});

// Chia trang: mỗi trang 8 mục, lọc nhóm xong thì về trang 1
$$('[data-trang]').forEach(function(luoi){
  var moi=+luoi.dataset.trang,nav=document.createElement('nav');
  nav.className='tr-trang';nav.setAttribute('aria-label','Chuyển trang');
  luoi.after(nav);
  luoi._trang=function(so,cuon){
    var con=[].slice.call(luoi.children).filter(function(t){return !t.hidden}),
        tong=Math.ceil(con.length/moi);
    so=Math.max(1,Math.min(so,tong||1));
    [].forEach.call(luoi.children,function(t){t.classList.add('ngoai-trang')});
    con.slice((so-1)*moi,so*moi).forEach(function(t){t.classList.remove('ngoai-trang')});
    nav.hidden=tong<2;nav.innerHTML='';
    function nut(chu,toi,on){var b=document.createElement('button');b.type='button';b.textContent=chu;
      if(on)b.className='on';if(toi<1||toi>tong)b.disabled=true;
      b.onclick=function(){luoi._trang(toi,true)};nav.appendChild(b)}
    nut('‹ Trước',so-1);
    for(var i=1;i<=tong;i++)nut(i,i,i===so);
    nut('Sau ›',so+1);
    if(cuon&&luoi.getBoundingClientRect().top<0)luoi.scrollIntoView({block:'start'});
  };
  luoi._trang(1);
});

// Chép câu lệnh
$$('[data-chep]').forEach(function(b){b.onclick=function(){
  var o=b.closest('.cc-lenh'),chu=o.querySelector('[data-chu]');
  var t=chu?chu.textContent:o.querySelector('h3').textContent;
  (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).catch(function(){});
  var cu=b.textContent;b.textContent='Đã chép';setTimeout(function(){b.textContent=cu},1500);
}});

// Thả tim
$$('[data-tim]').forEach(function(b){b.onclick=function(){
  var s=b.querySelector('span'),on=b.classList.toggle('on');s.textContent=+s.textContent+(on?1:-1);
  b.firstChild.textContent=on?'♥ ':'♡ ';
}});

// Xem thêm bài viết
$$('[data-xem-them]').forEach(function(b){b.onclick=function(){$$('[data-them]').forEach(function(t){t.hidden=false});b.remove()}});

// Podcast: khung phát lớn, bấm thẻ thì đưa lên khung, mục con lọc loại bản ghi
var phat=document.querySelector('[data-phat]');
if(phat){
  var mo=document.body.matches.bind(document.body);
  var nap=function(t){
    var yt=t.dataset.yt||'',anh=yt?'https://img.youtube.com/vi/'+yt+'/hqdefault.jpg':t.dataset.rieng;
    phat.dataset.yt=yt;phat.dataset.rieng=yt?'':anh;
    phat.innerHTML='<img src="'+anh+'" alt=""><div class="pc-phat__nut"><i></i></div>';
    document.querySelector('[data-dang-so]').textContent=t.dataset.so;
    document.querySelector('[data-dang-ten]').textContent=t.dataset.ten;
    document.querySelector('[data-dang-mo]').textContent=t.dataset.mo;
    var l=document.querySelector('[data-yt-link]');l.hidden=!yt;if(yt)l.href='https://www.youtube.com/watch?v='+yt;
    $$('[data-phat-muc]').forEach(function(x){x.classList.toggle('dang',x===t)});
  };
  phat.onclick=function(){
    if(phat.querySelector('iframe,.pc-phat__mau'))return;
    if(phat.dataset.yt){phat.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+phat.dataset.yt+'?autoplay=1&rel=0" title="Podcast" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';return}
    phat.querySelector('.pc-phat__nut').outerHTML='<div class="pc-phat__mau">Bản mẫu: bản ghi thật lưu ở kho video riêng, chỉ người trong cổng xem được.</div>';
  };
  var chon=function(t){
    if(t.classList.contains('tr-bi-khoa')&&!mo('.cap-mc,.cap-dn'))return;
    nap(t);phat.click();phat.scrollIntoView({behavior:'smooth',block:'start'});
  };
  $$('[data-phat-muc]').forEach(function(t){
    t.addEventListener('click',function(e){if(!e.target.closest('a'))chon(t)});
    t.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target===t)chon(t)});
  });
  var dau=document.querySelector('[data-phat-muc]');if(dau)dau.classList.add('dang');
  document.querySelector('[data-tiep]').onclick=function(){
    var cu=document.querySelector('[data-phat-muc].dang'),ds=$$('[data-phat-muc]',cu.parentNode).filter(function(x){return !x.hidden&&!(x.classList.contains('tr-bi-khoa')&&!mo('.cap-mc,.cap-dn'))});
    chon(ds[(ds.indexOf(cu)+1)%ds.length]||cu);
  };
  var tab=function(id){
    if(!document.querySelector('[data-pc-khu]#'+id))return;
    $$('[data-pc-tab]').forEach(function(b){b.classList.toggle('on',b.dataset.pcTab===id);b.setAttribute('aria-selected',b.dataset.pcTab===id)});
    $$('[data-pc-khu]').forEach(function(k){k.hidden=k.id!==id});
  };
  $$('[data-pc-tab]').forEach(function(b){b.onclick=function(){tab(b.dataset.pcTab)}});
  var theoHash=function(){var h=location.hash.slice(1);if(h)tab(h)};
  theoHash();addEventListener('hashchange',theoHash);
}

// Màn đăng bài của đội ngũ
var f=document.querySelector('[data-dang]');
if(f){
  var web=f.querySelector('[data-noi-web]'),hop=web.querySelector('input'),ghi=f.querySelector('[data-ghi-web]');
  var dem=function(){var n=$$('.dn-noi input:checked',f).length;f.querySelector('[data-dem-noi]').textContent=n===2?'2 nơi':n===1?(hop.checked?'website':'cổng'):'0 nơi'};
  var loai=function(){
    var v=f.querySelector('[name=loai]:checked').value,chiCong=v==='cc'||v==='pc';
    hop.disabled=chiCong;if(chiCong)hop.checked=false;else if(web.classList.contains('tat'))hop.checked=true;
    web.classList.toggle('tat',chiCong);ghi.hidden=!chiCong;
    $$('[data-tep]',f).forEach(function(x){x.hidden=v!=='cc'});dem();
  };
  $$('[name=loai]',f).forEach(function(r){r.onchange=loai});$$('.dn-noi input',f).forEach(function(r){r.onchange=dem});
  var xem=function(){document.querySelector('[data-xem-ra-tieu]').textContent=f.querySelector('[data-xem-tieu]').value;document.querySelector('[data-xem-ra-mo]').textContent=f.querySelector('[data-xem-mo]').value};
  f.querySelector('[data-xem-tieu]').oninput=xem;f.querySelector('[data-xem-mo]').oninput=xem;xem();loai();
}

// Bước đăng ký ở màn vào cổng. Đến từ trang công cụ thì hiện món quà sẽ nhận.
function moVao(dk){
  var b=document.getElementById('b-dang-ky');if(!b)return;
  b.hidden=!dk;document.getElementById('b-email').hidden=dk;document.getElementById('b-ma').hidden=true;
  document.querySelector('[data-phu-vao]').hidden=dk;document.querySelector('[data-phu-dk]').hidden=!dk;
  document.querySelector('[data-qua]').classList.toggle('hien',/cong-cu/.test(location.hash));
}
document.querySelector('[data-mo-dk]').onclick=function(e){e.preventDefault();moVao(true)};
document.querySelector('[data-mo-vao]').onclick=function(e){e.preventDefault();moVao(false)};
if(new URLSearchParams(location.search).get('dk'))moVao(true);
document.querySelectorAll('[data-mo-hop]').forEach(b => b.onclick = () => document.getElementById(b.dataset.moHop).showModal());
document.querySelectorAll('dialog.xh-hop').forEach(d => d.onclick = e => { if (e.target === d || e.target.closest('[data-dong-hop]')) d.close(); });
document.querySelectorAll('[data-mo-ds]').forEach(b => b.onclick = () => { const ol = b.previousElementSibling, mo = ol.classList.toggle('mo'); b.textContent = mo ? 'Thu gọn' : `Xem đủ ${ol.querySelectorAll('li:not(.xh-ngat)').length} người`; });

// Diễn đàn: lọc theo phòng, tìm, sắp xếp. Chủ đề ghim luôn đứng đầu
(function(){
  var ds=document.querySelector('[data-dd-ds]');if(!ds)return;
  var phong='',xep='moi',tim=$$('[data-dd-tim]')[0],trong=$$('[data-dd-trong]')[0];
  function loc(){
    var q=(tim.value||'').trim().toLowerCase(),con=0;
    $$('li',ds).sort(function(a,b){
      var g=b.classList.contains('dd-ghim')-a.classList.contains('dd-ghim');
      return g||(xep==='tl'?b.dataset.tl-a.dataset.tl:b.dataset.moi-a.dataset.moi);
    }).forEach(function(li){
      li.hidden=(phong&&li.dataset.nhom!==phong)||(xep==='chua'&&li.dataset.tl!=='0')||(q&&li.textContent.toLowerCase().indexOf(q)<0);
      if(!li.hidden)con++;ds.appendChild(li);
    });
    trong.hidden=con>0;
  }
  $$('[data-dd-phong] .tr-chip').forEach(function(c,_,tat){c.onclick=function(){
    tat.forEach(function(x){x.classList.toggle('on',x===c)});phong=c.dataset.loc;loc();
  }});
  $$('[data-dd-xep]').forEach(function(b,_,tat){b.onclick=function(){
    tat.forEach(function(x){x.classList.toggle('on',x===b)});xep=b.dataset.ddXep;loc();
  }});
  tim.oninput=loc;
})();

// Tìm thành viên theo tên, ngành, thành phố, việc có thể giúp (gõ có dấu hay không dấu đều được)
(function(){
  var o=document.querySelector('[data-tv-tim]');if(!o)return;
  var bo=function(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d')};
  o.oninput=function(){
    var q=bo(o.value.trim()),con=0;
    $$('[data-tv]').forEach(function(t){var hien=!q||bo(t.dataset.tv).indexOf(q)>-1;t.hidden=!hien;con+=hien});
    document.querySelector('.tv-khong').hidden=con>0;
  };
})();
// Nút Xác nhận thế mạnh trên hồ sơ thành viên: bấm để cộng hoặc bỏ một lượt (29/10)
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-xn]'); if (!b) return;
  var on = b.getAttribute('aria-pressed') !== 'true', n = b.parentNode.querySelector('small b');
  b.setAttribute('aria-pressed', on); b.textContent = on ? 'Đã xác nhận' : 'Xác nhận'; n.textContent = +n.textContent + (on ? 1 : -1);
});

// Trang doanh nghiệp: điền sẵn lời nhắn, xem trước ảnh tải lên (chỉ trên máy, chưa lưu)
document.querySelectorAll('[data-dn]').forEach(b => b.addEventListener('click', () => {
  const sp = b.dataset.sp;
  document.querySelector('[data-dn-ten]').textContent = 'Liên hệ ' + b.dataset.dn;
  document.querySelector('[data-dn-loi]').value = sp ? `Chào ${b.dataset.dn}, tôi muốn hỏi thêm về ${sp}.` : '';
  document.querySelector('[data-dn-xong]').hidden = true;
}));
const dnForm = document.querySelector('[data-dn-form]');
if (dnForm) dnForm.addEventListener('submit', e => { e.preventDefault(); dnForm.querySelector('[data-dn-xong]').hidden = false; });
document.querySelectorAll('[data-anh]').forEach(i => i.onchange = () => {
  if (!i.files[0]) return;
  const nhan = i.closest('label'); let img = nhan.querySelector('img');
  if (!img) { nhan.querySelectorAll('.dnv-chu,small').forEach(x => x.remove()); img = document.createElement('img'); img.alt = ''; nhan.prepend(img); }
  img.src = URL.createObjectURL(i.files[0]);
});
document.querySelectorAll('[data-them-anh]').forEach(i => i.onchange = () => {
  const o = i.closest('label');
  [...i.files].forEach(f => { const img = document.createElement('img'); img.alt = ''; img.src = URL.createObjectURL(f); o.before(img); });
  i.value = '';
});

// Bài dài trên Bảng tin hiện ba dòng đầu và nút Xem thêm (Coach Duy chốt 29/10, C1). Chờ load vì welcome.js dựng bài sau.
addEventListener('load', () => {
  const bai = new Map();
  document.querySelectorAll('.feed-post__text, .bt-bai').forEach(p => bai.set(p.parentElement, [...(bai.get(p.parentElement) || []), p]));
  bai.forEach(([dau, ...sau]) => {
    dau.classList.add('gon-3'); sau.forEach(p => p.hidden = true);
    if (!sau.length && dau.scrollHeight <= dau.clientHeight + 2) return dau.classList.remove('gon-3');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'nut-xem-them'; b.textContent = 'Xem thêm';
    b.onclick = () => { dau.classList.remove('gon-3'); sau.forEach(p => p.hidden = false); b.remove(); };
    (sau.at(-1) || dau).after(b);
  });
});
document.querySelectorAll('[data-xem-them]').forEach(b => b.onclick = () => { b.previousElementSibling.hidden = false; b.remove(); });
// Trang Hướng dẫn: bấm Đã xong thì tự mở bước kế tiếp chưa xong; vào trang thì mở bước đầu tiên chưa xong
(() => {
  const o = [...document.querySelectorAll('#checklist input[name=hd-chon]')];
  const xong = r => document.querySelector(`#checklist [data-step-check=${r.dataset.k}]`)?.checked;
  const moTiep = () => { const r = o.find(x => !xong(x)); if (r) r.checked = true; };
  addEventListener('load', moTiep);
  document.addEventListener('change', e => { if (e.target.matches('#checklist [data-step-check]') && e.target.checked) moTiep(); });
})();

// Thanh dưới khổ điện thoại: Thêm mở ngăn menu. Dải Sắp tới chép thẻ từ cột phải sau khi welcome.js dựng xong
var bbThem=document.querySelector('[data-bb-them]');
if(bbThem)bbThem.onclick=function(){document.querySelector('[data-sidebar-toggle]').click()};
document.addEventListener('DOMContentLoaded',function(){
  var dai=document.querySelector('[data-sap-toi]'),goc=document.querySelector('.portal-rail .promo-list');
  if(!dai||!goc)return;
  var chep=function(){dai.innerHTML=goc.innerHTML};
  chep();new MutationObserver(chep).observe(goc,{childList:true,subtree:true});
});

// Vuốt từ mép trái để quay lại màn trước. Chỉ lùi trong các màn đã mở ở lượt này, không lùi ra khỏi cổng.
// Trình duyệt tự nhận cú vuốt của nó thì gửi touchcancel, nên không lùi hai lần.
(function(){
  var da=[location.hash],x0=null,y0=0;
  addEventListener('hashchange',function(){if(location.hash===da[da.length-2])da.pop();else da.push(location.hash)});
  addEventListener('touchstart',function(e){var t=e.touches[0];x0=e.touches.length===1&&t.clientX<=30&&document.querySelector('[data-sidebar-toggle]')?.getAttribute('aria-expanded')!=='true'?t.clientX:null;y0=t.clientY},{passive:true});
  addEventListener('touchcancel',function(){x0=null});
  // Ngăn kéo đang mở: vuốt sang trái thì đóng.
  var nx=null,ny=0,nut=document.querySelector('[data-sidebar-toggle]');
  addEventListener('touchstart',function(e){var t=e.touches[0];nx=e.touches.length===1&&nut&&nut.getAttribute('aria-expanded')==='true'?t.clientX:null;ny=t.clientY},{passive:true});
  addEventListener('touchend',function(e){if(nx===null)return;var t=e.changedTouches[0];if(nx-t.clientX>=60&&Math.abs(t.clientY-ny)<60)nut.click();nx=null});
  addEventListener('touchend',function(e){if(x0===null)return;var t=e.changedTouches[0];if(t.clientX-x0>=70&&Math.abs(t.clientY-y0)<50&&da.length>1)history.back();x0=null});
})();

// Học tập: bấm thẻ video thì phát ngay trong thẻ
$$('[data-yt-o]').forEach(function(a){a.onclick=function(e){e.preventDefault();var k=a.querySelector('.tr-card__anh');if(!k.querySelector('iframe'))k.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+a.dataset.ytO+'?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'}});
