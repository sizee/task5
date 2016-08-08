/**
 * Created by Fly-mydream on 16.8.5.
 */

function searchAjax(userName) {
    $.ajax
    ({
        type: "get",
        url: "a/students",
        dataType: 'JSON',
        success: function (data) {
            if (data.code == 200) {
                var student = data.data;
                for (var i = 0; i < student.length; i++) {
                    if (student[i].name == userName) {
                        console.info(student[i]);
                        tip.className = 'bad';
                        tip.innerHTML = '用户名已存在';
                    }

                }
            }
        }
    })
}

function setAjax(addName, addQq, addType, addSchool, addTalent, addLevel, addJoinTime, addWish) {
    if (addName != "" && addQq != "" && addType != null
        && addSchool != "" && addTalent != null && addLevel != null
        && addJoinTime != null && addWish != "") {
        $.ajax
        ({
            url: "/a/student",
            type: "post",
            dataType: "json",
            data: {
                name: addName,
                qq: addQq,
                type: addType,
                school: addSchool,
                talent: addTalent,
                level: addLevel,
                joinTime: addJoinTime,
                wish: addWish
            },
            success: function (data) {
                if (data.code == 200) {
                    alert("添加成功");
                    location.href = 'task5-1.html';
                }
                else {
                    console.info(addName, addQq, addType, addSchool, addTalent, addLevel, addJoinTime, addWish);
                    alert("失败" + data.code);
                }
            }
        });
    }
}

function show_tip() {
    var tip = document.getElementById('tip');
    tip.className = 'ok';
    tip.innerHTML = '用户名';
}

function checkname() {
    var username = $("#name").val();
    if (username == '') {
        tip.className = 'bad';
        tip.innerHTML = '用户名不能为空';
    }
    {
        searchAjax(username);
    }
}

function getUrl() {
   var str;
    var url = location.search;
    if (url.indexOf("?") != -1)
    {
         str = url.substr(1);
        console.info(str);
        $("button#edit").show();
        $("button#save").hide();
        $("button#pase").text("返回");

    }
    else
    {
        $("button#edit").hide();
        $("button#save").show();
        $("button#pase").text("取消");
    }
    return str;
   
}



function editAjax()
{
    var url = getUrl();
    $.ajax
    ({
        type: "get",
        url:'a/student/' + url,
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                $("#name").val(data.name);
                $("#number").val(data.qq);
                $("input[name=type][value=" + data.type + "]").attr("checked", 'checked');
                $("#school").val(data.school);
                $("input[name=talent][value='" + data.talent + "']").attr("checked", 'checked');
                $("input[name=level][value='" + data.level + "']").attr("checked", 'checked');
                $("#joinTime").val(data.joinTime);
                $("#wish").val(data.wish)
            }
        }

    })
}

function modifyAjax(addName,addQq,addSchool,addType,addTalent,addLevel,addWish)
{
    var url = getUrl();
    $.ajax({
        url: "a/student/" + url,
        type: "put",
       // dataType:'json',
        data: {
            name: addName,
            qq: addQq,
            type: addType,
            school: addSchool,
            talent: addTalent,
            level: addLevel,
            wish: addWish
        },
        success: function () {
            alert("修改成功");
           // location.href = "task5-3.html?" + url;
        }
    })
}


