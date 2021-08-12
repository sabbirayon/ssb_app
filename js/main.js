$(document).ready(function(){

$(window).on("scroll",function(){
    if ($(this).scrollTop() > 90){
        $(".navbar").addClass("navbar-shrink");
    }
    else{
        $(".navbar").removeClass("navbar-shrink");
    }
});

// Carousel//
$('.features-carousel').owlCarousel({
    loop:true,
    margin:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

});