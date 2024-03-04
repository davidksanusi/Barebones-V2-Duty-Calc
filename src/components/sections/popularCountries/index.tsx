import React from 'react';
import Link from 'next/link';
import useStore from '@/store';


const PopularCountries = () => {

    const hsCode = useStore((state) => state.selectedHS)

    const countries = [
        { code: 'CA', name: 'Canada' }, // U.S.'s largest trade partner
        { code: 'MX', name: 'Mexico' }, // Significant trade due to USMCA
        { code: 'CN', name: 'China' }, // A major source of imports and exports
        { code: 'JP', name: 'Japan' }, // Key partner in technology and automobiles
        { code: 'DE', name: 'Germany' }, // Europe's largest economy
        { code: 'GB', name: 'United Kingdom' }, // Historical and substantial trade relations
        { code: 'KR', name: 'South Korea' }, // Important in technology and automotive sectors
        { code: 'IN', name: 'India' }, // Growing trade partner
        { code: 'FR', name: 'France' }, // Significant in aerospace and defense
        { code: 'IT', name: 'Italy' }, // Partner in luxury goods, machinery
        { code: 'BR', name: 'Brazil' }, // Largest trade partner in South America
        { code: 'NL', name: 'Netherlands' }, // Gateway to Europe
        { code: 'TW', name: 'Taiwan' }, // Critical in semiconductors and electronics
        { code: 'SG', name: 'Singapore' }, // Strategic trade and investment partner
        { code: 'AU', name: 'Australia' }, // Key ally and trade partner in Oceania
        { code: 'BE', name: 'Belgium' } // Important for pharmaceuticals and diamonds
      ];
      
    return (
        <div 
        >
            <div 
            >
            <h1 
            >
                Popular Exporters
                </h1>
            <div 
            >
                {
                    countries?.map((country)=> (
                        <Link 
                        key={country?.code} 
                        href={`/tariff/${country.code.toLowerCase()}/${hsCode.code}`}>
                                <p className='text-base font-bold text-black'>
                                    {country?.name}
                                    </p>
                                <img src={`https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`} alt={`${country.name} Flag`}/>
                                {/* <IoArrowForwardSharp className='text-black w-[14px] h-4 '/> */}
                            {/* <p className='text-base font-bold text-black'>{item?.to}</p> */}
                        </Link>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default PopularCountries;