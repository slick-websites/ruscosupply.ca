/**==== Rusco Website JS Code ====
---- Copyright 2018 Chase Moskal 
**/

window.website=new function Website(){
	var website=this;
	$(function whenDocumentIsReady(){
		
		/*== Navigation ==*/
		slickPages.onNavigate(function(page,details){
			var $pages=$('.page');
			$pages.stop(true,true).fadeOut(200);
			setTimeout(function(){
				$pages.filter('.'+(page ?page.label :'notfound')).fadeIn(200);
			},200);
			var $navButtons=$('header nav a').removeClass('active');
			if (page) $navButtons.filter('[slickpage="'+page.label+'"]').addClass('active');
		});
		slickPages.run();
		
		/*== About Page ==*/
		website.about = new function AboutPage(){
			var about=this;
			var $slideshow = about.$slideshow = $('.slideshow');
			
			var $slides = $();
			function addSlide(filename,blurb){
				$slides = $slides.add(
					$('<figure></figure>')
						.css({ backgroundImage:'url("'+filename+'")' })
						.append( 
							$('<figcaption></figcaption>')
								.text(blurb)
						)
				);
			};
			
			if (sc.optimize.opulent) {
				addSlide("assets/imgur/Bctv6X3h.jpg","Professional installation from experienced experts");
				addSlide("assets/imgur/GozYYdNh.jpg","Free home consultations!");
				addSlide("assets/imgur/eO7sc2Sh.jpg","We specialize in window restorations");
				about.slideshow = new slick.Slideshow($slides)
					.setTimings({fade:4,hold:8})
					.start();
			
			} else {
				addSlide("assets/imgur/Bctv6X3h.jpg","Professional installation from experienced experts");
			}
			
			$slideshow.append($slides);
		};
	});
};

