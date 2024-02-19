import { capitalizeFirstLetterOfString } from '@/utils';
import { Pokemon, colorTypes } from '@/models';

interface HeaderInterface {
    sprites: Pokemon['sprites'];
    name: Pokemon['name'];
    height: Pokemon['height'];
    weight: Pokemon['weight'];
    types: Pokemon['types'];
}

const Header: React.FC<HeaderInterface> = ({ sprites, name, height, weight, types }) => {
    return (
        <div className="flex flex-col gap-4 items-center pb-8 border-b border-b-poke-border sm:flex-row sm:-mt-[37px]">
            <img
                src={sprites.other.dream_world.front_default || sprites.front_default}
                alt={'Image of ' + name}
                width={150}
                height={150}
                decoding="async"
                loading="lazy"
                className="min-w-[150px] min-h-[150px] max-h-[150px] max-w-[150px] p-5 border border-poke-border rounded-full"
            />


            <div className="text-poke-primary flex flex-col gap-3">
                <h2 className="text-3xl font-bold">{capitalizeFirstLetterOfString(name)}</h2>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <strong>Height: </strong>{height}
                    </li>
                    <li>
                        <strong>Weight: </strong>{weight}
                    </li>
                </ul>

                <ul className="w-full flex items-center gap-2.5">
                    {
                        types.map(({ type }, index) => (
                            <li key={index} className="rounded-md py-1 px-2" style={{ background: colorTypes[type.name as keyof typeof colorTypes], border: '1px solid #ddd' }}>
                                {type.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header