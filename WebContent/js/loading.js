var imgPath= "img/";

var loadImage = function(path, callback){
	var img = new Image();
	img.onload = function(){
		img.onload = null;
		callback && callback(path);
	}
	img.src = path;
}

var loadingPage = (function(){    
	var sourceArr = ['index-bg.jpg', 
					 'weixin.png',
					 'mbm.png',
					 'qq.png',
					 'sina.png',
					 'index-user.png',
					 'who.png',
		];
	for (var i = 0; i < sourceArr.length; i++) {
		sourceArr[i] = (imgPath + sourceArr[i]);
	};
	var imgLoader = function(imgs, callback){
		var len = imgs.length, i = 0;
		while(imgs.length){
			var path = imgs.shift();
			console.log(path);
			loadImage(path, function(path){
				callback(path, ++i, len);
			});
		}
	}
	imgLoader(sourceArr, function(path, curNum, total){
		var percent = curNum/total;
		if(percent == 1){
			setTimeout(gameLoading,500);
		}
	});
})();

gameLoaded = false;

function gameLoading(){
	if(gameLoaded){
		return;
	}
	gameLoaded = true;
	$(".load").fadeOut("fast");
	$(".wrapper").fadeIn("fast");
}
function gid(o){return document.getElementById(o);}