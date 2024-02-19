import { ErrorCard, Skeleton } from "@/components";
import { usePokemonLocations } from "@/hooks";

interface LocationsInterface {
    pokemonId: number;
}

const Locations: React.FC<LocationsInterface> = ({ pokemonId }) => {
    const { locations, isLoading, error, refetch } = usePokemonLocations({ id: pokemonId });

    return (
        isLoading
            ? <LocationSkeleton />
            : error
                ? (
                    <ErrorCard
                        errorMsg={error}
                        retryFunc={refetch}
                        className="w-[calc(100%-32px)]"
                    />
                ) : (
                    locations && locations.length > 0 && (
                        <div className="w-full p-4 pt-0 text-poke-primary">
                            <h3 className="font-bold text-xl mb-4">Locations</h3>
                            <ul role="list" className="flex flex-col gap-2.5 text-sm ml-4">
                                {
                                    locations.map((loc, index) => (
                                        <li key={index} className="flex gap-1 items-center">
                                            <p className="font-mono text-wrap text-sm text-slate-500 flex items-center gap-1">
                                                <span className="font-bold text-slate text-base">-</span>
                                                {loc.location_area.name}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                )
    )
}

export default Locations


const LocationSkeleton = () => {
    return (
        <div className="w-full p-4">
            <Skeleton width="w-[100px]" height="h-6" className="mb-4" />

            <div className="flex flex-col gap-2.5 ml-4">
                {
                    Array.from({ length: 6 }, (_, index) => <Skeleton key={index} width="w-full" height="h-5" />)
                }
            </div>
        </div>
    )
}