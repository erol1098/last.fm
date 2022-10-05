import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';

import Box from '../components/Box/Box';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import Image from '../components/Image/Image';
import Text from '../components/Text/Text';

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
        <Text textStyle='bold' size='lg'>
          {name}
        </Text>
      </Box>
      <Box direction='row'>
        <Container width='narrow'>
          <Text textStyle='bold' size='lg'>
            Top Albums
          </Text>
          {topAlbums?.map(
            (album) =>
              album.name !== '(null)' && (
                <Card
                  key={album?.name}
                  data={album}
                  variant='album'
                  direction='row'
                />
              )
          )}
        </Container>
        <Container width='narrow'>
          <Text textStyle='bold' size='lg'>
            Top Tracks
          </Text>
          {topTracks?.map((track) => (
            <Card
              key={track?.name}
              data={track}
              variant='track'
              direction='row'
            />
          ))}
        </Container>
      </Box>
    </Container>
  );
};

export default DetailPage;
