import { elements, unixTimeConverter } from './base.js';

const renderReport = data => {
  const date = unixTimeConverter(data.dt);

  const markup = ` 
                <div class="day-card">
                    <h3 class="day-card__title heading-3">${
                      date.weekday[date.day]
                    }</h3>
                    <img src="img/icon/${
                      data.weather[0].icon
                    }.svg" alt="icon" class="day-card__icon">
                    <p class="day-card__temp">
                        <span class="day-card__temp--max">${Math.round(
                          data.temp.max
                        )}&deg; -</span>
                        <span class="day-card__temp--min"> ${Math.round(
                          data.temp.min
                        )}&deg;</span>
                    </p>
                </div>`;
  elements.weekReportBox.insertAdjacentHTML('beforeend', markup);
};

export const renderResult = result => {
  result.forEach((value, index) => {
    // TO REMOVE THE LAST ELEMENT IN ARRAY
    if (index !== result.length - 1) {
      renderReport(value);
    }
  });
};

export const clearWeekResult = () => {
  elements.weekReportBox.innerHTML = '';
};
