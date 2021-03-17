import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Projet from './Projet';

export default class ProjetList extends Component {
    state= {
        projets:portfolioData,
        radios: [
            {id: 1, valeur: "html" },
            {id: 2, valeur: "css" },
            {id: 3, valeur: "javascript"},
            {id: 4, valeur: "react"},
            {id: 5, valeur: "php"}
        ],
        selectedRadio: 'html'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projets, radios, selectedRadio} = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projets">
                    {
                        projets
                        .filter(item => item.langages.includes(selectedRadio))
                        .map(item => {

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
