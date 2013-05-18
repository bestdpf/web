/**
 * Created with JetBrains WebStorm.
 * User: duan
 * Date: 13-5-18
 * Time: 下午6:03
 * To change this template use File | Settings | File Templates.
 */
function getPM2_5(city){
    var ans=confirm("Are you ready");
    // if(ans)window.location="http://taobao.com";
    if(ans){
        var url="http://pm25.in/api/querys/pm2_5.json"+"?city="+city+"&token=5j1znBVAsnSf5xQyNQyq";
        var req=new XMLHttpRequest();
        req.open("GET",url);
        req.send(null);
        //alert(url);
        req.onreadystatechange=function(){
            if(req.readyState==4&&req.status==200){
                var response=eval(req.responseText);
                //var json=JSON(req);
                //alert("good");
                alert("pm2.5 of beijing is "+response[0].pm2_5);
            }
            //else alert("error occur");
        };
    }
}
