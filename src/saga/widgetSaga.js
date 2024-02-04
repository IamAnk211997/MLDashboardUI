import * as Actions from "../action";
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
  try {
    const data = yield call(axios.get, 'http://127.0.0.1:8000/api/getData/?stockname=AAPL');
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