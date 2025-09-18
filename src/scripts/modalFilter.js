//------Search location -----
import { getLocation } from "./addCards.js";
import { promesa } from "./api.js";
import { abrirGuests, initModal } from "./utils.js"; //inicializar los listener de cerrar...

let inputAddLocation = document.querySelector("#inputLocation");
let modalListSuge = document.querySelector("#listSugCountry"); //el ul


//iniciar el filtrado
export const modalFilter = () => {
    if (!inputAddLocation) return;

    inputAddLocation.addEventListener("input", async(e) => {
        let searchWord = e.target.value.toLowerCase().trim();

        //------searching-filtering-----
        if (searchWord.length < 3) {
            modalListSuge.classList.add("hidden");
            modalListSuge.innerHTML = "";
            return;
        }
        //buscamos datos y luego la coincidencia
        let datos = await promesa;


        let filtered = datos.filter(stay => {
            stay.city.toLowerCase().startsWith(searchWord) ||
                stay.country.toLowerCase().startsWith(searchWord)
        });

        //ABRIENDO GUESTS y guardando resultado --------------------------------------------------
        let total = abrirGuests();
        //luego agregar numero para comparar y filtrar -------------------------------------------


        let uniqueLoc = [...new Set(filtered.map(stay => `${stay.city}, ${stay.country}, ${total}`))];

        if (uniqueLoc.length === 0) {
            modalListSuge.classList.add("hidden");
            modalListSuge.innerHTML = "";
            return;
        }

        initModal();

        modalListSuge.innerHTML = "";
        //agregar las opciones de coincidencias
        uniqueLoc.forEach(locationWord => {
            let li = document.createElement("li");
            li.textContent = locationWord;
            li.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer";
        });

        li.addEventListener("click", () => {
            inputAddLocation.value = locationWord;
            modalListSuge.classList.add("hidden");
            modalListSuge.innerHTML = "";

            getLocation([locationWord]);
        });

        modalListSuge.appendChild(li);

        modalListSuge.classList.remove("hidden");

    });
}