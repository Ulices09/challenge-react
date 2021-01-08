import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
import { ShoppingCartProvider } from './context/shoppingCart';

function App() {
    return (
        <ShoppingCartProvider>
            <Routes />
        </ShoppingCartProvider>
    );
}

export default App;
