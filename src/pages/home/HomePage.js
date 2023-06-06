import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import NavigationBar from '../../components/navigation';
import EpicSection from '../../components/epicSection';
import FirstSection from '../../components/homePageFirstSection';
import SecondSection from '../../components/homePageSecondSection';

const HomePage = () => {
    const { loggedInUserInfo, onLogout } = useAuth();
    const [isOpen, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        setUser(loggedInUserInfo);
    }, [loggedInUserInfo]);

    const handleLogoutOrNot = () => {
        if (user.id) {
            return onLogout();
        } else {
            return navigate('/login');
        }
    };

    return (
        <div className="text-slate-50">
            <header className="bg-cover bg-left bg-hero-pattern xl:h-[800px] h-[600px]">
                <NavigationBar
                    user={user}
                    handleLogoutOrNot={handleLogoutOrNot}
                    handleDropDown={handleDropDown}
                    isOpen={isOpen}
                />
                <EpicSection />
            </header>
            <main
                className="bg-cover bg-left bg-mainTopog-pattern"
                id="easy2use"
            >
                <div className="bg-midnightBlue-300/95">
                    <FirstSection />
                    <SecondSection />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
