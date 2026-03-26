const mainVisualSlider = new Swiper(".mainVisualSlider", {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: ".mainVisualNext",
        prevEl: ".mainVisualPrev",
    },
    pagination: {
        el: ".mainVisualPagination",
        clickable: true,
    },
});
const exhibitSliderSlider = new Swiper(".exhibitSlider", {
    loop: true,
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
});
const educationSlider = new Swiper(".educationSlider", {
    loop: true,
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 4100,
    },
});
