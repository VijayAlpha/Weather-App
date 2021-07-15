import Place from './module/Search.js';
import weekReport from './module/weekReport.js';
import * as curerentView from './view/searchView.js';
import * as weekView from './view/weekReportView.js';
import * as highlightView from './view/todayHighlightView.js';
import errorView from './view/errorView.js';
import { elements } from './view/base.js';

const state = {};

const controlCurrent = async () => {
  const qurey = curerentView.getvalue();

  if (qurey) {
    state.result = new Place(qurey);
    console.log(state.result);
    // if (state.result.result.cod) {
    //   errorView(state.result.result);
    // }
    curerentView.clearCurrentResult();
    weekView.clearWeekResult();
    renderMainScreen();
  }
};

const renderMainScreen = async () => {
  try {
    //get main data and render main result
    await state.result.getresult();
    const backData = state.result.result;
    curerentView.renderResult(backData);

    //get week data and render week result
    const coord = backData.coord;
    state.weekReport = new weekReport(coord.lat, coord.lon);
    await state.weekReport.getResult();
    const weekData = state.weekReport.result.daily;
    weekView.renderResult(weekData);

    // render highlight result from the week data
    const highlightData = state.weekReport.result.current;
    highlightView.clearResult();
    highlightView.renderResult(highlightData);
  } catch (error) {
    console.log(error);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlCurrent();
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    controlCurrent();
  }
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

async function showPosition(position) {
  state.result = new Place(
    '',
    position.coords.latitude,
    position.coords.longitude
  );
  curerentView.clearCurrentResult();
  weekView.clearWeekResult();
  renderMainScreen();
}

elements.currentLocationIcon.addEventListener('click', () => {
  getLocation();
});

window.addEventListener('load', () => {
  getLocation();
});

if (!window.navigator.onLine) {
  alert('Please check the internet conection');
}

// window.addEventListener('DOMContentLoaded', event => {
//   if (screen.width < 600) {
//     console.log(elements.cityBox);
//     elements.cityBox.addEventListener('click', () => {
//       // elements.sidePanal.display = 'none';
//       // elements.mainPanal.display = 'block';
//       console.log(elements.sidePanal.display);
//     });
//   }
// });
