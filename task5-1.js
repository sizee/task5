/**
 * Created by Fly-mydream on 16.8.1.
 */
$(function(){
    $.ajax({
        type:"get",
        url:"a/students",
        dataType:"JSON",
        success:function(data){
            var date=data.data;
            var page=Math.ceil(date.length/10);
            for(var i=0;i<parseInt(date.length);i++){
                var times=new Date(date[i].updateAt);
                var tbody=$("table tbody");
                tbody.append("<tr>" +
                    "<th>" +
                    date[i].id +
                    "</th>" +
                    "<th>"+
                    date[i].name+
                    "</th>" +
                    "<th>" +
                    date[i].type+
                    "</th>" +
                    "<th>" +
                    times.getFullYear() +
                    "年"+(times.getMonth()+1)+
                    "日"+times.getDay()+
                    "月"+times.getHours()+
                    "时"+times.getMinutes()+
                    "分"+times.getSeconds()+
                    "秒"+
                    "</th>" +
                    "</tr>");
                    }
            $("tbody tr").click(function(){
                var id=$(this.firstChild).text();
                location.href="task5-3.html?"+id;
            })
                },
        error:function(){
            alert("请求失败");
        }
    })

    /////////////////////////////////////////////////////////////////////////

});
