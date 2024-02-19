import InfiniteScroll from "react-infinite-scroll-component";
import { Filters, RawPokemon } from '@/models';
import { usePokemons } from '@/hooks';
import { Card } from '../Card';
import { ErrorCard, LoadingSpinner, Skeleton } from "@/components";

interface PokemonCatalogInterface {
    filters: Filters;
}

const PokemonCatalog: React.FC<PokemonCatalogInterface> = ({ filters }) => {
    const LIMIT = 30;

    const { pokemons, isLoading, error, fetchNextPage, hasMore, refetch } = usePokemons({ limit: LIMIT, filters });

    return (
        isLoading
            ? <PokemonCatalogSkeleton />
            : error
                ? (
                    <ErrorCard
                        errorMsg={error}
                        retryFunc={refetch}
                    />
                ) : (
                    <>
                        <div className="mb-8 flex items-center gap-1.5">
                            <div className="size-2 rounded-full bg-poke-muted" />
                            <p className="flex gap-1.5 items-center">
                                <strong>{pokemons.total}</strong> pokemons founded
                            </p>
                        </div>
                        <InfiniteScroll
                            dataLength={pokemons.data.length}
                            hasMore={hasMore}
                            next={() => fetchNextPage()}
                            loader={<LoadingSpinner type="FLEX" />}
                        >
                            <ul className="min-h-[700px] mx-auto w-fit grid grid-cols-1 grid-rows-auto gap-4 min-[850px]:grid-cols-2 xl:grid-cols-3">
                                {
                                    pokemons && pokemons.data.length > 0 && pokemons.data.map(({ name, url }: RawPokemon, index: number) => (
                                        <Card
                                            key={name + index}
                                            name={name}
                                            url={url}
                                        />
                                    ))
                                }
                            </ul>
                        </InfiniteScroll>
                    </>
                )
    )
}

export default PokemonCatalog

const PokemonCatalogSkeleton = () => (
    <div className="mx-auto">
        <ul className="mx-auto w-auto max-w-[375px] min-h-[700px] grid grid-cols-1 grid-rows-auto gap-4 min-[850px]:max-w-[766px] min-[850px]:grid-cols-2 xl:max-w-[1152px] xl:grid-cols-3">
            {
                Array.from({ length: 30 }).map((_, index) => (
                    <li key={index} className="relative max-w-[375px]">
                        <Skeleton width="w-full" height="h-[100%]" className="min-w-full max-w-[375px] min-h-[270px]" />
                    </li>
                ))
            }
        </ul>
    </div>
)