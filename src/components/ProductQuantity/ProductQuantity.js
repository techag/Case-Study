import React from 'react';
import './ProductQuantity.css';

const productQuantity = props => {
    return (
        <div className="ProductQuantity">
            <span className="quan-lbl">quantity:</span>
            <span className="quan-minus">-</span>
            <span className="quan-num">1</span>
            <span className="quan-plus">+</span>
        </div>
    )
};

export default productQuantity;