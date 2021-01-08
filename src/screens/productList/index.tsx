import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, ProductCard } from '../../components';
import { useRequest } from '../../hooks';
import { productService } from '../../service';
import { useHistory } from 'react-router-dom';

const ProductList: FC = () => {
    const { data, loading, error } = useRequest(productService.getProducts);
    const history = useHistory();

    return (
        <Layout loading={loading} error={error}>
            <div className="row">
                <div className="col">
                    <h1 className="mb-4">Products</h1>
                </div>
            </div>
            <div className="row">
                {data &&
                    data.map((product) => (
                        <ProductCard
                            product={product}
                            onClick={() =>
                                history.push(`/product/${product.id}`)
                            }
                        />
                    ))}
            </div>
        </Layout>
    );
};

export default ProductList;
