import { Pokemon } from "@/models";

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
        <div className="flex justify-between h-full">
            <div className="flex flex-col justify-between">
                <ul role="list" className="flex flex-col gap-2 text-sm">
                    <li>
                        <p><strong>Height: </strong>{height}</p>
                    </li>
                    <li>
                        <p><strong>Weight: </strong>{weight}</p>
                    </li>
                    <li className="flex items-center gap-1.5">
                        <strong>Abilities: </strong>
                        <ul role="list" className="w-full flex items-center gap-1.5">
                            {
                                abilities.map(({ ability }, index) => (
                                    <li key={index}>
                                        <span>{ability.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>

                <div className="justify-end">
                    <ul role="list" className="w-full flex items-center gap-2.5">
                        {
                            types.map(({ type }, index) => (
                                <li key={index} className="bg-green-200 rounded-md border border-green-500 py-1 px-2">
                                    <span>{type.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div >

            <div className="size-[100px]">
                <img
                    src={sprites.other.dream_world.front_default || sprites.front_default}
                    alt={'Image of ' + name}
                    width={100}
                    height={100}
                    decoding="async"
                    loading="lazy"
                    className="max-h-[100px] max-w-[100px]"
                />
            </div>
        </div>
    )
}

export default CardBody