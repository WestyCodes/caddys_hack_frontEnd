import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import LogoCard from '../../components/logoCard';
import LoginForm from '../../components/loginForm';
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
                                        <LoginForm
                                            handleRegister={handleRegister}
                                            onChange={onChange}
                                            navigate={navigate}
                                        />
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
