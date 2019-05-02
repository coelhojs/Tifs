import { create } from "apisauce";

export const api = create({
    // baseURL: "https://quris.serveo.net"
    baseURL: "http://localhost:3004"
});

// export const createServico = formValues => async (dispatch, getState) => {
//     //const { userId } = getState().auth;
//     //const response = await api.post('/Clientes', { ...formValues, userId });
//     const response = await api.post('/Servico', { ...formValues });

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
