import { useState } from 'react';
// import Button from '../../components/button';
// import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import ErrorMessage from '../../components/errorMessage';
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
        <div className="bg-blue login credentialpage">
            <CredentialsCard
                title="Login"
                socialLinksTitle="Or log in with"
                altButtonTitle="Need an account?"
                altButtonLink="/register"
                altButtonText="Sign up"
            >
                <div className="login-form">
                    <form>
                        {/* <TextInput
                            value={formData.email}
                            onChange={onChange}
                            name="email"
                            label={'Email *'}
                        />
                        <TextInput
                            value={formData.password}
                            onChange={onChange}
                            name="password"
                            label={'Password *'}
                            type={'password'}
                        /> */}
                    </form>
                    {error && (
                        <ErrorMessage
                            message={'Invalid email and/or password provided'}
                        />
                    )}
                    {/* <Button
                        text="Log in"
                        onClick={handleLogin}
                        classes="green width-full"
                    /> */}
                </div>
            </CredentialsCard>
        </div>
    );
};

export default Login;
