import { useEffect, useState } from "react";
import { Pokemon } from "@/models";
import { api } from "@/services";

export function usePokemonByIndex({ index }: { index: number }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    async function fetchPokemon() {
        try {
            const { data } = await api.get(`/pokemon/${index}`);
            setIsLoading(false);

            // Set data in the state
            setPokemonData(data);
        } catch (error) {
            setError(true);
            console.error("Error fetching Pokemon list: ", error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    return { isLoading, error, pokemonData };
}