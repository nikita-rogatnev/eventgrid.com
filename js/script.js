var hamburger = document.querySelector(".hamburger"); // .hamburger__active
var navigation = document.querySelector(".header__navigation");

var navigationClosed = document.querySelector(".header__navigation--closed");
var navigationOpened = document.querySelector(".header__navigation--opened");

var body = document.querySelector("body");
var header = document.querySelector(".header");

hamburger.addEventListener("click", function (event) {
    event.preventDefault();

    if (navigation.classList.contains("header__navigation--closed")) {
        hamburger
            .classList
            .add("hamburger__active");
        navigation
            .classList
            .remove("header__navigation--closed");
        navigation
            .classList
            .add("header__navigation--opened");
        header
            .classList
            .remove("header--bg");
        body
            .classList
            .add("body--fixed");
    } else {
        hamburger
            .classList
            .remove("hamburger__active");
        navigation
            .classList
            .add("header__navigation--closed");
        navigation
            .classList
            .remove("header__navigation--opened");
        header
            .classList
            .add("header--bg");
        body
            .classList
            .remove("body--fixed");
    };
});
