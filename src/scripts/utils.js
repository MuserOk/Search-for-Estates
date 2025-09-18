/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

const modalNav = document.querySelector("#nav");
const btnCerrar = document.querySelector("#btnClose");
const body = document.querySelector("#body");
const btnSearch = document.querySelector("#btnSearch")
const modalGuests = document.querySelector("#btnGuest");
const menuCantGuests = document.querySelector("#menuCantGuests")
    //------open / close modal search location-------

export const abrirModal = () => {
    modalNav.classList.remove("hidden");
    console.log("abriendo modal");
    body.classList.remove("mx-4");
};


const cerrarModal = () => {
    modalNav.classList.add("hidden");
    body.classList.add("mx-4");
    console.log("cerrando el modal");
    menuCantGuests.classList.add("hidden");
};


export const initModal = () => {
    btnCerrar.addEventListener("click", (e) => {
        e.preventDefault()
        cerrarModal();
    });

    document.addEventListener("click", (e) => {
        const isClickInside = modalNav.contains(e.target) || btnSearch.contains(e.target)
        if (!isClickInside && !modalNav.classList.contains("hidden")) {
            cerrarModal();
        }
    });
    btnSearch.addEventListener("click", (e) => {
        e.preventDefault();
        cerrarModal();
    });
};

export const abrirGuests = () => {
    modalGuests.addEventListener("click", (e) => {
        e.preventDefault();
        menuCantGuests.classList.remove("hidden");
        console.log("se presionó el boton guests"); //NO CIERRA EL MODAL VER

    });
};