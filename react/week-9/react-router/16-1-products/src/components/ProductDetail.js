import React from 'react';
import store from '../store';

const ProductDetails = ({
    match: {
        params: { id },
    },
}) => {
    const productId = parseInt(id);
    const product = store.find((obj) => obj.id === productId);
    return (
        <div className='details'>
            <h3>{product.title}</h3>
            <h5>{`Price: ${product.price}`}</h5>
            <h5>{`Size: ${product.size}`}</h5>
            <img src={product.imageUrl} alt={product.title} />
        </div>
    );
};

export default ProductDetails;
