
const classPlanet = require("./planet");
const axios = require('axios');

async function loadApi(url="https://swapi.co/api/planets/"){
    // On continue tant que la prochaine reference n'est pas null
    try{
        let ldata = await (axios.get(url));
        let data = ldata.data;
        let tab = data.results;
        if (data.next != null){
            tab = tab.concat(await (loadApi(data.next)));
        }
        return tab;
    }catch(e){
        console.log(e);
    }
}

//Obligation d'utiliser un async/await pour attendre d'avoir loader toutes les données avant de faire le map
async function runPlanet(){
    let tab = (await loadApi())
    .map(e=>{ return new classPlanet.Planet(e);});
    tab.forEach(e=>{console.log(`Planet "${e.name}" - Population : ${e.population}`)});   
    console.log(`Population totale: ${classPlanet.Planet.countPlanetsPopulation(tab)}`);  
}
// On lance la fonction
runPlanet();
