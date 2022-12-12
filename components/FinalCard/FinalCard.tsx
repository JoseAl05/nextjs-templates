'use client'

import React from 'react';
import CardImage from '../../public/cardImage.jpg';

const FinalCard = () => {
    return (
        <>
            <div className='mt-28'>
                <div className='w-[50%] bg-[#b1c5ff] mt-20 h-[35vw] absolute left-[40vw] z-0'>
                    <div className='flex flex-col items-end justify-center mt-12 md:mt-14 lg:mt-52'>
                        <h1 className='text-xs md:text-lg lg:text-3xl text-black font-semibold w-[55%] leading-relaxed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h1>
                        <a href='#' className='mt-10 mr-[15vw] text-xl text-blue-600 font-bold transition-all ease-in-out duration-150 hover:text-blue-800 hover:underline hover:scale-110'>Lorem ipsum dolor sit &gt; </a>
                    </div>
                </div>
                <div style={{
                        backgroundImage: `url('${CardImage.src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        height: '35vw',
                        width: '38vw',
                        zIndex: '1',
                        display: 'inline-block',
                        position: 'relative',
                        marginLeft: '20vw',
                        marginTop: '8.3vh',
                        marginBottom:'15vh',
                        verticalAlign:'middle'
                    }}>
                </div>
            </div>
        </>
    );
}

export default FinalCard;