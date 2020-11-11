// eslint-disable-next-line
import React from 'react';

export const displayMoody = (): JSX.Element => (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="8" fill="#AFE3E7" />
        <rect y="0.5" width="10" height="4" fill="#7c203a">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #2d4059"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="1.2" width="10" height="3" fill="#f85959">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #5eaaa8; #5eaaa8"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="2" width="10" height="3" fill="#ff9f68">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7;#AFE3E7;#a3d2ca;#a3d2ca;#a3d2ca"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="2.8" width="10" height="3" fill="#feff89">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #e8ded2; #e8ded2; #056676; #056676"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <circle cx="5" strokeWidth="0.1" stroke="#FFBE72" cy="4" r="1" fill="#E58D25">
            <animate
                attributeName="cy"
                values="2; 3; 4; 5; 6;6.1;6.2;6.3;6.4"
                dur="11s"
                repeatCount="indefinite"
            />
        </circle>
        <rect y="5" width="10" height="3" fill="#36484D" />
        <polygon points="5, 5.2, 12, 5.2, 8.5, 3" fill="#36484D" />
        <polygon points="5, 5.2, -2, 6.2, 3, 3" fill="#36484D" />
        <polygon points="1, 3.4, 1.6, 3.4, 1.3, 3" fill="#36484D" />
        <polygon points="1, 3.6, 1.6, 3.6, 1.3, 3.2" fill="#36484D" />
        <polygon points="1, 3.8, 1.6, 3.8, 1.3, 3.4" fill="#36484D" />
        <rect y="3.8" x="1.25" width="0.1" height="0.3" fill="#36484D" />
        <polygon points="7.5, 5.2, 12, 5.2, 9.5, 2.5" fill="#36484D" />
    </svg>
);

export const displayHappy = (): JSX.Element => (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="8" fill="#AFE3E7" />
        <rect y="0.5" width="10" height="4" fill="#7c203a">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #7c203a"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="1.2" width="10" height="3" fill="#f85959">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #AFE3E7; #AFE3E7; #f85959; #f85959"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="2" width="10" height="3" fill="#ff9f68">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7;#AFE3E7;#ff9f68;#ff9f68;#ff9f68"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <rect y="2.8" width="10" height="3" fill="#feff89">
            <animate
                attributeName="fill"
                values="#AFE3E7; #AFE3E7; #feff89; #feff89; #ff7171; #ff7171"
                dur="10s"
                repeatCount="indefinite"
            />
        </rect>
        <circle cx="5" strokeWidth="0.1" stroke="#FFBE72" cy="4" r="1" fill="#E58D25">
            <animate
                attributeName="cy"
                values="2; 3; 4; 5; 6;6.1;6.2;6.3;6.4"
                dur="11s"
                repeatCount="indefinite"
            />
        </circle>
        <rect y="5" width="10" height="3" fill="#36484D" />
        <polygon points="5, 5.2, 12, 5.2, 8.5, 3" fill="#36484D" />
        <polygon points="5, 5.2, -2, 6.2, 3, 3" fill="#36484D" />
        <polygon points="1, 3.4, 1.6, 3.4, 1.3, 3" fill="#36484D" />
        <polygon points="1, 3.6, 1.6, 3.6, 1.3, 3.2" fill="#36484D" />
        <polygon points="1, 3.8, 1.6, 3.8, 1.3, 3.4" fill="#36484D" />
        <rect y="3.8" x="1.25" width="0.1" height="0.3" fill="#36484D" />
        <polygon points="7.5, 5.2, 12, 5.2, 9.5, 2.5" fill="#36484D" />
    </svg>
);
