	$(document).ready(function(){
	// Инициализации гугл карты
	( function( $, window, document, undefined ){
		$( '#map' ).lazyLoadGoogleMaps({
			callback: function(container, map){
				var styledMapType = new google.maps.StyledMapType(


[
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
],
            {name: 'Styled Map'});

				var $container=$(container),
				center=new google.maps.LatLng($container.attr('data-lat'),$container.attr('data-lng'));
				map.setOptions({ zoom: 17, center: center, scrollwheel: false });
				var marker = new google.maps.Marker({
					position: center,
					map: map,
					animation: google.maps.Animation.BOUNCE
				});
				/*var infowindow = new google.maps.InfoWindow({
					content: 'Котовского 56а'
				});*/
				map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
				infowindow.open(map, marker);		
			}
		});
	})( jQuery, window, document );
});