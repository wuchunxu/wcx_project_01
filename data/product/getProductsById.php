<?php
    /*
        product/getProductsById.php
    */
    require_once("../init.php");
    @$pid = $_REQUEST["pid"];

    /*
        正则表达式验证格式
    */
    $reg = '/^[0-9]{1,}$/';
    if(!preg_match($reg,$pid)){
        die('{"code":"-1","msg":"商品id格式有误"}');
    }

    /*
        执行sql语句
    */
    $sql1 = "SELECT pid,title,subtitle,price,category,storage FROM sp_product WHERE pid=$pid";
    $sql2 = "SELECT spec FROM sp_product_spec WHERE pid=$pid";
    $sql3 = "SELECT img FROM sp_product_more_detail WHERE pid=$pid";
    $sql4 = "SELECT sm FROM sp_product_pic WHERE pid=$pid";

    $result1 = mysqli_query($conn,$sql1);
    $result2 = mysqli_query($conn,$sql2);
    $result3 = mysqli_query($conn,$sql3);
    $result4 = mysqli_query($conn,$sql4);

    //获取详情信息
    if($result1){
        $rows = mysqli_fetch_all($result1,MYSQLI_ASSOC);
        $output =  $rows[0];
    }
    //获取规格
    if($result2){
        $specs = mysqli_fetch_all($result2);
        $arr1 = [];
        for($i=0;$i<count($specs);$i++){
            $arr1[$i] = $specs[$i][0];
        }
        $output["specs"] = $arr1;
    }
    //获取详情图片
    if($result3){
        $imgs = mysqli_fetch_all($result3);
        $arr = [];
        for($i=0;$i<count($imgs);$i++){
            $arr[$i] = $imgs[$i][0];
        }
        $output["detail_imgs"] = $arr;
    }
    //获取大小图片
    if($result4){
        $lgs = mysqli_fetch_all($result);
        $arr4 = [];
        for($i=0;$i<count($lgs);$i++){
            $arr4[$i] = $lgs[$i][0];
        }
        $output["lg_imgs"] = $arr4;
    }
    echo json_encode($output);
?>