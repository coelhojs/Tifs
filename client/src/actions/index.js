import { create } from "apisauce";
import history from '../history';
import { CREATE_CLIENTE, CREATE_SERVICO, FETCH_CLIENTES, FETCH_SERVICOS } from './types';

export const api = create({
    baseURL: "https://quris.serveo.net"
    //baseURL: "http://localhost:3004"
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

export const fetchServicos = () => async dispatch => {
    const response = await api.get('/servicos/nomes');
    dispatch({ type: FETCH_SERVICOS, payload: response });
};

export const createServico = () => async dispatch => {
    const response = await api.post('/cabeleireiro/5caf9cabb066082354c1cb0a/servicos/');
    console.log(response);
    dispatch({ type: CREATE_SERVICO, payload: response });
    history.push('/');
};


// export const createServico = formValues => async (dispatch, getState) => {
//     //const { userId } = getState().auth;
//     //const response = await api.post('/Clientes', { ...formValues, userId });
//     const response = await api.post('/Anamnese', { ...formValues });

//     dispatch({ type: CREATE_SERVICO, payload: response });
//     history.push('/');
// };

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
