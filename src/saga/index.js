import { all } from "redux-saga/effects";
import widgetWatcher from "./widgetSaga";
import graphWatcher from "./graphSaga";

export default function* rootSaga(){
    yield all([
        widgetWatcher(),
        graphWatcher()
    ])
}