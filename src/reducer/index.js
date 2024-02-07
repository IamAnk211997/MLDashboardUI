import { combineReducers } from 'redux';
import { widgetReducer } from './widgetReducer';
import { graphReducer } from './graphReducer';


const rootReducer = combineReducers({
    widget: widgetReducer,
    graph: graphReducer
})

export default rootReducer;