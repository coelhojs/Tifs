import _ from "lodash";
import { FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, CREATE_CABELEIREIRO, DELETE_CABELEIREIRO, EDIT_CABELEIREIRO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_CABELEIREIRO:
            return { ...state, [action.payload]: action.payload };
        case EDIT_CABELEIREIRO:
            return { ...state, [action.payload._id]: action.payload };
        case FETCH_ALL_CABELEIREIROS:
            return action.payload;
        case FETCH_CABELEIREIRO:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_CABELEIREIRO:
            return _.omit(state, action.payload._id);
        default:
            return state;
    }
}

//export const cabeleireiro = data => ({ type: FETCH_CABELEIREIRO, data })