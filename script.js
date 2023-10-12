

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

// Code for the testimonials slide ................................................................
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//function to hide a reveal an element
function hideOrReveal(elementID) {
  let domElement = document.querySelector(elementID);

  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  }
  else {
    domElement.style.display = "none";
  }
}

//Making the scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

const project_containers = document.querySelectorAll('#project-container');
project_containers.forEach((el) => observer.observe(el));

const blog_cards = document.querySelectorAll('#blog-card');
blog_cards.forEach((el) => observer.observe(el));