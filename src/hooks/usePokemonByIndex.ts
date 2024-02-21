import { useEffect, useState } from "react";
import { Pokemon } from "@/models";
import { BASE_URL } from "@/services";

export function usePokemonByIndex({ index }: { index: number }) {
    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    async function fetchPokemon() {
        try {
            const res = await fetch(`${BASE_URL}/pokemon/${index}`).then(res => res.ok && res.json());

            // Set data in the state
            setPokemonData(res);
        } catch (error) {
            setError(`Error fetching Pokemon with id: ${index}`);
            console.error(`Error fetching Pokemon with id: ${index}: `, error);
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