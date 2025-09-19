/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
import { getLocation } from "./addCards.js";
import { abrirModal } from "./utils.js";


const btnModal = document.querySelector("#btnModal");
const btnCerrar = document.querySelector("#btnClose");
const body = document.querySelector("#body");
const btnSearch = document.querySelector("#btnSearch");
const modoDark = document.querySelector("#modoDark");

//modo dark
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

//ACTIVO AL INICIO, MUESTRA TODAS LAS ESTANCIAS Y SE DESACTIVA CUANDO SE HACE UN FILTRO(hacerlo)
let arrayAll = [undefined, undefined, undefined];
//let arrayAll = ["Vaasa", "Finland", 5];
getLocation(arrayAll);

//si se presiona btn filtros...

btnModal.addEventListener("click", () => {
    abrirModal();
    console.log("se abrio modal");

    console.log("volvio a main");

})

//----------------dark mode ---------
// Detectar preferencia del usuario
if (localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}