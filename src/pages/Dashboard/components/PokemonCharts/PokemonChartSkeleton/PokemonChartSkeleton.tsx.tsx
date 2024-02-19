import { Skeleton } from "@/components"

export default function PokemonChartSkeleton() {
    return (
        <div className="p-4 border border-poke-border bg-white rounded-md flex flex-col items-center gap-6 lg:gap-5 lg:flex-row" role="progressbar">
            <SkeletonBarChart />
            <SkeletonDonutChart />
        </div>
    )
}

const SkeletonBarChart = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <Skeleton width="w-full" height="h-6" className="max-w-[385px]" />
                <Skeleton width="w-full" height="h-4" className="self-end mt-4 mb-2.5 ml-8 max-w-[200px]" />
            </div>

            <div className="w-full h-[320px] flex items-end">
                <div className="h-[300px] flex flex-col justify-between items-end pb-6 pr-2.5">
                    <Skeleton width="w-5" height="h-3" />
                    <Skeleton width="w-5" height="h-3" />
                    <Skeleton width="w-5" height="h-3" />
                    <Skeleton width="w-5" height="h-3" />
                    <Skeleton width="w-5" height="h-3" />
                </div>
                <div className="w-full h-[320px] flex items-end justify-around gap-1 overflow-x-hidden">
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(74%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(45%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(33%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(68%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(34%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(43%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(90%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(44%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(56%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(34%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(26%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(31%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(84%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(52%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(67%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(67%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(37%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(72%-16px)]" className="max-w-[35px]" />
                    </div>
                    <div className="h-[320px] flex flex-col-reverse gap-2.5">
                        <Skeleton width="w-8" height="h-3" />
                        <Skeleton width="w-full" height="h-[calc(28%-16px)]" className="max-w-[35px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const SkeletonDonutChart = () => {
    return (
        <div>
            <div className="space-y-3">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center">
                    <div className="relative w-[160px] h-[160px] overflow-hidden rounded-full p-4">
                        <Skeleton width="w-full" height="h-[100%]" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />

                        <div className="relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 size-full bg-white rounded-full" />
                    </div>

                    <div className="w-full max-w-[320px] h-full flex flex-wrap gap-x-2 gap-y-0.5">
                        {
                            Array.from({ length: 18 }).map((_, index) => (
                                <li key={index}>
                                    <Skeleton width="w-10" height="h-3" />
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}