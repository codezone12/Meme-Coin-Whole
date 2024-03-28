import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useToast } from "@chakra-ui/react";

const clientId = "886022310664-g592n59g39kbb2d753u707utec49t3tj.apps.googleusercontent.com";

const LogoutButton = ({ onCancel }) => {
    const toast = useToast();

    const handleLogoutSuccess = () => {
        localStorage.removeItem('userProfile');
        console.log('User logged out successfully')
        onCancel();
        toast({
            title: 'Logout Successful',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

  const handleLogoutFailure = (response) => {
    console.error('Google logout error:', response);
    // Handle logout failure
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        <div className=" bg-white rounded-lg p-8 px-16 shadow-lg">
            <h1 className="text-3xl font-semibold mb-8">Disconnect From Google</h1>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout from Meme"
                onLogoutSuccess={handleLogoutSuccess}
                onFailure={handleLogoutFailure}
                className="w-full flex items-center justify-center px-40 py-3 text-lg font-semibold rounded-md border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
            />
            {/* Cancel button */}
            <div className="mt-4 flex justify-end">
                <button
                    className="w-full py-1 text-lg font-semibold rounded-sm border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  );
};

export default LogoutButton;
