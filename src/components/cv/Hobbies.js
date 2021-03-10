import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centre d'intérest</h3>
            <ul>
                <li className="hobby"><i className="fas fa-check-chess"></i></li>
                <span>Les Echecs</span>
                <li className="hobby"><i className="fas fa-frog"></i></li>
                <span>La culture japonaise</span>
                <li className="hobby"><i className="fas fa-mind"></i></li>
                <span>La psychologie</span>
                <li className="hobby"><i className="fas fa-jeu"></i></li>
                <span>Les jeux vidéo</span>
            </ul>
        </div>
    );
};

export default Hobbies;