//------Search location -----
import { promesa } from "./getApi.js";
import { getLocation } from "./addCards.js";



let modalListSuge = document.querySelector("#listSugCountry"); //el ul


//iniciar el filtrado
export const modalFilter = () => {
    if (!inputAddLocation) return;

    //escuchador del input
    inputAddLocation.addEventListener("input", async(e) => {


        let searchWord = e.target.value.toLowerCase().trim();

        //------searching-filtering-----
        if (searchWord.length < 3) {
            modalListSuge.classList.add("hidden");
            modalListSuge.innerHTML = "";
            return;
        }
        //buscamos datos
        let datos = await promesa;


        let filtered = datos.filter(stay => {
            stay.city.toLowerCase().startsWith(searchWord) ||
                stay.country.toLowerCase().startsWith(searchWord)
            return
        });

        if (filtered.length === 0) {
            modalListSuge.classList.add("hidden");
            modalListSuge.innerHTML = "";
            return;
        }



        //ABRIENDO GUESTS y guardando resultado --------------------------------------------------
        let total = abrirGuests();
        //luego agregar numero para comparar y filtrar -------------------------------------------


        let uniqueLoc = [...new Set(filtered.map(stay => `${stay.city}, ${stay.country}`))];

        modalListSuge.innerHTML = "";
        //agregar las opciones de coincidencias
        uniqueLoc.forEach(locationWord => {
            let li = document.createElement("li");
            li.textContent = locationWord;
            li.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer";

            li.addEventListener("click", () => {
                inputAddLocation.value = locationWord;
                modalListSuge.classList.add("hidden");
                modalListSuge.innerHTML = "";

                let [city, country] = locationWord.split(",").map(s => s.trim());

                let totalGuests = abrirGuests();

                const arrayFiltros = [city, country, totalGuests];
                getLocation(arrayFiltros);

            });
            modalListSuge.appendChild(li);
        });
        modalListSuge.classList.remove("hidden");;
    });
}


/* //escuchador del input
inputAddLocation.addEventListener("input", async(e) => {
    modalFilter();
}) */