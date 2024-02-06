import React from "react";
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/myCV.pdf"
import Info from "./Info";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="" className="about_img" />

                <div className="about_data">
                    <Info/>

                    <p className="about_description">i am energetic, goal-driven National Diploma in Information Technology 
                    Graduate with a solid academic background specializing in Business 
                    Applications mainly Information Systems, Development Software, Business 
                    Analysis and Technical support. My focus is on building my career in Tech space 
                    and learning as much as I can. I am seeking for vacant position which can be a 
                    graduate internship or entry level job in the field that aligns with my studies.
                    </p>

                    <a download="" href={CV} className="button button--flex">Download CV</a>


                </div>

            </div>
        </section>
        
    )
}

export default About