$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 300;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html,body').animate({scrollTop: position}, speed, "swing");
		return false;
	});
	var asobisarch_text = get_d("asobisarch-use-text");
	word_list(asobisarch_text.textContent);
	function get_d(name){
		return document.getElementById(name);
	}
	function get_t(name){
		return document.getElementsByTagName(name);
	}
	function word_list(name){
		var s1_all = get_t("s1");
		var score = -1;
			setInterval(function(){
				if(score <= 12){
					score++;
					s1_all[score].style.opacity = "1";
				}
			}, 100);	
	}

});
