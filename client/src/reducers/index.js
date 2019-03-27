import { combineReducers } from "redux";
import ReducerClientes from "./reducer_clientes";
import ReducerCabeleireiros from "./reducer_cabeleireiros";

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    cabeleireiros: ReducerCabeleireiros
});

export default rootReducer;
