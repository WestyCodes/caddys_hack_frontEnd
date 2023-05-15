import React, { useState, useEffect } from 'react';
import { get } from '../../service/apiClient';

import useAuth from '../../hooks/useAuth';
import jwt_decode from 'jwt-decode';

const CaddyTrack = () => {
    const { token } = useAuth();
    const { userId } = jwt_decode(token);

    const [user, setUser] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [golfClub, setGolfClub] = useState(null);
    const [shotDirection, setShotDirection] = useState(true);
    const [shotDistance, setShotDistance] = useState(false);
    const [confirmShot, setConfirmShot] = useState(false);
    const [shotParagraph, setShotParagraph] = useState('');
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [onTarget, setOnTarget] = useState(false);
    const [long, setLong] = useState(false);
    const [short, setShort] = useState(false);
    const [pinHigh, setPinHigh] = useState(false);

    const { onLogout } = useAuth();

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const createShot = () => {
        const shot = {
            userId: user.id,
            golfClubId: golfClub,
            left: left,
            right: right,
            onTarget: onTarget,
            long: long,
            short: short,
            pinHigh: pinHigh,
        };
        console.log(shot);
        return shot;
    };

    const createShotText = () => {
        let shotDir = null;
        let shotLength = null;
        let shotError = false;
        if (left) {
            shotDir = 'left of';
        } else if (right) {
            shotDir = 'right of';
        } else if (onTarget) {
            shotDir = 'on';
        } else {
            shotError = true;
        }
        if (short) {
            shotLength = 'short';
        } else if (long) {
            shotLength = 'long';
        } else if (pinHigh) {
            shotLength = 'Pin High';
        } else {
            shotError = true;
        }

        const shotText = `Your golf shot was ${shotDir} target, and ${shotLength}`;
        console.log(shotText);
        if (shotError) {
            return 'There was an error with the shot, refresh and try again.';
        } else {
            return setShotParagraph(...shotText);
        }
    };

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await get(`users/${userId}`);
            setUser(res.data.user);
        };
        getUserInfo();
    }, [userId]);

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-trackerbg-pattern h-screen">
            <nav className="container flex justify-between px-4 py-8 mx-auto h-1/6">
                <div className="hidden space-x-8 lg:flex">
                    <a href={'/'}>Home</a>
                    <a href="#_">Dashboard</a>
                    <a onClick={onLogout} href="#_">
                        Logout
                    </a>
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
                                    href={'/'}
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
                                    onClick={onLogout}
                                >
                                    Logout
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
            <div className="h-2/6"></div>
            <div className="h-3/6 grid grid-cols-3 grid-rows-5">
                <div className="col-span-3 row-span-2 grid grid-cols-1 justify-items-center translate-x-[17px]">
                    <svg
                        fill="white"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 86.5 86.5"
                        height="100"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <g>
                                {' '}
                                <path d="M30.893,77.008V6.362c0.547-0.254,0.93-0.804,0.93-1.446V1.595c0-0.88-0.714-1.595-1.594-1.595h-2.657 c-0.881,0-1.595,0.715-1.595,1.595v3.321c0,0.643,0.382,1.192,0.93,1.446v70.646c-4.722,0.352-8.969,1.953-8.969,4.709 c0,3.141,5.514,4.783,10.962,4.783c5.447,0,10.962-1.643,10.962-4.783C39.862,78.961,35.614,77.357,30.893,77.008z M28.9,84.107 c-5.567,0-8.57-1.696-8.57-2.392c0-0.606,2.291-1.978,6.577-2.315v2.315h3.986V79.4c4.287,0.339,6.577,1.709,6.577,2.315 C37.47,82.411,34.467,84.107,28.9,84.107z M68.562,26.441c0,0.043-0.008,0.084-0.013,0.124c0.021,0.177,0.009,0.358-0.055,0.536 c-0.041,0.119-1.063,2.949-4.228,3.979c-0.751,0.245-1.552,0.368-2.397,0.368c-2.714,0-5.908-1.257-9.533-3.758 c-10.507-7.245-16.902-0.472-17.17-0.181c-0.333,0.364-0.857,0.487-1.317,0.309c-0.459-0.178-0.764-0.618-0.764-1.112V5.58 c0-0.018,0.004-0.035,0.005-0.054c-0.002-0.041,0.01-0.079,0.012-0.12c0.004-0.028,0.006-0.056,0.012-0.082 c0.026-0.24,0.104-0.477,0.278-0.67c0.079-0.088,8.019-8.657,20.302-0.184c4.051,2.793,7.449,3.859,9.831,3.084 c2.019-0.658,2.706-2.477,2.711-2.496c0.193-0.549,0.752-0.883,1.33-0.783c0.575,0.097,0.995,0.596,0.995,1.18L68.562,26.441 L68.562,26.441z"></path>{' '}
                            </g>{' '}
                        </g>
                    </svg>
                </div>
                <div></div>
                <div className=""></div>
                <div></div>
                <div
                    className={`px-5 col-span-3 grid grid-cols-1 justify-items-center ${
                        confirmShot ? 'block' : 'hidden'
                    }`}
                >
                    <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-3xl font-medium uppercase leading-normal bg-midnightBlue-200 text-slate-100 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        onClick={() => {
                            // handleSubmit();
                            createShotText();
                            createShot();
                            setConfirmShot(false);
                        }}
                    >
                        Confirm!
                    </button>
                </div>
                <div
                    className={`row-span-2 left arrow grid grid-cols-1 justify-items-end ${
                        shotDirection ? 'grid' : 'hidden'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        viewBox="0 0 20 20"
                        fill="white"
                        onClick={() => {
                            setLeft(true);
                            setShotDirection(false);
                            setShotDistance(true);
                        }}
                    >
                        <path d="M10.018 18v-5h10V5h-10V0L0 8.939 10.018 18z" />
                    </svg>
                </div>
                <div
                    className={`row-span-2  text-right text-white ${
                        shotDistance ? 'block' : 'hidden'
                    }`}
                >
                    <p
                        className="text-6xl font-bold max-h-max"
                        onClick={() => {
                            setShort(true);
                            setShotDistance(false);
                            setConfirmShot(true);
                        }}
                    >
                        S
                    </p>
                    <p className="text-xs">SHORT</p>
                </div>
                <div
                    className={`row-span-2 ball grid grid-cols-1 justify-items-center ${
                        shotDirection ? 'grid' : 'hidden'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                        width="75"
                        height="75"
                        fill="white"
                        onClick={() => {
                            setOnTarget(true);
                            setShotDirection(false);
                            setShotDistance(true);
                        }}
                    >
                        <circle cx="1024" cy="1024" r="768" />
                    </svg>
                </div>
                <div
                    className={`row-span-2 ball grid grid-cols-1 justify-items-center ${
                        shotDistance ? 'grid' : 'hidden'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                        width="75"
                        height="75"
                        fill="white"
                        onClick={() => {
                            setPinHigh(true);
                            setShotDistance(false);
                            setConfirmShot(true);
                        }}
                    >
                        <circle cx="1024" cy="1024" r="768" />
                    </svg>
                </div>
                <div
                    className={`row-span-2 ${
                        shotDirection ? 'grid' : 'hidden'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        viewBox="0 0 20 20"
                        fill="white"
                        onClick={() => {
                            setRight(true);
                            setShotDirection(false);
                            setShotDistance(true);
                        }}
                    >
                        <path d="M10.029 5H0v7.967h10.029V18l9.961-9.048L10.029 0v5z" />
                    </svg>
                </div>
                <div
                    className={`row-span-2 text-white ${
                        shotDistance ? 'block' : 'hidden'
                    }`}
                >
                    <p
                        className="text-6xl font-bold max-h-max"
                        onClick={() => {
                            setLong(true);
                            setConfirmShot(true);
                            setShotDistance(false);
                        }}
                    >
                        L
                    </p>
                    <p className="text-xs">LONG</p>
                </div>
            </div>
        </div>
    );
};

export default CaddyTrack;
