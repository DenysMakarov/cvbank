import React from 'react';
import BtnNav from "./BtnNav";
import {useDispatch, useSelector} from "react-redux";
import {showModalReducer} from "../../reducers/showModalReducer";
import {hideSignIn, hideSignInUp, showSignIn, showSignUp} from "../../actions/showModalAction";

const Navigation = () => {

    const {signIn, signUp} = useSelector(store => store.showModalReducer)
    const dispatch = useDispatch();

    const showIn = () => {
        dispatch(showSignIn())
    }
    const showUn = () => {
        dispatch(showSignUp())
    }

    return (
        <div className='container-fluid nav-block'>
            <div className="row">
                <div className='col-1 navbar'></div>
                <div className='col-3 navbar navbar-title footer-navbar-title'>
                    <span>GLOBAL</span>
                    <span className='cv'>CV</span>
                    <span>BANK</span>
                </div>
                <div className='col-5 navbar'></div>
                <div className='col-3 navbar btn-block' >
                    {
                        (signIn || signUp) ?<div className='navbar-btn-block-wrapper'></div> : null
                    }
                    <BtnNav fun={showUn} cls={`btn-nav btn-up`} title={`SIGN UP`}/>
                    <BtnNav fun={showIn} cls={`btn-nav btn-in`} title={`SIGN IN`}/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;