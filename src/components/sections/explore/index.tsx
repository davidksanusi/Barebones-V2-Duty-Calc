import { exploreCardData } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Explore = () => {
    return (
        <div 
        >
            <h1 
            >Explore All Tarriffs</h1>
            <p 
            >
                Quickly access and navigate essential tariff information by country or H.S. code, streamlining your trade strategy efficiently.                </p>
            <div 
            >
                {
                    exploreCardData?.slice(0,2).map((card)=> (
                        <div 
                        key={card?.id}>
                            <div 
                            ></div>
                        <h1 
                        >{card.title}</h1>
                        <p 
                        >{card.description} </p>
                        <Link href={`/${card.url}`}><button 
                        >{card.btnText}</button></Link> 
                        

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Explore;