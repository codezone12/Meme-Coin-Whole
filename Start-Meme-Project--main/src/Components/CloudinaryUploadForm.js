import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@chakra-ui/react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import ImageCompressor from 'image-compressor.js';
import Loader from './Loader';

const CloudinaryUploadForm = () => {
    const fileInputRef = useRef();
    const [imageUploaded, setImageUploaded] = useState(false);
    const [score, setScore] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [uploading, setUploading] = useState(false);
    const [isFileChosen, setIsFileChosen] = useState(false);
    const location = useLocation();
    const [uploadDisabled, setUploadDisabled] = useState(false);
    const [loggedInUserName, setLoggedInUserName] = useState('');
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const [twitterHandle, setTwitterHandle] = useState('');
    const [facebookHandle, setFacebookHandle] = useState('');

    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        const disabledUntil = localStorage.getItem('uploadDisabledUntil');
        if (disabledUntil && parseInt(disabledUntil) > Date.now()) {
            setUploadDisabled(true);
        }

        const userData = JSON.parse(localStorage.getItem('userProfile'));
        if (userData) {
            setLoggedInUserName(userData.name);
            setLoggedInUserEmail(userData.email);
        }

        setFacebookHandle(localStorage.getItem('facebookHandle'))
        setTwitterHandle(localStorage.getItem('twitterHandle'))

    }, []);

    const compressImage = async (file) => {
        const compressedFile = await new Promise((resolve, reject) => {
            new ImageCompressor(file, {
                quality: 0.6,
                maxWidth: 800,
                maxHeight: 600,
                success: (result) => {
                    resolve(result);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
        return compressedFile;
    };
    

    const handleFileChange = () => {
        const files = fileInputRef.current.files;
        if (files.length > 0) {
            const fileName = files[0].name;
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; // Define allowed image extensions
            if (!allowedExtensions.test(fileName)) {
                toast.error("Please choose an image file with extension .jpg, .jpeg, .png, or .gif");
                return;
            }
            setIsFileChosen(true);
            toast.info(`Selected file: ${fileName}`);
        } else {
            setIsFileChosen(false);
        }
    };

    const handleChooseFileClick = () => {
        fileInputRef.current.click();
    };

    const uploadImage = async () => {
        if (uploading) return;
        const files = fileInputRef.current.files;
        if (files.length === 0) {
            toast.error("Please choose a file first");
            return;
        }
    
        setUploading(true);
        setShowLoader(true);
    
        try {

            const compressedFile = await compressImage(files[0]);

            const formData = new FormData();
            formData.append('image', compressedFile);
            formData.append('loggedInUserEmail', loggedInUserEmail);

            const response = await axios.post(
                `${window.location.origin}/upload'`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
    
            const { score, imageUrl } = response.data;
            console.log('Image uploaded successfully:', response.data);
            setImageUploaded(true);
            toast.success("Image uploaded successfully");
    
            setScore(score);
            setImageUrl(imageUrl);
    
            // Disable upload button for one hour
            const disabledUntil = Date.now() + 3600000; // 1 hour in milliseconds
            localStorage.setItem('uploadDisabledUntil', disabledUntil);
            setUploadDisabled(true);
    
        } catch (error) {
            console.error('Error uploading image:', error);
            if (error.response && error.response.data && error.response.data.error) {
                if (error.response.data.error.includes('Score already exists')) {
                    toast.error("Score already exists. Please try the game again and score differently.");
                } else if (error.response.data.error.includes('Invalid score extracted')) {
                    toast.error("Image is not clear or does not have Score kindly retry uploading correct Image.");
                } else {
                    toast.error("Error uploading image");
                }
            } else {
                toast.error("Error uploading image");
            }
        } finally {
            setUploading(false);
            setShowLoader(false);
        }
    };
    
    const saveScore = async (score) => {
        try {
            await axios.post(
                `${window.location.origin}/save-score`,
                { score, loggedInUserName, loggedInUserEmail, twitterHandle, facebookHandle, imageUrl }
            );
            toast.success("Score saved successfully");
            setImageUploaded(false);
            setUploadDisabled(true); // Enable the upload button after score is saved
        } catch (error) {
            console.error('Error saving score:', error);
            if (error.response && error.response.data && error.response.data.error) {
                if (error.response.data.error.includes('Score is required')) {
                    toast.error("Score not found, try again after refreshing.");
                } else if (error.response.data.error.includes('loggedInUserEmail is required')) {
                    toast.error("User Email not found, try again after refreshing.");
                } else if (error.response.data.error.includes('imageUrl is required')) {
                    toast.error("Image Url not found, try again after refreshing.");
                } else {
                    toast.error("Error uploading image");
                }
            }
        }
    };

    if (location.pathname !== '/game') {
        return null; // Render nothing if not on the /game route
    }

    return (
        <div className="container bg-gray-200 mx-auto pt-4 px-6">

            {showLoader && <Loader />}

            <h1 className="text-2xl font-bold mb-4">Upload Image to Cloudinary</h1>
            <div className="inline-block mb-2">
                <input
                    type="file"
                    id="file-upload"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="opacity-0 absolute"
                />
                <label htmlFor="file-upload" onClick={handleChooseFileClick}>
                    <Button
                        style={{ background: "black" }}
                        className="rounded-xl px-4 py-1 mx-2 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                    >
                        <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Choose File</span>
                    </Button>
                </label>
            </div>
            <div className="inline-block mb-2">
                <Button
                    onClick={imageUploaded ? () => saveScore(score) : uploadImage}
                    disabled={!isFileChosen || uploadDisabled}
                    style={{ background: "black" }}
                    className="rounded-xl px-4 py-1 mx-2 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                >
                    <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">{imageUploaded ? 'Save Score' : 'Upload Image'}</span>
                </Button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CloudinaryUploadForm;
