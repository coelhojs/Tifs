import { api } from "./index";
import history from '../history';
import { CREATE_CLIENTE, FETCH_CLIENTES } from './types';

export const createCliente = formValues => async (dispatch, getState) => {
    //const { userId } = getState().auth;
    //const response = await api.post('/Clientes', { ...formValues, userId });
    const response = await api.post('/Clientes', { ...formValues });

    dispatch({ type: CREATE_CLIENTE, payload: response });
    history.push('/');
};

export const fetchClientes = () => async dispatch => {
    const response = await api.get('/Clientes');
    dispatch({ type: FETCH_CLIENTES, payload: response });
};
