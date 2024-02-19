import { Link } from "react-router-dom";

interface ErrorCardInterface {
    errorMsg: string;
    retryFunc: () => void;
    backToHomeBtn?: boolean;
    className?: string;
}

const ErrorCard: React.FC<ErrorCardInterface> = ({ className, errorMsg, retryFunc, backToHomeBtn = false }) => {
    return (
        <div className={`mx-auto flex flex-col border-l-4 border-l-[#b91c1c] bg-[#feecec] text-[#b91c1c] rounded-md w-full max-w-[475px] p-4 ${className ? className : ''}`}>
            <h2 className="font-bold text-base">Something went wrong</h2>
            <p className="text-sm">{errorMsg}</p>

            <div className="self-end flex gap-2.5 mt-2.5">
                {
                    backToHomeBtn &&
                    <Link
                        to="/"
                        role="link"
                        className="rounded-md py-1 px-2.5 text-sm transition-all hover:text-[#b91c1cd0] active:scale-95"
                    >
                        <span>Back to home</span>
                    </Link>
                }
                <button
                    role="button"
                    type="button"
                    className="rounded-md border border-[#b91c1c] bg-[#feecec] py-1 px-2.5 text-sm transition-all hover:bg-[#fce5e5] active:scale-95"
                    onClick={retryFunc}
                >
                    <span>Try again</span>
                </button>
            </div>
        </div>
    )
}

export default ErrorCard