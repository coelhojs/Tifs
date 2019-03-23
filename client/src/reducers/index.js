import { combineReducers } from "redux";
import ClientesReducer from "./reducer_clientes";

const rootReducer = combineReducers({
    clientes: ClientesReducer
});

export default rootReducer;
