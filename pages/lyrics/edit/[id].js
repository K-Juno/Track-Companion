import Link from 'next/link';
import {
  PageTitle,
  SubSection,
  CollectionLink,
  CollectionLinkContainer,
} from '../../../components/Styling';
import UpdateForm from '../../../components/UpdateForm';
import { getLyricsById } from '../../../services/lyricsService';
import writer from '../../../public/writer.svg';

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
      <SubSection>
        <img
          alt="girl with docs illustration"
          layout="responsive"
          src={writer}
          height={100}
          width={100}
        />
        <CollectionLinkContainer>
          <span>Go to →</span>
          <Link href="/lyrics/collection">
            <CollectionLink>Your awesome collection</CollectionLink>
          </Link>
        </CollectionLinkContainer>
      </SubSection>
      <UpdateForm
        onChangeValues={onChangeValues}
        title={song.title}
        lyrics={song.lyrics}
      />
    </>
  );
}
