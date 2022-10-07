import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../../components/SongCard';
import { getLyricsById } from '../../../services/lyricsService';
import { BackLink, LinkContainer } from '../../../components/Styling';
import Image from 'next/image';
import pencilIcon from '../../../public/pencil-icon.png';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const song = await getLyricsById(id);

  return {
    props: {
      song,
    },
  };
}

export default function SongLyrics({ song }) {
  const router = useRouter();

  async function updateLyrics(id) {
    router.push(`/lyrics/edit/${id}`);
  }

  return (
    <>
      <EditButton onClick={() => updateLyrics(song.id)}>
        <Image alt="edit-pen icon" layout="responsive" src={pencilIcon} />
      </EditButton>
      <SongCard key={song.id} title={song.title} lyrics={song.lyrics} />
      <LinkContainer>
        <Link href="/lyrics/collection">
          <BackLink>go back</BackLink>
        </Link>
      </LinkContainer>
    </>
  );
}

const EditButton = styled.button`
  border: 0.1rem solid #7e8e96;
  background-color: transparent;
  border-radius: 11px;
  padding: 3px;
  width: 2.2rem;
  color: white;
  cursor: pointer;
  position: fixed;
  top: 6.4rem;
  right: 3rem;

  &:hover {
    border: 0.1rem dotted #313c4c;
    border-radius: 15px;
    background-color: #ffffff;
  }
`;
