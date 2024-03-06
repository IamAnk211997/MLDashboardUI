export const GET_GRAPH_DATA = "GET_GRAPH_DATA"
export const SET_GRAPH_DATA = "SET_GRAPH_DATA"

export const GET_MA_GRAPH_DATA = "GET_MA_GRAPH_DATA"
export const SET_MA_GRAPH_DATA = "SET_MA_GRAPH_DATA"

export const GET_MA_BAR_DATA = "GET_MA_BAR_DATA"
export const SET_MA_BAR_DATA = "SET_MA_BAR_DATA"

export const setGraph = (data) => ({
    type: SET_GRAPH_DATA,
    payload: data
});

export const setMaGraph = (data) => ({
    type: SET_MA_GRAPH_DATA,
    payload: data
});

export const setMaBar = (data) => ({
    type: SET_MA_BAR_DATA,
    payload: data
});