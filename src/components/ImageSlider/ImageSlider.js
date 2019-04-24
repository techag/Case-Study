import React from 'react';
import './ImageSlider.css';

import SlideLeft from '../../assets/images/Arrow_Left.png';
import SlideRight from '../../assets/images/Arrow_Right.png';

const imageSlider = props => {
    return (
        <div className="ImageSlider row">
            <span id="slide_left" className="slide-left" onClick={e => props.imageSlideHandler(props.imageIndex, 'left')}>
                <img alt="" src={SlideLeft}/>
            </span>

            {props.images[props.imageIndex[0]] &&
            <span className="image-left">
                <img
                    alt=""
                    src={props.images[props.imageIndex[0]].image+"?wid=60&hei=60"}
                    onClick={e => props.setPrimaryImage(props.imageIndex[0])}
                />
            </span>
            }

            {props.images[props.imageIndex[1]] &&
            <span className="image-center">
                <img
                    alt=""
                    src={props.images[props.imageIndex[1]].image+"?wid=60&hei=60"}
                    onClick={e => props.setPrimaryImage(props.imageIndex[1])}
                />
                </span>
            }
            {props.images[props.imageIndex[2]] &&
            <span className="image-right">
                <img
                    alt=""
                    src={props.images[props.imageIndex[2]].image+"?wid=60&hei=60"}
                    onClick={e => props.setPrimaryImage(props.imageIndex[2])}
                />
                </span>
            }

            <span id="slide_right" className="slide-right" onClick={e => props.imageSlideHandler(props.imageIndex, 'right')}>
                <img alt="" src={SlideRight}/>
            </span>
        </div>
    )
};

export default imageSlider;