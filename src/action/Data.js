export const GET_WIDGET_DATA = "GET_WIDGET_DATA"
export const SET_WIDGET_DATA = "SET_WIDGET_DATA"

export const setWidget = (data) => ({
    type: SET_WIDGET_DATA,
    payload: data
});

export const GET_FORECAST_DATA = "GET_FORECAST_DATA"
export const SET_FORECAST_DATA = "SET_FORECAST_DATA"

export const setForecast = (data) => ({
    type: SET_FORECAST_DATA,
    payload: data
});

export const CLEAR_FORECAST_DATA = "CLEAR_FORECAST_DATA"