import Link from 'next/link';
import Form from '../../components/Form';
import {
  PageTitle,
  CollectionLink,
  CollectionLinkContainer,
} from '../../components/Styling';

export default function Lyrics({ onAddLyrics }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <CollectionLinkContainer>
        <span>Go to →</span>
        <Link href="/lyrics/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </CollectionLinkContainer>
      <Form onAddLyrics={onAddLyrics} />
    </>
  );
}
