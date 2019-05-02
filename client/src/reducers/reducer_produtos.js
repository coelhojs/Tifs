import _ from "lodash";
import { FETCH_PRODUTOS, FETCH_PRODUTO, CREATE_PRODUTO, DELETE_PRODUTO } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_PRODUTO:
            console.log(action.payload.data);
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_PRODUTOS:
            return action.payload.data;
        case FETCH_PRODUTO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_PRODUTO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
