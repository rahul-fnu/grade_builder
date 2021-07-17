import {USER_INPUT} from "./type";
export const saveInput = (newState) => (dispatch) => {
    return dispatch({
        type: USER_INPUT,
        payload: newState,
    });
};