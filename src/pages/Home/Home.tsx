import { Filterboard, PokemonCatalog, Popup } from "./components";
import { useLocation } from "react-router-dom";
import { DefaultLayout } from "@/layouts";
import { PopupProvider } from "./context";
import { Filters } from "@/models";

interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const filters = {
        type: queryParams.getAll('type').flatMap(value => value.split('|')) as Filters['type'],
    };
    
    return (
        <DefaultLayout hideFooterOnScroll={true}>
            <PopupProvider>
                <main className="w-full min-h-[100vh] max-w-wrapper mx-auto px-6 min-[1200px]:px-0">
                    <Popup />
                    
                    <section>
                        <article>
                            <Filterboard initialFilter={filters} />
                        </article>
                        <article>
                            <PokemonCatalog filters={filters} />
                        </article>
                    </section>
                </main>
            </PopupProvider>
        </DefaultLayout>
    )
}

export default Home