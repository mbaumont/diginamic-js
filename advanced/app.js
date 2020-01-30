//Récuperation de l'import planet
const myClass = require("./planet");
const axios = require('axios');
let tab = [];

axios.get('https://swapi.co/api/planets')
  .then(function (response) {
        for(let resp of response.data.results){
            var planet = new myClass.Planet(resp);
            tab.push(planet);  
        }
        tab.map(x=>console.log(`Planet "${x.name}" - Population : ${x.population}`));
        // Appel de la fonction statique de planet.js
        console.log(`Population totale: ${myClass.Planet.countPlanetsPopulation(tab)}`);
    })
  .catch(function (error) {
    console.log(error);
  });

