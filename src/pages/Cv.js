import React from 'react';
import Navigation from '../components/Navigation';
import Langages from '../components/cv/Langages';
import Experiences from '../components/cv/Experiences';
import AutreCompetences from '../components/cv/AutreCompetences';
import Hobbies from '../components/cv/Hobbies';

const Cv = () => {
    return (
        <div className="cv">
            <Navigation/>
            <div className="cvContent">
                <Langages />
                <Experiences />
                <AutreCompetences />
                <Hobbies />
            </div>
        </div>
    );
};

export default Cv;