export default function FirstSection() {
    return (
        <section className="grid sm:grid-cols-2 grid-cols-1 px-10 h-full justify-items-center">
            <div className="grid grid-cols-1 max-w-lg px-10 sm:pt-[100px] pt-12 h-full">
                <div className="">
                    <div className="lg:text-xl text-base">
                        <h3>EASY-TO-USE</h3>
                    </div>
                    <div className="pb-3 lg:text-5xl text-4xl font-bold">
                        <h2>On The Course And The Range...</h2>
                    </div>
                    <div className="py-5">
                        <p>
                            Use Caddy's Hack to track which club you're using
                            and how close to the target each shot is. Find your
                            strengths and weaknesses, and supercharge your
                            future sessions!
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <a
                        href={'/caddytrack'}
                        className="relative rounded-full px-5 py-2.5 overflow-hidden group bg-slate-300 relative hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
                    >
                        <span className="relative text-midnightBlue-200 font-semibold text-xl">
                            Open Caddy Track
                        </span>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 max-w-lg px-10 sm:pt-[100px] pt-5 h-full">
                <img
                    className="rounded-3xl"
                    src={process.env.PUBLIC_URL + '/assets/golferwithphone.jpg'}
                    alt="Man holding phone"
                />
            </div>
        </section>
    );
}
