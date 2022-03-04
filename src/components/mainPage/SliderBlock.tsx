import React from 'react';
import MainSlider from "./MainSlider";

const SliderBlock = () => {
    return (
        <div className={`col-12 slider-block`}>
            <div className="row">
                <div className="col-12"> <p className={`slider-text`}>Professional CV templates</p></div>
                <div className='col-1'></div>
                <div className="col-10 slick-slider-block">
                    <MainSlider/>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
};

export default SliderBlock;