var buttonBefore = document.querySelector(".proof__controls-before");
var buttonAfter = document.querySelector(".proof__controls-after");
var sliderControl = document.querySelector(".proof__controls-slider");

buttonBefore.addEventListener("click", function () {
  var catImages = document.querySelectorAll(".proof__picture");
  if (catImages[0].classList.contains("proof__picture--hide")) {
    catImages[0].classList.remove("proof__picture--hide");
  }
  catImages[0].classList.add("proof__picture--show");
  if (catImages[1].classList.contains("proof__picture--show")) {
    catImages[1].classList.remove("proof__picture--show");
  }
  catImages[1].classList.add("proof__picture--hide");

  if (sliderControl.classList.contains("proof__controls-slider--after")) {
    sliderControl.classList.remove("proof__controls-slider--after");
  }
  sliderControl.classList.add("proof__controls-slider--before");
});

buttonAfter.addEventListener("click", function () {
  var catImages = document.querySelectorAll(".proof__picture");
  if (catImages[0].classList.contains("proof__picture--show")) {
    catImages[0].classList.remove("proof__picture--show");
  }
  catImages[0].classList.add("proof__picture--hide");
  if (catImages[1].classList.contains("proof__picture--hide")) {
    catImages[1].classList.remove("proof__picture--hide");
  }
  catImages[1].classList.add("proof__picture--show");

  if (sliderControl.classList.contains("proof__controls-slider--before")) {
    sliderControl.classList.remove("proof__controls-slider--before");
  }
  sliderControl.classList.add("proof__controls-slider--after");
});
