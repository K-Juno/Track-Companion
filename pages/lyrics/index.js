import Link from 'next/link';
import Form from '../../components/Form';
import {
  PageTitle,
  SubSection,
  CollectionLink,
  CollectionLinkContainer,
} from '../../components/Styling';
import styled from 'styled-components';
import writer from '../../public/writer.svg';
import Image from 'next/image';

export default function Lyrics({ onAddLyrics }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <SubSection>
        <Pic>
          <Image
            alt="writer illustration"
            layout="responsive"
            src={writer}
            height={100}
            width={100}
          />
        </Pic>
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

const Pic = styled.div`
  width: 5rem;
  height: 5rem;
`;
