import React from "react";
import "./services.css";

const Services = () => {
    //const [toggleState, setToggleState] = useState(0);

    //const toggleTab = (index) => {
        //setToggleState(index);
    //}
    return (
        
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span> 

        <div className="services-container container grid">
        <div className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Web Development</h3>
          <p>Building, Creating and Maintaining. View my portfolio and allow me to get your website online in no time.</p>
          
        </div>

        <div className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Python Development</h3>
          <p>A Python Developer specializes in programming and software development using the Python language.</p>
          
        </div>

        <div className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Software Developer</h3>
          <p>As a software developer experienced in JavaScript, VB.Net, Java and Python, I specialize in Software Application. You can find some of my projects on my GitHub Profile.</p>
          
        </div>

        <div className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">Java Developer</h3>
          <p>Java developers use the Java language for programming and software development.</p>
          
        </div>

        <div className="services_content">
          <i className="uil uil services_icon"></i>
          <h3 className="services_title">IT Technical Support</h3>
          <p>As a software developer experienced in JavaScript, VB.Net, Java, and Python, I specialize in Software Application. You can find some of my projects on my GitHub Profile.</p>
        </div>
        </div>

        </section>
    )
}

export default Services