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

var cabeleireiro = {
                    "nome": "Inserindo Cabeleireiro",
                    "sobrenome": "Teste",
                    "email": "testecabeleireiro@gmail.com",
                    "cnpj": "123333181",
                    "telefone": "224463",
                    "dataNascimento": "1010-11-11T00:00:00.000Z",
                    "senha": "teste123",
                    "repetirSenha": "1"
}

api.get("/cabeleireiros").then(function(cabeleireiros){
    console.log("Listando todos os cabeleireiros:");
    console.log(cabeleireiros);

    console.log("Inserindo cabeleireiro: Inserindo cabeleireiro");
    return api.post("/cabeleireiros", cabeleireiro);
})
.then(function(cabeleireiroInserido){
    console.log("Cabeleireiro inserido");
    cabeleireiro._id = cabeleireiroInserido.data._id;

    console.log("Listando todos os cabeleireiro:");
    return api.get("/cabeleireiros");
})
.then(function(cabeleireiros){
    console.log(cabeleireiros);

    console.log("Alterando cabeleireiro");
    cabeleireiro.nome = "Editando Cabeleireiro";
    return api.put("/cabeleireiros", cabeleireiro);
})
.then(function(){
    console.log("Cabeleiriero alterado");

    console.log("Obtendo cabeleireiro alterado");
    return api.get("/cabeleireiros/" + cabeleireiro._id)
})
.then(function(cabeleireiroRetornado){
    console.log(cabeleireiroRetornado);

    console.log("Excluindo cabeleireiro");
    return api.delete("/cabeleireiros/",{"_id": cabeleireiro._id});
})
.then(function(){
    console.log("Cabeleireiro excluído");

    console.log("Listando todos os cabeleireiros:");
    return api.get("/Cabeleireiros");
})
.then(function(cabeleireiros){
    console.log(cabeleireiros);
});