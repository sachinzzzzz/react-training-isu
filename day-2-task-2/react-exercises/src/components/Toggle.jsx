import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="component-container">
            <p className="toggle-text">{isOn ? 'ON' : 'OFF'}</p>
            <button
                onClick={() => setIsOn(!isOn)}
                className="toggle-button"
            >
                Toggle state
            </button>
        </div>
    );
};

export default Toggle;
