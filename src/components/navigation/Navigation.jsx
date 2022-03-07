import React, {Fragment, useEffect} from 'react';
import BtnNav from "./BtnNav";
import {useDispatch, useSelector} from "react-redux";
import {showModalReducer} from "../../reducers/showModalReducer";
import {hideSignIn, hideSignInUp, showSignIn, showSignUp} from "../../actions/showModalAction";
import {showSignInCompany, showSignUpCompany} from "../../actions/navigationReducerAction";

const Navigation = () => {

    const {signIn, signUp} = useSelector(store => store.showModalReducer)
    const {navigationUser, signInUp} = useSelector(store => store.navigationReducer)

    useEffect(() => {
        console.log(signInUp)
    }, [signInUp])

    const dispatch = useDispatch();

    const showIn = () => {
        dispatch(showSignIn())
    }
    const showUn = () => {
        dispatch(showSignUp())
    }

    const companySignIn = () => {
        dispatch(showSignInCompany())
    }

    const companySignUp = () => {
        dispatch(showSignUpCompany())
        console.log(signInUp)
    }

    return (
        <div className='container-fluid nav-block'>
            <div className="row">
                <div className='col-1 navbar'/>
                <div className='col-3 navbar navbar-title footer-navbar-title'>
                    <span>GLOBAL</span>
                    <span className='cv'>CV</span>
                    <span>BANK</span>
                </div>
                <div className='col-5 navbar'/>
                <div className='col-3 navbar btn-block' >
                    {
                        (signIn || signUp) ? <div className='navbar-btn-block-wrapper'/> : null
                    }
                    {
                        navigationUser?
                            <Fragment>
                                <BtnNav fun={showUn} cls={`btn-nav btn-up`} title={`SIGN UP`}/>
                                <BtnNav fun={showIn} cls={`btn-nav btn-in`} title={`SIGN IN`}/>
                            </Fragment>
                             :
                            <Fragment>
                                {signInUp ?
                                    <BtnNav fun={companySignIn} cls={`btn-nav btn-in company-register-signin-btn`} title={`SIGN IN`}/>
                                    :
                                    <BtnNav fun={companySignUp} cls={`btn-nav btn-in company-register-signin-btn`} title={`SIGN UP`}/>
                                }
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navigation;