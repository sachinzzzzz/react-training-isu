import React, { useState } from 'react';
import './InputMirror.css';

const InputMirror = () => {
    const [text, setText] = useState('');

    return (
        <div className="component-container">
            <h3>Input Mirror</h3>
            <div className="input-group">
                <label htmlFor="mirror-input">Type something:</label>
                <input
                    id="mirror-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mirror-input"
                    placeholder="Start typing..."
                />
            </div>
            <div className="mirror-output">
                <p>{text || 'Your text will appear here...'}</p>
            </div>
        </div>
    );
};

export default InputMirror;
