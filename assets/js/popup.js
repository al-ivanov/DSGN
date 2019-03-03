var bodyToggle = document.querySelector(".nojs");
var btnToggle = document.querySelector(".btn-toggle");
var navCatalog = document.querySelector(".site-nav");

bodyToggle.classList.remove("nojs");
navCatalog.classList.add("site-nav--closed");

btnToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    btnToggle.classList.toggle("btn-toggle--closed");
    navCatalog.classList.toggle("site-nav--closed");
});