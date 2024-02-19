import { Pokemon, colorTypes } from "@/models";

interface CardBodyInterface {
    height: Pokemon['height'];
    weight: Pokemon['weight'];
    abilities: Pokemon['abilities'];
    types: Pokemon['types'];
    sprites: Pokemon['sprites'];
    name: Pokemon['name'];
}

const CardBody: React.FC<CardBodyInterface> = ({ height, weight, abilities, types, sprites, name }) => {
    return (
        <div className="flex gap-2 justify-between h-full">
            <div className="flex flex-col justify-between">
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <strong className="text-poke-primary">Height: </strong>{height}
                    </li>
                    <li>
                        <strong className="text-poke-primary">Weight: </strong>{weight}
                    </li>
                    <li className="flex gap-1.5">
                        <strong className="text-poke-primary ">Abilities: </strong>
                        <ol className="w-full flex flex-wrap items-center gap-y-1 gap-x-1.5">
                            {
                                abilities.map(({ ability }, index) => (
                                    <li key={index} className="rounded-md py-0.5 px-1 border border-poke-border bg-poke-muted text-xs">
                                        {ability.name}
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                </ul>

                <ul className="relative z-10 w-full flex items-center gap-2.5">
                    {
                        types.map(({ type }, index) => (
                            <li key={index} className="rounded-md py-1 px-2 font-medium text-poke-primary" style={{ background: colorTypes[type.name as keyof typeof colorTypes], border: '1px solid #ddd' }}>
                                {type.name}
                            </li>
                        ))
                    }
                </ul>
            </div >

            <img
                src={sprites.other.dream_world.front_default || sprites.front_default}
                alt={'Image of ' + name}
                width={100}
                height={100}
                loading="lazy"
                className="size-[50px] min-[450px]:size-[92px] max-[450px]:absolute max-[450px]:top-4 max-[450px]:right-4"
            />
        </div>
    )
}

export default CardBody