import React, { FC, MouseEvent, useContext } from 'react';
import { IProduct } from '../../core/types';
import { ShoppingCartContext } from '../../context/shoppingCart';
import styles from './productCard.module.css';

type IProps = {
    product: IProduct;
    onClick: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

const ProductCard: FC<IProps> = ({ product, onClick }) => {
    const { addToCart } = useContext(ShoppingCartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div
            className={`card col-12 col-sm-2 col-md-4 col-lg-3 ${styles.card}`}
        >
            <img
                className={`${styles.image} card-img-top`}
                src={product.image}
                alt={product.title}
                onClick={onClick}
            />
            <div>
                <span className={`mt-2 mb-3 ${styles.title}`}>
                    {product.title}
                </span>

                <div className={`mb-2 ${styles.bottomContent}`}>
                    <b>{`S/ ${product.price}`}</b>
                    <button className="btn btn-dark" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
