import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '../../utils/webStorageWrapper';

export enum Mood {
    moody = 'moody',
    happy = 'happy'
}

const storedIsMoody = LocalStorage.getItem('isMoody');
const initialState = {
    mood: storedIsMoody ? Mood.moody : Mood.happy
};

const moodSlice = createSlice({
    name: 'mood',
    initialState,
    reducers: {
        moodToggled(state) {
            if (state.mood === Mood.happy) {
                state.mood = Mood.moody;
            } else {
                state.mood = Mood.happy;
            }
        }
    }
});

export const { moodToggled } = moodSlice.actions;

export default moodSlice.reducer;
