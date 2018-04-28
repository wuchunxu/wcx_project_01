<?php 
    /*
        isRegister.php
        用来检测用户名、邮箱、手机号是否已被注册
    */
    require_once("../init.php");

    
    @$uname = $_REQUEST["uname"];
    @$phone = $_REQUEST["phone"];
    @$email = $_REQUEST["email"];

    function isRegister($field,$val){
        global $conn;
        $sql = "SELECT uid FROM sp_user WHERE $field = '$val'";
        //echo $sql;
        $result = mysqli_query($conn,$sql);
        //if(mysqli_error($conn)) mysqli_error($conn);
        $row = mysqli_fetch_row($result);
        if($row){
            die('{"code":"-1","msg":"已被占用"}');
        }else{
            die('{"code":"1","msg":"可用"}');
        }
    }
    
    //查询uname是否已被注册
    if($uname){
        isRegister('uname',$uname);
    }

    //查询手机号，是否已被注册
    if($phone){
        isRegister('phone',$phone);
    }

    //查询邮箱，是否已被注册
    if($email){
        isRegister('email',$email);
    }


?>