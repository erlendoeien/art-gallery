// eslint-disable-next-line
import React from 'react';

export const displayMoody = (): JSX.Element => (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect height="10" width="10" fill="#1d2d50" />
        <circle r="0.5" cx="3" cy="5" fill="white" />
        <circle r="0.7" cx="3" cy="6" fill="white" />
        <circle r="0.05" cx="3.1" cy="4.9" />
        <circle r="0.05" cx="3.4" cy="4.9" />
        <line x1="3" x2="3.2" y1="5.8" y2="6.5" strokeWidth="0.07" stroke="black">
            <animate
                attributeName="x2"
                values="3.2; 3.3; 3.4; 3.3;3.2; 3.1; 3.0; 3.1; 3.2"
                dur="3s"
                repeatCount="indefinite"
            />
        </line>
        <circle r="9" fill="white" cy="15.4" cx="5" />
        <path d="M 3.1 5.2 q 0.1 -0.1 0.4 0" />
        <rect width="0.1" height="0.15" x="3.3" y="5.05" fill="white" />
        <polygon points="3.25,4.95, 3.25, 5.05, 3.9, 5.05" fill="orange" />

        <circle r="0.05" cx="1" fill="white">
            <animate attributeName="cy" values="1; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="1.5" fill="white">
            <animate attributeName="cy" values="3; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="1; 4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2" fill="white">
            <animate attributeName="cy" values="0; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="2; 5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2.5" fill="white">
            <animate attributeName="cy" values="4; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="3; 6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3" fill="white">
            <animate attributeName="cy" values="7; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="4; 7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3.5" fill="white">
            <animate attributeName="cy" values="2; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="5; 8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="4" fill="white">
            <animate attributeName="cy" values="0; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle r="0.05" cx="1" fill="white">
            <animate attributeName="cy" values="1; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="1.5" fill="white">
            <animate attributeName="cy" values="3; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="1; 4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2" fill="white">
            <animate attributeName="cy" values="0; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="2; 5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2.5" fill="white">
            <animate attributeName="cy" values="4; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="3; 6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3" fill="white">
            <animate attributeName="cy" values="7; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="4; 7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3.5" fill="white">
            <animate attributeName="cy" values="2; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="5; 8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="4" fill="white">
            <animate attributeName="cy" values="0; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
);

export const displayHappy = (): JSX.Element => (
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect height="10" width="10" fill="pink" />
        <circle r="0.5" cx="3" cy="5" fill="white" />
        <circle r="0.7" cx="3" cy="6" fill="white" />
        <circle r="0.05" cx="3.1" cy="4.9" />
        <circle r="0.05" cx="3.4" cy="4.9" />
        <line x1="3" x2="3.2" y1="5.8" y2="6.5" strokeWidth="0.07" stroke="black">
            <animate
                attributeName="x2"
                values="3.2; 3.3; 3.4; 3.3;3.2; 3.1; 3.0; 3.1; 3.2"
                dur="3s"
                repeatCount="indefinite"
            />
        </line>
        <circle r="9" fill="white" cy="15.4" cx="5" />
        <path d="M 3.1 5.1 q 0.1 0.6 0.4 0" />
        <rect width="0.1" height="0.15" x="3.3" y="5.05" fill="white" />
        <polygon points="3.25,4.95, 3.25, 5.05, 3.9, 5.05" fill="orange" />

        <circle r="0.05" cx="1" fill="white">
            <animate attributeName="cy" values="1; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="1.5" fill="white">
            <animate attributeName="cy" values="3; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="1; 4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2" fill="white">
            <animate attributeName="cy" values="0; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="2; 5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2.5" fill="white">
            <animate attributeName="cy" values="4; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="3; 6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3" fill="white">
            <animate attributeName="cy" values="7; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="4; 7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3.5" fill="white">
            <animate attributeName="cy" values="2; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="5; 8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="4" fill="white">
            <animate attributeName="cy" values="0; 10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle r="0.05" cx="1" fill="white">
            <animate attributeName="cy" values="1; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="1.5" fill="white">
            <animate attributeName="cy" values="3; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="1; 4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2" fill="white">
            <animate attributeName="cy" values="0; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="2; 5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="2.5" fill="white">
            <animate attributeName="cy" values="4; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="3; 6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3" fill="white">
            <animate attributeName="cy" values="7; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="4; 7" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="3.5" fill="white">
            <animate attributeName="cy" values="2; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="5; 8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="0.05" cx="4" fill="white">
            <animate attributeName="cy" values="0; 10" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cx" values="6; 9" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
);
