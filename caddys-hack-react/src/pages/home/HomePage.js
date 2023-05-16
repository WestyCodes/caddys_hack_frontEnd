import React, { useState } from 'react';

const HomePage = () => {
    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="text-slate-50">
            <header className="bg-cover bg-left bg-hero-pattern xl:h-[800px] h-[600px]">
                <nav className="flex justify-between items-center px-10 py-2 text-black">
                    <div className="text-2xl font-semibold text-midnightBlue-200">
                        <p>Caddy's Hack</p>
                    </div>
                    <ul className="sm:flex space-x-4 hidden">
                        <li>
                            <a href={'/caddytrack'}>
                                <span className="text-xl text-midnightBlue-200">
                                    Caddy Track
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={'/register'}>
                                <span className="text-xl text-midnightBlue-200">
                                    Sign Up
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={'/login'}>
                                <span className="text-xl text-midnightBlue-200">
                                    Log In
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="z-[51] dropdown sm:hidden">
                        <button
                            className="z-51 text-white bg-transparent hover:bg-slate-600/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                            onClick={handleDropDown}
                        >
                            <svg
                                className="w-7 h-7"
                                aria-hidden="true"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown"
                            className={`absolute right-0 mr-5 z-51 w-44 bg-slate-600/80  text-white rounded divide-y divide-gray-100 shadow ${
                                isOpen ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className=" z-51 w-44 bg-slate-600/20  rounded divide-y divide-gray-100 shadow ">
                                <li>
                                    <a
                                        href={'/caddytrack'}
                                        className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                    >
                                        Caddy Track
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={'/register'}
                                        className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={'/login'}
                                        className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                    >
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
                                Caddy's Hack is an easy-to-use tool to track
                                every golf shot you take. Use the information to
                                level up your game and streamline your practice.
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
            </header>
            <main
                className="bg-cover bg-left bg-mainTopog-pattern"
                id="easy2use"
            >
                <div className="bg-midnightBlue-300/95">
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
                                        Use Caddy's Hack to track which club
                                        you're using and how close to the target
                                        each shot is. Find your strengths and
                                        weaknesses, and supercharge your future
                                        sessions!
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
                                src={
                                    process.env.PUBLIC_URL +
                                    '/assets/golferwithphone.jpg'
                                }
                                alt="Man holding phone"
                            />
                        </div>
                    </section>
                    <section className="grid sm:grid-cols-2 grid-cols-1 px-10 h-full justify-items-center">
                        <div className="grid grid-cols-1 max-w-lg px-10 h-full sm:pt-none py-5">
                            <div className="">
                                <img
                                    className="rounded-3xl mb-3"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/dispersionpattern.png'
                                    }
                                    alt="dispersion of golf shots"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    className="rounded-3xl"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/golfapppreview.png'
                                    }
                                    alt="golf app preview"
                                />
                                <img
                                    className="rounded-3xl"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/golfapppreview2.png'
                                    }
                                    alt="golf app preview"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 max-w-lg px-10 h-full sm:order-none order-first sm:pt-none pt-12">
                            <div className="h-full">
                                <div className="lg:text-xl text-base">
                                    <h3>BASIC or ADVANCED</h3>
                                </div>
                                <div className="pb-3 lg:text-5xl text-4xl font-bold">
                                    <h2>
                                        For The Quick Log Or The Data Analyst
                                    </h2>
                                </div>
                                <div className="">
                                    <p className="py-5">
                                        The basic view allows you to log a shot
                                        in just 4 taps, perfect for when you're
                                        walking down the fairway
                                    </p>
                                    <ol className="">
                                        <li>Choose your club!</li>
                                        <li>Tap Left, Right, or On Target!</li>
                                        <li>Tap Long, Short, or Pin High!</li>
                                        <li>Confirm!</li>
                                    </ol>
                                    <p className="py-5">
                                        The advanced view is for the aspiring
                                        professional! A rangefinder is
                                        recommended and you will be able to log
                                        your shots with the same accuracy as
                                        Matt Fitzpatrick!
                                    </p>
                                </div>
                            </div>
                            <div className="sm:mb-12 mb-none py-5">
                                <a
                                    href={'/login'}
                                    className="relative rounded-full px-5 py-2.5 overflow-hidden group bg-slate-300 relative hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300"
                                >
                                    <span className="relative text-midnightBlue-200 font-semibold sm:text-xl">
                                        See Your Shots
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
