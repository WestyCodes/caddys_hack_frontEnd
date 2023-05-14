import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
    const { onLogin } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        const res = await onLogin(formData.email, formData.password);
        res.status === 'fail' ? setError(true) : setError(false);
    };

    return (
        <section className="h-screen bg-midnightBlue-300">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
                    <div className="w-full">
                        <div className="block rounded-lg bg-slate-100 shadow-lg">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center pt-5">
                                            <img
                                                className="mx-auto w-48 bg-midnightBlue-200 rounded-full"
                                                src="https://cdn.discordapp.com/attachments/416919669363179520/1106999572531777576/result.png"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Caddy's Hack
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">
                                                Please login to your account
                                            </p>

                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Username"
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                >
                                                    Username
                                                </label>
                                            </div>

                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-midnightBlue-200 text-slate-100 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                >
                                                    Log in
                                                </button>

                                                <a href="#!">
                                                    Forgot password?
                                                </a>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">
                                                    Don't have an account?
                                                </p>
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-18th-hole bg-top bg-cover">
                                    <div className="px-4 py-6 text-slate-100 md:mx-6 md:p-12 bg-slate-900/50 rounded-3xl">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            Take control of your game and
                                            streamline your practise!
                                        </h4>
                                        <p className="text-sm">
                                            Caddy's Hack is a tool for golfer's
                                            of all skill levels. Track every
                                            golf shot, visualise your data,
                                            stream line your practise, and take
                                            control of your game. Caddy's Hack
                                            will be there for you, through all
                                            shots, thick and thin.
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

export default Login;
