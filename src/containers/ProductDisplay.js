import React, {Component} from 'react';
import './ProductDisplay.css';
import productDetails from '../assets/data/item-data.json';
import ZoomIn from '../assets/images/zoom-in.png';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Promotions from '../components/Promotions/Promotions';
import ProductQuantity from '../components/ProductQuantity/ProductQuantity';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import ProductHighlights from '../components/ProductHighlights/ProductHighlights';
import Ratings from '../components/Ratings/Ratings';

class ProductDisplay extends Component {

    state = {
        itemDetail: productDetails.CatalogEntryView[0],
        images: productDetails.CatalogEntryView[0].Images[0],
        primaryImage: productDetails.CatalogEntryView[0].Images[0].PrimaryImage[0].image,
        offers: productDetails.CatalogEntryView[0].Offers[0].OfferPrice[0],
        promotions: productDetails.CatalogEntryView[0].Promotions,
        features: productDetails.CatalogEntryView[0].ItemDescription[0].features,
        avgRating: productDetails.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating,
        totalReviews: productDetails.CatalogEntryView[0].CustomerReview[0].totalReviews,
        pros: productDetails.CatalogEntryView[0].CustomerReview[0].Pro,
        cons: productDetails.CatalogEntryView[0].CustomerReview[0].Con,
        availableOnline: productDetails.CatalogEntryView[0].purchasingChannelCode,
        imageIndex: [0,1,2],
        quantity: 1
    };

    /**
     * imageSliderHandler
     * imageIndex - Array of current index in the slider
     * direction - Direction of the click
     * */
    imageSlideHandler = (imgIndex, direction) => {
        let newIndex = [];
        let imageCount = Number(this.state.images.imageCount);

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
        let primaryImg = '';

        primaryImg = this.state.images.AlternateImages[imgIndex].image;

        this.setState({primaryImage:primaryImg})
    };

    /**
     * Increase or decrease quantity as per action
     * */
    quantityHandler = (currentQuan, action) => {
        if (action === 'increase') {
            currentQuan++;
        }

        if (action === 'decrease' && currentQuan > 1) {
            currentQuan--;
        }

        this.setState({quantity: currentQuan});
    };

    checkOnlineAvailable = () => {
       let availableOnline = this.state.availableOnline;

        return availableOnline === '1' || availableOnline === '0';

    };

    render() {

        return (
            <div className="ProductDisplay row">
                {/*Left hand side panel*/}

                <div className="col-md-7">
                    <div className="product-name row">
                        <span>{this.state.itemDetail.title}</span>
                    </div>
                    <div className="product-img row">
                        <img alt="" src={this.state.primaryImage}/>
                    </div>

                    <div className="view-larger row">
                        <span>
                            <img alt="" src={ZoomIn}/> view larger
                        </span>
                    </div>

                    <ImageSlider
                        images={this.state.images.AlternateImages}
                        imageIndex={this.state.imageIndex}
                        imageSlideHandler={this.imageSlideHandler}
                        setPrimaryImage = {this.setPrimaryImageHandler}
                    />
                    <Ratings
                        ratings={this.state.avgRating}
                        totalReviews={this.state.totalReviews}
                        pros={this.state.pros}
                        cons={this.state.cons}
                        className="rating-desktop"
                    />
                </div>

                {/*Right Hand Side build*/}
                <div className="col-md-5 right-side">
                    <div className="prod-amt">
                        <span>{this.state.offers.formattedPriceValue}</span><span
                        className="price-detail"> online price</span>
                    </div>

                    {/*Promotions*/}
                    <Promotions promotions={this.state.promotions}/>

                    {/*Manage Product Quantity*/}
                    <ProductQuantity quantityHandler={this.quantityHandler} currentQuantity={this.state.quantity}/>

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
                    <ProductHighlights features={this.state.features}/>

                    <Ratings
                        ratings={this.state.avgRating}
                        totalReviews={this.state.totalReviews}
                        pros={this.state.pros}
                        cons={this.state.cons}
                        className="rating-mobile"
                    />

                </div>

            </div>
        )
    }
}

export default ProductDisplay;