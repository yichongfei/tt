	$(document).ready(function() {
			  $('input').each(function() {
			    $(this).on('focus', function() {
			      $(this).parent('.css').addClass('active');
			    });
			    $(this).on('blur', function() {
			      if ($(this).val().length == 0) {
			        $(this).parent('.css').removeClass('active');
			      }
			    });
			    if ($(this).val() != '') $(this).parent('.css').addClass('active');
			  });
			$("#gallery-content img").each(function(index,element){
		 		$(this).click(function(){
		 			$("#onlypicture").attr("src",$(this).attr("src"));
		 			$("#picture-Modal").modal('show');
		 			
		 		});
		 	});
			});
			
			$(window).load(function() {
				var size = 1;
				var button = 1;
				var button_class = "gallery-header-center-right-links-current";
				var normal_size_class = "gallery-content-center-normal";
				var full_size_class = "gallery-content-center-full";
				var $container = $('#gallery-content-center');
				//将所有的图片,设置为bootstrap样式,圆边
				$("img").addClass("img-rounded");
				$container.isotope({
					itemSelector: 'img'
				});

				function check_button() {
					$('.gallery-header-center-right-links').removeClass(button_class);
					if(button == 1) {
						$("#filter-all").addClass(button_class);
						$("#gallery-header-center-left-title").html('All Galleries');
					}
					if(button == 2) {
						$("#filter-studio").addClass(button_class);
						$("#gallery-header-center-left-title").html('Studio Gallery');
					}
					if(button == 3) {
						$("#filter-landscape").addClass(button_class);
						$("#gallery-header-center-left-title").html('Landscape Gallery');
					}
				}

				function check_size() {
					$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
					if(size == 0) {
						$("#gallery-content-center").addClass(normal_size_class);
						$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
					}
					if(size == 1) {
						$("#gallery-content-center").addClass(full_size_class);
						$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
					}
					$container.isotope({
						itemSelector: 'img'
					});
				}

				$("#filter-all").click(function() {
					$container.isotope({
						filter: '.all'
					});
					button = 1;
					check_button();
				});
				$("#filter-studio").click(function() {
					$container.isotope({
						filter: '.studio'
					});
					button = 2;
					check_button();
				});
				$("#filter-landscape").click(function() {
					$container.isotope({
						filter: '.landscape'
					});
					button = 3;
					check_button();
				});
				$("#gallery-header-center-left-icon").click(function() {
					if(size == 0) {
						size = 1;
					} else if(size == 1) {
						size = 0;
					}
					check_size();
				});

				check_button();
				check_size();
			});