import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basket_slice/basketSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});