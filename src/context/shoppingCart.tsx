import React, { createContext, FC, useState } from 'react';
import { IProduct } from '../core/types';

type IShoppingCartContext = {
    products: IProduct[];
    addToCart: (product: IProduct) => void;
};

export const ShoppingCartContext = createContext<IShoppingCartContext>({
    products: [],
    addToCart: undefined,
});

export const ShoppingCartProvider: FC = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        const newProducts = [...products];
        newProducts.push(product);
        setProducts(newProducts);
    };

    return (
        <ShoppingCartContext.Provider value={{ products, addToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
