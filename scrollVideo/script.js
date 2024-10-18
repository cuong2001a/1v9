const videos = document.querySelectorAll(".video");

// Lắng nghe sự kiện cuộn
const checkVideos = () => {
  let isAnyVideoPlaying = false;

  videos.forEach((video) => {
    const rect = video.getBoundingClientRect();

    // Kiểm tra xem video có nằm trong vùng nhìn thấy không
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      video.pause(); // Tạm dừng video nếu không nằm trong vùng nhìn thấy
    } else {
      // Nếu video nằm trong vùng nhìn thấy
      if (!video.paused) {
        isAnyVideoPlaying = true; // Đánh dấu có video đang phát
      } else {
        video.play().catch((error) => {
          console.error("Không thể phát video:", error);
        });
      }
    }
  });

  // Dừng tất cả video nếu không còn video nào đang phát
  if (!isAnyVideoPlaying) {
    videos.forEach((video) => {
      video.pause();
    });
  }
};

window.addEventListener("scroll", checkVideos);

// Xử lý khi video phát
videos.forEach((video) => {
  video.addEventListener("play", () => {
    // Dừng tất cả các video khác khi video này được phát
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// Các sự kiện cuộn lên/xuống
document.getElementById("scroll-up").addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.scrollBy({
    top: -window.innerHeight,
    behavior: "smooth",
  });
});

document.getElementById("scroll-down").addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});
