import Link from 'next/link';
import styled from 'styled-components';
import SongCard from '../../components/SongCard';

export default function Collection({ lyricsList }) {
  return (
    <>
      {lyricsList.map((lyrics) => {
        return (
          <SongCard
            key={lyrics.id}
            title={lyrics.title}
            lyrics={lyrics.lyrics}
          />
        );
      })}
      <LinkContainer>
        <Link href="/lyrics">
          <LinkTag>go back</LinkTag>
        </Link>
      </LinkContainer>
    </>
  );
}

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
