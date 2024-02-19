import { PokemonCharts } from "./components";
import { DefaultLayout } from "@/layouts";

interface DashboardInterface { }

const Dashboard: React.FC<DashboardInterface> = () => {
    return (
        <DefaultLayout title="Dashboard - Poke Wiki">
            <main className="w-full min-h-[calc(100vh-120px)] max-w-wrapper mx-auto pb-6 px-6 min-[1200px]:px-0">
                <div className="w-full py-6">
                    <h1 className="font-bold text-2xl">Dashboard</h1>
                </div>
                <PokemonCharts />
            </main>
        </DefaultLayout>
    )
}

export default Dashboard