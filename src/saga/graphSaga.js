import * as Actions from "../action";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
  try {
    yield put(Actions.SpinnerState.setSpinner(true));
    const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/stock_data?stockname='+action.data);
    //const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/getAllPlotData?stockname='+action.data);
    //const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/getPlotData?stockname='+action.data+'&start_date=2020-01-01&end_date=2024-02-01');
    // https://ankit1997.pythonanywhere.com/api/getData?stockname=AAPL
    // https://ankit1997.pythonanywhere.com/api/getAllPlotData?stockname=AAPL
    // http://127.0.0.1:5000/api/getPlotData?stockname=AAPL&start_date=2020-01-01&end_date=2024-02-01
    console.log(data);
    yield put(Actions.GraphData.setGraph(data.data));
    console.log("Success");
    yield put(Actions.SpinnerState.setSpinner(false));
  } catch (error) {
    console.log("error");
    yield put(Actions.SpinnerState.setSpinner(false));
  }
}

export default function* graphWatcher(){
    yield takeLatest(Actions.GraphData.GET_GRAPH_DATA,fetchData)
}