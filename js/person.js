$('.left,.right').css('height',$(window).height()*0.90);
//tab切换
$('table td').click(function (param) {
    let i=$('table td').index($(this));
    $('#right .layui-card').eq(i).show().siblings().hide();
    
  });