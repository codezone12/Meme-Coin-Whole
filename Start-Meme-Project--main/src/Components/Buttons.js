import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Buttons = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="bg-[#1D1D1D] border-indigo-500 text-[#003b5c] relative ">
                <div className='py-5'>
                    <div className="pt-24 text-5xl text-white"></div>
                    <div className="w-full mt-8 flex justify-center items-center"></div>
                    <div className='flex justify-center text-center'>

                        <div data-aos="fade-right" data-aos-duration="1000" className="relative flex flex-col items-center p-4 mx-4 border-4 border-blue-400 hover:border-white group rounded-lg w-3/4 md:w-1/3 overflow-hidden group">
                            <div className="absolute left-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-left group-hover:w-full z-0"></div>
                            <div className="absolute right-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-right group-hover:w-full z-0"></div>
                            <p className="text-2xl group-hover:text-white font-bold text-blue-400 z-20">Top Performers Ranking</p>
                            <Link to="/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f] hover:scale-105 duration-[700ms] z-10">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text- ease">
                                        Leaderboard
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className="relative flex flex-col items-center p-4 mx-4 border-4 border-blue-400 hover:border-white group rounded-lg w-3/4 md:w-1/3 overflow-hidden group">
                            <div className="absolute left-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-left group-hover:w-full z-0"></div>
                            <div className="absolute right-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-right group-hover:w-full z-0"></div>
                            <p className="text-2xl group-hover:text-white font-bold text-blue-400 z-20">Dynamic Performance Display</p>
                            <a href="https://info.dextools.io/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f] hover:scale-105 duration-[700ms] z-10">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text-black ease">
                                        Live Chart
                                    </span>
                                </button>
                            </a>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" className="relative flex flex-col items-center p-4 mx-10 border-4 border-blue-400 hover:border-white group rounded-lg w-3/4 md:w-1/3 overflow-hidden group">
                            <div className="absolute left-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-left group-hover:w-full z-0"></div>
                            <div className="absolute right-0 top-0 w-0 h-full bg-blue-400 transition-all duration-1000 origin-right group-hover:w-full z-0"></div>
                            <p className="text-2xl group-hover:text-white font-bold text-blue-400 z-20">Purchase Token Now</p>
                            <Link to="https://uniswap.org/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f] hover:scale-105 duration-[700ms] z-10">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text-black ease">
                                        Buy Token
                                    </span>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
