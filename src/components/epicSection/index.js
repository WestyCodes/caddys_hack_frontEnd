export default function EpicSection() {
    return (
        <section className="grid sm:grid-cols-2 grid-cols-1 px-10 xl:h-[750px] lg:h-[550px] h-[350px] justify-items-center">
            <div className="main-empty"></div>
            <div className="grid grid-cols-1 place-content-center max-w-lg translate-y-[50px]">
                <div className="pb-10 pt-3 px-8 sm:bg-black/20 bg-black/50 rounded-lg">
                    <h1 className="lg:text-5xl text-4xl font-bold sm:text-right text-center">
                        Track Your Shots.
                    </h1>
                    <h2 className="pb-3 lg:text-4xl text-3xl font-bold sm:text-right text-center">
                        Improve Your Game.
                    </h2>
                    <p className="lg:text-xl sm:text-right text-left">
                        Caddy's Hack is an easy-to-use tool to track every golf
                        shot you take. Use the information to level up your game
                        and streamline your practice.
                    </p>
                </div>
                <div className="mt-3 grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                    <a
                        href={'/register'}
                        className="w-40 relative rounded-full px-5 py-2.5 overflow-hidden group bg-midnightBlue-200 relative hover:bg-gradient-to-r hover:from-midnightBlue-200 hover:to-midnightBlue-100 text-white hover:ring-2 hover:ring-offset-2 hover:ring-midnightBlue-100 transition-all ease-out duration-300"
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative font-semibold text-xl grid grid-col-1 justify-items-center">
                            Sign Up
                        </span>
                    </a>

                    <a
                        href="#easy2use"
                        className="w-40 relative rounded-full px-5 py-2.5 overflow-hidden group bg-slate-300 relative hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative text-midnightBlue-200 font-semibold text-xl grid grid-col-1 justify-items-center">
                            Learn More
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
