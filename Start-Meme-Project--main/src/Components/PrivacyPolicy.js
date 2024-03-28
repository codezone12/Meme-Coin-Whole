import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TermsOfServices from './TermsOfServices';

const PrivacyPolicy = () => {
    const [showTermsOfServices, setShowTermsOfServices] = useState(false);

    return (
        <div>
            <h2 className='text-lg font-bold'>Privacy Policy</h2>
            <p className='font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod dui non mauris posuere, eu fermentum neque dapibus. Duis tincidunt, libero eget lacinia feugiat, justo ipsum convallis libero, vel lacinia ipsum lectus a justo. Integer vel urna vitae libero scelerisque vehicula.
            </p>
            <p className='font-semibold'>
                Nam faucibus sem sit amet neque sollicitudin, vel sodales enim lobortis. Aenean sit amet eros libero. Nulla facilisi. Nullam ac sem hendrerit, euismod mi sed, fermentum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vestibulum risus velit, id posuere lectus fringilla non.
            </p>
            <p className='font-semibold'>
                Proin nec odio id arcu fermentum vestibulum. Sed sagittis dapibus lectus nec mattis. Fusce at metus nec nulla condimentum sollicitudin nec ut metus. Sed ac ipsum a dui maximus posuere. Ut quis felis feugiat, finibus arcu non, bibendum ipsum. Duis ut posuere purus.
            </p>
            {showTermsOfServices && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 px-16 shadow-lg">
                        <TermsOfServices />
                        <button
                            className="w-1/4 py-1 text-lg font-semibold rounded-sm border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
                            onClick={() => setShowTermsOfServices(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <p>
                By using our services, you agree to our {' '}
                <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => setShowTermsOfServices(true)}
                >
                    Terms of Services
                </span>
                .
            </p>
        </div>
    );
};

export default PrivacyPolicy;
