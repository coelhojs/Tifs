import { api } from "./index";
import history from '../history';
import { CREATE_CABELEIREIRO, FETCH_CABELEIREIRO, FETCH_CABELEIREIROS } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/Cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response });
    history.push('/Cabeleireiros');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_CABELEIREIROS, payload: response });
};

export const fetchCabeleireiro = () => async dispatch => {
    const response = await api.get('/Cabeleireiro');
    dispatch({ type: FETCH_CABELEIREIRO, payload: response });
};