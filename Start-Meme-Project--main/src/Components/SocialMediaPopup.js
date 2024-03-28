import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';

const SocialMediaPopup = ({ onClose }) => {
    const [facebookHandle, setFacebookHandle] = useState('');
    const [twitterHandle, setTwitterHandle] = useState('');
    const [facebookError, setFacebookError] = useState('');
    const [twitterError, setTwitterError] = useState('');

    const handleShareClick = () => {
        // Validate Facebook handle
        if (!isValidHandle(facebookHandle, 'facebook')) {
            setFacebookError('Please enter a valid Facebook handle in the format "facebook.com/username"');
            return;
        } else {
            setFacebookError('');
        }

        // Validate Twitter handle
        if (!isValidHandle(twitterHandle, 'twitter')) {
            setTwitterError('Please enter a valid Twitter handle in the format "twitter.com/@username"');
            return;
        } else {
            setTwitterError('');
        }

        // Store the handles in localStorage or any other storage mechanism
        localStorage.setItem('facebookHandle', facebookHandle);
        localStorage.setItem('twitterHandle', twitterHandle);
        // Close the popup
        onClose();
    };

    const isValidHandle = (handle, platform) => {
        // Check if handle is not empty and contains valid characters
        if (handle.trim() === '') {
            return false; // Handle should not be empty
        }
    
        // Check if the handle starts with the platform identifier
        if (platform === 'facebook') {
            if (!handle.startsWith('facebook.com/')) {
                return false; // Facebook handle should start with "facebook.com/"
            }
        } else if (platform === 'twitter') {
            if (!handle.startsWith('twitter.com/@')) {
                return false; // Twitter handle should start with "twitter.com/@"
            }
        }

        const username = handle.split('facebook.com/')[1];
    
        // Check for valid characters
        return /^[a-zA-Z0-9_]+$/.test(username);
    };

    const handleFacebookChange = (e) => {
        setFacebookHandle(e.target.value);
        setFacebookError(''); // Clear the error message when the user starts typing
    };

    const handleTwitterChange = (e) => {
        setTwitterHandle(e.target.value);
        setTwitterError(''); // Clear the error message when the user starts typing
    };

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl font-semibold mb-8">Add Social Media Handles</h1>
                <p className="mb-4">We'd love to connect with you on Facebook and Twitter! Please enter your handles below:</p>
                <div className="mb-4">
                    <Input
                        placeholder="e.g., facebook.com/joandoe"
                        value={facebookHandle}
                        onChange={handleFacebookChange}
                    />
                    {facebookError && <p className="text-red-500">{facebookError}</p>}
                </div>
                <div className="mb-4">
                    <Input
                        placeholder="e.g., twitter.com/@joandoe"
                        value={twitterHandle}
                        onChange={handleTwitterChange}
                    />
                    {twitterError && <p className="text-red-500">{twitterError}</p>}
                </div>
                <div className="flex justify-between">
                    <Button colorScheme="green" onClick={handleShareClick}>Share</Button>
                    <Button colorScheme="blue" variant="outline" onClick={onClose}>Not Now</Button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaPopup;
