/**
 * Created by web-01 on 2018/4/14.
 */
$(function(){
    //����link��ǩ������footer.css�ļ�
    $(`<link rel="stylesheet" href="css/footer.css"></link>`).appendTo(document.head);

    $("#footer").load("footer.html");
});