

let primaryNavigation = document.querySelector('.primary-navigation');
let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
let mobileNavToggle_span = document.querySelector('.mobile-nav-toggle-span');

mobileNavToggle.addEventListener('click', () => {
    let visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNavigation.setAttribute('data-visible', true);
        mobileNavToggle.setAttribute('aria-expanded', true);
        mobileNavToggle_span.textContent = "";
        mobileNavToggle_span.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
    else if (visibility === "true") {
        primaryNavigation.setAttribute('data-visible', false);
        mobileNavToggle.setAttribute('aria-expanded', false);
        mobileNavToggle_span.textContent = "";
        mobileNavToggle_span.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
});

// Making the scrollbar functional.
let fullHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function() {
    scr=pageYOffset;
    progress = (scr/fullHeight)*100;
    document.querySelector('.scrollbar').style.width = `${progress}vw`
})
