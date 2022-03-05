import React from 'react';
import BtnNav from "../navigation/BtnNav";
import AboutContent from "./AboutContent";

const About = () => {
    return (
        <React.Fragment>
            <div className='under-youare'>
                <div className='under-youare-block'>
                    <p>Hundreds of companies. Thousands of CVs. The most satisfying result</p>
                    <BtnNav cls={`btn-nav btn-in`} title={`JOIN US`}/>
                </div>
            </div>
            <AboutContent/>
        </React.Fragment>

    );
};

export default About;