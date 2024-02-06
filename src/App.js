import React from "react";
import "./App.css";
import {Router, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from "./components/skills/Skills";


const App = () => {
    return (
        <>
        <Header/>
        
        <main className="main">
            <Router>
                <Route index path='/home' element={<Home/>}/> 
                <Route index path='/about' element={<About/>}/>
                <Route index path='/skills' element={<Skills/>}/>
            </Router>
        </main>
        </>
    )
}

export default App;
