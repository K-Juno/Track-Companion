import Link from 'next/link';
import getAllLyrics from '../../../services/lyricsService';
import trashIcon from '../../../public/icon-trash.svg';
import { useState } from 'react';
import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
  BackLink,
  LinkContainer,
} from '../../../components/Styling';
import styled from 'styled-components';
import Image from 'next/image';

export async function getServerSideProps() {
  const lyrics = await getAllLyrics();

  return {
    props: {
      lyrics,
    },
  };
}

Collection.title = 'Track Companion | Lyrics Collection';

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
      <SubTitleContainer>
        <SubTitle>Your awesome collection</SubTitle>
      </SubTitleContainer>
      <ListContainer>
        {lyricsList.map((song) => (
          <>
            <ListItem key={song.id}>
              <Link href={`/lyrics/collection/${song.id}`} passHref>
                <LyricsTitle>&quot;{song.title}&quot;</LyricsTitle>
              </Link>
              <RemoveButton onClick={() => removeLyrics(song.id)}>
                <Trash>
                  <Image
                    alt="trash icon"
                    layout="responsive"
                    src={trashIcon}
                    height={100}
                    width={100}
                  />
                </Trash>
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

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 0;
  gap: 0.8rem;

  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  border: 1px solid #7e8e96;
  background-color: #f7fffc;
  border-radius: 0.2rem;
  position: relative;

  &:hover {
    background-image: linear-gradient(-20deg, #f0eaff 0%, #e6fff9 100%);
  }
`;

const LyricsTitle = styled.a`
  text-decoration: none;
  padding: 0.6rem;
  width: fit-content;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #1e4153;
`;

const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 15px;
  padding: 5px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #daecfb;
    border: 1px dotted #c6d5e2;
  }
`;

const Trash = styled.div`
  width: 1.3rem;
`;
