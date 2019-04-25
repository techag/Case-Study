import React from 'react';
import './EnlargeImage.css';
import ReactImageMagnify from 'react-image-magnify';
import CloseIcon from '../../assets/images/ic-close.svg'

const enlargeImage = props => {
    return (
    <div className='EnlargeImage'>
        <div className="enlarged-image-box">
            <div className="box-container">
                <span className="CloseIcon" onClick={e => props.handler(false)}>
                    <img alt="close" src={CloseIcon} />
                </span>
                <div className="image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: props.primaryImage
                        },
                        largeImage: {
                            src: props.primaryImage,
                            width: 950,
                            height: 950,
                        },
                        enlargedImageContainerClassName: 'enlarged-image',
                        enlargedImagePosition: 'over',
                        enlargedImageContainerDimensions: {
                            width: '50%',
                            height: '50%'
                        },
                        imageClassName: 'small-image'
                    }} />
                </div>
            </div>
        </div>
    </div>

    )
};

export default enlargeImage;