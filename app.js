const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".mobile-sidebar");
const sidebarLinks = document.querySelectorAll(".mobile-sidebar ul li a");
const dimmer = document.querySelector(".dimmer");
const cross = document.querySelector(".cross-parent");
const sliderImages = document.querySelectorAll("[class*='slide']");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // half way through the image
    let pageBottom = window.scrollY + window.innerHeight;

    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 3;
    let imageBottom = sliderImage.getBoundingClientRect().bottom;
    let imageCenter =
      sliderImage.getBoundingClientRect().top + sliderImage.height / 2;
    let isNotScrolledPast = window.scrollY < imageBottom;
    let isHalfShown = window.innerHeight > imageCenter;

    if (isHalfShown) {
      console.log("IM PEEKING");
      sliderImage.classList.add("active");
    }

    console.log(imageCenter, "image center");
  });
}

let onscroll = window.addEventListener("scroll", debounce(checkSlide));

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  console.log("hamburger clicked");
  dimmer.classList.toggle("shaded");
});

cross.addEventListener("click", () => {
  sidebar.classList.remove("open");
  dimmer.classList.remove("shaded");
  console.log("cross clicked");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    dimmer.classList.remove("shaded");
  });
});

function initMap() {
  // The location of Uluru
  var barebrew = { lat: 51.578922, lng: 0.025901 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: barebrew,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: barebrew, map: map });
}
