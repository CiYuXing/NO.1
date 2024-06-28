window.onload=function(){
	function school(){
		var speed = 50;
		var imgbox = document.getElementById("imgbox");
		imgbox.innerHTML += imgbox.innerHTML;
		var span = imgbox.getElementsByTagName("span");
		var timer1 = window.setInterval(marquee,speed);
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		function marquee(){
			if(imgbox.scrollLeft >span[0].offsetwidth){
				imgbox.scrollLeft = 0;
			}else{
				++imgbox.scrollLeft;
			}	
		}
	}
	school();
}