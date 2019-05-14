import _ from "lodash";
import { FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, CREATE_CABELEIREIRO, DELETE_CABELEIREIRO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_CABELEIREIRO:
            return { ...state, [action.payload.data]: action.payload.data };
        case FETCH_ALL_CABELEIREIROS:
            return action.payload.data;
        case FETCH_CABELEIREIRO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_CABELEIREIRO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}

export const cabeleireiro = data => ({ type: FETCH_CABELEIREIRO, data })