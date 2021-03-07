import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/pp.jpg" alt="Photo de profil"/>
                    <h3>Dylan Couillet</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv" activeClassName="navActive">
                            <i className="fas fa-address-card"></i>
                            <span>Curriculum vitae</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        <div className="socialNetwork">
            <ul>
                <li>
                    <a href="https://github.com/Nanotekfr" target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dylan-couillet/" target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/nanotek_photographie/" target="_blank"
                    rel="noopener noreferrer" >
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <div className="copyright">
                <p>Dylan Couillet - 2021</p>
            </div>
        </div>
    </div>
    );
};

export default Navigation;