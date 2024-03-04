
import React from 'react';
import Link from 'next/link';
import useStore from '@/store';



const Notify = () => {

    const selectedCountry = useStore((state) => state.selectedCountry);
    const selectedHS = useStore((state) => state.selectedHS);


    return (
        <div 
        >
            <div 
            >
                Calculating import taxes have never been easier!
            </div>
            <p 
            >
                As well as great FX rates, the World Account gives you access to 10 local currency accounts, so you can make and receive fast international payments as easily as a local. Plus, you can send money around the world securely in XX currencies. It’s free to set up and there are no monthly fees.
                </p>
            <Link href={`/tariff/${selectedCountry.code}/${selectedHS.code}`}><button 
            >
                Explore
                </button>
                </Link>
        </div>
    );
};

export default Notify;