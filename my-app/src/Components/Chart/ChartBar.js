import React from "react";

import "./ChartBar.css"

const ChartBar= props => {
    let barFillHeight= 30+'%';

    if( true){
        barFillHeight = Math.round( parseFloat(props.value) / parseFloat(props.maxValue) * 100).toString() + '%';
        console.log(props.maxValue)
        console.log(props.value);
        console.log(props.label)
    }


return (
    <div className="chart-bar">
        <div className="chart-bar__inner">
            <div
                className="chart-bar__fill"
                style={{height : barFillHeight}}
            ></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
)
}

export default ChartBar;