import axios from 'axios';

const useFetchData = () => {
  const getTopArtists = async () => {
    try {
      const { data } = axios.get(`
        https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`);
    } catch (error) {
      console.log('error', error);
    }
  };
};
export default useFetchData;
