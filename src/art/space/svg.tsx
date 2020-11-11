// eslint-disable-next-line
import React from 'react';
import styles from './space.module.css';

export const displayMoody = (): JSX.Element => (
    <svg className={styles.space} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="sadAlienhead">
                <ellipse cx="9" cy="1" rx="0" ry="0">
                    <animate attributeName="cx" values="9;-2;" dur="20s" repeatCount="indefinite" />
                    <animate
                        attributeName="cy"
                        values="1;12.5;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate attributeName="rx" values="0;4;" dur="20s" repeatCount="indefinite" />
                    <animate
                        attributeName="ry"
                        values="0;3.5;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </ellipse>
            </clipPath>
        </defs>

        <defs>
            <clipPath id="cut-off-bottom">
                <rect x="9" y="1" width="0" height="0">
                    <animate attributeName="x" values="9;-3.5" dur="20s" repeatCount="indefinite" />
                    <animate
                        attributeName="y"
                        values="1;12.3;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="width"
                        values="0;3;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="height"
                        values="0;1.2;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </rect>
            </clipPath>
        </defs>
        <defs>
            <radialGradient id="alienGradient">
                <stop offset="0%" stopColor="rgb(122, 152, 10)" />
                <stop offset="75%" stopColor="rgb(195, 199, 40)" />
                <stop offset="100%" stopColor="rgb(51, 64, 4)" />
            </radialGradient>
        </defs>
        <defs>
            <radialGradient id="eyesGradient">
                <stop offset="0%" stopColor="rgb(49,57,168)" />
                <stop offset="58%" stopColor="rgb(69,151,230)" />
                <stop offset="100%" stopColor="rgb(161,202,241)" />
            </radialGradient>
        </defs>
        <g className={styles.stars}>
            <circle className="star" fill="white" cx="0" cy="0" r="0.01" />
            <circle className="star" fill="white" cx="1.03" cy="0.9" r="0.01" />
            <circle className="star" fill="white" cx="2.5" cy="9.4" r="0.01" />
            <circle className="star" fill="white" cx="4.1" cy="8.5" r="0.01" />
            <circle className="star" fill="white" cx="8.1" cy="3.0" r="0.01" />
            <circle className="star" fill="white" cx="7.3" cy="5.6" r="0.01" />
            <circle className="star" fill="white" cx="3.3" cy="4.7" r="0.01" />
            <circle className="star" fill="white" cx="9.1" cy="7.8" r="0.01" />
        </g>
        <ellipse className={styles.face} cx="9" cy="1" rx="0" ry="0" clipPath="url(#sadAlienHead)">
            <animate attributeName="cx" values="9;-2" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="1;12;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0;3;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0;4;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse className={`${styles.rightEye} ${styles.eye}`} cx="9" cy="1" rx="0" ry="0">
            <animate attributeName="cx" values="9;-0.8" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="1;11;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0; 0.9;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0; 0.7;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse className={`${styles.leftEye} ${styles.eye}`} cx="9" cy="1" rx="0" ry="0">
            <animate attributeName="cx" values="9;-3.2" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="1;11;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0;0.9;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0;0.7;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse className={styles.sadMouth} cx="9" cy="1" rx="0" ry="0">
            <animate attributeName="cx" values="9;-2" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="1;13.5;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0;1.5;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0;1.2;" dur="20s" repeatCount="indefinite" />
        </ellipse>
    </svg>
);

export const displayHappy = (): JSX.Element => (
    <svg className={styles.space} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="happyAlienHead">
                <ellipse cx="-2" cy="12.5" rx="4" ry="4">
                    <animate attributeName="cx" values="-2;9;" dur="20s" repeatCount="indefinite" />
                    <animate
                        attributeName="cy"
                        values="12.5;1;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate attributeName="rx" values="4;0;" dur="20s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="4;0;" dur="20s" repeatCount="indefinite" />
                </ellipse>
            </clipPath>
        </defs>
        <defs>
            <clipPath id="cut-off-top">
                <rect x="-4" y="13" width="4" height="2">
                    <animate attributeName="x" values="-4;9" dur="20s" repeatCount="indefinite" />
                    <animate attributeName="y" values="13;1;" dur="20s" repeatCount="indefinite" />
                    <animate
                        attributeName="width"
                        values="4;0;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="height"
                        values="2;0;"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </rect>
            </clipPath>
        </defs>
        <defs>
            <radialGradient id="alienGradient">
                <stop offset="0%" stopColor="rgb(122, 152, 10)" />
                <stop offset="75%" stopColor="rgb(195, 199, 40)" />
                <stop offset="100%" stopColor="rgb(51, 64, 4)" />
            </radialGradient>
        </defs>
        <defs>
            <radialGradient id="eyesGradient">
                <stop offset="0%" stopColor="rgb(49,57,168)" />
                <stop offset="58%" stopColor="rgb(69,151,230)" />
                <stop offset="100%" stopColor="rgb(161,202,241)" />
            </radialGradient>
        </defs>
        <g className={styles.stars}>
            <circle className="star" fill="white" cx="0" cy="0" r="0.01" />
            <circle className="star" fill="white" cx="1.03" cy="0.9" r="0.01" />
            <circle className="star" fill="white" cx="2.5" cy="9.4" r="0.01" />
            <circle className="star" fill="white" cx="4.1" cy="8.5" r="0.01" />
            <circle className="star" fill="white" cx="8.1" cy="3.0" r="0.01" />
            <circle className="star" fill="white" cx="7.3" cy="5.6" r="0.01" />
            <circle className="star" fill="white" cx="3.3" cy="4.7" r="0.01" />
            <circle className="star" fill="white" cx="9.1" cy="7.8" r="0.01" />
        </g>
        <ellipse
            className={styles.face}
            cx="-2.0"
            cy="12.0"
            rx="3.0"
            ry="4"
            clipPath="url(#happyAlienHead)"
        >
            <animate attributeName="cx" values="-2.0;9.0" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="12.0;1.0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="3.0; 0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="4.0; 0;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse
            className={`${styles.rightEye} ${styles.eye}`}
            cx="-0.8"
            cy="11.0"
            rx="0.9"
            ry="0.7"
        >
            <animate attributeName="cx" values="-0.8;9.0" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="11.0;1.0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0.9; 0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0.7; 0;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse
            className={`${styles.leftEye} ${styles.eye}`}
            cx="-3.2"
            cy="11.0"
            rx="0.9"
            ry="0.7"
        >
            <animate attributeName="cx" values="-3.2;9" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="11;1;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="0.9; 0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="0.7; 0;" dur="20s" repeatCount="indefinite" />
        </ellipse>
        <ellipse className={styles.mouth} cx="-2" cy="13" rx="1.5" ry="1.2">
            <animate attributeName="cx" values="-2;9" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="13;1;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="rx" values="1.5; 0;" dur="20s" repeatCount="indefinite" />
            <animate attributeName="ry" values="1.2; 0;" dur="20s" repeatCount="indefinite" />
        </ellipse>
    </svg>
);
