import { convertData } from '@/constants';
import React from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Exchange = () => {
    return (
        <div className='w-full'>
            <h1 >Exchange USD without hidden fees</h1>
            <p >Wherever you need to send US dollars, our pricing is clear and simple. Our model is made up of two parts: an FX rate and a small payment fee – that’s it. So what you see at the time of your transaction is exactly what you’ll pay – there are no hidden charges.</p>
            <div >
                {
                    convertData?.map((item)=> (
                        <div  key={item?.id}>
                                <p className='text-base font-bold text-black'>{item?.from}</p>
                                <IoArrowForwardSharp className='text-black w-[14px] h-4 '/>
                            <p className='text-base font-bold text-black'>{item?.to}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Exchange;