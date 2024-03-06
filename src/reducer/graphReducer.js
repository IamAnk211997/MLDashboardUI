import * as Actions from "../action";

const initState = {
    graphData: [],
    graphMaData: [],
    barData: []
}

export const graphReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.GraphData.SET_GRAPH_DATA:
            return {...state, graphData:action.payload};
        case Actions.GraphData.SET_MA_GRAPH_DATA:
            return {...state, graphMaData:action.payload};
        case Actions.GraphData.SET_MA_BAR_DATA:
            return {...state, barData:action.payload};
        default:
            return state;
    }
}