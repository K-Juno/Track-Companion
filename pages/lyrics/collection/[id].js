import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../../components/SongCard';
import { getLyricsById } from '../../../services/lyricsService';
import { BackLink, LinkContainer } from '../../../components/Styling';
import pencilIcon from '../../../public/icon-pencil.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
        <Pencil>
          <Image
            alt="edit-pen icon"
            layout="responsive"
            src={pencilIcon}
            height={100}
            width={100}
          />
        </Pencil>
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
  border: 0;
  background-color: transparent;
  border-radius: 23px;
  padding: 3px;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  position: absolute;
  top: 7.5rem;
  right: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #daecfb;
    border: 1px dotted #c6d5e2;
  }
`;

const Pencil = styled.div`
  width: 2.5rem;
`;
