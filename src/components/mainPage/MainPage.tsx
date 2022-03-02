import React from 'react';
import Header from "./Header";
import HeaderFooter from "./HeaderFooter";

const MainPage = () => {
    return (
        <div className='container-fluid main-page'>
            <div style={{height: "100%"}} className="row ">
                <Header cls={`header-btn`}/>
                <HeaderFooter cls={`header-btn hf-btn`}/>
            </div>
        </div>
    );
};

export default MainPage;