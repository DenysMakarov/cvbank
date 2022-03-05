import React from 'react';
import HeaderBtn from "./HeaderBtn";


const HeaderFooter = ({cls}) => {
    return (
        <div  className='header-footer-block'>
            <div className="col-12 bottom-block">
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-11 hf-block'>
                        <p className='hf-text'>
                            Create your shiny CV right now and for free. <br/> Share it among the top-companies. <br/> Get the offer in a short time.
                        </p>
                    </div>
                </div>

            </div>
            <HeaderBtn cls={cls}/>
        </div>

    );
};

export default HeaderFooter;