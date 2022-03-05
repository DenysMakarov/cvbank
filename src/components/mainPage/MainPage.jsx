import React, {useEffect} from 'react';
import Header from "./Header";
import HeaderFooter from "./HeaderFooter";
import MainContent from "./MainContent";
import SignInModal from "../modalWindow/SignInModal";

import {useSelector} from "react-redux";
import SignUpModal from "../modalWindow/SignUpModal";

const MainPage = () => {
    const {signIn, signUp} = useSelector(state => state.showModalReducer)

    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div style={{height: "100%"}} className="row main-page">
                    <Header cls={`header-btn`}/>
                    <HeaderFooter cls={`header-btn hf-btn`}/>
                </div>
                <MainContent/>
                {
                    (signIn) ? <SignInModal/> : <React.Fragment/>
                }
                {
                    (signUp) ? <SignUpModal/> : <React.Fragment/>
                }
            </div>

        </React.Fragment>

    );
};

export default MainPage;