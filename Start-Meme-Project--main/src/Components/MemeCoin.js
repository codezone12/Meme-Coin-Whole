import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MemeCoin = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>

            <div id="MemeCoin" className="bg-[#1D1D1D] border-indigo-500 text-[#003b5c]  ">

                <div className="pt-24 text-5xl text-white "><span className="text-green-500"></span> </div>
                <div className="w-full mt-4  flex justify-center items-center">


                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="mt-4 text-xl  leading-7 bg-[#000000] border-blue-400 border-2  mx-10 text-white rounded-lg py-5">
                    <div className=" text-5xl text-blue-500  ">Meme Coin</div>

                    <p className='mt-5  mx-4 duration-[700ms] hover:text-blue-200'>Intelligent Signals is the brainchild of Andrew Anthony (founder), a professional trader with over 20 years in forex, stocks, and crypto. A former analytical scientist, senior manager, and entrepreneur, he soon developed a passion for technical analysis using GANN techniques. He developed a manual system for chart pattern recognition that provides an accuracy of 70% profitability per trade.</p>

                </div>


            </div>
        </div>
    )
}

export default MemeCoin