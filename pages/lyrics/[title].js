import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../components/SongCard';
import BackLink from '../../components/BackLink';

export default function NewSong({ lyricsList }) {
  return (
    <>
      {lyricsList.map((song) => (
        <SongCard key={song.id} title={song.title} lyrics={song.lyrics} />
      ))}
      <LinkContainer>
        <Link href="/lyrics">
          <BackLink>go back</BackLink>
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
