function popIncrease() {
	var num = parseInt($(".numbers").text());
	var gold = parseInt($("#gold-price").val());
	console.debug(num);
	num += 1;
	$(".numbers").text(num);
	$(".pop-gold span").text(num * gold);
}
function popDecrease() {
	var num = parseInt($(".numbers").text());
	var gold = parseInt($("#gold-price").val());
	console.debug(num);
	if(num > 1) {
		num -= 1;
		$(".numbers").text(num);
		$(".pop-gold span").text(num * gold);
	}
}
function popColse() {
	$(".pop").removeClass("zoomInDown");
	$(".pop").addClass("zoomOutUp");
	$(".pop-bg").fadeOut("normal");
}
function popBuy() {
	popColse();
}
function showPopCharge(type) {
	$(".pop").removeClass("zoomOutUp");
	$(".pop").addClass("zoomInDown");
	$(".pop").show();
	$(".pop-bg").show();
}
function hidePopCharge() {
	
}
