import { Mood } from '../components/Settings/moodSlice';
import { Poem } from './types';

const fetchPoems = async (
    theme: Mood | 'sad',
    amount: number,
    maxLength: number
): Promise<Poem[]> => {
    return fetch(`https://poetrydb.org/lines,poemcount,linecount/${theme};${amount};${maxLength}`)
        .then((response) => (!response.ok ? console.log('Response:', response) : response.json()))
        .then((poems) => (poems.status === 404 ? new Error('No poems') : poems));
    // .catch(
    //     (
    //         err: Error // Dummy data in case it doesn't work
    //     ) => {
    //         console.log('Could not fetch poems', err);
    //         const poem = {
    //             title: "The Moon Maiden's Song",
    //             author: 'Ernest Dowson',
    //             lines: [
    //                 'Sleep! Cast thy canopy',
    //                 "   Over this sleeper's brain,",
    //                 'Dim grow his memory,',
    //                 '   When he wake again.',
    //                 '',
    //                 'Love stays a summer night,',
    //                 '   Till lights of morning come;',
    //                 'Then takes her winged flight',
    //                 '   Back to her starry home.',
    //                 '',
    //                 'Sleep! Yet thy days are mine;',
    //                 "   Love's seal is over thee:",
    //                 'Far though my ways from thine,',
    //                 '   Dim though thy memory.',
    //                 '',
    //                 'Love stays a summer night,',
    //                 '   Till lights of morning come;',
    //                 'Then takes her winged flight',
    //                 '   Back to her starry home.'
    //             ],
    //             linecount: '16'
    //         };
    //         return new Array(10).fill({ ...poem });
    //     }
    // );
};

export default fetchPoems;
