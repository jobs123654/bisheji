layui.use('layer', function(){ //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    
    //触发事件
    var active = {
     /*  setTop: function(){
        var that = this; 
        //多窗口模式，层叠置顶
        layer.open({
          type: 2 //此处以iframe举例
          ,title: '当你选择该窗体时，即会在最顶端'
          ,area: ['390px', '260px']
          ,shade: 0
          ,maxmin: true
          ,offset: [ //为了演示，随机坐标
            Math.random()*($(window).height()-300)
            ,Math.random()*($(window).width()-390)
          ] 
          ,content: 'http://layer.layui.com/test/settop.html'
          ,btn: ['继续弹出', '全部关闭'] //只是为了演示
          ,yes: function(){
            $(that).click(); 
          }
          ,btn2: function(){
            layer.closeAll();
          }
          
          ,zIndex: layer.zIndex //重点1
          ,success: function(layero){
            layer.setTop(layero); //重点2
          }
        });
      } */
      /* ,confirmTrans: function(){
        //配置一个透明的询问框
        layer.msg('大部分参数都是可以公用的<br>合理搭配，展示不一样的风格', {
          time: 20000, //20s后自动关闭
          btn: ['明白了', '知道了', '哦']
        });
      } */
      notice: function(){
        //示范一个公告层
        layer.open({
          type: 1
          ,title:'用户登录' //不显示标题栏
          ,closeBtn: false
          ,area: '300px;'
          ,shade: 0.8
          ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
          ,btn: ['进入', '离开']
          ,btnAlign: 'c'
          ,moveType: 1 //拖拽模式，0或者1
          ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">欢迎来到毕设季，亲！^_^<br><br><div class="layui-form-item"> <label class="layui-form-label">账号</label>  <div class="layui-input-block">  <input type="text" id="id" name="title" lay-verify="title" autocomplete="off" placeholder="手机号/邮箱" class="layui-input"> </div></div><div class="layui-form-item"> <label class="layui-form-label">密码</label>  <div class="layui-input-block">  <input type="password" id="id" name="title" lay-verify="title" autocomplete="off" class="layui-input"> </div></div><br></div>'
          ,success: function(layero){
            var btn = layero.find('.layui-layer-btn');
            btn.find('.layui-layer-btn0').attr({
              href: 'http://www.layui.com/'
              ,target: '_blank'
            });
          }
        });
      }
      ,offset: function(othis){
        var type = othis.data('type')
        ,text = othis.text();
        
        layer.open({
          type: 1
          ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
          ,id: 'layerDemo'+type //防止重复弹出
          ,content: '<div style="padding: 20px 100px;">'+ text +'</div>'
          ,btn: '关闭全部'
          ,btnAlign: 'c' //按钮居中
          ,shade: 0 //不显示遮罩
          ,yes: function(){
            layer.closeAll();
          }
        });
      }
    };
    //弹出登录界面
    $('.notice').on('click', function(){
      var othis = $(this), method = othis.data('method');
      active[method] ? active[method].call(this, othis) : '';
    });
    
  });
//---------------------------------------------------commons----------------------------------
var h=$(window).height();
$('iframe').css('height',h)
$('.layui-nav-item').click(function (param) { 
   
   var index=$('.layui-nav-item').index(this);
   if(index!=0)
   {
    $(this).addClass('layui-this'). siblings().removeClass('layui-this');
   }
   switch(parseInt(index)-1)
   {
       case 0:
       $('iframe').attr('src','html/home.html');
       break;
       case 1:
       $('iframe').attr('src','html/notice.html');
       break;
       case 2:
       $('iframe').attr('src','html/pro.html');
       break;
       case 3:
       $('iframe').attr('src','html/personal.html');
       break;
       case 4:
       $('iframe').attr('src','html/suggest.html');
       break;
       case 5:
       $('iframe').attr('src','html/upload.html');
       break;
       case 7:
       $('iframe').attr('src','html/register.html');
       break;
   }
 });