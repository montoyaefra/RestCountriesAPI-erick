import data from "./data.js";
import dom from "./dom.js";

const URL ="https://restcountries.com/v3.1/all"


const datos = await data.getData(URL)

dom.showCards(datos)

