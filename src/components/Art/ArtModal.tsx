// eslint-disable-next-line
import React, { MouseEvent, useState, useEffect, useContext, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './ArtModal.module.css';
import Art from './index';
import { Artwork } from '../../utils/types';
import { ReactComponent as ExitIcon } from '../../svg/clear-black-24dp.svg';
import { ReactComponent as Previous } from '../../svg/navigate_before-black-48dp.svg';
import { ReactComponent as Next } from '../../svg/navigate_next-black-48dp.svg';
import IconButton from '../IconButton';
import { ThemeContext } from '../ThemeProvider';
import { useAppSelector } from '../../app/hooks';
import { Mood } from '../Settings/moodSlice';

interface ModalProps {
    artworks: Artwork[];
    favorites: string[];
    toggleFavorite: (artTitle: string) => void;
    displayFavorites: boolean;
}

/**
 * SLightly inspired by https://reactrouter.com/web/example/modal-gallery
 */
const ArtModal = (props: ModalProps): JSX.Element => {
    const { artworks, favorites, displayFavorites, toggleFavorite } = props;
    const { artDir }: { artDir: string } = useParams();
    const [artIndex, setArtIndex] = useState(
        artworks.findIndex(({ art }) => art.artDir === artDir)
    );
    const { mood } = useAppSelector((state) => state.mood);
    const isMoody = mood === Mood.moody;
    const { backgroundColor, isDarkTheme } = useContext(ThemeContext);
    const history = useHistory();
    // To avoid indexing artworks everytime
    const currentArtwork = artworks[artIndex];

    /**
     * Uses the router to go back to the gallery or favorites
     * @param event Mouseevent
     */
    const back = (event: MouseEvent | null) => {
        // eslint does not like ternary ops for function calls
        if (event !== null) event.stopPropagation();
        if (displayFavorites) history.push('/favoritter');
        else history.push('/utstilling');
    };

    /**
     * Fetches the correct next art index in the favorite gallery or
     * the regular one
     */
    const handlePrev = (event: MouseEvent | null): void => {
        if (event !== null) event.stopPropagation();
        setArtIndex((prevIndex) => {
            if (displayFavorites) {
                // Finds the relative index and maps back to artworks
                const currFavIndex = favorites.findIndex(
                    (title) => title === currentArtwork.art.title
                );
                const prevFavIndex = currFavIndex !== 0 ? currFavIndex - 1 : favorites.length - 1;
                return artworks.findIndex(({ art }) => art.title === favorites[prevFavIndex]);
            }
            return prevIndex !== 0 ? prevIndex - 1 : artworks.length - 1;
        });
    };

    /**
     * Fetches the correct previosu art index in the favorite gallery or
     * the regular one
     */
    const handleNext = (event: MouseEvent): void => {
        event.stopPropagation();
        setArtIndex((prevIndex) => {
            // Finds the relative index and maps back to artworks
            if (displayFavorites) {
                const currFavIndex = favorites.findIndex(
                    (title) => title === currentArtwork.art.title
                );
                const nextFavIndex = currFavIndex < favorites.length - 1 ? currFavIndex + 1 : 0;
                return artworks.findIndex(({ art }) => art.title === favorites[nextFavIndex]);
            }
            return prevIndex < artworks.length - 1 ? prevIndex + 1 : 0;
        });
    };

    /**
     * Exits the modal if there aren't any favorites or current artwork
     * If one unfavorites an element, exit the modal
     */
    useEffect(() => {
        if (!currentArtwork) back(null);
        else if (displayFavorites) {
            if (favorites.length === 0) history.push('/favoritter');
            else if (!favorites.includes(artworks[artIndex].art.title)) back(null);
        } else if (artworks.length === 0) history.push('/utstilling');
    });

    return (
        <div className={styles.background}>
            <div className={styles.artModal} style={{ backgroundColor }}>
                <IconButton
                    onClickHandler={back}
                    buttonClassName={`${styles.exitButton} ${isDarkTheme ? styles.darkButton : ''}`}
                    Icon={ExitIcon}
                />
                {currentArtwork ? (
                    <div className={styles.modalContent}>
                        <div className={styles.modalArt}>
                            <Art
                                poem={currentArtwork.poem}
                                artwork={{
                                    title: currentArtwork.art.title,
                                    Image: isMoody
                                        ? currentArtwork.art.displayMoody()
                                        : currentArtwork.art.displayHappy(),
                                    audioPath: isMoody
                                        ? currentArtwork.art.moodyAudio
                                        : currentArtwork.art.happyAudio
                                }}
                                isFavorite={favorites.includes(currentArtwork.art.title)}
                                toggleFavorite={toggleFavorite}
                                isViewingArt
                            />
                        </div>
                    </div>
                ) : (
                    <h5>No image</h5>
                )}
                {(displayFavorites ? favorites.length !== 1 : artworks.length !== 1) && (
                    <div>
                        <IconButton
                            onClickHandler={handleNext}
                            buttonClassName={`${styles.nextButton} ${styles.navButton} ${
                                isDarkTheme ? styles.darkButton : ''
                            }`}
                            Icon={Next}
                        />
                        <IconButton
                            onClickHandler={handlePrev}
                            buttonClassName={`${styles.prevButton} ${styles.navButton} ${
                                isDarkTheme ? styles.darkButton : ''
                            }`}
                            Icon={Previous}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default ArtModal;
