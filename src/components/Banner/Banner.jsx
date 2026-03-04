import React from 'react';
import victor1 from '../../assets/vector1.png'
import victor3 from '../../assets/vector3.png'
const Banner = () => {
    return (
        <div className='flex gap-4 py-24'>
            <div className='w-1/2 h-55'>
                <div className="hero h-55 rounded-xl "
                    style={{
                        backgroundImage: `
                            url(${victor1}),
                            url(${victor3}),
                            linear-gradient(to right, #632EE3, #9F62F2)
                            `,
                            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                            backgroundPosition: 'left center, right center, center',
                            backgroundSize: '50% auto, 50% auto, cover',
                    }}>
                    <div className="hero-overlay  rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="text-2xl">
                            <p>In-Progress</p>
                            <p className='text-5xl'>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-55'>
                <div className="hero h-55 rounded-xl"
                    style={{
                        backgroundImage: `
                            url(${victor1}),
                            url(${victor3}),
                            linear-gradient(to right, #54CF68, #54CF68)
                            `,
                            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
                            backgroundPosition: 'left center, right center, center',
                            backgroundSize: '50% auto, 50% auto, cover',    
                    }}>
                    <div className="hero-overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="text-2xl">
                            <p>Resolved</p>
                            <p className='text-5xl'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;