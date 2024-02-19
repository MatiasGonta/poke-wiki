import { colorTypes } from "./colorTypes.enum";

interface Pasttype {
    generation: Resource;
    types: Type[];
}

interface Type {
    slot: number;
    type: Resource;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: Resource;
}

interface Cries {
    latest: string;
    legacy: string;
}

interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
    versions: Versions;
}

interface Versions {
    'generation-i': Generationi;
    'generation-ii': Generationii;
    'generation-iii': Generationiii;
    'generation-iv': Generationiv;
    'generation-v': Generationv;
    'generation-vi': Generationvi;
    'generation-vii': Generationvii;
    'generation-viii': Generationviii;
}

interface Generationviii {
    icons: Dreamworld;
}

interface Generationvii {
    icons: Dreamworld;
    'ultra-sun-ultra-moon': Home;
}

interface Generationvi {
    'omegaruby-alphasapphire': Home;
    'x-y': Home;
}

interface Generationv {
    'black-white': Blackwhite;
}

interface Blackwhite {
    animated: Showdown;
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

interface Generationiv {
    'diamond-pearl': Showdown;
    'heartgold-soulsilver': Showdown;
    platinum: Showdown;
}

interface Generationiii {
    emerald: Officialartwork;
    'firered-leafgreen': Crystal;
    'ruby-sapphire': Crystal;
}

interface Generationii {
    crystal: Crystal;
    gold: Crystal;
    silver: Crystal;
}

interface Crystal {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface Generationi {
    'red-blue': Redblue;
    yellow: Redblue;
}

interface Redblue {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

interface Other {
    dream_world: Dreamworld;
    home: Home;
    'official-artwork': Officialartwork;
    showdown: Showdown;
}

interface Showdown {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

interface Officialartwork {
    front_default: string;
    front_shiny: string;
}

interface Home {
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

interface Dreamworld {
    front_default: string;
    front_female?: any;
}

interface Move {
    move: Resource;
    version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
    level_learned_at: number;
    version_group: Resource;
    move_learn_method: Resource;
}

interface Helditem {
    item: Resource;
    version_details: Versiondetail[];
}

interface Versiondetail {
    rarity: number;
    version: Resource;
}

interface Gameindex {
    game_index: number;
    version: Resource;
}

interface Abilities {
    is_hidden: boolean;
    slot: number;
    ability: Resource;
}

interface Resource {
    name: string;
    url: string;
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Abilities[];
    forms: Resource[];
    game_indices: Gameindex[];
    held_items: Helditem[];
    location_area_encounters: string;
    moves: Move[];
    species: Resource;
    sprites: Sprites;
    cries: Cries;
    stats: Stat[];
    types: Type[];
    past_types: Pasttype[];
}

export type RawPokemon = {
    name: string;
    url: string;
}

export interface PokemonType {
    name: keyof typeof colorTypes,
    count: number,
    color: colorTypes;
}