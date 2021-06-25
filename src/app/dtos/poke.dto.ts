import { Abilities } from "./abilities.dto";
import { Sprites } from "./sprites.dto";

export class PokeDto {
    id!: number;
    name!: string;
    base_experience!: number;
    height!: number;
    is_default!: boolean;
    order!: number;
    weight!: number;

    abilities!: Abilities[];
    sprites!: Sprites;
}
