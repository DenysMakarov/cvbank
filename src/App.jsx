import React, {useEffect, useState} from 'react';
import './App.scss';
import Navigation from "./components/navigation/Navigation";
import MainPage from "./components/mainPage/MainPage";
import SignInModal from "./components/modalWindow/SignInModal";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "./actions/userAction";
import RoutesPage from "./RoutesPage";




const App = () => {
    const dispatch = useDispatch()
    const {userDetails} = useSelector(state => state.userReducer)

    // TO DO RUN
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (token){
    //         dispatch(authUser(token))
    //     }
    // }, [])

    return (
        <div className="App">
            <Navigation/>
            <RoutesPage/>
        </div>
    );
}

export default App;
