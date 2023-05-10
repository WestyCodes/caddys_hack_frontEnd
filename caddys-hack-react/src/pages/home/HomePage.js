import React from 'react';

const HomePage = () => {
    return (
        <div className="">
            <header className="bg-cover bg-left bg-hero-pattern h-screen xl:h-[800px] lg:h-[600px] h-[400px]">
                <nav className="flex justify-between items-center px-10 py-2 text-black">
                    <div className="text-2xl font-semibold">
                        <p>Caddy's Hack</p>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#">
                                <span className="text-xl">Caddy Track</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="text-xl">Sign Up</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="text-xl">Log In</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <section className="grid grid-cols-2 px-10 xl:h-[750px] lg:h-[550px] h-[350px] justify-items-center">
                    <div className="main-empty"></div>
                    <div className="grid grid-cols-1 place-content-center max-w-lg translate-y-[50px]">
                        <div className="pb-8 pt-3 px-8 bg-black/10 rounded-lg">
                            <h1 className="lg:text-5xl text-4xl font-bold text-slate-50">
                                Track Your Shots.
                            </h1>
                            <h2 className="pb-3 lg:text-4xl text-3xl font-bold text-slate-50">
                                Improve Your Game.
                            </h2>
                            <p className="lg:text-xl text-slate-50">
                                Caddy's Hack is an easy-to-use tool to track
                                every golf shot you take. User the information
                                to level up your game and streamline your
                                practice
                            </p>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center">
                            <p className="text-slate-50">Sign Up</p>
                            <p className="text-slate-50">Learn More</p>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section className="EasyToUse">
                    <div className="ETU-left">
                        <div className="ETU-text">
                            <div className="mini-heading">
                                <h3>EASY-TO-USE</h3>
                            </div>
                            <div className="main-heading">
                                <h2>On The Course And The Range...</h2>
                            </div>
                            <div className="text">
                                <p>
                                    Use Caddy's Hack to track which club you're
                                    using and how close to the target each shot
                                    is. Find your strengths and weaknesses, and
                                    supercharge your future sessions!
                                </p>
                            </div>
                        </div>
                        <div className="ETU-btn">
                            <p>Open Caddy Track</p>
                        </div>
                    </div>
                    <div className="ETU-right">
                        <div className="ETU-image"></div>
                    </div>
                </section>
                <section className="DataLogging">
                    <div className="DL-left">
                        <div className="DL-image1"></div>
                        <div className="DL-image2"></div>
                    </div>
                    <div className="DL-right">
                        <div className="DL-text">
                            <div className="mini-heading">
                                <h3>BASIC or ADVANCED</h3>
                            </div>
                            <div className="main-heading">
                                <h2>For The Quick Log Or The Data Analyst</h2>
                            </div>
                            <div className="text">
                                <p>
                                    The basic view allows you to log a shot in
                                    just 4 taps, perfect for when you're walking
                                    down the fairway
                                </p>
                                <ol>
                                    <li>Choose your club!</li>
                                    <li>Tap Left, Right, or On Target!</li>
                                    <li>Tap Long, Short, or Pin High!</li>
                                    <li>Confirm!</li>
                                </ol>
                                <p>
                                    The advanced view is for the aspiring
                                    professional! A rangefinder is recommended
                                    and you will be able to log your shots with
                                    the same accuracy as Matt Fitzpatrick!
                                </p>
                            </div>
                        </div>
                        <div className="DL-btn">
                            <p>Sign In To See Your Shots</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
