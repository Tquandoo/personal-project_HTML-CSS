// document.querySelector(".overlay .btn").addEventListener("click", function () {
//   window.location.href = "link-to-product-detail.html"; // thay đổi URL tới trang chi tiết sản phẩm của bạn
// });
document.addEventListener("DOMContentLoaded", function () {
  var cartIcons = document.querySelectorAll(".cart-icon");

  cartIcons.forEach(function (cartIcon) {
    cartIcon.addEventListener("click", function () {
      showToast();
    });
  });
});
function showToast() {
  var toast = document.querySelector(".toast");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 5000); // Toast sẽ tự động ẩn sau 5 giây
}

function change_image(image) {
  var container = document.getElementById("main-image");

  container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function (event) {});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider .list");
  const items = document.querySelectorAll(".slider .list .item");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const dots = document.querySelectorAll(".slider .dots li");

  let activeIndex = 0;

  function updateSlider() {
    slider.style.left = -items[activeIndex].offsetLeft + "px";

    // Cập nhật active dot
    document
      .querySelector(".slider .dots li.active")
      .classList.remove("active");
    dots[activeIndex].classList.add("active");
  }

  nextBtn.addEventListener("click", function () {
    activeIndex = (activeIndex + 1) % items.length; // Cycle around to first item
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    activeIndex = (activeIndex - 1 + items.length) % items.length; // Cycle around to last item
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activeIndex = index;
      updateSlider();
    });
  });

  let autoSlideInterval = setInterval(() => {
    nextBtn.click();
  }, 3000);

  // Pause khi di chuột lên trên và tiếp tục khi di chuột ra ngoài
  slider.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
      nextBtn.click();
    }, 3000);
  });

  // Cập nhật vị trí của slider khi cửa sổ thay đổi kích thước
  window.addEventListener("resize", updateSlider);
});

// pagination

$(".pagination-inner a").on("click", function () {
  $(this).siblings().removeClass("pagination-active");
  $(this).addClass("pagination-active");
});

// checkout

function checkOut() {
  let check = document.getElementById("checkout");
  check.addEventListener("click", function () {
    showToast();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  checkOut();
});
