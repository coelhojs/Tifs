import { create } from "apisauce";

export const api = create({
    //baseURL: "https://quris.serveo.net",
    baseURL: "http://localhost:3001",
    headers: {
        'Access-Control-Allow-Origin': 'Content-Type'
    }

    //baseURL: "http://localhost:3004"
    //baseURL: "134.209.243.214:3001"
});