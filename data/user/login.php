<?php
    /*
        login.php
    */

    require_once("../init.php");

    @$uname = $_REQUEST["uname"];
    @$upwd  = $_REQUEST["upwd"];

    /*
        正则表达式验证格式,防止sql注入
    */
    $regUname = "/^[0-9a-zA-Z_]{6,18}$/";
    $regUpwd  = "/^[0-9a-zA-Z_@\.]{6,18}$/";

    if(!preg_match($regUname,$uname)){
        die('{"code":"-1","msg":"用户名格式错误！"}');
    }
    if(!preg_match($regUname,$upwd)){
        die('{"code":"-1","msg":"密码格式错误！"}');
    }

    /*
        执行sql语句
    */
    $sql = "SELECT uid FROM sp_user WHERE uname = '$uname' AND upwd = md5($upwd)";

    $result = mysqli_query($conn,$sql);

    if($result){
        $row = mysqli_fetch_row($result);
        if($row){
            //登录成功后，启动session，并注册uid到session中
            session_start();
            $_SESSION["uid"] = $row[0];
            echo '{"code":"1","msg":"登录成功！"}';
        }else{
            echo '{"code":"-1","msg":"用户名或密码错误！"}';
        }
    }

?>