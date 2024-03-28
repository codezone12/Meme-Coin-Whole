import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, useToast } from "@chakra-ui/react";
import GoogleLoginButton from './GoogleLogin';
import SocialMediaPopup from './SocialMediaPopup';

const Hero = () => {
    const toast = useToast();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    const handleLogin = () => {
        setShowLoginModal(true);
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
        <div className="w-screen h-screen overflow-x-hidden flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('/img/hero-image-min.jpg')`}}>
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4 text-black">Meme Coin - Play and Earn?</h1>
                <p className="text-lg mb-6 text-black font-semibold">Earn Playing your Favourite 80's arcade games</p>
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
            </div>

            {showLoginModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <GoogleLoginButton  onCancel={handleCloseLoginModal} />
                </div>
            )}

            {showSocialMediaPopup && <SocialMediaPopup onClose={() => setShowSocialMediaPopup(false)} />}


        </div>
    );
};

export default Hero;
