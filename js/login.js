$(function(){
    const regUname = /^[0-9a-zA-Z_]{6,18}$/; //6~18位数字、字母、下划线
    const regUpwd = /^[0-9a-zA-Z_@\.]{6,18}$/;

    function regCheck(reg, input) {
        input.siblings("span.feedback").removeClass("in");
        var result = reg.test(input.val());
        if (result) {
            input
                .siblings("span.feedback.success")
                .addClass("in");
        } else {
            input
                .siblings("span.feedback.failed")
                .addClass("in");
        }
        input.attr("data-isReady", result);
        return result;
    }
    
    $("#login").on("click", "[type=submit]", function (e) {
        e.preventDefault();
        var $uname = $("#uname");
        var $upwd  = $("#upwd");

        if(regCheck(regUname,$uname)&&regCheck(regUpwd,$upwd)){
            $.ajax({
                type:"POST",
                url:"data/user/login.php",
                dataType:"json",
                data:{
                    uname: $uname.val(),
                    upwd: $upwd.val()
                },
                success:function(data){
                    console.log(data);
                    if(data.code>0){
                        alert("登录成功！");
                        location.href="index.html";
                    }
                }
            });
        }
        
    });
})