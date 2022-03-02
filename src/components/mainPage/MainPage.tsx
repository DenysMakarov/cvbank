import React from 'react';
import Header from "./Header";

const MainPage = () => {
    return (
        <div className='container-fluid main-page'>
            <div style={{height: "100%"}} className="row ">
                <Header/>
            </div>
        </div>
    );
};

export default MainPage;