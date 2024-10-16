function zoomImages(className) {
  $(`.${className}`)
    .unbind("click")
    .on("click", function () {
      $("#div-zoom-area").css("display", "block");
      $("#img-zoom-area-content").attr("src", $(this)[0].src);

      $("#div-zoom-area").on("click", function () {
        $(this).css("display", "none");
      });
    });
}

(function ($) {
  "use strict";

  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({
    target: "#sideNav",
  });

  if (window.innerWidth < 992) {
    alertify.success("皆さん、良い一日をお過ごしください！", 5);
  } else {
    alertify.set("notifier", "position", "top-right");
    alertify.success(" HoangPhongのポートフォリオサイトへようこそ！", 5);
  }

  zoomImages("img-zoomable");
})(jQuery);

// Lấy modal
var modal = document.getElementById("modal");
var img = document.getElementsByClassName("zoomable");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

// Lặp qua tất cả các hình ảnh
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "flex"; // Hiện modal
    modalImg.src = this.src; // Lấy src của hình ảnh đang nhấn
  };
}

// Khi nhấn vào biểu tượng đóng, ẩn modal
span.onclick = function () {
  modal.style.display = "none";
};

// Khi nhấn ra ngoài hình ảnh, ẩn modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Khi nhấn phím Esc, ẩn modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
