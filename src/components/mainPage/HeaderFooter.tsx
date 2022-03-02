import React from 'react';
import HeaderBtn from "./HeaderBtn";

type PropType={
    cls?: string,
    title?: string
}


const HeaderFooter = ({cls}: PropType) => {
    return (
        <div  className='container-fluid header-footer-block'>
            <div className="row bottom-block">
                <div className='col-1'></div>
                <div className='col-11 hf-block'>
                    <p className='hf-text'>
                        Create your shiny CV right now and for free. <br/> Share it among the top-companies. <br/> Get the offer in a short time.
                    </p>
                </div>
            </div>

            <HeaderBtn cls={cls}/>

        </div>

    );
};

export default HeaderFooter;