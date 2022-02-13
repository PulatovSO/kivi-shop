import React from 'react';
import Product from '../components/Product/Product';
import More from '../containers/More/More';

const ProductPage = ({keyid}) => {
    return (
        <>
            <Product keyid={keyid} />
            <More />
        </>
    );
}

export default ProductPage;
