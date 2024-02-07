import * as Actions from "../action";

const initState = {
    graphData: []
}

export const graphReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.GraphData.SET_GRAPH_DATA:
            return {...state, graphData:action.payload};
        default:
            return state;
    }
}