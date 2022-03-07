import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useResolvedPath} from "react-router-dom";
import Footer from "../mainPage/Footer";
import BtnNav from "../navigation/BtnNav";
import {useDispatch, useSelector} from "react-redux";
import {hideSignInUp} from "../../actions/showModalAction";
import CompanySignUp from "../modalWindow/CompanySignUp";
import {setCompanyNav, setUserNav} from "../../actions/navigationReducerAction";
import CompanySignIn from "../modalWindow/CompanySignIn";

const CompanyRegister = () => {
    const {navigationUser, signInUp} = useSelector(store => store.navigationReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCompanyNav())
        return  () => dispatch(setCompanyNav())
    }, [])

    return (
        <div className='container-fluid '>

            <div className='row company-register-block'>
                <div className='col-1 '/>
                <div className='col-11 '>
                    <p className='company-register-title'>Find your best employee in a few clicks.</p>
                    <div className='company-register-img'/>
                    <p className='company-register-text'>We are happy to present you <br/> our groundbreaking service:
                    </p>
                    <ul className='company-register-ul'>
                        <li>Only actual CVs;</li>
                        <li>Pre-interviewed candidates;</li>
                        <li>The tremendous bank of CVs;</li>
                        <li>Friendly and helpful functionality;</li>
                        <li>Proper candidate in a short time.</li>
                    </ul>
                </div>
                {
                    signInUp ? <CompanySignUp/> : <CompanySignIn/>
                }

            </div>
            <Footer/>
        </div>
    );
};

export default CompanyRegister;