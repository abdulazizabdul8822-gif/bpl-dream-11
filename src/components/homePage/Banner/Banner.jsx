import React from 'react';
import bannerBg from "../../../assets/Frame 34.png"
import overlayImg from "../../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='relative container mx-auto w-full mt-25'>

            <div className=''>
                <img src={bannerBg} alt="" className=' w-full ' />
            </div>
            <div className=' absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4'>
                <img src={overlayImg} alt="" className="w-40 md:w-60 mb-4" />


                <h2 className="font-bold text-xl md:text-3xl mb-2">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className="mb-4">Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#E7FE29]">Claim Free Credit</button>
            </div>


        </div>
    );
};

export default Banner;


