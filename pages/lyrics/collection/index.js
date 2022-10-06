import Link from 'next/link';
import styled from 'styled-components';
import getAllLyrics from '../../../services/lyricsService';
import Image from 'next/image';
import trashIcon from '../../../public/trash-icon.png';
import { useState } from 'react';
import BackLink from '../../../components/BackLink';

export async function getServerSideProps() {
  const lyrics = await getAllLyrics();

  return {
    props: {
      lyrics,
    },
  };
}

export default function Collection({ lyrics }) {
  const [lyricsList, setLyricsList] = useState(lyrics);

  async function removeLyrics(id) {
    await fetch(`/api/lyrics/${id}`, {
      method: 'DELETE',
    });
    setLyricsList(
      lyricsList.filter((lyrics) => {
        return lyrics.id !== id;
      })
    );
  }

  return (
    <>
      <PageTitle>Lyrics</PageTitle>

      <TitleContainer>
        <SubTitle>ur awesome collection</SubTitle>
      </TitleContainer>

      <ListContainer>
        {lyricsList.map((song) => (
          <>
            <ListItem key={song.id}>
              <Link href={`/lyrics/collection/${song.id}`}>
                <LyricsTitle>&quot;{song.title}&quot;</LyricsTitle>
              </Link>
              <RemoveButton onClick={() => removeLyrics(song.id)}>
                <Image alt="trash icon" layout="responsive" src={trashIcon} />
              </RemoveButton>
            </ListItem>
          </>
        ))}
      </ListContainer>

      <LinkContainer>
        <Link href="/lyrics">
          <BackLink>go back</BackLink>
        </Link>
      </LinkContainer>
    </>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 3rem 0;
`;

const SubTitle = styled.h3`
  text-align: center;
  border: 0.1rem solid #7e8e96;
  border-radius: 0.2rem;
  padding: 0.3rem;
  width: fit-content;
  margin: 0;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LyricsTitle = styled.a`
  padding: 0.3rem;
  width: fit-content;
  border-radius: 0.2rem;
  color: #dfdfdf;
  background-color: #313c4c;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 15px;
  padding: 5px;
  width: 2rem;
  cursor: pointer;

  &:hover {
    border: 0.1rem dotted #313c4c;
  }
`;
