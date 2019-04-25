import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router';

import './ProductDisplay.css';
import ZoomIn from '../assets/images/zoom-in.png';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Promotions from '../components/Promotions/Promotions';
import ProductQuantity from '../components/ProductQuantity/ProductQuantity';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ProductHighlights from '../components/ProductHighlights/ProductHighlights';
import Ratings from '../components/Ratings/Ratings';
import EnlargeImage from '../components/EnlargeImage/EnlargeImage';

class ProductDisplay extends Component {

    state = {
        imageIndex: [0,1,2],
        showModal: false
    };

    /**
     * imageSliderHandler
     * imageIndex - Array of current index in the slider
     * direction - Direction of the click
     * */
    imageSlideHandler = (imgIndex, direction) => {
        let newIndex = [];
        let imageCount = Number(this.props.images.imageCount);

        //Set the new index of image as per the direction
        //Should not be greater than imageCount
        if (direction === 'right' && imgIndex[2] < imageCount -1) {
            imgIndex.filter((i) => {
                newIndex.push(i+1); // +1 to each index value
            })
        }

        //Should not be lest than imageCount
        if (direction === 'left' && imgIndex[0] > 0) {
            imgIndex.filter((i) => {
                newIndex.push(i-1);
            })
        }

        //If newIndex is [], set it to its give index
        newIndex = newIndex.length > 0 ? newIndex : imgIndex;

        this.setPrimaryImageHandler(newIndex[1]);

        this.setState({imageIndex: newIndex})
    };


    /**
     * Setting Up primary image on click of image
     * */
    setPrimaryImageHandler = (imgIndex) => {
        this.props.changePrimaryImage(this.props.images.AlternateImages[imgIndex].image);
    };

    /**
     * Increase or decrease quantity as per action
     * */
    quantityHandler = (currentQuan, action) => {
        if (action === 'increase') {
            this.props.increment()
        }

        if (action === 'decrease' && currentQuan > 1) {
           this.props.decrement()
        }

        this.setState({quantity: this.props.quantity});
    };

    /**
     * Check if the product is available online
     * */
    checkOnlineAvailable = () => {
       let availableOnline = this.props.availableOnline;
        return availableOnline === '1' || availableOnline === '0';
    };

    enlargeImageHandler = isVisible => {
        this.setState({showModal: isVisible})
    };

    render() {
        // console.log(this.props)
        return (
            <div className="ProductDisplay row">

                {/*Open Enlarged image in the modal*/}
                {this.state.showModal && (
                    <EnlargeImage
                        primaryImage={this.props.primaryImage}
                        childComponent={this.state.modalComponent}
                        handler={this.enlargeImageHandler}
                    />
                )}

                {/*Left hand side panel*/}
                <div className="col-md-7">
                    <div className="product-name row">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="product-img row">
                        <img alt="" src={this.props.primaryImage}/>
                    </div>

                    <div className="view-larger row">
                        <span onClick={e => this.enlargeImageHandler(true)}>
                            <img alt="" src={ZoomIn}/> view larger
                        </span>
                    </div>

                    <ImageSlider
                        images={this.props.images.AlternateImages}
                        imageIndex={this.state.imageIndex}
                        imageSlideHandler={this.imageSlideHandler}
                        setPrimaryImage = {this.setPrimaryImageHandler}
                    />
                    <Ratings
                        ratings={this.props.avgRating}
                        totalReviews={this.props.totalReviews}
                        pros={this.props.pros}
                        cons={this.props.cons}
                        className="rating-desktop"
                    />
                </div>

                {/*Right Hand Side build*/}
                <div className="col-md-5 right-side">
                    <div className="prod-amt">
                        <span>{this.props.offers.formattedPriceValue}</span><span
                        className="price-detail"> online price</span>
                    </div>

                    {/*Promotions*/}
                    <Promotions promotions={this.props.promotions}/>

                    {/*Manage Product Quantity*/}
                    <ProductQuantity quantityHandler={this.quantityHandler} currentQuantity={this.props.quantity}/>

                    {/*Action Buttons*/}

                    <ActionButtons availableOnline={this.checkOnlineAvailable()}/>

                    <div className="returns">
                        <span className="return-lbl">returns</span>
                        <span className="return-dtl">This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</span>
                    </div>

                    <div className="ActionButtons reg-list-share">
                        <button>ADD TO REGISTRY</button>
                        <button>ADD TO LIST</button>
                        <button>SHARE</button>
                    </div>

                    {/*Product highlights*/}
                    <ProductHighlights features={this.props.features}/>

                    <Ratings
                        ratings={this.props.avgRating}
                        totalReviews={this.props.totalReviews}
                        pros={this.props.pros}
                        cons={this.props.cons}
                        className="rating-mobile"
                    />

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.itemDetails,
        quantity: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        changePrimaryImage: primaryImage => dispatch({type: 'CHANGE_PRIMARY_IMAGE', primaryImage})
    }
};

export default withRouter(
    connect(
        mapStateToProps, mapDispatchToProps
    )(ProductDisplay)
);
