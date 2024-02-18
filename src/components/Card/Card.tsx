import { capitalizeFirstLetterOfString, extractIndex } from "@/utils";
import { RawPokemon, colorTypes } from "@/models";
import { usePokemonByIndex } from "@/hooks";
import { CardBody } from "./CardBody";
import { Skeleton } from "../Skeleton";

const Card = ({ name, url }: RawPokemon) => {
    const index = extractIndex(url)!;

    const { isLoading, pokemonData } = usePokemonByIndex({ index });

    const generateGradient = () => {
        // Check if the pokemon has more than one type
        if (pokemonData && pokemonData.types.length > 1) {
            const gradientColors = pokemonData.types.map(({ type }) => colorTypes[type.name as keyof typeof colorTypes]);
            return `linear-gradient(90deg, ${gradientColors.join(', ')})`;
        }

        return colorTypes[pokemonData?.types[0]?.type.name as keyof typeof colorTypes] || 'white';
    };

    return (
        <div
            className="w-[375px] h-[255px] p-4 rounded-md border border-[#ddd] text-[#000] flex flex-col gap-5"
            style={{
                background: generateGradient(),
            }}
        >
            <h1 className="font-bold text-[25px] pb-2 border-b border-b-[#ddd]">{capitalizeFirstLetterOfString(name)}</h1>
            {
                !isLoading && pokemonData
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
                        <Skeleton
                            width="w-full"
                            height="h-full"
                        />
                    )
            }
        </div>
    )
}

export default Card;