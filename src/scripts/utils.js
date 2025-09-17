import { stays } from "./stays.js";

/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */
const btnModal = document.querySelector("#btnModal")
const modalNav = document.querySelector("#nav")
const btnCerrar = document.querySelector("#btnClose")
const body = document.querySelector("#body")

//------open / close modal search location-------
const abrirModal = () => {

    if (btnModal && modalNav) {
        btnModal.addEventListener("click", (e) => {
            e.preventDefault()
            modalNav.classList.remove("hidden")
            console.log("abriendo modal");
            body.classList.remove("mx-4");
        })
        btnCerrar.addEventListener("click", (e) => {
            e.preventDefault()
            modalNav.classList.add("hidden");
            body.classList.add("mx-4");
            console.log("cerrando el modal");
        })
        document.addEventListener("click", (e) => {
            const isClickInside = modalNav.contains(e.target) || btnModal.contains(e.target)
            if (!isClickInside && !modalNav.classList.contains("hidden")) {
                modalNav.classList.add("hidden")
                body.classList.add("mx-4");
                console.log("cerrando el modal");
            }
        })

    }
};

export { abrirModal };

//-----crear promesa----
let promesa = new Promise((resolve, reject) => {
    let llegoData = true;
    setTimeout(() => {
        if (llegoData) {
            resolve(stays);
        } else {
            reject("no llego data");
        }
    }, 2000);
});


export { promesa };