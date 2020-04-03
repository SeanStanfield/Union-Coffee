const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".mobile-sidebar");
const sidebarLinks = document.querySelectorAll(".mobile-sidebar ul li a");
const dimmer = document.querySelector(".dimmer");
const cross = document.querySelector(".cross-parent");
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

sidebarLinks.forEach(link => {
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
    center: barebrew
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: barebrew, map: map });
}
