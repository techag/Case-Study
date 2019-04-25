import productDetails from '../assets/data/item-data.json';

export const itemDetails = (state = productDetails.CatalogEntryView[0], action) => {
    switch(action.type) {
        default:
            return state;
    }
};

