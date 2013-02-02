$(document).ready(function(){
    $('#picker').farbtastic(function(color){
        $('#color1').css({'background-color':color});
        $('#wrap').css({'background-color':color});
    });
    $('#picker2').farbtastic(function(color){
        $('#color2').css({'background-color':color});
        $('#section_load').css({'background-color':color});
    });
	$("#color1").click(function () {
		$("#picker2").slideUp(500);
		$("#picker").slideToggle(500);
	});
	$("#color2").click(function () {
		$("#picker").slideUp(500);
		$("#picker2").slideToggle(500);
	});
		
	$('.template_select select').click(function() {
		var valatdf = $(this).val();
		$("#font").attr("href", valatdf);
	});
	$('#home_colors a').each(function(index, element) {
		var color = $(this).attr("href");
		$(this).css({'background-color':color});
	});
	$('#home_colors a').click(function() {
		var color = $(this).attr("href");
		$('#wrap').css({'background-color':color});
		return false;
	});
	$('#inner_colors a').each(function(index, element) {
		var color = $(this).attr("href");
		$(this).css({'background-color':color});
	});
	$('#inner_colors a').click(function() {
		var color = $(this).attr("href");
		$('#section_load').css({'background-color':color});
		return false;
	});
	$('.template_select .control').toggle(function() {
		$(this).removeClass("control_hide");
		$(this).parent().animate({'right':200});
	}, function() {
		$(this).addClass("control_hide");
		$(this).parent().animate({'right':-30});
	});
});