import { combineReducers } from 'redux';
import { widgetReducer } from './widgetReducer';
import { graphReducer } from './graphReducer';
import { spinnerReducer } from './spinnerReducer';
import { tableReducer } from './tableReducer';


const rootReducer = combineReducers({
    widget: widgetReducer,
    graph: graphReducer,
    spinner: spinnerReducer,
    table: tableReducer
})

export default rootReducer;