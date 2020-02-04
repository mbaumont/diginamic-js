import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model';
import data from '../../assets/pokemon.data' ;

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  //On créé une liste vide pour stocker les pokemon
  public ListPokemon: PokemonModel[] = [];
  public listeData = data;
  public survol: string;
  constructor() {
    this.survol = "Aucun";
  }
  ngOnInit() {
    // On récupère les données de l'assets et on créé de nouveaux pokemon
      for (const e of data) {
        const pokemon = new PokemonModel(e.specie, e.description, e.types);
        this.ListPokemon.push(pokemon);
      }
  }
  // Fonction qui est liée au passage de la souris sur un pokemon
  // On utilise fill = true pour que la description soit complète quand on passe dessus
  survolOver(name: string) {
    this.survol = name;
    this.ListPokemon.find(e=>e.specie==name).fill = true;
  }
  //Fonction appelée quand la souris sors d'un element (pokemon)
  // On stock le nom ou 'Aucun' que l'on va affiché à l'utilisateur
  survolLeave(name: string){
    this.survol = "Aucun";
    this.ListPokemon.find(e=>e.specie==name).fill = false;
  }

}
