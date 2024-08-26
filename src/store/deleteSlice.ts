import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeleteState {
  deletedItems: { [key: number]: boolean };
}

const initialState: DeleteState = {
  deletedItems: {},
};

const deleteSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {
    toggleDelete(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.deletedItems[id]) {
        delete state.deletedItems[id];
      } else {
        state.deletedItems[id] = true;
      }
    },
  },
});

export const { toggleDelete } = deleteSlice.actions;
export default deleteSlice.reducer;
