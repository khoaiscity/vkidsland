$(document).ready(function () {
    "use strict";
    BackToTop();
    videoPopup();
});

window.onload = function () {
    video = document.querySelector('video');
    if (video) {
        video.setAttribute("controlsList", "nodownload");
    }
};

$(window).scroll(function () {
    var $header = $(".header-main");
    $header.toggleClass('scrolled', $(this).scrollTop() > 20);
});

$(document).on('click', '.js-videoPoster', function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
});

// Video Play
function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');
    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src', src);
}

function videoPopup() {
    console.log('Ready');
    var player0 = document.getElementById('player0');
    $('.bd-example-modal-lg-0').on('hide.bs.modal', function (e) {
        player0.pause();
    })

    var player1 = document.getElementById('player1');
    $('.bd-example-modal-lg-1').on('hide.bs.modal', function (e) {
        player1.pause();
    })

    var player2 = document.getElementById('player2');
    $('.bd-example-modal-lg-2').on('hide.bs.modal', function (e) {
        player2.pause();
    })

    var player3 = document.getElementById('player3');
    $('.bd-example-modal-lg-3').on('hide.bs.modal', function (e) {
        player3.pause();
    })

    var player4 = document.getElementById('player4');
    $('.bd-example-modal-lg-4').on('hide.bs.modal', function (e) {
        player4.pause();
    })

    // Slider of Intro Video up to 10 videos
    var sliderPlayer0 = document.getElementById('slider-player0');
    $('.reward-modal-lg-0').on('hide.bs.modal', function (e) {
        sliderPlayer0.pause();
    })
    var sliderPlayer1 = document.getElementById('slider-player1');
    $('.reward-modal-lg-1').on('hide.bs.modal', function (e) {
        sliderPlayer1.pause();
    })

    var sliderPlayer2 = document.getElementById('slider-player2');
    $('.reward-modal-lg-2').on('hide.bs.modal', function (e) {
        sliderPlayer2.pause();
    })

    var sliderPlayer3 = document.getElementById('slider-player3');
    $('.reward-modal-lg-3').on('hide.bs.modal', function (e) {
        sliderPlayer3.pause();
    })

    var sliderPlayer4 = document.getElementById('slider-player4');
    $('.reward-modal-lg-4').on('hide.bs.modal', function (e) {
        sliderPlayer4.pause();
    })

    var sliderPlayer5 = document.getElementById('slider-player5');
    $('.reward-modal-lg-5').on('hide.bs.modal', function (e) {
        sliderPlayer5.pause();
    })

    var sliderPlayer6 = document.getElementById('slider-player6');
    $('.reward-modal-lg-6').on('hide.bs.modal', function (e) {
        sliderPlayer6.pause();
    })

    var sliderPlayer7 = document.getElementById('slider-player7');
    $('.reward-modal-lg-7').on('hide.bs.modal', function (e) {
        sliderPlayer7.pause();
    })

    var sliderPlayer8 = document.getElementById('slider-player8');
    $('.reward-modal-lg-8').on('hide.bs.modal', function (e) {
        sliderPlayer8.pause();
    })

    var sliderPlayer9 = document.getElementById('slider-player9');
    $('.reward-modal-lg-9').on('hide.bs.modal', function (e) {
        sliderPlayer9.pause();
    })
}

//Back To Top
function BackToTop() {
    $('.scrolltotop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 600) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }
    });
}

// TweenMax Effect

TweenMax.from(".header-logo", 1, {
    delay: 0.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".navbar-nav", 1.2, {
    delay: 0.4,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});

TweenMax.from(".caption-head", 1.6, {
    delay: 0.1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});


TweenMax.from(".banner-title", 1.6, {
    delay: 0.1,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.from(".carousel-caption button", 1.6, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".banner-header-img", 1.8, {
    delay: 0.3,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});


// ScrollReveal effect

var slideUp = {
    origin: 'bottom',
    delay: 100,
    distance: '50px',
    easing: 'ease-in-out',
};

var slideUp2 = {
    origin: 'bottom',
    delay: 130,
    distance: '70px',
    easing: 'ease-in-out',
};

var slideUp3 = {
    origin: 'bottom',
    delay: 160,
    distance: '90px',
    easing: 'ease-in-out',
};

var slideUpSlow = {
    origin: 'bottom',
    delay: 200,
    distance: '200px',
    easing: 'ease-in-out',
};

var slideRight = {
    origin: 'left',
    delay: 30,
    distance: '20px',
    easing: 'ease-in-out',
};

var slideUpFooter5 = {
    origin: 'bottom',
    delay: 0,
    distance: '30px',
    easing: 'ease-in-out',
};

// Landing Animation
ScrollReveal().reveal('.about-us-section', slideUpSlow);
ScrollReveal().reveal('.video-banner-section', slideUpSlow);
ScrollReveal().reveal('.team-section', slideUpSlow);
ScrollReveal().reveal('.awards-section', slideUp);
ScrollReveal().reveal('.products-section-header', slideUp);
ScrollReveal().reveal('.ambassador-container', slideUp);
ScrollReveal().reveal('.address-component', slideUp);
// ScrollReveal().reveal('.slider-photo-container-0', slideUp);
// ScrollReveal().reveal('.slider-photo-container-1', slideUp);
// ScrollReveal().reveal('.slider-photo-container-2', slideUp);
// ScrollReveal().reveal('.slider-photo-container-3', slideUp);
// ScrollReveal().reveal('.slider-photo-container-4', slideUp);
// ScrollReveal().reveal('.slider-photo-container-5', slideUp);

//About Us Animation
ScrollReveal().reveal('#about-us-content', slideUp);
ScrollReveal().reveal('.field-container', slideUp);
ScrollReveal().reveal('.code-value-header', slideUp);
ScrollReveal().reveal('.code-container-1', slideUp);
ScrollReveal().reveal('.code-container-2', slideUp);
ScrollReveal().reveal('.code-container-3', slideUp);
ScrollReveal().reveal('.code-container-4', slideUp);

// Products Animation
ScrollReveal().reveal('#syllabus', slideUp);
ScrollReveal().reveal('.explore-header', slideUp);


// Contact Animation
ScrollReveal().reveal('#headquarter div', slideUp);
ScrollReveal().reveal('#getintouch-section div', slideUp);
ScrollReveal().reveal('#branch div', slideUp);

// Partner Animation
ScrollReveal().reveal('.partner-details', slideUp);
ScrollReveal().reveal('#partner1', slideUp2);
ScrollReveal().reveal('#partner2', slideUp3);

// Footer Animation
ScrollReveal().reveal('.footer-media', slideUpFooter5);


