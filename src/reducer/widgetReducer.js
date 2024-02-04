import * as Actions from "../action";

const initState = {
    widgetData: []
}

export const widgetReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.WidgetData.SET_WIDGET_DATA:
            return {...state, widgetData:action.payload};
        default:
            return state;
    }
}