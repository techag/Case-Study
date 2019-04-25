const changePrimaryImage = primaryImage => {
    return {
        type: 'CHANGE_PRIMARY_IMAGE',
        primaryImage
    };
};

export const getPrimaryImage = (primaryImage) => {
    return dispatch => {
        dispatch(changePrimaryImage(primaryImage))
    }
};