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
