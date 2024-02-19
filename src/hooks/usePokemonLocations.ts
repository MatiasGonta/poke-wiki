import { useEffect, useState } from "react";
import { Location } from "@/models";
import { api } from "@/services";
import axios from "axios";

export function usePokemonLocations({ id }: { id: number }) {
    // Status states
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [locations, setLocations] = useState<Location[]>([]);

    async function fetchPokemonLocations() {
        try {
            const { data } = await api.get(`pokemon/${id}/encounters`);

            // Set data in the state
            setLocations(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Accessing error.response will always be available
                const errorMessage = error.response?.data?.message || error.message || "Error fetching Pokemon locations";

                setError(errorMessage);
            } else {
                setError("Error fetching Pokemon locations");
                console.error("Error fetching Pokemon locations: ", error);
            }
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