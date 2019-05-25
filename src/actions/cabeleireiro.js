import history from '../history';
import { api } from "./index";
import {
    CREATE_CABELEIREIRO,
    FETCH_CABELEIREIRO,
    FETCH_ALL_CABELEIREIROS,
    EDIT_CABELEIREIRO,
    DELETE_CABELEIREIRO
} from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response.data });
    history.push('/');
};

export const fetchAllCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response.data });
};

export const fetchCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Cabeleireiros/${_id}`);
    dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Cabeleireiros/${_id}`, formValues);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
};

export const deleteCabeleireiro = id => async dispatch => {
    const response = await api.delete(`/Cabeleireiros/${id}`);
    dispatch({ type: DELETE_CABELEIREIRO, payload: response.data });
};