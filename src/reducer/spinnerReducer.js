import * as Actions from "../action";

const initState = {
    spinnerState: false
}

export const spinnerReducer = (state = initState, action) => {
    switch (action.type)
    {
        case Actions.SpinnerState.SPINNER:
            return {...state, spinnerState: action.payload};
        default:
            return state;
    }
}