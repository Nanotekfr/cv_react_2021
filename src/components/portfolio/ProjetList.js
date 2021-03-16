import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Projet from './Projet';

export default class ProjetList extends Component {
    state= {
        projets:portfolioData
    };
    render() {
        let {projets} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">

                </ul>

                <div className="projets">
                    {
                        projets.map(item => {

                            return (
                                <Projet
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
