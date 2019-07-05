
// // $("li").find("a").click(function(e) {
// //     e.preventDefault();
// //     var section = $(this).attr("href");
// //     $("html, body").animate({
// //         scrollTop: $(section).offset().top
// //     });
// // });


// $(function() {

// 	$('ul.nav a').bind('click',function(event){
// 		var $anchor = $(this);
// 		//console.log(($anchor.attr('href')).offset())
// 		// $('html, body').stop().animate({
// 		// 	scrollTop: $($anchor.attr('href')).offset().top
// 		// }, 1500,'easeInOutExpo');
		
// 		//if you don't want to use the easing effects:
// 		$('html, body').stop().animate({
// 			scrollTop: $($anchor.attr('href')).offset().top
// 		}, 100000);
		
// 		event.preventDefault();
// 	});
// });

$(function() {
    // Animate to section when nav is clicked
    $('ul.nav a').bind('click',function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        // console.log($(this).text());
        var textName = $(this).text();
        

            var scrollDistance = $(heading).offset().top;
            console.log(heading)
            $('html, body').animate({
                scrollTop: scrollDistance + 'px'
            }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

            // Hide the menu once clicked if mobile
            
        
        })

})