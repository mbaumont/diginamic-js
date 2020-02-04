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
    public fill: boolean;
    constructor(specie: string, description: string, types: Type[]) {
        this.specie = specie;
        this.description = description;
        this.types = types;
        // Rajout de cette proprieté pour la visulaisation de la description
        this.fill = false;
    }
}
