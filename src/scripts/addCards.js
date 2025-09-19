import { promesa } from "./getApi.js";

let conteiner = document.querySelector("#conteinerCards")


export async function getLocation(arrayIn) {
    let [city, country, maxGuests] = arrayIn;
    //corriendo spinner
    conteiner.innerHTML = `
    <div class="text-center">
    <div role="status class="flex flex-col justify-center items-center">
        <svg aria-hidden="true" class="inline w-24 h-24 text-gray-200 animate-spin dark:text-gray-100 fill-[#eb5757]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only bg-amber-300">Loading...</span>
    </div>
    </div>
    `
    try {
        setTimeout(async() => {
                    let respuesta = await promesa;
                    console.log(respuesta);
                    //verifico si el array es un filtrado o es el inicio
                    let filtrados = respuesta.filter(stay => {
                        let matchCity = city ? stay.city.toLowerCase().includes(city.toLowerCase()) : true;
                        let matchCountry = country ? stay.country.toLowerCase().includes(country.toLowerCase()) : true;
                        let matchGuests = maxGuests ? stay.maxGuests >= maxGuests : true;
                        return matchCity && matchCountry && matchGuests;
                    });
                    conteiner.innerHTML = "";
                    //si no hay estancia en el lugar o no hay hospedaje segun la cantidad muestra alguna llamada
                    if (filtrados.length === 0) {
                        conteiner.innerHTML = `<p class="text-red-500 text-lg">No se encontraron estancias con esos filtros</p>`;
                        return;
                    }

                    const total = filtrados.length > 12 ? `12 + stays` : `${filtrados.length} stays`;

                    conteiner.innerHTML = `
          <div class="flex w-full justify-start">
            <div class="flex justify-between py-6 items-center w-full">
              <!--country (podés elegir mostrar el primero o agrupar después)-->
              <h1 class="text-4xl font-bold dark:text-gray-300">Stay in ${city || `Finland`}${country? `, ${country}` : ''} </h1>
              <!--cantidad de estancias en el país-->
              <p class="text-gray-700 dark:text-gray-300">${total}</p>
            </div>
          </div>
          <section class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 gap-6 lg:ml-1"></section>
          `;
                    const section = conteiner.querySelector("section");
                    filtrados.forEach(({ beds, photo, rating, superHost, title, type }) => {
                                section.innerHTML += `
          <div class="group hover:bg-[#e77474] active:bg-[#e77474]  dark:hover:bg-gray-700 transition duration-700 rounded-3xl  hover:shadow-black/50 active:shadow-black/50 dark:hover:shadow-gray-200 dark:active:shadow-gray-200 hover:shadow-[0px_0px_12px] active:shadow-[0px_0px_12px]">
            <!--photo-->
            <img class="rounded-3xl w-full h-[350px] object-cover group-hover:rounded-b-none duration-initial dark:opacity-60 dark:group-hover:opacity-100 group-active:opacity-100 transition duration-300" src="${photo}" alt="photo">
            <div class="flex justify-between px-2 py-2 items-center">
              <!--superHost + type + beds + rating-->
              <div class="flex gap-2 items-center">
                ${superHost ? `<span class="text-center border-1 group-hover:border-white dark:text-white group-active:border-white  group-hover:text-white group-active:text-white: rounded-2xl px-2 py-0.5">SUPER HOST</span>` : ""}
                <p class="text-gray-400 group-hover:text-white group-active:text-white  dark:text-gray-200">${type}. ${beds} beds</p>
              </div>
              <div class="flex gap-1 items-center">
                <div class="image "> 
                  <svg class="w-4 h-4 fill-[#eb5757] " viewBox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg "><g id="SVGRepo_bgCarrier " stroke-width="0 "></g><g id="SVGRepo_tracerCarrier " stroke-linecap="round " stroke-linejoin="round "></g><g id="SVGRepo_iconCarrier "> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z " stroke="0 " stroke-width="2 " stroke-linecap="round " stroke-linejoin="round "></path> </g></svg> 
                </div> 
                <!--rating-->
                <p class="group-hover:text-white group-active:text-white dark:text-gray-200">${rating}</p>
              </div>
            </div>
            <h2 class="px-2 pb-2 text-lg font-medium group-hover:text-white group-active:text-white group-hover:font-medium group-active:font-medium   dark:text-gray-200">${title}</h2>
          </div>
          `;
  })

  }, 2000)
}catch(error){
  console.log("error al leer los datos");
}
}