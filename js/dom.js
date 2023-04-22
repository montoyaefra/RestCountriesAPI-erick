const $ = (selector) => document.querySelector(selector);

const newE = (tag) => document.createElement(tag);

const countries = $("#countries")

const newCard = (obj) =>{
    const div = newE("div")
    div.className = "col card-img card border-0 flex flex-row flex-wrap"
    let html = ""
    


    html +=`
    <div class="card-img card-img-modified">
      <img src="${obj.flags.png}" alt="${obj.name} flag" />
    </div>  
    <div>
      <h2>${obj.name.common}</h2>
      <p>Capital: ${obj.capital}</p>
      <p>Subregion: ${obj.subregion}</p>
      `
    
      
      for (let moneda in obj.currencies) {
        html += `<p>Currency: ${obj.currencies[moneda].name}</p>`;
      }

      if (obj.languages) {
        Object.keys(obj.languages).forEach((key) => {
          html += `<p>Language: ${obj.languages[key]}</p>`;
        });
      }

      if (obj.name.nativeName) {
        Object.keys(obj.name.nativeName).forEach((key) => {
          html += `<p>Native Name: ${obj.name.nativeName[key].common}</p>`
        });
      }

      html += ` 
      <p>Population: ${obj.population.toLocaleString()}</p>
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


export default {
    $,
    showCards,
    newE
}