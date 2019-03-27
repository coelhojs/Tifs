import _ from "lodash";
import { FETCH_CLIENTES, FETCH_CLIENTE, CREATE_CLIENTE, DELETE_CLIENTE } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CLIENTES:
            console.log(action);

            return action.payload.data;
        case FETCH_CLIENTE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_CLIENTE:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_CLIENTE:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
