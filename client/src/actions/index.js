import { create } from "apisauce";
import history from '../history';
import {
    FETCH_CLIENTES,
    FETCH_CLIENTE,
    CREATE_CLIENTE,
    DELETE_CLIENTE,
    FETCH_CABELEIREIROS,
    FETCH_CABELEIREIRO,
    CREATE_CABELEIREIRO,
    DELETE_CABELEIREIRO
} from './types';

export const api = create({
    baseURL: "http://localhost:3004"
});

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



// export function createCliente(props) {
//     const url = "/Clientes";
//     const request = api.post(url, props);

//     return {
//         type: CREATE_CLIENTE,
//         payload: request
//     };
// }

// export function fetchClientes() {
//     const url = `/Clientes`;
//     const request = api.get(url);

//     return {
//         type: FETCH_CLIENTES,
//         payload: request
//     };
// }

// export function fetchCabeleireiros() {
//     const url = `/Cabeleireiros`;
//     const request = api.get(url);

//     return {
//         type: FETCH_CABELEIREIROS,
//         payload: request
//     };
// }
