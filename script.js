

let primaryNavigation = document.querySelector('.primary-navigation');
let mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', () => {
    let visibility = primaryNavigation.getAttribute('data-visible');

    console.log(visibility)
    if (visibility === "false") {
        primaryNavigation.setAttribute('data-visible', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
    }
    else if (visibility === "true") {
        primaryNavigation.setAttribute('data-visible', false);
        mobileNavToggle.setAttribute('aria-expanded', false);
    }
});
