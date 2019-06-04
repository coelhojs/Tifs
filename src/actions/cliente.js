import { api } from "./index";
import history from '../history';
import { CREATE_CLIENTE, DELETE_CLIENTE, EDIT_CLIENTE, FETCH_ALL_CLIENTES, FETCH_CLIENTE, FETCH_CLIENTE_NAME } from './types';

export const createCliente = formValues => async (dispatch, getState) => {
    const response = await api.post('/Clientes', { ...formValues });
    dispatch({ type: CREATE_CLIENTE, payload: response });
    history.push('/Clientes');
};

export const fetchClientes = () => async dispatch => {
    const response = await api.get('/Clientes');
    dispatch({ type: FETCH_ALL_CLIENTES, payload: response });
};

export const fetchCliente = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Clientes/${_id}`);
    console.log(response);
    dispatch({ type: FETCH_CLIENTE, payload: response.data });
};

export const editCliente = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Clientes/${_id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_CLIENTE, payload: response.data });
};

export const getClienteName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Clientes/${_id}`);
    dispatch({ type: FETCH_CLIENTE_NAME, payload: response.data });
};

export const deleteCliente = id => async dispatch => {
    let _id = id;
    const response = await api.delete(`/Clientes/${_id}`);
    dispatch({ type: DELETE_CLIENTE, payload: response.data });
};

var cliente = {
    "nome": "Inserindo Cliente",
    "cpf": "10723571600",
    "telefone": "994020508",
    "nascimento": "1985-10-13T00:36:36.002Z",
    "alergias": false,
    "sexo": "feminino",
}
api.get("/Clientes").then(function(clientes){
    console.log("Listando todos os clientes:");
    console.log(clientes);

    console.log("Inserindo cliente: Inserindo Cliente");
    return api.post("/Clientes", cliente);
})
.then(function(clienteInserido){
    console.log("Cliente inserido");
    cliente._id = clienteInserido.data._id;

    console.log("Listando todos os clientes:");
    return api.get("/Clientes");
})
.then(function(clientes){
    console.log(clientes);

    console.log("Alterando cliente");
    cliente.nome = "Editando Cliente";
    return api.put("/Clientes", cliente);
})
.then(function(){
    console.log("Cliente alterado");

    console.log("Obtendo cliente alterado");
    return api.get("/Clientes/" + cliente._id)
})
.then(function(clienteRetornado){
    console.log(clienteRetornado);

    console.log("Excluindo cliente");
    return api.delete("/Clientes/",{"_id": cliente._id});
})
.then(function(){
    console.log("Cliente excluído");

    console.log("Listando todos os clientes:");
    return api.get("/Clientes");
})
.then(function(clientes){
    console.log(clientes);
});