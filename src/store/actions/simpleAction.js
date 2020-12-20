import {
    SET_TITLE
} from './actionTypes'

export const setTitle = (title) => {
    return dispatch => {
        dispatch({
            type: SET_TITLE,
            payload: title
        })
    }
}