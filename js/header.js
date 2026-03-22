// const otherMuseum = document.querySelector(".otherMuseum");
// const gnbMenu = document.querySelector(".gnbMenu");
// const gnbBackground = document.querySelector(".gnbBackground");

// const openMenu = () => {
//     gnbMenu.classList.add("menuOver");
//     otherMuseum.classList.remove("selected");
// };

// const closeMenu = () => {
//     gnbMenu.classList.remove("menuOver");
// };

// otherMuseum.addEventListener("click", () => {
//     otherMuseum.classList.toggle("selected");
// });

// [gnbMenu, gnbBackground].forEach((el) => {
//     el.addEventListener("mouseenter", openMenu);
//     el.addEventListener("mouseleave", closeMenu);
// });

const $otherMuseum = $(".otherMuseum");
const $otherMuseumSubMenu = $(".otherMuseum .subMenu");
const $gnbMenu = $(".gnbMenu");
const $gnbSubMenu = $(".gnbSubMenu");
const $gnbBackground = $(".gnbBackground");

$otherMuseum.on("click", function () {
  $(this).toggleClass("selected");
  if ($(this).hasClass("selected")) {
    $otherMuseumSubMenu.slideDown(200);
  } else {
    $otherMuseumSubMenu.slideUp(200);
  }
});

const openMenu = () => {
  $otherMuseum.removeClass("selected");
  $gnbMenu.addClass("menuOver");
  $gnbSubMenu.show();
  $gnbBackground.show();
};

const closeMenu = () => {
  $gnbMenu.removeClass("menuOver");
  $gnbSubMenu.hide();
  $gnbBackground.hide();
};

$gnbMenu
  .add($gnbSubMenu)
  .add($gnbBackground)
  .on("mouseenter", openMenu)
  .on("mouseleave", closeMenu);

// search form area
const $searchFormOpenBnt = $(".searchBtn");
const $searchFormArea = $(".searchFormBox");
const $searchFormModal = $(".mobileModal");
const $searchFormCloseBnt = $(".closeSearch");

const openSearchArea = () => {
  $searchFormModal.show();
  $searchFormArea.show();
};

const closeSearchArea = () => {
  $searchFormModal.hide();
  $searchFormArea.hide();
};

$searchFormOpenBnt.on("click", openSearchArea);
$searchFormCloseBnt.on("click", closeSearchArea);
