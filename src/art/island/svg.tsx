// eslint-disable-next-line
import React from 'react';
import styles from './island.module.css';

export const displayMoody = (): JSX.Element => (
    <svg className={styles.svgMoody} viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="islandClip">
                <rect x="0.5" y="7" width="6" height="1" />
            </clipPath>
            <linearGradient id="oceanBackground" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#709CCC" stopOpacity="0.3">
                    <animate
                        attributeName="offset"
                        values="0;.1;.3;.4;.5;.7;.6;.5;.4;.2;.1;0;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-opacity"
                        values=".3;.4;.6;.5;.4;.3;.2;.1;.2;.3;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-color"
                        values="#709CCC;#63ACFF;#177BF2;#177BF2;#3E97FF;#63ACFF;#709CCC;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </stop>

                <stop offset="70%" stopColor="#0F5BB2" stopOpacity="1">
                    <animate
                        attributeName="offset"
                        values="0.7;0.8;0.9;0.95;0.95;0.9;0.8;.7;.6;.5;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-opacity"
                        values="0.7;.6;.5;.4;.5;.7;.8;.9;.95;0.9;0.8;.9;1;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-color"
                        values="#0F5BB2;#037ade;#177BF2;#3E97FF;#63ACFF;#709CCC;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </stop>
            </linearGradient>
            <linearGradient id="treeTrunk" x1="100%" y1="100%">
                <stop offset="5%" stopColor="rgb(133,91,64)" />
                <stop offset="31%" stopColor="rgb(128,90,54)" />
                <stop offset="69%" stopColor="rgb(128,113,83)" />
                <stop offset="100%" stopColor="rgb(236,214,171)" />
            </linearGradient>
            <radialGradient id="leafGradient">
                <stop offset="0%" stopColor="#8fc791" />
                <stop offset="8%" stopColor="#18831a" />
                <stop offset="26%" stopColor="#148117" />
                <stop offset="65%" stopColor="#177c1a" />
                <stop offset="85%" stopColor="#1e541f" />
            </radialGradient>
            <radialGradient id="dropGradient">
                <stop offset="0%" stopColor="rgb(45,164,253)" />
                <stop offset="64%" stopColor="rgb(34,102,195)" />
                <stop offset="100%" stopColor="rgb(30,80,150)" />
            </radialGradient>
            <radialGradient id="groundGradient">
                <stop offset="0%" stopColor="rgb(31,111,38)" />
                <stop offset="100%" stopColor="rgb(62,140,50)" />
            </radialGradient>
        </defs>
        <ellipse className={styles.island} cx="3.5" cy="8" rx="3" ry="1" />
        <rect className={styles.ocean} x="0" y="8" width="10" height="15" />
        <rect className={styles.trunk} x="2.5" y="3.2" width="0.5" height="4" />
        <ellipse className={styles.leafContainer} cx="2.75" cy="3" rx="2.5" ry="1.3" />
        <circle className={styles.leaf} cx="1.2" cy="2.3" r="0.3" />
        <circle className={styles.leaf} cx="2.7" cy="2" r="0.3" />
        <circle className={styles.leaf} cx="4" cy="3.1" r="0.3" />
        <circle className={styles.leaf} cx="1.7" cy="2.9" r="0.3" />
        <circle className={styles.leaf} cx="3.4" cy="4" r="0.3" />
        <circle className={styles.leaf} cx="3" cy="3.5" r="0.3" />
        <circle className={styles.drop} cx="1" cy="-1" r=".15">
            <animate
                id="drop1"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="3s"
                repeatCount="indefinite"
                begin="3s;drop1.end+3s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3s"
                repeatCount="indefinite"
                begin="3s;drop1.end+3s"
            />
        </circle>
        <circle className={styles.drop} cx="2.2" cy="-1" r=".15">
            <animate
                id="drop2"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;"
                dur="3.3s"
                repeatCount="indefinite"
                begin="0s;drop2.end+1s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3.3s"
                repeatCount="indefinite"
                begin="0s;drop2.end+1s"
            />
        </circle>
        <circle className={styles.drop} cx="3" cy="-1" r=".15">
            <animate
                id="drop3"
                attributeName="cy"
                values="-1;15"
                dur="1s"
                repeatCount="indefinite"
                begin="1s;drop3.end+1.2s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1s"
                repeatCount="indefinite"
                begin="1s;drop3.end+1.2s"
            />
        </circle>
        <circle className={styles.drop} cx="1.2" cy="-1" r=".15">
            <animate
                id="drop15"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.3s"
                begin="1s;drop15.end+1.2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.3s"
                begin="1s;drop15.end+1.2s"
                repeatCount="indefinite"
            />
        </circle>
        <circle className={styles.drop} cx="4.7" cy="-1" r=".15">
            <animate
                id="drop4"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;15"
                dur="3s"
                repeatCount="indefinite"
                begin="0.6s;drop4.end+4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3s"
                repeatCount="indefinite"
                begin="0.6s;drop4.end+4s"
            />
        </circle>
        <circle className={styles.drop} cx="5.1" cy="-1" r=".15">
            <animate
                id="drop5"
                attributeName="cy"
                values="-1;0;1;2;4;6;"
                dur="1.9s"
                begin="2.1s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.9s"
                repeatCount="indefinite"
                begin="2.1s"
            />
        </circle>
        <circle className={styles.drop} cx="5.7" cy="-1" r=".15">
            <animate
                id="drop6"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.9s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.9s"
                repeatCount="indefinite"
            />
        </circle>
        <circle className={styles.drop} cx="2.7" cy="-1" r=".15">
            <animate
                id="drop14"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.9s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.9s"
                repeatCount="indefinite"
            />
        </circle>
        <circle className={styles.drop} cx="6.3" cy="-1" r=".15">
            <animate
                id="drop7"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="2s"
                repeatCount="indefinite"
                begin="0s;drop7.end+0.9s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="2s"
                repeatCount="indefinite"
                begin="0s;drop7.end+0.9s"
            />
        </circle>
        <circle className={styles.drop} cx="6.9" cy="-1" r=".15">
            <animate
                id="drop8"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop8.end+0.2s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop8.end+0.2s"
            />
        </circle>
        <circle className={styles.drop} cx="7.1" cy="-1" r=".15">
            <animate
                id="drop9"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur=".3s"
                repeatCount="indefinite"
                begin="1.2s;drop9.end+0.8s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur=".3s"
                repeatCount="indefinite"
                begin="1.2s;drop9.end+0.8s"
            />
        </circle>
        <circle className={styles.drop} cx="8.3" cy="-1" r=".15">
            <animate
                id="drop10"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="3.7s"
                repeatCount="indefinite"
                begin="0.3s;drop10.end+0.1s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3.7s"
                repeatCount="indefinite"
                begin="0.3s;drop10.end+0.1s"
            />
        </circle>
        <circle className={styles.drop} cx="9.5" cy="-1" r=".15">
            <animate
                id="drop11"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop11.end+1.4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop11.end+1.4s"
            />
        </circle>
        <circle className={styles.drop} cx="9.5" cy="-1" r=".15">
            <animate
                id="drop13"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop13.end+1.4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop13.end+1.4s"
            />
        </circle>
        <circle className={styles.drop} cx="9.7" cy="-1" r=".15">
            <animate
                id="drop12"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1s"
                repeatCount="indefinite"
                begin="2s;drop12.end+0.4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1s"
                repeatCount="indefinite"
                begin="2s;drop12.end+0.4s"
            />
        </circle>
    </svg>
);

export const displayHappy = (): JSX.Element => (
    <svg className={styles.svgHappy} viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="islandClip">
                <rect x="0.5" y="7" width="6" height="1" />
            </clipPath>
            <linearGradient id="oceanBackground" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#709CCC" stopOpacity="0.3">
                    <animate
                        attributeName="offset"
                        values="0;.1;.3;.4;.5;.7;.6;.5;.4;.2;.1;0;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-opacity"
                        values=".3;.4;.6;.5;.4;.3;.2;.1;.2;.3;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-color"
                        values="#709CCC;#63ACFF;#177BF2;#177BF2;#3E97FF;#63ACFF;#709CCC;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </stop>

                <stop offset="70%" stopColor="#0F5BB2" stopOpacity="1">
                    <animate
                        attributeName="offset"
                        values="0.7;0.8;0.9;0.95;0.95;0.9;0.8;.7;.6;.5;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-opacity"
                        values="0.7;.6;.5;.4;.5;.7;.8;.9;.95;0.9;0.8;.9;1;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stop-color"
                        values="#0F5BB2;#037ade;#177BF2;#3E97FF;#63ACFF;#709CCC;"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </stop>
            </linearGradient>
            <linearGradient id="treeTrunk" x1="100%" y1="100%">
                <stop offset="5%" stopColor="rgb(133,91,64)" />
                <stop offset="31%" stopColor="rgb(128,90,54)" />
                <stop offset="69%" stopColor="rgb(128,113,83)" />
                <stop offset="100%" stopColor="rgb(236,214,171)" />
            </linearGradient>
            <radialGradient id="leafGradient">
                <stop offset="0%" stopColor="#8fc791" />
                <stop offset="8%" stopColor="#18831a" />
                <stop offset="26%" stopColor="#148117" />
                <stop offset="65%" stopColor="#177c1a" />
                <stop offset="85%" stopColor="#1e541f" />
            </radialGradient>
            <radialGradient id="dropGradient">
                <stop offset="0%" stopColor="rgb(45,164,253)" />
                <stop offset="64%" stopColor="rgb(34,102,195)" />
                <stop offset="100%" stopColor="rgb(30,80,150)" />
            </radialGradient>
            <radialGradient id="groundGradient">
                <stop offset="0%" stopColor="rgb(31,111,38)" />
                <stop offset="100%" stopColor="rgb(62,140,50)" />
            </radialGradient>
        </defs>
        <ellipse className={styles.island} cx="3.5" cy="8" rx="3" ry="1" />
        <rect className={styles.ocean} x="0" y="8" width="10" height="15" />
        <rect className={styles.trunk} x="2.5" y="3.2" width="0.5" height="4" />
        <ellipse className={styles.leafContainer} cx="2.75" cy="3" rx="2.5" ry="1.3" />
        <circle className={styles.leaf} cx="1.2" cy="2.3" r="0.3" />
        <circle className={styles.leaf} cx="2.7" cy="2" r="0.3" />
        <circle className={styles.leaf} cx="4" cy="3.1" r="0.3" />
        <circle className={styles.leaf} cx="1.7" cy="2.9" r="0.3" />
        <circle className={styles.leaf} cx="3.4" cy="4" r="0.3" />
        <circle className={styles.leaf} cx="3" cy="3.5" r="0.3" />
        <circle className={styles.drop} cx="1" cy="-1" r=".15">
            <animate
                id="drop1"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1s"
                repeatCount="indefinite"
                begin="3s;drop1.end+6s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1s"
                repeatCount="indefinite"
                begin="3s;drop1.end+6s"
            />
        </circle>
        {/* <circle className={styles.drop} cx="2.2" cy="-1" r=".15">
            <animate
                id="drop2"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;"
                dur="3.3s"
                repeatCount="indefinite"
                begin="0s;drop2.end+1s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3.3s"
                repeatCount="indefinite"
                begin="0s;drop2.end+1s"
            />
        </circle> */}
        <circle className={styles.drop} cx="3" cy="-1" r=".15">
            <animate
                id="drop3"
                attributeName="cy"
                values="-1;15"
                dur="1s"
                repeatCount="indefinite"
                begin="1s;drop3.end+9s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1s"
                repeatCount="indefinite"
                begin="1s;drop3.end+9s"
            />
        </circle>
        {/* <circle className={styles.drop} cx="1.2" cy="-1" r=".15">
            <animate
                id="drop15"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.3s"
                begin="1s;drop15.end+1.2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.3s"
                begin="1s;drop15.end+1.2s"
                repeatCount="indefinite"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="4.7" cy="-1" r=".15">
            <animate
                id="drop4"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;15"
                dur="3s"
                repeatCount="indefinite"
                begin="0.6s;drop4.end+4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3s"
                repeatCount="indefinite"
                begin="0.6s;drop4.end+4s"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="5.1" cy="-1" r=".15">
            <animate
                id="drop5"
                attributeName="cy"
                values="-1;0;1;2;4;6;"
                dur="1.9s"
                begin="2.1s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.9s"
                repeatCount="indefinite"
                begin="2.1s"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="5.7" cy="-1" r=".15">
            <animate
                id="drop6"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.9s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.9s"
                repeatCount="indefinite"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="2.7" cy="-1" r=".15">
            <animate
                id="drop14"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="0.9s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="0.9s"
                repeatCount="indefinite"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="6.3" cy="-1" r=".15">
            <animate
                id="drop7"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="2s"
                repeatCount="indefinite"
                begin="0s;drop7.end+4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="2s"
                repeatCount="indefinite"
                begin="0s;drop7.end+4s"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="6.9" cy="-1" r=".15">
            <animate
                id="drop8"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop8.end+0.2s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop8.end+0.2s"
            />
        </circle> */}
        {/* <circle className={styles.drop} cx="7.1" cy="-1" r=".15">
            <animate
                id="drop9"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur=".3s"
                repeatCount="indefinite"
                begin="1.2s;drop9.end+0.8s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur=".3s"
                repeatCount="indefinite"
                begin="1.2s;drop9.end+0.8s"
            />
        </circle> */}
        <circle className={styles.drop} cx="8.3" cy="-1" r=".15">
            <animate
                id="drop10"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="3.7s"
                repeatCount="indefinite"
                begin="0.3s;drop10.end+4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="3.7s"
                repeatCount="indefinite"
                begin="0.3s;drop10.end+4s"
            />
        </circle>
        {/* <circle className={styles.drop} cx="9.5" cy="-1" r=".15">
            <animate
                id="drop11"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop11.end+1.4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop11.end+1.4s"
            />
        </circle> */}
        <circle className={styles.drop} cx="9.5" cy="-1" r=".15">
            <animate
                id="drop13"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop13.end+5s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1.4s"
                repeatCount="indefinite"
                begin="0s;drop13.end+5s"
            />
        </circle>
        {/* <circle className={styles.drop} cx="9.7" cy="-1" r=".15">
            <animate
                id="drop12"
                attributeName="cy"
                values="-1;0;1;2;4;6;9;12;"
                dur="1s"
                repeatCount="indefinite"
                begin="2s;drop12.end+0.4s"
            />
            <animate
                attributeName="opacity"
                values="1;.7;.5;.3;0;"
                dur="1s"
                repeatCount="indefinite"
                begin="2s;drop12.end+0.4s"
            />
        </circle> */}
    </svg>
);
