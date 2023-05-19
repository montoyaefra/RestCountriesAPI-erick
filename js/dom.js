const $ = (selector) => document.querySelector(selector);

const newE = (tag) => document.createElement(tag);

const countries = $("#countries")
const Modal= $("#Modal")

const newCard = (obj) =>{
    const div = newE("div")
    div.className = "col  carta  mb-4 countryCard"
    div.id = obj.name.common
    let html = ""
    
    html +=`
    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-obj="0" class="card-img-modified card-img shadow rounded-3 pb-3">
      <img class="d-flex flex-wrap rounded-top-3 rounded-bottom-0 mb-3 card w-100 h-100 imagen" src="${obj.flags.png}" alt="${obj.name} flag" />
    <div class="d-flex flex-column elem">
      <h5 class=" mb-4 ps-3">${obj.name.common}</h5>
      <p><span class="fw-semibold ps-3">Population:</span> ${obj.population.toLocaleString()}</p>
      <p><span class="fw-semibold ps-3">Capital:</span> ${obj.capital}</p>
      <p><span class="fw-semibold ps-3">Region:</span> ${obj.region}</p>
      
      </div>  
    </div>
      `
      
    div.innerHTML = html
    return div
    
}

const showCards = (arr)=>{
    
    countries.innerHTML=""

    arr.forEach(element => {
        const card = newCard(element)
        countries.appendChild(card)
      });
}


const newModal = (obj) =>{
  const div = newE("div")
  div.className = "d-flex flex-row justify-content-center align-content-center align-items-center mt-5 text-center gap-4 mb-5 flex-wrap"
  let html = ""
  
  html +=`
  <div class=" ">
    <img class="d-flex flex-wrap rounded-3 imagen2" src="${obj.flags.png}" alt="${obj.name} flag" />
  </div>  
  <div class="d-flex flex-column text-center mb-5 ps-2">
  <h4 class=" pb-3">${obj.name.common}</h4>
  `
  const nativeName = obj.name.nativeName;
    for (let key in nativeName) {
   html += `<p><span class="fw-semibold">Native Name:</span> ${nativeName[key].common}</p>`;
     break;
    }

  html += `
  <p><span class="fw-semibold">Population:</span> ${obj.population.toLocaleString()}</p>
  <p><span class="fw-semibold">Region:</span> ${obj.region}</p>
  <p><span class="fw-semibold">Subregion:</span> ${obj.subregion}</p>
  <p><span class="fw-semibold">Capital:</span> ${obj.capital}</p> 
    `
    for (let moneda in obj.currencies) {
      html += `<p><span class="fw-semibold">Currency:</span> ${obj.currencies[moneda].name}</p>`;
      break
    }

    if (obj.languages) {
      const languages = Object.keys(obj.languages).map((key) => obj.languages[key]).join(", ");
      html += `<p><span class="fw-semibold ">Language:</span> ${languages}</p>`;
    }

    if(obj.borders){
      const borders = Object.keys(obj.borders).map((key) => obj.borders[key]).join(" , ");
      html += `<p><span class="fw-semibold">Border Countries:</span> ${obj.borders} </p>
      </div>
      `
    }

  div.innerHTML = html
  return div
  
}

const showModal = (arr)=>{
    
  Modal.innerHTML=""

  arr.forEach(element => {
      const carta = newModal(element)
      Modal.appendChild(carta)
    });
}



export default {
    $,
    showCards, 
    showModal  
}