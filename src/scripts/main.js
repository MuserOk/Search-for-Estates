/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { getLocation } from "./addCards.js";
import { abrirModal } from "./utils.js";


//ACTIVO AL INICIO, MUESTRA TODAS LAS ESTANCIAS Y SE DESACTIVA CUANDO SE HACE UN FILTRO(hacerlo)
let array = [undefined, undefined, undefined];
getLocation(array);

const btnModal = document.querySelector("#btnModal");

//si se presiona btn filtros...
if (btnModal) {
    btnModal.addEventListener("click", (e) => {
        abrirModal();
    })
}