import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import Box from '../components/Box/Box';
import Card from '../components/ArtistCard/ArtistCard';

import Container from '../components/Container/Container';
import Image from '../components/Image/Image';
import Text from '../components/Text/Text';
import useFetchData from '../hooks/useFetchData';

const DetailPage = () => {
  const { getTopAlbums, getTopTracks } = useFetchData();
  const topAlbums = useSelector((state) => state.app.topAlbums);
  const topTracks = useSelector((state) => state.app.topTracks);

  const { name } = useParams();

  useEffect(() => {
    getTopAlbums(name);
    getTopTracks(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(topAlbums, topTracks);

  return (
    <Container width='wide'>
      <Box direction='start'>
        <Image
          src={
            'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png'
          }
          alt={name}
          size='sm'
        />
        <Text variant='title' textStyle='bold' size='lg'>
          {name}
        </Text>
      </Box>
      <Box direction='row'>
        <Container width='narrow'>
          {topAlbums?.map((album) => (
            <Card key={album?.name} data={album} direction='row' />
          ))}
        </Container>
        <Container width='narrow'>
          {topTracks?.map((track) => (
            <Card key={track?.name} data={track} direction='row' />
          ))}
        </Container>
      </Box>
    </Container>
  );
};

export default DetailPage;
