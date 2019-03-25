function ajax(url,fnSucc){
    //第一步创建ajax对象
    if (window.XMLHttpRequest) {
        var oAjax=new XMLHttpRequest();
    } else {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //第二步 链接服务
    oAjax.open("GET",url,true)
    //第三步 发送请求
    oAjax.send();
    //第四部 接收返回
    oAjax.onreadystatechange=function(){
        if (oAjax.readyState==4) {
            if(oAjax.status==200){
                fnSucc(oAjax.responseText);  //成功时调用该方法
            }
        } else {
            if(fnField){
                fnField(oAjax.status);//失败
            }
        }
    }
}