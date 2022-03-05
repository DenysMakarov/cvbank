import React from 'react';
import Slider from "react-slick";
import Sld from "./Sld";

const template_1 = require('../../img/template_1.png');
const template_2 = require('../../img/template_2.png');
const template_3 = require('../../img/template_3.png');
const template_4 = require('../../img/template_4.png');
const template_5 = require('../../img/template_5.png');
const template_6 = require('../../img/template_6.png');
const template = [template_1, template_2, template_3, template_4, template_5, template_6]

const MainSlider = () => {
    let settings = {
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
            <Slider {...settings}>
                {
                    template.map(el => <Sld urlImg={el} key={el}/>)
                }
            </Slider>
    );
};

export default MainSlider;

const TemplateMainPage = [
    '../../img/template_1.png',
    '../../img/template_2.png',
    '../../img/template_3.png',
    '../../img/template_4.png',
    '../../img/template_5.png',
    '../../img/template_6.png',
]