/*
var notes=[37,4,18,26,33,30,10];
var notesSur20 = notes.map(i=>(i/2));
notesSur20 = notesSur20.filter(i=>i>=10);
var MoyenneNotes = notesSur20.reduce((a,i)=>(a+i))
MoyenneNotes /= notesSur20.length;
console.log(notesSur20);
console.log(MoyenneNotes);

for(var i=0;i<5;i++){
    setTimeout((function(){
        console.log(this.i);
    }).bind({i : i}),500);
}

//let pour que ca appartienne au bon scope !!
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },500);
}

// creer un objet avec les attributs
function makeObject(tab){
    let newOb = {};
    tab.forEach(i=>(newOb[i]=null));
    return newOb;
}

console.log(makeObject(['un','deux','trois']));


let Personne = {
    nom:'Baumont',
    prenom:'Marie',
    age:23,
    ville:'Grenoble',
    profession:'Developpeuse'}

console.log(`Je m'appelle ${Personne.nom} ${Personne.prenom}, j'ai ${Personne.age} ans.
J'habite ${Personne.ville} et je suis ${Personne.profession}`);


const tab = [0,2,3,4,5,6]
console.log(Math.max(...tab));

//exercice sur les classes 
class Animal{
    constructor(name, nourri, nbPates,griffes,espece) {
        this.name = name;
        this.nbPates = nbPates;
        this.griffes = griffes;
        this.nourri = nourri;
        this.espece = espece;
    }
    manger(){
        this.nourri = true;
        console.log("C'était bon");
    }
    get nbPates(){
        return this._nbPates;
    }
    set nbPates(nbP){
        this._nbPates = nbP;
    }
}

class Chien extends Animal{
    constructor(){
        super();
        this.espece="chien";
        this.nbPates=4;
        this.griffes=true;
    }
}
class Chat extends Animal{
    constructor(){
        super();
        this.espece="chat";
        this.griffes=true;
        this.nbPates=4;
        this.dormi;
    }
    dormir(){
        this.dormi=true;
        this.constructor.infoDormir();
    }
    static infoDormir(){
        console.log("J'ai bien dormi");
    }
    get dormi(){
        return this._dormi;
    }
    set dormi(dodo){
        this._dormi = dodo;
    }
}

var animal1 = new Chat("Grigrou",false,4,true);
console.log(animal1.manger());
console.log(animal1.espece);
animal1.dormir();
console.log(animal1.dormi(true));


//Exercice sur les promesses

let p = fetch('https://api.spacexdata.com/v3/launches/latest');
p
.then(response=>{
    if (response.ok){
        return response;
    throw new Error(response.statutText);
    }

})
.then(response =>response.json())
.then(value=>document.write(JSON.stringify(value)))
.catch(err=>document.write(JSON.stringify(err)));

// Même chose avec await et async. 
async function test(){

    let response = await fetch('https://api.spacexdata.com/v3/launches/latest');
    if (response.ok){
        document.write(JSON.stringify(await response.json()));
    throw new Error(response.statutText);
    }
}
test();
*/