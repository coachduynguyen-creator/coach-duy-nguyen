(function(){
  var d=document, noanim=d.documentElement.classList.contains('noanim');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* menu trên máy nhỏ */
  var mo=d.getElementById('mo-menu'), menu=d.getElementById('menu-nho');
  if(mo&&menu){
    mo.addEventListener('click',function(){
      var open=menu.classList.toggle('mo');
      mo.setAttribute('aria-expanded',open?'true':'false');
    });
    menu.addEventListener('click',function(ev){ if(ev.target.tagName==='A'){ menu.classList.remove('mo'); mo.setAttribute('aria-expanded','false'); } });
  }

  /* hero hiện theo nhịp */
  var hero=d.getElementById('hero');
  if(hero){
    if(noanim){ hero.classList.add('len'); }
    else setTimeout(function(){
      [].slice.call(hero.querySelectorAll('.hero-giua > *')).forEach(function(e,i){ e.style.transitionDelay=(reduce?0:i*80)+'ms'; });
      hero.classList.add('len');
    },40);
  }

  /* hiện khi cuộn tới */
  var hien=[].slice.call(d.querySelectorAll('.hien'));
  if(noanim||!('IntersectionObserver' in window)){ hien.forEach(function(e){e.classList.add('in')}); }
  else{
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting) return;
        var el=en.target;
        if(el.classList.contains('tre')){ [].slice.call(el.children).forEach(function(c,i){ c.style.transitionDelay=(reduce?0:i*55)+'ms'; }); }
        el.classList.add('in'); io.unobserve(el);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    hien.forEach(function(e){io.observe(e)});
  }

  /* vạch tiến độ đọc */
  var tien=d.getElementById('tien');
  if(tien){
    var onScroll=function(){
      var h=d.documentElement.scrollHeight-innerHeight;
      tien.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';
    };
    addEventListener('scroll',onScroll,{passive:true});
    addEventListener('resize',onScroll);
    onScroll();
  }

  /* biểu mẫu đăng ký bản tin.
     Đổi NOI_NHAN.loai sang 'form' và điền địa chỉ khi có nơi nhận thật
     (Formspree, Google Apps Script, hoặc dịch vụ gửi thư). */
  var NOI_NHAN = { loai:'thu', thu:'nextstepacademyvietnam@gmail.com', form:'' };
  [].slice.call(d.querySelectorAll('.bt-form')).forEach(function(f){
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      var o=f.querySelector('input[type=email]'), v=(o.value||'').trim();
      var hop=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      f.classList.toggle('co-loi',!hop);
      if(!hop){ o.focus(); return; }
      if(NOI_NHAN.loai==='form' && NOI_NHAN.form){
        fetch(NOI_NHAN.form,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:v,nguon:location.pathname})})
          .then(function(){ f.classList.add('xong'); })
          .catch(function(){ f.classList.add('co-loi'); });
      } else {
        location.href='mailto:'+NOI_NHAN.thu
          +'?subject='+encodeURIComponent('Đăng ký Thư Next Gen Founder')
          +'&body='+encodeURIComponent('Tôi muốn nhận Thư Next Gen Founder.\n\nThư điện tử: '+v+'\n');
        f.classList.add('xong');
      }
    });
    f.addEventListener('input',function(){ f.classList.remove('co-loi'); });
  });

  /* lọc bài viết theo chủ đề trên trang blog */
  var chips = [].slice.call(d.querySelectorAll('.chu-de button'));
  if(chips.length){
    var the = [].slice.call(d.querySelectorAll('.the-bai[data-cd]'));
    chips.forEach(function(b){
      b.addEventListener('click', function(){
        var cd = b.getAttribute('data-cd');
        chips.forEach(function(x){ x.classList.toggle('on', x === b); });
        the.forEach(function(t){
          var hop = (cd === 'Tất cả') || (t.getAttribute('data-cd') === cd);
          t.style.display = hop ? '' : 'none';
        });
      });
    });
  }

  /* bản vẽ quỹ đạo niềm tin, chỉ chạy khi trang có */
  var vongs=[].slice.call(d.querySelectorAll('.vong'));
  if(vongs.length){
    var VONG={
      '1':{nhan:'Vòng 1 · Lan toả',tit:'Người ta gặp bạn lần đầu',
        mo:'Đưa cách nghĩ của mình tới một nhóm rộng, chưa cần ai để lại thông tin và chưa mời ai làm gì.',
        lam:'Nội dung dễ chia sẻ, nhận lời mời nói chuyện, hợp tác với người cùng tệp khách.',
        dau:'Đúng nhóm người bắt đầu xuất hiện trong danh sách người xem mới.',
        chua:'Chưa mời mua, chưa xin thông tin, chưa nói về chương trình.'},
      '2':{nhan:'Vòng 2 · Đúng người',tit:'Đúng người nhận ra vấn đề',
        mo:'Giúp người xem gọi đúng tên điều đang kẹt, thay vì chỉ thấy triệu chứng bên ngoài.',
        lam:'Nội dung chẩn đoán, phân tích tình huống thật, buổi phát trực tiếp có hỏi đáp.',
        dau:'Họ quay lại, xem hết nội dung dài, và nhắn đúng vào vấn đề chứ không hỏi giá.',
        chua:'Chưa ép ai để lại số điện thoại chỉ để đọc tiếp.'},
      '3':{nhan:'Vòng 3 · Giữ liên lạc',tit:'Họ đồng ý cho tôi giữ liên lạc',
        mo:'Có sự đồng ý rõ ràng để tiếp tục trao đổi, và một thứ đủ hữu ích để đổi lấy sự đồng ý đó.',
        lam:'Công cụ tự đánh giá, tài liệu dùng được ngay, biểu mẫu đăng ký ngắn.',
        dau:'Thông tin thật, có mở tài liệu ra dùng, và đồng ý nhận liên hệ tiếp.',
        chua:'Chưa gọi bán. Người vừa để lại thông tin không phải người đã sẵn sàng.'},
      '4':{nhan:'Vòng 4 · Nuôi dưỡng',tit:'Niềm tin lớn dần theo thời gian',
        mo:'Tăng hiểu biết và mức sẵn sàng, chấp nhận rằng có người mất vài tháng, có người mất vài năm.',
        lam:'Nội dung dài, hội thảo, sinh hoạt cộng đồng, trả lời câu hỏi thật của họ.',
        dau:'Tham dự đều, hỏi về cách làm và điều kiện, tự đánh giá lại tình hình của mình.',
        chua:'Chưa dùng nỗi sợ hoặc hạn chót giả để đẩy người chưa sẵn sàng.'},
      '5':{nhan:'Vòng 5 · Chọn bước',tit:'Họ chọn bước tiếp theo',
        mo:'Giúp đúng người chọn đúng bước, kể cả khi bước đúng là dừng lại hoặc chờ thêm một quý.',
        lam:'Một buổi chẩn đoán, hồ sơ đề nghị rõ phạm vi, lời mời có điều kiện đi kèm.',
        dau:'Một quyết định rõ ràng: đi tiếp, dời lại, hoặc kết thúc mà vẫn giữ quan hệ.',
        chua:'Chưa nhận người mà tôi biết mình chưa giúp được.'}
    };
    var chips=[].slice.call(d.querySelectorAll('.qd-chip button')), nhanV=[].slice.call(d.querySelectorAll('.nhan-v'));
    var el={nhan:d.getElementById('qd-nhan'),tit:d.getElementById('qd-tit'),mo:d.getElementById('qd-mo'),lam:d.getElementById('qd-lam'),dau:d.getElementById('qd-dau'),chua:d.getElementById('qd-chua')};
    var chon=function(i){
      var v=VONG[i]; if(!v||!el.nhan) return;
      el.nhan.textContent=v.nhan; el.tit.textContent=v.tit; el.mo.textContent=v.mo;
      el.lam.textContent=v.lam; el.dau.textContent=v.dau; el.chua.textContent=v.chua;
      vongs.forEach(function(c){ c.classList.toggle('on',c.getAttribute('data-i')===i); });
      nhanV.forEach(function(t){ t.classList.toggle('on',t.getAttribute('data-i')===i); });
      chips.forEach(function(b){ b.setAttribute('aria-pressed',b.getAttribute('data-i')===i?'true':'false'); });
    };
    vongs.forEach(function(c){
      var i=c.getAttribute('data-i');
      c.addEventListener('click',function(){chon(i)});
      c.addEventListener('mouseenter',function(){chon(i)});
      c.addEventListener('keydown',function(ev){ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); chon(i); } });
    });
    chips.forEach(function(b){ b.addEventListener('click',function(){chon(b.getAttribute('data-i'))}); });
    chon('1');
  }
})();

/* Khối hệ sinh thái: bấm một câu đang kẹt thì hiện chương trình dành cho chỗ đó. */
(function () {
  var nut = document.querySelectorAll('.hst-ket');
  if (!nut.length) return;
  function chon(id) {
    document.querySelectorAll('.hst-bg').forEach(function (b) { b.hidden = b.id !== 'hst-' + id; });
    nut.forEach(function (n) { n.setAttribute('aria-current', String(n.dataset.ct === id)); });
  }
  nut.forEach(function (n) { n.addEventListener('click', function () { chon(n.dataset.ct); }); });
  chon(nut[0].dataset.ct);
})();

/* Vòng tròn năm việc: bấm một miếng hoặc một nút chữ thì hiện phần đó. */
(function () {
  var mieng = document.querySelectorAll('.v5-mieng, .v5-chip');
  if (!mieng.length) return;
  function chon(i) {
    i = String(i);
    document.querySelectorAll('.v5-bang').forEach(function (b) { b.hidden = b.id !== 'v5-' + i; });
    mieng.forEach(function (m) {
      var dung = m.dataset.i === i;
      m.classList.toggle('chon', dung);
      m.setAttribute('aria-selected', String(dung));
    });
  }
  mieng.forEach(function (m) {
    m.addEventListener('click', function () { chon(m.dataset.i); });
    m.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); chon(m.dataset.i); }
    });
  });
  chon(0);
})();

/* Rạp podcast: bấm một tập thì khung rạp phát ngay tại trang. Bấm một dải
   chuyên mục thì lưới tập lọc theo chuyên mục đó, quá 6 tập thì lật trang. */
(function () {
  var man = document.getElementById('pd-man');
  if (!man) return;
  var TRANG = 6;
  var tatca = [].slice.call(document.querySelectorAll('.pd-tap'));
  var loc = { muc: 0, trang: 0, yt: (document.querySelector('.pd-tap.chon') || {dataset:{}}).dataset.yt || '' };

  function phat(yt) {
    man.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt +
      '?autoplay=1&rel=0" title="Video podcast" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }
  function poster(yt) {
    man.innerHTML = '<button class="pd-poster" type="button" aria-label="Phát tập đang chọn">' +
      '<img src="https://i.ytimg.com/vi/' + yt + '/maxresdefault.jpg" alt="" ' +
      'onerror="this.onerror=null;this.src=this.src.replace(\'maxres\',\'hq\')">' +
      '<span class="pd-play" aria-hidden="true"></span></button>';
  }
  // Bắt sự kiện ở khung ngoài chứ không gắn vào từng nút. Gắn vào nút thì ảnh bìa
  // do máy chủ dựng sẵn lúc mới vào trang không có người nghe, bấm vào không chạy.
  man.addEventListener('click', function (ev) {
    if (ev.target.closest('.pd-poster')) { phat(loc.yt); }
  });
  // Mở rộng khung và toàn màn hình. CDN không muốn khung phát bị đóng cứng
  // trong một ô nhỏ giữa trang, nên có hai mức nới ra.
  var rap = document.querySelector('.pd-rap');
  var nutRong = document.getElementById('pd-rong');
  var chuRong = document.getElementById('pd-rong-chu');
  var nutToan = document.getElementById('pd-toan');

  function datRong(bat) {
    rap.classList.toggle('rong', bat);
    nutRong.setAttribute('aria-pressed', bat ? 'true' : 'false');
    chuRong.textContent = bat ? 'Thu khung lại' : 'Mở rộng khung';
  }
  if (nutRong) {
    nutRong.addEventListener('click', function () {
      datRong(!rap.classList.contains('rong'));
    });
  }
  if (nutToan) {
    nutToan.addEventListener('click', function () {
      var dang = document.fullscreenElement || document.webkitFullscreenElement;
      if (dang) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        return;
      }
      // Chưa bấm phát thì phát luôn, vì vào toàn màn hình để nhìn ảnh tĩnh thì vô nghĩa.
      if (!man.querySelector('iframe')) { phat(loc.yt); }
      var xin = man.requestFullscreen || man.webkitRequestFullscreen;
      if (xin) { try { var xong = xin.call(man); if (xong && xong.catch) { xong.catch(function () {}); } }
                 catch (e) {} }
      // Vài nơi chặn toàn màn hình mà không báo lỗi gì, ví dụ trình duyệt nhúng
      // trong ứng dụng. Chặn thì nở khung ra hết bề ngang cho đỡ, để bấm nút
      // xong luôn thấy có gì đó đổi. Trình phát YouTube vẫn còn nút của riêng nó.
      setTimeout(function () {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) { datRong(true); }
      }, 200);
    });
  }
  // Thoát toàn màn hình bằng phím Esc thì trình duyệt tự lo. Phím Esc lúc đang
  // mở rộng khung thì phải tự thu lại, nếu không người dùng kẹt ở chế độ đó.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') { return; }
    if (document.fullscreenElement || document.webkitFullscreenElement) { return; }
    if (rap && rap.classList.contains('rong')) { datRong(false); }
  });

  function chonTap(a, tuPhat) {
    var d = a.dataset;
    loc.yt = d.yt;
    document.getElementById('pd-rap-muc').textContent = d.mucten;
    document.getElementById('pd-rap-tieu').textContent = d.tieu;
    document.getElementById('pd-rap-mo').textContent = d.mo;
    document.getElementById('pd-rap-lydo').textContent = d.lydo;
    var cta = document.getElementById('pd-rap-cta');
    cta.href = d.ctah;
    cta.innerHTML = d.ctan + ' <span class="mt" aria-hidden="true">&rarr;</span>';
    tatca.forEach(function (x) {
      var dung = x === a;
      x.classList.toggle('chon', dung);
      if (dung) { x.setAttribute('aria-current', 'true'); } else { x.removeAttribute('aria-current'); }
    });
    if (tuPhat) { phat(d.yt); } else { poster(d.yt); }
  }

  function ve() {
    var ds = loc.muc ? tatca.filter(function (x) { return +x.dataset.muc === loc.muc; }) : tatca;
    var soTrang = Math.max(1, Math.ceil(ds.length / TRANG));
    if (loc.trang >= soTrang) loc.trang = soTrang - 1;
    var dau = loc.trang * TRANG;
    tatca.forEach(function (x) { x.style.display = 'none'; });
    ds.slice(dau, dau + TRANG).forEach(function (x) { x.style.display = ''; });
    var ten = document.getElementById('pd-loc-ten');
    ten.textContent = (loc.muc ? ds[0].dataset.mucten : 'Tất cả các tập') + ' · ' + ds.length + ' tập';
    document.getElementById('pd-loc-xoa').hidden = !loc.muc;
    var nhieu = soTrang > 1;
    document.getElementById('pd-truoc').hidden = !nhieu;
    document.getElementById('pd-sau').hidden = !nhieu;
    var tr = document.getElementById('pd-trang');
    tr.hidden = !nhieu;
    tr.textContent = (loc.trang + 1) + ' / ' + soTrang;
    document.getElementById('pd-truoc').disabled = loc.trang === 0;
    document.getElementById('pd-sau').disabled = loc.trang >= soTrang - 1;
    return ds;
  }

  document.getElementById('pd-truoc').addEventListener('click', function () { loc.trang--; ve(); });
  document.getElementById('pd-sau').addEventListener('click', function () { loc.trang++; ve(); });
  document.getElementById('pd-loc-xoa').addEventListener('click', function () { loc.muc = 0; loc.trang = 0; ve(); });

  tatca.forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      chonTap(a, true);
      history.replaceState(null, '', '#tap-' + a.dataset.yt);
      document.getElementById('xem').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Dải chuyên mục: lọc lưới và đưa tập đầu của chuyên mục vào khung rạp. */
  document.querySelectorAll('.pd-band[data-muc]').forEach(function (b) {
    b.addEventListener('click', function (ev) {
      ev.preventDefault();
      loc.muc = +b.dataset.muc; loc.trang = 0;
      var ds = ve();
      if (ds.length) { chonTap(ds[0], false); }
      document.getElementById('xem').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Liên kết sâu #tap-<mã>: chọn sẵn tập, không tự phát. */
  var m = location.hash.match(/^#tap-([\w-]{11})$/);
  if (m) {
    var a = document.querySelector('.pd-tap[data-yt="' + m[1] + '"]');
    if (a) { loc.muc = 0; chonTap(a, false); }
  }
  ve();
})();

/* Lọc kho tài liệu trên trang Sách và tài liệu. Lọc tại chỗ, không tải lại
   trang. Học ý tưởng từ Tool Box của scaleos.vn nhưng bỏ kiểu mỗi mục lọc là
   một đường dẫn riêng. */
(function () {
  var loc = document.getElementById('tl-loc');
  if (!loc) return;
  var the = [].slice.call(document.querySelectorAll('.tl[data-loai]'));
  loc.addEventListener('click', function (ev) {
    var nut = ev.target.closest('.tl-nut');
    if (!nut) return;
    [].slice.call(loc.querySelectorAll('.tl-nut')).forEach(function (b) {
      b.classList.toggle('chon', b === nut);
    });
    var chon = nut.dataset.loc;
    the.forEach(function (t) {
      t.style.display = (chon === 'all' || t.dataset.loai === chon) ? '' : 'none';
    });
  });
})();

/* Bảng tự kiểm Ba Điểm Chạm: cộng điểm từng chạm, chỉ ra chạm yếu nhất.
   Chấm buổi tư vấn, không chấm con người. Mọi thứ chạy tại trình duyệt,
   không gửi câu trả lời đi đâu. */
(function () {
  var nut = document.getElementById('tk-xem');
  if (!nut) return;
  var TEN = {1: 'Chạm Động Lực', 2: 'Chạm Điểm Nghẽn', 3: 'Chạm Con Đường'};
  var SUA = {
    1: 'Khách chưa rõ điều mình thật sự muốn, nên mọi giải pháp lúc này đều nghe hay mà chưa cần thiết. Buổi sau lùi lại hỏi về mong muốn thật, trước khi bàn bất cứ giải pháp nào.',
    2: 'Khách chưa thấy thứ đang giữ họ đứng yên, nên chưa thấy gấp. Quay lại phần cái giá của việc để nguyên hiện trạng, và để chính khách gọi tên chỗ kẹt.',
    3: 'Khách thấy vấn đề nhưng chưa thấy con đường của mình trong giải pháp. Đặt giải pháp vào bối cảnh riêng của họ, bớt phần trình bày chung.'
  };
  nut.addEventListener('click', function () {
    var diem = {1: 0, 2: 0, 3: 0};
    [].slice.call(document.querySelectorAll('.tk-cau input:checked')).forEach(function (o) {
      diem[+o.dataset.cham]++;
    });
    var kq = document.getElementById('tk-kq');
    var thap = Math.min(diem[1], diem[2], diem[3]);
    var yeu = [1, 2, 3].filter(function (n) { return diem[n] === thap; });
    var dong = 'Động Lực ' + diem[1] + '/4 &middot; Điểm Nghẽn ' + diem[2] + '/4 &middot; Con Đường ' + diem[3] + '/4';
    var than;
    if (thap >= 3) {
      than = '<h3>Buổi này đi khá đủ cả ba chạm</h3><p>Không có chạm nào hụt rõ. Nếu khách vẫn chưa quyết, chỗ đáng xem tiếp thường không nằm trong buổi mà nằm ở người cùng quyết chưa có mặt.</p>';
    } else if (yeu.length === 3) {
      than = '<h3>Cả ba chạm đều còn mỏng</h3><p>Buổi này nhiều khả năng là một buổi trình bày chứ chưa phải một buổi dẫn quyết định. Đừng sửa cả ba cùng lúc, bắt đầu từ Chạm Động Lực vì hai chạm sau đứng trên nó.</p>';
    } else {
      than = yeu.map(function (n) {
        return '<h3>Thiếu ' + TEN[n] + '</h3><p>' + SUA[n] + '</p>';
      }).join('');
    }
    kq.innerHTML = '<p class="diem">' + dong + '</p>' + than;
    kq.hidden = false;
    kq.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  });
})();

/* Mục lục bên của bài viết: đánh dấu mục đang đọc tới. */
(function () {
  var ben = document.querySelector('.ml-ben');
  if (!ben) return;
  var muc = [].slice.call(document.querySelectorAll('.doc h2[id]'));
  if (!muc.length) return;
  function to(id) {
    [].slice.call(ben.querySelectorAll('a')).forEach(function (a) {
      a.classList.toggle('dang', a.getAttribute('href') === '#' + id);
    });
  }
  var thay = new IntersectionObserver(function () {
    // mục đang đọc là tiêu đề cuối cùng đã đi qua mép trên màn hình
    var qua = muc.filter(function (h) { return h.getBoundingClientRect().top < 120; });
    to((qua.length ? qua[qua.length - 1] : muc[0]).id);
  }, {rootMargin: '-110px 0px -60% 0px', threshold: [0, 1]});
  muc.forEach(function (h) { thay.observe(h); });
  to(muc[0].id);
})();
