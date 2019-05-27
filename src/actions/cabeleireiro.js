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
    console.log(response);
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

// console.log("Testes endpoint /Cabeleireiros:");
// console.log("getAll:");
// let getAllTest = api.get("/Cabeleireiros").then(response => response.data).then(console.log);
// //let getTest = api.get("/Cabeleireiros/5cdca3cf4846a141f0c72d19").then(response => response.data.then(console.log));