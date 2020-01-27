// Les variables globales, valable pour toute la page
let rand;
let compt;
let choix = document.querySelector("#choix");
let valChoix = document.querySelector("#choixValid");

// Initialisation de la page, onload et a chaque fin de partie
function initialisation(){
    rand = Math.round(Math.random()*9+1);
    compt = 1;
    var element = document.getElementById("choix");
    element.value = "";
    var elementNbRestant = document.getElementById("nbrestant");
    elementNbRestant.textContent = "5";
    console.log(rand);
}

function testInput(){
    choix.value = parseInt(choix.value);
    console.log(choix.value)
    if ((choix.value == "NaN")||choix.value<0||choix.value>10){
        window.alert("Attention vous n'avez pas rentré un nombre valable");
        var element = document.getElementById("choix");
        element.value = "";
    }
    else{
        gagner();
    }
}

function gagner(){
    
    if (rand==choix.value){
        window.alert("Vous avez gagné en " +(compt) +" coups");
        initialisation();
    }
    else if(choix.value!=compt&&compt==5){
        window.alert("Vous avez perdu!")
        initialisation();
    }
    else{
        window.alert("Raté choisissez un autre nombre! Il vous reste "+(5-compt)+" coups");
        var elementNbRestant = document.getElementById("nbrestant");
        elementNbRestant.textContent = 5-compt;
        compt += 1;
    }   
}

valChoix.onclick = testInput;

