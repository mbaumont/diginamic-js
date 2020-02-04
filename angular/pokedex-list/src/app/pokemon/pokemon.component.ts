import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from './pokemon.model';


@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: PokemonModel;

  constructor() { }

  ngOnInit() {

  }

}
