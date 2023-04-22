import data from "./data.js";
import dom from "./dom.js";

const URL ="https://restcountries.com/v3.1/all"


const datos = await data.getData(URL)

dom.showCards(datos)

const country = dom.$("#filter")
const form = dom.$("#form")

country.addEventListener("keys", ()=>{
      let filtro = country.value;
      const filtered = filtro == " "? datos : data.filterByCountry(datos, filtro);
      dom.showCards(filtered);
    })

    