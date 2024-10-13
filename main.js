// slider
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true, // Enable looping
    margin: 24, // Space between items
    nav: false, // Disable default nav
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

// collapse
document.querySelectorAll(".collapse-button").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      arrow.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 stroke-width="1.5" stroke="currentColor" aria-hidden="true" 
                 class="h-5 w-5 text-purple-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 8.25 7.5 7.5 7.5-7.5"></path>
            </svg>
        `; // Mũi tên lên
    } else {
      content.style.display = "none";
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
$(function () {
  const $carousel = $(".holderBoxCarousel");
  const cardWidth = $(".holderBoxCard").outerWidth(true);
  const totalWidth = $carousel[0].scrollWidth;
  let position = 0;
  let direction = 1;

  setInterval(() => {
    position += direction * 2; // Tăng vị trí để cuộn
    if (position >= totalWidth - cardWidth * 3 || position <= 0) {
      direction *= -1; // Đảo chiều khi đến cuối hoặc đầu
      position += direction * 2; // Điều chỉnh vị trí để không bị dừng
    }
    $carousel.css("transform", `translateX(-${position}px)`); // Di chuyển carousel
  }, 20); // Tốc độ chuyển động
});

// include header and footer
$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});
