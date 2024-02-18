import { useEffect, useState } from "react";
import { RawPokemon } from "@/models";
import { api } from "@/services";

export function usePokemons({ limit = 30 }: { limit?: number }) {
    const initialState: RawPokemon[] = [];

    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // Pagination states
    const [offset, setOffset] = useState<number>(0);
    const [pokemons, setPokemons] = useState<{ total: number; data: RawPokemon[] }>({
        total: 0,
        data: initialState,
    });

    const fetchPokemonList = async () => {
        if (offset === 0) setIsLoading(true); // Set loading to true only on the first page
        setError(false);

        try {
            const { data } = await api.get('/pokemon', {
                params: {
                    limit,
                    offset,
                },
            });

            const totalPokemons: number = data.count;
            const newData = data.results || [];

            // Update pokemons state
            setPokemons((prevPokemons) => {
                const newPokemonsFiltered = [...prevPokemons.data, ...newData].filter((pokemon: RawPokemon, index, self) => {
                    return index === self.findIndex((p) => p.name === pokemon.name);
                });

                return ({
                    total: totalPokemons,
                    data: newPokemonsFiltered,
                })
            });

            setHasMore(pokemons.data.length < totalPokemons);

            // Update offset for next page fetch
            setOffset((prevOffset) => prevOffset + limit);
        } catch (error) {
            setError(true);
            console.error("Error fetching Pokemon list:", error);
        } finally {
            if (isLoading) setIsLoading(false);
        }
    };

    // Fetch the first page of pokemons when the component mounts
    useEffect(() => {
        fetchPokemonList();
    }, []);

    const fetchNextPage = () => {
        if (!isLoading && hasMore) fetchPokemonList();
    };

    return { pokemons, isLoading, error, fetchNextPage, hasMore };
}