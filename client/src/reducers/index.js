import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerCabeleireiros from "./reducer_cabeleireiros";
import ReducerClientes from "./reducer_clientes";

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    cabeleireiros: ReducerCabeleireiros,
    form: formReducer
});

export default rootReducer;
