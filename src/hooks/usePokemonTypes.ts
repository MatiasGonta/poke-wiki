import { PokemonType, colorTypes } from "@/models";
import { useEffect, useState } from "react";
import { api } from "@/services";
import axios from "axios";

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
                const { data } = await api.get(`/type/${pokemonType}`);

                const type = {
                    name: data.name,
                    count: data.pokemon.length,
                    color: colorTypes[data.name as keyof typeof colorTypes],
                };

                typesData = [ ...typesData, type ];
            }

            // Set data in the state
            setPokemonTypes(typesData);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Accessing error.response will always be available
                const errorMessage = error.response?.data?.message || error.message || "Error fetching Pokemon chart stats";

                setError(errorMessage);
            } else {
                setError("Error fetching Pokemon chart stats");
                console.error("Error fetching Pokemon chart stats: ", error);
            }
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