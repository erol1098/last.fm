import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    topArtists: [],
    topAlbums: [],
    topTracks: [],
  },
  reducers: {
    setTopArtists(state, action) {
      state.topArtists = action.payload;
    },
    setTopAlbums(state, action) {
      state.topAlbums = action.payload;
    },
    setTopTracks(state, action) {
      state.topTracks = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice;
