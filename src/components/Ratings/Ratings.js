import React from 'react';
import './Ratings.css';
import RatingStars from './RatingsStars/RatingsStars';

const ratings = props => {
console.log(props)
    return (
        <div className="Ratings">
           <RatingStars {...props}/>
            <span className="overall">overall</span>
            <span className="all-ratings">View All {props.totalReviews} Reviews</span>

            <div className="pros-cons">
                <div className="pro-cons-head">
                    <div className="pro">
                        <span className="pro-con-title">PRO</span>
                        <span className="most-helpful">most helpful 4-5 star reviews</span>
                    </div>
                    <div className="con">
                        <span className="pro-con-title">CON</span>
                        <span className="most-helpful">most helpful 1-2 star reviews</span>
                    </div>
                </div>
                <div className="pro-rating">
                    <RatingStars ratings={props.pros[0].overallRating}/>
                    <div className="review-title">{props.pros[0].title}</div>
                    <div className="review">{props.pros[0].review}</div>
                </div>
                <div className="con-rating">
                    <RatingStars ratings={props.cons[0].overallRating}/>
                    <div className="review-title">{props.cons[0].title}</div>
                    <div className="review">{props.cons[0].review}</div>
                </div>
            </div>
        </div>
    )

};

export default ratings;