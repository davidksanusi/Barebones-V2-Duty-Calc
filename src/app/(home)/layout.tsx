import React, { ReactNode } from 'react';

type THomeLayoutProps = {
    children: ReactNode;
}

const HomeLayout: React.FC<THomeLayoutProps> = ({children}) => {
    return (
        <div className='bg-white'>
            {children}
        </div>
    );
};

export default HomeLayout;