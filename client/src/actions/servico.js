import { api } from "./index";
import { CREATE_SERVICO, FETCH_ALL_SERVICOS } from './types';

export const fetchServicos = () => async dispatch => {
    const response = await api.get('/Servicos');
    dispatch({ type: FETCH_ALL_SERVICOS, payload: response });
};

export const createServico = () => async dispatch => {
    const response = await api.post('/Cabeleireiros/1/Servicos/');
    dispatch({ type: CREATE_SERVICO, payload: response });
};
