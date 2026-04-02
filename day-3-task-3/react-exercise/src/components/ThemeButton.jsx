import React, { useState } from 'react';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
    const [theme, setTheme] = useState('light');

    // Change the body class automatically when the theme state changes to toggle the global background
    React.useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            className={`${styles.base} ${theme === 'light' ? styles.light : styles.dark}`}
            onClick={toggleTheme}
        >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeButton;
