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
            }, 200, 'linear');
            
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
        // Function to update carousel based on screen size
        function updateCarouselForScreenSize() {
            const isMobile = window.innerWidth < 768;
            const slides = carousel.querySelectorAll('.carousel-item');
            
            slides.forEach(slide => {
                const row = slide.querySelector('.row');
                const cards = row.querySelectorAll('.col-lg-4');
                
                if (isMobile) {
                    // On mobile, show one card at a time
                    cards.forEach((card, index) => {
                        if (index > 0) {
                            card.style.display = 'none';
                        } else {
                            card.style.display = 'block';
                        }
                    });
                } else {
                    // On desktop, show all cards
                    cards.forEach(card => {
                        card.style.display = 'block';
                    });
                }
            });
        }

        // Update on load and resize
        updateCarouselForScreenSize();
        window.addEventListener('resize', updateCarouselForScreenSize);

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


    // Handle flip card interactions for both touch and click
    document.querySelectorAll('.flip-card').forEach(card => {
        function toggleFlip(e) {
            e.preventDefault();
            card.classList.toggle('is-flipped');
        }

        // Handle both click and touch events
        card.addEventListener('click', toggleFlip);
        card.addEventListener('touchstart', toggleFlip, { passive: false });
        
        // Reset card on interaction outside
        document.addEventListener('click', function(e) {
            if (!card.contains(e.target)) {
                card.classList.remove('is-flipped');
            }
        });
        
        document.addEventListener('touchstart', function(e) {
            if (!card.contains(e.target)) {
                card.classList.remove('is-flipped');
            }
        }, { passive: true });

        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
            }
        });

        // Make cards focusable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Tap to flip card');
    });

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

