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

var calendarHeader = function calendarHeader() {
  var month = document.getElementById('month');
  var monthSetter = function monthSetter(newMonth) {
    month.innerHTML = newMonth;
  };
  monthSetter('SEPTEMBER');
  var monthArr = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMEBER', 'DECEMBER'];
  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var monthIndex = 9;
  leftArrow.addEventListener('click', function () {
    monthIndex--;
    monthSetter(monthArr[monthIndex - 1]);
  });
  rightArrow.addEventListener('click', function () {
    monthIndex++;
    monthSetter(monthArr[monthIndex - 1]);
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

var calendar = function calendar() {
  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };
  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };
  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody() {
    var daysInRow = 7;
    var totalRows = 5;
    // var totalDays = daysInRow * totalRows; 
    var currentRows = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        console.log('within for loop');
        var day = document.createElement('p');
        day.innerHTML = i;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
// let calendar = () => {
// 	let lastDay = () => {
// 		return new Date(year, month, 0).getDate();
// 	}

// 	let firstDay = (year, month) => {
// 		return new Date(year, month, -1, 1).getDay();
// 	}


// 	let daysOfTheWeek=['SUN', 'MON', 'TUES', 'WEDS', 'THU', 'FRI', 'SAT'];
// 	var calendarHead = document.getElementById('calendar-head');

// 	let populateCalendarHead() => {

// 		for (let i = 0; i<daysOfTheWeek.length; i++){
// 		let day = document.createElement('p');
// 		day.innerHTML = daysOfTheWeek[i];
// 		calendarHead.appendChild(day);
// 		}

// 	}

// 	populateCalendarHead();

// 	let calendarBody = document.getElementById('calendar-body');
// 	let populateCalendarBody = () => {
// 		var daysInRow = 7;
// 		var totalRows = 5;
// 		// var totalDays = daysInRow * totalRows;
// 		var currentRows = 0;

// 		while (currentRows < totalRows){
// 			let calendarRow = document.createElement('div');
// 			for (let i =0; i<daysInRow; i++){
// 				console.log('within for loop');
// 				let day = document.createElement('p');
// 				day.innerHTML = i;
// 				calendarRow.appendChild(day);
// 			}

// 			calendarBody
// 			.appendChild(calendarRow)
// 			.className = "calendar-row";

// 			currentRows++;
// 		}
// 	}
// 	populateCalendarBody();

// };

// document.addEventListener('DOMContentLoaded', calendar, false);