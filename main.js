const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
const headerElement = document.getElementById("menu");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition)
    if (scrollPosition > 0.01) {
        headerElement.style.backgroundColor = "white";
    }else{
        headerElement.style.backgroundColor = "";
    }
});
