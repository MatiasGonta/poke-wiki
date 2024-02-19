import { capitalizeFirstLetterOfString, extractIndex } from "@/utils";
import { ErrorCard, Skeleton } from "@/components";
import { RawPokemon, colorTypes } from "@/models";
import { PopupContext } from "../../context";
import { usePokemonByIndex } from "@/hooks";
import { CardBody } from "./CardBody";
import { useContext } from "react";

const Card = ({ name, url }: RawPokemon) => {
    const { updatePokemon, handlePopup } = useContext(PopupContext);

    const index = extractIndex(url)!;

    const { isLoading, error, pokemonData, refetch } = usePokemonByIndex({ index });

    const generateGradient = () => {
        // Check if the pokemon has more than one type
        if (pokemonData && pokemonData.types.length > 1) {
            const gradientColors = pokemonData.types.map(({ type }) => colorTypes[type.name as keyof typeof colorTypes]);
            return `linear-gradient(90deg, ${gradientColors.join(', ')})`;
        }

        return colorTypes[pokemonData?.types[0]?.type.name as keyof typeof colorTypes] || 'white';
    };

    const handleOnClick = () => {
        if (pokemonData) {
            updatePokemon(pokemonData);
            handlePopup();
        }
    }

    return (
        <div
            className={`relative overflow-hidden min-w-full max-w-[375px] h-auto min-h-[270px] p-4 rounded-md border border-poke-border text-poke-secondary flex flex-col gap-3 ${pokemonData ? "cursor-pointer" : ""}`}
            style={{
                background: generateGradient(),
            }}
            onClick={handleOnClick}
        >
            <h2 className="font-bold text-poke-primary text-[25px] pb-5 border-b border-b-poke-border min-[450px]:pb-2">{capitalizeFirstLetterOfString(name)}</h2>
            {
                isLoading
                    ? <CardSkeleton />
                    : !error && pokemonData
                        ? (
                            <CardBody
                                height={pokemonData.height}
                                weight={pokemonData.weight}
                                abilities={pokemonData.abilities}
                                types={pokemonData.types}
                                sprites={pokemonData.sprites}
                                name={pokemonData.name}
                            />
                        ) : (
                            <ErrorCard
                                errorMsg={error!}
                                retryFunc={refetch}
                            />
                        )
            }

            {/* Card blob */}
            <div className="w-[400px] h-[300px] absolute -bottom-[82.5%] -left-20 bg-poke-muted rounded-[25%_75%_42%_58%/37%_48%_52%_63%]" />
        </div>
    )
}

export default Card;

const CardSkeleton = () => {
    const randomNumber = Math.random();

    const showTwoSkeletons = randomNumber > 0.5;

    return (
        <div role="progressbar" className="w-full h-full overflow-hidden rounded-md flex flex-col justify-between">
            <div className="flex justify-between gap-2">
                <div className="w-full h-full flex flex-col gap-3">
                    <Skeleton width="w-full" height="h-4" className="max-w-[200px]" />
                    <Skeleton width="w-full" height="h-4" className="max-w-[200px]" />
                    <div className="flex gap-1.5">
                        <Skeleton width="w-[60px]" height="h-4" />
                        <div className="w-full flex flex-wrap items-center gap-y-1 gap-x-1.5">
                            <Skeleton width="w-14" height="h-3" />
                            <Skeleton width="w-14" height="h-3" />
                            <Skeleton width="w-14" height="h-3" />
                        </div>
                    </div>
                </div>

                <Skeleton width="w-[92px]" height="h-[92px]" />
            </div>

            <div className="flex gap-2.5">
                {
                    showTwoSkeletons
                        ? (
                            <>
                                <Skeleton width="w-[70px]" height="h-8" />
                                <Skeleton width="w-[70px]" height="h-8" />
                            </>
                        ) : (
                            <Skeleton width="w-[70px]" height="h-8" />
                        )
                }
            </div>
        </div>
    )
};