import React from 'react';

const CaddyTrack = () => {
    return (
        <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
            <div>
                <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
            </div>
            <div className="hidden space-x-8 lg:flex">
                <a href="#_">Menu 1</a>
                <a href="#_">Menu 2</a>
                <a href="#_">Menu 3</a>
                <a href="#_">Menu 4</a>
            </div>
            <div className="flex lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default CaddyTrack;
