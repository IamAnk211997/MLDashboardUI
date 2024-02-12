import { all } from "redux-saga/effects";
import widgetWatcher from "./widgetSaga";
import graphWatcher from "./graphSaga";
import dataWatcher from "./dataSaga";

export default function* rootSaga(){
    yield all([
        widgetWatcher(),
        graphWatcher(),
        dataWatcher()
    ])
}