import { config } from "../config/config";

export const search = (searchText) => {
    return fetch(`${config.endpoint}?q=` + searchText, {
        method: "GET",
        headers: {
            "Ocp-Apim-Subscription-Key": "e156a36598594086b0a2edcdbd1bda38"
        }
    }).then(res => res.json()).then(res => {
        return res;
    })
}