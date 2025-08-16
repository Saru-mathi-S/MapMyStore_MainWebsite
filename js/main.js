(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 300, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Services Carousel Configuration
    const carousel = document.getElementById('carouselExampleIndicators');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function (e) {
            const slides = this.querySelectorAll('.carousel-item');
            const totalSlides = slides.length;
            const currentSlide = e.to;
            
            // Disable/enable previous button
            const prevButton = document.querySelector('[data-bs-slide="prev"]');
            if (prevButton) {
                prevButton.style.opacity = currentSlide === 0 ? '0.5' : '1';
                prevButton.style.pointerEvents = currentSlide === 0 ? 'none' : 'all';
            }
            
            // Disable/enable next button
            const nextButton = document.querySelector('[data-bs-slide="next"]');
            if (nextButton) {
                nextButton.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
                nextButton.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'all';
            }
        });
    }


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
})(jQuery);

