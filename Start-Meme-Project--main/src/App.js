import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GoToTop from './Components/GoToTop';
import CloudinaryUploadForm from './Components/CloudinaryUploadForm';
import Game from './Components/Game';
import Home from './Components/Home';
import Leaderboard from './Components/Leaderboard';

const clientId = "886022310664-g592n59g39kbb2d753u707utec49t3tj.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "email profile"
      }).then(() => {
        console.log('Google API client initialized successfully.');
      }).catch((error) => {
        console.error('Error initializing Google API client:', error);
      });
    };
  
    gapi.load('client:auth2', start);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='App'>

          <Navbar scrollToSection={scrollToSection}/>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/game" element={<Game />} />
          </Routes>

          <CloudinaryUploadForm />
          <Leaderboard />
          <GoToTop />
          <Footer />

        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
