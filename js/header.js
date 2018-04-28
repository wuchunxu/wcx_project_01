$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo(document.head);
    $nav = $("#nav");
    $nav.load("header.html",function(){
        //判断是否已经登录
        $.ajax({
            url:"data/user/isLogin.php",
            type:"get",
            dataType:"json",
            success:function(data){
                //console.log(data);
                var {code,user} = data;
                if(code>0){
                    console.log(user);
                    var html = `<p>尊敬的${user[1]}，欢迎您!</p>
                                <button class="logout">退出</button>
                    `;
                    $nav.find(".vip>ul").html(html);
                    $nav.find(".vip .logout").click(function(){
                        $.ajax({
                            url:"data/user/logout.php",
                            type:"get",
                            success:function(data){
                                if(data.code>0){
                                    alert("成功退出");
                                    location.reload();
                                }
                            }
                        });
                    });
                }
            }
        });
    });
});