import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import useFetchData from '../hooks/useFetchData';

const HomePage = () => {
  const { getTopArtists, artistLoading } = useFetchData();
  const topArtists = useSelector((state) => state.app.topArtists);

  useEffect(() => {
    getTopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container width='base'>
      {topArtists.map((artist) => (
        <Card
          key={artist.name}
          data={artist}
          loading={artistLoading}
          direction='row'
        />
      ))}
    </Container>
  );
};

export default HomePage;
