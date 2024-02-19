import { capitalizeFirstLetterOfString } from '@/utils';
import { ProgressBar } from '@tremor/react';
import { Pokemon } from '@/models';

interface StatsInterface {
    stats: Pokemon['stats'];
}

const Stats: React.FC<StatsInterface> = ({ stats }) => {
    return (
        <div className="p-4 pb-0 text-poke-primary">
            <h3 className="font-bold text-xl mb-4">Stats</h3>

            <ul role="list" className="flex flex-col gap-3.5 text-sm">
                {
                    stats.map(({ base_stat, stat }, index) => {
                        let statName = stat.name;

                        // If the stat name contains "-", replace it with a space
                        if (stat.name.includes("-")) statName = stat.name.replace("-", " ");

                        return (
                            <li key={index} className="flex gap-1 items-center">
                                <p className="font-mono text-sm text-slate-500 w-[80px]">
                                    {capitalizeFirstLetterOfString(statName)}
                                </p>

                                <div className="flex gap-2.5 items-center w-full p-2.5 rounded-md border border-poke-border">
                                    <ProgressBar value={base_stat} color="slate" />
                                    <span className="font-mono text-sm">{base_stat}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Stats