import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';

const HomePage = () => {
  const { getTopArtists } = useFetchData();
  const topArtists = useSelector((state) => state.app.topArtists);

  useEffect(() => {
    getTopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(topArtists);
  return <div>HomePage</div>;
};

export default HomePage;
