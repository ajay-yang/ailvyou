$(function () {
//---导航栏固定

//---焦点图 
	var _left = 710;
	var left = -_left;
	function mainShow() {
		if(left == -6390 || left == 0) {
			_left = -_left;
		}
		$('.wrap').stop().animate({'left':left},1000);
		left = left - _left;
		timer = setTimeout(mainShow,5000);
	}
	mainShow();
	// 鼠标滑过图片停止
	$('div.v').hover(
		function() {
			clearTimeout(timer);
			$('.thumbpics').fadeIn();
		},
		function() {
			$('.thumbpics').fadeOut();
			timer = setTimeout(mainShow,5000);
		}
	);
	// 鼠标滑过缩略图切换图片
	$('.thumbpics li').mouseover(function () {
		var key = $(this).parent().find('li').index(this);
		left = key * -710;
		clearTimeout(timer);
		$('.wrap').stop().animate({'left':left},1000);
		if(left == -6390) {
			left = -6390 + 710;
		}
		if(left == 0) {
			left = -710;
		}
		$(this).parent().find('li').css('background','none');
		$(this).parent().find('li').get(key).style.background = 'orange';
	});



//-----展示列表动画
	$('.thumb li').hover(function () {
		$(this).find('.cover').stop(true,true).slideDown(300);
	  	$(this).children("p").stop(true,true).animate({"bottom":0},300);
	},function (){
		$(this).find('.cover').stop(true,true).slideUp(300);
		$(this).children("p").stop(true,true).animate({"bottom":-40},300);
	});
	
	

//---竖屏滚动 
	function removeWhitespace(xml) {
		var loopIndex;
		for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++){
			var currentNode = xml.childNodes[loopIndex];
			if (currentNode.nodeType == 1){
				removeWhitespace(currentNode);
			}
	
			if (((/^\s+$/.test(currentNode.nodeValue))) && (currentNode.nodeType == 3)){
				xml.removeChild(xml.childNodes[loopIndex--]);
			}
		}
	};
	var rollObj = document.getElementsByClassName('wbdesc')[0];
	removeWhitespace(rollObj);
	var firstChild = rollObj.firstChild;
	var firstChildHeight = firstChild.offsetHeight;
	rollObj.style.top = - firstChildHeight - 10 + 'px';
	var h = parseInt(rollObj.style.top);
	var n = h;
	function autoRoll() {
		n = n + Math.abs(h / 100);
		if(n <= 0) {
			rollObj.style.top = n + 'px';
			window.setTimeout(arguments.callee,30);
		} else {
			firstChild = rollObj.lastChild.cloneNode(true);
			rollObj.removeChild(rollObj.lastChild);
			rollObj.insertBefore(firstChild,rollObj.firstChild);
			firstChildHeight = firstChild.offsetHeight;
			rollObj.style.top = - firstChildHeight - 10 + 'px';
			h = parseInt(rollObj.style.top);
			n = h;
			window.setTimeout(arguments.callee,3000);
		}

	}
	autoRoll();


//---微信二维码 
	$('.weixin').hover(
		function () {
			$('.wximg').fadeIn(300);
		},
		function () {
			return false;
		}
	);
	$('.wximg').hover(
		function () {
			return false;
		},
		function () {
			$('.wximg').fadeOut(300);
		}
	);
});