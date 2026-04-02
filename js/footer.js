const $familySiteBtn = $(".familySiteBtn");
const $footerSubMenu = $(".familySiteBtn .subMenu");

$familySiteBtn.on("click", function () {
    $(this).toggleClass("selected");
    if ($(this).hasClass("selected")) {
        $footerSubMenu.slideDown(100);
    } else {
        $footerSubMenu.slideUp(100);
    }
});
