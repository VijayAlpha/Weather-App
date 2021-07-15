export const elements = {
  sidePanal: document.querySelector('.side'),
  mainPanal: document.querySelector('.main'),
  cityBox: document.querySelector('.city-box'),
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__input'),
  currentViewBox: document.querySelector('.currentView'),
  weekReportBox: document.querySelector('.week__card'),
  todayReportBox: document.querySelector('.today'),
  currentLocationIcon: document.querySelector('#currentLocation'),
};

export const d2d = d => {
  if (typeof d !== 'number' || isNaN(d)) {
    return -1;
  }

  // keep within the range: 0 <= d < 360
  d = d % 360;

  if (11.25 <= d && d < 33.75) {
    return 'NNE';
  } else if (33.75 <= d && d < 56.25) {
    return 'NE';
  } else if (56.25 <= d && d < 78.75) {
    return 'ENE';
  } else if (78.75 <= d && d < 101.25) {
    return 'E';
  } else if (101.25 <= d && d < 123.75) {
    return 'ESE';
  } else if (123.75 <= d && d < 146.25) {
    return 'SE';
  } else if (146.25 <= d && d < 168.75) {
    return 'SSE';
  } else if (168.75 <= d && d < 191.25) {
    return 'S';
  } else if (191.25 <= d && d < 213.75) {
    return 'SSW';
  } else if (213.75 <= d && d < 236.25) {
    return 'SW';
  } else if (236.25 <= d && d < 258.75) {
    return 'WSW';
  } else if (258.75 <= d && d < 281.25) {
    return 'W';
  } else if (281.25 <= d && d < 303.75) {
    return 'WNW';
  } else if (303.75 <= d && d < 326.25) {
    return 'NW';
  } else if (326.25 <= d && d < 348.75) {
    return 'NNW';
  } else {
    return 'N';
  }
};

export function unixTimeConverter(dt) {
  let unix_timestamp = dt;

  var date = new Date(unix_timestamp * 1000);

  var hours = date.getHours();
  var hourIn12 = hours >= 12 ? hours - 12 : hours;

  var min = '0' + date.getMinutes();
  var minIn12 = min < 10 ? '0' + min : min;

  var day = date.getDay();

  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  var am_pm = hours >= 12 ? 'PM' : 'AM';

  var formattedTime = {
    date: date,
    hours: hours,
    min: min,
    day: day,
    weekday: weekday,
    am_pm: am_pm,
    minIn12: minIn12,
    hourIn12: hourIn12,
  };

  return formattedTime;
}
