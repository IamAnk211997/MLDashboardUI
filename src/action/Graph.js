export const GET_GRAPH_DATA = "GET_GRAPH_DATA"
export const SET_GRAPH_DATA = "SET_GRAPH_DATA"

export const setGraph = (data) => ({
    type: SET_GRAPH_DATA,
    payload: data
});