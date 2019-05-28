import history from '../history';
import { api } from "./index";
import { CREATE_CABELEIREIRO, DELETE_CABELEIREIRO, EDIT_CABELEIREIRO, FETCH_ALL_CABELEIREIROS, FETCH_CABELEIREIRO, FETCH_CABELEIREIRO_NAME } from './types';

export const createCabeleireiro = formValues => async (dispatch, getState) => {
    const response = await api.post('/cabeleireiros', { ...formValues });
    dispatch({ type: CREATE_CABELEIREIRO, payload: response.data });
    history.push('/');
};

export const fetchCabeleireiros = () => async dispatch => {
    const response = await api.get('/Cabeleireiros');
    dispatch({ type: FETCH_ALL_CABELEIREIROS, payload: response.data });
};

// export const fetchCabeleireiro = id => async dispatch => {
//     const response = await api.get(`/cabeleireiros/${_id}`);
//     dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
// };

export const fetchCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Cabeleireiros/${_id}`);
    console.log(response);
    dispatch({ type: FETCH_CABELEIREIRO, payload: response.data });
};

export const editCabeleireiro = (id, formValues) => async dispatch => {
    let _id = id;
    const response = await api.put(`/Cabeleireiros/${_id}`, formValues);
    console.log(response);
    dispatch({ type: EDIT_CABELEIREIRO, payload: response.data });
};

export const getCabeleireiroName = id => async dispatch => {
    let _id = id;
    const response = await api.get(`/Cabeleireiros/${_id}`);
    dispatch({ type: FETCH_CABELEIREIRO_NAME, payload: response.data });
};

export const deleteCabeleireiro = id => async dispatch => {
    let _id = id;
    const response = await api.delete(`/Cabeleireiros/${_id}`);
    dispatch({ type: DELETE_CABELEIREIRO, payload: response.data });
};

/*console.log("Testes endpoint /Cabeleireiros");
console.log("getAll:"); 
let getAllTest = api.get("/Cabeleireiros").then(response => response.data).then(console.log);
console.log("postTeste:"); 
let postTeste = api.post("/Cabeleireiros", {"nome": "Adicionado via VSCode",
                                            "sobrenome": "VSCode",
                                            "email": "vaassasa@gmail.com",
                                            "cnpj": "123333159",
                                            "telefone": "224456",
                                            "dataNascimento": "1010-11-11T00:00:00.000Z",
                                            "senha": "teste123",
                                            "repetirSenha": "1",
                                            "__v": 0}).then(console.log);

console.log("putTeste:"); 
let putTeste = api.put("/Cabeleireiros", {"_id": postTeste._id,
                                        "nome": "Adicionado via VSCode Editando",
                                        "sobrenome": "VSCode",
                                        "email": "vscodses@gmail.com",
                                        "cnpj": "101333356",
                                        "telefone": "122356",
                                        "dataNascimento": "1010-11-11T00:00:00.000Z",
                                        "senha": "teste123",
                                        "repetirSenha": "1",
                                        "__v": 0}).then(console.log);  

console.log("getAll:"); 
getAllTest = api.get("/Cabeleireiros").then(response => response.data).then(console.log);   

console.log("getIdTeste");
let getIdTeste = api.get("/Cabeleireiros/"+postTeste._id).then(response => response.data).then(console.log);  

console.log("delTeste");
let delTeste = api.delete("/Cabeleireiros/"+postTeste._id).then(response => response.data).then(console.log); */