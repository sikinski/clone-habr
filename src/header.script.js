const headerPopupBtn = document.querySelector('.header__open-popup-btn');
const headerPopupBtnIcon = document.querySelector('.header__open-popup-btn i');


const headerPopupEl = document.querySelector('.header__content .header__wrapper-popup');

const overlay = document.querySelector('.overlay');
console.log(overlay);

console.log(headerPopupEl);

headerPopupBtn.addEventListener('click', function () {
    headerPopupEl.style.display = (headerPopupEl.style.display !== 'block') ? 'block' : 'none';

    if(headerPopupBtnIcon.classList.contains('fa-chevron-down')) {
        headerPopupBtnIcon.classList.remove('fa-chevron-down');
        headerPopupBtnIcon.classList.add('fa-chevron-up');
    } else if(headerPopupBtnIcon.classList.contains('fa-chevron-up')) {
        headerPopupBtnIcon.classList.remove('fa-chevron-up');
        headerPopupBtnIcon.classList.add('fa-chevron-down');
    }
    // if (headerPopupEl.classList.contains("header__services-popup")) {
    //     overlay.classList.remove("hidden");
    //   }
    //   overlay.addEventListener("click", function () {
    //     headerPopupEl.classList.add("hidden");
    //     overlay.classList.add("hidden");
    //   });
})