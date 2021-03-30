import React from 'react';
const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="annee">
                <span>Année d'expériences</span>
                <span>moins de 6 mois</span>
                <span>1 an</span>
                <span>1 an et demi</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    props.langages.map((item) => {
                        let xpAnnee = 2;
                        let progressBar = item.xp / xpAnnee * 100 + '%';

                        return (
                            <div key={item.id} className="langagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{
                                    width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;