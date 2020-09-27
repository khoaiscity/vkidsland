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
    var player01 = document.getElementById('player01');
    $('.bd-example-modal-lg-01').on('hide.bs.modal', function (e) {
        player01.pause();
    })

    var player03 = document.getElementById('player03');
    $('.bd-example-modal-lg-03').on('hide.bs.modal', function (e) {
        player03.pause();
    })

    var player04 = document.getElementById('player04');
    $('.bd-example-modal-lg-04').on('hide.bs.modal', function (e) {
        player04.pause();
    })

    var player05 = document.getElementById('player05');
    $('.bd-example-modal-lg-05').on('hide.bs.modal', function (e) {
        player05.pause();
    })

    var player06 = document.getElementById('player06');
    $('.reward-modal-lg-01').on('hide.bs.modal', function (e) {
        player06.pause();
    })

    var player07 = document.getElementById('player07');
    $('.reward-modal-lg-02').on('hide.bs.modal', function (e) {
        player07.pause();
    })

    var player08 = document.getElementById('player08');
    $('.reward-modal-lg-03').on('hide.bs.modal', function (e) {
        player08.pause();
    })

    var player09 = document.getElementById('player09');
    $('.reward-modal-lg-04').on('hide.bs.modal', function (e) {
        player09.pause();
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


