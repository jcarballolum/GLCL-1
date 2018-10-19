'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
  var titleCarousel = document.getElementById('title-carousel');

  var elementBuilder = function elementBuilder(elementType, elementId, appendTo, classes) {
    var el = document.createElement(elementType);
    if (classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
    }
    el.id = elementId;
    appendTo.appendChild(el);
  };

  var titleSetter = function titleSetter(el, newTitle) {
    el.innerHTML = newTitle;
  };

  var carouselBuilder = function carouselBuilder(titleArr, titleIndex) {
    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
    var title = document.getElementById('title');
    titleSetter(title, titleArr[titleIndex]);
  };

  var carouselEvents = function carouselEvents(loops, titleIndex, titleArr) {
    var title = document.getElementById('title');
    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');

    var arrowClick = function arrowClick(direction) {
      return new CustomEvent('arrowClick', {
        bubbles: true,
        detail: {
          arrowDirection: direction
        }
      });
    };

    leftArrow.addEventListener('click', function () {
      if (titleIndex > 0) {
        titleIndex--;
        titleSetter(title, titleArr[titleIndex]);
      } else {
        titleIndex = titleArr.length - 1;
        titleSetter(title, titleArr[titleIndex]);
      }
      leftArrow.dispatchEvent(arrowClick('left'));
    });

    rightArrow.addEventListener('click', function () {
      if (titleIndex < titleArr.length - 1) {
        titleIndex++;
        titleSetter(title, titleArr[titleIndex]);
      } else {
        titleIndex = 0;
        titleSetter(title, titleArr[titleIndex]);
      }
      rightArrow.dispatchEvent(arrowClick('right'));
    });
  };

  if (titleCarousel) {
    titleCarousel.addEventListener('carouselInitialState', function (event) {
      var loops = event.detail.loops;
      var titleArr = event.detail.titleArr;
      var titleIndex = event.detail.titleIndex;
      carouselBuilder(titleArr, titleIndex);
      carouselEvents(loops, titleIndex, titleArr);
    });
  }
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
  var titleCarousel = document.getElementById('title-carousel');

  var elementBuilder = function elementBuilder(elementType, elementId, appendTo, classes) {
    var el = document.createElement(elementType);
    if (classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
    }
    el.id = elementId;
    appendTo.appendChild(el);
  };

  var titleSetter = function titleSetter(el, newTitle) {
    el.innerHTML = newTitle;
  };

  var carouselBuilder = function carouselBuilder(titleArr, titleIndex) {
    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
    var title = document.getElementById('title');
    titleSetter(title, titleArr[titleIndex]);
  };

  var carouselEvents = function carouselEvents(loops, titleIndex, titleArr) {
    var title = document.getElementById('title');
    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');

    var arrowClick = function arrowClick(direction) {
      return new CustomEvent('arrowClick', {
        bubbles: true,
        detail: {
          arrowDirection: direction
        }
      });
    };

    leftArrow.addEventListener('click', function () {
      if (titleIndex > 0) {
        titleIndex--;
        titleSetter(title, titleArr[titleIndex]);
      } else {
        titleIndex = titleArr.length - 1;
        titleSetter(title, titleArr[titleIndex]);
      }
      leftArrow.dispatchEvent(arrowClick('left'));
    });

    rightArrow.addEventListener('click', function () {
      if (titleIndex < titleArr.length - 1) {
        titleIndex++;
        titleSetter(title, titleArr[titleIndex]);
      } else {
        titleIndex = 0;
        titleSetter(title, titleArr[titleIndex]);
      }
      rightArrow.dispatchEvent(arrowClick('right'));
    });
  };

  titleCarousel.addEventListener('carouselInitialState', function (event) {
    var loops = event.detail.loops;
    var titleArr = event.detail.titleArr;
    var titleIndex = event.detail.titleIndex;
    carouselBuilder(titleArr, titleIndex);
    carouselEvents(loops, titleIndex, titleArr);
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);