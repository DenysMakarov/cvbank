import React, {useState} from 'react';
import {useNavigate, useParams, useResolvedPath} from "react-router-dom";
import Footer from "../mainPage/Footer";
import BtnNav from "../navigation/BtnNav";
import {useDispatch} from "react-redux";
import {hideSignInUp} from "../../actions/showModalAction";
import CompanySignUp from "../modalWindow/CompanySignUp";


// const companyArr = [
//     {name: 'companyName', text: 'Company name'},
//     {name: 'companyWebSite', text: 'Company website'},
//     {name: 'country', text: 'Country'},
//     {name: 'city', text: 'City'},
//     {name: 'street', text: 'Street'},
//     {name: 'house', text: 'House/building'},
//     {name: 'zip', text: 'ZIP/postcode'},
//     {name: 'companyPhone', text: 'Company phone'}
// ]
// const applicantArr = [
//     {name: 'applicationName', text: 'Applicant name'},
//     {name: 'applicationLastName', text: 'Applicant last name'},
//     {name: 'position', text: 'Position'},
//     {name: 'corporativeEmail', text: 'Corporative Email'},
//     {name: 'phone', text: 'Phone'}
// ]
// const passArr = [
//     {name: 'password', text: 'Password'},
//     {name: 'confirmPassword', text: 'Confirm password'},
// ]


const CompanyRegister = () => {

    // const [company, setCompany] = useState({})
    // const dispatch = useDispatch();
    //
    //
    // const getValueFromInput = (e) => {
    //     e.preventDefault()
    //     const {name, value} = e.target
    //     setCompany({
    //         ...company,
    //         [name]: value
    //     })
    //     console.log(company)
    // }

    // const registerCompany = () => {
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
        // console.log(company)
    // }

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

                <CompanySignUp/>

                {/*<div className='company-sign-up'>*/}
                {/*    <p className='company-sign-up-title'>SIGN UP</p>*/}
                {/*    {companyArr.map((el, idx) =>*/}
                {/*        <input*/}
                {/*            onChange={getValueFromInput}*/}
                {/*            key={el.name + idx}*/}
                {/*            className='company-sign-up-input' type="text"*/}
                {/*            name={el.name}*/}
                {/*            placeholder={el.text}*/}
                {/*            // defaultValue={el.name}*/}
                {/*        />)}*/}
                {/*    <div style={{marginTop: '45px'}}/>*/}
                {/*    {applicantArr.map((el, idx) =>*/}
                {/*        <input*/}
                {/*            onChange={getValueFromInput}*/}
                {/*            key={el.name + idx}*/}
                {/*            className='company-sign-up-input' type="text"*/}
                {/*            name={el.name}*/}
                {/*            placeholder={el.text}*/}
                {/*            // defaultValue={el.name}*/}
                {/*        />)}*/}
                {/*    <div style={{marginTop: '45px'}}/>*/}
                {/*    {passArr.map((el, idx) =>*/}
                {/*        <input*/}
                {/*            onChange={getValueFromInput}*/}
                {/*            key={el.name + idx}*/}
                {/*            className='company-sign-up-input' type="text"*/}
                {/*            name={el.name}*/}
                {/*            placeholder={el.text}*/}
                {/*            // defaultValue={el.name}*/}
                {/*        />)}*/}

                {/*    <button onClick={registerCompany} className='btn-company-signup'>SIGN IN</button>*/}

                {/*    <p className='company-sign-up-text'>*/}
                {/*        By clicking “SIGN UP, you confirm that you <br/> accept the*/}
                {/*        <a href=""> Terms of Service & Privacy Policy</a>*/}
                {/*    </p>*/}

                {/*    <p className='company-signup-footer'>*/}
                {/*        <span>Not registered yet? <a href="#">SIGN UP </a></span>*/}
                {/*        <span style={{marginLeft: '10px'}}>Forgot <a href="#">PASSWORD?</a></span>*/}
                {/*    </p>*/}

                {/*</div>*/}
            </div>

            <Footer/>
        </div>
    );
};

export default CompanyRegister;