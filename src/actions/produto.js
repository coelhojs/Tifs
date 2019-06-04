import { api } from "./index";
import history from '../history';
import { CREATE_PRODUTO, DELETE_PRODUTO, EDIT_PRODUTO, FETCH_ALL_PRODUTOS, FETCH_PRODUTO, FETCH_PRODUTO_NAME } from './types';

export const createProduto = formValues => async (dispatch, getState) => {
    const response = await api.post('/Produtos', { ...formValues });
    dispatch({ type: CREATE_PRODUTO, payload: response });
    history.push('/Produtos');
};

export const fetchProdutos = () => async dispatch => {
    const response = await api.get('/Produtos');
    dispatch({ type: FETCH_ALL_PRODUTOS, payload: response });
};
export const fetchProduto = id => async dispatch => {
    const response = await api.get(`/Produtos/${id}`);
    dispatch({ type: FETCH_PRODUTO, payload: response });
};

export const editProduto = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Produtos/${_id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_PRODUTO, payload: response.data });
};

export const getProdutoName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Produtos/${_id}`);
    dispatch({ type: FETCH_PRODUTO_NAME, payload: response.data });
};

export const deleteProdutos = id => async dispatch => {
    const response = await api.delete(`/Produtos/${id}`);
    dispatch({ type: DELETE_PRODUTO, payload: id });
    console.log(response);

    history.push('/Produtos');
};

var produto = {
    "categoria": "Inserindo Produto",
    "marca": "Teste",
    "linha": "bureal",
    "descricao": "testando",
    "conteudo": "10ml",
    "medida": "10"
}

api.get("/Produtos").then(function(produtos){
console.log("Listando todos os produtos:");
console.log(produtos);

console.log("Inserindo produto: Inserindo Produto");
return api.post("/Produtos", produto);
})
.then(function(produtoInserido){
console.log("Produto inserido");
produto._id = produtoInserido.data._id;

console.log("Listando todos os produtos:");
return api.get("/Produtos");
})
.then(function(produtos){
console.log(produtos);

console.log("Alterando produto");
produto.nome = "Editando Produto";
return api.put("/Produtos", produto);
})
.then(function(){
console.log("Produto alterado");

console.log("Obtendo produto alterado");
return api.get("/Produtos/" + produto._id)
})
.then(function(produtoRetornado){
console.log(produtoRetornado);

console.log("Excluindo produto");
return api.delete("/Produtos/ "+ produto._id);
})
.then(function(){
console.log("Produto excluído");

console.log("Listando todos os produtos:");
return api.get("/Produtos");
})
.then(function(produtos){
console.log(produtos);
});