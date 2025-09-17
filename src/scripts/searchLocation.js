//------Search location -----
import { stays } from "./stays.js";
console.log(stays);

let inputLoc = document.querySelector("#inputLocation");
let searchCountry = document.querySelector("#conteinerSugCountry");
let pressSearch = document.querySelector("#btnSearch");

const location = () => {
    if (inputLoc) {
        inputLoc.addEventListener("input", (e) => {
            let searchText = e.target.value.toLowerCase();

            //------searching-filtering-----
            if (searchText.length < 3) {
                searchCountry.classList.add("hidden");
                searchCountry.innerHTML = "";
                return;
            }
            let filteredStays = stays.filter(stay => {
                stay.country.toLowerCase().startsWith(searchText) ||
                    (stay.maxGuests)
            })

            let uniqueLoc = [...new Set(filtered.map(stay => `${stay.city},${stay.maxGuests}`))];

            searchCountry.innerHTML = "";

            if (uniqueLoc.length === 0) {
                searchCountry.classList.add("hidden");
                searchCountry.innerHTML = "";
                inputLoc.classList.add("border-red-500");
                inputLoc.placeholder = "Sorry, we can't offer service in this country."
                return;
            }

            inputLoc.classList.remove("border-red-500");
            inputLoc.placeholder = "Add location";

            uniqueCountry.forEach(locationText => {
                let li = document.createElement("li");
                li.textContent = locationText;
                li.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer";
            });

            li.addEventListener("click", () => {
                inputLoc.value = locationText;
                searchCountry.classList.add("hidden");
                searchCountry.innerHTML = "";
            });
            searchCountry.appendChild(li);

            searchCountry.classList.remove("hidden");

            //--search Location---
            pressSearch.addEventListener("click", () => {
                searchCountry.classList.add("hidden");
                return li.textContent;
            })
        });
    }
}
export { location };