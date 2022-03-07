import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {hideSignIn, hideSignInUp} from "../../actions/showModalAction";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import BtnNav from "../navigation/BtnNav";

const SignUpModal = () => {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch(hideSignInUp())
    }

    const getValueFromInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user)
    }

    const register = () => {
        // FETCH TO DO
        // fetch('http://localhost:8080/cvbank/employee/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(user)
        // }).then(data => {
        //     if (data.status >= 200 && data.status <= 299) {
        //         // setTextDesc(`Congratulations! Now you can enter in your account.`)
        //         // setStyleBlockCongratulations('congratulations-block-appear')
        //     } else {
        //         // setTextDesc(`Sorry! Probably account has already exist.`)
        //         // setStyleBlockCongratulations('congratulations-block-appear')
        //     }
        // })
        console.log(user)
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
                <div className='clearBoth'/>
                <div className='input-block-modal'>
                    <input onChange={getValueFromInput} type="text" name='name' placeholder='Name' defaultValue={user.name} />
                    <input onChange={getValueFromInput} type="text" name='lastName' placeholder='Last name' defaultValue={user.lastName}/>
                    <input type="text" placeholder='E-mail' name='email' defaultValue={user.email}/>
                    <input type="text" placeholder='Password' name='password' defaultValue={user.password}/>
                    <input type="text" placeholder='Confirm password' name='confirmName' defaultValue={user.confirmPassword}/>

                </div>
                <div className='socialMediaLink-block'>
                    <p>Or enter using</p>
                    <div className='icon-modal-block'>
                        <FaFacebook className='icon-modal'/>
                        <FaGoogle className='icon-modal'/>
                    </div>
                </div>
                <BtnNav register={register} cls={`btn-nav btn-in btn-modal`} title={`SIGN UP`}/>
                <span className='links-modal'>By clicking “SIGN UP,” you confirm that you accept the<a href=""> TERMS OF SERVICE & PRIVACY</a></span>
            </div>
        </div>
    );
};

export default SignUpModal;