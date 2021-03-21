import React from 'react';

import Navigation from '../components/Navigation';
import ProjetList from '../components/portfolio/ProjetList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <ProjetList/>
        </div>
    );
};

export default Portfolio;