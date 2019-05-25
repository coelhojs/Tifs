import { api } from "./index";
import history from '../history';
import { CREATE_PRODUTO, FETCH_PRODUTO, FETCH_ALL_PRODUTOS, DELETE_PRODUTO } from './types';

export const createProduto = formValues => async (dispatch, getState) => {
    const response = await api.post('/Produtos', { ...formValues });
    dispatch({ type: CREATE_PRODUTO, payload: response });
    history.push('/Produtos');
};

export const fetchProdutos = () => async dispatch => {
    const response = await api.get('/Produtos');
    dispatch({ type: FETCH_ALL_PRODUTOS, payload: response });
};
export const fetchProduto = id => async dispatch => {
    const response = await api.get(`/Produtos/${id}`);
    dispatch({ type: FETCH_PRODUTO, payload: response });
};

// export const editProduto = id => async dispatch => {
//     const response = await api.put('/Produtos/', { ...formValues });
//     dispatch({ type: FETCH_PRODUTO, payload: response });
// };

export const deleteProdutos = id => async dispatch => {
    const response = await api.delete(`/Produtos/${id}`);
    dispatch({ type: DELETE_PRODUTO, payload: id });
    console.log(response);

    history.push('/Produtos');
};