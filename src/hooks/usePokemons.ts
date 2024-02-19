import { Filters, RawPokemon, colorTypes } from "@/models";
import { useEffect, useState } from "react";
import { api } from "@/services";
import axios from "axios";

interface UsePokemonsProps {
    limit?: number;
    filters?: Filters;
}

export function usePokemons({ limit = 30, filters }: UsePokemonsProps) {
    const initialState: { total: number; data: RawPokemon[]; } = {
        total: 0,
        data: [],
    };

    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // Pagination states
    const [offset, setOffset] = useState<number>(0);
    const [pokemons, setPokemons] = useState<{ total: number; data: RawPokemon[]; }>(initialState);

    // Fetch handlers
    const handleDefaultFetch = async () => {
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
    }

    const handleTypeFetch = async () => {
        let pokemonData: { total: number; data: RawPokemon[]; } = initialState;

        for (const type of filters?.type!) {
            if (!colorTypes[type]) continue;

            const { data } = await api.get(`/type/${type}`);
            const newData = data.pokemon.map(({ pokemon }: { pokemon: RawPokemon }) => pokemon);

            pokemonData = {
                total: pokemonData.total + newData.length,
                data: [...pokemonData.data, ...newData],
            };
        }

        // Update pokemons state
        setPokemons(pokemonData);

        setHasMore(false);
    }

    const fetchCatalog = async () => {
        if (offset === 0) setIsLoading(true); // Set loading to true only on the first page
        setError(null);

        try {
            // Choose fetch pokemons handler to use
            if (filters && filters.type && filters.type.length > 0) await handleTypeFetch();
            else await handleDefaultFetch();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Accessing error.response will always be available
                const errorMessage = error.response?.data?.message || error.message || "Error fetching Pokemon catalog";

                setError(errorMessage);
            } else {
                setError("Error fetching Pokemon catalog");
                console.error("Error fetching Pokemon catalog: ", error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch the first page of pokemons when the component mounts
    useEffect(() => {
        fetchCatalog();
    }, []);

    // Refetch on filters change
    useEffect(() => {
        if (!isLoading) {
            setOffset(0);
            setPokemons(initialState);
            fetchCatalog();
        };
    }, [filters]);

    const fetchNextPage = () => {
        if (!isLoading && hasMore && (!filters?.type || filters.type.length === 0)) fetchCatalog();
    };

    const refetch = () => {
        setOffset(0);
        setPokemons(initialState);
        fetchCatalog();
    }

    return { pokemons, isLoading, error, fetchNextPage, hasMore, refetch };
}