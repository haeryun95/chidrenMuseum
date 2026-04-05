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

////mobile
$(function () {
  const $menuBtn = $(".hamburgerBtn");
  const $menu = $(".mobileGnb");
  const $dim = $(".mobileGnbBackground");
  const $menuCloseBtn = $(".menuCloseBtn");
  const $depth1 = $(".mobileGnbMenu > li > a");

  function openDim() {
    $dim.addClass("isOpen");
    $("body").addClass("mobileLayerOpen");
  }

  function closeDim() {
    $dim.removeClass("isOpen");
    $("body").removeClass("mobileLayerOpen");
  }

  function resetDepth() {
    $(".mobileGnbMenu > li").removeClass("active");
    $(".mobileGnbMenu > li > a").removeClass("on");
    $(".mobileGnbSubMenu").stop(true, true).hide();
  }

  function openMenu() {
    $menu.addClass("isOpen");
    openDim();
  }

  function closeMenu() {
    $menu.removeClass("isOpen");
    resetDepth();
    closeDim();
  }

  function closeAllLayers() {
    closeMenu();
  }

  $menuBtn.on("click", function (e) {
    e.preventDefault();

    if ($menu.hasClass("isOpen")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $menuCloseBtn.on("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  $dim.on("click", function () {
    closeAllLayers();
  });

  $depth1.on("click", function (e) {
    const $this = $(this);
    const $parent = $this.parent("li");
    const $subMenu = $this.next(".mobileGnbSubMenu");

    if ($subMenu.length) {
      e.preventDefault();

      if ($parent.hasClass("active")) {
        $parent.removeClass("active");
        $this.removeClass("on");
        $subMenu.stop(true, true).slideUp(220);
      } else {
        $(".mobileGnbMenu > li").removeClass("active");
        $(".mobileGnbMenu > li > a").removeClass("on");
        $(".mobileGnbSubMenu").stop(true, true).slideUp(220);

        $parent.addClass("active");
        $this.addClass("on");
        $subMenu.stop(true, true).slideDown(240);
      }
    }
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllLayers();
    }
  });
});
