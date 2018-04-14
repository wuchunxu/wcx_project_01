$(function(){
    $(`<link rel="stylesheet" href="css/index.css"></link>`).appendTo(document.head);
    //tab标签页,点击后标题颜色变化
    $(".tab").on("click","[data-toggle=tab]",function(e){
        var tar = $(e.target);
       tar.addClass("active");
        tar.parent().siblings().children("a[data-toggle=tab]").removeClass("active");
    });
})
