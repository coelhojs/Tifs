//import { create } from "apisauce";
import { api } from "../api/index";

export const FETCH_CLIENTES = "FETCH_CLIENTES";
export const FETCH_CLIENTE = "FETCH_CLIENTE";
export const CREATE_CLIENTE = "CREATE_CLIENTE";
export const DELETE_CLIENTE = "DELETE_CLIENTE";

export const FETCH_CABELEIREIROS = "FETCH_CABELEIREIROS";
export const FETCH_CABELEIREIRO = "FETCH_CABELEIREIRO";
export const CREATE_CABELEIREIRO = "CREATE_CABELEIREIRO";
export const DELETE_CABELEIREIRO = "DELETE_CABELEIREIRO";

const ROOT_URL = "http://localhost:3004";

export function fetchClientes() {
    const url = `${ROOT_URL}/Clientes`;
    const request = api.get(url);

    return {
        type: FETCH_CLIENTES,
        payload: request
    };
}

export function fetchCabeleireiros() {
    const url = `${ROOT_URL}/Cabeleireiros`;
    const request = api.get(url);

    return {
        type: FETCH_CABELEIREIROS,
        payload: request
    };
}
