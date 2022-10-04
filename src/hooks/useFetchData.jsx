import axios from 'axios';
import { useDispatch } from 'react-redux';
import { appActions } from '../redux/app-slice';

const useFetchData = () => {
  const dispatch = useDispatch();

  const getTopArtists = async () => {
    try {
      const { data } = axios.get(`
        https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopArtists(data));
    } catch (error) {
      console.log('error', error);
    }
  };

  const getTopAlbums = async (name) => {
    try {
      const { data } = axios.get(`
      https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopAlbums(data));
    } catch (error) {
      console.log('error', error);
    }
  };

  const getTopTracks = async (name) => {
    try {
      const { data } = axios.get(`
      https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
      dispatch(appActions.setTopTracks(data));
    } catch (error) {
      console.log('error', error);
    }
  };

  return { getTopArtists, getTopAlbums, getTopTracks };
};
export default useFetchData;