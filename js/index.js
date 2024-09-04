// search-box open close jQuery code
let navbar = $(".navbar");
let searchBox = $(".search-box .bx-search");
// let searchBoxCancel = $(".search-box .bx-x");

searchBox.on("click", function () {
    navbar.toggleClass("showInput");
    if (navbar.hasClass("showInput")) {
        searchBox.removeClass("bx-search").addClass("bx-x");
    } else {
        searchBox.removeClass("bx-x").addClass("bx-search");
    }
});

// sidebar open close jQuery code
let navLinks = $(".nav-links");
let menuOpenBtn = $(".navbar .bx-menu");
let menuCloseBtn = $(".nav-links .bx-x");

menuOpenBtn.on("click", function () {
    navLinks.css("left", "0");
});

menuCloseBtn.on("click", function () {
    navLinks.css("left", "-100%");
});

// sidebar submenu open close jQuery code
let htmlcssArrow = $(".htmlcss-arrow");
let moreArrow = $(".more-arrow");
let jsArrow = $(".js-arrow");

htmlcssArrow.on("click", function () {
    navLinks.toggleClass("show1");
});

moreArrow.on("click", function () {
    navLinks.toggleClass("show2");
});

jsArrow.on("click", function () {
    navLinks.toggleClass("show3");
});

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});
(jQuery);

