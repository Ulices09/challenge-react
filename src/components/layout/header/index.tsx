import React, { FC } from 'react';
import styles from './header.module.css';
import logo from '../../../assets/logo.svg';

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.sideContent}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h2>My Shop</h2>
            </div>
            <div className={styles.sideContent}>
                <h2>Carrex</h2>
            </div>
        </div>
    );
};

export default Header;
