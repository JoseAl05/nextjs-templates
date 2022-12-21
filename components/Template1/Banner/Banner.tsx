'use client'
import React from "react";
import BannerImage from "../../../public/banner.jpg";

const Banner = () => {

    return (
        <>
            <div style={{
                backgroundImage: `url('${BannerImage.src}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'50% 50%',
                minHeight:'70vh',
                position:'relative',
                marginLeft:'5vw',
                marginRight:'5vw',
                marginTop:'2vh'
            }}>
            </div>
        </>
    );
}

export default Banner;