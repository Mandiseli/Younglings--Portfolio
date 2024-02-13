import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get In Touch</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">mandiseli@outlook.com</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button icon"></i> </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">0631095231</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button icon"></i> </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-messenger contact_card-icon"></i>

                            <h3 className="contact_card-title">Messenger</h3>
                            <span className="contact_card-data">Mandiseli Mfeya</span>

                            <a href="#" className="contact_button">Write me <i 
                            className="bx bx-right-arrow-alt 
                            contact_button icon"></i> </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3>

                    <form className="contact_form">
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact_form-input"
                            placeholder="Full-Name" />
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag">Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact_form-input"
                            placeholder="Full-Name" />
                        </div>

                        <div className="contact_form-div">
                            <label className="contact_form-tag">Projects</label>
                            <textarea 
                            name="project" 
                            cols="30" 
                            rows="10"
                            className="contact_form-input"
                            placeholder="Write your message"></textarea>
                        </div>

                        <button className="button button-flex">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact