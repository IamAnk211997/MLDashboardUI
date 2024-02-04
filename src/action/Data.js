export const GET_WIDGET_DATA = "GET_WIDGET_DATA"
export const SET_WIDGET_DATA = "SET_WIDGET_DATA"

export const setWidget = (data) => ({
    type: SET_WIDGET_DATA,
    payload: data
});