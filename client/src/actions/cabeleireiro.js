import { api } from "./index";
import { CREATE_CABELEIREIRO, EDIT_CABELEIREIRO, FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, FETCH_CABELEIREIRO_NAME } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/cabeleireiros', { ...formValues });
    console.log(response);

    //dispatch({ type: CREATE_CABELEIREIRO, payload: response.data._id });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response.data });
    // history.push('/Cabeleireiros');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response });
};

export const fetchCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/cabeleireiros/${_id}`);
    dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    const response = await api.put(`/cabeleireiros/${id}`, formValues);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
    // history.push('/Home');
};

export const getCabeleireiroName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/cabeleireiros/${_id}`);
    dispatch({ type: FETCH_CABELEIREIRO_NAME, payload: response.data });
    // history.push('/Home');
};
