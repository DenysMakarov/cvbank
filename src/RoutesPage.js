import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import CompanyRegister from "./components/companyRegister/CompanyRegister";

const RoutesPage = () => {
    return (
        <Routes>
            <Route exact path='/' element={<MainPage/>}/>
            <Route exact path='/register/company' element={<CompanyRegister/>}/>
        </Routes>
    );
};

export default RoutesPage;