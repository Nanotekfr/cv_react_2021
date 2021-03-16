import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centre d'intérêt</h3>
            <ul>
                <li className="hobby"><i className="fas fa-chess"></i>    <span>Les Echecs</span></li>
                <li className="hobby"><i className="fas fa-frog"></i><span>La culture japonaise</span></li>
                <li className="hobby"><i className="fas fa-brain"></i><span>La psychologie</span></li>
                <li className="hobby"><i className="fas fa-gamepad"></i> <span>Les jeux vidéo</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;