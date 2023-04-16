const welcomebanner = document.querySelector(".welcome_banner");
const content = document.querySelector(".content");
const remove = document.querySelector(".cross");
window.addEventListener("load", function () {
  showoverlay();
});
welcomebanner.addEventListener("click", function () {
  hideoverlay();
});
remove.addEventListener("click", function () {
  hideoverlay();
});
function showoverlay() {
  welcomebanner.style.opacity = 0.48;
  welcomebanner.style.visibility = "visible";
  content.style.opacity = 1;
  content.style.visibility = "visible";
}
function hideoverlay() {
  welcomebanner.style.opacity = 0;
  welcomebanner.style.visibility = "hidden";
  content.style.opacity = 0;
  content.style.visibility = "hidden";
}
var icon = document.querySelector(".theme");
icon.onlclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "/Images/sun.png";
  }
};

