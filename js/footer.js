/**
 * Created by web-01 on 2018/4/14.
 */
$(function(){
    //创建link标签，导入footer.css文件
    $(`<link rel="stylesheet" href="css/footer.css"></link>`).appendTo(document.head);

    $("#footer").load("footer.html");
});