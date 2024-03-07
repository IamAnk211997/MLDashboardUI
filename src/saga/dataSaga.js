import * as Actions from "../action";
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* widgetHistData(action) {
  try {
    yield put(Actions.SpinnerState.setSpinner(true));
    const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/stockData?stockname='+action.data+'&period=4d');
    yield put(Actions.TableData.setTableWidget(data.data));
    console.log("Success");
    yield put(Actions.SpinnerState.setSpinner(false));
  } catch (error) {
    yield put(Actions.SpinnerState.setSpinner(false));
    console.log("error");
  }
}

function* modalHistData(action) {
    try {
      const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/stockData?stockname='+action.data+'&period=1y');
      yield put(Actions.TableData.setTable(data.data));
    } catch (error) {
      console.log("error");
    }
  }

  function* perfData(action) {
    try {
      yield put(Actions.SpinnerState.setSpinner(true));
      const data = yield call(axios.get, 'https://ankit1997.pythonanywhere.com/api/analysis/performance?stockname='+action.data);
      yield put(Actions.TableData.setPerf(data.data));
      console.log("Success");
      yield put(Actions.SpinnerState.setSpinner(false));
    } catch (error) {
      yield put(Actions.SpinnerState.setSpinner(false));
      console.log("error");
    }
  }

export default function* dataWatcher(){
    yield takeLatest(Actions.TableData.GET_TABLE_WIDGET_DATA,widgetHistData);
    yield takeLatest(Actions.TableData.GET_MODAL_WIDGET_DATA,modalHistData);
    yield takeLatest(Actions.TableData.GET_PERFORMANCE_DATA,perfData);
}