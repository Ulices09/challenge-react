import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductList, ProductDetail, NotFound } from '../screens';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <ProductList />
            </Route>
            <Route exact path="/product/:id">
                <ProductDetail />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
