import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import useFetchData from '../hooks/useFetchData';

const HomePage = () => {
  const { getTopArtists } = useFetchData();
  const topArtists = useSelector((state) => state.app.topArtists);

  useEffect(() => {
    getTopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(topArtists);
  return (
    <Container>
      {topArtists.map((artist) => (
        <Card key={artist.name} data={artist} direction='row' />
      ))}
    </Container>
  );
};

export default HomePage;
