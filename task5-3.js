/**
 * Created by Fly-mydream on 16.8.6.
 */
function GetRequest(){
    var url=location.search;
    var str;
    if(url.indexOf("?")!=-1)
    {
         str=url.substr(1);
    }
    return str;
}
$(function(){
    var url=GetRequest();
    alert(url);
    var aType=["CSS","JS","JAVA","运维","DBA","产品","IOS","android"];
    var aTalent=["学霸","学渣"];
    var aLevel=["0基础","3个月内","6个月内","1年内","3年内","3年以上"];
    $.ajax({
        type:'get',
        url:'a/student/'+url,
        dataType:'JSON',
        success:function(data){
            var times = new Date(data.joinTime);
            $("#name span").text(data.name);
            $("#qq span").text(data.qq);
            $("#type span").text(aType[data.type-1]);
            $("#school span").text(data.school);
            $("#talent span").text(aTalent[data.talent-1]);
            $("#level span").text(aLevel[data.level-1]);
            $("#joinTime span").text(times.getFullYear() + "年" + (times.getMonth()+1) +
                "月" + times.getDate() + "日");
            $("#wish>span").text(data.wish);

        }

    })
})
function delet(){
    var url1=GetRequest();
    $.ajax({
        url:"/a/students/?id="+url1,
        type:"post",
    success:function(){
        alert("删除成功");
        return location.href="task5-1.html";
    }
    })
}

function edit(){
    var url1=GetRequest();
    location.href='task5-2.html?'+url1;
    $.ajax({
        url:"a/student/?id"+url,
        type:'put',
        data:{
            name:1
        },
        success:function(){
            alert("修改成功");
        }
    })

}


    
