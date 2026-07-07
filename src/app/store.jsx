import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/apislice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
