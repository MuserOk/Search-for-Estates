import { stays } from "./stays.js";

//-----crear promesa----
export const promesa = new Promise((resolve, reject) => {
    let llegoData = true;
    if (llegoData) {
        resolve(stays);
        console.log("creando promesa");
    } else {
        reject("no llego data");
    }
});