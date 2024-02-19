import { Tooltip, TooltipWrapper } from "@/components";
import { PopupContext } from "@/pages/Home/context";
import { Locations } from "./Locations";
import { useContext } from "react";
import { Header } from "./Header";
import { Stats } from "./Stats";

const Popup = () => {
    const { pokemon, isOpen, handlePopup } = useContext(PopupContext);

    return (
        <>
            {/* Popup close modal */}
            {isOpen && <div className="fixed z-modal inset-0 w-full h-screen bg-poke-modal" onClick={handlePopup} />}

            {
                isOpen && (
                    pokemon
                        ? (
                            <div className={`${isOpen ? "block" : "hidden"} fixed inset-0 w-full h-screen border-r border-r-poke-border shadow-lg shadow-gray-500 z-toast p-8 bg-white animate-slide-left sm:w-[500px]`}>
                                <div className="relative size-full flex flex-col overflow-y-auto">
                                    {/* Close popup btn */}
                                    <TooltipWrapper>
                                        <button
                                            type="button"
                                            aria-label="Close popup"
                                            role="button"
                                            className="sticky w-fit top-0 left-full mr-4 p-1.5 rounded-full text-poke-primary transition-all bg-white border border-white hover:bg-slate-200 hover:border-poke-border active:scale-95"
                                            onClick={handlePopup}
                                        >
                                            <Tooltip axisY={40}>
                                                Close
                                            </Tooltip>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </TooltipWrapper>

                                    <Header
                                        name={pokemon.name}
                                        height={pokemon.height}
                                        weight={pokemon.weight}
                                        types={pokemon.types}
                                        sprites={pokemon.sprites}
                                    />

                                    <div className="flex flex-col gap-4">
                                        <Stats stats={pokemon.stats} />

                                        <Locations pokemonId={pokemon.id} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>Pokemon data not founded</div>
                        )
                )
            }
        </>
    )
}

export default Popup