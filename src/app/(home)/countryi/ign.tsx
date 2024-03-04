import Cards from '@/components/sections/Cards';
import Exchange from '@/components/sections/Exchange';
import Hero from '@/components/sections/Hero';
import PaymentsCalculator from '@/components/sections/paymentsCalculator';
import React from 'react';

const CountryPage = () => {
    return (
        <div className='mt-[96px] w-full'>
           <Hero/>
           <PaymentsCalculator/>
           <Exchange/>
           <Cards/>
        </div>
    ); 
};

export default CountryPage;