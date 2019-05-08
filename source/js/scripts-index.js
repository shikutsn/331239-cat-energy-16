var buttonBefore = document.querySelector(".proof__controls-before");
var buttonAfter = document.querySelector(".proof__controls-after");
var sliderControl = document.querySelector(".proof__controls-slider");
var sliderPointer = document.querySelector(".proof__controls-slider-pointer");
var beforeWrapper = document.querySelector(".proof__slider-item-wrapper--before");

buttonBefore.addEventListener("click", function () {
  beforeWrapper.style.width = "100%";
  sliderPointer.style.left = "6px";
});

buttonAfter.addEventListener("click", function () {
  beforeWrapper.style.width = "0%";
  sliderPointer.style.left = "43px";
});



// sliderControl -- slider
// sliderPointer -- указатель слайдера для мобильных


// и зеленый центр указателя для планшетов и выше
// if(window.matchMedia('(min-width: 768px)').matches) {
//   var sliderDot = sliderControl.children[1];
// }

sliderPointer.onmousedown = function(e) {
  var thumbCoords = getCoords(sliderPointer);
  var shiftX = e.pageX - thumbCoords.left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  var sliderCoords = getCoords(sliderControl);

  document.onmousemove = function(e) {
    //  вычесть координату родителя, т.к. position: relative
    var newLeft = e.pageX - shiftX - sliderCoords.left;

    // курсор ушёл вне слайдера
    if (newLeft < 6) {
      newLeft = 6;
    }
    var rightEdge = sliderControl.offsetWidth - sliderPointer.offsetWidth;
    if (newLeft > rightEdge - 6) {
      newLeft = rightEdge - 6;
    }

    sliderPointer.style.left = newLeft + 'px';
    beforeWrapper.style.width = Math.round(100-100*(newLeft - 6)/37) + "%";
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };

  return false; // disable selection start (cursor change)
};

// для тача. Почему-то не работает
// sliderPointer.ontouchstart = function(e) {
//   var thumbCoords = getCoords(sliderPointer);
//   var shiftX = e.pageX - thumbCoords.left;
//   // shiftY здесь не нужен, слайдер двигается только по горизонтали

//   var sliderCoords = getCoords(sliderControl);

//   document.ontouchmove = function(e) {
//     //  вычесть координату родителя, т.к. position: relative
//     var newLeft = e.pageX - shiftX - sliderCoords.left;

//     // курсор ушёл вне слайдера
//     if (newLeft < 6) {
//       newLeft = 6;
//     }
//     var rightEdge = sliderControl.offsetWidth - sliderPointer.offsetWidth;
//     if (newLeft > rightEdge - 6) {
//       newLeft = rightEdge - 6;
//     }

//     sliderPointer.style.left = newLeft + 'px';
//     beforeWrapper.style.width = Math.round(100-100*(newLeft - 6)/37) + "%";
//   }

//   document.ontouchend = function() {
//     document.ontouchstart = document.ontouchmove = null;
//   };

//   return false; // disable selection start (cursor change)
// };
// -----------------

sliderPointer.ondragstart = function() {
  return false;
};

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
