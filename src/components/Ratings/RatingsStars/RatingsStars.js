import React from 'react';
import './RatingsStars.css';
import RatingImg from '../../../assets/images/ratings.png';
import NegRatingImg from '../../../assets/images/neg-ratings.png';
const ratingStars = props => {
    let i;
    let ratings = [];
    for(i=1; i<=5; i++){
        if (props.ratings >= i ){
            ratings.push(<img key={i} alt="" src={RatingImg} />);
        } else {
            ratings.push(<img key={i} alt="" src={NegRatingImg} />);
        }

    }
    return (
        <span> {ratings} </span>
    )
};

export default ratingStars;