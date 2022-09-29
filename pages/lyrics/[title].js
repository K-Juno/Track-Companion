import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../components/SongCard';
import getAllLyrics from '../../services/lyricsService';

export async function getServerSideProps() {
  const lyrics = await getAllLyrics();
  console.log(lyrics, 'GET');

  return {
    props: {
      lyrics: lyrics,
    },
  };
}

export default function Collection({ lyrics }) {
  // const selectedSong = lyrics.filter((song) => song.id !== song.id);

  return (
    <>
      {lyrics
        // .filter((song) => song.id === song.id)
        .map((song) => (
          <SongCard key={song.id} title={song.title} lyrics={song.lyrics} />
        ))}
      <LinkContainer>
        <Link href="/lyrics/collection">
          <LinkTag>go back</LinkTag>
        </Link>
      </LinkContainer>
    </>
  );
}

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkTag = styled.a`
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  padding: 0.3rem;
  background-color: #7e8e96;
  color: #dfdfdf;
  margin-bottom: 2rem;
`;
