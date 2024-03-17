import * as Actions from "../action";

const initState = {
    tickerData: [],
    widgetData: [],
    forecastData: []
}

export const widgetReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.WidgetData.SET_WIDGET_DATA:
            return {...state, widgetData:action.payload.widgetData, tickerData:action.payload.tickerData};
        case Actions.WidgetData.SET_FORECAST_DATA:
            return {...state, forecastData:action.payload};
        case Actions.WidgetData.CLEAR_FORECAST_DATA:
            return {...state, forecastData:[]};
        default:
            return state;
    }
}