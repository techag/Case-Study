import productDetails from '../assets/data/item-data.json';
const initialState = {
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
};

export const itemDetails = (state = initialState, action) => {
    switch(action.type) {
        case action.type:
            return {
                ...state,
                primaryImage: !action.primaryImage ? state.primaryImage : action.primaryImage
            };

        default:
            return state;
    }
};

