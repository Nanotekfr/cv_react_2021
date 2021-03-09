import React from 'react';
const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="Année">
                <span>Année d'expériences</span>
                <span>1 an</span>
                <span>2 an</span>
            </div>

            <div>
                {
                    props.langages.map((item) => {
                        let xpAnnee = 3;
                        let progressBar = item.xp / xpAnnee * 100 + '%';

                        return (
                            <div key={item.id} className="langageList">
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