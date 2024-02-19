interface Version {
    max_chance: number;
    encounter_details: Encounterdetail[];
    version: LocationArea;
}

interface Encounterdetail {
    min_level: number;
    max_level: number;
    condition_values: LocationArea[];
    chance: number;
    method: LocationArea;
}

interface LocationArea {
    name: string;
    url: string;
}

export interface Location {
    location_area: LocationArea;
    version_details: Version[];
}