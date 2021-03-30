import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Langages extends Component {
    state = {
        langages: [
            {id: 1, value: "Html", xp: 2},
            {id: 2, value: "Css", xp: 1.5},
            {id: 3, value: "Javascript", xp: 1},
            {id: 4, value: "Php", xp: 1}
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp: 2},
            {id: 2, value: "Sass", xp: 0.5},
            {id: 3, value: "React", xp: 1},
            {id: 4, value: "Symfony", xp: 1}
        ]
    }
    render() {
        let {langages, frameworks} = this.state;
        return (
            <div className="langagesFrameworks">
                <ProgressBar
                langages={langages}
                className="langagesDisplay"
                title="langages"

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