
    $('#dog').change(function () {
     
       console.log(this)
      });

//Demo 监听专业选择下拉框
layui.use('form', function(){
    var form = layui.form;
    form.on('select(pro)', function(data){
      
    });
    
  });

  layui.use('upload',function () {
    var upload=layui.upload;
     //执行实例
  var uploadInst = upload.render({
    elem: '#test1' //绑定元素
    ,url: '/upload/' //上传接口
    ,done: function(res){
      //上传完毕回调
    }
    ,error: function(){
      //请求异常回调
    }
  });
    })