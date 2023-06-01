import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavigationBar from '../../components/navigation';
import EpicSection from '../../components/epicSection';

const HomePage = () => {
    const { loggedInUserInfo, onLogout } = useAuth();
    const [isOpen, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        setUser(loggedInUserInfo);
    }, [loggedInUserInfo]);

    const handleLogoutOrNot = () => {
        if (user.id) {
            return onLogout();
        } else {
            return navigate('/login');
        }
    };

    return (
        <div className="text-slate-50">
            <header className="bg-cover bg-left bg-hero-pattern xl:h-[800px] h-[600px]">
                <NavigationBar
                    user={user}
                    handleLogoutOrNot={handleLogoutOrNot}
                    handleDropDown={handleDropDown}
                    isOpen={isOpen}
                />
                <EpicSection />
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
                                        walking down the fairway.
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
