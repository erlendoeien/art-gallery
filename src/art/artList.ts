import { ArtPaths } from '../utils/types';
// Workaround for typescript as it complains with ES6
/* eslint-disable @typescript-eslint/no-var-requires */
import spaceMoodyAudio from '../sounds/space_moody.mp3';
import spaceHappyAudio from '../sounds/space_happy.mp3';
import islandMoodyAudio from '../sounds/island_moody.mp3';
import islandHappyAudio from '../sounds/island_happy.mp3';
import snowHappyAudio from '../sounds/snow_happy.mp3';
import snowMoodyAudio from '../sounds/snow_moody.mp3';
import weatherHappyAudio from '../sounds/weather_happy.mp3';
import weatherMoodyAudio from '../sounds/weather_moody.mp3';
import treeSwingHappyAudio from '../sounds/tree_swing_happy.mp3';
import treeSwingMoodyAudio from '../sounds/tree_swing_moody.mp3';
import sunsetMoodyAudio from '../sounds/sunset_moody.mp3';
import sunsetHappyAudio from '../sounds/sunset_happy.mp3';

/**
 * Hardcoded paths for the art. Not supposed to to any handle, just store info
 */
const artList: ArtPaths[] = [
    {
        artDir: 'space',
        moodyAudio: spaceMoodyAudio,
        happyAudio: spaceHappyAudio,
        title: 'Space.'
    },
    {
        artDir: 'snowman',
        moodyAudio: snowMoodyAudio,
        happyAudio: snowHappyAudio,
        title: 'Snowman'
    },
    {
        artDir: 'sunset',
        /**
         * Sundae Sunset by Purrple Cat | https://purrplecat.com
         * Music promoted by https://www.free-stock-music.com
         * Creative Commons Attribution-ShareAlike 3.0 Unported
         * https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
         */
        moodyAudio: sunsetMoodyAudio,
        // Sunset Eyes by INOSSI | https://soundcloud.com/inossi
        // Music promoted by https://www.free-stock-music.com
        // Creative Commons Attribution 3.0 Unported License
        // https://creativecommons.org/licenses/by/3.0/deed.en_US
        happyAudio: sunsetHappyAudio,
        title: 'Sunset'
    },
    {
        artDir: 'island',
        moodyAudio: islandMoodyAudio,
        happyAudio: islandHappyAudio,
        title: 'An island'
    },
    {
        artDir: 'weather',
        moodyAudio: weatherMoodyAudio,
        happyAudio: weatherHappyAudio,
        title: 'Weather'
    },
    {
        artDir: 'tree_swing',
        moodyAudio: treeSwingMoodyAudio,
        happyAudio: treeSwingHappyAudio,
        title: 'Tree swing'
    }
];

export default artList;
