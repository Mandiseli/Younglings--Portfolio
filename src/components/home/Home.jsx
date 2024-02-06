import React from "react";
import "./home.css";
import Social from "./Social";
import ScrollDown from "./ScrollDown";
//import CV from "../../assets/"
import Data from "./Data";



const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social/>
                    
                    <div className="home_img">
                        Home page
                    </div>
                    
                    <Data/>
                </div>
                
                <ScrollDown/>
            </div>
        </section>
    );
}


export default Home