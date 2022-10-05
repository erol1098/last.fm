import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app-slice';
import modeSlice from './mode-slice';

const store = configureStore({
  reducer: { mode: modeSlice.reducer, app: appSlice.reducer },
});

export default store;
