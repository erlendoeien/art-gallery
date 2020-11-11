import { ArtItem, ArtPaths } from './types';

/**
 * A sort of hardcoded method for importing the SVGs and
 * loading them as SVGs, not images (for interaction purposes)
 */

export default async (artList: ArtPaths[]): Promise<ArtItem[]> => {
    const artworks: ArtItem[] = await Promise.all(
        artList.map(async ({ artDir, happyAudio, moodyAudio, title }) => {
            // Importing the animations for the specific artwork
            const { displayMoody, displayHappy } = await import(`../art/${artDir}/svg`);

            return {
                artDir,
                title,
                happyAudio,
                moodyAudio,
                displayHappy,
                displayMoody
            };
        })
    );
    return artworks;
};
