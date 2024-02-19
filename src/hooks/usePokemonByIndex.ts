import { useEffect, useState } from "react";
import { Pokemon } from "@/models";
import { api } from "@/services";
import axios from "axios";

export function usePokemonByIndex({ index }: { index: number }) {
    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    async function fetchPokemon() {
        try {
            const { data } = await api.get(`/pokemon/${index}`);

            // Set data in the state
            setPokemonData(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Accessing error.response will always be available
                const errorMessage = error.response?.data?.message || error.message || `Error fetching Pokemon with id: ${index}`;

                setError(errorMessage);
            } else {
                setError(`Error fetching Pokemon with id: ${index}`);
                console.error(`Error fetching Pokemon with id: ${index}: `, error);
            }
        }  finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        setError(null);
        setPokemonData(undefined);
        fetchPokemon();
    }

    return { isLoading, error, pokemonData, refetch };
}