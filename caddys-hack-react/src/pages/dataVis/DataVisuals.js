import React, { useState, useEffect } from 'react';
import { get } from '../../service/apiClient';
import jwt_decode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

const DataVis = () => {
    const { token } = useAuth();
    const { userId } = jwt_decode(token);
    const [golfShots, setGolfShots] = useState({});

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         const res = await get(`users/${userId}`);
    //         setGolfShots(res.data.user);
    //     };
    //     getUserInfo();
    // }, [userId]);

    return (
        <div>
            <div className="flex w-screen h-screen text-slate-200 bg-midnightBlue-200">
                <div className="flex flex-col w-56 border-r border-slate-300">
                    <button className="relative text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-blue-300 hover:text-midnightBlue-300">
                            <span className="font-bold text-xl">
                                Caddy's Hack
                            </span>
                            {/* <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg> */}
                        </div>
                        {/* <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
                            <a
                                className="w-full px-4 py-2 text-left hover:bg-blue-300"
                                href="#_"
                            >
                                Menu Item 1
                            </a>
                            <a
                                className="w-full px-4 py-2 text-left hover:bg-blue-300"
                                href="#_"
                            >
                                Menu Item 1
                            </a>
                            <a
                                className="w-full px-4 py-2 text-left hover:bg-blue-300"
                                href="#_"
                            >
                                Menu Item 1
                            </a>
                        </div> */}
                    </button>
                    <div className="flex flex-col flex-grow p-4 overflow-auto">
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Driver</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">3 Wood</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">3 Hybrid</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">4 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">5 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">6 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">7 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">8 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">9 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Pitching Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Gap Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Sand Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Lob Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                        >
                            <span className="leading-none">Putter</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                        <h1 className="text-lg font-medium">Shot Data</h1>
                        <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300">
                            Dashboard
                        </button>
                        <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-slate-300 rounded hover:bg-blue-300 text-midnightBlue-300">
                            Caddy Track
                        </button>
                        <button className="relative ml-2 text-sm focus:outline-none group">
                            <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-blue-300 hover:text-midnightBlue-300">
                                <svg
                                    className="w-5 h-5 mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </div>
                            <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                                <a
                                    className="w-full px-4 py-2 text-left hover:bg-blue-300"
                                    href="#_"
                                >
                                    Download
                                </a>
                            </div>
                        </button>
                    </div>
                    <div className="flex-grow p-6 overflow-auto bg-golf-course bg-cover bg-center">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Long & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Long & On Target
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Long & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Pin High & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Perfect
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Pin High & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Short & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Short & On Target
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-3xl font-semibold m-auto">
                                        Short & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        76%
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: 102
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataVis;
