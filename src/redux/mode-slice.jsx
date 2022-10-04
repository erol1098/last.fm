import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { mode: 1 },
  reducers: {
    changeMode(state, action) {
      state.mode = !state.mode;
    },
  },
});

export const modeActions = modeSlice.actions;
export default modeSlice;
