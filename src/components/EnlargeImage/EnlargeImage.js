import React from 'react';
import './EnlargeImage.css';
import ReactImageMagnify from 'react-image-magnify';

const enlargeImage = props => {
    return (
        <ReactImageMagnify {...{
            smallImage: {
                alt: '',
                isFluidWidth: true,
                src: props.primaryImage
            },
            largeImage: {
                src: props.primaryImage,
                width: 800,
                height: 1200,
            },
            enlargedImagePosition: 'over',
            enlargedImageContainerClassName: 'enlarged-image'
        }} />
    )
};

export default enlargeImage;