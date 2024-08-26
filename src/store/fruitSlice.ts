import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Fruit } from '../service/types';

interface FruitsState {
  items: Fruit[];
  loading: boolean;
  error: string | null;
}

const initialState: FruitsState = {
  items: [],
  loading: false,
  error: null,
};

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    fetchFruitsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFruitsSuccess(state, action: PayloadAction<Fruit[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchFruitsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFruitsStart, fetchFruitsSuccess, fetchFruitsFailure } = fruitsSlice.actions;

export default fruitsSlice.reducer;