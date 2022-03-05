import React from 'react';
import {useDispatch} from "react-redux";
import {hideSignIn, hideSignInUp} from "../../actions/showModalAction";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import BtnNav from "../navigation/BtnNav";

const SignUpModal = () => {

    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch(hideSignInUp())
    }

    return (
        <div className='row modal-window '>
            <div className='modal-wrapper'/>
            <div className='modal-signIn modal-window-signUp'>
                <p className='modal-title'>SIGN IN</p>
                <div onClick={hideModal} className='modal-escape'>
                    <div className='line left-line'/>
                    <div className='line right-line'/>
                </div>
                <div className='clearBoth'></div>
                <div className='input-block-modal'>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Last name'/>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Password'/>
                    <input type="text" placeholder='Confirm password'/>

                </div>
                <div className='socialMediaLink-block'>
                    <p>Or enter using</p>
                    <div className='icon-modal-block'>
                        <FaFacebook className='icon-modal'/>
                        <FaGoogle className='icon-modal'/>
                    </div>
                </div>
                <BtnNav cls={`btn-nav btn-in btn-modal`} title={`SIGN UP`}/>
                <span className='links-modal'>By clicking “SIGN UP,” you confirm that you accept the<a href=""> TERMS OF SERVICE & PRIVACY</a></span>
            </div>
        </div>
    );
};

export default SignUpModal;