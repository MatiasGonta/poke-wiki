import { useEffect, useState } from "react";
import { PokeWikiNav } from "../PokeWikiNav";

interface FooterInterface {
    hideFooterOnScroll?: boolean;
}

const Footer: React.FC<FooterInterface> = ({ hideFooterOnScroll }) => {
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        let lastScrollPosition = 0;

        if (hideFooterOnScroll) {
            const handleScroll = () => {
                let currentScrollPosition = window.scrollY;

                if (currentScrollPosition > lastScrollPosition) {
                    setShowFooter(false);
                } else {
                    setShowFooter(true);
                }

                lastScrollPosition = currentScrollPosition;
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [hideFooterOnScroll]);

    return (
        <footer className={`w-full bg-poke-tertiary z-50 ${hideFooterOnScroll ? `fixed bottom-0 transition-transform duration-300 ${showFooter ? "translate-y-0" : "translate-y-full"}` : 'relative'}`}>
            <div className="size-full max-w-wrapper mx-auto h-10 flex gap-1.5 justify-between items-center px-6 min-[1200px]:px-0">
                <p className="text-sm w-fit line-clamp-2">
                    Made by <a href="https://matiasgonta.vercel.app/" target="_blank" className="underline hover:text-gray-400">Matías Gonta</a> • © {new Date().getFullYear()} Poke Wiki. All rights reserved.
                </p>

                <PokeWikiNav wrapper={false} />
            </div>
        </footer>
    )
}

export default Footer