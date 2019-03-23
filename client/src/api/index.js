import { create } from "apisauce";

export const api = create({
    baseURL: "http://localhost:3004",
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
