import React from 'react'
import Description from './Description'
import JoinTelegram from './JoinTelegram'
import Buttons from './Buttons';
import Tokenomics from './Tokenomics';
import Hero from './Hero';
import MemeCoin from './MemeCoin';

const Home = () => {
    
    return (
        <div className='overflow-x-hidden' >
            <Hero />
            <Description />
            <Buttons />
            <Tokenomics />
            <MemeCoin />
            <JoinTelegram />
        </div>
    )
}

export default Home