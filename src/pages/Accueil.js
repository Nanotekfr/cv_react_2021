import React from 'react';
import Navigation from '../components/Navigation';

const Accueil = () => {
    return (
        <div className="acceuil">
        <Navigation />
            <div className="acceuilContent">
                <div className="content">
                    <h1>Dylan Couillet</h1>
                    <h2>Développeur MERN</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank" rel="noopener noreferrer">Télécharger cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;