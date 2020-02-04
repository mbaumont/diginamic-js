export enum Type {
    Air,
    Feu,
    Glace,
    Poison,
    Plante,
    Acier,
    Dragon,
    Roche,
    Eau,
    Electrique
}
export class PokemonModel {
    public specie: string;
    public description: string;
    public types: Type[];
    constructor(specie: string, description: string, types: Type[]) {
        this.specie = specie;
        this.description = description;
        this.types = types;
    }
}
