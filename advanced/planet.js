class Planet{
    constructor({name,population}){
        this.name = name;
        this.population = population;
    }

    static countPlanetsPopulation(tabPlanet){
        // recupérer que les populations dans un tableau en enlevant les unknown
        let tabPop = tabPlanet.filter(e=>{
            if (e.population != "unknown"){
                return(true);}
        }).map(e=>e.population);
        return tabPop.reduce((acc,value)=>parseInt(acc)+parseInt(value),0);
    }
}

//Export du module 
module.exports.Planet = Planet;