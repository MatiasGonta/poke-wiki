import { PokemonCatalog } from "@/components";
import { DefaultLayout } from "@/layouts";

interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
    return (
        <DefaultLayout>
            <main className="w-full max-w-[1200px] mx-auto">
                <section>
                    <article>
                        <PokemonCatalog />
                    </article>
                </section>
            </main>
        </DefaultLayout>
    )
}

export default Home