import data from "./data.js";
import dom from "./dom.js";

const URL ="https://restcountries.com/v3.1/all"


let datos=[]


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

//filtro modal
const modalCountry = dom.$("#filter2")

modalCountry.addEventListener("keyup", () => {
  const filtro = modalCountry.value.trim();
  const filtered = filtro === "" ? datos : data.filterByCountry(datos, filtro);
  dom.showModal(filtered);
});



//dark mode
const html = document.querySelector("html")
console.log(html.dataset);

const btn = dom.$("#switch")

btn.addEventListener("click", () => {

  html.dataset.bsTheme =  html.dataset.bsTheme == "light"? "dark" : "light";
})