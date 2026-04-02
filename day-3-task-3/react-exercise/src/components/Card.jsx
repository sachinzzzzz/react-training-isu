import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title || 'Card Title'}</h2>
            <div>{children || 'Card content goes here.'}</div>
        </div>
    );
};

export default Card;
