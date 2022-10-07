import Link from 'next/link';
import {
  PageTitle,
  CollectionLink,
  CollectionLinkContainer,
} from '../../../components/Styling';
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
      <CollectionLinkContainer>
        <span>Go to →</span>
        <Link href="/lyrics/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </CollectionLinkContainer>
      <UpdateForm
        onChangeValues={onChangeValues}
        title={song.title}
        lyrics={song.lyrics}
      />
    </>
  );
}
