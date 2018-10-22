let titleCarouselWrapper = () => {
  let titleCarousel = document.getElementById('title-carousel'); //TODO: CLEANUP: top
  const elementBuilder = (elementType, elementId, appendTo, classes) => { //TODO: CLEANUP: top
    const el = document.createElement(elementType);
    if (classes) {
      el.classList.add(...classes);
    }
    el.id = elementId;
    appendTo.appendChild(el);
  }
  const titleSetter = (el, newTitle) => {
    el.innerHTML = newTitle;
  };

  const carouselBuilder = (titleArr, titleIndex) =>{
  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']); //TODO: CLEANUP: carouselBuilder
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);
  const title = document.getElementById("title");
  titleSetter(title, titleArr[titleIndex]);
  };
  const carouselEvents = (loops, titleIndex,titleArr) =>{
    const title = document.getElementById('title');
    let leftArrow = document.getElementById('left-arrow'); //TODO: CLEANUP: place in carouselEvents
    let rightArrow = document.getElementById('right-arrow'); //TODO: CLEANUP: place in carouselEvents
  const arrowClick = (direction) => {
    return new CustomEvent('arrowClick', {
      bubbles: true,
      detail: {
        arrowDirection: direction
      }
    });
  }

  leftArrow.addEventListener('click', () => {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(title, titleArr[titleIndex]);
    } else {
titleIndex = titleArr.length-1;

        titleSetter(title, titleArr[titleIndex]);
 }
    leftArrow.dispatchEvent(arrowClick('left'));
  });

  rightArrow.addEventListener('click', () => {
    if (titleIndex < titleArr.length - 1) {
      titleIndex++;
      titleSetter(title, titleArr[titleIndex]);
    } else {
      titleIndex = 0;
        titleSetter(title, titleArr[titleIndex]);
 }
    rightArrow.dispatchEvent(arrowClick('right'));
  });
}
  if(titleCarousel){
    titleCarousel.addEventListener('carouselInitialState', (event) => {
      const loops = event.detail.loops;
      const titleArr = event.detail.titleArr;
      const titleIndex = event.detail.titleIndex;
      carouselBuilder(titleArr, titleIndex);
      carouselEvents(loops, titleIndex, titleArr);
    })
 }


};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
