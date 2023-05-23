import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { get } from '../../service/apiClient';
import useAuth from '../../hooks/useAuth';

const CaddyTrack = () => {
    const { token, onCreateShot, onLogout } = useAuth();
    const { userId } = jwt_decode(token);

    const [user, setUser] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [clubOpen, setClubOpen] = useState(false);
    const [golfClub, setGolfClub] = useState({ name: `PICK A CLUB` });
    const [shotDirection, setShotDirection] = useState(true);
    const [shotDistance, setShotDistance] = useState(false);
    const [confirmShot, setConfirmShot] = useState(false);
    // const [shotParagraph, setShotParagraph] = useState('');
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [onTarget, setOnTarget] = useState(false);
    const [long, setLong] = useState(false);
    const [short, setShort] = useState(false);
    const [pinHigh, setPinHigh] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const handleClubDropDown = () => {
        setClubOpen(!clubOpen);
    };

    const handleCreateShot = async () => {
        const res = await onCreateShot(createShot());
        console.log(res);
        res.status === 'error'
            ? console.log('It failed')
            : console.log('It Worked');
    };

    const createShot = () => {
        const shot = {
            userId: user.id,
            golfClubId: golfClub.id,
            left: left,
            right: right,
            onTarget: onTarget,
            long: long,
            short: short,
            pinHigh: pinHigh,
        };
        setLeft(false);
        setRight(false);
        setOnTarget(false);
        setLong(false);
        setShort(false);
        setPinHigh(false);
        setShotDirection(true);
        console.log(shot);
        return shot;
    };
    const undoShot = () => {
        setLeft(false);
        setRight(false);
        setOnTarget(false);
        setLong(false);
        setShort(false);
        setPinHigh(false);
        setShotDirection(true);
        console.log('Shot Cancelled');
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
        if (shotError) {
            return 'There was an error with the shot, refresh and try again.';
        } else {
            return shotText;
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
        <div className="bg-cover bg-center bg-no-repeat bg-trackerbg-pattern h-screen w-screen">
            <nav className=" container flex justify-between pr-4 py-8 mx-auto h-1/6">
                <div className="z-50 dropdownClub">
                    <button
                        className="text-white bg-slate-600/30 font-medium rounded-r-full sm:rounded-full text-sm  py-1 pr-4 sm:pl-2 sm:pr-3 text-center inline-flex items-center"
                        onClick={handleClubDropDown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 64 64"
                        >
                            <path fill="#656D78" d="M46 21h3v42h-3z" />
                            <path
                                fill="#E6E9ED"
                                d="M46 15h-5.99c-.14 0-.28 0-.41-.01-4.229-.21-7.59-3.71-7.59-7.99V2.47C34.109 1.61 36.75 1 40 1c4.979 0 9 4.03 9 9v11h-3v-6z"
                            />
                            <path
                                fill="#545C66"
                                d="M32.01 7c0 4.28 3.36 7.78 7.59 7.99C28.899 14.83 25.01 8 25.01 8l7-1z"
                            />
                            <path
                                fill="#656D78"
                                d="M25.01 8s1.979-3.47 7-5.53V7l-7 1z"
                            />
                            <path
                                fill="#E6E9ED"
                                d="M41.01 29.02V38h-3v-4.98c0-2.21-1.79-4-4-4h-8.99c-2.21 0-4-1.789-4-4 0-3.319 2.68-6 6-6h3.99c5.53 0 10 4.47 10 10z"
                            />
                            <path
                                fill="#656D78"
                                d="M38.01 38h3v25h-3zM28.01 50.06h3V63h-3z"
                            />
                            <path
                                fill="#CCD1D9"
                                d="m33 40-1.99 6v4.06h-3V46L30 40z"
                            />
                            <path
                                fill="#E6E9ED"
                                d="M33 38v2H15v-2c0-1.66 1.35-3 3-3h12c1.66 0 3 1.34 3 3z"
                            />
                            <g>
                                <path d="M41.012 30.018a1 1 0 0 1-1-1c0-4.963-4.037-9-9-9a1 1 0 1 1 0-2c6.065 0 11 4.935 11 11a1 1 0 0 1-1 1zM21.014 26.018a1 1 0 0 1-1-1c0-3.859 3.141-7 7-7a1 1 0 1 1 0 2c-2.757 0-5 2.243-5 5a1 1 0 0 1-1 1z" />
                                <path d="M31.012 20.018h-3.998a1 1 0 1 1 0-2h3.998a1 1 0 1 1 0 2zM25.014 30.018c-2.757 0-5-2.243-5-5a1 1 0 1 1 2 0c0 1.654 1.346 3 3 3a1 1 0 1 1 0 2z" />
                                <path d="M34.01 30.018h-8.996a1 1 0 1 1 0-2h8.996a1 1 0 1 1 0 2z" />
                                <path d="M38.01 34.018a1 1 0 0 1-1-1c0-1.654-1.346-3-3-3a1 1 0 1 1 0-2c2.757 0 5 2.243 5 5a1 1 0 0 1-1 1zM41.012 63.999a1 1 0 0 1-1-1V29.018a1 1 0 1 1 2 0v33.981a1 1 0 0 1-1 1z" />
                                <path d="M38.01 63.999a1 1 0 0 1-1-1V33.018a1 1 0 1 1 2 0v29.981a1 1 0 0 1-1 1z" />
                                <path d="M41.012 38.996H38.01a1 1 0 1 1 0-2h3.002a1 1 0 1 1 0 2zM49 10.999a1 1 0 0 1-1-1C48 5.588 44.411 2 40 2a1 1 0 1 1 0-2c5.514 0 10 4.485 10 9.999a1 1 0 0 1-1 1z" />
                                <path d="M49 64a1 1 0 0 1-1-1V10.219a1 1 0 1 1 2 0V63a1 1 0 0 1-1 1zM25.001 8.998a.997.997 0 0 1-.867-1.494C24.309 7.197 28.551 0 40 0a1 1 0 1 1 0 2C29.763 2 26.022 8.233 25.868 8.499a1 1 0 0 1-.867.499z" />
                                <path d="M46 16h-5.994c-11.455 0-15.697-7.197-15.872-7.504a1 1 0 0 1 1.735-.995c.157.272 3.9 6.499 14.137 6.499H46a1 1 0 1 1 0 2z" />
                                <path d="M46 64a1 1 0 0 1-1-1V15a1 1 0 1 1 2 0v48a1 1 0 0 1-1 1z" />
                                <path d="M49 22h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2zM40.006 16c-4.963 0-9-4.037-9-9a1 1 0 1 1 2 0c0 3.859 3.141 7 7 7a1 1 0 1 1 0 2z" />
                                <path d="M32.006 8a1 1 0 0 1-1-1V2.473a1 1 0 1 1 2 0V7a1 1 0 0 1-1 1z" />
                                <path d="M25.001 9a1 1 0 0 1-.14-1.99l7.004-1a1 1 0 1 1 .283 1.981l-7.004 1a1.156 1.156 0 0 1-.143.009zM44 7h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2zM44 10h-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2zM33 38.999a1 1 0 0 1-1-1c0-1.103-.897-2-2-2a1 1 0 1 1 0-2c2.206 0 4 1.794 4 4a1 1 0 0 1-1 1zM15 38.999a1 1 0 0 1-1-1c0-2.206 1.794-4 4-4a1 1 0 1 1 0 2c-1.103 0-2 .897-2 2a1 1 0 0 1-1 1z" />
                                <path d="M30 35.999H18a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zM33 40.998a1 1 0 0 1-1-1v-1.999a1 1 0 1 1 2 0v1.999a1 1 0 0 1-1 1z" />
                                <path d="M33 40.998H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z" />
                                <path d="M15 40.998a1 1 0 0 1-1-1v-1.999a1 1 0 1 1 2 0v1.999a1 1 0 0 1-1 1zM31.006 46.999a1.001 1.001 0 0 1-.949-1.316l1.994-6.001a1.001 1.001 0 0 1 1.899.631l-1.994 6.001a1.004 1.004 0 0 1-.95.685zM28.004 46.999a1.001 1.001 0 0 1-.949-1.316l1.994-6.001a1.001 1.001 0 0 1 1.899.631l-1.994 6.001a1.004 1.004 0 0 1-.95.685z" />
                                <path d="M28.004 64a1 1 0 0 1-1-1V45.999a1 1 0 1 1 2 0V63a1 1 0 0 1-1 1zM31.006 63.999a1 1 0 0 1-1-1v-17a1 1 0 1 1 2 0v17a1 1 0 0 1-1 1z" />
                                <path d="M31.006 51.06h-3.002a1 1 0 1 1 0-2h3.002a1 1 0 1 1 0 2z" />
                            </g>
                        </svg>
                    </button>

                    <div
                        id="dropdownClub"
                        className={`z-50 h-[300px] overflow-auto w-44 bg-slate-600/20  text-white rounded divide-y divide-gray-100 shadow ${
                            clubOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className=" z-50 w-44 bg-slate-600/20  rounded divide-y divide-gray-100 shadow ">
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 1,
                                            name: 'Driver',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Driver
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 2,
                                            name: '3 Wood',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    3 Wood
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 3,
                                            name: '3 Hybrid',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    3 Hybrid
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 4,
                                            name: '4 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    4 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 5,
                                            name: '5 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    5 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 6,
                                            name: '6 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    6 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 7,
                                            name: '7 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    7 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="z-50 hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 8,
                                            name: '8 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    8 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 9,
                                            name: '9 Iron',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    9 Iron
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 10,
                                            name: 'Pitching Wedge',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Pitching Wedge
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 11,
                                            name: 'Gap Wedge',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Gap Wedge
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 12,
                                            name: 'Sand Wedge',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Sand Wedge
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 13,
                                            name: 'Lob Wedge',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Lob Wedge
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/50"
                                    onClick={(e) => {
                                        setGolfClub({
                                            id: 14,
                                            name: 'Putter',
                                        });
                                        handleClubDropDown();
                                    }}
                                >
                                    Putter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden space-x-8 lg:flex">
                    <a href={'/'}>Home</a>
                    <a href={'/datavis'}>My Shots</a>
                    <a onClick={onLogout} href="#_">
                        Logout
                    </a>
                </div>
                <div className="z-[51] dropdown lg:hidden ">
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
                                    href={'/'}
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'/datavis'}
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                >
                                    My Shots
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#_"
                                    className="hover:text-black text-white block py-2 px-4 hover:bg-gray-100/90"
                                    onClick={onLogout}
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="h-2/6 grid grid-cols-3">
                <div></div>
                <div className="grid grid-cols-1 justify-items-center">
                    <h3 className="text-3xl font-bold text-white text-center">{`${golfClub.name}`}</h3>
                </div>
            </div>
            <div className="h-3/6 grid grid-cols-3 grid-rows-5">
                <div className="-z-1 col-span-3 row-span-2 grid grid-cols-1 justify-items-center translate-x-[17px]">
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
                <div
                    className={`col-span-3 sm:block ${
                        confirmShot ? 'hidden' : 'block'
                    }`}
                ></div>
                <div
                    className={`px-5 col-span-3 grid grid-cols-1 justify-items-center ${
                        confirmShot ? 'block' : 'hidden'
                    }`}
                >
                    <p className="z-10 bg-slate-900/60 p-2 sm:text-xl text-sm text-slate-100 font-semibold rounded m-2">
                        {createShotText()}
                    </p>

                    <button
                        className="mb-3 inline-block sm:w-1/3 w-1/2 rounded px-6 pb-2 pt-2.5 sm:text-3xl text-xl font-medium uppercase leading-normal bg-midnightBlue-200 text-slate-100 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        onClick={() => {
                            // handleSubmit();
                            setConfirmShot(false);
                            handleCreateShot();
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        className="mb-3 inline-block sm:w-1/4 w-1/3 rounded px-6 pb-2 pt-2.5 sm:text-1xl text-md font-medium uppercase leading-normal text-midnightBlue-200 bg-slate-300 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        onClick={() => {
                            // handleSubmit();
                            setConfirmShot(false);
                            undoShot();
                        }}
                    >
                        Cancel
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
