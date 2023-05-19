const getData = async (URL) => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error)
}

const filterByCountry = (arr, filtro) => {
  let filtered = arr.filter(elem => {
    return elem.name.common.toLowerCase().includes(filtro.toLowerCase()) || 
           elem.region.toLowerCase().includes(filtro.toLowerCase())
  });
  return filtered;
}


export default {
  getData,
  filterByCountry,

}
