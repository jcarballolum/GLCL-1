let calendarHeader = () => {
    let title = document.getElementById('title');
    let titleSetter = (newTitle) => {
      title.innerHTML = newTitle;
    };
    titleSetter('SEPTEMBER');
    let titleArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMEBER', 'DECEMBER'];
    console.log(titleArr[0]);

    let titleCarousel = document.getElementById('title-carousel');
    let left = document.createElement('p');
    left.id = "leftArrow";
    left.classList.add("arrow fas fa-chevron-left", "calendar-header", "title-carousel");
    titleCarousel.appendChild(left);

    let right = document.createElement('p');
    right.id = "rightArrow";
    right.classList.add("arrow fas fa-chevron-right", "calendar-header", "title-carousel");
    titleCarousel.appendChild(right);

    let month = document.createElement('p');
    month.id = "title";
    month.classList.add("calendar-header", "title-carousel");
    titleCarousel.appendChild(month);

    let leftArrow = document.getElementById("left-arrow");
    let rightArrow = document.getElementById('right-arrow');
    let titleIndex = 8;
    leftArrow.addEventListener('click', () => {
      if (titleIndex > 0) {
        titleIndex--;
        titleSetter(titleArr[titleIndex]);
      }
    });

    righttArrow.addEventListener('click', () => {
      if (titleIndex < titleArr.length-1) {
        titleIndex++;
        titleSetter(titleArr[titleIndex]);
      }
    });


    };

    document.addEventListener('DOMContentLoaded', calendarHeader, false);
