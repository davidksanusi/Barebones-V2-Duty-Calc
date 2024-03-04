import React from 'react';

const InterestedSection = () => {
    return (
        <div className='my-[100px] lg:my-[200px] w-full h-[480px] md:h-[580px] bg-[#60E1CB] relative overflow-hidden'>
            <div className="w-full flex items-center justify-center flex-col h-full">
                <h1 className='text-3xl md:text-[48px] font-bold text-black'>Interested to work with us ?</h1>
                <p className='text-xl md:text-2xl font-normal text-black opacity-90 mt-6'>Send a line here get and update daily</p>
                <button className='text-white text-center text-lg sm:text-[22px] font-semibold py-4 sm:py-[25px] px-6 md:px-8 lg:px-12 rounded-full bg-fr-dark mt-[60px]'>DaCode@example.com</button>
            </div>
            {/* backgrounds shapes */}
            <div className="absolute size-[401px] bottom-0 left-0 bg-white opacity-15 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        </div>
    );
};

export default InterestedSection;