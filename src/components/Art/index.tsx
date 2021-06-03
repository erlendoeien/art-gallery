// eslint-disable-next-line
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import styles from './Art.module.css';
import { ReactComponent as NotFavoriteIcon } from '../../svg/favorite_border-black-48dp.svg';
import { ReactComponent as IsFavoriteIcon } from '../../svg/favorite-black-48dp.svg';
import { ReactComponent as PauseIcon } from '../../svg/volume_off-black-48dp.svg';
import { ReactComponent as PlayIcon } from '../../svg/volume_up-black-48dp.svg';
import IconButton from '../IconButton';
import { Mood } from '../Settings/moodSlice';
import { useAppSelector } from '../../app/hooks';

export interface Artwork {
    title: string;
    Image: JSX.Element;
    audioPath: string;
}

export interface Poem {
    title: string;
    author: string;
    lines: string[];
    linecount?: string;
}

interface ArtProps {
    artwork: Artwork;
    poem: Poem;
    toggleFavorite: (artTitle: string) => void;
    isFavorite: boolean;
    isViewingArt?: boolean;
}

const Art: FunctionComponent<ArtProps> = ({
    artwork,
    poem,
    toggleFavorite,
    isFavorite,
    isViewingArt = false
}: ArtProps) => {
    const [audio, setAudio] = useState(new Audio(artwork.audioPath));
    const [audioPlayState, setAudioPlayState] = useState(false);
    const [autoPlay, setAutoPlay] = useState(isViewingArt);
    const { isDarkTheme } = useAppSelector((state) => state.theme);
    const { mood } = useAppSelector((state) => state.mood);
    const isMoody = mood === Mood.moody;

    const toggleAudioPlay = () => {
        setAudioPlayState(!audioPlayState);
        if (autoPlay) setAutoPlay(false);
    };

    const updateFavoriteStatus = () => {
        toggleFavorite(artwork.title);
    };

    /**
     * Autoplay if the user is currently viewing the art
     * Only defined if it's certain the art is viewed
     */
    useEffect(() => {
        if (autoPlay) toggleAudioPlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Handle pause and play, make sure the audio is paused on exit
     */
    useEffect(() => {
        if (audioPlayState) audio.play();
        else audio.pause();
        return () => audio.pause();
    }, [audioPlayState, audio]);

    /**
     * Update audo player on mood change or modal change
     */
    useEffect(() => {
        setAudio(new Audio(artwork.audioPath));
    }, [artwork.audioPath]);

    useEffect(() => {
        audio.addEventListener('ended', () => setAudioPlayState(false));
        return () => {
            audio.removeEventListener('ended', () => setAudioPlayState(false));
        };
    }, [audio]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{artwork.title}</h1>
                <IconButton
                    onClickHandler={updateFavoriteStatus}
                    buttonClassName={`${styles.favoriteButton} ${
                        isDarkTheme ? styles.darkButton : ''
                    } ${isFavorite ? styles.isFavorite : ''}`}
                    Icon={isFavorite ? IsFavoriteIcon : NotFavoriteIcon}
                />
            </div>
            <div className={styles.artworkContainer}>
                {artwork.Image}
                <IconButton
                    onClickHandler={toggleAudioPlay}
                    buttonClassName={`${styles.playButton} ${isMoody ? styles.darkButton : ''} `}
                    Icon={audioPlayState || autoPlay ? PlayIcon : PauseIcon}
                />
            </div>
            <div className={styles.poemContainer}>
                <div className={styles.poemHeader}>
                    <h4>{poem.title}</h4>
                    <h4>by {poem.author}</h4>
                </div>
                <div className={styles.poem}>
                    {poem.lines.map((item, i) => (
                        // Not a good solution, but no unique id
                        // eslint-disable-next-line
                        <p key={item + i}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

Art.defaultProps = { isViewingArt: false };
export default Art;
