import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '../lib/app-slice';

const useFetchData = () => {
  const dispatch = useDispatch();

  const [artistLoading, setArtistLoading] = useState(false);
  const [trackLoading, setTrackLoading] = useState(false);
  const [albumLoading, setAlbumLoading] = useState(false);

  const getTopArtists = async () => {
    try {
      setArtistLoading(true);
      const { data } = await axios.get(`
        https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopArtists(data.artists.artist));
    } catch (error) {
      console.log('error', error);
    } finally {
      setArtistLoading(false);
    }
  };

  const getTopAlbums = async (name) => {
    try {
      setAlbumLoading(true);
      const { data } = await axios.get(`
      https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopAlbums(data.topalbums.album));
    } catch (error) {
      console.log('error', error);
    } finally {
      setAlbumLoading(false);
    }
  };

  const getTopTracks = async (name) => {
    try {
      setTrackLoading(true);
      const { data } = await axios.get(`
      https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopTracks(data.toptracks.track));
    } catch (error) {
      console.log('error', error);
    } finally {
      setTrackLoading(false);
    }
  };

  return {
    getTopArtists,
    artistLoading,
    getTopAlbums,
    albumLoading,
    getTopTracks,
    trackLoading,
  };
};
export default useFetchData;
