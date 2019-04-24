import React from 'react';
import './ActionButtons.css';

const actionButtons = props => {
    console.log(props.availableOnline)
    return (
        <div className="ActionButtons">
            {props.availableOnline &&
            <span>
                    <button className="pick-up-in-store">PICK UP IN STORE</button>
                    <button className="add-to-cart">ADD TO CART</button>
                </span>
            }
            <span className="find-in-store">find in store</span>
        </div>
    )
};

export default actionButtons;