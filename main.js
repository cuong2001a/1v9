// slider 
$(document).ready(function () {
        owl.owlCarousel({
        loop: true,       // Enable looping
        margin: 24,       // Space between items
        nav: false,       // Disable default nav
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});

// collapse
document.querySelectorAll('.collapse-button').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            arrow.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 stroke-width="1.5" stroke="currentColor" aria-hidden="true" 
                 class="h-5 w-5 text-purple-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 8.25 7.5 7.5 7.5-7.5"></path>
            </svg>
        `; // Mũi tên lên
        } else {
            content.style.display = 'none';
            arrow.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 stroke-width="1.5" stroke="currentColor" aria-hidden="true" 
                 class="h-5 w-5 text-purple-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
            </svg>
        `; // Mũi tên xuống
        }
    });
});

// AOS animation
$(function() {
    const $carousel = $('.carousel');
    const cardWidth = $('.card').outerWidth(true);
    const totalWidth = $('.card').length * cardWidth;
    let position = 0, direction = 1;

    setInterval(() => {
        position += direction * 2;
        if (position >= totalWidth - $('.container').width() || position <= 0) {
            direction *= -1;
            position += direction * 2; // Điều chỉnh vị trí để không bị dừng
        }
        $carousel.css('transform', `translateX(-${position}px)`);
    }, 50);
});