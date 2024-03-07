import * as Actions from "../action";

const initState = {
    widgetData: [],
    modalData: [],
    perfData: []
}

export const tableReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.TableData.SET_TABLE_WIDGET_DATA:
            return {...state, widgetData: action.payload};
        case Actions.TableData.SET_PERFORMANCE_DATA:
            return {...state, perfData: action.payload};
        case Actions.TableData.SET_MODAL_WIDGET_DATA:
            return {...state, modalData: action.payload};
        case Actions.TableData.CLEAR_MODAL_WIDGET_DATA:
            return {...state, modalData: []};
        default:
            return state;
    }
}