// Slick slider
$(document).ready(function () {
  $(".quote-list").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

let headerMenu = document.querySelector(".header-menu");
let toggleMenu = document.querySelector(".header-toggle");
let classExpand = "is-expand";
toggleMenu.addEventListener("click", () => {
  headerMenu.classList.add(classExpand);
});
window.addEventListener("click", (e) => {
  if (!headerMenu.contains(e.target) && !e.target.classList.contains("header-toggle")) {
    headerMenu.classList.remove(classExpand);
  }
})
