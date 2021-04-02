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
        <a href="#" class="btn btn-primary">Details</a>
    </div>
    </div>
          `
        countriesDiv.appendChild(countryDiv)
    });

    // for (let i = 0; i < country.length; i++) {
    //     const element = country[i];
    //     console.log(element)
    //     const countryDiv = document.createElement('div')
    //     countryDiv.className = 'countryDiv'
    //     countryDiv.innerHTML = `
    //       <div class="card" style="width: 18rem;">
    //      <img src="${element.flag}" class="card-img-top" alt="...">
    //      <div class="card-body card-color">
    //     <h3 class="card-title">${element.name}</h3>
    //     <p class="card-text">Capital: ${element.capital}</p>
    //     <p class="card-text">Population: ${element.population}</p>
    //     <a href="#" class="btn btn-primary">Details</a>
    // </div>
    // </div>
    //       `
    //     countriesDiv.appendChild(countryDiv)
    // }
}