/*toggler btn */
function myFunction(x) {
    x.classList.toggle("change");
}
$(".toggler-btn").click(function(){
    $("nav").toggleClass("open-nav");
});

$(".search button").click(function(){
    $(".search-form").toggleClass("show-search-bar");
});
/* counter up initializer */
$('.counter').counterUp({
    delay: 30,
    time: 2000,
});


/* owl carousel */
$('.owl-three').owlCarousel({
    loop:true,
    nav:false,
    items:2,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
});

$('.owl-two').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,

});

$('.owl-one').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
});

