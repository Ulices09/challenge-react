import React, { FC } from 'react';
import Header from './header';
import { Loading } from '../../components';

type IProps = {
    error?: string;
    loading?: boolean;
};

const Layout: FC<IProps> = ({ children, error, loading }) => {
    const renderContent = () => {
        if (error)
            return (
                <div className="alert alert-danger mt-4" role="alert">
                    {error}
                </div>
            );

        if (loading) return <Loading />;

        return children;
    };

    return (
        <div>
            <Header />
            <div className="container">{renderContent()}</div>
        </div>
    );
};

export default Layout;
