$(document).foundation();

 
	$(function(){
	        $(".title").typed({
	            strings: ["Witaj na mojej stronie","Adept ^1000 Sztuki Front Endowej :-) "],
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

	$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    });

    $(window).load(function() {
        $(".loader").fadeOut("slow");
    })

    $("#contact-form").submit(function(e) {
        var name = $("#inputName")
        var email = $("#inputEmail")
        var message = $("#inputMessage")
        
        if(name.val() == "" || email.val() == "" || message.val() == "") {
            $(".submit-fail").html("<h5>Przed wysłaniem wiadomości wypełnij formularz.</h5>").fadeIn(1000);
            return false;
            } else {
            $.ajax({
                method: "POST",
                url: "https://formspree.io/karolpoplawski@gmail.com",
                data: $("#contact-form").serialize(),
                datatype: "json"
            });
            e.preventDefault();
            $(this).get(0).reset();
            $(".submit-success").html("<h5>Dziękuję za przesłaną wiadomość.</h5>").fadeIn(1000);
        }
    });
      
    $(".submit-fail, .submit-success").click(function() {
        $(this).hide();
    })

    $(function(){
 
        $(document).on( 'scroll', function(){
     
            if ($(window).scrollTop() > 200) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
 
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });
 
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }