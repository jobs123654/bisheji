$('#get_code').click(function (param) {
    let i=60,o=$(this);
   let c= setInterval(function (param) {
        if(i==0)
        {
            o.text('获取验证码');
            i=0;
            clearInterval(c);
        }else{
            o.text(i+'s后重新发送');
        }
    
     i--;
      }, 1000);
  });
  $('#next').click(function (param) {
     $('.second').show(300);
     $('.first').hide(300);
     
    });