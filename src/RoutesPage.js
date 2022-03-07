import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import CompanyRegister from "./components/companyRegister/CompanyRegister";
import AddCVEmployeePage from "./components/cvPage/AddCVEmployeePage";

const RoutesPage = () => {
    return (
        <Routes>
            <Route exact path='/' element={<MainPage/>}/>
            <Route exact path='/register/company' element={<CompanyRegister/>}/>
            <Route exact path='/employee/page/cv' element={<AddCVEmployeePage/>}/>
        </Routes>
    );
};

export default RoutesPage;