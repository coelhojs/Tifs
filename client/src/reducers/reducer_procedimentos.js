import _ from "lodash";
import { FETCH_PROCEDIMENTOS, FETCH_PROCEDIMENTO, CREATE_PROCEDIMENTO, DELETE_PROCEDIMENTO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PROCEDIMENTOS:
            return action.payload.data;
        case FETCH_PROCEDIMENTO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_PROCEDIMENTO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_PROCEDIMENTO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
