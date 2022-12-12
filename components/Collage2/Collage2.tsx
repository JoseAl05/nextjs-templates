'use client'

import React from 'react';
import Collage3 from '../../public/collage3.jpg';
import Collage4 from '../../public/collage4.jpg';
import Collage5 from '../../public/collage5.jpg';

const Collage2 = () => {
    return (
<>
            <div className='relative mt-20 flex items-center'>
                <div className='w-[55%] bg-[#b6ffc0] mt-20 h-[60vw] absolute right-[28vw] z-0'></div>
                <div className='relative inline-block align-middle z-[1]'>
                    <div style={{
                        backgroundImage: `url('${Collage3.src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        height: '17vw',
                        width: '22vw',
                        zIndex: '1',
                        display: 'inline-block',
                        position: 'relative',
                        marginLeft: '22vw',
                        marginTop: '20vh',
                        marginBottom:'15vh',
                        verticalAlign:'middle'
                    }}>
                    </div>
                    <div style={{
                        backgroundImage: `url('${Collage4.src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        height: '17vw',
                        width: '22vw',
                        zIndex: '1',
                        display: 'inline-block',
                        position: 'relative',
                        marginLeft: '22vw',
                        marginTop: '10vh',
                        marginBottom:'5vh',
                        verticalAlign:'middle'
                    }}>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url('${Collage5.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                    height: '30vw',
                    width: '60vw',
                    zIndex: '1',
                    display: 'inline-block',
                    position: 'relative',
                    marginRight: '5vw',
                    marginTop:'20vh',
                    marginBottom:'15vh',
                    verticalAlign:'middle'
                }}>
                </div>
            </div>
        </>
    );
}

export default Collage2;