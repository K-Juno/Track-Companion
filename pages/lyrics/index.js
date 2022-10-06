import Link from 'next/link';
import styled from 'styled-components';
import BackLink from '../../components/BackLink';
import Form from '../../components/Form';

export default function Lyrics({ onAddLyrics }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <LinkContainer>
        <span>Go to →</span>
        <Link href="/lyrics/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </LinkContainer>
      <Form onAddLyrics={onAddLyrics} />
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
  margin: 0;
  cursor: pointer;
`;
