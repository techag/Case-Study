import React from 'react';
import './ProductQuantity.css';

const productQuantity = props => {
    return (
        <div className="ProductQuantity">
            <span className="quan-lbl">quantity:</span>
            <span className="quan-minus" onClick={e => props.quantityHandler(props.currentQuantity, 'decrease')}>-</span>
            <span className="quan-num">{props.currentQuantity}</span>
            <span className="quan-plus" onClick={e => props.quantityHandler(props.currentQuantity, 'increase')}>+</span>
        </div>
    )
};

export default productQuantity;