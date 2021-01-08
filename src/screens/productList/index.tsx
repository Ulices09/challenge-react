import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, ProductCard } from '../../components';
import { useRequest } from '../../hooks';
import { productService } from '../../service';

const ProductList: FC = () => {
    const { data, loading, error } = useRequest(productService.getProducts);

    return (
        <Layout loading={loading} error={error}>
            <div className="row">
                <div className="col">
                    <h1 className="mb-4">Products</h1>
                </div>
            </div>
            <div className="row">
                {data && data.length > 0 && data.map((p) => <ProductCard product={p} />)}
            </div>
        </Layout>
    );
};

export default ProductList;
