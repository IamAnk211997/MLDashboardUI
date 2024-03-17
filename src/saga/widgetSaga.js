import * as Actions from "../action";
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
  try {
    yield put(Actions.SpinnerState.setSpinner(true));
    const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/getData?stockname='+action.data);
    // https://ankit1997.pythonanywhere.com/api/getData?stockname=AAPL
    // http://127.0.0.1:5000/api/get_stock_data/?stockname=AAPL&start_date=2024-01-01&end_date=2024-02-01
    console.log(data);
    yield put(Actions.WidgetData.setWidget(data.data));
    console.log("Success");
    yield put(Actions.SpinnerState.setSpinner(false));
  } catch (error) {
    yield put(Actions.SpinnerState.setSpinner(false));
    console.log("error");
  }
}

function* forecastData(action) {
  try {
    yield put(Actions.SpinnerState.setSpinner(true));
    const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/predict?stockname='+action.data);
    console.log(data);
    yield put(Actions.WidgetData.setForecast(data.data));
    console.log("Success");
    yield put(Actions.SpinnerState.setSpinner(false));
  } catch (error) {
    yield put(Actions.SpinnerState.setSpinner(false));
    console.log("error");
  }
}

export default function* widgetWatcher(){
    yield takeLatest(Actions.WidgetData.GET_WIDGET_DATA,fetchData)
    yield takeLatest(Actions.WidgetData.GET_FORECAST_DATA,forecastData)
}