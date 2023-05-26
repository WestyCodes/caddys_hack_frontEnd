import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCard from '../../components/logoCard';
import LoginForm from '../../components/loginForm';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const { onLogin } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);

    const onChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleLogin = async () => {
        const res = await onLogin(formData.email, formData.password);
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
                                            handleForm={handleLogin}
                                            onChange={onChange}
                                            navigate={navigate}
                                            login={true}
                                        />
                                    </div>
                                </div>

                                <div className="hidden sm:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-18th-hole bg-top bg-cover">
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
