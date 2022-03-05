import React from 'react';
import SliderBlock from "./SliderBlock";
import YouAre from "./YouAre";
import About from "./About";
import VideoBlock from "./VideoBlock";
import CompaniesBlock from "./CompaniesBlock";
import Footer from "./Footer";

const MainContent = () => {
    return (
        <div className={`row-cols-auto`}>
            <SliderBlock/>
            <YouAre/>
            <About/>
            <VideoBlock/>
            <CompaniesBlock/>
            <Footer/>
        </div>
    );
};

export default MainContent;