/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */
import { totalGuests } from "./searchGuests.js";
import { modalFilter } from "./seachLocation.js";

const modalNav = document.querySelector("#nav");
const conteiner = document.querySelector("#conteinerCards")
const fondoGris = document.querySelector("#overlay")
const btnCerrar = document.querySelector("#btnClose");
const body = document.querySelector("#body");
const btnSearch = document.querySelector("#btnSearch")

const inputAddLocation = document.querySelector("#inputLocation");
const modalGuests = document.querySelector("#btnGuests");
const menuCantGuests = document.querySelector("#menuCantGuests")


export const abrirModal = () => {
    modalNav.classList.remove("hidden");
    console.log("abriendo modal");
    body.classList.remove("mx-4");
    fondoGris.classList.remove("hidden");
    conteiner.classList.remove("min-h-screen");
    conteiner.classList.add("max-h-screen");
};


const cerrarModal = () => {
    modalNav.classList.add("hidden");
    body.classList.add("mx-4");
    console.log("cerrando el modal");
    menuCantGuests.classList.add("hidden");
    fondoGris.classList.add("hidden")
    conteiner.classList.remove("max-h-screen");
    conteiner.classList.add("min-h-screen");
};

btnCerrar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("entro a cerrar por boton x");
    cerrarModal();
});

document.addEventListener("click", (e) => {
    const isClickInside = modalNav.contains(e.target) || btnSearch.contains(e.target) || btnModal.contains(e.target);
    if (!isClickInside && !modalNav.classList.contains("hidden")) {
        console.log("click a fuera Activado");
        cerrarModal();
    }
});

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("btnSearch Activado");
    cerrarModal();
});

modalGuests.addEventListener("click", (e) => {
    e.preventDefault();
    menuCantGuests.classList.remove("hidden");
    menuCantGuests.classList.add("flex");
    totalGuests();
    console.log("se presionó el boton guests"); //NO CIERRA EL MODAL VER

});

//escuchador del input
inputAddLocation.addEventListener("click", (e) => {
    modalFilter();
});