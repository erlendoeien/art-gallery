// eslint-disable-next-line
import React from 'react';
import Sun from '../svg/sun.png';
import HappyFace from '../svg/emoji.png';
import RainDrop from '../svg/water.png';
import SadFace from '../svg/sad.png';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => (
    <div className={styles.wrapper}>
        <div className={styles.landingpageText}>
            <h1>Velkommen til vektorgalleriet!</h1>
            <h2>Stedet der du kan tilpasse kunsten til humøret ditt!</h2>
            <a href="/utstilling">Ta en titt på utstillingen!</a>
        </div>
        <div className={styles.illustration}>
            <div className={styles.glad}>
                <img className={styles.landingpageIconsHappy} src={Sun} alt="" />
                <img className={styles.landingpageIconsHappy} src={HappyFace} alt="" />
            </div>
            <div className={styles.trist}>
                <img className={styles.landingpageIconsSad} src={RainDrop} alt="" />
                <img className={styles.landingpageIconsSad} src={SadFace} alt="" />
            </div>
        </div>
    </div>
);

export default LandingPage;
