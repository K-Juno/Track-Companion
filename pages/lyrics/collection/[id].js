import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../../components/SongCard';
import { getLyricsById } from '../../../services/lyricsService';

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
