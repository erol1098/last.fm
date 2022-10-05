import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { mode: 'dark' },
  reducers: {
    setMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const modeActions = modeSlice.actions;
export default modeSlice;
