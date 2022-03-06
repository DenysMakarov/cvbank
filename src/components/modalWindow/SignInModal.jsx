import React, {useState} from 'react';
import {FaGoogle, FaFacebook} from 'react-icons/fa'
import BtnNav from "../navigation/BtnNav";
import {useDispatch} from "react-redux";
import {hideSignIn} from "../../actions/showModalAction";
import {authUser} from "../../actions/userAction";

const SignInModal = () => {

    const [auth, setAuth] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch(hideSignIn())
    }

    const getValueFromInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setAuth({
            ...auth,
            [name]: value
        })
        console.log(auth)
    }

    const logIn = (e) => {
        e.preventDefault()
        const token = 'Basic ' + btoa(auth.email + ':' + auth.password)
        authUser(token)
        localStorage.setItem('token', token)
    }


    return (
        <div className='row modal-window'>
            <div className='modal-wrapper'/>
            <div className='modal-signIn'>
                <p className='modal-title'>SIGN IN</p>
                <div onClick={hideModal} className='modal-escape'>
                    <div className='line left-line'/>
                    <div className='line right-line'/>
                </div>
                <div className='clearBoth'></div>
                <div className='input-block-modal'>
                    <input onChange={getValueFromInput} name='email' type="text" placeholder='Email'
                           defaultValue={auth.email}/>
                    <input onChange={getValueFromInput} name='password' type="text" placeholder='Password'
                           defaultValue={auth.password}/>
                </div>
                <div className='socialMediaLink-block'>
                    <p>Or enter using</p>
                    <div className='icon-modal-block'>
                        <FaFacebook className='icon-modal'/>
                        <FaGoogle className='icon-modal'/>
                    </div>
                </div>
                <BtnNav fun={logIn} cls={`btn-nav btn-in btn-modal`} title={`LOG IN`}/>
                <span className='links-modal'>Not registered yet?<a href=""> SIGN UP</a></span>
                <span className='links-modal-right'>Forgot<a href=""> PASSWORD?</a></span>
            </div>
        </div>
    );
};

export default SignInModal;