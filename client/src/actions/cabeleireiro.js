import { api } from "./index";
import { CREATE_CABELEIREIRO, EDIT_CABELEIREIRO, FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/Cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response });
    // history.push('/Cabeleireiros');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response });
};

export const fetchCabeleireiro = id => async dispatch => {
    const response = await api.get(`/Cabeleireiros/${id}`);
    console.log(response);
    dispatch({ type: FETCH_CABELEIREIRO, payload: response });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    console.log("id: " + id);
    console.log(formValues);


    const response = await api.patch(`/Cabeleireiros/${id}`, formValues);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
    // history.push('/Home');
};
