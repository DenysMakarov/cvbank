import React from 'react';
import Header from "./Header";
import HeaderFooter from "./HeaderFooter";
import MainContent from "./MainContent";

const MainPage = () => {
    return (
        <React.Fragment>
            <div style={{height: "100%"}} className="row main-page">
                <Header cls={`header-btn`}/>
                <HeaderFooter cls={`header-btn hf-btn`}/>
            </div>
            <MainContent/>
        </React.Fragment>

    );
};

export default MainPage;