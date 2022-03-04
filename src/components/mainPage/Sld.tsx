import React from 'react';

type PropType={
    cont?: string,
    title?: string,
    urlImg?: string
}

const Sld = ({urlImg}:PropType) => {
    return (
        <img src={urlImg} alt="" className='slider-item'/>
    );
};

export default Sld;