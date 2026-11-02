// Cổng thành viên: đăng nhập bằng email và mật khẩu, quên mật khẩu thì nhận mã sáu số (D97.3).
// Tài khoản và cấp nằm ở Supabase dự án NGF, bảng public.thanh_vien (supabase/thanh_vien.sql trong kho).
// Thêm ?mau=1 vào địa chỉ thì hiện thanh "Bản mẫu, xem như" để xem thử từng cấp, không cần đăng nhập.
// Coach Duy chốt 29/10/2026: chỉ giữ bản sáng
document.documentElement.dataset.theme='light';
var q=new URLSearchParams(location.search), MAU=q.has('mau');
var sb=supabase.createClient('https://ktcnroitotwzlmvjieuc.supabase.co','sb_publishable_AWBnJ1YMo2Ifr4DNH1cukw_10rMzEle');
// Coach Duy duyệt lần gửi đầu tiên thì đổi thành true (tram-pancake nhận utm_medium cong-thanh-vien)
var GUI_PANCAKE=false;

function datCap(c){
  document.body.classList.remove('cap-khach','cap-tv','cap-mc','cap-gm','cap-dn');document.body.classList.add('cap-'+c);if(c==='gm')document.body.classList.add('cap-mc');
  document.querySelectorAll('.xem-nhu button').forEach(function(b){b.classList.toggle('on',b.dataset.cap===c)});
  document.getElementById('b-email').hidden=false;document.getElementById('b-ma').hidden=true;if(window.moVao)moVao(false);
}
var form=document.querySelector('.the-vao'), nutGui=function(){return form.querySelector('div:not([hidden]) > button[type=submit]')};
var loi=document.createElement('p');loi.className='loi-vao';loi.setAttribute('role','alert');loi.hidden=true;form.querySelector('[data-phu-vao]').before(loi);
function baoLoi(t){loi.textContent=t||'';loi.hidden=!t}
function giaTri(id){return (document.getElementById(id).value||'').trim()}
var LOI={'Invalid login credentials':'Email hoặc mật khẩu chưa đúng.','User already registered':'Email này đã đăng ký. Bạn bấm Đăng nhập, quên mật khẩu thì bấm Quên mật khẩu.',
  'Token has expired or is invalid':'Mã chưa đúng hoặc đã quá 10 phút. Bạn bấm Quay lại đăng nhập rồi bấm Quên mật khẩu để nhận mã mới.'};
function dichLoi(e){var m=(e&&e.message)||'';if(/rate limit|security purposes/i.test(m))return 'Bạn thử lại sau một phút nhé.';if(/at least|weak/i.test(m))return 'Mật khẩu cần ít nhất 8 ký tự.';return LOI[m]||'Chưa vào được, bạn thử lại sau ít phút. Vẫn lỗi thì gọi hotline 0348 264 003.'}

// Hỏi cấp trong bảng thành viên rồi mở cổng đúng cấp
async function vaoTheoPhien(phien){
  if(!phien){if(!document.body.classList.contains('cap-khach'))datCap('khach');return}
  var r=await sb.from('thanh_vien').select('cap,ho_ten').eq('id',phien.user.id).maybeSingle();
  datCap(r.data&&r.data.cap==='master_club'?'mc':'tv');
  if(!MAU)noiTuongTac(phien.user.id,r.data&&r.data.ho_ten);
}

// Nút thích, bình luận và ảnh đại diện lưu ở Supabase (bản chốt 87, B3 và B4; bảng ở supabase/tuong_tac.sql).
// Bản mẫu ?mau=1 giữ cách bấm tại chỗ của trang.js.
var KHO_ANH='https://ktcnroitotwzlmvjieuc.supabase.co/storage/v1/object/public/anh-dai-dien/', daNoi=false;
function tao(the,lop,chu){var e=document.createElement(the);if(lop)e.className=lop;if(chu!=null)e.textContent=chu;return e}
function anhCua(id,ten){
  var i=tao('img');i.alt='';i.src=KHO_ANH+id+'/anh';
  i.onerror=function(){var c=tao('span','xh-chu',(ten||'?').split(' ').slice(-2).map(function(t){return t[0]}).join('').toUpperCase());i.replaceWith(c)};
  return i;
}
async function noiTuongTac(toi,ten){
  if(daNoi)return;daNoi=true;
  // Ảnh và tên của người đang xem
  var thu=new Image();thu.onload=function(){document.querySelectorAll('.anh-toi').forEach(function(a){a.src=thu.src})};thu.src=KHO_ANH+toi+'/anh?t='+Date.now();
  var h1=document.querySelector('#ho-so .tvh-than h1');if(h1&&ten)h1.textContent=ten;
  var o=document.getElementById('doi-anh');
  if(o)o.onchange=async function(){
    var f=o.files[0];o.value='';if(!f)return;
    if(f.size>2097152)return alert('Ảnh cần nhỏ hơn 2 MB.');
    var r=await sb.storage.from('anh-dai-dien').upload(toi+'/anh',f,{upsert:true,contentType:f.type,cacheControl:'60'});
    if(r.error)return alert('Chưa đổi được ảnh, bạn thử lại sau ít phút.');
    var u=KHO_ANH+toi+'/anh?t='+Date.now();document.querySelectorAll('.anh-toi').forEach(function(a){a.src=u});
  };

  // Nút thích: mỗi nút một khoá. ponytail: khoá theo thứ tự nút trong khung có id, thêm bài vào giữa thì lượt thích trôi; bài thật thì ghi data-tim="khoá" riêng.
  var nut=[].slice.call(document.querySelectorAll('[data-tim]')),dem={};
  nut.forEach(function(b){var k=b.dataset.tim;if(!k){var id=(b.closest('[id]')||{}).id||'trang';dem[id]=(dem[id]||0)+1;k=id+':'+dem[id]}b.dataset.muc=k});
  function ve(b,so,on){b.classList.toggle('on',on);b.firstChild.textContent=on?'♥ ':'♡ ';b.querySelector('span').textContent=so}
  var r=await sb.from('luot_thich').select('muc,nguoi').in('muc',nut.map(function(b){return b.dataset.muc}));
  var dong=r.data||[];
  nut.forEach(function(b){
    var cua=dong.filter(function(d){return d.muc===b.dataset.muc});
    ve(b,cua.length,cua.some(function(d){return d.nguoi===toi}));
    b.onclick=async function(){
      var on=!b.classList.contains('on'),so=+b.querySelector('span').textContent;b.disabled=true;
      var x=on?await sb.from('luot_thich').insert({muc:b.dataset.muc}):await sb.from('luot_thich').delete().eq('muc',b.dataset.muc).eq('nguoi',toi);
      if(!x.error)ve(b,so+(on?1:-1),on);b.disabled=false;
    };
  });

  // Bình luận: khung có data-bl. Bỏ bình luận mẫu, hiện bình luận thật, mới nhất lên đầu.
  document.querySelectorAll('[data-bl]').forEach(async function(k){
    var muc=k.dataset.bl,o=k.querySelector('input'),gui=k.querySelector('.bt-viet button'),ds=tao('div');
    k.querySelectorAll('.hc-cau').forEach(function(c){c.remove()});k.appendChild(ds);
    var dem=k.closest('article')&&k.closest('article').querySelector('.bv-hanh > span');
    function mot(b){
      var c=tao('div','hc-cau'),h=tao('div','bt-viet'),p=tao('p');h.style.margin='0';
      p.append(tao('b',null,b.ten),' ',tao('small',null,'· '+new Date(b.tao_luc).toLocaleString('vi-VN',{dateStyle:'short',timeStyle:'short'})),tao('br'),b.noi_dung);
      if(b.nguoi===toi){var x=tao('button','tr-nut tr-nut--nho','Xoá');x.type='button';x.style.marginLeft='auto';
        x.onclick=async function(){if(confirm('Xoá bình luận này?')&&!(await sb.from('binh_luan').delete().eq('id',b.id)).error){c.remove();dat(-1)}};}
      h.append(anhCua(b.nguoi,b.ten),p);if(x)h.append(x);c.append(h);return c;
    }
    var so=0;function dat(d){so+=d;if(dem)dem.textContent=so+' bình luận'}
    var r=await sb.from('binh_luan').select('id,nguoi,ten,noi_dung,tao_luc').eq('muc',muc).order('tao_luc',{ascending:false}).limit(100);
    (r.data||[]).forEach(function(b){ds.append(mot(b))});dat((r.data||[]).length);
    async function guiBl(){
      var t=o.value.trim();if(!t)return;gui.disabled=true;
      var x=await sb.from('binh_luan').insert({muc:muc,noi_dung:t.slice(0,2000)}).select('id,nguoi,ten,noi_dung,tao_luc').single();
      gui.disabled=false;if(x.error)return alert('Chưa gửi được bình luận, bạn thử lại sau ít phút.');
      o.value='';ds.prepend(mot(x.data));dat(1);
    }
    gui.onclick=guiBl;o.onkeydown=function(e){if(e.key==='Enter')guiBl()};
  });
}

async function vaoCong(e){
  e.preventDefault();baoLoi('');
  var nut=nutGui();nut.disabled=true;
  try{
    var r;
    if(!document.getElementById('b-dang-ky').hidden){
      var tt={ho_ten:giaTri('dk-ten'),zalo:giaTri('dk-zalo').replace(/[^\d+]/g,''),vai_tro:giaTri('dk-vt'),linh_vuc:giaTri('dk-lv'),giai_doan:giaTri('dk-gd'),thoi_gian_kd:giaTri('dk-tg'),quy_mo:giaTri('dk-qm')};
      var email=giaTri('dk-email').toLowerCase();
      if(!tt.ho_ten||!email)return baoLoi('Bạn điền họ tên và email nhé.');
      if(!/^(0\d{9}|\+?84\d{9})$/.test(tt.zalo))return baoLoi('Số Zalo cần đủ 10 số, ví dụ 0912345678.');
      if(giaTri('dk-mk').length<8)return baoLoi('Mật khẩu cần ít nhất 8 ký tự.');
      r=await sb.auth.signUp({email:email,password:document.getElementById('dk-mk').value,options:{data:tt}});
      if(!r.error&&r.data.user&&!(r.data.user.identities||[]).length)r.error={message:'User already registered'};
      if(!r.error&&GUI_PANCAKE)guiPancake(tt,email);
    }else if(!document.getElementById('b-ma').hidden){
      var ma=Array.prototype.map.call(document.querySelectorAll('.o-ma input'),function(i){return i.value}).join('');
      if(!/^\d{6}$/.test(ma))return baoLoi('Bạn nhập đủ sáu số trong thư nhé.');
      if(giaTri('mk-moi').length<8)return baoLoi('Mật khẩu mới cần ít nhất 8 ký tự.');
      r=await sb.auth.verifyOtp({email:giaTri('email-vao').toLowerCase(),token:ma,type:'recovery'});
      if(!r.error)r=await sb.auth.updateUser({password:document.getElementById('mk-moi').value});
    }else{
      r=await sb.auth.signInWithPassword({email:giaTri('email-vao').toLowerCase(),password:document.getElementById('mk-vao').value});
    }
    if(r.error)return baoLoi(dichLoi(r.error));
    await vaoTheoPhien((await sb.auth.getSession()).data.session);
  }catch(x){baoLoi(dichLoi(x))}finally{nut.disabled=false}
  return false;
}

async function quenMk(){
  var email=giaTri('email-vao').toLowerCase();baoLoi('');
  if(!/^\S+@\S+\.\S+$/.test(email)){baoLoi('Bạn điền email vào ô phía trên trước, rồi bấm Quên mật khẩu.');document.getElementById('email-vao').focus();return false}
  var r=await sb.auth.resetPasswordForEmail(email);
  if(r.error){baoLoi(dichLoi(r.error));return false}
  var dk=document.getElementById('b-dang-ky');if(dk)dk.hidden=true;document.getElementById('b-email').hidden=true;document.getElementById('b-ma').hidden=false;document.querySelector('.o-ma input').focus();return false
}

// Ô mã: gõ xong một số thì nhảy ô sau, dán cả sáu số thì chia đều
var oMa=document.querySelectorAll('.o-ma input');
oMa.forEach(function(o,i){
  o.oninput=function(){var s=o.value.replace(/\D/g,'');if(s.length>1){s.split('').slice(0,6-i).forEach(function(c,j){oMa[i+j].value=c});(oMa[Math.min(i+s.length,5)]).focus();return}o.value=s;if(s&&i<5)oMa[i+1].focus()};
  o.onkeydown=function(e){if(e.key==='Backspace'&&!o.value&&i)oMa[i-1].focus()};
});

// Báo cho Pancake: nguồn "Cổng thành viên" (phiếu 84, D3). Lỗi thì bỏ qua, tài khoản vẫn tạo xong.
function guiPancake(tt,email){
  var pk={Name:tt.ho_ten,Phone:tt.zalo,url_page:location.href.slice(0,500),utm_medium:'cong-thanh-vien',
    Note:'Đăng ký cổng thành viên · Email: '+email+' · Vai trò: '+tt.vai_tro+' · Lĩnh vực: '+tt.linh_vuc+' · Giai đoạn: '+tt.giai_doan+' · Đã kinh doanh: '+tt.thoi_gian_kd+' · Quy mô: '+tt.quy_mo};
  fetch('https://coachduynguyen.vn/api/dang-ky',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:pk})}).catch(function(){});
}

// Nút đăng xuất cuối nhóm Cá nhân
var nhomCaNhan=document.querySelector('.portal-nav[aria-label="Cá nhân"]');
if(nhomCaNhan){var x=document.createElement('a');x.href='#';x.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/></svg><span>Đăng xuất</span>';
  x.onclick=async function(e){e.preventDefault();await sb.auth.signOut();datCap('khach')};nhomCaNhan.appendChild(x)}

if(MAU){document.querySelectorAll('.xem-nhu button').forEach(function(b){b.onclick=function(){datCap(b.dataset.cap)}});datCap(q.get('cap')||'tv')}
else{
  document.querySelectorAll('.xem-nhu,.xem-nhu-ben').forEach(function(n){n.style.display='none'});
  datCap('khach');sb.auth.getSession().then(function(r){vaoTheoPhien(r.data.session)});
}
