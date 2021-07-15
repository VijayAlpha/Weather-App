//import d2d from 'degrees-to-direction';
import {elements,unixTimeConverter, d2d} from './base.js';



export const renderResult = (data) => {
    
    const markup = ` <h2 class="today__title heading-2">Today's Highlights</h2>

            <div class="today__highlight-box">

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3">UV Index</h3>
                    <span class="uv__value title-1">${data.uvi}</span>
                    <span class="title-3">normal</span>
                </div>

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3">Wind Status</h3>
                    <p>
                        <span class="title-1">${data.wind_speed}</span> <span class="sub-title">Km/h</span>
                    </p>
                    <div>
                        <img class="icon-3 wind_deg-icon" src="img/arrow.svg">
                        <span class="wind_deg">${d2d(data.wind_deg) + data.wind_deg}</span>
                    </div>

                </div>

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3">Sunrise & Sunset</h3>

                    <div>
                        <img class="icon-1" src="img/sunrise.svg">
                        <span class="title-3">${unixTimeConverter(data.sunrise).hourIn12}:${unixTimeConverter(data.sunrise).min.substr(-2)} AM</span>
                    </div>

                    <div>
                        <img class="icon-1" src="img/sunset.svg">
                        <span class="title-3">${unixTimeConverter(data.sunset).hourIn12}:${unixTimeConverter(data.sunset).min.substr(-2)} PM</span>
                    </div>
                </div>

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3">Humidity</h3>
                    <span class="title-1">${data.humidity}</span>
                    <span class="title-3">normal</span>
                </div>

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3">Visibility</h3>
                    <p><span class="title-1">${(data.visibility) / 1000}</span> <span class="sub-title">Km</span> </p>
                    <span class="title-3">average</span>
                </div>

                <div class="highlight-box">
                    <h3 class="highlight-box__title heading-3"> Cloudiness</h3>
                    <span class="title-1">${data.clouds}%</span>
                    <span class="title-3">whooo!</span>
                </div>
            </div>`;
    
    elements.todayReportBox.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.wind_deg-icon').style.transform = `rotate(${data.wind_deg}deg)`;
};


export const clearResult = () => {
    elements.todayReportBox.innerHTML = '';
};