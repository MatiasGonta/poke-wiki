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
                <ul role="list" className="flex flex-col gap-2 text-sm">
                    <li>
                        <p><strong>Height: </strong>{height}</p>
                    </li>
                    <li>
                        <p><strong>Weight: </strong>{weight}</p>
                    </li>
                    <li className="flex gap-1.5">
                        <strong>Abilities: </strong>
                        <ol role="list" className="w-full flex flex-wrap items-center gap-y-1 gap-x-1.5">
                            {
                                abilities.map(({ ability }, index) => (
                                    <li key={index} className="rounded-md py-0.5 px-1 border border-poke-border bg-poke-muted text-xs">
                                        <span>{ability.name}</span>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                </ul>

                <div className="justify-end relative z-10">
                    <ul role="list" className="w-full flex items-center gap-2.5">
                        {
                            types.map(({ type }, index) => (
                                <li key={index} className="rounded-md py-1 px-2" style={{ background: colorTypes[type.name as keyof typeof colorTypes], border: '1px solid #ddd' }}>
                                    <span className="font-medium text-poke-primary">{type.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div >

            <div className="size-[50px] min-[450px]:size-[92px] max-[450px]:absolute max-[450px]:top-4 max-[450px]:right-4">
                <img
                    src={sprites.other.dream_world.front_default || sprites.front_default}
                    alt={'Image of ' + name}
                    width={100}
                    height={100}
                    decoding="async"
                    loading="lazy"
                    className="max-h-[50px] max-w-[50px] min-[450px]:max-h-[92px] min-[450px]:max-w-[92px]"
                />
            </div>
        </div>
    )
}

export default CardBody