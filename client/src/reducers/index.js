import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerClientes from "./reducer_clientes";
import ReducerCabeleireiros from "./reducer_cabeleireiros";

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    cabeleireiros: ReducerCabeleireiros,
    form: formReducer
});

export default rootReducer;
