$(function(){
	 lunbo();
	 Hl();
	 l1();
	 l2();
})


function l2(){
	var asa = document.getElementsByClassName("sn1"); 
	var cons = document.getElementsByClassName("la1");
	//通过for循环为所有的标题添加相同事件
	for( var i = 0 ; i <= asa.length ; i++ ){
		asa[i].index=i
		asa[i].onmouseover = function(){
			for( var j = 0 ; j < asa.length ; j++ ){
				asa[j].style.background = "";
				cons[j].style.display = "none";
			}
			this.style.background = "red";
			cons[this.index].style.display = "block";
		}
	}

}


function l1(){

var timer=null;
	 var index=0
	 timer =setInterval(autoPlay,3000);
	 
		function autoPlay(){	
		$("#ul1 li").eq(index).fadeTo(1000,1).siblings().fadeTo(1000,0);
		$("#o1 li").eq(index).addClass("current").siblings().removeClass("current");
		index++;
		if(index==$("#ul1 li").size()){
			index=0
		};
		};
		$("#o1 li").hover(function(){
			clearInterval(timer)
			$("#ul1 li").eq($(this).index()).fadeTo(1000,1).siblings().fadeTo(1000,0)
			$(this).addClass("current").siblings().removeClass("current");
			
		},function(){
			timer=setInterval(autoPlay,3000)
		})


}

function lunbo(){

	var timer = setInterval(autoPlay,2000);
    var index = 0;

     function autoPlay(){
   	
   	index++
   	if(index==5){
   		index=0;
   	}
   	$(".th6 span").eq(index).css( "background" ,"red" ).siblings().css("background","#d6c8bb");
   	$(".thc>ul li").eq(index).animate({"left":0},1000,function(){
   		$(this).css("z-index",0).siblings().css({"z-index":1,"left":760})
   	})
   }
    	
		$(".th6 span").mouseover(function(){
			clearInterval(timer)
			$(".thc>ul li").eq($(this).index()).animate({"left":0}).siblings().animate({"left":760})
			$(this).css( "background" ,"red" )
					.siblings()
					.css("background","#d6c8bb");
		}).mouseout(function(){
			
			timer = setInterval(autoPlay, 1000 );
			
		})




}


function Hl(){

	$(".fr>ul .Hl").mouseenter(function(){
		$(this).find("div").css("display","block");
		$(this).css("height","131");
		$(this).find("em").css({"background":"red","color":"#fff"})


	}).mouseleave(function(){
		$(this).find("div").css("display","none");
		$(this).css("height","35");
		$(this).find("em").css({"background":"#d8d9d7","color":"#5b473b"})
		$(this).find("p").css("display","block")
	})
		
	
}