import React from 'react';
import './Promotions.css';
import PromoIcon from '../../assets/images/Vector_Smart_Object.png';

const promotions = props => {

    return (
        <div className="Promotions">
            {props.promotions.map((promo,i) => {
                return (
                    <div className="promo-detail" key={i}>
                        <span>
                            <img alt="" src={PromoIcon}/>
                            {promo.Description[0].shortDescription}
                        </span>
                    </div>
                )
            })}

        </div>
    )
};

export default promotions;

