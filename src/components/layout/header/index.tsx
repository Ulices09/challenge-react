import React, { FC } from 'react';
import styles from './header.module.css';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/cart.svg';
import { useHistory } from 'react-router-dom';

const Header: FC = () => {
    const history = useHistory();

    return (
        <div className={styles.header}>
            <div
                className={styles.sideContent}
                onClick={() => history.push('/')}
            >
                <img src={logo} className={styles.logo} alt="logo" />
                <h2 className={styles.title}>My Shop</h2>
            </div>
            <div className={styles.sideContent}>
                <img src={cart} className={styles.cart} alt="cart" />
                <span className="ml-2">1</span>
            </div>
        </div>
    );
};

export default Header;
