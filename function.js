  var index = 1;
	var obox = document.getElementsByClassName('box')[0]; 
	var ospan = document.getElementsByTagName('span');
	var owarp = document.getElementsByClassName('warp')[0];
	var timer;
	var autotimer;
	//自动播放
	owarp.onmouseover = stop;
    owarp.onmouseout = play;
    play();

	function left() {
		index--;
		if (index==-1) {
			
			index=4;
			obox.style.left ="-2500px";
		}
		heart();
		for (var i = 0; i < ospan.length; i++) {
				ospan[i].className = "";
			}
		if (index<1) {
			ospan[4].className = "red";
		}else{
			ospan[index-1].className = "red";
		}
		
	}//点击左边的


	function right() {
		index++;
		if (index==7) {

			index=2;
			obox.style.left ="-500px";
		}
		heart();
		for (var i = 0; i < ospan.length; i++) {
				ospan[i].className = "";
		}
		if (index>5) {
			ospan[0].className = "red";
		}else{
			ospan[index-1].className = "red";
		}
		
	}//点击右边的


	for (var i = 0; i < ospan.length; i++) {
		ospan[i].index = i;
		ospan[i].onclick = function(){
			for (var i = 0; i < ospan.length; i++) {
				ospan[i].className = "";
			}
			ospan[this.index].className = "red";
			index = this.index+1;
			heart();
		}
	}//点击小圆点
	

	function play(){
		autotimer = setInterval(function(){
			right();
		},2000);
	}//自动播放函数

	function stop(){
		clearInterval(autotimer);
	}//停止

	function heart(){
		var l = index * (-500) - obox.offsetLeft;
		var count = 0;
		clearInterval(timer);
		timer = setInterval(function(){
			obox.style.left = obox.offsetLeft + (l/10) + "px";
			count++;
			if (count>=10) {
				obox.style.left = index*-500+"px";
				clearInterval(timer);
			}	
		},20);	
	}//这个轮播图的核心
