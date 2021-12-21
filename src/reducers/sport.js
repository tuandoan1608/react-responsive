import * as types from '../actions/type'
const initialState = {
    items: []
}
const Sport = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SUCCESS:
            return {
                ...state,
                items: action.payload,
            }
        case types.GET_FAILED:
            return {
                ...state,
                items: null,
            }

        default:
            return state;
    }
}
export default Sport;