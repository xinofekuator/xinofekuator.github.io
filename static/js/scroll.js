$(document).ready(function() {
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });
});

var cbpAnimatedHeader = (function() {
    var changeHeaderOn = 200, scrollDebounce = 250;

    function scrollPage() {
      $('.navbar-default').toggleClass('navbar-scroll', scrollY() >= changeHeaderOn);
    }

    function scrollY() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

    window.addEventListener('scroll', function() { setTimeout(scrollPage, scrollDebounce); }, false);
})();

// Activate WOW.js plugin for animation on scroll
// Disabled on mobile: visibility:hidden + scroll/resize reveal polling causes
// scroll jumps at the bottom of the page on Android Chrome.
new WOW({ mobile: false }).init();
