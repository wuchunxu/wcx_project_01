/**
 * Created by wuchunxu on 2018/4/17.
 */
$(function(){
    /*
    * 准备正则表达式，如果要验证汉字（\u4e00-\u9fa5汉字）
    * */
    const regUname = /^[0-9a-zA-Z_]{6,18}$/;//6~18位数字、字母、下划线
    const regUpwd = /^[0-9a-zA-Z_@\.]{6,18}$/;
    const regEmail = /^[0-9a-zA-Z]{3,12}@[0-9a-zA-Z]{2,12}(.(com|cn|org))+$/;
    const regPhone = /^(\+86|0086)?\s*1[3-9]\d{9}$/;

    var isEqual = false;
    /*
    * 事件代理在表单上
    * */
    var $register = $("#register");
    $register.on("blur","input[type=text],input[type=password]",function(e){
        var tar = $(e.target);
        //只要是需要验证的input，我们先隐藏所有的feedback
        tar.siblings(".feedback").removeClass("in");
        /*
        * 根据name选择相应的正则进行验证
        * */
        switch(tar.attr("id")){
            case "uname":regCheck(regUname,tar)&&isRegister("uname",tar.val(),tar);break;
            case "upwd" :regCheck(regUpwd,tar) &&(isEqual=pwdEqual(tar));break;
            case "upwd2":regCheck(regUpwd,tar) &&(isEqual=pwdEqual(tar));break;
            case "email":regCheck(regEmail,tar)&&isRegister("email",tar.val(),tar);break;
            case "phone":regCheck(regPhone,tar)&&isRegister("phone",tar.val(),tar);break;
        }
        /*
        * 正则表达式验证格式函数
        * */
        function regCheck(reg,input){
            var result = reg.test(input.val());
            if(result){
                input.siblings("span.feedback.success").addClass("in");
            }else{
                input.siblings("span.feedback.failed").addClass("in");
            }
            input.attr("data-isReady",result);
            return result;
        }
        /*
        * 检测两次输入密码是否相等
        * */
        function pwdEqual(input){
            var pwd1 = $("#upwd").val();
            var pwd2 = $("#upwd2").val();
            var result = false;
            //两个密码都不为空才比较是否相等
            if(pwd1!=''&&pwd2!=''){
                input.siblings(".feedback").removeClass("in");
                if(pwd1!=pwd2){
                    input.siblings("span.feedback.notEqual").addClass("in");
                    result = false;
                }else{
                    input.siblings("span.feedback.success").addClass("in");
                    result = true;
                }
            }
            return result;
        }

        function isRegister(field,val,input){
            
            $.ajax({
                type:"get",
                dataType: "json",
                url: "data/isRegister.php",
                data : `${field}=${val}`,
                success: function(data){
                    //console.log(data);
                    if(data.code<0){
                        input.siblings(".feedback").removeClass("in");
                        input.siblings("span.feedback.occupied").addClass("in");
                        return false;
                    }
                    return true;
                }
            });
        }
    });

    $inputs = $register.find("[type=text],[type=password]");
    $register.find('[type=submit]').click(function(e){
        e.preventDefault();
        var isReady = true;
        for(var ele of $inputs){
            var temp = $(ele).attr("data-isReady");
            if(!temp){
                isReady = false;
                break;
            }
        }

        //console.log(isReady);
        if(isReady && isEqual){
            //$register.submit(); 表单提交
            $.ajax({
                type:"post",
                dataType:"json",
                data:{
                    uname: $("#uname").val(),
                    upwd: $("#upwd").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val()
                },
                url:"data/register.php",
                success:function(data){
                    //console.log(data);
                    if(data.code>0){
                        var html = `<h2 class="feedback-info">恭喜，注册成功！</h2>
                                    <h3 class="linkTo">
                                        <a href="index.html">回到首页</a>或<a href="login.html">登录</a>
                                    </h3>`;
                        $("#main").html(html);
                    }else{
                        alert("注册失败");
                    }
                }
            });

        }
    });
})