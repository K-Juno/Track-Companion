import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../../components/SongCard';
import { getLyricsById } from '../../../services/lyricsService';
import BackLink from '../../../components/BackLink';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const song = await getLyricsById(id);

  return {
    props: {
      song,
    },
  };
}

export default function NewSong({ song }) {
  return (
    <>
      <SongCard key={song.id} title={song.title} lyrics={song.lyrics} />
      <LinkContainer>
        <Link href="/lyrics/collection">
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
