import { BarChart, DonutChart, EventProps, Legend } from '@tremor/react';
import { PokemonChartSkeleton } from './PokemonChartSkeleton';
import { capitalizeFirstLetterOfString } from "@/utils";
import { useNavigate } from "react-router-dom";
import { usePokemonTypes } from "@/hooks";
import { ErrorCard } from '@/components';
import { PokemonType } from "@/models";

type PokemonTypesChartData = {
    name: string;
    'Number of pokemon types': PokemonType['count'];
    color: PokemonType['color'];
}

interface PokemonChartsInterface { }

const PokemonCharts: React.FC<PokemonChartsInterface> = () => {
    const navigate = useNavigate();

    const { isLoading, error, pokemonTypes, refetch } = usePokemonTypes();

    const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

    const chartData: PokemonTypesChartData[] = pokemonTypes.map((type) => ({
        name: capitalizeFirstLetterOfString(type.name),
        'Number of pokemon types': type.count,
        color: type.color
    }));

    const handleBarClick = (v: EventProps) => {
        if (!v) return;

        const typeName = v.name.toString();
        return navigate(`/?type=${typeName.toLowerCase()}`); // Navigate to home with type filter
    };

    return (
        isLoading
            ? <PokemonChartSkeleton />
            : error
                ? (
                    <ErrorCard
                        errorMsg={error}
                        retryFunc={refetch}
                        backToHomeBtn
                    />
                ) : (
                    <section className="p-4 border border-poke-border bg-white rounded-md flex flex-col items-center gap-6 lg:gap-2.5 lg:flex-row">
                        <article className="w-full">
                            <h3 className="text-lg font-medium text-poke-primary">
                                Number of pokemons types ({new Date().getFullYear()})
                            </h3>
                            <BarChart
                                className="mt-6"
                                data={chartData}
                                index="name"
                                categories={['Number of pokemon types']}
                                colors={['slate']}
                                valueFormatter={dataFormatter}
                                yAxisWidth={48}
                                customTooltip={customTooltip}
                                showAnimation={true}
                                onValueChange={handleBarClick}
                                noDataText="Pokemons types not found"
                            />
                        </article>

                        <div className="w-3/4 mx-auto h-px bg-poke-border rounded-md lg:h-[300px] lg:w-px lg:mx-0" />

                        <article>
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-center">
                                <DonutChart
                                    data={chartData}
                                    variant="donut"
                                    index="name"
                                    category="Number of pokemon types"
                                    colors={chartData.map(type => type.color)}
                                    valueFormatter={dataFormatter}
                                    customTooltip={customTooltip}
                                    showAnimation={true}
                                    onValueChange={handleBarClick}
                                    className="max-w-[160px]"
                                    noDataText="Pokemons types not found"
                                />
                                <div className="h-0 w-0 hidden bg-poke-border rounded-md lg:block lg:w-[160px] lg:h-px" />
                                <Legend
                                    categories={chartData.map(type => type.name)}
                                    colors={chartData.map(type => type.color)}
                                    className="max-w-xs"
                                />
                            </div>
                        </article>
                    </section>
                )
    )
}

export default PokemonCharts

interface CustomTooltipInterface {
    payload: any;
    active: boolean | undefined;
    label: any;
}

const customTooltip = (props: CustomTooltipInterface) => {
    const { payload, active } = props;
    if (!active || !payload) return null;

    return (
        <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
            {
                payload.map(({ payload }: { payload: PokemonTypesChartData }, index: number) => (
                    <div key={index} className="flex flex-1 space-x-2.5">
                        <div className="flex w-1 flex-col rounded" style={{ background: payload.color }} />

                        <div className="space-y-1">
                            <p className="text-tremor-content">{payload.name}</p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {payload['Number of pokemon types']}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}