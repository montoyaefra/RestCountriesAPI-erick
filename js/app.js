import data from "./data.js";
import dom from "./dom.js";

const URL ="https://restcountries.com/v3.1/all"


let datos=[]

dom.showCards(datos)
dom.showModal(datos)


    
const fetchData = async () => {
  datos = await data.getData(URL);
  dom.showCards(datos);
  dom.showModal(datos)
};

fetchData();

const countryInput = dom.$("#filter");

countryInput.addEventListener("keyup", () => {
  const filtro = countryInput.value.trim();
  const filtered = filtro === "" ? datos : data.filterByCountry(datos, filtro);
  dom.showCards(filtered);
});

const regionSelect = dom.$("#region-select");

regionSelect.addEventListener("change", () => {
  const region = regionSelect.value;
  const filtered = region === "" ? datos : data.filterByCountry(datos, region);
  dom.showCards(filtered);
});
