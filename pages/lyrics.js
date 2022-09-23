import { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import SongCard from '../components/SongCard';

export default function Lyrics() {
  const [lyricsList, setLyricsList] = useState([]);
  function handleAddLyrics(newLyrics) {
    setLyricsList([newLyrics, ...lyricsList]);
  }

  return (
    <>
      <Subtitle>Lyrics</Subtitle>

      {lyricsList.map((lyrics) => {
        return (
          <SongCard
            key={lyrics.id}
            title={lyrics.title}
            lyrics={lyrics.lyrics}
          />
        );
      })}

      <Form onAddLyrics={handleAddLyrics} />
    </>
  );
}

const Subtitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;
