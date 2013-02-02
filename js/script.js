function slideLoad() {
	var ample = $('#wrap').width();
	var alt = $('#wrap').height();
	$('#section_load, #home').width(ample);
	$('#section_load, #home').height(alt);
	
	$('#section_load').css('left',ample);
	$('#section_load').show();
	$('#section_load').css('width','100%');
	$('#section_load').css('height','100%');
	
	$('#section_load').animate({ left: 0 }, {duration: 800,easing: 'easeOutBack'});
	window.setTimeout(function(){$('#section_load').addClass("finished");}, 1000);
}

function trim(str) {
  return str.replace(/^\s+|\s+$/g,"");
}

$(document).ready(function(){
	var l = window.location.href;
	
	if (l.indexOf("#")!=-1){
		var l_elm = l.split("#");
		var id_pagina = trim(l_elm[1]);
        if (id_pagina.indexOf("?")!=-1){
            //判断是否有动态参数
            var phpconfig = id_pagina.split("?");
            id_pagina = phpconfig[0];
            phpconfig = phpconfig[1];
            var urlclass = id_pagina.replace("", ".menu_");
            $(urlclass).addClass("current");
            if ((path_pagina="#") && id_pagina!=""){
                id_pagina = id_pagina.substring();
                var path_pagina = ""+id_pagina+".php?" + phpconfig;
                slideLoad();
                $('#section_load .inner_wrap').html('<div class="preload"></div>');
                $("#section_load .inner_wrap").hide().load(path_pagina).fadeIn(500).addClass("actives");
            }
        }else{
            var urlclass = id_pagina.replace("", ".menu_");
            $(urlclass).addClass("current");
            if ((path_pagina="#") && id_pagina!=""){
                id_pagina = id_pagina.substring();
                var path_pagina = ""+id_pagina+".php";
                slideLoad();
                $('#section_load .inner_wrap').html('<div class="preload"></div>');
                $("#section_load .inner_wrap").hide().load(path_pagina).fadeIn(500).addClass("actives");
            }
        }
	}
	
	$('#footer-container ul li a').click(function(){
		$(this).parent().parent().addClass("inaction");
		if($(".inner_wrap").hasClass("actives")){
			if($(this).hasClass("current")){
				return false;
			}else{
				var contenturl = $(this).attr("href");
                if (contenturl.indexOf("?")!=-1){
                    contenturl = contenturl.split("?");
                    phpconfig = contenturl[1];
                    contenturl = contenturl[0];
                    $('#section_load .inner_wrap').html('<div class="preload"></div>');
                    $("#section_load .inner_wrap").hide().load( "" + contenturl.replace("#", "") + ".php?" + phpconfig ).fadeIn(800).addClass("actives");
                    $("#footer-container ul li a").removeClass("current");
                }else{
                    $('#section_load .inner_wrap').html('<div class="preload"></div>');
                    $("#section_load .inner_wrap").hide().load( "" + contenturl.replace("#", "") + ".php" ).fadeIn(800).addClass("actives");
                    $("#footer-container ul li a").removeClass("current");
                }
				$(this).addClass("current");
				var contenturl = $(this).attr("href");
			}
		}else{
			var contenturl = $(this).attr("href");
			slideLoad();
            if (contenturl.indexOf("?")!=-1){
                contenturl = contenturl.split("?");
                phpconfig = contenturl[1];
                contenturl = contenturl[0];
                $('#section_load .inner_wrap').html('<div class="preload"></div>');
                $("#section_load .inner_wrap").hide().load( "" + contenturl.replace("#", "") + ".php?" + phpconfig ).fadeIn(800).addClass("actives");
            }else{
                $('#section_load .inner_wrap').html('<div class="preload"></div>');
                $("#section_load .inner_wrap").hide().load( "" + contenturl.replace("#", "") + ".php" ).fadeIn(800).addClass("actives");
            }
			var urlclass = $(this).attr("class").replace("menu", ".menu");
			$(urlclass).addClass("current");
		}
	});
	
	$('#back').hover(function(){		
		$("#section_load").stop(true, true).animate({'left':'20px'}, 100);
	},function(){
		$("#section_load").stop(true, true).animate({'left':'0px'}, 100);
  	});
	
	$('#back, #footer-container .home').click(function(){
		$('#section_load').removeClass("finished");
		var ample = $('#wrap').width();
		var alt = $('#wrap').height();
		$('#section_load, #home').width(ample);
		$('#section_load, #home').height(alt);
		
		$("#section_load").animate({'left':$("#section_load").width()},function(){
			$("#section_load").hide();
			$("#home").css('width','100%');
			$("#home").css('height','100%');
		});
		$('#section_load .inner_wrap').html('');
		$("#section_load .inner_wrap").removeClass("actives");
		$("#footer-container ul li a").removeClass("current");
	});
	  	
	$('nav a').click(function(){
		var contenturl = $(this).attr("href");
		slideLoad();
		$('#section_load .inner_wrap').html('<div class="preload"></div>');
		$("#section_load .inner_wrap").hide().load( "" + contenturl.replace("#", "") + ".php" ).fadeIn(800).addClass("actives");
		var urlclass = $(this).attr("class").replace("menu", ".menu");
		$(urlclass).addClass("current");
	});
});