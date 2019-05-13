import history from '../history';
import { api } from "./index";
import { CREATE_CABELEIREIRO, FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, EDIT_CABELEIREIRO } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/Cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response });
    history.push('/Cabeleireiros');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response });
};

export const fetchCabeleireiro = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_CABELEIREIRO, payload: response });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    const response = await api.patch(`/Cabeleireiros/${id}`, formValues);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
    history.push('/Home');
};
