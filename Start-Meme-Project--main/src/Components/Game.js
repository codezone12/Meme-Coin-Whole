import React,{ useState } from 'react';
import { Button } from "@chakra-ui/react";

const Game = () => {

    const [showMessage, setShowMessage] = useState(true);

    const handleAcknowledgement = () => {
        setShowMessage(false);
    };

    return (
        <>  
            <div className='p-9'>

            </div>

            {showMessage && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[#1D212F] sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium text-gray-900">Important Message</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Don't forget to take a screenshot of the game when it ends and upload the image using the button at the bottom to claim your rewards!</p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">keep in mind that the whole game box should appear while taking screenshot!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D212F] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Button
                                    style={{ background: "black" }}
                                    onClick={handleAcknowledgement} // Removed the immediate invocation ()
                                    className="rounded-xl px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                                >
                                    <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Got it, thanks!</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}            

            <div style={{ width: '98vw', height: '100vh', }}>
                <div className=''>

                </div>
                <iframe
                    src="https://www.free80sarcade.com/galaga.php"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 'none', }}
                ></iframe>
            </div>
        </>
    );
};

export default Game;
