$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        displaySlideQty: 1,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        captions: true,
        pause: 3000,
        pager: true,
        pagerType: "short",
    })(jQuery);
});
