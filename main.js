const container = document.querySelector(".container");
const switchSlide = document.querySelector(".switch");
const slideRight = document.querySelector(".slide-right");
const slideLeft = document.querySelector(".slide-left");
const toggle = document.querySelector(".toggle");
const text = document.querySelector(".text");

function modeToggle() {
  slideRight.addEventListener("click", function () {
    switchSlide.style.transform = `translateX(${172}%)`;
    text.innerHTML = `Dark Mode 🌚`;
    text.style.color = "white";
    toggle.style.background = "#2B2F77";
    container.style.backgroundImage = `url(/img/${2}.jpg)`;
  });

  slideLeft.addEventListener("click", function () {
    switchSlide.style.transform = `translateX(${0}%)`;
    text.innerHTML = `Light Mode 🌞`;
    text.style.color = "black";
    toggle.style.background = "#FBDA38";
    container.style.backgroundImage = `url(/img/${1}.jpg)`;
  });
}

modeToggle();
