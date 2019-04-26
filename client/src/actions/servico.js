import { api } from "./index";
import history from '../history';
import { CREATE_SERVICO, FETCH_SERVICOS } from './types';

export const fetchServicos = () => async dispatch => {
    const response = await api.get('/servicos/nomes');
    dispatch({ type: FETCH_SERVICOS, payload: response });
};

export const createServico = () => async dispatch => {
    const response = await api.post('/cabeleireiro/5caf9cabb066082354c1cb0a/servicos/');
    console.log(response);
    dispatch({ type: CREATE_SERVICO, payload: response });
    history.push('/');
};
