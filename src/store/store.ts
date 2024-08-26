import { configureStore } from '@reduxjs/toolkit';
import fruitSlice from './fruitSlice';
import likeSlice from './likeSlice';
import deleteSlice from './deleteSlice';

const store = configureStore({
  reducer: {
    fruits: fruitSlice,
    likes: likeSlice,
    delete: deleteSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
