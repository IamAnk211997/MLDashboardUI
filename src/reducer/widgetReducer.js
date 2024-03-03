import * as Actions from "../action";

const initState = {
    tickerData: [],
    widgetData: []
}

export const widgetReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.WidgetData.SET_WIDGET_DATA:
            console.log(action.payload.widgetData,action.payload.tickerData);
            return {...state, widgetData:action.payload.widgetData, tickerData:action.payload.tickerData};
        default:
            return state;
    }
}