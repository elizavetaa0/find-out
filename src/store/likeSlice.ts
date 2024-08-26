import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likedItems: {
    [id: number]: boolean
  };
}

const initialState: LikeState = {
  likedItems: JSON.parse(localStorage.getItem('likedItems') || '{}'),
};

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.likedItems[itemId] = !state.likedItems[itemId];
      localStorage.setItem('likedItems', JSON.stringify(state.likedItems));
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;