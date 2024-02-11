import * as Actions from "../action";
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
  try {
    const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/getData?stockname=AAPL');
    // https://ankit1997.pythonanywhere.com/api/getData?stockname=AAPL
    // http://127.0.0.1:5000/api/get_stock_data/?stockname=AAPL&start_date=2024-01-01&end_date=2024-02-01
    console.log(data);
    yield put(Actions.WidgetData.setWidget(data.data));
    console.log("Success");
  } catch (error) {
    console.log("error");
  }
}

export default function* widgetWatcher(){
    yield takeLatest(Actions.WidgetData.GET_WIDGET_DATA,fetchData)
}