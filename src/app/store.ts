import { configureStore } from '@reduxjs/toolkit';
import moodReducer from '../components/Settings/moodSlice';
import themeReducer from '../components/Settings/themeSlice';

const store = configureStore({
    reducer: {
        mood: moodReducer,
        theme: themeReducer
    }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
