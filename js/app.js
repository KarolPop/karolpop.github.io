$(document).foundation();
 
	$(function(){
	        $(".title").typed({
	            strings: ["^2000 Witaj na mojej stronie","Adept ^1000 Sztuki Front Endowej :-) "],
	            typeSpeed: 100,
	        });
	    });

	$(".thumbnail").addClass("hidden").viewportChecker({
	        classToAdd: "visible animated bounceInDown",
	        offset: 100
	});

	$(".badge").addClass("hidden").viewportChecker({
        classToAdd: "visible animated fadeInRightBig",
        offset: 100
	});
