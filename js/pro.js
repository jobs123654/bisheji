//查询作品
$('.search').click(function (param) {
   
  });
//分专业设计
  $('#pro').change(function (param) {
    var s=parseInt($(this).val());
    if(s==1)
    {
      $('#technology').show(300);
    }else{
      $('#technology').hide(300);
    }
    switch(parseInt($(this).val()))
    {
      //地理信息科学
      case 1:
      break;
      //计算机专业
      case 2:
      break;
      default:;
    }
  });
  //点击视频进入详情页
  $('video').click(function (param) {
   var i=$(this).next().val()
    if(i!=null)
    {
      location='info.html';
      // window.open('info.html','_black')
    }
    });
