import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import LogoCard from '../../components/logoCard';
const Register = () => {
    const navigate = useNavigate();

    const { onRegister } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);

    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRegister = async () => {
        const res = await onRegister(formData.email, formData.password);
        res.status === 'fail' ? setError(true) : setError(false);
    };

    return (
        <section className="sm:h-screen h-full bg-midnightBlue-300">
            <div className="container h-full p-10 mx-auto">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
                    <div className="w-full">
                        <div className="block rounded-lg bg-slate-100 shadow-lg">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <LogoCard />
                                        <form>
                                            <p className="mb-4">
                                                Please register an account
                                            </p>

                                            <div className="relative z-0 w-full mb-6 group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                    placeholder=" "
                                                    autoComplete="off"
                                                    required
                                                    onChange={(e) => {
                                                        onChange(e);
                                                    }}
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Email address
                                                </label>
                                            </div>

                                            <div className="relative z-0 w-full mb-6 group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                    placeholder=" "
                                                    required
                                                    onChange={(e) => {
                                                        onChange(e);
                                                    }}
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-midnightBlue-200 text-slate-100 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                    onClick={handleRegister}
                                                >
                                                    Sign Up
                                                </button>

                                                <a href="#!">
                                                    Terms and Conditions
                                                </a>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">
                                                    Have an account?
                                                </p>
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                                                    onClick={() => {
                                                        navigate('/login');
                                                    }}
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="hidden sm:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-magnolia-lane bg-top bg-cover">
                                    <div className="px-4 py-6 text-slate-100 md:mx-6 md:p-12 bg-slate-900/50 rounded-3xl">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            Register and use all features for
                                            FREE
                                        </h4>
                                        <p className="text-sm">
                                            Caddy's Hack aids golfers by
                                            analyzing your shot data over time,
                                            allowing you to pinpoint your
                                            strengths and weaknesses accurately.
                                            Armed with this knowledge, adjust
                                            your club choices and shot
                                            directions strategically, increasing
                                            your chances of hitting the target
                                            consistently. With Caddy's Hack, you
                                            can elevate your game to new
                                            heights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
