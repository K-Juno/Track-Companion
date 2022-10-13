import Link from 'next/link';
import Form from '../../components/Form';
import {
  PageTitle,
  SubSection,
  CollectionLink,
  CollectionLinkContainer,
} from '../../components/Styling';
import writer from '../../public/writer.svg';

export default function Lyrics({ onAddLyrics }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <SubSection>
        <img
          alt="writer illustration"
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
      <Form onAddLyrics={onAddLyrics} />
    </>
  );
}
