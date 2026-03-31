const $familySiteBtn = $(".familySiteBtn");
const $familySubMenu = $(".familySiteArea .subMenu");

$familySiteBtn.on("click", function () {
    $(this).toggleClass("selected");
    $familySubMenu.stop().slideToggle(200);
});
