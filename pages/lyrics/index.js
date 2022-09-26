import Link from 'next/link';
import styled from 'styled-components';
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
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 2rem;
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

const CollectionLink = styled(LinkTag)`
  margin-bottom: 0;
`;
