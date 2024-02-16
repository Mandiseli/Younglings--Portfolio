import React, { useEffect } from "react";
import "./home.css";
import Social from "./Social";
//import ScrollDown from "./ScrollDown";
//import CV from "../../assets/"
import Data from "./Data";
import Aos from 'aos';



const Home = () => {
    
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social/>
                    
                    <div className="home_img">
                    </div>
                    
                    <Data/>
                </div>
                
                
            </div>
        </section>
    );
}


export default Home