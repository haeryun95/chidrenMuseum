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
    navigation: {
        nextEl: ".exhibitNext",
        prevEl: ".exhibitPrev",
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
    navigation: {
        nextEl: ".educationNext",
        prevEl: ".educationPrev",
    },
});

const exhibitPause = document.querySelector(".exhibitPause");

exhibitPause.addEventListener("click", () => {
    const isActive = exhibitPause.classList.toggle("active");

    if (isActive) {
        exhibitSliderSlider.autoplay.start();
        exhibitPause.style.backgroundImage = "url('/image/btn_swiper_stop.png')";
    } else {
        exhibitSliderSlider.autoplay.stop();
        exhibitPause.style.backgroundImage = "url('/image/btn_swiper_play.png')";
    }
});

const educationPause = document.querySelector(".educationPause");

educationPause.addEventListener("click", () => {
    const isActive = educationPause.classList.toggle("active");

    if (isActive) {
        educationSlider.autoplay.start();
        educationPause.style.backgroundImage = "url('/image/btn_swiper_stop.png')";
    } else {
        educationSlider.autoplay.stop();
        educationPause.style.backgroundImage = "url('/image/btn_swiper_play.png')";
    }
});
