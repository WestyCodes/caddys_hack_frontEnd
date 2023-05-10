import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="navBar-logo">
                        <p>Caddy's Hack</p>
                    </div>
                    <div className="navBar-tracker">
                        <p>Golf Shot Tracker</p>
                    </div>
                    <div className="navBar-signUp">
                        <p>Sign Up</p>
                    </div>
                    <div className="navBar-signIn">
                        <p>Sign In</p>
                    </div>
                </nav>
            </header>
            <main>
                <section className="hero-section">
                    <div className="main-empty"></div>
                    <div className="main-content">
                        <div className="hero-text">
                            <h1>Track Your Shots.</h1>
                            <h2>Improve Your Game.</h2>
                            <p>
                                Caddy's Hack is an easy-to-use tool to track
                                every golf shot you take. User the information
                                to level up your game and streamline your
                                practice
                            </p>
                        </div>
                        <div className="hero-btns">
                            <p>Sign Up</p>
                            <p>Learn More</p>
                        </div>
                    </div>
                </section>
                <section className="EasyToUse">
                    <div className="ETU-left">
                        <div className="ETU-text">
                            <div className="mini-heading">
                                <h3>EASY-TO-USE</h3>
                            </div>
                            <div className="main-heading">
                                <h2>On The Course And The Range...</h2>
                            </div>
                            <div className="text">
                                <p>
                                    Use Caddy's Hack to track which club you're
                                    using and how close to the target each shot
                                    is. Find your strengths and weaknesses, and
                                    supercharge your future sessions!
                                </p>
                            </div>
                        </div>
                        <div className="ETU-btn">
                            <p>Open Caddy Track</p>
                        </div>
                    </div>
                    <div className="ETU-right">
                        <div className="ETU-image"></div>
                    </div>
                </section>
                <section className="DataLogging">
                    <div className="DL-left">
                        <div className="DL-image1"></div>
                        <div className="DL-image2"></div>
                    </div>
                    <div className="DL-right">
                        <div className="DL-text">
                            <div className="mini-heading">
                                <h3>BASIC or ADVANCED</h3>
                            </div>
                            <div className="main-heading">
                                <h2>For The Quick Log Or The Data Analyst</h2>
                            </div>
                            <div className="text">
                                <p>
                                    The basic view allows you to log a shot in
                                    just 4 taps, perfect for when you're walking
                                    down the fairway
                                </p>
                                <ol>
                                    <li>Choose your club!</li>
                                    <li>Tap Left, Right, or On Target!</li>
                                    <li>Tap Long, Short, or Pin High!</li>
                                    <li>Confirm!</li>
                                </ol>
                                <p>
                                    The advanced view is for the aspiring
                                    professional! A rangefinder is recommended
                                    and you will be able to log your shots with
                                    the same accuracy as Matt Fitzpatrick!
                                </p>
                            </div>
                        </div>
                        <div className="DL-btn">
                            <p>Sign In To See Your Shots</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
