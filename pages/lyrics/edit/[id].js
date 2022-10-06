import Link from 'next/link';
import styled from 'styled-components';
import BackLink from '../../../components/BackLink';
import UpdateForm from '../../../components/UpdateForm';
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

export default function UpdateLyrics({ onChangeValues, song }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <LinkContainer>
        <span>Go to →</span>
        <Link href="/lyrics/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </LinkContainer>
      <UpdateForm
        onChangeValues={onChangeValues}
        title={song.title}
        lyrics={song.lyrics}
      />
    </>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
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
