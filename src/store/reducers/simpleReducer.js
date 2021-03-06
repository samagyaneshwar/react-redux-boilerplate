import {
    SET_TITLE
} from '../actions/actionTypes'

const simpleReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                ...{
                    title: action.payload
                }
            }
        default:
            return state
    }
}

export default simpleReducer;