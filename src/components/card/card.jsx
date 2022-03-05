import React from 'react';
import styles from './card.module.css';

const path = process.env.PUBLIC_URL;
const DEFAULT_IMAGE = `${path}/images/default.png`;
const Card = ({card}) => {
    const {where, who, title, date, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    return(
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.date}>{date}</p>
                <p className={styles.where}>{where}</p>
                <p className={styles.who}>{who}</p>
                <p className={styles.message}>{message}</p>
                <img className={styles.pic} src={url} alt="profile photo" />
            </div>
        </li>
    );
};

function getStyles(theme) {
    switch(theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;