import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const companyArr = [
    {name: 'companyName', text: 'Company name'},
    {name: 'companyWebSite', text: 'Company website'},
    {name: 'country', text: 'Country'},
    {name: 'city', text: 'City'},
    {name: 'street', text: 'Street'},
    {name: 'house', text: 'House/building'},
    {name: 'zip', text: 'ZIP/postcode'},
    {name: 'companyPhone', text: 'Company phone'}
]
const applicantArr = [
    {name: 'applicationName', text: 'Applicant name'},
    {name: 'applicationLastName', text: 'Applicant last name'},
    {name: 'position', text: 'Position'},
    {name: 'corporativeEmail', text: 'Corporative Email'},
    {name: 'phone', text: 'Phone'}
]
const passArr = [
    {name: 'password', text: 'Password'},
    {name: 'confirmPassword', text: 'Confirm password'},
]

const CompanySignUp = () => {

    const [company, setCompany] = useState({})
    const dispatch = useDispatch();


    const getValueFromInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setCompany({
            ...company,
            [name]: value
        })
        console.log(company)
    }

    const registerCompany = () => {
        // FETCH TO DO
        // fetch('http://localhost:8080/cvbank/employer/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(company)
        // }).then(data => {
        //     if (data.status >= 200 && data.status <= 299) {
        //         // setTextDesc(`Congratulations! Now you can enter in your account.`)
        //         // setStyleBlockCongratulations('congratulations-block-appear')
        //     } else {
        //         // setTextDesc(`Sorry! Probably account has already exist.`)
        //         // setStyleBlockCongratulations('congratulations-block-appear')
        //     }
        // })
        console.log(company)
    }

    return (
        <div className='company-sign-up'>
            <p className='company-sign-up-title'>SIGN UP</p>
            {companyArr.map((el, idx) =>
                <input
                    onChange={getValueFromInput}
                    key={el.name + idx}
                    className='company-sign-up-input' type="text"
                    name={el.name}
                    placeholder={el.text}
                    // defaultValue={el.name}
                />)}
            <div style={{marginTop: '45px'}}/>
            {applicantArr.map((el, idx) =>
                <input
                    onChange={getValueFromInput}
                    key={el.name + idx}
                    className='company-sign-up-input' type="text"
                    name={el.name}
                    placeholder={el.text}
                    // defaultValue={el.name}
                />)}
            <div style={{marginTop: '45px'}}/>
            {passArr.map((el, idx) =>
                <input
                    onChange={getValueFromInput}
                    key={el.name + idx}
                    className='company-sign-up-input' type="text"
                    name={el.name}
                    placeholder={el.text}
                    // defaultValue={el.name}
                />)}

            <button onClick={registerCompany} className='btn-company-signup'>SIGN UP</button>

            <p className='company-sign-up-text'>
                By clicking “SIGN UP, you confirm that you <br/> accept the
                <a href=""> Terms of Service & Privacy Policy</a>
            </p>

            <p className='company-signup-footer'>
                <span>Not registered yet? <a href="#">SIGN UP </a></span>
                <span style={{marginLeft: '10px'}}>Forgot <a href="#">PASSWORD?</a></span>
            </p>

        </div>
    );
};

export default CompanySignUp;