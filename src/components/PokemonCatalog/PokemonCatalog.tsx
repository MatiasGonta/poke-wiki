import { usePokemons } from '@/hooks';
import InfiniteScroll from "react-infinite-scroll-component";
import { RawPokemon } from '@/models';
import { Card } from '../Card';

const PokemonCatalog = () => {
    const LIMIT = 30;

    const { pokemons, isLoading, fetchNextPage, hasMore } = usePokemons({ limit: LIMIT });

    return (
        !isLoading
            ? (
                <div className="flex flex-col gap-12">
                    <div>
                        <p className="text-[20px]">{pokemons.total} pokemons</p>
                        <p className="text-[20px]">{pokemons.data.length} pokemons loaded</p>
                    </div>

                    <div>
                        <InfiniteScroll
                            dataLength={pokemons.data.length}
                            hasMore={hasMore}
                            next={() => fetchNextPage()}
                            loader={<div>Loading...</div>}
                            endMessage={<div>No more pokemons to load</div>}
                        >
                            <ul role="list" className="w-full min-h-[700px] grid grid-cols-3 grid-rows-auto gap-4">
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
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )
    )
}

export default PokemonCatalog