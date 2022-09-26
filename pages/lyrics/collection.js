import Link from 'next/link';
import styled from 'styled-components';
import getAllLyrics from '../../src/services/lyricsService';

export async function getServerSideProps() {
  const lyrics = await getAllLyrics();
  console.log(lyrics, 'GET');

  return {
    props: {
      lyrics: lyrics,
    },
  };
}

export default function Collection({ lyrics }) {
  return (
    <>
      <PageTitle>Lyrics</PageTitle>
      <TitleContainer>
        <SubTitle>ur awesome collection</SubTitle>
      </TitleContainer>
      <ListContainer>
        <li>
          <Link href="/lyrics/example">
            <LyricsTitle>&quot;Bohemian Rhapsody&quot;</LyricsTitle>
          </Link>
        </li>
        {lyrics.map((song) => (
          <li key={song.id}>
            <Link href={`/lyrics/${song.title}`}>
              <LyricsTitle>&quot;{song.title}&quot;</LyricsTitle>
            </Link>
          </li>
        ))}
      </ListContainer>
      <LinkContainer>
        <Link href="/lyrics">
          <LinkTag>go back</LinkTag>
        </Link>
      </LinkContainer>
    </>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 3rem 0;
`;

const SubTitle = styled.h3`
  text-align: center;
  border: 0.1rem solid #7e8e96;
  border-radius: 0.2rem;
  padding: 0.3rem;
  width: fit-content;
  margin: 0;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const LyricsTitle = styled.a`
  padding: 0.3rem;
  width: fit-content;
  margin: 3rem;
  border-radius: 0.2rem;
  color: #dfdfdf;
  background-color: #313c4c;
`;

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
