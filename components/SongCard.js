import styled from 'styled-components';

export default function SongCard({ title, lyrics }) {
  return (
    <LyricsContainer>
      <NewTitle>&quot;{title}&quot;</NewTitle>
      <NewText style={{ whiteSpace: 'pre-line' }}>{lyrics}</NewText>
    </LyricsContainer>
  );
}

const LyricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
  background-color: #e4e6e8;
  margin: 2rem;
`;

const NewTitle = styled.h4`
  padding: 0.3rem;
  border: 0.1rem solid black;
  width: fit-content;
  margin-top: 1rem;
`;

const NewText = styled.p`
  padding: 0.3rem;
  border: 0.1rem solid black;
  background-color: #e4e6e8;
  width: fit-content;
  height: fit-content;
  min-width: 13rem;
  margin-bottom: 1rem;
`;
