import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import { useToast } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

const clientId = "886022310664-g592n59g39kbb2d753u707utec49t3tj.apps.googleusercontent.com";

const GoogleLoginButton = ({ onCancel }) => {
    const toast = useToast();
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const responseGoogle = (response) => {
        if (response.error) {
            console.error('Google login error:', response.error);
        } else if (response.accessToken) {
            console.error('Google login Success');
            console.log('User Profile:', response.profileObj);
            localStorage.setItem('userProfile', JSON.stringify(response.profileObj));

            const userData = JSON.parse(localStorage.getItem('userProfile'));
            if (userData) {
                const { name, email } = userData;
                localStorage.setItem('loggedInUserName', name);
                localStorage.setItem('loggedInUserEmail', email);
            }


             // Handle login success
             onCancel();
             toast({
                 title: 'Login Successful',
                 status: 'success',
                 duration: 3000,
                 isClosable: true,
             });
        } else {
            console.error('Google login failed: Unexpected response from Google.');
            alert('Google login failed. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 px-16 shadow-lg">
                <h1 className="text-3xl font-semibold mb-8">Login with Google</h1>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    className="w-full flex items-center justify-center py-3 text-lg font-semibold rounded-md border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
                />
                {showPrivacyPolicy && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                        <div className="w-3/4 bg-white rounded-lg p-8 px-16 shadow-lg">
                            <PrivacyPolicy />
                            <button
                                className="w-1/4 py-1 text-lg font-semibold rounded-sm border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
                                onClick={() => setShowPrivacyPolicy(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <p className="text-gray-600 text-sm mb-4">
                    By logging in, you agree to our {' '}
                    <span
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={() => setShowPrivacyPolicy(true)} // Open the privacy policy popup when clicked
                    >
                        Privacy Policy
                    </span>
                    .
                </p>
                <button
                    className="w-full py-1 text-lg font-semibold rounded-sm border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={onCancel} // Call onCancel function when clicked
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default GoogleLoginButton;
