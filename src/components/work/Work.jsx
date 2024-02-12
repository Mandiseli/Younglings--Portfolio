import React from "react";
import "./work.css";
import Works from "./Works";
//import WorkItems from "./WorkItems";
//import Data from "../home/Data";

const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">My recent work</span>

            <Works/>
            
            
        </section>
    )
}

export default Work



