$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 300;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html,body').animate({scrollTop: position}, speed, "swing");
		return false;
	});
	var kikumon_text1 = $("#kikumon-use-text1");
	var kikumon_text2 = $("#kikumon-use-text2");
	word_list(kikumon_text1.find("s1"));
	word_list(kikumon_text2.find("s1"));
	function word_list(s1_elements){
		var score = -1;
		var intervalId = setInterval(function(){
			if(score < s1_elements.length - 1){
				score++;
				$(s1_elements[score]).css('opacity', '1');
			} else {
				clearInterval(intervalId);
			}
		}, 100);
	}
});
