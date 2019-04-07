import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReducerCabeleireiros from "./reducer_cabeleireiros";
import ReducerClientes from "./reducer_clientes";
import ReducerProcedimentos from "./reducer_procedimentos";
import ReducerServicos from "./reducer_servicos"

const rootReducer = combineReducers({
    clientes: ReducerClientes,
    cabeleireiros: ReducerCabeleireiros,
    procedimentos: ReducerProcedimentos,
    servicos: ReducerServicos,
    form: formReducer
});

export default rootReducer;
