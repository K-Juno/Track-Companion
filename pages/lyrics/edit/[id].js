import Link from 'next/link';
import styled from 'styled-components';
import BackLink from '../../../components/BackLink';
import UpdateForm from '../../../components/UpdateForm';
import { useState } from 'react';

export default function UpdateLyrics({ onChangeLyrics }) {
  const [lyricsList, setLyricsList] = useState([]);

  function changeLyrics(lyrics, newLyrics) {
    setLyricsList(
      lyricsList.map((song) => {
        if (song.lyrics === lyrics) {
          return { lyrics: newLyrics };
        } else {
          return lyrics;
        }
      })
    );
  }

  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <LinkContainer>
        <span>Go to →</span>
        <Link href="/lyrics/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </LinkContainer>
      <UpdateForm onChangeLyrics={changeLyrics} />
    </>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 2rem;
`;

const CollectionLink = styled(BackLink)`
  margin-bottom: 0;
  cursor: pointer;
`;
