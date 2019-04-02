import { create } from "apisauce";

export const api = create({
    baseURL: "http://localhost:3004",
    headers: { Accept: "application/vnd.github.v3+json" }
});

export const FETCH_CLIENTES = "FETCH_CLIENTES";
export const FETCH_CLIENTE = "FETCH_CLIENTE";
export const CREATE_CLIENTE = "CREATE_CLIENTE";
export const DELETE_CLIENTE = "DELETE_CLIENTE";

export const FETCH_CABELEIREIROS = "FETCH_CABELEIREIROS";
export const FETCH_CABELEIREIRO = "FETCH_CABELEIREIRO";
export const CREATE_CABELEIREIRO = "CREATE_CABELEIREIRO";
export const DELETE_CABELEIREIRO = "DELETE_CABELEIREIRO";

export function fetchClientes() {
    const url = `/Clientes`;
    const request = api.get(url);

    return {
        type: FETCH_CLIENTES,
        payload: request
    };
}

export function fetchCabeleireiros() {
    const url = `/Cabeleireiros`;
    const request = api.get(url);

    return {
        type: FETCH_CABELEIREIROS,
        payload: request
    };
}
