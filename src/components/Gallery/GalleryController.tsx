// eslint-disable-next-line
import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import ArtModal from '../Art/ArtModal';
import Art from '../Art';
import Gallery from './Gallery';
import ArtThumbnail from '../Art/ArtThumbnail';
import { ReactComponent as GalleryIconBlack } from '../../svg/view_module-black-18dp.svg';
import { ReactComponent as GalleryIconWhite } from '../../svg/view_module-white-48dp.svg';
import { ReactComponent as ScrollIconBlack } from '../../svg/view_day-black-18dp.svg';
import { ReactComponent as ScrollIconWhite } from '../../svg/view_day-white-48dp.svg';
import { Artwork, Poem } from '../../utils/types';
import artList from '../../art/artList';
import fetchArt from '../../utils/fetchArt';
import fetchPoems from '../../utils/fetchPoems';
import { ThemeContext } from '../ThemeProvider';
import { LocalStorage, SessionStorage } from '../../utils/webStorageWrapper';
import { useAppSelector } from '../../app/hooks';
import { Mood } from '../Settings/moodSlice';

type ViewMode = 'scrollView' | 'galleryView';

const isMobile = (): boolean => window.innerWidth < 769;

interface GalleryControllerProps {
    displayFavorites: boolean;
}

const GalleryController: FunctionComponent<GalleryControllerProps> = ({
    displayFavorites
}: GalleryControllerProps) => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [viewMode, setViewMode] = useState<ViewMode>(isMobile() ? 'scrollView' : 'galleryView');
    const [favorites, _setFavorites] = useState<string[]>(
        (LocalStorage.getItem('favorites') || []).sort()
    );
    const { path, url }: { path: string; url: string } = useRouteMatch();
    const { mood } = useAppSelector((state) => state.mood);
    const isMoody = mood === Mood.moody;
    const { isDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        LocalStorage.setItem('favorites', favorites);
    }, [favorites]);

    const toggleFavorite = (artTitle: string) => {
        if (favorites.includes(artTitle))
            _setFavorites((prev) => {
                const newFaves = [...prev];
                const index = newFaves.findIndex((fav) => fav === artTitle);
                newFaves.splice(index, 1);
                return newFaves.sort();
            });
        else _setFavorites((prev) => [...prev, artTitle]);
    };

    /**
     * Caches the poems in sessionStorage to increase performance
     * and not overuse the API
     * @param poems Poem[] The poems to store in session
     * @param mood The mood of the poems
     */
    const cachePoems = (poems: Poem[], currentMood: 'happy' | 'moody') => {
        SessionStorage.setItem(currentMood, { poems });
    };

    /**
     * Inital fetch of the artworks
     */
    useEffect(() => {
        // Because it isn't suggested making useEffect async and useEffect
        // dependency-list warnings => can't factor out the functions

        const fetchArtworks = async () => {
            const artItems = await fetchArt(artList);
            let poems: Poem[];
            const cachedPoems = SessionStorage.getItem(mood);
            if (!cachedPoems) {
                // No poems that contains "moody"
                poems = await fetchPoems(mood === 'moody' ? 'sad' : mood, 10, 20);
                cachePoems(poems, mood);
            } else {
                poems = cachedPoems.poems;
            }
            const tempWorks = artItems.map((art, i) => ({
                art,
                poem: poems[i]
            }));
            // Sort ascending, alphabetically, eslint doesn't like nested ternaries
            return tempWorks.sort((a, b) => {
                if (a.art.title > b.art.title) return 1;
                if (b.art.title > a.art.title) return -1;
                return 0;
            });
        };

        const fetchData = async () => {
            const works = await fetchArtworks();
            setArtworks(works);
        };
        fetchData();
    }, [mood]);

    const setGalleryView = () => {
        setViewMode('galleryView');
    };

    const setScrollView = () => {
        setViewMode('scrollView');
    };

    const noFavoritesPlaceholder = (): JSX.Element => {
        return (
            <main>
                <h1>Her er det ingen kunstverk...</h1>
                <p style={{ fontStyle: 'italic' }}>
                    Hvis det er noen kunstverk du vil ha lettere tilgang på, kan du trykke på
                    hjertene for hvert kunstverk! Da vil de dukke opp under &quot;Lagrede
                    kuntverk&quot;!
                </p>
            </main>
        );
    };

    /**
     * Generates the art components in "scroll view"
     * Will only return favorites if displayFavorites === true
     */
    const generateArt = (): JSX.Element[] | JSX.Element => {
        const tempWorks = artworks
            .filter(({ art }) => displayFavorites === false || favorites.includes(art.title))
            .map(({ art, poem }) => (
                <Art
                    key={art.artDir}
                    poem={poem}
                    artwork={{
                        title: art.title,
                        Image: isMoody ? art.displayMoody() : art.displayHappy(),
                        audioPath: isMoody ? art.moodyAudio : art.happyAudio
                    }}
                    toggleFavorite={toggleFavorite}
                    isFavorite={favorites.includes(art.title)}
                />
            ));
        if (tempWorks.length === 0) return noFavoritesPlaceholder();
        return tempWorks;
    };

    /**
     * Generates the thumbnails for the artworks
     * Used for the gallery, also depends on displayFavorites
     */
    const generateArtThumbnails = (): JSX.Element[] | JSX.Element => {
        const tempWorks = artworks
            .filter(({ art }) => displayFavorites === false || favorites.includes(art.title))
            .map(({ art }) => (
                <Link key={`${art.artDir}_thumbnail`} to={`${url}/${art.artDir}`}>
                    <ArtThumbnail image={isMoody ? art.displayMoody() : art.displayHappy()} />
                </Link>
            ));
        if (tempWorks.length === 0) return noFavoritesPlaceholder();
        return tempWorks;
    };

    return (
        <Switch>
            <Route exact path={path}>
                <Gallery
                    artComponents={viewMode === 'galleryView' ? generateArtThumbnails : generateArt}
                    ScrollIcon={isDarkTheme ? ScrollIconWhite : ScrollIconBlack}
                    GalleryIcon={isDarkTheme ? GalleryIconWhite : GalleryIconBlack}
                    viewMode={viewMode}
                    setGalleryView={setGalleryView}
                    setScrollView={setScrollView}
                />
            </Route>
            <Route path={`${path}/:artDir`}>
                <ArtModal
                    artworks={artworks}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                    displayFavorites={displayFavorites}
                />
            </Route>
        </Switch>
    );
};

export default GalleryController;
