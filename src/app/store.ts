import { configureStore } from '@reduxjs/toolkit';
import moodReducer from '../components/Settings/moodSlice';

const store = configureStore({
    reducer: {
        mood: moodReducer
    }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
