import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className='grid min-h-screen mt-3 pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center px-4 space-y-4'>
                <div className='space-y-6'>
                    <h3>New: Ai-Powered tools Available</h3>
                    <h1 className='text-5xl md:text-7xl font-bold'>Supercharge Your Workflow with Digi Tools</h1>
                    <p className='text-lg md:text-xl text-gray-500'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>

                    <div className='flex gap-4'>
                        <button className="text-xl md:text-xl bg-linear-to-b from-[#4f39f6] to-[#9514fa] rounded-full p-2 px-3 text-white">
                            Explore Products
                        </button>
                        <button className="border border-[#4f39f6] flex items-center justify-center  p-2 px-3 rounded-full gap-2">
                            <FaPlay className='' />
                            <span className='text-xl md:text-xl bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src="/img/banner.png" alt="Banner" />
                </div>
            </div>

            <div>
                <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-center grid grid-cols-1 md:grid-cols-3 px-2 text-white font-bold text-3xl md:text-5xl place-items-center py-4 space-y-3'>
                    <div className='w-full'>
                        <h2>50K+</h2>
                        <p className='text-xl font-light'>Active Users</p>
                    </div>
                    <div className='border-l border-r w-full'>
                        <h2>200+</h2>
                        <p className='text-xl font-light'>Premium Tools</p>
                    </div>
                    <div className='w-full'>
                        <h2>4.9</h2>
                        <p className='text-xl font-light'>Rating</p>
                    </div>                    
                </div>
            </div>
        </section>
    );
};

export default Hero;