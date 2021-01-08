import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from '../../components';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks';
import { productService } from '../../service';
import styles from './productDetail.module.css';

const ProductDetail: FC = () => {
    const params: any = useParams();
    const { data, loading, error } = useRequest(productService.getProduct, {
        id: params.id,
    });

    return (
        <Layout loading={loading} error={error}>
            {data && (
                <div className="row mt-5 mb-3">
                    <div className="col-12 col-md-6 col-xl-5">
                        <img
                            className={`${styles.image}`}
                            src={data.image}
                            alt={data.title}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-7">
                        <h4 className="mt-3 mb-4">{data.title}</h4>
                        <div className="mb-4">
                            <b>{`S/ ${data.price}`}</b>
                        </div>
                        <p className={styles.category}>{data.category}</p>
                        <p>{data.description}</p>
                        <button className={`btn btn-dark ${styles.button}`}>
                            Add to cart
                        </button>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default ProductDetail;
