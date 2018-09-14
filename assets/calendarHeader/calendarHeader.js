let calendarHeader = () => {
  let month = document.getElementById('month');
  let monthSetter = (newMonth) => {
    month.innerHTML = newMonth;
  };
  monthSetter('SEPTEMBER');
  let monthArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMEBER', 'DECEMBER'];
  let leftArrow = document.getElementById('left-arrow')
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 9;
  leftArrow.addEventListener('click', ()=>{
    monthIndex--;
    monthSetter(monthArr[monthIndex-1]);
  });
  rightArrow.addEventListener('click', ()=>{
    monthIndex++;
    monthSetter(monthArr[monthIndex-1]);
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
