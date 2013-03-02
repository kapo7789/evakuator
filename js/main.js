$(document).ready(function(){
	mainmenu = $('.mainmenu');
	main_call = $('#main_call');
	main_info = $('#main_info');
	main_exit = $('#main_exit');
	footer = $('.footer');
	all = $('.footer, .mainmenu');
	info = $('.info');
	info_back = $('#info_back');
	goodbye = $('.goodbye');
	narrow = $('.narrowlogo');
	main = $('.mainstuff');
	phone = $('.phone');
	phone_back = $('#phone_back');
	finish = $('#finish');
	cont = $('#continue');

	main_exit.on('click',function(){
		all.hide('slow',function(){goodbye.show('slow'); narrow.show(); });
	});

	main_info.on('click',function(){
		all.hide(0,function(){ info.show(); narrow.show(); });
	});

	info_back.on('click',function(){
		narrow.hide();
		info.hide(0,function(){ all.show('slow'); });
	});

	// MAIN !!!!
	main_call.on('click',function(){
		all.hide(0,function(){
			narrow.show();
			main.show(0,function(){
				initialize();
				cont.on('click',function(){
					main.hide();
					phone.show(0,function(){
						$('#finish').on('click',function(){
							phone.hide('slow',function(){
								$('.success').show('slow');
							});
						});
					});
				});
			});
			$('#main_back').on('click',function(){
				narrow.hide();
				main.hide(0,function(){ all.show('slow'); });
			});
		});
	});



});

 var map;

      function initialize() {
        var mapOptions = {
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('gmap'),
            mapOptions);

        // Try HTML5 geolocation
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
              map: map,
              position: pos,
              content: 'Location found using HTML5.'
            });

            map.setCenter(pos);
          }, function() {
            handleNoGeolocation(true);
          });
        } else {
          // Browser doesn't support Geolocation
          handleNoGeolocation(false);
        }
      }

      function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
          var content = 'Error: The Geolocation service failed.';
        } else {
          var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
          map: map,
          position: new google.maps.LatLng(43.228695,76.903782),
          content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
      }
google.maps.event.addDomListener(window, 'load', initialize);