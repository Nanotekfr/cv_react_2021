import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Langages extends Component {
    state = {
        langages: [
            {id: 1, value: "Html", xp: 1},
            {id: 2, value: "Css", xp: 2},
            {id: 3, value: "Javascript", xp: 1.5},
            {id: 4, value: "Php", xp: 2.5}
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp: 3},
            {id: 2, value: "Sass", xp: 0.5},
            {id: 3, value: "React", xp: 2},
            {id: 4, value: "Symfony", xp: 2}
        ]
    }
    render() {
        let {langages, frameworks} = this.state;
        return (
            <div className="langagesFramworks">
                <ProgressBar
                langages={langages}
                className="langageDisplay"
                title="langage"

                />
                <ProgressBar
                langages={frameworks}
                className="frameworksDisplay"
                title="frameworks"

                />
            </div>
        );
    }
}

export default Langages;