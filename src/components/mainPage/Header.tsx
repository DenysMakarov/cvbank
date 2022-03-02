import React from 'react';
import HeaderBtn from "./HeaderBtn";

type PropType={
    cls?: string,
    title?: string
}


const Header = ({cls} : PropType) => {
    return (
        <React.Fragment>
            <div className='col-1'></div>
            <div className='col-11 header'>
                <p className='top-text'>
                    <span style={{color: '#18A4E0'}}>Employer? </span>
                    <span>Find your best employee in a </span>
                    <span><a href="">few clicks.</a></span>
                </p>

                <p className='title-text'>
                    HIRE & <br/>GET HIRED!
                </p>

                <HeaderBtn cls={cls}/>

                <p className='bottom-text'>
                    Create your CV online, select any template you like most of all, edit, export it and use anywhere.
                </p>
            </div>
        </React.Fragment>

    );
};

export default Header;