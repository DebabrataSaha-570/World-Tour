fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => countriesDiv(json))

const countriesDiv = country => {
    const countriesDiv = document.getElementById("displayCountry")
    console.log(country)

    country.forEach(element => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'countryDiv'
        countryDiv.innerHTML = `
          <div class="card" style="width: 18rem;">
         <img src="${element.flag}" class="card-img-top" alt="...">
         <div class="card-body card-color">
        <h3 class="card-title">${element.name}</h3>
        <p class="card-text">Capital: ${element.capital}</p>
        <p class="card-text">Population: ${element.population}</p>
        <p class="card-text">Region: ${element.region}</p>
        <a href="#" onClick="CountryDetail('${element.name}')" class="btn btn-primary">Details</a>
    </div>
    </div>
          `
        countriesDiv.appendChild(countryDiv)
    });

}

const CountryDetail = name => {
    console.log(name)
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
  .then(response => response.json())
  .then(json => renderCountryInfo(json[0]))
}
const renderCountryInfo = country => {
    console.log(country)
    const countryDetails = document.getElementById('countryDetails')
    countryDetails.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${country.flag}" class="card-img-top" alt="...">
    <div class="card-body card-color">
   <h3 class="card-title">${country.name}</h3>
   <p class="card-text">Region:  ${country.subregion}</p>
   <p class="card-text">NativeName:  ${country.nativeName}</p>
   <p class="card-text">Currency Symbol:  ${country.currencies[0].symbol}</p>
   
</div>
</div>
    `

}

