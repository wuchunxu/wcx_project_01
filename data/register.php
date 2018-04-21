<?php
    require_once("init.php");
    /*
        获取客户端提交的信息
    */
    @$uname = $_REQUEST["uname"];
    @$upwd  = $_REQUEST["upwd"];
    @$email = $_REQUEST["email"];
    @$phone = $_REQUEST["phone"];
    /*
        正则验证数据格式
    */
     $regUname = "/^[0-9a-zA-Z_]{6,18}$/";
     $regUpwd  = "/^[0-9a-zA-Z_@\.]{6,18}$/";
     $regEmail = "/^[0-9a-zA-Z]{3,12}@[0-9a-zA-Z]{2,12}(.(com|cn|org))+$/";
     $regPhone = "/^(\+86|0086)?\s*1[3-9]\d{9}$/";

     $res1 = preg_match($regUname,$uname);
     $res2 = preg_match($regUpwd,$upwd);
     $res3 = preg_match($regEmail,$email);
     $res4 = preg_match($regPhone,$phone);

     if(!$res1) die('{"code":"-1","msg":"用户名格式错误"}');
     if(!$res2) die('{"code":"-1","msg":"密码格式错误"}');
     if(!$res3) die('{"code":"-1","msg":"邮箱格式错误"}');
     if(!$res4) die('{"code":"-1","msg":"手机号码格式错误"}');
     /*
        SQL语句查询
     */
    $sql = "INSERT INTO sp_user(uname,upwd,email,phone) VALUES('$uname',md5($upwd),'$email',$phone)";
    //echo $sql;
    $result = mysqli_query($conn,$sql);
    if($result){
        $insert = mysqli_insert_id($conn);
        if($insert>0){
            echo '{"code":"1","msg":"注册成功！"}';
        }else{
            echo '{"code":"-1","msg":"注册失败！"}';
        }
    }
?>