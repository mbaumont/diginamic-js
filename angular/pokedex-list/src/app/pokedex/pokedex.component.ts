import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model';
import data from '../../assets/pokemon.data' ;

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public ListPokemon: PokemonModel[];
  public listeData = data;
  constructor() {}
  ngOnInit() {

      for (const e of data) {
        const pokemon = new PokemonModel(e.specie, e.description, e.types);
        this.ListPokemon.push(pokemon);
        console.log("hola")
        console.log(this.ListPokemon);
      }
  }

}
