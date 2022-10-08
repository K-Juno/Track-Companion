import Link from 'next/link';
import styled from 'styled-components';
import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
  BackLink,
  LinkContainer,
} from '../../components/Styling';

export default function Collection() {
  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <SubTitleContainer>
        <SubTitle>Your awesome collection</SubTitle>
      </SubTitleContainer>
      <ListContainer></ListContainer>
      <LinkContainer>
        <Link href="/recordings">
          <BackLink>go back</BackLink>
        </Link>
      </LinkContainer>
    </>
  );
}

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;
