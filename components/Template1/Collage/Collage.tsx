'use client'

import React from 'react';
import Collage1 from '../../../public/collage1.jpg';
import Collage2 from '../../../public/collage2.jpg';

const Collage = () => {
    return (
        <>
            <div className='relative w-full mt-20'>
                <div className='w-1/2 bg-[#fbffa7] mt-20 h-[35vw] absolute left-[40vw] z-0'></div>
                <div style={{
                    backgroundImage: `url('${Collage1.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    height: '22vw',
                    width: '35vw',
                    zIndex: '1',
                    display: 'inline-block',
                    position: 'relative',
                    marginLeft: '12vw',
                    marginTop: '15vh',
                    marginBottom:'15vh',
                    verticalAlign:'middle'
                }}>
                </div>
                <div style={{
                    backgroundImage: `url('${Collage2.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                    height: '15vw',
                    width: '25vw',
                    zIndex: '1',
                    display: 'inline-block',
                    position: 'relative',
                    marginLeft: '10vw',
                    marginTop:'20vh',
                    marginBottom:'15vh',
                    verticalAlign:'middle'
                }}>
                </div>
            </div>
        </>
    );
}

export default Collage;