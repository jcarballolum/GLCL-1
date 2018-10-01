let titleCarouselWrapper = () => {
  let titleCarousel = document.getElementById('title-carousel');

  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement(elementType);
    if(classes){
        el.classList.add(...classes);
    }
    el.id = elementId;
    appendTo.appendChild(el);
  }

  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow','fas','fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow','fas','fa-chevron-right']);

  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };
  titleSetter('September');
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 8;
  leftArrow.addEventListener('click', ()=>{
    if(monthIndex > 0){
      monthIndex--;
      monthSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', ()=>{
    if(monthIndex < monthArr.length-1){
      monthIndex++;
      monthSetter(monthArr[monthIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
