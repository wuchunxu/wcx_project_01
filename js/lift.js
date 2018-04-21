$(()=>{
	var $divLift=$("#lift"),
		$ulLift=$("#lift>ul"),
        $floors=$("#main>section");
        console.log($floors[0]);
	$(window).scroll(function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		var offsetTop1=$($floors[0]).offset().top;
		if(offsetTop1<=scrollTop+innerHeight/2)
			$divLift.show();
		else
			$divLift.hide();

		$floors.each((i,f)=>{
			var $f=$(f);
			var offsetTop=$f.offset().top;
			if(offsetTop<=scrollTop+innerHeight/2){
				$ulLift.children(":eq("+i+")").addClass("hover")
					.siblings().removeClass("hover");
			}
		})

		$ulLift.children().click(function(){
			//this->li
			var $li=$(this);
			var i=$li.index();
			var offsetTop=$("section:eq("+i+")").offset().top;
			$("html").stop(true).animate({
				scrollTop:offsetTop
			},500);
		})
	})
})