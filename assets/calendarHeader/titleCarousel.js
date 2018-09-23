let titleCarouselWrapper = () => {
  let titleCarousel = document.getElementById('title-carousel');

  let la = document.createElement('p');
  la.classList.add('arrow', 'fas', 'fa-chevron-left');
  la.id = "left-arrow";
  titleCarousel.appendChild(la);

  let name = document.createElement('p');
  name.classList.add('title');
  name.id = "title";
  titleCarousel.appendChild(name);

  let ra = document.createElement('p');
  ra.classList.add('arrow', 'fas', 'fa-chevron-right');
  ra.id = "right-arrow";
  titleCarousel.appendChild(ra);

  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };
  titleSetter('SEPTEMBER');
  let monthArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 8;
  leftArrow.addEventListener('click', () => {
    if (monthIndex > 0) {
      monthIndex--;
      titleSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', () => {
    if (monthIndex < monthArr.length - 1) {
      monthIndex++;
      titleSetter(monthArr[monthIndex]);
    }

  });
};
document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
