import React, { useState } from 'react';

const CaddyTrack = () => {
    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-trackerbg-pattern h-screen">
            <nav className="container flex justify-between px-4 py-8 mx-auto">
                <div className="hidden space-x-8 lg:flex">
                    <a href="#_">Home</a>
                    <a href="#_">Dashboard</a>
                    <a href="#_">Settings</a>
                </div>
                <div className="dropdown lg:hidden">
                    <button
                        className="text-white bg-transparent hover:bg-slate-600/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
                        className={`z-10 w-44 bg-slate-600/20  text-white rounded divide-y divide-gray-100 shadow ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className=" z-10 w-44 bg-slate-600/20  rounded divide-y divide-gray-100 shadow ">
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                >
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-midnightBlue-200">
                        Caddy Track
                    </h3>
                </div>
            </nav>
            <div className=""></div>
        </div>
    );
};

export default CaddyTrack;
