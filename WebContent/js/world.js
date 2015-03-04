function changeRank(tips) {
	if(tips === 1) {// 好友排名
		$(".left").addClass("hover");
		$(".right").removeClass("hover");
		// TODO 测试代码
		$(".no-friend").show();
		$(".has-friend").hide();
	}
	if(tips === 2) {// 世界排名
		$(".left").removeClass("hover");
		$(".right").addClass("hover");
		// TODO 测试代码
		$(".no-friend").hide();
		$(".has-friend").show();
	}
}
