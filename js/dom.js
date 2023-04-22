const $ = (selector) => document.querySelector(selector);

const newE = (tag) => document.createElement(tag);

const countries = $("#countries")

const newCard = (obj) =>{
    const div = newE("div")
    div.className = "card-img mb-4 card border-0 rounded-3 carta shadow"
    let html = ""
    
    html +=`
    <div class=" card-img-modified card-img">
      <img class="d-flex flex-wrap rounded-3" src="${obj.flags.png}" alt="${obj.name} flag" />
    </div>  
    <div class="d-flex flex-column text-center">
      <h4 class="fw-bold ">${obj.name.common}</h4>
      <p><span class="fw-semibold">Capital:</span> ${obj.capital}</p>
      <p><span class="fw-semibold">Subregion:</span> ${obj.subregion}</p>
      `
       
      for (let moneda in obj.currencies) {
        html += `<p><span class="fw-semibold">Currency:</span> ${obj.currencies[moneda].name}</p>`;
        break
      }

      if (obj.languages) {
        const languages = Object.keys(obj.languages).map((key) => obj.languages[key]).join(", ");
        html += `<p><span class="fw-semibold">Language:</span> ${languages}</p>`;
      }

      const nativeName = obj.name.nativeName;
      for (let key in nativeName) {
     html += `<p><span class="fw-semibold">Native Name:</span> ${nativeName[key].common}</p>`;
       break;
      }

      html += `
      <p><span class="fw-semibold">Region:</span> ${obj.region}</p>
      <p><span class="fw-semibold">Population:</span> ${obj.population.toLocaleString()}</p>
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


export default {
    $,
    showCards,
}