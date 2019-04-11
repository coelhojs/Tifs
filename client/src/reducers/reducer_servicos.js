import _ from "lodash";
import { FETCH_SERVICOS, FETCH_SERVICO, CREATE_SERVICO, DELETE_SERVICO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SERVICOS:
            return action.payload.data;
        case FETCH_SERVICO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_SERVICO:
            console.log(state);

            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_SERVICO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
