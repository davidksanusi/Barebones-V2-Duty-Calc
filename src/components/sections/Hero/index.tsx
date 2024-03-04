import Image from 'next/image';
import React from 'react';
import useStore from '@/store';

const Hero = () => {
    const countryData = useStore((state)=>state.countryDetails)

    return (
        <div 
        >
            <div 
            >
                <div 
                >
                    <h1 
                    >
                        {countryData.country_name} ({countryData.hs_code})
                        </h1>
                    <p 
                    >
                        (Most recent trade amount with this country). 
(most popular products with this country)
The United States Dollar is the official currency of the United States and several other countries. Its currency code is USD and it’s symbolised using the $ sign. $1 is made up of 100 cents. With a World Account, you can pay and collect USD using local bank details – and you don’t need an overseas address.
</p>
<button 
>Compare rates</button>
                </div>
                <div 
                >
                    <Image src={"/backgrounds/map.svg"} alt='map' width={555} height={344} className='w-full h-full'/>
                </div>
            </div>
           </div>
    );
};

export default Hero;