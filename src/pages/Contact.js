import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contacter moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marked-alt"></i>
                            <span className="clickInput">Liévin</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <span className="clickInput">06 26 04 18 02</span>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <span className="clickInput"><a href="mailto:couillet.dylan@gmail.com">couillet.dylan@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/dylan-couillet/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Nanotekfr" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/nanotek_photographie/" target="_blank" rel="noopener noreferrer">
                            <h4>Instagram</h4>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;