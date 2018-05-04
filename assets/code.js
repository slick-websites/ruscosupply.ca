/**
==== Rusco Website JS Code ====
---- Copyright 2014 Chase Moskal
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
				addSlide("http://i.imgur.com/Bctv6X3h.jpg","Professional installation from experienced experts");
				addSlide("http://i.imgur.com/GozYYdNh.jpg","Free home consultations!");
				addSlide("http://i.imgur.com/eO7sc2Sh.jpg","We specialize in window restorations");
				about.slideshow = new slick.Slideshow($slides)
					.setTimings({fade:4,hold:8})
					.start();
			
			} else {
				addSlide("http://i.imgur.com/Bctv6X3h.jpg","Professional installation from experienced experts");
			}
			
			$slideshow.append($slides);
		};
	});
};


/*
		FILE ARCHIVED ON 08:43:36 Oct 14, 2017 AND RETRIEVED FROM THE
		INTERNET ARCHIVE ON 21:48:22 May 04, 2018.
		JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

		ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
		SECTION 108(a)(3)).
*/
/*
playback timings (ms):
	LoadShardBlock: 738.128 (3)
	esindex: 0.011
	captures_list: 804.73
	CDXLines.iter: 10.465 (3)
	PetaboxLoader3.datanode: 724.138 (4)
	exclusion.robots: 0.193
	exclusion.robots.policy: 0.169
	RedisCDXSource: 51.413
	PetaboxLoader3.resolve: 479.902
	load_resource: 557.77
*/