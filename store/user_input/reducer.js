import {USER_INPUT} from "./type";
const initialState = {
    prompts: [],
    marking_scheme :{},
    answers :{}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_INPUT:
            return {...state, answers: action.payload};
        default:
            return state;
    }
}