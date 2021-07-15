import { elements, unixTimeConverter } from './base.js';

export const getvalue = () => elements.searchInput.value;

export const renderResult = result => {
  const date = unixTimeConverter(result.dt);

  elements.searchInput.value = result.name + ' ' + result.sys.country;

  const markup = `
            <div class="hero">
            <div class="hero__icon-box">
                <img src="img/icon/${
                  result.weather[0].icon
                }.svg" alt="weather icon" class="hero__icon">
            </div>
            <p class="hero__temp">
                <span class="hero__temp--num">${Math.round(
                  result.main.temp
                )}&deg;</span>
                <span class="hero__temp--smb">C</span>
            </p>
            <p class="hero__time">
                <span class="hero__time--day">${date.weekday[date.day]}, ${
    date.hours
  }:${date.min.substr(-2)} ${date.am_pm}</span>
            </p>

            <div class="hero__name">
                <img src="img/icon/${
                  result.weather[0].icon
                }.svg" alt="icon" class="hero__name--icon">
                <span class="hero__name--title"> ${
                  result.weather[0].main
                }</span>
            </div>
            <div class="hero__name">
                <img src="img/icon/${
                  result.weather[0].icon
                }.svg" alt="icon" class="hero__name--icon">
                <span class="hero__name--title"> ${
                  result.weather[0].description
                }</span>
            </div>
        </div>

        <div class="city-box">
            <img src="" class="city-box__img">
            <span class="city-box__name">${result.name}  ${
    result.sys.country
  }</span>
        </div>
            `;

  elements.currentViewBox.insertAdjacentHTML('beforeend', markup);
};

export const clearCurrentResult = () => {
  elements.currentViewBox.innerHTML = '';
};

export const errorResult = () => {
  const markup = ``;

  elements.currentViewBox.insertAdjacentHTML('beforeend', markup);
};
