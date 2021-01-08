import React, { FC } from 'react';
import Header from './header';

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
