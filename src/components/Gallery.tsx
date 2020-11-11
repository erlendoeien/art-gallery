// eslint-disable-next-line
import React from 'react';
import styles from './Gallery.module.css';
import IconButton from './IconButton';

interface GalleryProps {
    artComponents: () => JSX.Element[] | JSX.Element;
    viewMode: 'scrollView' | 'galleryView';
    setScrollView: () => void;
    setGalleryView: () => void;
    ScrollIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    GalleryIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default (props: GalleryProps): JSX.Element => {
    const {
        artComponents,
        viewMode,
        setScrollView,
        setGalleryView,
        ScrollIcon,
        GalleryIcon
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.galleryHeader}>
                <IconButton
                    onClickHandler={setScrollView}
                    buttonClassName={`${styles.viewModeButton} ${
                        viewMode === 'scrollView' ? styles.activeView : ''
                    }`}
                    Icon={ScrollIcon}
                />
                <IconButton
                    onClickHandler={setGalleryView}
                    buttonClassName={`${styles.viewModeButton} ${
                        viewMode === 'galleryView' ? styles.activeView : ''
                    }`}
                    Icon={GalleryIcon}
                />
            </div>
            <div className={styles[viewMode]}>{artComponents()}</div>
        </div>
    );
};
