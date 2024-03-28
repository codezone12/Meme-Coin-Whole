import React, { useState } from 'react';
import { Button, useToast } from "@chakra-ui/react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import GoogleLoginButton from './GoogleLogin';
import GoogleLogoutButton from './GoogleLogout';
import SocialMediaPopup from './SocialMediaPopup';

function Navbar({scrollToSection}) {

    const toast = useToast();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    const handleLogin = () => {
        setShowLoginModal(true);
    };

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
        const storedFacebookHandle = localStorage.getItem('facebookHandle');
        const storedTwitterHandle = localStorage.getItem('twitterHandle');
    
        console.log("Stored Facebook Handle:", storedFacebookHandle);
        console.log("Stored Twitter Handle:", storedTwitterHandle);
    
        // Check if both handles are not present or empty
        if ((storedFacebookHandle || storedFacebookHandle.trim() === "") &&
            (storedTwitterHandle || storedTwitterHandle.trim() === "")) {
            setShowSocialMediaPopup(true);
        }
    };
    

    const handleCloseLogoutModal = () => {
        setShowLogoutModal(false);
    };

    const showLoginToast = () => {
        toast({
            title: 'Please log in first',
            status: 'warning',
            duration: 3000,
            isClosable: true,
        });
        handleLogin();
    };

    return (
        <>
            <nav className="w-screen bg-[#1D212F]   h-[75px] mt-[.3px] m z-50  flex items-center px-5 font-semibold  justify-between fixed">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img class="h-8 w-auto" src="img/meme.png" alt="Your Company" />
                                </Link>

                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-3 ">
                                    <Link to="/" onClick={() => scrollToSection('MemeCoin')} class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" aria-current="page">MEME Coin</Link>
                                    <Link to="/" onClick={() => scrollToSection('Tokenomics')} class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" >Tokenomics</Link>

                                    {userProfile ? (
                                        <span
                                            className="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" 
                                            onClick={handleLogout}
                                        >
                                            Disconnect
                                        </span>
                                    ) : (
                                        <span
                                            className="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" 
                                            onClick={handleLogin}
                                        >
                                            Connect
                                        </span>
                                    )}
                                    <Link to="https://telegram.org/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Telegram</Link>
                                    <Link to="/" onClick={() => scrollToSection('LeaderBoard')} class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Leaderboard</Link>
                                    <Link to="https://info.dextools.io/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Live Chart</Link>
                                    <Link to="https://uniswap.org/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-1 py-2 font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Buy Token</Link>


                                </div>
                            </div>
                        </div>
                        <div className="flex ml-2 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-8">
                            {userProfile ? (
                                <Link to="/game">
                                    <Button
                                        style={{ background: "black" }}
                                        className="rounded-xl px-0 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                                    >
                                        <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                        <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Start Game</span>
                                    </Button>
                                </Link>
                            ):(
                                <Button
                                    style={{ background: "black" , opacity: "0.7"}}
                                    className="rounded-xl px-2 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                                    onClick={showLoginToast}
                                >
                                    <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Start Game</span>
                                </Button>
                            )}
                            <Button
                                style={{ background: "black" }}
                                className="rounded-xl px-2 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                            >
                                <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Buy Now</span>
                            </Button>
                        </div>


                    </div>
                </div>

                <div class="sm:hidden" id="mobile-menu">

                </div>
            </nav >

            {showLoginModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <GoogleLoginButton  onCancel={handleCloseLoginModal} />
                </div>
            )}

            {showSocialMediaPopup && <SocialMediaPopup onClose={() => setShowSocialMediaPopup(false)} />}

            {showLogoutModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <GoogleLogoutButton  onCancel={handleCloseLogoutModal} />
                </div>
            )}

        </>

    )
}

export default Navbar;
