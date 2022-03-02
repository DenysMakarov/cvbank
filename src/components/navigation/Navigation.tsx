import React from 'react';
import BtnNav from "./BtnNav";

const Navigation = () => {
    return (
        <div className='container-fluid nav-block'>
            <div className="row">
                <div className='col-md-1 navbar'></div>
                <div className='col-md-3 navbar navbar-title'>
                    <span>GLOBAL</span>
                    <span className='cv'>CV</span>
                    <span>BANK</span>
                </div>
                <div className='col-md-5 navbar'></div>
                <div className='col-md-3 navbar btn-block'>
                    <BtnNav cls={`btn-nav btn-up`} title={`SIGN UP`}/>
                    <BtnNav cls={`btn-nav btn-in`} title={`SIGN IN`}/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;