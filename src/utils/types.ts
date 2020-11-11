export interface ArtPaths {
    artDir: string;
    moodyAudio: string;
    happyAudio: string;
    title: string;
}

export interface ArtItem extends ArtPaths {
    displayHappy: () => JSX.Element;
    displayMoody: () => JSX.Element;
}

export interface Poem {
    title: string;
    author: string;
    lines: string[];
    linecount: string;
}

export interface Artwork {
    art: ArtItem;
    poem: Poem;
}
