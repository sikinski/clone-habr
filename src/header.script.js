const headerPopupBtn = document.querySelector('.header__open-popup-btn');

const headerPopupEl = document.querySelector('.header__content .header__wrapper-popup');

const overlay = document.querySelector('.overlay');
console.log(overlay);

console.log(headerPopupEl);
/* почини это пж )) */
headerPopupBtn.addEventListener('click', function () {
    headerPopupEl.style.display = (headerPopupEl.style.display == 'none') ? 'block' : 'none';
    // headerPopupBtn.classList.contains = (headerPopupBtn.classList('fa-chevron-down')) ? 'fa-chevron-up' : ' fa-chevron-down';

    // if (headerPopupEl.classList.contains("header__services-popup")) {
    //     overlay.classList.remove("hidden");
    //   }
    //   overlay.addEventListener("click", function () {
    //     headerPopupEl.classList.add("hidden");
    //     overlay.classList.add("hidden");
    //   });
})