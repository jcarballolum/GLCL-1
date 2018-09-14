let calendarHeader = () => {
  let month = document.getElementById('month');
  let monthSetter = (newMonth) => {
    month.innerHTML = newMonth;
  };
  monthSetter('SEPTEMBER');
  let monthArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMEBER', 'DECEMBER'];
  console.log(monthArr[0]);
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

document.addEventListener('DOMContentLoaded', calendarHeader, false);
