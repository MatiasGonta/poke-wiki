import { PokemonType, colorTypes } from "@/models";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/services";

export function usePokemonTypes() {
    const POKEMON_TYPES = Object.keys(colorTypes) as (keyof typeof colorTypes)[];

    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([
        {
            name: 'normal',
            count: 0,
            color: colorTypes.normal
        }
    ]);

    async function fetchPokemon() {
        try {
            let typesData: any = [];
            
            for (const pokemonType of POKEMON_TYPES) {
                const res = await fetch(`${BASE_URL}/type/${pokemonType}`).then(res => res.ok && res.json());

                const type = {
                    name: res.name,
                    count: res.pokemon.length,
                    color: colorTypes[res.name as keyof typeof colorTypes],
                };

                typesData = [ ...typesData, type ];
            }

            // Set data in the state
            setPokemonTypes(typesData);
        } catch (error) {
            setError("Error fetching Pokemon chart stats");
            console.error("Error fetching Pokemon chart stats: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        setError(null);
        fetchPokemon();
    }

    return { isLoading, error, pokemonTypes, refetch };
}