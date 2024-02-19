interface LoadingSpinnerInterface {
    type: 'FLEX' | 'NOFLEX';
    barWidth?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerInterface> = ({ type, barWidth }) => {
    const barWidthStyle = barWidth ? `${barWidth}px` : '80px';

    if (type === 'FLEX') return (
        <div
            className="relative mx-auto flex justify-center items-center h-[5px] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-poke-muted after:content-[''] after:h-full after:w-full after:rounded-md after:animate-wobble after:-translate-x-[90%] after:border after:border-poke-primary after:bg-poke-primary"
            style={{ width: barWidthStyle }}
        />
    );

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <div className="flex gap-1.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" className="animate-shake">
                    <path fill="#303c42" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" className="color303C42 svgShape"></path>
                    <path fill="#e53935" d="M12 1c5.696 0 10.393 4.352 10.945 9.905-.814.18-2.882.556-5.996.59C16.692 8.979 14.584 7 12 7s-4.692 1.978-4.949 4.496c-3.114-.035-5.182-.411-5.996-.591C1.607 5.352 6.305 1 12 1z" className="colorE53935 svgShape"></path>
                    <circle cx="12" cy="12" r="4" fill="#455a64" className="color455A64 svgShape"></circle>
                    <path fill="#ffffff" d="M12 23C5.935 23 1 18.065 1 12c0-.028.004-.055.004-.083.952.203 3.01.541 6.046.575C7.3 15.015 9.41 17 12 17s4.7-1.985 4.95-4.508c3.035-.034 5.094-.372 6.046-.575 0 .028.004.055.004.083 0 6.065-4.935 11-11 11z" className="colorFFF svgShape"></path>
                    <circle cx="12" cy="12" r="3" fill="#303c42" className="color303C42 svgShape"></circle>
                    <circle cx="12" cy="12" r="2" fill="#f2f2f2" className="colorF2F2F2 svgShape"></circle>
                    <path fill="#ffffff" d="M10.396 12.604c0-1.103.897-2 2-2a1.99 1.99 0 0 1 1.45.632A2.002 2.002 0 0 0 12 10c-1.103 0-2 .897-2 2 0 .53.211 1.01.549 1.368a1.987 1.987 0 0 1-.153-.764z" opacity=".2" className="colorFFF svgShape"></path>
                    <linearGradient id="a" x1="1.125" x2="22.875" y1="6.929" y2="17.071" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffffff" stopOpacity=".2" className="stopColorFFF svgShape"></stop>
                        <stop offset="1" stopColor="#ffffff" stopOpacity="0" className="stopColorFFF svgShape"></stop>
                    </linearGradient><path fill="url(#a)" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path>
                    <path d="M20.847 11.25c.987-.12 1.696-.256 2.098-.345a10.977 10.977 0 00-3.464-6.956A10.917 10.917 0 0121 9.5c0 .597-.06 1.179-.153 1.75zM22.996 11.917c-.494.105-1.293.247-2.366.363-1.236 4.721-5.527 8.22-10.63 8.22a10.947 10.947 0 01-7.493-2.97C4.417 20.795 7.952 23 12 23c6.065 0 11-4.935 11-11 0-.028-.004-.055-.004-.083z" opacity=".1" fill="#000000" className="color000 svgShape"></path>
                </svg>

                <p className="inline w-fit">Poke Wiki</p>
            </div>

            <div
                className="relative flex justify-center items-center h-[5px] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-poke-muted after:content-[''] after:h-full after:w-full after:rounded-md after:animate-wobble after:-translate-x-[90%] after:border after:border-poke-primary after:bg-poke-primary"
                style={{ width: barWidthStyle }}
            />
        </div>
    )
}

export default LoadingSpinner