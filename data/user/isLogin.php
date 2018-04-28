<?php
    /*
        isLogin.php
    */
    require_once("../init.php");
    session_start();
    @$uid = $_SESSION["uid"];
    if($uid==null){
        echo '{"code":"-1","msg":"未登录"}';
    }else{
        $sql = "SELECT uid,uname FROM sp_user WHERE uid=$uid";
        $result = mysqli_query($conn,$sql);
        $user = mysqli_fetch_row($result);
        echo json_encode(["code"=>1,"user"=>$user]);
    }
?>