$(document).ready(function () {
    if ($(window).width() < 600) {
        startCarousel();
    } else {
        $('.section3 .owl-carousel').addClass('off');
    }
});
$(window).resize(function () {
    if ($(window).width() < 600) {
        startCarousel();
    } else {
        stopCarousel();
    }
});
function startCarousel() {
    $('.section3 .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });
}
function stopCarousel() {
    var owl = $('.section3 .owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}

//######################################################################3

$(document).ready(function () {
    $('.section6 .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });
});