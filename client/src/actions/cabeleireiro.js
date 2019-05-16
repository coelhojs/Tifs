import history from '../history';
import { api } from "./index";
import { CREATE_CABELEIREIRO, DELETE_CABELEIREIRO, EDIT_CABELEIREIRO, FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, FETCH_CABELEIREIRO_NAME } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response.data });
    history.push('/');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response.data });
};

// export const fetchCabeleireiro = id => async dispatch => {
//     const response = await api.get(`/cabeleireiros/${_id}`);
//     dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
// };

export const fetchCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Cabeleireiros/${_id}`);
    console.log(response);
    dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Cabeleireiros/${_id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
};

export const getCabeleireiroName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Cabeleireiros/${_id}`);
    dispatch({ type: FETCH_CABELEIREIRO_NAME, payload: response.data });
};

export const deleteCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.delete(`/Cabeleireiros/${_id}`);
    dispatch({ type: DELETE_CABELEIREIRO, payload: response.data });
};
