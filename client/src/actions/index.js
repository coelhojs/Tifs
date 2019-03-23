//import { create } from "apisauce";
import { api } from "../api/index";

export const FETCH_CLIENTES = "FETCH_CLIENTES";
export const FETCH_CLIENTE = "FETCH_CLIENTE";
export const CREATE_CLIENTE = "CREATE_CLIENTE";
export const DELETE_CLIENTE = "DELETE_CLIENTE";

const ROOT_URL = "http://localhost:3004/Clientes";

export function fetchClientes() {
    const url = ROOT_URL;
    const request = api.get(url);

    return {
        type: FETCH_CLIENTES,
        payload: request
    };
}
