import { create } from "apisauce";

export const api = create({
    // //Base json-db:
    // baseURL: "http://localhost:3004"
    //
    //Banco de dados local TIS:
    baseURL: "http://localhost:3001",
    headers: {
        'Access-Control-Allow-Origin': 'Content-Type'
    }

    //Banco de dados online TIS:
    //baseURL: "134.209.243.214:3001"
});