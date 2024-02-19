import { Tooltip, TooltipWrapper } from "../Tooltip";
import { Link } from "react-router-dom";

interface PokeWikiNavInterface {
    wrapper?: boolean;
}

const PokeWikiNav: React.FC<PokeWikiNavInterface> = ({ wrapper = true }) => {
    const ROUTES = [
        {
            name: 'Home',
            path: '/',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            )
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4h6v8h-6z" />
                    <path d="M4 16h6v4h-6z" />
                    <path d="M14 12h6v8h-6z" />
                    <path d="M14 4h6v4h-6z" />
                </svg>
            )
        }
    ]

    return (
        <nav className={`flex gap-4 shadow-xl rounded-md ${wrapper ? 'border border-gray-300 py-2 px-3' : ''}`}>
            {
                ROUTES.map(({ name, path, icon }, index) => (
                    <TooltipWrapper key={index}>
                        <Link
                            to={path}
                            className="group relative cursor-pointer"
                        >
                            {icon}

                            <Tooltip axisY={-25}>
                                {name}
                            </Tooltip>
                        </Link>
                    </TooltipWrapper>
                ))
            }
        </nav>
    )
}

export default PokeWikiNav