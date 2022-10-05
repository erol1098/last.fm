import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { mode: localStorage.getItem('theme') || 'dark' },
  reducers: {
    setMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const modeActions = modeSlice.actions;
export default modeSlice;
