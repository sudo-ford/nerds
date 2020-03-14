"use strict";

var link = document.querySelector(".map__link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("modal__show");
    overlay.classList.add("modal__show");
});

close.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("modal__show");
    overlay.classList.remove("modal__show");
});

overlay.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("modal__show");
    overlay.classList.remove("modal__show");
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        e.preventDefault();
        popup.classList.remove("modal__show");
        overlay.classList.remove("modal__show");
    }
});