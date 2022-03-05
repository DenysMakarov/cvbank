import React, {useState} from 'react';
import './App.scss';
import Navigation from "./components/navigation/Navigation";
import MainPage from "./components/mainPage/MainPage";
import SignInModal from "./components/modalWindow/SignInModal";




const App = () => {

    return (
        <div className="App">
            <Navigation/>
            <MainPage/>
        </div>
    );
}

export default App;
