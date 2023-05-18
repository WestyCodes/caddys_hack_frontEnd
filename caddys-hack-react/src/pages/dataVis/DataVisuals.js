import React, { useState, useEffect } from 'react';
import { get } from '../../service/apiClient';
import jwt_decode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DataVis = () => {
    const navigate = useNavigate();
    // const { onLogout } = useAuth();
    const { token, onLogout } = useAuth();
    const { userId } = jwt_decode(token);
    const [golfShots, setGolfShots] = useState([]);
    const [totalShots, setTotalShots] = useState(0);
    const [golfClubId, setGolfClubId] = useState(0);
    const [golfClubName, setGolfClubName] = useState('');

    useEffect(() => {
        setGolfShots({
            leftLong: 0,
            straightLong: 0,
            rightLong: 0,
            leftPH: 0,
            straightPH: 0,
            rightPH: 0,
            leftShort: 0,
            straightShort: 0,
            rightShort: 0,
            totalShots: 0,
        });
        setTotalShots(0);
        const getShotData = async () => {
            const res = await get(`users/${userId}/golfshot/${golfClubId}`);

            const shotLocation = {
                leftLong: 0,
                straightLong: 0,
                rightLong: 0,
                leftPH: 0,
                straightPH: 0,
                rightPH: 0,
                leftShort: 0,
                straightShort: 0,
                rightShort: 0,
                totalShots: 0,
            };

            function findShots(shot) {
                let newObj = [];

                for (var key in shot) {
                    if (shot[key]) newObj.push(key);
                }
                return newObj;
            }

            for (let i = 0; i < res.data?.length; i++) {
                const shot = findShots(res.data[i]);
                if (shot.includes('left') && shot.includes('long')) {
                    shotLocation.leftLong++;
                } else if (shot.includes('onTarget') && shot.includes('long')) {
                    shotLocation.straightLong++;
                } else if (shot.includes('right') && shot.includes('long')) {
                    shotLocation.rightLong++;
                } else if (shot.includes('left') && shot.includes('pinHigh')) {
                    shotLocation.leftPH++;
                } else if (
                    shot.includes('onTarget') &&
                    shot.includes('pinHigh')
                ) {
                    shotLocation.straightPH++;
                } else if (shot.includes('right') && shot.includes('pinHigh')) {
                    shotLocation.rightPH++;
                } else if (shot.includes('left') && shot.includes('short')) {
                    shotLocation.leftShort++;
                } else if (
                    shot.includes('onTarget') &&
                    shot.includes('short')
                ) {
                    shotLocation.straightShort++;
                } else if (shot.includes('right') && shot.includes('short')) {
                    shotLocation.rightShort++;
                }
            }

            if (res.status === 'success') {
                setGolfShots(shotLocation);
                setTotalShots(res.data.length);
            }
        };
        getShotData();
    }, [golfClubId, userId]);

    return (
        <div>
            <div className="flex w-screen h-screen text-slate-200 bg-midnightBlue-200">
                <div className="flex flex-col sm:w-56 w-max">
                    <button
                        className="relative text-sm focus:outline-none group"
                        onClick={() => navigate('/')}
                    >
                        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-blue-300 hover:text-midnightBlue-300">
                            <span className="font-bold sm:text-xl text-md">
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
                            onClick={(e) => {
                                setGolfClubId(1);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Driver</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(2);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">3 Wood</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(3);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">3 Hybrid</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(4);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">4 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(5);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">5 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(6);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">6 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(7);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">7 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(8);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">8 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(9);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">9 Iron</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(10);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Pitching Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(11);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Gap Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(12);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Sand Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(13);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Lob Wedge</span>
                        </a>
                        <a
                            className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            href="#_"
                            onClick={(e) => {
                                setGolfClubId(14);
                                setGolfClubName(e.target.innerText);
                            }}
                        >
                            <span className="leading-none">Putter</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col flex-grow w-max">
                    <div className="flex items-center flex-shrink-0 h-16 border-b border-gray-300">
                        <h1 className="text-lg font-medium w-max">Shot Data</h1>
                        <button
                            className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-blue-300 hover:text-midnightBlue-300"
                            onClick={() => navigate('/')}
                        >
                            Home
                        </button>

                        <button
                            className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-slate-300 rounded hover:bg-blue-300 text-midnightBlue-300"
                            onClick={() => navigate('/caddytrack')}
                        >
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
                            <div
                                onClick={() => onLogout()}
                                className="absolute right-0 flex-col items-start
                                hidden w-40 pb-1 bg-white border border-gray-300
                                shadow-lg group-focus:flex"
                            >
                                <div className="w-full px-4 py-2 text-left hover:bg-blue-300 text-midnightBlue-300">
                                    <span>Logout</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex-grow p-6 overflow-auto bg-golf-course bg-cover bg-center">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="md:col-span-2 lg:col-span-3 h-[75px] bg-white/60 border border-midnightBlue-300/50 rounded-lg w-full lg:w-1/3 m-auto">
                                <div className="h-full grid justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-bold m-auto">
                                        {golfClubName
                                            ? golfClubName
                                            : 'Choose a Club'}
                                    </h3>
                                    <p className="text-right m-auto">
                                        Total Shots:{' '}
                                        {totalShots === 0 ? '0' : totalShots}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Long & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.leftLong /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.leftLong}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Long & On Target
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.straightLong /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.straightLong}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Long & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.rightLong /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.rightLong}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Pin High & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.leftPH /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.leftPH}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Perfect
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.straightPH /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.straightPH}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Pin High & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.rightPH /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.rightPH}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Short & Left
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.leftShort /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.leftShort}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Short & On Target
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.straightShort /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.straightShort}
                                    </p>
                                </div>
                            </div>
                            <div className="h-[250px] bg-white/60 border border-midnightBlue-300/50 rounded-lg">
                                <div className="h-full grid grid-rows-3 justify-items-center text-midnightBlue-200">
                                    <h3 className="text-center text-3xl font-semibold m-auto">
                                        Short & Right
                                    </h3>
                                    <p className="m-auto text-6xl font-bold">
                                        {totalShots === 0
                                            ? '0'
                                            : (
                                                  (golfShots.rightShort /
                                                      totalShots) *
                                                  100
                                              ).toFixed(2)}
                                        %
                                    </p>
                                    <p className="text-right m-auto">
                                        Total Shots: {golfShots.rightShort}
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
