import React, { useState } from 'react';

const HoverDiv = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="component-container">
            <h3>Hover to Change Color</h3>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    backgroundColor: isHovered ? 'red' : 'blue',
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    margin: '10px auto'
                }}
            >
                {isHovered ? 'RED' : 'BLUE'}
            </div>
        </div>
    );
};

export default HoverDiv;
