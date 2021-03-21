import React, { Component } from 'react';

export default class Projet extends Component {
    state= {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let {name, langagesIcons, source, lien, info, picture} = this.props.item;

        return (
            <div className="projet">
                <div className="icons">
                    {langagesIcons.map(icon =>
                    <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo} >
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="lienSite">
                                        <a href={lien} rel="noopener noreferrer" className="button" target="_blank"> Lien vers le site</a>
                                    </div>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code sources</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>

                                <div className="button return" onClick={this.handleInfo}>Retourner au site</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
