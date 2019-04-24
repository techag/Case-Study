import React from 'react';
import './ProductHighlights.css';

const productHighlights = props => {
    return(
        <div className="ProductHighlights">
            <span>product highlights</span>
            <ul>
                {props.features.map((feature, i)=>{
                    return(
                        <li key={i}>{feature.replace(/<\/?[^>]+(>|$)/g, "")}</li>
                    )
                })}
            </ul>
        </div>
    )
};

export default productHighlights;
