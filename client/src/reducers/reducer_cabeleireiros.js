import _ from "lodash";
import { FETCH_CABELEIREIROS, FETCH_CABELEIREIRO, CREATE_CABELEIREIRO, DELETE_CABELEIREIRO } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CABELEIREIROS:
            console.log(action);

            return action.payload.data;
        case FETCH_CABELEIREIRO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_CABELEIREIRO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_CABELEIREIRO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
