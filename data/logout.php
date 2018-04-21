<?php
    header("Content-Type:application/json;charset=utf-8");
    session_start();
    session_unset();
    session_destroy();
    echo '{"code":"1","msg":"成功退出！"}';
?>
