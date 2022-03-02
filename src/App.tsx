import React from 'react';
import './App.scss';
import Navigation from "./components/navigation/Navigation";
import MainPage from "./components/mainPage/MainPage";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <MainPage/>
        </div>
    );
}

export default App;
