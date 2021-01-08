import React, { FC, useContext } from 'react';
import styles from './header.module.css';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/cart.svg';
import { useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../../../context/shoppingCart';

const Header: FC = () => {
    const history = useHistory();

    const { products } = useContext(ShoppingCartContext);

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const product of products) totalPrice += product.price;
        return totalPrice;
    };

    return (
        <div className={styles.header}>
            <div
                className={styles.rightContent}
                onClick={() => history.push('/')}
            >
                <img src={logo} className={styles.logo} alt="logo" />
                <h2 className={styles.title}>My Shop</h2>
            </div>
            <div className={styles.leftContent}>
                <img src={cart} className={styles.cart} alt="cart" />
                <span className="ml-2">
                    {products.length > 0 ? products.length : ''}
                </span>
                {products.length > 0 && (
                    <div className={styles.cartDetails}>
                        <div className={styles.cartDetailsContent}>
                            <h6 className="mb-3">Carrito de compras</h6>
                            {products.map((product) => (
                                <div className={styles.cartItem}>
                                    <span
                                        className={`text-truncate ${styles.textTitle}`}
                                        style={{ flex: 1 }}
                                    >
                                        {product.title}
                                    </span>

                                    <span
                                        className={`ml-2 ${styles.textPrice}`}
                                    >{`S/ ${product.price}`}</span>
                                </div>
                            ))}
                            <h6
                                className={`mt-5 ${styles.totalPrice}`}
                            >{`Total: S/ ${getTotalPrice()}`}</h6>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
