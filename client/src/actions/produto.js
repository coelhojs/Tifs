import { api } from "./index";
import history from '../history';
import { CREATE_PRODUTO, FETCH_PRODUTOS } from './types';

export const fetchProdutos = () => async dispatch => {
    const response = await api.get('/produtos/');
    dispatch({ type: FETCH_PRODUTOS, payload: response });
};

export const createProduto = () => async dispatch => {
    const response = await api.post('/produtos/');
    console.log(response);
    dispatch({ type: CREATE_PRODUTO, payload: response });
    history.push('/produtos');
};
