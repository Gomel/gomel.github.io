$(function() {
	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.png" alt="Квеструм ВЗаперти Минск">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

    $(".youtube").each(function() {
        // Загружаем изображение видео с ютуба
        //$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
    
        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));
    
        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?rel=0&amp;autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
    
            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': '100%' })
    
            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
/*
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
	var mapLoad = false;
 	$(document).ready(function(){
	    $(window).scroll(function(){
	      var currentHeight = $("#map").height();
				if(mapLoad==false){
					if($(this).scrollTop() >= ($(this).height() - currentHeight - 100)){
				    var script = document.createElement("script");
				    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBX6-z8OOYTgBPy95Gkia595iK_Jeji7mk;callback=loadMaps";
				    script.type = "text/javascript";
				    document.getElementsByTagName("head")[0].appendChild(script);	
						mapLoad = true;
					}
				}
	    });
	});
	function loadMap(){
				
		};
*/
});
