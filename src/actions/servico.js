import history from '../history';
import { api } from "./index";
import { CREATE_SERVICO, DELETE_SERVICO, EDIT_SERVICO, FETCH_ALL_SERVICOS, FETCH_SERVICO, FETCH_SERVICO_NAME } from './types';

export const createServico = formValues => async (dispatch, getState) => {
    const response = await api.post('/Servicos', { ...formValues });
    dispatch({ type: CREATE_SERVICO, payload: response });
    console.log(response);
    history.push('/Home');
};

export const fetchServicos = () => async dispatch => {
    const response = await api.get('/Servicos');
    dispatch({ type: FETCH_ALL_SERVICOS, payload: response });
};
export const fetchServico = id => async dispatch => {
    const response = await api.get(`/Servicos/${id}`);
    dispatch({ type: FETCH_SERVICO, payload: response });
};

export const editServico = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Servicos/${_id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_SERVICO, payload: response.data });
};

export const getServicoName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Servicos/${_id}`);
    dispatch({ type: FETCH_SERVICO_NAME, payload: response.data });
};

export const deleteServicos = id => async dispatch => {
    const response = await api.delete(`/Servicos/${id}`);
    dispatch({ type: DELETE_SERVICO, payload: id });
    console.log(response);
    history.push('/Servicos');
};

var servico = {
    "data": "2019-05-26T00:00:00.000Z",
    "cliente": "Inserindo Servico",
    "nome": "teste"
}

api.get("/Servicos").then(function(servicos){
console.log("Listando todos os servicos:");
console.log(servicos);

console.log("Inserindo servico: Inserindo Servico");
return api.post("/Servicos", servico);
})
.then(function(servicoInserido){
console.log("Servico inserido");
servico._id = servicoInserido.data._id;

console.log("Listando todos os servicos:");
return api.get("/Servicos");
})
.then(function(produtos){
console.log(produtos);

console.log("Alterando servico");
servico.nome = "Editando servico";
return api.put("/Servicos", servico);
})
.then(function(){
console.log("Servico alterado");

console.log("Obtendo servico alterado");
return api.get("/Servicos/" + servico._id)
})
.then(function(servicoRetornado){
console.log(servicoRetornado);

console.log("Excluindo servico");
return api.delete("/Servicos/",{"_id": servico._id});
})
.then(function(){
console.log("Servico excluído");

console.log("Listando todos os servicos:");
return api.get("/Servicos");
})
.then(function(servicos){
console.log(servicos);
});