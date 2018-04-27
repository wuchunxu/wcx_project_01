$(function(){
    var $imgShower = $("#img-shower");
    var $bigImg = $imgShower.find(".big-img>img");
    var $biggerImg = $(".bigger-img");
    var $mask = $("#mask");
    var $superMask = $("#superMask");
    var $ul = $imgShower.find(".small-imgs>ul");
    var $lis = $ul.children("li");

    var len = $lis.length;
    var $width_shower = null;
    var width_li = null;
    var moved = 0;//右移的个数

    var $prev = $ul.siblings(".prev");
    var $next = $ul.siblings(".next");
    /*
        初始化
    */
    setWidth();
    changeColor();
    /*
        窗口大小改变，重新设置宽度
    */
    $(window).resize(function(){
       setWidth();
    });
    /*
        左右按钮事件监听处理
    */
    $prev.click(function(){
        if(moved<0){
            moved++;
            move();
        }
    });
    $next.click(function () {
        if(moved>4-len){
            moved--;
            move();
        }
    });
    $ul.on("click","li>img",function(e){
        var tar = $(e.target);
        //选中小图
        tar.parent().addClass("active")
            .siblings().removeClass("active");
        //将中图的src设置成当前小图的src
        var url = tar.attr("src");
        /*
            暂时本地图片
        */
        var index = url.lastIndexOf("sm");//找到sm的位置
        var result = url.substring(0,index)+"lg"+url.substring(index+2);//拼出大图的路径
        $bigImg.attr("src",result);//设置大图路径
        $biggerImg.css({backgroundImage:`url(${result})`});//设置放大镜的背景图片
    });

    $superMask.hover(function(e){
            //$biggerImg.css("left",$width_shower+20);
            $biggerImg.show();
            $mask.show();
            $mask.css({
                left:e.offsetX-$mask.width()/2,
                top:e.offsetY-$mask.height()/2
            });
            $biggerImg.css({
                backgroundImage:`url(${$bigImg.attr("src")})`
            });
        },function(){
            $biggerImg.hide();
            $mask.hide();
        }
    ).mousemove(function(e){
        var $width_mask = $mask.width();
        var x = e.offsetX-$width_mask/2;
        var y = e.offsetY-$width_mask/2;
        //控制x,y不能越界
        if(x<0){
            x=0;
        }else if(x>$width_mask){
            x = $width_mask;
        }
        if(y<0){
            y=0;
        }else if(y>$width_mask){
            y=$width_mask;
        }
        $mask.css({left:x,top:y});
        //求出x和y的所占的比例
        var per_x = x/$width_mask*100;
        var per_y = y/$width_mask*100;
        $biggerImg.css({
            backgroundPosition:`${per_x}% ${per_y}%`
        });
        //console.log($biggerImg.css("background"));
    })
    /*
        设置li和ul的宽度
    */
    function setWidth(){
        $width_shower = $imgShower.width();
        $biggerImg.height($width_shower);
        $biggerImg.width($width_shower);
         //每个li宽度等于显示区的1/4
        width_li = ($width_shower - 50) / 4;
        //设置li的宽度和ul的宽度
        $lis.width(width_li);
        $ul.width((width_li+10)*len);
        //设置mask的宽高
        $mask.css({
            "width":$width_shower/2,
            "height":$width_shower/2
        });
        move();
    }
    /*
        左右按钮变色控制函数
    */
    function changeColor(){
        if (moved >= 0) {
            $prev.addClass("disabled");
        } else {
            $prev.removeClass("disabled");
        }
        if (moved>4-len) {
            $next.removeClass("disabled");
        } else {
            $next.addClass("disabled");
        }
    }
    /*
        移动函数
    */
    function move(){
        $ul.css("left",moved*(width_li+10));
        changeColor();
    }
})