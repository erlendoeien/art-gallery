// eslint-disable-next-line
import React, { FunctionComponent, useContext } from 'react';
import styles from './Settings.module.css';
import { ThemeContext } from '../ThemeProvider';
import happy from '../../svg/emoji.png';
import sad from '../../svg/sad.png';
import sun from '../../svg/sun.png';
import moon from '../../svg/moon.png';
import { Mood, moodToggled } from './moodSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Settings: FunctionComponent = () => {
    const { fontColor, toggleTheme, isDarkTheme } = useContext(ThemeContext);
    const { mood } = useAppSelector((state) => state.mood);
    const dispatch = useAppDispatch();
    const isMoody = mood === Mood.moody;

    return (
        <div>
            <h2 style={{ color: fontColor }}>Tilpass siden</h2>
            <h3 style={{ color: fontColor }}>Velg mellom dark mode eller light mode:</h3>
            <div className={styles.flexWrapper}>
                <label htmlFor="darkmode" className={styles.switch}>
                    <input
                        id="darkmode"
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={isDarkTheme}
                    />
                    <span className={styles.slider} />
                </label>
                <img
                    className={styles.themeIcon}
                    src={isDarkTheme ? moon : sun}
                    alt="Sol eller måne"
                />
            </div>

            <h3 style={{ color: fontColor }}>
                {' '}
                Hvilket humør er du i dag? <br />
                Velg mellom glade eller triste kunstverk:
            </h3>
            <div className={styles.flexWrapper}>
                <label htmlFor="mood" className={styles.switch}>
                    <input
                        id="mood"
                        type="checkbox"
                        onChange={() => dispatch(moodToggled())}
                        checked={isMoody}
                    />
                    <span className={styles.slider} />
                </label>
                <img
                    className={styles.themeIcon}
                    src={isMoody ? sad : happy}
                    alt="Glad eller Trist"
                />
            </div>
        </div>
    );
};

export default Settings;
