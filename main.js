$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 300;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html,body').animate({scrollTop: position}, speed, "swing");
		return false;
	});

	word_list("kikumon-use-text1");
	word_list("kikumon-use-text2");

	function word_list(id){
		var s1_all = document.getElementById(id).children;
		var score = -1;
		setInterval(function(){
			if(score < s1_all.length - 1){
				score++;
				s1_all[score].style.opacity = "1";
			}
		}, 100);
	}
});
