import React from 'react';
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa';
// <FaFacebook className='icon-modal'/>
//     <FaGoogle className='icon-modal'/>

const Footer = () => {
    return (
        <div className='row main-page-footer'>
            <div className='col-3 navbar navbar-title footer-navbar-title footer-item'>
                <span style={{color: 'white'}}>GLOBAL</span>
                <span style={{color: 'white'}} className='cv'>CV</span>
                <span style={{color: 'white'}}>BANK</span>
            </div>
            <div className='col-2 footer-item'>
                <a className='footer-link' href="#">About Us </a> <br/>
                <a className='footer-link' href="#">Contact</a> <br/>
                <a className='footer-link' href="#">Terms & Conditions</a> <br/>
                <a className='footer-link' href="#">Admin page</a> <br/>
            </div>
            <div className='col-2 footer-item'>
                <a className='footer-link' ><FaFacebookF className='icon-footer'/>Facebook</a> <br/>
                <a className='footer-link' href="#"><FaTwitter className='icon-footer'/>Twitter</a> <br/>
                <a className='footer-link' href="#"><FaInstagram className='icon-footer'/>Instagram</a> <br/>
            </div>
            <div className='col-3 footer-item'>
                <span className='footer-input-text'>Subscribe to our newsletter</span>
                <div className='input-block'>
                    <input className='input-footer' type="text" placeholder='Email Address'/>
                    <button className='btn-footer-input'>OK</button>
                </div>
            </div>
            <div className='col-2 footer-item '>
                <a className='footer-link' >Plaut 10, Rehovot</a> <br/>
                <a className='footer-link' href="#">+972 58 6688567</a> <br/>
                <a className='footer-link' href="#">info@gcvbank.com</a> <br/>
            </div>
        </div>
    );
};

export default Footer;