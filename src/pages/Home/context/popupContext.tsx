import { createContext, useState } from 'react';
import { Pokemon } from '@/models';

interface PopupContextInterface {
    pokemon?: Pokemon;
    isOpen: boolean;
    updatePokemon: (pokemon: Pokemon) => void;
    handlePopup: () => void;
}

interface PopupProviderInterface {
    children: JSX.Element | JSX.Element[];
}

export const PopupContext = createContext<PopupContextInterface>({
    pokemon: {} as Pokemon,
    isOpen: false,
    updatePokemon: () => {},
    handlePopup: () => {}
});

export const PopupProvider: React.FC<PopupProviderInterface> = ({ children }) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isOpen, setIsOpen] = useState(false);
    
    const updatePokemon = (pokemon: Pokemon) => setPokemon(pokemon);

    const handlePopup = () => setIsOpen((prevState) => !prevState);

    const popupContextValue: PopupContextInterface = {
        pokemon,
        isOpen,
        updatePokemon,
        handlePopup
    };

    return (
        <PopupContext.Provider value={popupContextValue}>
            {children}
        </PopupContext.Provider>
    );
};