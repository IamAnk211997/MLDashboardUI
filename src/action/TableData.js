export const GET_TABLE_WIDGET_DATA = "GET_TABLE_WIDGET_DATA"
export const SET_TABLE_WIDGET_DATA = "SET_TABLE_WIDGET_DATA"

export const setTableWidget = (data) => ({
    type: SET_TABLE_WIDGET_DATA,
    payload: data
});

export const GET_MODAL_WIDGET_DATA = "GET_MODAL_WIDGET_DATA"
export const SET_MODAL_WIDGET_DATA = "SET_MODAL_WIDGET_DATA"
export const CLEAR_MODAL_WIDGET_DATA = "CLEAR_MODAL_WIDGET_DATA"

export const setTable = (data) => ({
    type: SET_MODAL_WIDGET_DATA,
    payload: data
});

export const GET_PERFORMANCE_DATA = "GET_PERFORMANCE_DATA"
export const SET_PERFORMANCE_DATA = "SET_PERFORMANCE_DATA"

export const setPerf = (data) => ({
    type: SET_PERFORMANCE_DATA,
    payload: data
});