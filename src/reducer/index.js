import { combineReducers } from 'redux';
import { widgetReducer } from './widgetReducer';
import { graphReducer } from './graphReducer';
import { spinnerReducer } from './spinnerReducer';


const rootReducer = combineReducers({
    widget: widgetReducer,
    graph: graphReducer,
    spinner: spinnerReducer
})

export default rootReducer;