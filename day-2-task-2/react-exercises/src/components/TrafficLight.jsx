import React from 'react';
import './TrafficLight.css';

const TrafficLight = ({ color }) => {
    let message = "";
    let colorClass = "";

    switch (color?.toLowerCase()) {
        case 'red':
            message = "Stop";
            colorClass = "traffic-red";
            break;
        case 'yellow':
            message = "Slow Down";
            colorClass = "traffic-yellow";
            break;
        case 'green':
            message = "Go";
            colorClass = "traffic-green";
            break;
        default:
            message = "Invalid Color";
            colorClass = "traffic-invalid";
    }

    return (
        <div className="component-container">
            <h3>Traffic Light ({color})</h3>
            <div className="traffic-box">
                <div className={`light ${color?.toLowerCase() === 'red' ? 'on-red' : ''}`}></div>
                <div className={`light ${color?.toLowerCase() === 'yellow' ? 'on-yellow' : ''}`}></div>
                <div className={`light ${color?.toLowerCase() === 'green' ? 'on-green' : ''}`}></div>
            </div>
            <div className={`traffic-message ${colorClass}`}>
                {message}
            </div>
        </div>
    );
};

export default TrafficLight;
