import React, { FC } from 'react';
import { BounceLoader } from 'react-spinners';
import styles from './loading.module.css';

const css = 'position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;';

const Loading: FC = () => {
    return (
        <div className={styles.container}>
            <BounceLoader css={css} size={50} color="#000" loading={true}></BounceLoader>
        </div>
    );
};

export default Loading;
