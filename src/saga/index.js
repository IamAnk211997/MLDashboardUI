import { all } from "redux-saga/effects";
import widgetWatcher from "./widgetSaga";

export default function* rootSaga(){
    yield all([
        widgetWatcher()
    ])
}