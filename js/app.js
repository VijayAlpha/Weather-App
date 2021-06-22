import Place from './module/Search.js';
import weekReport from './module/weekReport.js'
import * as curerentView from './view/searchView.js';
import * as weekView from './view/weekReportView.js';
import * as highlightView from './view/todayHighlightView.js';
import {elements} from './view/base.js';


const state = {};

const controlCurrent = async () => {

    const qurey = curerentView.getvalue();

    console.log(qurey);

    if (qurey) {

        state.result = new Place(qurey);

        curerentView.clearCurrentResult();
        weekView.clearWeekResult();
        try {

            await state.result.getresult();

            const backData = state.result.result; 
            curerentView.renderResult(backData);
        
            const coord = backData.coord;
            console.log(coord.lat, coord.lon);

            state.weekReport = new weekReport(coord.lat, coord.lon);
            
            await state.weekReport.getResult();
            const weekData = state.weekReport.result.daily;
            console.log('test');
            weekView.renderResult(weekData);
            
            const highlightData = state.weekReport.result.current;
            console.log(highlightData);
            
            highlightView.clearResult();
            highlightView.renderResult(highlightData);
            
            

        } catch (error) {
            console.log(error);
        }
    }

};



elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlCurrent();
});
