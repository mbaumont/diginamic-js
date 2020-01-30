//Récuperation de l'import planet
const classPlanet = require("./planet");
const axios = require('axios');
let ref = "https://swapi.co/api/planets/";
let tab = [];

async function loadApi(){
    // On continue tant que la prochaine reference n'est pas null
    while(ref!=null){
            //utilisation de l'asynchrone pour ne pas continuer le reste tant que le chargement n'est pas fini
            await (axios.get(ref))
                .then(function (response) {
                    // Récuperation des résultats et planetes mises dans le tableau
                        tab = tab.concat(response.data.results.map(e=>{
                        return new classPlanet.Planet(e);
                    }))   
                    // Appel de la fonction statique de planet.js
                    ref = response.data.next;
                })                
                .catch(function (error) {
                });        
        }
    tab.map(x=>console.log(`Planet "${x.name}" - Population : ${x.population}`));   
    console.log(`Population totale: ${classPlanet.Planet.countPlanetsPopulation(tab)}`);  
}

loadApi();
