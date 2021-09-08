const toggleDisplay = function (el) {
    el.style.display = (el.style.display !== 'block') ? 'block' : 'none';
}
const changeIcon = function (el, class1, class2) {
    if(el.classList.contains(class1)) {
        el.classList.toggle(class2);
    } else {
        el.classList.toggle(class2);
    }
}
const overlay = document.querySelector('.overlay');

// header

const headerPopupBtn = document.querySelector('.header__open-popup-btn');
const headerPopupBtnIcon = document.querySelector('.header__open-popup-btn i');
const headerPopupEl = document.querySelector('.header__content .header__wrapper-popup');

headerPopupBtn.addEventListener('click', function () {
    toggleDisplay(headerPopupEl);
    changeIcon(headerPopupBtnIcon, 'fa-chevron-down', 'fa-chevron-up');
})

// nav
const navSearchInput = document.querySelector('nav .nav__content .nav__buttons .nav__search-input');
const navSearchBtn = document.querySelector('nav .nav__content .nav__buttons .nav__search-btn');

// main
const filterFooterBlock = document.querySelector('main .main__posts-section .main__header-streams .main__search-filter');
const openFilterBtn = document.querySelector('main .main__posts-section .main__header-streams .main__search-filter button');
const openFilterBtnIcon = document.querySelector('main .main__posts-section .main__header-streams .main__search-filter button i');
const filterSearchPopup = document.querySelector('main .main__posts-section  .main__search-filter-block');


openFilterBtn.addEventListener('click', function() {
    filterFooterBlock.style.borderBottom = (filterFooterBlock.style.borderBottom !== '1px solid rgba(0, 0, 0, 0.3)') ? '1px solid rgba(0, 0, 0, 0.3)' : 'inherit';
    changeIcon(openFilterBtnIcon, 'fa-chevron-down', 'fa-chevron-up');
    toggleDisplay(filterSearchPopup);
});


// toggle themes
const toggleThemesBtn = document.querySelector('nav .nav__content .nav__buttons .toggle-themes-btn i');
let habrLogo = document.getElementById('logo-habr');
const DARK_LOGO = '/src/img/habr-logo-dark.gif';
const LIGHT_LOGO = '/src/img/habr-logo-light.png';


toggleThemesBtn.addEventListener('click', function() {
    changeIcon(toggleThemesBtn, 'fa-toggle-off', 'fa-toggle-on');
    // logo
    habrLogo.src = habrLogo.src == LIGHT_LOGO ? DARK_LOGO : LIGHT_LOGO;

    // if(habrLogo.src=='src/img/habr-logo-light.png') {
    //     habrLogo.src=='src/img/habr-logo-dark.gif';
    // } else {
    //     habrLogo.src=='src/img/habr-logo-light.png';
    // }
})
// habrLogo.src = (habrLogo.src == 'src/img/habr-logo-light.png') ? 'src/img/habr-logo-dark.gif' : 'src/img/habr-logo-light.png';
