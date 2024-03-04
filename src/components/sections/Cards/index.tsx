import { exploreCardData } from '@/constants';
import React from 'react';

const Cards = () => {
    return (
        <div className="w-full my-[200px] grid grid-cols-1 gap-y-5 justify-items-center md:flex justify-center gap-5 px-4 md:px-0">
                {
                    exploreCardData?.map((card)=> (
                        <div className="w-fit h-fit p-5 md:p-[40px] border border-[#C6C6C6] rounded" key={card?.id}>
                            <div className="w-full h-[200px]"></div>
                        <h1 className='text-fr-dark text-xl md:text-2xl leading-[36px] font-bold'>{card.title}</h1>
                        <p className='mt-4 md:mt-6 text-sm md:text-base text-fr-dark leading-[24px] max-w-[359px]'>{card.description} </p>
                        <button className='text-white px-2.5 mt-5 md:mt-[32px] py-[13px] bg-fr-primary rounded'>{card.btnText}</button>
                        </div>
                    ))
                }
            </div>
    );
};

export default Cards;