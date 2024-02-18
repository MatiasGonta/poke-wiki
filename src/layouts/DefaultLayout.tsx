const DefaultLayout = ({ title, children }: { title?: string, children: React.ReactNode | React.ReactNode[] }) => {
    if (title) document.title = title;

    return (
        <>
            <header className="w-full bg-gray-800 py-4">
                <div className="size-full max-w-[1200px] mx-auto flex items-center">
                    <h1 role="heading" className="font-bold text-[30px]">Poke Wiki</h1>
                </div>
            </header>

            {children}

            <footer className="w-full bg-white">
                <div className="size-full max-w-[1360px] mx-auto h-12 flex justify-between items-center px-6">
                    <p className="text-sm text-[#000000]">
                        Made by <a href="https://matiasgonta.vercel.app/" target="_blank" className="underline hover:text-gray-400">Matías Gonta</a> • © {new Date().getFullYear()} Poke Wiki. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default DefaultLayout