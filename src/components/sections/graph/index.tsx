import Image from 'next/image';
import React from 'react';
import useStore from '@/store';

const GraphSection = () => {
    const impex_content = useStore((state)=> state.contentDetails)
    return (
        
            impex_content ? (
                <div className='w-full max-w-[1220px] mx-auto px-4 lg:px-0 grid justify-items-center lg:grid-cols-2 gap-5 mt-[117px]'>
                <div className="w-full h-fit">
                    <h3 className='font-bold text-[40px] text-fr-dark'>
                        {impex_content?.impex_message?.[0]}
                        </h3>
                   
                        {impex_content?.impex_message?.slice(1)?.map((item: string, index:number) => (
                            item.trim().length > 0 ?
                            <p className='text-xl text-fr-dark text-justify leading-[152%] mt-[27px]' key={index}>
                                {item}</p> : <br key={index} />
                        ))}
                </div>
                <div className="w-full h-full flex items-center justify-center
                ">
                    <Image src={"/images/graph.png"} alt='graph' width={800} height={550} className='w-full h-auto'/>
                </div>
            </div>
            ): null
        
    );
};

export default GraphSection;