import * as Actions from "../action";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData(action) {
  try {
    const data = yield call(axios.get, 'http://127.0.0.1:8000/api/getPlotData/?stockname=AAPL&start_date=2020-01-01&end_date=2024-02-01');
    console.log(data);
    yield put(Actions.GraphData.setGraph(data.data));
    console.log("Success");
  } catch (error) {
    console.log("error");
  }
}

export default function* graphWatcher(){
    yield takeLatest(Actions.GraphData.GET_GRAPH_DATA,fetchData)
}