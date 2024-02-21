import { useEffect, useState } from "react";
import { Location } from "@/models";
import { BASE_URL } from "@/services";

export function usePokemonLocations({ id }: { id: number }) {
    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [locations, setLocations] = useState<Location[]>([]);

    async function fetchPokemonLocations() {
        try {
            const res = await fetch(`${BASE_URL}pokemon/${id}/encounters`).then(res => res.ok && res.json());

            // Set data in the state
            setLocations(res);
        } catch (error) {
            setError("Error fetching Pokemon locations");
            console.error("Error fetching Pokemon locations: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemonLocations();
    }, [id])

    const refetch = () => {
        setIsLoading(true);
        setError(null);
        setLocations([]);
        fetchPokemonLocations();
    }

    return { isLoading, error, locations, refetch };
}