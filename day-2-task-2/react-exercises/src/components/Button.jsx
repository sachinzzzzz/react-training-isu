import React from 'react';
import './Button.css';

const Button = ({ label, color }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className="custom-button"
        >
            {label}
        </button>
    );
};

export default Button;
